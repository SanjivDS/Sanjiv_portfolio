export function SectionHeading({ id, eyebrow, title, description }: { id?: string; eyebrow: string; title: string; description?: string }) {
  return (
    <div className="sectionHeading">
      <div>
        <p className="sectionEyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
