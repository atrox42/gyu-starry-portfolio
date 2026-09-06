import { Link } from "react-router-dom";
import { workGroups, worksBridge, type WorkItem } from "../data/portfolio";
import { Reveal } from "./Reveal";

function WorkRow({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Link className="work-row" to={`/work/${item.slug}`}>
      <span className="work-row__index">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <p className="work-row__client">[{item.client}]</p>
        <h3 className="work-row__title">{item.title}</h3>
        {item.tags.length > 0 ? (
          <div className="work-row__tags">
            {item.tags.map((tag) => (
              <span className="pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <span className="work-row__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export function Works() {
  return (
    <section className="section" id="works">
      <div className="shell">
        <Reveal>
          <p className="kicker">03 — Selected Works</p>
          <p className="works__bridge">{worksBridge}</p>
        </Reveal>
        {workGroups.map((group) => (
          <div className="work-group" key={group.id} id={group.id}>
            <Reveal>
              <h2 className="work-group__label">{group.label}</h2>
            </Reveal>
            {group.items.map((item, index) => (
              <WorkRow item={item} index={index} key={item.slug} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
