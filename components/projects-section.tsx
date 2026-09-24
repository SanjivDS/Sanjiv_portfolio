import { projects } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

function ProjectLinks() {
  return (
    <div className="projectLinks" aria-label="Project links unavailable">
      <span aria-disabled="true" title="Project link coming soon">View Project</span>
      <span aria-disabled="true" title="GitHub link coming soon">GitHub</span>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="contentSection projectsSection" id="work" aria-labelledby="work-title">
      <div className="shell">
        <SectionHeading id="work-title" eyebrow="Selected work" title="Machine learning, made useful." description="Projects that frame the problem clearly, choose an appropriate technical approach and keep the result in view." />
        <div className="projectGrid">
          {projects.map((project) => (
            <article className={`projectCard projectCard-${project.layout}`} key={project.title}>
              <div className="projectVisual">
                <img src={project.image} alt={project.imageAlt} loading="lazy" width="1536" height="1024" />
                <span>{project.number}</span>
              </div>
              <div className="projectBody">
                <p className="projectCategory">{project.category}</p>
                <h3>{project.title}</h3>
                <dl className="projectDetails">
                  <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                  <div><dt>Approach</dt><dd>{project.approach}</dd></div>
                  {project.result && <div><dt>Result</dt><dd>{project.result}</dd></div>}
                </dl>
                <div className="tagList" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <ProjectLinks />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
