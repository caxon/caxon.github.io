import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <p>
            Hi, I&apos;m Chris. I do engineering for startups. I like projects
            which border software and some other discipline, like
            computer-generated art, or 3d printing.
          </p>
          <p>for fun I work on bicycles, and rock climb, and draw.</p>
          <p>I&apos;ve previously worked at:</p>
          <ul className="list-disc pl-5">
            <li>
              Leela{" "}
              <a
                className="text-blue-800 hover:text-red-800"
                href="https://leela.ai"
              >
                [link]
              </a>
            </li>
            <li>Multi Technologies, Inc. </li>
            <li>
              Viva Translate{" "}
              <a
                href="https://www.vivatranslate.com/"
                className="text-blue-800 hover:text-red-800"
              >
                [link]
              </a>
            </li>
            <li>
              Copysmith{" "}
              <a
                href="https://copysmith.ai"
                className="text-blue-800 hover:text-red-800"
              >
                [link]
              </a>
            </li>
          </ul>
        </div>
        <div>
          <br />
          <h2 className="mt-2">I use the following technologies:</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>Javascript & Typescript</li>
            <li>Python</li>
            <li>React</li>
            <li>vscode</li>
            <li>Google Compute Platform (GCP)</li>
          </ul>
        </div>
        <br /> <br />
        <div>
          <div className="mb-4">
            And these are some cool people i know with nice websites
          </div>
          <ul className="pl-4">
            <li>
              Marley{" "}
              <a
                className="text-blue-800 hover:text-red-800"
                href="https://marleyx.com"
              >
                [website]
              </a>{" "}
              |{" "}
              <a
                className="text-blue-800 hover:text-red-800"
                href="https://curius.app/"
              >
                [curius]{" "}
              </a>
            </li>
            <li>
              Raffi{" "}
              <a
                className="text-blue-800 hover:text-red-800"
                href="https://www.rhotter.com/"
              >
                [website]
              </a>
            </li>
            <li>
              Liam{" "}
              <a
                className="text-blue-800 hover:text-red-800"
                href="https://www.liamaxon.com/"
              >
                [website]
              </a>{" "}
              |{" "}
              <a
                className="text-blue-800 hover:text-red-800"
                href="https://liamaxon.com/blog"
              >
                [blog]
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Image src="/chris_small.jpeg" width={200} height={200} alt="chris" />
      </div>
    </div>
  );
}
