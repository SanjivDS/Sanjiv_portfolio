import { externalLinks } from '@/data/portfolio';
import { RESUME_PATH } from '@/components/resume-link';

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerInner">
        <div>
          <strong>Sanjiv Motilal Choudhari</strong>
          <span>Data Scientist &amp; AI Engineer</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href={`mailto:${externalLinks.primaryEmail}`}>Email</a>
          <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={externalLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={RESUME_PATH} download>Resume</a>
        </nav>
        <small>© {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
