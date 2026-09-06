# @gyu.starry portfolio

문규석(UiuX 디자이너)의 공개 포트폴리오. 원티드·리멤버 등 채용 플랫폼에 넣을 링크용입니다.

## Local

```bash
npm install
npm run dev
```

개발 서버는 Vite 기본 포트에서 열립니다. GitHub Pages와 같은 경로를 쓰므로 로컬에서도 `/gyu-starry-portfolio/` 아래에서 확인합니다.

```bash
npm run build
npm run preview
```

`preview`는 배포본과 동일한 `base` 경로로 정적 빌드를 띄웁니다.

## Deploy (GitHub Pages)

권장 URL: `https://atrox42.github.io/gyu-starry-portfolio/`

1. 이 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정합니다.
2. `main`에 머지하면 `.github/workflows/deploy.yml`이 `npm ci && npm run build` 후 Pages에 올립니다.
3. 첫 배포 후 위 URL을 원티드/리멤버 포트폴리오 칸에 넣으면 됩니다.

`vite.config.ts`의 `base`는 `/gyu-starry-portfolio/`입니다. 저장소 이름이 바뀌면 이 값을 함께 바꾸세요.

다른 정적 호스팅(Netlify, Cloudflare Pages, 자체 서버)은 `npm run build` 결과물인 `dist/`만 올리면 됩니다. 루트 도메인에 올릴 때는 `base`를 `/`로 바꾸세요.

## Content

카피·작품 목록은 `src/data/portfolio.ts`에만 있습니다. Notion 원문(`@gyu.starry`)과 맞춰 두었고, 화면 캡처·수치·없는 프로젝트는 넣지 않았습니다.

## Stack

Vite · React · TypeScript · GSAP ScrollTrigger · Lenis
