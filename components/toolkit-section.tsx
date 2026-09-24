import { toolkit } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function ToolkitSection() {
  return (
    <section className="contentSection toolkitSection" aria-labelledby="toolkit-title">
      <div className="shell toolkitLayout">
        <SectionHeading
          id="toolkit-title"
          eyebrow="Technical toolkit"
          title="Tools for turning data into working systems."
        />
        <ul className="toolkitList" aria-label="Technical skills">
          {toolkit.map((skill, index) => (
            <li key={skill}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
