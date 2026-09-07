import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { identity } from "../data/portfolio";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

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
            {identity.oneLiner}
          </p>
        </div>
        <div className="hero__meta" data-hero>
          <span>Portfolio / 2026</span>
          <a className="hero__scroll" href="#intro">
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
