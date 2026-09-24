import { publications } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function PublicationsSection() {
  return (
    <section className="contentSection publicationsSection" aria-labelledby="publications-title">
      <div className="shell publicationsLayout">
        <SectionHeading
          id="publications-title"
          eyebrow="Publications"
          title="Research translated into a published system."
        />
        <div className="publicationList">
          {publications.map((publication) => (
            <article className="publicationItem" key={publication.doi}>
              <div className="publicationMeta">
                <span>IEEE conference paper</span>
                <time>{publication.date}</time>
              </div>
              <h3>{publication.title}</h3>
              <p className="publicationAuthors">{publication.authors}</p>
              <p>{publication.description}</p>
              <p className="publicationVenue">{publication.venue}</p>
              <a href={publication.doi} target="_blank" rel="noopener noreferrer">
                View publication <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
