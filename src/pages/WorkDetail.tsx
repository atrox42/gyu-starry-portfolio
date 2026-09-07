import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { WorkLightbox } from "../components/WorkLightbox";
import { findWork, groupLabel, workLabel, workSrc } from "../data/portfolio";

export function WorkDetail() {
  const { slug } = useParams();
  const work = slug ? findWork(slug) : undefined;
  const [index, setIndex] = useState<number | null>(null);

  if (!work) return <Navigate to="/" replace />;

  return (
    <main className="detail" id="main">
      <div className="shell">
        <Link className="detail__back" to="/#works">
          ← Works
        </Link>
        <p className="kicker">{groupLabel(work.group)}</p>
        <p className="detail__client">[{work.client}]</p>
        <h1 className="font-display">{work.title}</h1>
        {work.tags.length > 0 ? (
          <div className="work-card__tags">
            {work.tags.map((tag) => (
              <span className="pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <p className="detail__note">{workLabel(work)}</p>
        <div className="detail__gallery">
          {work.images.map((src, i) => (
            <button
              className="detail__shot"
              type="button"
              key={src}
              onClick={() => setIndex(i)}
            >
              <img src={workSrc(src)} alt={`${workLabel(work)} ${i + 1}`} />
            </button>
          ))}
        </div>
        <a
          className="detail__source"
          href={work.notionUrl}
          target="_blank"
          rel="noreferrer"
        >
          원문 노트
        </a>
      </div>
      {index !== null ? (
        <WorkLightbox
          work={work}
          index={index}
          onClose={() => setIndex(null)}
          onIndex={setIndex}
        />
      ) : null}
    </main>
  );
}
