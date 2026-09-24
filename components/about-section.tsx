import { SectionHeading } from '@/components/section-heading';

export function AboutSection() {
  return (
    <section className="contentSection aboutSection" id="about" aria-labelledby="about-title">
      <div className="shell aboutLayout">
        <SectionHeading id="about-title" eyebrow="About" title="Applied AI with a clear purpose." />
        <div className="aboutCopy">
          <p>
            I work across data science, machine learning and applied AI, with
            projects spanning NLP and LLMs, forecasting, graph-based sports
            analytics and AI-assisted research workflows.
          </p>
          <p>
            My experience also includes data quality, process automation and
            software engineering for academic and enterprise systems.
          </p>
        </div>
      </div>
    </section>
  );
}
