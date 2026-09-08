import {
  presence,
  workSrc,
  type PresenceChannel,
  type PresenceFeatured,
  type PresencePost,
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

function InstagramGrid({
  posts,
  fallbackUrl,
}: {
  posts: readonly PresencePost[];
  fallbackUrl?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <div className="ig-grid" role="list" aria-label="최근 인스타그램 게시물">
      {posts.map((post, index) => {
        const href = post.url || fallbackUrl;
        const className = [
          "ig-grid__cell",
          post.thumb ? "" : "is-empty",
          post.isVideo ? "is-video" : "",
        ]
          .filter(Boolean)
          .join(" ");
        const body = post.thumb ? (
          <img
            src={workSrc(post.thumb)}
            alt=""
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="ig-grid__placeholder"> </span>
        );

        if (!href) {
          return (
            <div className={className} key={post.thumb || index} role="listitem">
              {body}
            </div>
          );
        }

        return (
          <a
            className={className}
            href={href}
            key={post.thumb || href}
            role="listitem"
            target="_blank"
            rel="noreferrer"
            aria-label={
              post.isVideo ? "인스타그램 릴스 보기" : "인스타그램 게시물 보기"
            }
          >
            {body}
          </a>
        );
      })}
    </div>
  );
}

function FeaturedPost({ post }: { post: PresenceFeatured }) {
  return (
    <a
      className="blog-feature"
      href={post.url}
      target="_blank"
      rel="noreferrer"
    >
      {post.thumb ? (
        <span className="blog-feature__cover">
          <img
            src={workSrc(post.thumb)}
            alt=""
            width={743}
            height={743}
            loading="lazy"
            decoding="async"
          />
        </span>
      ) : null}
      <span className="blog-feature__body">
        <span className="blog-feature__title">{post.title}</span>
        {post.excerpt ? (
          <span className="blog-feature__excerpt">{post.excerpt}</span>
        ) : null}
      </span>
    </a>
  );
}

function MoreLink({ channel }: { channel: PresenceChannel }) {
  if (!channel.url) return null;

  return (
    <a
      className="channel__more"
      href={channel.url}
      target="_blank"
      rel="noreferrer"
    >
      {channel.moreLabel ?? "더보기"}
    </a>
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
              {channel.posts ? (
                <InstagramGrid posts={channel.posts} fallbackUrl={channel.url} />
              ) : null}
              {channel.featured ? <FeaturedPost post={channel.featured} /> : null}
              <MoreLink channel={channel} />
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
