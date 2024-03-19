export default function PipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={"h-full"} lang="en">
      <body>{children}</body>
    </html>
  );
}
