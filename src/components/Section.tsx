export default function Section ({ children, id, title }: Readonly<{ children: React.ReactNode, id: string, title: string }>) {
  return (
    <section id = { id }>
      <h2>
        { title }
        <sup>
          <a href = { `#${id}` }>#</a>
        </sup>
      </h2>
      { children }
    </section>
  );
}
