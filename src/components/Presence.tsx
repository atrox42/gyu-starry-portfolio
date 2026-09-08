import {
  presence,
  workSrc,
  type PresenceChannel,
  type PresenceProfile,
} from "../data/portfolio";
import { Reveal } from "./Reveal";

const profileStats = (profile: PresenceProfile) =>
  [
    { label: "Posts", value: profile.posts },
    { label: "Followers", value: profile.followers },
    { label: "Following", value: profile.following },
  ] as const;

function formatCount(value: number): string {
  return value.toLocaleString("en-US");
}

function displayHostPath(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

function ChannelProfile({ channel }: { channel: PresenceChannel }) {
  const profile = channel.profile;
  if (!profile || !channel.url) return null;

  return (
    <div className="ig-profile">
      <div className="ig-profile__header">
        <span className="ig-profile__avatar-wrap">
          <img
            className="ig-profile__avatar"
            src={workSrc(profile.avatar)}
            alt=""
            width={160}
            height={160}
            decoding="async"
          />
        </span>
        <span className="ig-profile__body">
          <span className="ig-profile__name">{profile.displayName}</span>
          <span className="ig-profile__handle">{profile.handle}</span>
          <span className="ig-profile__stats">
            {profileStats(profile).map((stat) => (
              <span className="ig-profile__stat" key={stat.label}>
                <span className="ig-profile__count">{formatCount(stat.value)}</span>
                <span className="ig-profile__label">{stat.label}</span>
              </span>
            ))}
          </span>
          <a
            className="ig-profile__link"
            href={channel.url}
            target="_blank"
            rel="noreferrer"
          >
            {displayHostPath(channel.url)}
          </a>
        </span>
      </div>
    </div>
  );
}

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
              <ChannelProfile channel={channel} />
              {channel.quote ? (
                <p className="quote">“{channel.quote}”</p>
              ) : null}
              <div className="presence__copy">
                {channel.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {channel.url && !channel.profile ? (
                <a
                  className="channel__link"
                  href={channel.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {displayHostPath(channel.url)} ↗
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
