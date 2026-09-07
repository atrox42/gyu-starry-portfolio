import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll(): void {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
      window.dispatchEvent(new Event("portfolio:scroll"));
    });
    const lock = () => lenis.stop();
    const unlock = () => lenis.start();
    window.addEventListener("portfolio:lock-scroll", lock);
    window.addEventListener("portfolio:unlock-scroll", unlock);
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener("portfolio:lock-scroll", lock);
      window.removeEventListener("portfolio:unlock-scroll", unlock);
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, [reduced]);
}
