import { press_Start_2P } from "../fonts";

export default function ProjectHeader({ project }: any) {
  return (
    <div>
      <h1 className={`text-5xl font-bold text-white ${press_Start_2P.className}`}>{project.title}</h1>

      <p className="text-lg text-white/80 mt-4">{project.subtitle}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag: string, i: number) => (
          <span key={i}
            className="px-3 py-1 rounded-full bg-white/10 text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-white/50 text-sm mt-2">
        {project.date}
      </p>

      <p className="text-white/70 mt-6 max-w-3xl">{project.description}</p>
    </div>
  );
}
