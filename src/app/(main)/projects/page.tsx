type Project = {
  title: string;
  slug: string;
};

const project_list: Project[] = [
  {
    title: "Pipes Demo",
    slug: "pipes",
  },
  {
    title: "School 2.0",
    slug: "pipes",
  },
  {
    title: "Marauders's App",
    slug: "pipes",
  },
];

export default function Projects() {
  return (
    <>
      <h1 className="text-2xl">Projects</h1>
      <div>Here are a couple of things I&apos;ve made or been a part of:</div>
      <div className="flex flex-row gap-4 flex-wrap">
        {project_list.map((p) => (
          <div key={p.slug} className="w-40 h-40 border-2 border-blue-300">
            <a
              href={`/projects/${p.slug}`}
              className="flex justify-center items-center  w-full h-full "
            >
              {p.title}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
