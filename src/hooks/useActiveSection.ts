import { useEffect, useState } from "react";

const VIEWPORT_MARK = 0.3;

export function useActiveSection(
  ids: readonly string[],
  enabled = true,
): string {
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join();

  useEffect(() => {
    if (!enabled) return;

    const list = key.split(",").filter(Boolean);
    const nodes = list
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const update = () => {
      const marker = window.innerHeight * VIEWPORT_MARK;
      let current = list[0] ?? "";
      let closest = Number.POSITIVE_INFINITY;

      for (const node of nodes) {
        const top = node.getBoundingClientRect().top;
        if (top <= marker) {
          const distance = marker - top;
          if (distance < closest) {
            closest = distance;
            current = node.id;
          }
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [key, enabled]);

  return active;
}
