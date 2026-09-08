import type { ReactNode } from "react";
import {
  identity,
  presence,
  workSrc,
  type PresenceArticle,
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

function MoreLink({ href }: { href: string }) {
  return (
    <a
      className="presence__more"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      「더보기」
    </a>
  );
}

function PresenceMedia({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "instagram" | "blog";
  children: ReactNode;
}) {
  return (
    <div className={`presence-media presence-media--${variant}`}>
      <div className="presence-media__frame">
        {children}
        <div className="presence-media__fade" aria-hidden="true" />
      </div>
      <MoreLink href={href} />
    </div>
  );
}

function InstagramGrid({
  posts,
  fallbackUrl,
}: {
  posts: readonly PresenceThumb[];
  fallbackUrl: string;
}) {
  if (posts.length === 0) return null;

  return (
    <div className="presence-grid presence-grid--ig" role="list">
      {posts.map((post, index) => {
        const href = post.url ?? fallbackUrl;
        return (
          <a
            className={
              post.isVideo
                ? "presence-grid__cell is-video"
                : "presence-grid__cell"
            }
            href={href}
            target="_blank"
            rel="noreferrer"
            key={post.thumb}
            role="listitem"
            aria-label={`Instagram 게시물 ${index + 1}`}
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

function BlogGrid({ posts }: { posts: readonly PresenceArticle[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="presence-grid presence-grid--blog" role="list">
      {posts.map((post) => {
        if (!post.thumb) return null;
        return (
          <a
            className="presence-grid__cell"
            href={post.url}
            target="_blank"
            rel="noreferrer"
            key={post.thumb}
            role="listitem"
            aria-label={post.title}
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
              <div
                className={
                  channel.profile
                    ? "channel__profile"
                    : "channel__profile is-empty"
                }
              >
                <ChannelProfile channel={channel} />
              </div>
              <div className="channel__body">
                {channel.posts && channel.posts.length > 0 && channel.url ? (
                  <PresenceMedia
                    href={channel.url}
                    variant="instagram"
                  >
                    <InstagramGrid
                      posts={channel.posts}
                      fallbackUrl={channel.url ?? identity.instagramUrl}
                    />
                  </PresenceMedia>
                ) : null}
                {channel.articles && channel.articles.length > 0 && channel.url ? (
                  <PresenceMedia
                    href={channel.url}
                    variant="blog"
                  >
                    <BlogGrid posts={channel.articles} />
                  </PresenceMedia>
                ) : null}
                {channel.quote ? (
                  <p className="quote">“{channel.quote.trim()}”</p>
                ) : null}
                {channel.paragraphs.length > 0 ? (
                  <div className="presence__copy">
                    {channel.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}
              </div>
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
