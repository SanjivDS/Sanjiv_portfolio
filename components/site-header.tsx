import { ResumeLink } from '@/components/resume-link';

const navigation = [
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'mobileNavLinks' : 'navLinks'}>
      {navigation.map((item) => (
        <a href={item.href} key={item.href}>
          {item.label}
        </a>
      ))}
      <ResumeLink compact />
      <a href="#contact">Contact</a>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <a className="brand" href="#home" aria-label="Sanjiv Motilal Choudhari, home">
          Sanjiv Motilal Choudhari
        </a>

        <nav aria-label="Primary navigation">
          <NavigationLinks />
          <details className="mobileMenu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
            </summary>
            <NavigationLinks mobile />
          </details>
        </nav>
      </div>
    </header>
  );
}
