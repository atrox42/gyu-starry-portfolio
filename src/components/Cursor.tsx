import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const cursor = ref.current;
    if (!cursor || reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("has-cursor");
    const pos = { x: 0, y: 0 };
    const move = (event: PointerEvent) => {
      pos.x = event.clientX;
      pos.y = event.clientY;
      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      const target = event.target as HTMLElement | null;
      const hover = Boolean(target?.closest("a, button"));
      cursor.classList.toggle("is-hover", hover);
    };

    window.addEventListener("pointermove", move);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
    };
  }, [reduced]);

  if (reduced) return null;
  return <div ref={ref} className="cursor" aria-hidden="true" />;
}
