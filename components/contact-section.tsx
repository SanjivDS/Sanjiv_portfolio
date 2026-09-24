import { externalLinks } from '@/data/portfolio';
import { ResumeLink } from '@/components/resume-link';

export function ContactSection() {
  return (
    <section className="contactSection" id="contact" aria-labelledby="contact-title">
      <div className="shell contactInner">
        <p className="sectionEyebrow">Contact</p>
        <h2 id="contact-title">Let&apos;s build something meaningful.</h2>
        <p className="contactCopy">
          I&apos;m always interested in opportunities to work on challenging problems
          across data science, machine learning and applied AI. If you&apos;d like to
          work together or simply have a conversation, feel free to reach out.
        </p>
        <div className="contactActions">
          <a className="button buttonPrimary" href={`mailto:${externalLinks.primaryEmail}`}>Get in Touch</a>
          <ResumeLink />
        </div>
        <div className="emailList">
          <a className="primaryEmail" href={`mailto:${externalLinks.primaryEmail}`}>{externalLinks.primaryEmail}</a>
          <a href={`mailto:${externalLinks.secondaryEmail}`}>{externalLinks.secondaryEmail}</a>
        </div>
        <div className="contactLinks">
          <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={externalLinks.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
      </div>
    </section>
  );
}
