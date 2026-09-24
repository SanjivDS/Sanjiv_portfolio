import { education } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function EducationSection() {
  return (
    <section className="contentSection educationSection" aria-labelledby="education-title">
      <div className="shell">
        <SectionHeading
          id="education-title"
          eyebrow="Education"
          title="A foundation in data and computer science."
        />
        <div className="educationList">
          {education.map((item) => (
            <article className="educationItem" key={item.institution}>
              <p>{item.date}</p>
              <div>
                <h3>{item.degree}</h3>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.institution} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
