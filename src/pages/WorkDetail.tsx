import { Link, Navigate, useParams } from "react-router-dom";
import { findWork, groupLabel, workLabel } from "../data/portfolio";

export function WorkDetail() {
  const { slug } = useParams();
  const work = slug ? findWork(slug) : undefined;

  if (!work) return <Navigate to="/" replace />;

  return (
    <main className="detail" id="main">
      <div className="shell">
        <Link className="detail__back" to="/#works">
          ← Works
        </Link>
        <p className="kicker">{groupLabel(work.group)}</p>
        <p className="detail__client">[{work.client}]</p>
        <h1>{work.title}</h1>
        {work.tags.length > 0 ? (
          <div className="work-row__tags">
            {work.tags.map((tag) => (
              <span className="pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <p className="detail__note">{workLabel(work)}</p>
      </div>
    </main>
  );
}
