import { awards, certificate, tools } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Highlights() {
  return (
    <section className="section" id="highlights">
      <div className="shell">
        <Reveal>
          <p className="kicker">04 — Highlights</p>
        </Reveal>
        <div className="highlights__grid">
          <Reveal>
            <h3>Award</h3>
            {awards.map((award) => (
              <div className="award" key={`${award.date}-${award.title}`}>
                <p className="award__meta">
                  {award.date} <span className="award__prize">({award.prize})</span>
                </p>
                <p className="award__title">{award.title}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.05}>
            <h3>Used Tool</h3>
            {tools.map((tool) => (
              <div className="tool" key={tool.name}>
                <p className="tool__name">{tool.name}</p>
                <p className="tool__role">{tool.role}</p>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <h3>Certificate</h3>
            <p className="cert">{certificate}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
