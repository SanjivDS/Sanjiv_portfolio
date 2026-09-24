import { achievements } from '@/data/portfolio';
import { SectionHeading } from '@/components/section-heading';

export function AchievementsSection() {
  return (
    <section className="contentSection achievementsSection" aria-labelledby="achievements-title">
      <div className="shell achievementsLayout">
        <SectionHeading
          id="achievements-title"
          eyebrow="Achievements"
          title="Recognition for applied problem-solving."
        />
        <div className="achievementList">
          {achievements.map((achievement) => (
            <article className="achievementItem" key={achievement.title}>
              <div className="achievementMeta">
                <time>{achievement.date}</time>
                <span>{achievement.context}</span>
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
