import { AboutSection } from '@/components/about-section';
import { AchievementsSection } from '@/components/achievements-section';
import { ContactSection } from '@/components/contact-section';
import { ExperienceSection } from '@/components/experience-section';
import { EducationSection } from '@/components/education-section';
import { Hero } from '@/components/hero';
import { ProjectsSection } from '@/components/projects-section';
import { PublicationsSection } from '@/components/publications-section';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ToolkitSection } from '@/components/toolkit-section';

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ToolkitSection />
      <EducationSection />
      <PublicationsSection />
      <AchievementsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
