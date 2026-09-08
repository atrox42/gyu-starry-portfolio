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

export type PresenceProfile = {
  handle: string;
  displayName: string;
  avatar: string;
  posts: number;
  followers: number;
  following: number;
};

export type PresenceThumb = {
  thumb: string;
  url?: string;
  isVideo?: boolean;
};

export type PresenceArticle = {
  title: string;
  url: string;
  thumb?: string;
  excerpt?: string;
};

export type PresenceChannel = {
  id: string;
  label: string;
  url?: string;
  quote?: string;
  paragraphs: readonly string[];
  profile?: PresenceProfile;
  posts?: readonly PresenceThumb[];
  featuredPost?: PresenceArticle;
};

export type WorkGroup = "recent" | "uiux" | "bibx";

export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  group: WorkGroup;
  tags: readonly string[];
  notionUrl: string;
  thumb: string;
  images: readonly string[];
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
    "제품 경험과 브랜드 경험을 함께 설계하고, 브랜딩(BI/비주얼 가이드)까지 연결할 수 있는 UX/UI 디자이너",
  email: "atrox42@gmail.com",
  instagramUrl: "https://www.instagram.com/gyu.starry/",
  blogUrl: "https://blog.naver.com/acgwang",
  year: 2026,
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
  lead: "제품 경험과 브랜드 경험을 함께 설계하고, 브랜딩(BI/비주얼 가이드)까지 연결할 수 있는 UX/UI 디자이너입니다",
  leadEmphasis:
    "제품 경험과 브랜드 경험을 함께 설계하고, 브랜딩(BI/비주얼 가이드)까지 연결할 수 있는 UX/UI 디자이너",
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
    "같은 결로 콘텐츠를 쌓아가는 과정이, 제품에서도 기준을 만들고 일관성을 지키는 방식과 닮아 있습니다.",
  ],
  channels: [
    {
      id: "instagram",
      label: "Instagram",
      url: identity.instagramUrl,
      quote: " 아마도 50대에는 오지의 탐험가가 되어있을 거 같은데요? ",
      paragraphs: [
        "등산·트레일 러닝·트래킹을 다니며 입은 아웃핏과, 실제로 쓰는 아웃도어 아이템을 소개합니다.",
        "한 장의 사진에서도 장비가 어떻게 쓰이는지, 코디가 어떤지 보이도록 담습니다.",
      ],
      // Public Instagram snapshot, 2026-09-08 (web_profile_info).
      profile: {
        handle: identity.handle,
        displayName: identity.name,
        avatar: "presence/instagram-avatar.jpg",
        posts: 227,
        followers: 5216,
        following: 709,
      },
      posts: [
        {
          thumb: "presence/instagram-01.jpg",
          url: "https://www.instagram.com/reel/Dc4zXavzrRu/",
          isVideo: true,
        },
        {
          thumb: "presence/instagram-02.jpg",
          url: "https://www.instagram.com/reel/Dc3CwjFzQgA/",
          isVideo: true,
        },
        {
          thumb: "presence/instagram-03.jpg",
          url: "https://www.instagram.com/p/DcGbNkNk9kK/",
        },
        {
          thumb: "presence/instagram-04.jpg",
          url: "https://www.instagram.com/p/DafaLt7k9G5/",
        },
        {
          thumb: "presence/instagram-05.jpg",
          url: "https://www.instagram.com/p/DapzYoik9iH/",
        },
        {
          thumb: "presence/instagram-06.jpg",
          url: "https://www.instagram.com/p/DauzmFLlDDi/",
        },
        {
          thumb: "presence/instagram-07.jpg",
          url: "https://www.instagram.com/p/DahuVvPEzPV/",
        },
        {
          thumb: "presence/instagram-08.jpg",
          url: "https://www.instagram.com/p/DWlYltnEXEJ/",
        },
        {
          thumb: "presence/instagram-09.jpg",
          url: "https://www.instagram.com/p/DVBrdPRkySL/",
        },
      ],
    },
    {
      id: "blog",
      label: "Blog",
      url: identity.blogUrl,
      paragraphs: [
        "ACG·아웃도어 아이템과 산행·트레일에서 입은 아웃핏을 소개하고, 다녀온 길을 기록합니다.",
        "실제로 써 본 느낌과, 그 아이템이 어떤 길에서 어떻게 쓰였는지를 함께 남깁니다.",
      ],
      // Latest public RSS item, 2026-09-08 (rss.blog.naver.com/acgwang.xml).
      featuredPost: {
        title: "나이키 ACG 이구아나 베스트 컬리지 그레이 HJ2878-009 리뷰",
        url: "https://blog.naver.com/acgwang/224264169189",
        thumb: "presence/blog-latest.jpg",
        excerpt:
          "이구아나 답게 변신이 가능한 특이한 베스트이지만 아무도 입는걸 본적없는 베스트입니다.",
      },
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
    thumb: "works/flagshop-app-design-system/thumb.jpg",
    images: ["works/flagshop-app-design-system/01.jpg"],
    notionUrl: "https://app.notion.com/p/2920e090c29f8094bb65f4bda5c439eb",
  },
  {
    slug: "flagshop",
    client: "플래그샵",
    title: "FLAGSHOP",
    group: "recent",
    tags: ["브랜딩", "BI Design", "브랜드아이덴티티"],
    thumb: "works/flagshop/thumb.jpg",
    images: ["works/flagshop/01.jpg", "works/flagshop/02.jpg"],
    notionUrl: "https://app.notion.com/p/1590e090c29f8081a0f4c87010b628bb",
  },
  {
    slug: "bittmate",
    client: "비트메이트",
    title: "Bittmate",
    group: "uiux",
    tags: ["UiuX", "글로벌암호화폐거래소", "Blockchain"],
    thumb: "works/bittmate/thumb.jpg",
    images: ["works/bittmate/01.jpg"],
    notionUrl: "https://app.notion.com/p/3190e090c29f8101a90ff0f1a7c7ef18",
  },
  {
    slug: "walkershigh-preorder",
    client: "워커스하이",
    title: "PRE-ORDER",
    group: "uiux",
    tags: ["UiuX", "웹/모바일", "디자인시스템", "프리오더서비스"],
    thumb: "works/walkershigh-preorder/thumb.jpg",
    images: ["works/walkershigh-preorder/01.jpg", "works/walkershigh-preorder/02.jpg"],
    notionUrl: "https://app.notion.com/p/3190e090c29f81b68414c1b5407fcc37",
  },
  {
    slug: "sbc",
    client: "셀러봇캐시",
    title: "SBC",
    group: "uiux",
    tags: ["UiuX", "프로세스개선"],
    thumb: "works/sbc/thumb.jpg",
    images: ["works/sbc/01.jpg"],
    notionUrl: "https://app.notion.com/p/3190e090c29f811d8949d3bbdfde887c",
  },
  {
    slug: "sbc-process-flow",
    client: "셀러봇캐시",
    title: "SBC : Process Flow",
    group: "uiux",
    tags: ["UiuX", "프로세스개선"],
    thumb: "works/sbc-process-flow/thumb.jpg",
    images: ["works/sbc-process-flow/01.jpg"],
    notionUrl: "https://app.notion.com/p/3190e090c29f81f3be2df0b0a98cce6f",
  },
  {
    slug: "gr",
    client: "청신호",
    title: "GR",
    group: "uiux",
    tags: ["UiuX", "보험플랫폼", "보험료비교"],
    thumb: "works/gr/thumb.jpg",
    images: ["works/gr/01.jpg"],
    notionUrl: "https://app.notion.com/p/3190e090c29f817bbed5ef44b81e72a8",
  },
  {
    slug: "only1",
    client: "온리원",
    title: "Only1",
    group: "uiux",
    tags: ["UiuX", "웹/모바일", "디자인"],
    thumb: "works/only1/thumb.jpg",
    images: ["works/only1/01.jpg"],
    notionUrl: "https://app.notion.com/p/3190e090c29f81c59953e4eb99ed03c4",
  },
  {
    slug: "sode1",
    client: "소드원",
    title: "Sode1",
    group: "uiux",
    tags: ["UiuX", "웹/모바일", "디자인"],
    thumb: "works/sode1/thumb.jpg",
    images: ["works/sode1/01.jpg"],
    notionUrl: "https://app.notion.com/p/3190e090c29f815fa326e8b6a5ef6bab",
  },
  {
    slug: "bmealsig",
    client: "비밀식",
    title: "Bmealsig",
    group: "bibx",
    tags: ["브랜딩", "F&B", "BI Design"],
    thumb: "works/bmealsig/thumb.jpg",
    images: ["works/bmealsig/01.jpg"],
    notionUrl: "https://app.notion.com/p/f9f8062a7e6948788ff93f0efc9ebb19",
  },
  {
    slug: "hypermeta",
    client: "하이퍼메타",
    title: "Hypermeta",
    group: "bibx",
    tags: ["브랜딩", "BI Design", "VR Agency"],
    thumb: "works/hypermeta/thumb.jpg",
    images: ["works/hypermeta/01.jpg"],
    notionUrl: "https://app.notion.com/p/ba66fc14a973478f9ad96663661f7db1",
  },
  {
    slug: "pullup",
    client: "풀업",
    title: "PULLUP",
    group: "bibx",
    tags: ["브랜딩", "BX Design", "Logo"],
    thumb: "works/pullup/thumb.jpg",
    images: ["works/pullup/01.jpg"],
    notionUrl: "https://app.notion.com/p/070b53c217294b148f2a8693fd422c82",
  },
  {
    slug: "covyn",
    client: "코빈",
    title: "Covyn",
    group: "bibx",
    tags: ["브랜딩", "골프웨어", "BI Design"],
    thumb: "works/covyn/thumb.jpg",
    images: ["works/covyn/01.jpg"],
    notionUrl: "https://app.notion.com/p/873f0c4e4a5a479f886100188b459eca",
  },
  {
    slug: "jamplanet",
    client: "잼플레닛",
    title: "JAMPLANET",
    group: "bibx",
    tags: ["브랜딩", "BI Design"],
    thumb: "works/jamplanet/thumb.jpg",
    images: ["works/jamplanet/01.jpg"],
    notionUrl: "https://app.notion.com/p/f53617964e3e4edfab72f0f41b3b6100",
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

export const certificate = "시각디자이너 산업기사";

export const seoBlurb =
  "This link introduces the self-introduction and portfolio of a designer, as well as a blog link. @GYU.STARRY is interested in hiking and ACG, and has works such as Sellebot Cash, Greenlight, Only1, Sode1, Hypermeta, Bmealsig, Covyn, JAMPLANET, PULLUP, VGENCY. Additionally, the blog introduces emotional cafes.";

export function workSrc(path: string): string {
  const base = import.meta.env.BASE_URL;
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}${path.replace(/^\//, "")}`;
}

export function workLabel(item: WorkItem): string {
  return `[${item.client}] ${item.title}`;
}

export function findWork(slug: string): WorkItem | undefined {
  return works.find((item) => item.slug === slug);
}

export function groupLabel(group: WorkGroup): string {
  return workGroups.find((item) => item.id === group)?.label ?? group;
}
