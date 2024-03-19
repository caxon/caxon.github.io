"use client";

import Image from "next/image";
import "./pipes.css";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Pipes() {
  const handleScroll = useCallback(() => {
    //
    console.log("SCROLLED!");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const yPos = window.scrollY;
      const root = document.documentElement;
      root.style.setProperty("--pipe1-scroll", `${yPos / 2}`);
      console.log("SETTING YPOS TO ", yPos / 2);
    });
  });

  console.log("RERENDERED");
  return (
    <main className="main">
      <div className="pipes1" />
      <div className="foreground" onScroll={handleScroll}>
        <div onClick={handleScroll}> Click me!</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          placerat erat eget sem egestas, vel pharetra dui bibendum. Ut
          ultricies ut mi non aliquam. Nunc porttitor consectetur nisi nec
          ultricies. Phasellus sollicitudin massa at erat aliquet, a imperdiet
          nisl condimentum. Pellentesque id lorem cursus, dignissim augue eget,
          elementum lorem. Nullam cursus, lectus porttitor imperdiet tempus,
          risus turpis ornare erat, non sagittis lectus nulla vitae nibh.
          Aliquam vel molestie augue. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Pellentesque molestie
          ipsum sed egestas mollis. Nam porta semper urna ac ullamcorper.
          Quisque lacinia imperdiet nisl, eu pretium ex sagittis at. In magna
          leo, faucibus sit amet mi quis, blandit aliquet sem. Pellentesque
          varius nibh quis sollicitudin mattis. Donec vitae tortor ut nibh
          varius convallis. Donec quis fermentum nulla. Nunc eget mauris at orci
          malesuada sollicitudin non vel ex. Morbi arcu tellus, mattis sed
          facilisis nec, posuere non magna. Suspendisse in faucibus lacus, ut
          dictum tortor. Aliquam tempus magna vel euismod imperdiet. Phasellus
          imperdiet molestie est, eget porttitor lacus tristique sed. Maecenas
          bibendum quis quam eget hendrerit. Vestibulum maximus, ex at eleifend
          venenatis, est ipsum tincidunt mauris, vel mattis dolor dui ut diam.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Duis rhoncus suscipit posuere. Integer gravida
          elit a sem aliquam dignissim. Mauris mattis dolor at tellus malesuada
          blandit. Vestibulum eget laoreet risus. Nullam non neque nisl. Ut eu
          nulla dignissim, condimentum nisi eu, convallis tellus. Vestibulum
          malesuada nibh a arcu condimentum, a porta turpis efficitur. Nullam
          vulputate nisi enim, et semper dolor elementum non. Vestibulum tempor
          sed augue quis volutpat. Sed id molestie neque. Sed posuere pretium
          dolor, sit amet iaculis ante blandit nec. Duis euismod ullamcorper
          elit, vel aliquet magna. Vivamus feugiat aliquam ligula, eget
          facilisis est porta sed. Pellentesque diam ex, sagittis eget sagittis
          at, dapibus et libero. Ut id eros vitae sapien porttitor consequat.
          Proin lectus tortor, placerat non quam et, efficitur laoreet mauris.
          Vestibulum quis neque vitae metus vulputate tristique. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Etiam et lacus id odio fermentum ultricies commodo ac eros.
          Integer pellentesque mauris eu posuere ornare. Vivamus dignissim
          luctus eros ut finibus. Sed non commodo arcu, sed semper nibh. Nam
          porttitor ac ipsum eu semper. Quisque in dui faucibus lorem blandit
          pellentesque. Donec ultrices in mauris nec luctus. In id quam mollis,
          aliquam nisl id, pulvinar quam. Donec vitae velit eleifend, sagittis
          erat ut, sollicitudin lacus. Nulla ut lectus purus. Aliquam rhoncus
          massa non nibh elementum, a laoreet magna ultricies. Donec volutpat
          consectetur vulputate. Sed iaculis eget urna luctus mollis. Duis
          aliquam accumsan risus rutrum finibus. Curabitur ornare nisl ut
          tincidunt ultrices. Pellentesque molestie nulla tortor, nec volutpat
          mi ullamcorper vel. Sed eget rutrum sem. Nullam laoreet est eget
          posuere lacinia. Vivamus nec odio nec lorem consectetur tincidunt nec
          vel ante. Sed hendrerit rhoncus vulputate. Phasellus elementum, mi a
          consequat vehicula, massa est luctus lacus, a porta mauris velit vel
          risus. In malesuada, metus non fermentum fringilla, justo ex hendrerit
          libero, sit amet fringilla enim urna nec ante. Aenean orci massa,
          congue eu ante eu, ultricies consequat lectus. Etiam massa libero,
          eleifend ac ornare eget, tincidunt eget nunc. Ut nunc augue, iaculis
          eu tempor ut, dignissim eget mi. Sed et ex aliquet, congue lorem id,
          malesuada dolor. Aenean semper nunc felis, a venenatis leo auctor non.
          Maecenas et ligula et eros accumsan commodo non at diam. Proin commodo
          feugiat lectus. Integer fermentum fermentum odio id volutpat. Sed a
          elementum enim. Quisque quis cursus mi, laoreet pretium nunc. Sed ut
          tellus mattis, scelerisque dolor ac, laoreet purus. Donec enim lorem,
          consectetur sed neque ut, gravida pulvinar turpis. Suspendisse purus
          sapien, posuere in nibh ac, placerat semper ligula. Etiam faucibus
          lacus eu molestie volutpat. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Donec lorem diam,
          tincidunt at metus sollicitudin, varius auctor sapien. Vivamus posuere
          dapibus lacinia. Vivamus tincidunt ex ut tempor ullamcorper.
          Pellentesque vulputate vel mauris gravida euismod. Vivamus lorem
          purus, posuere ac eros ut, pellentesque venenatis orci. Morbi eget
          tellus luctus, vehicula ex sit amet, eleifend enim. Proin in ipsum id
          ligula fringilla scelerisque. Ut lobortis quam lorem, id fermentum
          turpis feugiat sagittis. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Vestibulum diam ligula,
          posuere id augue id, dictum convallis lectus. Ut eget dignissim nisl.
          Fusce molestie tristique nisi, a accumsan nisi rutrum at. Etiam nec
          erat in purus euismod elementum. Vivamus imperdiet erat tellus, eu
          ultrices ex varius sed. Integer orci metus, viverra ut augue non,
          placerat rutrum urna. Praesent consectetur pellentesque urna, eget
          aliquet lorem. Pellentesque dignissim lobortis vulputate. Maecenas id
          vestibulum urna, non lacinia elit. Praesent eu tortor hendrerit,
          ornare eros sed, porta justo. Aliquam lacinia nisi in sapien aliquam,
          sit amet lobortis est faucibus. Nulla vulputate, urna vel accumsan
          tempus, nisi turpis placerat risus, eu ornare felis nisi pharetra
          lacus. Morbi tristique et diam in luctus. Etiam est sapien, sagittis
          vitae magna non, facilisis sollicitudin turpis. Sed eget sapien a
          tortor laoreet vulputate vel vestibulum magna. Quisque ut ligula
          tempus, sodales nibh eget, luctus neque. In in risus lobortis, maximus
          mi vitae, tincidunt quam. In pharetra nec nibh vel luctus. Donec
          porttitor, ante at tincidunt ultrices, purus massa hendrerit erat, nec
          varius enim mauris eget nibh. Fusce malesuada leo sit amet luctus
          tempus. Maecenas a lectus pharetra, dignissim lectus nec, tempor ante.
          Praesent eget erat sed urna lobortis varius nec eget magna. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          tincidunt iaculis. Nulla bibendum lorem volutpat sem feugiat porta.
          Integer tincidunt faucibus tincidunt. Mauris pellentesque posuere
          augue. Aenean cursus malesuada pretium. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae;
          Pellentesque a ipsum id dolor blandit convallis. Praesent et interdum
          arcu. Phasellus at tristique nisi. Nam hendrerit velit ut nisl semper,
          ut pellentesque eros pharetra. Donec purus leo, cursus ac libero ac,
          ornare congue sem. Sed at vehicula dui. Fusce sed nibh pharetra,
          aliquam purus a, convallis libero. Aenean tortor arcu, mattis eget
          condimentum in, porta at leo. Sed dictum nisl id nisi pellentesque
          consectetur ut ac nunc. Quisque nec odio magna. Suspendisse vitae
          consequat velit. Cras vitae sem vel elit porttitor facilisis. Donec
          hendrerit nisi et fermentum elementum. Praesent vulputate molestie
          eros, eu congue quam porttitor eu. Fusce tempus scelerisque
          pellentesque. Phasellus sagittis arcu ac metus consectetur, vitae
          bibendum nisl ornare. Curabitur sit amet sapien ex. Phasellus sit amet
          tortor in purus cursus vehicula. Sed non augue fermentum, sollicitudin
          felis id, cursus sapien. Nullam nulla felis, maximus et purus sed,
          posuere laoreet mauris. Aliquam pellentesque pellentesque lectus.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi
          luctus venenatis metus, ac mollis sapien bibendum et. Nunc felis ex,
          dignissim nec enim non, lacinia semper risus. Integer enim dolor,
          varius nec lobortis ac, scelerisque a lectus. Pellentesque sed erat
          gravida, lobortis orci id, malesuada diam. Donec neque nunc, ornare
          dictum metus mattis, laoreet feugiat dolor. Vestibulum id risus
          congue, finibus ipsum in, tincidunt turpis. Mauris hendrerit sagittis
          facilisis. Curabitur in elementum mi. Quisque id erat diam. Maecenas
          ut velit sit amet elit pellentesque consequat et nec nisl. Vestibulum
          ullamcorper tempor lacinia. Pellentesque at orci euismod libero
          porttitor aliquet sit amet non odio. Nunc porttitor malesuada nunc,
          vel finibus felis. Pellentesque consequat mauris sit amet lorem
          porttitor, euismod tincidunt metus volutpat. Fusce id est enim.
          Quisque ac lobortis nibh. Fusce et ligula elit. Morbi et diam sem.
          Donec hendrerit ut dui ut fermentum. Etiam auctor magna enim, at
          suscipit enim rhoncus vitae. Integer sed ligula vestibulum, volutpat
          tellus sit amet, hendrerit ipsum. Maecenas vitae metus a nunc tempus
          blandit. Maecenas faucibus sagittis lacus ac pretium. In eleifend
          iaculis ligula in venenatis. Pellentesque quis dolor id lacus euismod
          vehicula. Duis quis vulputate tellus. Fusce placerat aliquam varius.
          Mauris imperdiet neque eu metus iaculis sodales et eu nibh. Nunc
          consequat in libero vitae consequat. Vivamus commodo, mauris sed
          dapibus viverra, augue ligula mollis lacus, et sagittis dolor ligula
          ac ipsum. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Suspendisse et erat eu est dictum
          pretium. Donec quis dui purus. Curabitur sed fringilla orci, et
          porttitor velit. Nunc pretium justo ipsum, non maximus eros consequat
          nec. In id tristique enim, ut feugiat ex. Donec eleifend nunc sit amet
          arcu rhoncus vestibulum. Curabitur nec sollicitudin tortor, vitae
          molestie metus. Ut ultricies turpis elit, id tincidunt nunc volutpat
          non. Nullam egestas vehicula mauris, non rutrum ipsum fringilla a.
          Donec egestas congue enim at vehicula. Duis in urna sapien. Donec
          aliquet imperdiet elit, non finibus justo elementum ut. Donec
          fermentum luctus ex, bibendum convallis massa tincidunt id. Mauris
          ante felis, cursus ullamcorper justo nec, aliquet accumsan lectus.
          Cras fringilla ut risus eget facilisis. Etiam sed maximus ipsum. Donec
          vel sem lorem. In pharetra libero a enim dignissim, in molestie arcu
          feugiat. Proin tempor a sapien id vehicula. Quisque ultricies viverra
          rutrum. Suspendisse scelerisque massa vitae nibh suscipit, at
          porttitor nulla luctus. Pellentesque auctor purus a nunc lobortis
          vehicula. In aliquam lectus vel ultricies laoreet. Nam eget justo
          bibendum, tincidunt lacus in, imperdiet ante. Ut nulla tortor,
          facilisis nec dapibus a, rutrum a odio. Aenean semper, libero ac
          pulvinar pulvinar, metus sapien rhoncus felis, aliquet sollicitudin
          orci odio at urna. Nullam molestie, enim vitae viverra euismod, orci
          ante finibus massa, non feugiat turpis diam maximus ante. Etiam vitae
          arcu consectetur, rutrum turpis non, pellentesque arcu. Suspendisse
          vitae urna eu nulla finibus tempus in quis ipsum. Sed malesuada felis
          id nunc tempor facilisis. Sed tincidunt lacus ac dolor mattis, sit
          amet dapibus nunc congue. Aliquam elit dolor, tincidunt id tincidunt
          sit amet, vulputate eu nisi. Pellentesque ullamcorper, libero quis
          malesuada auctor, ante sapien ornare dolor, non sodales ex urna sed
          nulla. Sed augue massa, mollis vitae consequat vel, bibendum eu
          tortor. Nam in nisi tempor, viverra diam semper, vestibulum massa.
          Integer fringilla id metus in cursus. Nullam vitae nisi facilisis,
          eleifend velit eget, ornare magna. Proin ac dolor dui. Ut porta neque
          nunc, et aliquet urna iaculis ultricies. Cras vel ligula faucibus,
          malesuada elit nec, volutpat nunc. Aliquam ipsum ante, molestie at
          risus in, vulputate aliquam purus. Cras viverra feugiat enim nec
          sollicitudin. Etiam sed eros turpis. Curabitur mattis nisi a massa
          malesuada rutrum. Maecenas venenatis nec magna ut eleifend. Nullam non
          scelerisque mauris. Quisque non feugiat eros. Duis faucibus vitae leo
          sodales gravida. Suspendisse rhoncus nibh at felis fringilla, vitae
          ullamcorper augue auctor. Ut ac imperdiet quam. Donec est odio,
          vestibulum nec elit vel, sodales molestie libero. Phasellus ut
          convallis nulla. Nullam magna justo, convallis sed porta vel,
          fringilla sit amet lorem. Quisque sit amet leo sem. Suspendisse sed
          dignissim sem. In ullamcorper ornare purus, non tincidunt turpis
          pellentesque quis. Suspendisse potenti. Pellentesque scelerisque,
          nulla ac finibus auctor, lorem neque ultrices diam, nec rutrum metus
          metus eu elit. Mauris sagittis faucibus felis. Vestibulum sed neque
          vestibulum, interdum justo scelerisque, suscipit metus. Curabitur
          sodales, leo vitae hendrerit sollicitudin, orci purus mattis metus, et
          euismod urna elit vitae sem. Phasellus et odio lacus. Etiam id
          convallis dui. Morbi massa turpis, ultrices ac lobortis quis, ornare a
          nisl. Etiam condimentum neque at nunc consectetur fringilla. Maecenas
          eu velit quis neque aliquet finibus. Ut sed egestas eros, sit amet
          porttitor nulla. Fusce et sollicitudin metus, et gravida risus.
          Maecenas venenatis massa a erat condimentum suscipit. Suspendisse ut
          pharetra magna. Donec nec facilisis metus. Curabitur eros sapien,
          egestas at purus ac, efficitur pharetra urna. Praesent eget libero et
          sapien dignissim efficitur non non neque. Nulla ut nunc sit amet neque
          sagittis lacinia at ut turpis. Nunc nec lectus turpis. Aenean
          tincidunt leo diam, at fringilla lorem posuere sed. Morbi mattis purus
          tellus. Pellentesque vel tempor justo, eget convallis lorem. Nulla id
          ornare magna. Duis sed bibendum purus. Praesent scelerisque ligula
          eros, a faucibus ligula posuere eget. Etiam eget risus rutrum, laoreet
          tellus in, gravida libero. Pellentesque nec tortor mi. Vestibulum et
          sem felis. Sed nisl risus, gravida eu nisi ut, pretium pellentesque
          nisl. Vestibulum mattis nunc sed tellus lobortis pretium. Mauris
          fringilla erat purus, sit amet tincidunt ex pretium a. Nam ultrices et
          neque vel consequat. Sed ornare pharetra fringilla. Nulla nec justo in
          orci ultrices vehicula cursus eget felis. Suspendisse aliquam ac metus
          eget interdum. Fusce hendrerit iaculis sem. Vestibulum mattis semper
          tristique. Suspendisse vel lacinia metus. Etiam porta, quam sed
          sagittis tincidunt, ex nibh ultrices diam, vitae iaculis nisi velit
          eget dui. Donec faucibus viverra orci, a varius dui consequat id. Sed
          eu leo vel massa blandit viverra. Fusce imperdiet commodo hendrerit.
          Sed congue quam ut nulla ultricies tempus eget quis magna. Morbi
          dapibus volutpat eros ac porta. Praesent vestibulum, quam sed
          consequat ultricies, diam sem dapibus arcu, nec vehicula sem urna id
          orci. Nulla commodo eros magna.
        </p>
        <div>boo</div>
      </div>
    </main>
  );
}
