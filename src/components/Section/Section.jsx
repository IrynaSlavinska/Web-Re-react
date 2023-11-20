function Section({ title, children }) {
  return (
    <section>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
