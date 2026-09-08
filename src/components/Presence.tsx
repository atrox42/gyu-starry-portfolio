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

function InstagramGrid({
  posts,
  fallbackUrl,
}: {
  posts: readonly PresenceThumb[];
  fallbackUrl: string;
}) {
  if (posts.length === 0) return null;

  return (
    <div className="ig-grid" role="list">
      {posts.map((post, index) => {
        const href = post.url ?? fallbackUrl;
        return (
          <a
            className={post.isVideo ? "ig-grid__cell is-video" : "ig-grid__cell"}
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

function BlogPostCard({ post }: { post: PresenceArticle }) {
  return (
    <a
      className="blog-post"
      href={post.url}
      target="_blank"
      rel="noreferrer"
    >
      {post.thumb ? (
        <span className="blog-post__cover">
          <img
            src={workSrc(post.thumb)}
            alt=""
            width={1080}
            height={1080}
            loading="lazy"
            decoding="async"
          />
        </span>
      ) : null}
      <span className="blog-post__body">
        <span className="blog-post__kicker">최근 글</span>
        <span className="blog-post__title font-display">{post.title}</span>
        {post.excerpt ? (
          <span className="blog-post__excerpt">{post.excerpt}</span>
        ) : null}
        <span className="presence__more">「더보기」</span>
      </span>
    </a>
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
              {channel.posts && channel.posts.length > 0 ? (
                <InstagramGrid
                  posts={channel.posts}
                  fallbackUrl={channel.url ?? identity.instagramUrl}
                />
              ) : null}
              {channel.id === "instagram" && channel.url ? (
                <MoreLink href={channel.url} />
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
              {channel.featuredPost ? (
                <BlogPostCard post={channel.featuredPost} />
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
