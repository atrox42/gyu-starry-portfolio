import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { identity, workSrc } from "../data/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const LEAD_KEEP = "(BI/비주얼 가이드)";
const LEAD_PHRASE_BREAK = "설계하고,";

function renderHeroLead(text: string) {
  const keepAt = text.indexOf(LEAD_KEEP);
  const breakAt = text.indexOf(LEAD_PHRASE_BREAK);
  if (keepAt === -1 || breakAt === -1) return text;

  const afterBreak = breakAt + LEAD_PHRASE_BREAK.length;
  return (
    <>
      {text.slice(0, afterBreak)}
      <br className="hero__lead-break" />
      {text.slice(afterBreak, keepAt)}
      <span className="hero__lead-keep">{LEAD_KEEP}</span>
      {text.slice(keepAt + LEAD_KEEP.length)}
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll("[data-hero]"),
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.15,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.12,
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="hero" id="hero" ref={ref} aria-label="Hero">
      {!reduced && (
        <div className="hero__media" aria-hidden="true">
          <video
            className="hero__video"
            src={workSrc("hero/bg-loop.mp4")}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
          />
          <div className="hero__scrim" />
        </div>
      )}
      <div className="shell">
        <div className="hero__content">
          <p className="hero__handle" data-hero>
            {identity.handle}
          </p>
          <h1 className="hero__title font-display" data-hero>
            <em>UiuX 디자이너,</em>
            <span>{identity.name}</span>
          </h1>
          <div className="hero__rule" data-hero />
          <p className="hero__lead" data-hero>
            {renderHeroLead(identity.oneLiner)}
          </p>
        </div>
        <div className="hero__meta" data-hero>
          <span>Portfolio / {identity.year}</span>
          <a className="hero__scroll" href="#intro">
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
