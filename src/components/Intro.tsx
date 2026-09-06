import { focusAreas, intro } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Intro() {
  const lead = intro.lead.replace(intro.leadEmphasis, "");
  const brand = intro.paragraphs[1];
  const brandBefore = brand.slice(0, brand.indexOf(intro.brandEmphasis));
  const brandAfter = brand.slice(
    brand.indexOf(intro.brandEmphasis) + intro.brandEmphasis.length,
  );

  return (
    <section className="section" id="intro">
      <div className="shell">
        <Reveal>
          <p className="kicker">01 — Intro / Focus</p>
          <p className="intro__lead font-display">
            {intro.greeting}
            <br />
            <em className="mark">{intro.leadEmphasis}</em>
            {lead}
          </p>
          <div className="intro__copy">
            <p>{intro.paragraphs[0]}</p>
            <p>
              {brandBefore}
              <em className="mark">{intro.brandEmphasis}</em>
              {brandAfter}
            </p>
          </div>
        </Reveal>

        <div className="focus">
          {focusAreas.map((area, index) => (
            <Reveal key={area.id} className="focus__item" delay={index * 0.05}>
              <span className="focus__index">
                0{index + 1}
              </span>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="what">
          <p className="kicker">What I do</p>
          {intro.whatIDo.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
