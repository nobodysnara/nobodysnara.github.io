const languageLabels = {
  en: "EN",
  ko: "KR",
};

const navigation = [
  {
    id: "nara-yoon",
    label: { en: "Nara Yoon", ko: "나라 윤" },
    index: "00",
    color: "#ffddeb",
  },
  {
    id: "artist",
    label: { en: "Artist", ko: "아티스트" },
    index: "01",
    color: "#fffdf6",
  },
  {
    id: "designer",
    label: { en: "Designer", ko: "디자이너" },
    index: "02",
    color: "#fba600",
  },
  {
    id: "community",
    label: { en: "Community\nManager", ko: "커뮤니티\n매니저" },
    index: "03",
    color: "#b8dd85",
  },
  {
    id: "project-manager",
    label: { en: "Project\nManager", ko: "프로젝트\n매니저" },
    index: "04",
    color: "#6eaee7",
  },
  {
    id: "creator",
    label: { en: "Creator", ko: "크리에이터" },
    index: "05",
    color: "#fbda48",
  },
  {
    id: "content-editor",
    label: { en: "Content\nEditor", ko: "콘텐츠\n에디터" },
    index: "06",
    color: "#ffddeb",
  },
];

const taxonomy = [
  {
    title: { en: "Practice", ko: "실천" },
    items: {
      en: ["artist archive", "graphic design", "illustration"],
      ko: ["아티스트 아카이브", "그래픽 디자인", "일러스트레이션"],
    },
  },
  {
    title: { en: "Direction", ko: "디렉션" },
    items: {
      en: ["identity systems", "visual storytelling", "editorial framing"],
      ko: ["아이덴티티 시스템", "비주얼 스토리텔링", "에디토리얼 구성"],
    },
  },
  {
    title: { en: "Archive", ko: "아카이브" },
    items: {
      en: ["projects", "notes", "image studies"],
      ko: ["프로젝트", "노트", "이미지 스터디"],
    },
  },
];

const createPlaceholder = (label, tone = "yellow") => {
  const palette =
    tone === "pink"
      ? { bg: "#ffddeb", accent: "#fba600" }
      : tone === "cream"
        ? { bg: "#fffdf6", accent: "#111111" }
        : { bg: "#fbda48", accent: "#111111" };

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
      <rect width="1200" height="900" fill="${palette.bg}" />
      <rect x="44" y="44" width="1112" height="812" rx="24" fill="none" stroke="${palette.accent}" stroke-width="6" stroke-dasharray="14 18" />
      <text x="80" y="130" fill="${palette.accent}" font-family="Futura, Arial, sans-serif" font-size="44" letter-spacing="8">NARA ARCHIVE</text>
      <text x="80" y="760" fill="${palette.accent}" font-family="Futura, Arial, sans-serif" font-size="112" font-weight="700">${label}</text>
      <text x="84" y="815" fill="${palette.accent}" font-family="Pretendard, Arial, sans-serif" font-size="30">Placeholder image for layout review</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const featuredProjects = [
  {
    title: { en: "Nobodys Nara", ko: "노바디스 나라" },
    year: "2025",
    role: {
      en: "Artist Identity / Visual Archive",
      ko: "아티스트 아이덴티티 / 비주얼 아카이브",
    },
    description: {
      en: "A self-authored visual world built around persona, image sequencing, and controlled atmosphere. The work moves between artist statement, archive, and brand-like continuity.",
      ko: "페르소나와 이미지 시퀀스, 조절된 분위기를 중심으로 구축한 자기 주도적 비주얼 세계입니다. 작업은 아티스트 스테이트먼트와 아카이브, 브랜드적인 연속성 사이를 오갑니다.",
    },
    image: createPlaceholder("FEATURE 01", "yellow"),
    details: [
      {
        image: createPlaceholder("DETAIL A", "pink"),
        caption: {
          en: "Identity image and introductory frame.",
          ko: "아이덴티티 이미지와 도입 프레임.",
        },
      },
      {
        image: createPlaceholder("DETAIL B", "cream"),
        caption: {
          en: "Supporting visual material from the archive.",
          ko: "아카이브에서 가져온 보조 비주얼 자료.",
        },
      },
    ],
  },
  {
    title: { en: "The Narative", ko: "더 내러티브" },
    year: "2025",
    role: {
      en: "Graphic Design / Illustration",
      ko: "그래픽 디자인 / 일러스트레이션",
    },
    description: {
      en: "A portfolio language where graphic design and illustration operate as one system. Typography, color, and image-making are used to create a readable but characterful visual identity.",
      ko: "그래픽 디자인과 일러스트레이션이 하나의 시스템처럼 작동하는 포트폴리오 언어입니다. 타이포그래피와 색, 이미지 메이킹을 통해 읽기 쉽지만 개성 있는 비주얼 아이덴티티를 만듭니다.",
    },
    image: createPlaceholder("FEATURE 02", "pink"),
    details: [
      {
        image: createPlaceholder("DETAIL C", "cream"),
        caption: {
          en: "Editorial spread and identity application.",
          ko: "에디토리얼 스프레드와 아이덴티티 적용 사례.",
        },
      },
      {
        image: createPlaceholder("DETAIL D", "yellow"),
        caption: {
          en: "Supporting composition and image treatment.",
          ko: "보조 구성과 이미지 처리.",
        },
      },
    ],
  },
  {
    title: { en: "Community Direction", ko: "커뮤니티 디렉션" },
    year: "2024",
    role: {
      en: "Community Strategy / Project Framing",
      ko: "커뮤니티 전략 / 프로젝트 프레이밍",
    },
    description: {
      en: "Programming, communications, and delivery systems designed as cultural structure. The visual layer stays calm while the overall experience remains warm, clear, and intentional.",
      ko: "프로그램과 커뮤니케이션, 전달 시스템을 문화적 구조로 설계한 작업입니다. 비주얼은 차분하지만 전체 경험은 따뜻하고 명확하며 의도적으로 유지됩니다.",
    },
    image: createPlaceholder("FEATURE 03", "cream"),
    details: [
      {
        image: createPlaceholder("DETAIL E", "yellow"),
        caption: {
          en: "Visual note from a community-facing project.",
          ko: "커뮤니티 프로젝트에서의 비주얼 노트.",
        },
      },
      {
        image: createPlaceholder("DETAIL F", "pink"),
        caption: {
          en: "Detail image from a campaign or release.",
          ko: "캠페인 또는 릴리즈의 디테일 이미지.",
        },
      },
    ],
  },
];

const archiveItems = [
  {
    image: createPlaceholder("ARCHIVE 01", "yellow"),
    caption: {
      en: "Poster fragment / color study / archive note",
      ko: "포스터 조각 / 컬러 스터디 / 아카이브 노트",
    },
  },
  {
    image: createPlaceholder("ARCHIVE 02", "pink"),
    caption: {
      en: "Editorial composition / working spread",
      ko: "에디토리얼 구성 / 작업 스프레드",
    },
  },
  {
    image: createPlaceholder("ARCHIVE 03", "cream"),
    caption: {
      en: "Identity image / portrait frame",
      ko: "아이덴티티 이미지 / 포트레이트 프레임",
    },
  },
  {
    image: createPlaceholder("ARCHIVE 04", "yellow"),
    caption: {
      en: "Campaign detail / image sequence",
      ko: "캠페인 디테일 / 이미지 시퀀스",
    },
  },
];

const contactFooter = {
  eyebrow: { en: "Contact", ko: "연락" },
  title: {
    en: "For commissions, collaborations, and conversations.",
    ko: "의뢰, 협업, 그리고 대화를 위해.",
  },
  body: {
    en: "Available for selected visual projects, design collaborations, and artist-led commissions.",
    ko: "선별된 비주얼 프로젝트, 디자인 협업, 아티스트 주도 커미션 작업을 진행합니다.",
  },
  links: [
    {
      label: { en: "Email", ko: "이메일" },
      value: "nara@example.com",
      href: "mailto:nara@example.com",
    },
    {
      label: { en: "Instagram", ko: "인스타그램" },
      value: "@nara.archive",
      href: "#",
    },
    {
      label: { en: "Location", ko: "위치" },
      value: { en: "Seoul, KR", ko: "서울, 한국" },
      href: "#",
    },
  ],
};

const sections = [
  {
    id: "nara-yoon",
    navId: "nara-yoon",
    type: "hero",
    eyebrow: { en: "Nara Yoon", ko: "나라 윤" },
    status: { en: "Work in Progress", ko: "Work in Progress" },
    title: {
      en: "To turn people and perspectives into compelling narratives.",
      ko: "나라는 최고다!",
    },
    lead: {
      en: "This is the main filing page for Nara Yoon. Each tab opens a different facet of the practice: artist, designer, community manager, project manager, creator, content editor, and contact.",
      ko: "이곳은 나라 윤의 메인 파일링 페이지입니다. 각 탭은 아티스트, 디자이너, 커뮤니티 매니저, 프로젝트 매니저, 크리에이터, 콘텐츠 에디터라는 서로 다른 실천의 면을 엽니다.",
    },
    note: {
      en: "Built like a portfolio document rather than a scrolling feed. Choose an index tab to open the corresponding section.",
      ko: "스크롤 피드가 아니라 포트폴리오 문서처럼 구성했습니다. 원하는 인덱스 탭을 눌러 해당 섹션을 열어보세요.",
    },
  },
  {
    id: "artist",
    navId: "artist",
    type: "hero",
    eyebrow: { en: "Artist", ko: "아티스트" },
    title: {
      en: "I stage images, identities, and memory into one archive.",
      ko: "이미지와 정체성, 기억을 하나의 아카이브로 구성합니다.",
    },
    lead: {
      en: "NOBODYS NARA is a personal exhibition document: part artist statement, part visual archive, part ongoing portfolio.",
      ko: "NOBODYS NARA는 개인적인 전시 문서이자 아티스트 스테이트먼트, 비주얼 아카이브, 그리고 현재 진행형 포트폴리오입니다.",
    },
    note: {
      en: "Based in Seoul. Working across art direction, graphic design, illustration, community, and project systems.",
      ko: "서울을 기반으로 아트 디렉션, 그래픽 디자인, 일러스트레이션, 커뮤니티, 프로젝트 시스템을 넘나들며 작업합니다.",
    },
  },
  {
    id: "artist-intro",
    navId: "artist",
    type: "intro",
    eyebrow: { en: "Artist Statement", ko: "아티스트 스테이트먼트" },
    title: {
      en: "An introduction written like the opening page of a portfolio document.",
      ko: "포트폴리오 문서의 첫 장처럼 쓰인 소개.",
    },
    body: {
      en: [
        "I build visual identities that can also hold mood, memory, and persona. My work often moves between image-making and structure rather than staying in one category.",
        "This site is arranged like an editorial archive. Each section is treated as a page, and each project is presented as a feature rather than a card.",
        "The result is less like a portfolio grid and more like a personal filing system for work, process, and authorship.",
      ],
      ko: [
        "저는 무드와 기억, 페르소나를 함께 담을 수 있는 비주얼 아이덴티티를 만듭니다. 제 작업은 하나의 카테고리에 머무르기보다 이미지 메이킹과 구조 사이를 이동합니다.",
        "이 사이트는 에디토리얼 아카이브처럼 구성되어 있습니다. 각 섹션은 한 페이지처럼 다뤄지고, 각 프로젝트는 카드가 아닌 하나의 피처로 제시됩니다.",
        "그래서 결과적으로 이 사이트는 포트폴리오 그리드보다는 작업과 과정, 저자성을 위한 개인 파일링 시스템에 가깝습니다.",
      ],
    },
    image: createPlaceholder("PORTRAIT", "pink"),
    caption: {
      en: "Nara Yoon / portrait placeholder / archive image",
      ko: "나라 윤 / 포트레이트 플레이스홀더 / 아카이브 이미지",
    },
  },
  {
    id: "designer",
    navId: "designer",
    type: "text",
    eyebrow: { en: "Designer", ko: "디자이너" },
    title: {
      en: "Graphic designer and illustrator with a strong editorial instinct.",
      ko: "강한 에디토리얼 감각을 가진 그래픽 디자이너이자 일러스트레이터.",
    },
    body: {
      en: "My design practice centers on clarity with personality. I use typography, layout, and illustration to build identities that feel direct, memorable, and visually coherent across print-like and digital spaces.",
      ko: "제 디자인 실천은 개성을 품은 명확성에 중심을 둡니다. 타이포그래피와 레이아웃, 일러스트레이션을 활용해 인쇄물 같은 공간과 디지털 공간 모두에서 직접적이고 기억에 남으며 일관된 아이덴티티를 만듭니다.",
    },
    aside: {
      en: "Graphic design, illustration, branding, editorial systems, typography.",
      ko: "그래픽 디자인, 일러스트레이션, 브랜딩, 에디토리얼 시스템, 타이포그래피.",
    },
  },
  {
    id: "designer-projects",
    navId: "designer",
    type: "featured-project",
    eyebrow: { en: "Featured Project", ko: "주요 프로젝트" },
    project: featuredProjects[1],
  },
  {
    id: "community",
    navId: "community",
    type: "text",
    eyebrow: { en: "Community Manager", ko: "커뮤니티 매니저" },
    title: {
      en: "Building public-facing spaces with tone, continuity, and care.",
      ko: "톤과 연속성, 세심함으로 공공적인 공간을 구축합니다.",
    },
    body: {
      en: "I approach community work as a form of experience design. Programming, communication, and stewardship all contribute to whether a space feels trustworthy and alive.",
      ko: "저는 커뮤니티 작업을 경험 디자인의 한 형태로 접근합니다. 프로그램과 커뮤니케이션, 운영과 돌봄은 공간이 신뢰 가능하고 살아 있게 느껴지는지에 직접적으로 작용합니다.",
    },
    aside: {
      en: "Programming, community care, rollout planning, content framing.",
      ko: "프로그램 기획, 커뮤니티 케어, 롤아웃 플래닝, 콘텐츠 프레이밍.",
    },
  },
  {
    id: "project-manager",
    navId: "project-manager",
    type: "featured-project",
    eyebrow: { en: "Project Focus", ko: "프로젝트 포커스" },
    project: featuredProjects[2],
  },
  {
    id: "creator",
    navId: "creator",
    type: "featured-project",
    eyebrow: { en: "Creator", ko: "크리에이터" },
    project: featuredProjects[0],
  },
  {
    id: "creator-archive",
    navId: "creator",
    type: "archive",
    eyebrow: { en: "Archive", ko: "아카이브" },
    title: {
      en: "Fragments, stills, and secondary materials.",
      ko: "파편, 스틸 이미지, 그리고 2차 자료들.",
    },
    items: archiveItems,
  },
  {
    id: "content-editor",
    navId: "content-editor",
    type: "text",
    eyebrow: { en: "Content Editor", ko: "콘텐츠 에디터" },
    title: {
      en: "Editing stories into clear, memorable publishing formats.",
      ko: "이야기를 명확하고 기억에 남는 발행 형식으로 편집합니다.",
    },
    body: {
      en: "I shape raw ideas, references, and project material into content that can move across platforms while keeping a consistent tone, structure, and visual rhythm.",
      ko: "날것의 아이디어와 레퍼런스, 프로젝트 자료를 일관된 톤과 구조, 비주얼 리듬을 유지하는 콘텐츠로 다듬어 여러 플랫폼에 맞게 전개합니다.",
    },
    aside: {
      en: "Content planning, copy editing, editorial structure, platform storytelling.",
      ko: "콘텐츠 기획, 카피 편집, 에디토리얼 구조, 플랫폼 스토리텔링.",
    },
  },
];

const app = document.querySelector("#app");
let activeTab = "nara-yoon";
let activeLanguage = "en";
let parallaxFrame = null;
let removeCursorListeners = null;
let skyTimer = null;
const getActiveNav = () => navigation.find((item) => item.id === activeTab) ?? navigation[0];

const getKstHour = () => {
  const hour = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    hour12: false,
    timeZone: "Asia/Seoul",
  }).format(new Date());

  return Number(hour);
};

const applyKstSkyTheme = () => {
  const root = document.documentElement;
  const hour = getKstHour();

  let palette = null;
  let phase = "";

  if (hour >= 6 && hour < 11) {
    palette = {
      top: "#8fc8ff",
      mid: "#bfe3ff",
      bottom: "#fff0c8",
      glow: "rgba(255, 244, 198, 0.72)",
      cloud: "rgba(255,255,255,0.92)",
      star: "rgba(255,255,255,0)",
    };
    phase = "morning";
  } else if (hour >= 11 && hour < 17) {
    palette = {
      top: "#69b9ff",
      mid: "#a8dcff",
      bottom: "#e8f7ff",
      glow: "rgba(255, 248, 228, 0.48)",
      cloud: "rgba(255,255,255,0.88)",
      star: "rgba(255,255,255,0)",
    };
    phase = "day";
  } else if (hour >= 17 && hour < 20) {
    palette = {
      top: "#415fb8",
      mid: "#ff9968",
      bottom: "#ffd29c",
      glow: "rgba(255, 170, 96, 0.62)",
      cloud: "rgba(255,229,214,0.58)",
      star: "rgba(255,255,255,0.12)",
    };
    phase = "sunset";
  } else {
    palette = {
      top: "#07102b",
      mid: "#132552",
      bottom: "#29437a",
      glow: "rgba(187, 214, 255, 0.1)",
      cloud: "rgba(214,226,255,0.16)",
      star: "rgba(255,255,255,0.72)",
    };
    phase = "night";
  }

  root.style.setProperty("--sky-top", palette.top);
  root.style.setProperty("--sky-mid", palette.mid);
  root.style.setProperty("--sky-bottom", palette.bottom);
  root.style.setProperty("--sky-glow", palette.glow);
  root.style.setProperty("--sky-cloud", palette.cloud);
  root.style.setProperty("--sky-star", palette.star);
  root.setAttribute("data-sky-phase", phase);
};

const localize = (value) => {
  if (value && typeof value === "object" && !Array.isArray(value) && (Object.hasOwn(value, "en") || Object.hasOwn(value, "ko"))) {
    return value[activeLanguage];
  }

  return value;
};

const renderLanguageToggle = () => `
  <div class="language-switch" aria-label="Language switch">
    ${Object.keys(languageLabels)
      .map(
        (lang) => `
          <button class="language-switch__button ${lang === activeLanguage ? "is-active" : ""}" type="button" data-lang="${lang}">
            ${languageLabels[lang]}
          </button>
        `
      )
      .join("")}
  </div>
`;

const renderSidebar = () => `
  <aside class="sidebar">
    ${renderLanguageToggle()}
    <nav class="sidebar__nav" aria-label="Section index">
      ${navigation
        .map(
          (item) => `
            <a class="sidebar__link ${item.id === activeTab ? "is-active" : ""}" href="#" data-nav="${item.id}" style="--tab-color: ${item.color}">
              <span class="sidebar__index">${item.index}</span>
              <span class="sidebar__label">${localize(item.label)}</span>
            </a>
          `
        )
        .join("")}
    </nav>
  </aside>
`;

const renderSectionShell = ({ id, navId = id, eyebrow = "", title = "", inner = "", tone = "" }) => `
  <section id="${id}" data-nav-target="${navId}" class="section ${tone}">
    <div class="section__header">
      <p class="section__eyebrow">${localize(eyebrow) ?? ""}</p>
      ${title ? `<h2 class="section__title">${localize(title)}</h2>` : ""}
    </div>
    ${inner}
  </section>
`;

const renderTaxonomy = () => `
  <div class="taxonomy">
    ${taxonomy
      .map(
        (group) => `
          <div class="taxonomy__group">
            <p class="taxonomy__title">${localize(group.title)}</p>
            <ul class="taxonomy__list">
              ${localize(group.items).map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `
      )
      .join("")}
  </div>
`;

const renderHero = (section) =>
  renderSectionShell({
    id: section.id,
    navId: section.navId,
    eyebrow: section.eyebrow,
    inner: `
      ${renderTaxonomy()}
      <div class="hero">
        <div class="hero__main">
          ${section.status ? `<p class="hero__status">${localize(section.status)}</p>` : ""}
          <h1 class="hero__title">${localize(section.title)}</h1>
          <p class="hero__stamp">${activeLanguage === "en" ? "NOBODYS NARA / FILE 001" : "NOBODYS NARA / FILE 001"}</p>
        </div>
        <div class="hero__side">
          <p class="hero__lead">${localize(section.lead)}</p>
          <p class="hero__note">${localize(section.note)}</p>
          <a class="hero__jump" href="#" data-nav-jump="${section.navId}">
            ${activeLanguage === "en" ? "Open archive" : "아카이브 열기"}
          </a>
        </div>
      </div>
    `,
    tone: "section--hero",
  });

const renderIntro = (section) =>
  renderSectionShell({
    id: section.id,
    navId: section.navId,
    eyebrow: section.eyebrow,
    title: section.title,
    inner: `
      <div class="intro-feature">
        <div class="intro-feature__text">
          ${localize(section.body).map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <figure class="intro-feature__media">
          <img src="${section.image}" alt="${localize(section.caption)}" />
          <figcaption>${localize(section.caption)}</figcaption>
        </figure>
      </div>
    `,
  });

const renderText = (section) =>
  renderSectionShell({
    id: section.id,
    navId: section.navId,
    eyebrow: section.eyebrow,
    title: section.title,
    inner: `
      <div class="text-feature">
        <p class="text-feature__body">${localize(section.body)}</p>
        <p class="text-feature__aside">${localize(section.aside)}</p>
      </div>
    `,
  });

const renderFeaturedProject = (section) =>
  renderSectionShell({
    id: section.id,
    navId: section.navId,
    eyebrow: section.eyebrow,
    inner: `
      <article class="project-feature">
        <div class="project-feature__image-wrap">
          <img class="project-feature__image" src="${section.project.image}" alt="${localize(section.project.title)}" />
        </div>
        <div class="project-feature__summary">
          <div class="project-feature__heading">
            <h3 class="project-feature__title">${localize(section.project.title)}</h3>
            <p class="project-feature__subline">${localize(section.project.role)}</p>
          </div>
          <p class="project-feature__description">${localize(section.project.description)}</p>
          <p class="project-feature__year">${section.project.year}</p>
        </div>
        <div class="project-feature__details">
          ${section.project.details
            .map(
              (detail) => `
                <figure class="project-feature__detail">
                  <img src="${detail.image}" alt="${localize(detail.caption)}" />
                  <figcaption>${localize(detail.caption)}</figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      </article>
    `,
  });

const renderArchive = (section) =>
  renderSectionShell({
    id: section.id,
    navId: section.navId,
    eyebrow: section.eyebrow,
    title: section.title,
    inner: `
      <div class="archive-grid">
        ${section.items
          .map(
            (item) => `
              <figure class="archive-grid__item">
                <img src="${item.image}" alt="${localize(item.caption)}" />
                <figcaption>${localize(item.caption)}</figcaption>
              </figure>
            `
          )
          .join("")}
      </div>
    `,
  });

const renderContact = (section) =>
  renderSectionShell({
    id: section.id || "contact-footer",
    navId: section.navId || activeTab,
    eyebrow: section.eyebrow,
    title: section.title,
    inner: `
      <div class="contact-feature">
        <p class="contact-feature__body">${localize(section.body)}</p>
        <div class="contact-feature__links">
          ${section.links
            .map(
              (link) => `
                <a class="contact-feature__link" href="${link.href}">
                  <span>${localize(link.label)}</span>
                  <strong>${localize(link.value)}</strong>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    `,
  });

const renderSection = (section) => {
  switch (section.type) {
    case "hero":
      return renderHero(section);
    case "intro":
      return renderIntro(section);
    case "text":
      return renderText(section);
    case "featured-project":
      return renderFeaturedProject(section);
    case "archive":
      return renderArchive(section);
    default:
      return "";
  }
};

const renderActiveContent = () =>
  [
    ...sections.filter((section) => section.navId === activeTab).map(renderSection),
    renderContact({ ...contactFooter, id: `${activeTab}-contact`, navId: activeTab }),
  ].join("");

const renderApp = () => {
  document.documentElement.lang = activeLanguage === "ko" ? "ko" : "en";
  applyKstSkyTheme();

  app.innerHTML = `
    <div class="site-shell" style="--active-page: ${getActiveNav().color}">
      ${renderSidebar()}
      <main class="content" id="content-panel">
        ${renderActiveContent()}
      </main>
    </div>
    <div class="cursor-orbit" id="cursor-orbit" aria-hidden="true">
      <div class="cursor-orbit__dot"></div>
      <div class="cursor-orbit__ring"></div>
    </div>
  `;

  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const languageButtons = [...document.querySelectorAll("[data-lang]")];
  const jumpLinks = [...document.querySelectorAll("[data-nav-jump]")];
  const contentPanel = document.querySelector("#content-panel");
  const cursor = document.querySelector("#cursor-orbit");
  const interactiveTargets = [
    ...document.querySelectorAll("a, button, .project-feature__image-wrap, .project-feature__detail, .archive-grid__item"),
  ];

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const nextTab = link.dataset.nav;
      if (nextTab === activeTab) return;
      activeTab = nextTab;
      renderApp();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  });

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang;
      if (nextLanguage === activeLanguage) return;
      activeLanguage = nextLanguage;
      renderApp();
    });
  });

  jumpLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (contentPanel) {
        contentPanel.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  const applyParallax = () => {
    parallaxFrame = null;
    const pageScroll = window.scrollY || 0;
    const panelScroll = contentPanel ? contentPanel.scrollTop : 0;

    document.documentElement.style.setProperty("--parallax-page", `${pageScroll * 0.14}px`);
    document.documentElement.style.setProperty("--parallax-panel", `${panelScroll * 0.12}px`);
    document.documentElement.style.setProperty("--parallax-panel-soft", `${panelScroll * 0.06}px`);
  };

  const requestParallax = () => {
    if (parallaxFrame !== null) return;
    parallaxFrame = window.requestAnimationFrame(applyParallax);
  };

  window.onscroll = requestParallax;
  if (contentPanel) {
    contentPanel.onscroll = requestParallax;
  }
  requestParallax();

  if (removeCursorListeners) {
    removeCursorListeners();
    removeCursorListeners = null;
  }

  if (skyTimer) {
    window.clearInterval(skyTimer);
  }
  skyTimer = window.setInterval(applyKstSkyTheme, 60 * 1000);

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && cursor) {
    const moveCursor = (event) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");
    };

    const hideCursor = () => cursor.classList.remove("is-visible");
    const activateCursor = () => cursor.classList.add("is-active");
    const deactivateCursor = () => cursor.classList.remove("is-active");

    document.body.classList.add("has-custom-cursor");
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    interactiveTargets.forEach((target) => {
      target.addEventListener("mouseenter", activateCursor);
      target.addEventListener("mouseleave", deactivateCursor);
    });

    removeCursorListeners = () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
      interactiveTargets.forEach((target) => {
        target.removeEventListener("mouseenter", activateCursor);
        target.removeEventListener("mouseleave", deactivateCursor);
      });
    };
  }
};

renderApp();
