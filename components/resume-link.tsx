import { DownloadIcon } from 'lucide-react';

export const RESUME_PATH = '/Resume_Sanjiv_DS.pdf';

type ResumeLinkProps = {
  className?: string;
  compact?: boolean;
};

export function ResumeLink({ className = '', compact = false }: ResumeLinkProps) {
  return (
    <a
      className={`${compact ? 'resumeLinkCompact' : 'button buttonSecondary'} ${className}`.trim()}
      href={RESUME_PATH}
      download
    >
      {!compact && <DownloadIcon aria-hidden="true" size={17} />}
      {compact ? 'Resume' : 'Download Resume'}
    </a>
  );
}
