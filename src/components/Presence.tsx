import {
  identity,
  presence,
  workSrc,
  type PresenceChannel,
  type PresenceProfile,
  type PresenceThumb,
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

function ChannelProfile({ channel }: { channel: PresenceChannel }) {
  const profile = channel.profile;
  if (!profile) return null;

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
        </span>
      </div>
    </div>
  );
}

function MediaGrid({
  posts,
  fallbackUrl,
  columns,
}: {
  posts: readonly PresenceThumb[];
  fallbackUrl: string;
  columns: 2 | 3;
}) {
  return (
    <div
      className={
        columns === 2
          ? "presence-media presence-media--2"
          : "presence-media presence-media--3"
      }
      role="list"
    >
      {posts.map((post, index) => {
        const href = post.url ?? fallbackUrl;
        const label = post.title ?? `게시물 ${index + 1}`;
        return (
          <a
            className={
              post.isVideo
                ? "presence-media__cell is-video"
                : "presence-media__cell"
            }
            href={href}
            target="_blank"
            rel="noreferrer"
            key={post.thumb}
            role="listitem"
            aria-label={label}
          >
            <img
              src={workSrc(post.thumb)}
              alt=""
              width={1080}
              height={1080}
              loading="lazy"
              decoding="async"
            />
          </a>
        );
      })}
    </div>
  );
}

function ChannelStage({
  posts,
  url,
  columns,
}: {
  posts: readonly PresenceThumb[];
  url: string;
  columns: 2 | 3;
}) {
  return (
    <div className="channel__stage">
      <MediaGrid posts={posts} fallbackUrl={url} columns={columns} />
      <a
        className="presence__more"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        「더보기」
      </a>
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
          {presence.channels.map((channel: PresenceChannel) => {
            const columns = channel.id === "blog" ? 2 : 3;
            const fallback =
              channel.url ??
              (channel.id === "blog"
                ? identity.blogUrl
                : identity.instagramUrl);

            return (
              <Reveal key={channel.id} className={`channel channel--${channel.id}`}>
                <h3>{channel.label}</h3>
                <div className="channel__mast">
                  <ChannelProfile channel={channel} />
                  {!channel.profile && channel.paragraphs.length > 0 ? (
                    <div className="presence__copy">
                      {channel.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
                {channel.posts && channel.posts.length > 0 ? (
                  <ChannelStage
                    posts={channel.posts}
                    url={fallback}
                    columns={columns}
                  />
                ) : null}
                <div className="channel__below">
                  {channel.quote ? (
                    <p className="quote">“{channel.quote.trim()}”</p>
                  ) : null}
                  {channel.profile && channel.paragraphs.length > 0 ? (
                    <div className="presence__copy">
                      {channel.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
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
