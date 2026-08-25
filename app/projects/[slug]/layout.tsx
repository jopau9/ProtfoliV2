export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // El fons i la tipografia ja vénen del layout arrel; aquí només acotem el flux.
  return <div className="relative">{children}</div>;
}
