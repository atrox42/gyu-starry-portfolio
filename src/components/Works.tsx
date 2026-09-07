import { useState } from "react";
import {
  workGroups,
  workSrc,
  worksBridge,
  type WorkItem,
} from "../data/portfolio";
import { Reveal } from "./Reveal";
import { WorkLightbox } from "./WorkLightbox";

function WorkCard({
  item,
  onOpen,
}: {
  item: WorkItem;
  onOpen: () => void;
}) {
  const cover = workSrc(item.thumb);

  return (
    <button
      className="work-card"
      type="button"
      onClick={onOpen}
      aria-label={`${item.client} ${item.title} 보기`}
    >
      <span className="work-card__cover">
        <img src={cover} alt="" loading="lazy" decoding="async" />
      </span>
      <span className="work-card__body">
        <span className="work-card__client">[{item.client}]</span>
        <span className="work-card__title font-display">{item.title}</span>
        {item.tags.length > 0 ? (
          <span className="work-card__tags">
            {item.tags.map((tag) => (
              <span className="pill" key={tag}>
                {tag}
              </span>
            ))}
          </span>
        ) : null}
      </span>
    </button>
  );
}

export function Works() {
  const [open, setOpen] = useState<{ slug: string; index: number } | null>(
    null,
  );
  const active = open
    ? workGroups.flatMap((group) => group.items).find((item) => item.slug === open.slug)
    : undefined;

  return (
    <section className="section" id="works">
      <div className="shell">
        <Reveal>
          <p className="kicker">03 — Selected Works</p>
          <p className="works__bridge font-display">{worksBridge}</p>
        </Reveal>
        {workGroups.map((group) => (
          <div className="work-group" key={group.id} id={group.id}>
            <Reveal>
              <h2 className="work-group__label">{group.label}</h2>
            </Reveal>
            <div className="work-grid">
              {group.items.map((item) => (
                <WorkCard
                  item={item}
                  key={item.slug}
                  onOpen={() => setOpen({ slug: item.slug, index: 0 })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {active && open ? (
        <WorkLightbox
          work={active}
          index={open.index}
          onClose={() => setOpen(null)}
          onIndex={(index) => setOpen({ slug: active.slug, index })}
        />
      ) : null}
    </section>
  );
}
