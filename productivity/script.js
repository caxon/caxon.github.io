"use strict";
console.log("LOADING")
$(function() {

	let current_task = null;
	let queue = []

	let log = $("#log").get(0)
	let input_name = $("#input_name").get(0)
	let input_time = $("#input_time").get(0)
	let progress_bar = $("#my_bar").get(0)
	let task_info = $("#task_info").get(0)
	let entry_error = $("#entry_error").get(0)
	let time_remaining_info = $("#time_remaining").get(0)

	let submit_button = $("#submit_button").get(0)
	let add_break_button = $("#add_break_button").get(0)
	let clear_task_button = $("#clear_task").get(0)

	let currently_updating = false

	// time limit in seconds
	function Task(name, time_limit){
		this.name = name;
		this.time_limit = time_limit;
		this.start_time = null;
		this.color = "#27e627"
	}

	Task.prototype.start = function(){
		this.start_time = new Date();
		console.log("starting new task "+ this.name)
	}

	function addBreakButton(){
		let new_task = addTaskToQueue("5 minute break", 300)
		new_task.color = "#112ff0"
	}

	function clearTaskButton(){
		shiftQueue()
	}

	function submitButton(){
		let name = input_name.value;
		// mins default
		let time_limit = parseInt(input_time.value, 10) *60;

		console.log(input_time.value[input_time.length-1])

		if (input_time.value[input_time.value.length-1] == "s"){
			input_time.value = input_time.value.slice(0,input_time.value.length-1)
			time_limit = parseInt(input_time.value, 10) ;

		}
		else{ //parse in minutes by default
		}

		if (name == "" || isNaN(time_limit)){
			entry_error.innerHTML = "Enter a name and a valid number of integers"
			return
		}

		input_name.value = ""
		input_time.value = ""
		entry_error.innerHTML = "<br>"
		addTaskToQueue(name, time_limit)
		input_name.focus()
	}

	// creates new task and returns it
	function addTaskToQueue(name, time_limit){
		let new_task = new Task(name, time_limit)
		queue.push(new_task)
		if (current_task == null){
			shiftQueue()
		}
		return new_task
	}

	function updateBar(percent){
		// console.log("updating " + percent);
		// console.log(progress_bar)
		if(current_task){
			progress_bar.style.backgroundColor = current_task.color;
		}
		progress_bar.style.width = percent + "%";
	}

	function shiftQueue(){
		if (queue.length < 1){
			current_task = null;
			task_info.innerHTML="Last task finished.";
			time_remaining_info.innerHTML= "Time remaining: 0 seconds";

			updateBar(0);
			return;
		}

		let new_current_task = queue.shift()
		new_current_task.start();
		current_task = new_current_task;
		task_info.innerHTML="Current task: <font color=\"blue\"><b>" +current_task.name+"</b></font>";

	}

	/**
	 *	Returns the a string representing the number of minutes remaining or seconds if less than 1 minute.
	 * @param {*} seconds_input
	 */
	function prettyTime(seconds_input, seconds_integer=false){
		if (seconds_input >= 60){
			let mins = parseInt(seconds_input/60)
			let seconds = parseInt(seconds_input % 60).toString(10).padStart(2,"0")
			return `${mins}:${seconds}`
		}
		else if (seconds_integer){
			return `${Math.ceil(seconds_input)} seconds`
		}

		else{
		 return `${parseFloat(seconds_input).toFixed(1)} seconds`
		}

	}

	//NOTE: get better audio
	function playAudio(path="audio/atone.mp3"){
		// console.log("playing");
		let audio = new Audio(path);
		audio.play();
	}

	function showQueue(){
		let building_list  = "";
		if (current_task != null){
			building_list +=
			"<li><b><font color=\"#AC16D8\"> " +
			current_task.name +" (" + prettyTime(current_task.time_limit, true) +
			")</font></b></li>"
		}
		for (let i = 0; i < queue.length; i++){
			building_list += "<li>"+queue[i].name +" (" + prettyTime(queue[i].time_limit, true)+ ")</li>"
		}
		log.innerHTML = building_list;
	}

	function tick(){
		// console.log(current_task)
		showQueue()

		if (current_task==null){
			return;
		}

		let now = new Date();
		let delta_time = (now-current_task.start_time)/1000
		let remaining_time = current_task.time_limit - delta_time
		// console.log("TIME REMAINING: " + (current_task.time_limit - delta_time))

		// current task has expired
		if (delta_time > current_task.time_limit){
			console.log("task died")
			shiftQueue()
			playAudio()
			if (current_task==null){
				playAudio("/audio/chime.mp3")
			}
		}

		if (current_task != null){
			updateBar(delta_time/current_task.time_limit*100)
			time_remaining_info.innerHTML= "Time remaining: " + prettyTime(remaining_time)
		}


	}

	// start updating every 1s
	setInterval(() => {
		tick();

	}, 1000/60);

	console.log("LOADED");

	input_time.addEventListener("keyup", (event) =>{
		if (event.keyCode===13){
			event.preventDefault();
			submit_button.click();
		}
	});
	submit_button.addEventListener("click", submitButton);
	add_break_button.addEventListener("click", addBreakButton);
	clear_task_button.addEventListener("click", clearTaskButton);



}
)


