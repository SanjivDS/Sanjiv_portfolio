import { experience } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function ExperienceSection() {
  return (
    <section className="contentSection experienceSection" id="experience" aria-labelledby="experience-title">
      <div className="shell">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Work shaped by data and systems." description="Applied data science, analytics and software engineering across mission-driven, academic and enterprise environments." />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={`${item.organization}-${item.date}`}>
              <div className="timelineMeta">
                <time>{item.date}</time>
                <span>{item.location}</span>
              </div>
              <div className="timelineBody">
                <p className="timelineOrganization">{item.organization}</p>
                <h3>{item.role}</h3>
                <ul className={item.placeholder ? 'placeholderBullets' : undefined}>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="tagList" aria-label={`${item.organization} technologies`}>
                  {item.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
