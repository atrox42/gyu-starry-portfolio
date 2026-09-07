import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type Particle = {
  x: number;
  y: number;
  life: number;
};

const TRAIL_CAP = 36;
const HOVER_SELECTOR = "a, button, .work-card";

function canUseCursor(): boolean {
  return (
    window.matchMedia("(pointer: fine)").matches &&
    window.matchMedia("(hover: hover)").matches &&
    !window.matchMedia("(pointer: coarse)").matches &&
    !window.matchMedia("(max-width: 767px)").matches
  );
}

export function Cursor() {
  const tipRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const tip = tipRef.current;
    const canvas = canvasRef.current;
    if (!tip || !canvas || reduced) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const particles: Particle[] = [];
    let raf = 0;
    let lastX = 0;
    let lastY = 0;
    let hasLast = false;
    let active = false;

    const queries = [
      window.matchMedia("(pointer: fine)"),
      window.matchMedia("(hover: hover)"),
      window.matchMedia("(pointer: coarse)"),
      window.matchMedia("(max-width: 767px)"),
    ];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (x: number, y: number) => {
      particles.push({ x, y, life: 1 });
      if (particles.length > TRAIL_CAP) particles.shift();
    };

    const activate = () => {
      if (active) return;
      active = true;
      document.body.classList.add("has-cursor");
      tip.hidden = false;
      canvas.hidden = false;
    };

    const deactivate = () => {
      if (!active) return;
      active = false;
      document.body.classList.remove("has-cursor");
      tip.hidden = true;
      canvas.hidden = true;
      tip.classList.remove("is-hover");
      particles.length = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      hasLast = false;
    };

    const sync = () => {
      if (canUseCursor()) activate();
      else deactivate();
    };

    const move = (event: PointerEvent) => {
      if (!active) return;
      if (event.pointerType === "touch") return;

      const x = event.clientX;
      const y = event.clientY;
      tip.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const target = event.target as HTMLElement | null;
      tip.classList.toggle(
        "is-hover",
        Boolean(target?.closest(HOVER_SELECTOR)),
      );

      if (hasLast) {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        const steps = Math.min(10, Math.max(1, Math.floor(dist / 7)));
        for (let i = 1; i <= steps; i += 1) {
          const t = i / steps;
          spawn(lastX + dx * t, lastY + dy * t);
        }
      } else {
        spawn(x, y);
      }

      lastX = x;
      lastY = y;
      hasLast = true;
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (active) {
        for (let i = 0; i < particles.length; i += 1) {
          const particle = particles[i];
          particle.life -= 0.042;
          if (particle.life <= 0) continue;
          const radius = 2.2 + particle.life * 4.2;
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 76, 0, ${particle.life * 0.72})`;
          ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        while (particles.length && particles[0].life <= 0) particles.shift();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    sync();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("resize", resize);
    queries.forEach((query) => query.addEventListener("change", sync));
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      deactivate();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("resize", resize);
      queries.forEach((query) => query.removeEventListener("change", sync));
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="cursor-trail"
        hidden
        aria-hidden="true"
      />
      <div ref={tipRef} className="cursor" hidden aria-hidden="true" />
    </>
  );
}
