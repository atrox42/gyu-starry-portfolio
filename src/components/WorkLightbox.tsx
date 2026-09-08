import { useEffect, useRef } from "react";
import { workLabel, workSrc, type WorkItem } from "../data/portfolio";

type WorkLightboxProps = {
  work: WorkItem;
  index: number;
  onClose: () => void;
  onIndex: (index: number) => void;
};

export function WorkLightbox({
  work,
  index,
  onClose,
  onIndex,
}: WorkLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const images = work.images;
  const current = images[index];
  const total = images.length;

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new Event("portfolio:lock-scroll"));
    return () => {
      document.body.style.overflow = prev;
      window.dispatchEvent(new Event("portfolio:unlock-scroll"));
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && total > 1) {
        onIndex((index + 1) % total);
      }
      if (event.key === "ArrowLeft" && total > 1) {
        onIndex((index - 1 + total) % total);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, onClose, onIndex, total]);

  useEffect(() => {
    frameRef.current?.scrollTo(0, 0);
  }, [index]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={workLabel(work)}
    >
      <button
        className="lightbox__backdrop"
        type="button"
        aria-label="닫기"
        onClick={onClose}
      />
      <div className="lightbox__bar">
        <div>
          <p className="lightbox__client">[{work.client}]</p>
          <h2 className="lightbox__title font-display">{work.title}</h2>
        </div>
        <button
          ref={closeRef}
          className="lightbox__close"
          type="button"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
      <div className="lightbox__stage">
        {total > 1 ? (
          <button
            className="lightbox__nav lightbox__nav--prev"
            type="button"
            aria-label="이전 이미지"
            onClick={() => onIndex((index - 1 + total) % total)}
          >
            ←
          </button>
        ) : null}
        <div className="lightbox__frame" ref={frameRef}>
          {current ? (
            <img src={workSrc(current)} alt={`${workLabel(work)} ${index + 1}`} />
          ) : (
            <div className="lightbox__empty">이미지가 곧 올라옵니다.</div>
          )}
        </div>
        {total > 1 ? (
          <button
            className="lightbox__nav lightbox__nav--next"
            type="button"
            aria-label="다음 이미지"
            onClick={() => onIndex((index + 1) % total)}
          >
            →
          </button>
        ) : null}
      </div>
      <div className="lightbox__meta">
        {total > 0 ? (
          <p className="lightbox__count">
            {index + 1} / {total}
          </p>
        ) : null}
        {work.tags.length > 0 ? (
          <div className="work-card__tags">
            {work.tags.map((tag) => (
              <span className="pill" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <a
          className="lightbox__source"
          href={work.notionUrl}
          target="_blank"
          rel="noreferrer"
        >
          원문 노트
        </a>
      </div>
      {total > 1 ? (
        <div className="lightbox__thumbs" role="tablist">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={
                i === index
                  ? "lightbox__thumb is-active"
                  : "lightbox__thumb"
              }
              aria-label={`${i + 1}번째 이미지`}
              onClick={() => onIndex(i)}
            >
              <img src={workSrc(src)} alt="" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
