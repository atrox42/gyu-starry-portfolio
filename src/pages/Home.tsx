import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Highlights } from "../components/Highlights";
import { Intro } from "../components/Intro";
import { Presence } from "../components/Presence";
import { Works } from "../components/Works";

export function Home() {
  return (
    <main id="main">
      <Hero />
      <Intro />
      <Presence />
      <Works />
      <Highlights />
      <Footer />
    </main>
  );
}
