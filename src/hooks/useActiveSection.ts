import { useEffect, useState } from "react";
import { gsap } from "gsap";

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

    const update = () => {
      const nodes = list
        .map((id) => document.getElementById(id))
        .filter((node): node is HTMLElement => Boolean(node));
      if (nodes.length === 0) return;

      const marker = window.innerHeight * VIEWPORT_MARK;
      let current = list[0] ?? "";

      for (const node of nodes) {
        if (node.getBoundingClientRect().top <= marker) {
          current = node.id;
        }
      }

      const last = nodes[nodes.length - 1];
      if (last) {
        const root = document.scrollingElement ?? document.documentElement;
        const atBottom =
          last.getBoundingClientRect().bottom <= window.innerHeight + 8 ||
          root.scrollTop + window.innerHeight >= root.scrollHeight - 8;
        if (atBottom && last.getBoundingClientRect().top < window.innerHeight) {
          current = last.id;
        }
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    update();
    gsap.ticker.add(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("portfolio:scroll", update);
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("portfolio:scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, [key, enabled]);

  return active;
}
