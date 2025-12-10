export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      {/* FONS NEGRE A TOTA LA PANTALLA */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* CONTINGUT */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
