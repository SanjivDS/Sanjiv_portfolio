import { ResumeLink } from '@/components/resume-link';
import { SocialLinks } from '@/components/social-links';

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="shell heroInner">
        <p className="eyebrow">Available for new opportunities</p>

        <h1 id="hero-title">
          <span>Sanjiv Motilal Choudhari</span>
          Data Scientist &amp; AI Engineer.
        </h1>

        <p className="heroDescription">
          I build machine learning and AI systems that turn complex data into
          useful, measurable solutions — from NLP and LLMs to forecasting and
          graph-based sports analytics.
        </p>

        <div className="heroActions" aria-label="Portfolio links">
          <a className="button buttonPrimary" href="#work">
            View Projects
          </a>
          <ResumeLink />
          <SocialLinks compact />
        </div>
      </div>
    </section>
  );
}
