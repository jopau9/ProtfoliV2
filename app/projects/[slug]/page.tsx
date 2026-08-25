import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../content/projects";
import ProjectDetail from "../ProjectDetail";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "404" };

  return {
    title: project.title.ca,
    description: project.subtitle.ca,
    openGraph: {
      title: project.title.ca,
      description: project.subtitle.ca,
      ...(project.images ? { images: [project.images[0]] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
