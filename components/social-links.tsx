import { externalLinks } from '@/data/portfolio';

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'socialIcons socialIconsCompact' : 'socialIcons'} aria-label="Social profiles">
      <a href={externalLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
        <span aria-hidden="true">GH</span>
      </a>
      <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
        <span aria-hidden="true">in</span>
      </a>
    </div>
  );
}
