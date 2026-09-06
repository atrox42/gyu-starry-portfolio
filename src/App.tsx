import { Route, Routes } from "react-router-dom";
import { Cursor } from "./components/Cursor";
import { Grain } from "./components/Grain";
import { Nav } from "./components/Nav";
import { Progress } from "./components/Progress";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Home } from "./pages/Home";
import { WorkDetail } from "./pages/WorkDetail";

export function App() {
  useSmoothScroll();

  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <Grain />
      <Cursor />
      <Progress />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </>
  );
}
