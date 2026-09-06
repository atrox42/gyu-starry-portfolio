export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type FocusArea = {
  id: string;
  title: string;
  body: string;
};

export type PresenceChannel = {
  id: string;
  label: string;
  url?: string;
  quote?: string;
  paragraphs: readonly string[];
};

export type WorkGroup = "recent" | "uiux" | "bibx";

export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  group: WorkGroup;
  tags: readonly string[];
};

export type Award = {
  date: string;
  prize: string;
  title: string;
};

export type Tool = {
  name: string;
  role: string;
};

export type WorkGroupMeta = {
  id: WorkGroup;
  label: string;
  items: WorkItem[];
};

export const identity = {
  name: "문규석",
  handle: "@gyu.starry",
  heroTitle: "UiuX 디자이너, 문규석",
  role: "UiuX 디자이너",
  oneLiner:
    "제품 경험과 브랜드 경험을 함께 설계하고, 브랜딩(BI/시각 시스템)까지 연결할 수 있는 UX/UI 디자이너",
  email: "atrox42@gmail.com",
  instagramUrl: "https://www.instagram.com/gyu.starry/",
  year: 2026,
  illustrationCredit: {
    label: "Open Peeps",
    url: "https://www.openpeeps.com/",
  },
} as const;

export const navItems: NavItem[] = [
  { id: "intro", label: "Intro", href: "#intro" },
  { id: "presence", label: "Presence", href: "#presence" },
  { id: "works", label: "Works", href: "#works" },
  { id: "highlights", label: "Highlights", href: "#highlights" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const intro = {
  greeting: "안녕하세요.",
  lead: "제품 경험과 브랜드 경험을 함께 설계하고, 브랜딩(BI/시각 시스템)까지 연결할 수 있는 UX/UI 디자이너입니다.",
  leadEmphasis:
    "제품 경험과 브랜드 경험을 함께 설계하고, 브랜딩(BI/시각 시스템)까지 연결할 수 있는 UX/UI 디자이너",
  paragraphs: [
    "운영 어드민, 키오스크, 앱 등 다양한 접점에서 사용자 흐름과 UI 기준을 일관되게 설계합니다.",
    "브랜드가 채널별로 흔들리지 않도록 톤앤매너와 UI 스타일 기준을 정리하고, 디자인 시스템으로 재사용 가능한 구조를 만드는 작업을 해왔습니다.",
  ],
  brandEmphasis:
    "톤앤매너와 UI 스타일 기준을 정리하고, 디자인 시스템으로 재사용 가능한 구조를 만드는 작업",
  whatIDo: [
    "복잡한 운영 상황에서도 화면과 규칙이 흔들리지 않도록 기준을 만들고, 팀이 재사용할 수 있는 형태로 남깁니다.",
    "기획, 개발, 운영과 협업하며 화면의 기준과 예외 케이스를 정리해, 운영 중 혼선을 줄이는 방향으로 개선합니다.",
  ],
} as const;

export const focusAreas: FocusArea[] = [
  {
    id: "brand",
    title: "Brand/BI",
    body: "톤앤매너, 시각 언어, 브랜드 적용 가이드 정리.",
  },
  {
    id: "system",
    title: "Design System",
    body: "UI 표준화, 컴포넌트 및 패턴 라이브러리 운영.",
  },
  {
    id: "ops",
    title: "Ops/Admin UX",
    body: "입력·검수·예외 처리 흐름 단순화, 운영 효율 개선.",
  },
  {
    id: "kiosk",
    title: "Kiosk/Accessibility",
    body: "가독성, 고대비, 다양한 화면 대응을 고려한 리팩토링.",
  },
];

export const presence = {
  whyItMatters: [
    "인스타와 블로그를 운영하면서, 전달하고 싶은 메시지를 짧고 명확하게 정리하는 습관이 생겼습니다.",
    "톤앤매너를 유지하며 콘텐츠를 쌓아가는 과정이, 제품에서도 기준을 만들고 일관성을 지키는 방식과 닮아 있습니다.",
  ],
  channels: [
    {
      id: "instagram",
      label: "Instagram",
      url: identity.instagramUrl,
      quote: " 아마도 50대에는 오지의 탐험가가 되어있을 거 같은데요? ",
      paragraphs: [
        "ACG와 등산 및 트래킹 트레일 러닝을 중심으로 스타일링과 정보 정리를 꾸준히 기록합니다.",
        "한 장의 이미지에서 메시지가 명확히 전달되도록 구성, 톤앤매너, 시각 요소의 일관성을 유지하는 방식으로 운영합니다.",
      ],
    },
    {
      id: "blog",
      label: "Blog",
      paragraphs: [
        "ACG 패션 스타일링, 상품 리뷰, 등산/트레킹 기록을 운영합니다.",
        "단순 후기보다는 제품 특징과 활용 상황을 정리해, 독자가 빠르게 판단할 수 있는 형태로 콘텐츠를 구성합니다.",
      ],
    },
  ] satisfies PresenceChannel[],
} as const;

export const worksBridge = "잠… 잠시만! 최근 작업물에 관심이 많군요!";

export const works: WorkItem[] = [
  {
    slug: "flagshop-app-design-system",
    client: "플래그샵",
    title: "App Design System",
    group: "recent",
    tags: [],
  },
  {
    slug: "flagshop",
    client: "플래그샵",
    title: "FLAGSHOP",
    group: "recent",
    tags: ["브랜딩", "BI Design", "브랜드아이덴티티"],
  },
  {
    slug: "bittmate",
    client: "비트메이트",
    title: "Bittmate",
    group: "uiux",
    tags: ["UiuX", "글로벌암호화폐거래소", "Blockchain"],
  },
  {
    slug: "walkershigh-preorder",
    client: "워커스하이",
    title: "PRE-ORDER",
    group: "uiux",
    tags: ["UiuX", "웹/모바일", "디자인시스템", "프리오더서비스"],
  },
  {
    slug: "sbc",
    client: "셀러봇캐시",
    title: "SBC",
    group: "uiux",
    tags: ["UiuX", "프로세스개선"],
  },
  {
    slug: "sbc-process-flow",
    client: "셀러봇캐시",
    title: "SBC : Process Flow",
    group: "uiux",
    tags: ["UiuX", "프로세스개선"],
  },
  {
    slug: "gr",
    client: "청신호",
    title: "GR",
    group: "uiux",
    tags: ["UiuX", "보험플랫폼", "보험료비교"],
  },
  {
    slug: "only1",
    client: "온리원",
    title: "Only1",
    group: "uiux",
    tags: ["UiuX", "웹/모바일", "디자인"],
  },
  {
    slug: "sode1",
    client: "소드원",
    title: "Sode1",
    group: "uiux",
    tags: ["UiuX", "웹/모바일", "디자인"],
  },
  {
    slug: "bmealsig",
    client: "비밀식",
    title: "Bmealsig",
    group: "bibx",
    tags: ["브랜딩", "F&B", "BI Design"],
  },
  {
    slug: "hypermeta",
    client: "하이퍼메타",
    title: "Hypermeta",
    group: "bibx",
    tags: ["브랜딩", "BI Design", "VR Agency"],
  },
  {
    slug: "pullup",
    client: "풀업",
    title: "PULLUP",
    group: "bibx",
    tags: ["브랜딩", "BX Design", "Logo"],
  },
  {
    slug: "covyn",
    client: "코빈",
    title: "Covyn",
    group: "bibx",
    tags: ["브랜딩", "골프웨어", "BI Design"],
  },
  {
    slug: "jamplanet",
    client: "잼플레닛",
    title: "JAMPLANET",
    group: "bibx",
    tags: ["브랜딩", "BI Design"],
  },
];

export const workGroups: WorkGroupMeta[] = [
  {
    id: "recent",
    label: "Recent Works",
    items: works.filter((item) => item.group === "recent"),
  },
  {
    id: "uiux",
    label: "Previous Works 1(UiuX)",
    items: works.filter((item) => item.group === "uiux"),
  },
  {
    id: "bibx",
    label: "Previous Works 2(BibX)",
    items: works.filter((item) => item.group === "bibx"),
  },
];

export const awards: Award[] = [
  {
    date: "2016.12",
    prize: "우수상",
    title: "신년 희망이 담긴 메세지 글귀 공모전",
  },
  {
    date: "2015.05",
    prize: "최우수상",
    title: "당 홍보 및 개선을 위한 포스터 공모전",
  },
  {
    date: "2015.12",
    prize: "우수상",
    title: "내 꿈 찾기 캠페인 공모전 포스터 공모전",
  },
  {
    date: "2015.12",
    prize: "우수상",
    title: "한국국토정보공사 크리에이티브 공모전",
  },
  {
    date: "2015.12",
    prize: "우수상",
    title: "인터넷 중독 예방 포스터 공모전",
  },
];

export const tools: Tool[] = [
  {
    name: "Figma",
    role: "디자인 시스템, UI 설계, 프로토타이핑, 컴포넌트 운영.",
  },
  {
    name: "Adobe Photoshop",
    role: "이미지 보정, 합성, 썸네일 제작.",
  },
  {
    name: "Adobe Illustrator",
    role: "로고, 아이콘, 벡터 그래픽 제작.",
  },
  {
    name: "Adobe XD",
    role: "기존 프로젝트 유지/참고 용도.",
  },
  {
    name: "Zeplin",
    role: "개발 전달/스펙 공유(프로젝트 환경에 따라).",
  },
  {
    name: "Wix",
    role: "간단한 랜딩/페이지 구성.",
  },
  {
    name: "Editor X",
    role: "반응형 레이아웃 기반 페이지 구성",
  },
];

export const certificate = "시각디자이너산업기사";

export const seoBlurb =
  "This link introduces the self-introduction and portfolio of a designer, as well as a blog link. @GYU.STARRY is interested in hiking and ACG, and has works such as Sellebot Cash, Greenlight, Only1, Sode1, Hypermeta, Bmealsig, Covyn, JAMPLANET, PULLUP, VGENCY. Additionally, the blog introduces emotional cafes.";

export function workLabel(item: WorkItem): string {
  return `[${item.client}] ${item.title}`;
}

export function findWork(slug: string): WorkItem | undefined {
  return works.find((item) => item.slug === slug);
}

export function groupLabel(group: WorkGroup): string {
  return workGroups.find((item) => item.id === group)?.label ?? group;
}
