import { presence } from "../data/portfolio";
import { Reveal } from "./Reveal";

export function Presence() {
  return (
    <section className="section" id="presence">
      <div className="shell">
        <Reveal>
          <p className="kicker">02 — Presence</p>
        </Reveal>
        <div className="presence__grid">
          {presence.channels.map((channel) => (
            <Reveal key={channel.id} className="channel">
              <h3>{channel.label}</h3>
              {channel.quote ? (
                <p className="quote">“{channel.quote}”</p>
              ) : null}
              <div className="presence__copy">
                {channel.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {channel.url ? (
                <a
                  className="channel__link"
                  href={channel.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {channel.url.replace("https://", "")} ↗
                </a>
              ) : null}
            </Reveal>
          ))}
        </div>
        <Reveal className="why">
          <p className="kicker">Why it matters</p>
          {presence.whyItMatters.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
