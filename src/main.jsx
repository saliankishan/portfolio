import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Linkedin, Mail,
  Menu, X, Sparkles, Database, Code2, Layers3, ExternalLink, Github as GithubIcon
} from "lucide-react";
import "./style.css";

const GITHUB = "https://github.com/saliankishan";
const LINKEDIN = "https://www.linkedin.com/in/kishan-salian/";
const EMAIL = "saliankishan727@gmail.com";

const projects = [
  {
    id: "retirement",
    number: "01",
    category: "Research · Predictive analytics",
    title: "Retirement Fund Estimation",
    subtitle: "A data-driven view of tomorrow.",
    description: "An ongoing MCA research project exploring how predictive models can estimate retirement-fund values. The study uses a synthetic financial dataset and compares a conventional compounding baseline with regression models.",
    stack: ["Python", "Pandas", "Scikit-learn", "Regression"],
    status: "In progress",
    type: "data",
    link: null,
    linkLabel: "Research in progress",
    featured: true,
    visual: "retirement"
  },
  {
    id: "weather",
    number: "02",
    category: "Analytics · Web application",
    title: "Weather Dashboard",
    subtitle: "Weather data, made easier to read.",
    description: "A Flask application that brings current conditions and a five-day forecast together with city comparison, map-based exploration and saved search history.",
    stack: ["Python", "Flask", "SQLite", "OpenWeather API"],
    status: "Built",
    type: "data",
    link: "https://github.com/saliankishan/Weather-Dashboard",
    linkLabel: "View repository",
    visual: "weather"
  },
  {
    id: "helpdesk",
    number: "03",
    category: "Applied AI · NLP",
    title: "College Helpdesk Chatbot",
    subtitle: "Making campus information easier to find.",
    description: "A college support chatbot built to answer common student queries, using a lightweight NLP workflow and a Flask-backed application.",
    stack: ["Python", "Flask", "SQLite", "NLTK", "Scikit-learn"],
    status: "Built",
    type: "ai",
    link: "https://github.com/saliankishan/college-chatbot",
    linkLabel: "View repository",
    visual: "chatbot"
  },
  {
    id: "aircanvas",
    number: "04",
    category: "Computer vision · Interaction",
    title: "Air Canvas",
    subtitle: "A canvas controlled by movement.",
    description: "A computer-vision experiment that turns hand gestures into on-screen drawing, combining webcam input with real-time hand tracking.",
    stack: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    status: "Built",
    type: "ai",
    link: "https://github.com/saliankishan/Air-Canvas",
    linkLabel: "View repository",
    visual: "canvas"
  },
  {
    id: "wumpus",
    number: "05",
    category: "Frontend · Interactive game",
    title: "Hunt the Wumpus",
    subtitle: "Logic, exploration and a little danger.",
    description: "An interactive implementation of the classic logic game, built as a browser experience with a modern React interface.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "Built",
    type: "web",
    link: "https://github.com/saliankishan/wumpus-world-game",
    live: "https://saliankishan.github.io/wumpus-world-game/",
    linkLabel: "View repository",
    visual: "wumpus"
  },
  {
    id: "foodfest",
    number: "06",
    category: "Web development",
    title: "Vijaya Food Fest",
    subtitle: "A website for a campus event.",
    description: "A college event website designed to bring event information and the visitor experience into one place.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "Built",
    type: "web",
    link: "https://github.com/saliankishan/Vijaya-Food-Fest",
    linkLabel: "View repository",
    visual: "food"
  }
];

const skills = [
  { name: "Python", detail: "Data work & scripting", level: "In use", icon: Code2 },
  { name: "SQL", detail: "Working with structured data", level: "In use", icon: Database },
  { name: "Excel", detail: "Analysis & reporting", level: "In use", icon: Layers3 },
  { name: "C++", detail: "Programming fundamentals", level: "In use", icon: Code2 },
  { name: "HTML & CSS", detail: "Web foundations", level: "In use", icon: Layers3 },
  { name: "Flask", detail: "Python web applications", level: "In use", icon: Code2 }
];

const VIEWER_PROFILES = [
  {
    id: "recruiter",
    name: "Recruiter",
    symbol: "K",
    descriptor: "Education · Projects · Achievements",
    badge: "RECRUITER SNAPSHOT",
    kicker: "CANDIDATE OVERVIEW",
    heroLineOne: "A strong foundation.",
    heroLineTwo: "Built through projects.",
    intro: "MCA student at MIT Manipal with a computer applications background, hands-on project experience and a growing focus on data.",
    cta: "Review my work",
    defaultFilter: "All",
    lensTitle: "The essentials, at a glance.",
    lensIntro: "A quick snapshot of my education, practical work and recognition.",
    workLabel: "SELECTED EXPERIENCE",
    workTitle: "Evidence of learning.",
    workIntro: "A cross-section of the projects I have completed and the research I am currently developing.",
    projectOrder: ["weather", "retirement", "helpdesk", "aircanvas", "wumpus", "foodfest"],
    focus: [
      { label: "CURRENT STUDY", value: "MCA", detail: "MIT Manipal · School of Computer Engineering" },
      { label: "ACADEMIC FOUNDATION", value: "BCA · 9.6 CGPA", detail: "Computer Applications" },
      { label: "RECOGNITION", value: "1st + 2nd prize", detail: "Inter-college competitions" }
    ]
  },
  {
    id: "analyst",
    name: "Data Analyst",
    symbol: "01",
    descriptor: "SQL · Python · Data projects",
    badge: "DATA & INSIGHT",
    kicker: "DATA ANALYST VIEW",
    heroLineOne: "Finding patterns.",
    heroLineTwo: "Making them useful.",
    intro: "Explore my work with data, from Python-based applications and structured information to a research project on financial prediction.",
    cta: "Explore data projects",
    defaultFilter: "Data",
    lensTitle: "From raw information to useful insight.",
    lensIntro: "This view prioritises the tools and projects closest to an entry-level data analyst path.",
    workLabel: "DATA PROJECTS",
    workTitle: "Working with data.",
    workIntro: "Start with the data-focused projects: a weather dashboard and a predictive retirement-fund research study.",
    projectOrder: ["retirement", "weather", "helpdesk", "aircanvas", "wumpus", "foodfest"],
    focus: [
      { label: "CORE TOOLS", value: "SQL · Python · Excel", detail: "Building analysis foundations" },
      { label: "DATA APPLICATION", value: "Weather Dashboard", detail: "API data · comparisons · history" },
      { label: "RESEARCH", value: "Retirement estimation", detail: "Synthetic data · predictive modelling" }
    ]
  },
  {
    id: "scientist",
    name: "Data Scientist",
    symbol: "∑",
    descriptor: "Predictive analytics · AI · Research",
    badge: "MODELS & RESEARCH",
    kicker: "DATA SCIENCE VIEW",
    heroLineOne: "Questions become",
    heroLineTwo: "models to explore.",
    intro: "A research-led view of my work, with predictive analytics, an ongoing financial estimation study and early AI experiments.",
    cta: "Explore research",
    defaultFilter: "All",
    lensTitle: "Exploring how systems learn.",
    lensIntro: "A view into my current research direction and the AI-related projects that have shaped my interest.",
    workLabel: "RESEARCH & AI",
    workTitle: "Beyond the dashboard.",
    workIntro: "The projects are ordered to foreground predictive modelling, natural language processing and computer vision.",
    projectOrder: ["retirement", "helpdesk", "aircanvas", "weather", "wumpus", "foodfest"],
    focus: [
      { label: "RESEARCH DIRECTION", value: "Predictive analytics", detail: "Retirement-fund estimation study" },
      { label: "NATURAL LANGUAGE", value: "NLP chatbot", detail: "College helpdesk assistant" },
      { label: "COMPUTER VISION", value: "Air Canvas", detail: "Hand tracking · gesture interaction" }
    ]
  },
  {
    id: "explorer",
    name: "Explorer",
    symbol: "✳",
    descriptor: "Web · Creative coding · Experiments",
    badge: "THE FULL STORY",
    kicker: "EXPLORER VIEW",
    heroLineOne: "Curiosity takes",
    heroLineTwo: "many forms.",
    intro: "From interactive web projects to computer vision and data experiments, this is the broader collection of things I have explored by building.",
    cta: "Browse experiments",
    defaultFilter: "All",
    lensTitle: "Different problems. Different tools.",
    lensIntro: "A wider tour through interactive projects, creative experiments and data-driven applications.",
    workLabel: "THE COLLECTION",
    workTitle: "A little of everything.",
    workIntro: "Explore the full collection, from interactive browser projects and creative computing to analytics and research.",
    projectOrder: ["wumpus", "foodfest", "aircanvas", "helpdesk", "weather", "retirement"],
    focus: [
      { label: "INTERACTIVE WEB", value: "Hunt the Wumpus", detail: "React · TypeScript · browser game" },
      { label: "CREATIVE COMPUTING", value: "Air Canvas", detail: "Real-time hand tracking" },
      { label: "DATA EXPERIMENTS", value: "Weather Dashboard", detail: "APIs · comparisons · history" }
    ]
  }
];;

function BrandMark() {
  return <a className="brand" href="#top" aria-label="Kishan home"><span className="brand-symbol">K<span>.</span></span><span className="brand-word">KISHAN SALIAN</span></a>;
}

function ProfileGate({ onSelect, exiting }) {
  return (
    <section className={`profile-gate ${exiting ? "profile-gate-exit" : ""}`} aria-label="Choose a viewing profile">
      <div className="profile-gate-backdrop" aria-hidden="true">
        <div className="profile-backdrop-glow glow-left" />
        <div className="profile-backdrop-glow glow-right" />
        <div className="profile-backdrop-grid" />
      </div>
      <header className="profile-gate-header">
        <div className="streaming-brand"><span className="streaming-mark">K</span><span>KISHAN <i>ORIGINALS</i></span></div>
        <span className="profile-gate-edition">A PERSONAL PORTFOLIO EXPERIENCE</span>
      </header>
      <div className="profile-gate-content">
        <p className="profile-gate-overline">THE SIGNAL / 2026</p>
        <h1>Who’s watching?</h1>
        <p className="profile-gate-subtitle">Choose your perspective. The story is the same — the first stop is yours.</p>
        <div className="profile-options">
          {VIEWER_PROFILES.map((profile, index) => (
            <button
              className={`profile-option profile-option-${profile.id}`}
              key={profile.id}
              onClick={() => onSelect(profile)}
              aria-label={`Continue as ${profile.name}`}
            >
              <span className="profile-avatar">
                <span className="profile-avatar-halo" />
                <span className="profile-avatar-symbol">{profile.symbol}</span>
                <span className="profile-avatar-corner">{String(index + 1).padStart(2, "0")}</span>
              </span>
              <span className="profile-option-name">{profile.name}</span>
              <span className="profile-option-description">{profile.descriptor}</span>
            </button>
          ))}
        </div>
        <p className="profile-gate-footnote">ONE JOURNEY. FOUR WAYS TO EXPLORE.</p>
      </div>
      <footer className="profile-gate-footer">
        <span>© KISHAN D SALIAN</span>
        <span>SELECT A PROFILE TO ENTER <i>↗</i></span>
        <span>BUILT WITH CURIOSITY</span>
      </footer>
    </section>
  );
}

function SectionLabel({ index, children }) {
  return <div className="section-label"><span>{index}</span><i />{children}</div>;
}

function ProjectVisual({ kind }) {
  return (
    <div className={`project-visual visual-${kind}`} aria-hidden="true">
      {kind === "retirement" && <><div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-core"><span>FUND</span><strong>↗</strong></div><div className="visual-data data-a">+8.4%</div><div className="visual-data data-b">2048</div><div className="visual-line" /></>}
      {kind === "weather" && <><div className="weather-sun" /><div className="weather-cloud cloud-one" /><div className="weather-cloud cloud-two" /><div className="weather-temp">27°</div><div className="weather-caption">LIVE CONDITIONS</div><div className="weather-bars"><i /><i /><i /><i /><i /><i /><i /></div></>}
      {kind === "chatbot" && <><div className="chat-bubble bubble-left">How can I help?</div><div className="chat-bubble bubble-right">Course details</div><div className="chat-bubble bubble-left small-bubble">Here’s what I found.</div><div className="chat-orb">✳</div></>}
      {kind === "canvas" && <><div className="canvas-frame"><svg viewBox="0 0 300 180"><path d="M22 140 C65 18 90 170 142 82 S220 18 274 104" /><path d="M35 46 C70 106 101 16 151 110 S228 148 266 36" /></svg></div><span className="canvas-dot dot-one" /><span className="canvas-dot dot-two" /><span className="canvas-tag">GESTURE DETECTED</span></>}
      {kind === "wumpus" && <><div className="wumpus-grid">{Array.from({length: 25}, (_, i) => <i key={i} className={ [6, 12, 18].includes(i) ? "lit" : "" } />)}</div><div className="wumpus-token">✦</div><span className="wumpus-title">EXPLORE THE UNKNOWN</span></>}
      {kind === "food" && <><div className="food-sun" /><div className="food-type">FOOD<br/>FEST</div><div className="food-plate" /><div className="food-caption">A CAMPUS CELEBRATION</div></>}
      <span className="visual-index">VISUAL STUDY / 0{projects.findIndex(p => p.visual === kind) + 1}</span>
    </div>
  );
}

function ProjectCard({ project, onOpen, featured = false }) {
  return (
    <button className={`project-card ${featured ? "project-featured" : ""}`} onClick={() => onOpen(project)} aria-label={`Open ${project.title} details`}>
      <ProjectVisual kind={project.visual} />
      <div className="project-card-content">
        <div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div>
        <h3>{project.title}</h3>
        <p>{project.subtitle}</p>
        <div className="project-card-bottom"><span>{project.status}</span><span className="round-arrow"><ArrowUpRight size={17} /></span></div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
        <div className="modal-art"><ProjectVisual kind={project.visual} /></div>
        <div className="modal-copy">
          <div className="eyebrow">{project.number} / {project.category}</div>
          <h2 id="modal-title">{project.title}</h2>
          <p className="modal-subtitle">{project.subtitle}</p>
          <p className="modal-description">{project.description}</p>
          <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <div className="modal-actions">
            {project.link ? <a className="button button-primary" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16}/></a> : <span className="status-note"><Sparkles size={15}/> Research in progress</span>}
            {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14}/></a>}
          </div>
        </div>
      </section>
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [selectedViewer, setSelectedViewer] = useState(null);
  const [profileTransition, setProfileTransition] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setIntroVisible(false), reducedMotion ? 80 : 3300);
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPortfolio ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [showPortfolio]);

  const chooseViewer = (profile) => {
    setSelectedViewer(profile);
    // Every profile starts with a view tailored to its audience.
    setActiveFilter(profile.defaultFilter || "All");
    setProfileTransition(true);
    window.setTimeout(() => setShowPortfolio(true), 620);
  };

  const switchProfile = () => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
    setProfileTransition(false);
    setShowPortfolio(false);
    setIntroVisible(false);
  };

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    const visible = activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter.toLowerCase());
    const order = selectedViewer?.projectOrder || [];
    return [...visible].sort((a, b) => {
      const aIndex = order.indexOf(a.id);
      const bIndex = order.indexOf(b.id);
      return (aIndex < 0 ? 999 : aIndex) - (bIndex < 0 ? 999 : bIndex);
    });
  }, [activeFilter, selectedViewer]);

  const heroTarget = selectedViewer?.id === "scientist" ? "#research" : "#work";
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {introVisible && (
        <section className="cinematic-opening" aria-label="Kishan The Signal opening sequence">
          <div className="opening-atmosphere" />
          <div className="opening-frame opening-frame-top"><span>KISHAN / THE SIGNAL</span><span>A PORTFOLIO EXPERIENCE</span></div>
          <div className="opening-center">
            <p className="opening-overline">A PERSONAL PORTFOLIO EXPERIENCE</p>
            <div className="opening-title"><span>KISHAN</span><em>THE SIGNAL</em></div>
            <div className="opening-divider"><i /></div>
            <p className="opening-tagline">EVERY DATA POINT HAS A STORY.</p>
          </div>
          <div className="opening-frame opening-frame-bottom"><span>THINK. BUILD. LEARN.</span><span>EST. 2026</span></div>
          <button className="opening-skip" onClick={() => setIntroVisible(false)}>SKIP INTRO <ArrowUpRight size={14}/></button>
          <div className="opening-progress"><i /></div>
        </section>
      )}
      {!introVisible && !showPortfolio && <ProfileGate onSelect={chooseViewer} exiting={profileTransition} />}
      <div className={`site-shell profile-mode-${selectedViewer?.id || "default"} ${showPortfolio ? "portfolio-unlocked" : "portfolio-locked"}`} id="top">
        <div className="grain" aria-hidden="true" />
        <header className={`site-header ${scrolled ? "header-scrolled" : ""}`}>
          <div className="header-inner">
            <BrandMark />
            <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
              <a href="#story" onClick={closeMenu}>The story</a>
              <a href="#work" onClick={closeMenu}>Selected work</a>
              <a href="#research" onClick={closeMenu}>Research</a>
              <a href="#toolkit" onClick={closeMenu}>Toolkit</a>
              <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={14}/></a>
              <button className="profile-switcher" onClick={switchProfile} aria-label="Switch viewing profile">
                <span>{selectedViewer?.symbol || "K"}</span>
                <small>{selectedViewer?.name || "PROFILE"} <i>⌄</i></small>
              </button>
            </nav>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </header>

        <main>
          <section className="hero section-wrap">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="status-pulse" /> {selectedViewer?.kicker || "MCA STUDENT · MIT MANIPAL"} <span className="kicker-rule" /> INDIA</div>
              <h1>{selectedViewer?.heroLineOne || "Curiosity is"}<br/><em>{selectedViewer?.heroLineTwo || "my starting point."}</em></h1>
              <p className="hero-description">{selectedViewer?.intro || "I’m Kishan — learning to turn data into understanding, and understanding into better decisions."}</p>
              <div className="hero-actions">
                <a className="button button-primary" href={heroTarget}>{selectedViewer?.cta || "Explore my work"} <ArrowUpRight size={16}/></a>
                <a className="button button-quiet" href="#story">Get to know me <ArrowDown size={15}/></a>
              </div>
              <div className="hero-footnote"><span>01 — 06</span><span>SCROLL TO EXPLORE</span><div className="scroll-line" /></div>
            </div>
            <div className="hero-art">
              <div className="art-frame">
                <div className="art-topline"><span>FIELD NOTES / KS-026</span><span>ACADEMIC YEAR / 2026</span></div>
                <div className="art-portrait-wrap">
                  <div className="art-ring ring-a" /><div className="art-ring ring-b" />
                  <div className="portrait-disc"><img src="https://avatars.githubusercontent.com/u/207218147?v=4" alt="Kishan's GitHub profile avatar" /></div>
                  <div className="portrait-cross cross-a">+</div><div className="portrait-cross cross-b">+</div>
                  <div className="orbit-label label-a">ANALYSE</div><div className="orbit-label label-b">QUESTION</div>
                </div>
                <div className="art-bottomline"><span>THINK / BUILD / LEARN</span><span>FIG. 01</span></div>
              </div>
              <div className="hero-stamp"><span>THE</span><strong>SIGNAL</strong><i>IS IN PROGRESS</i></div>
              <div className="hero-coordinate">MANIPAL<br/>INDIA</div>
            </div>
            <div className="hero-side-note">A PORTFOLIO IN PROGRESS — UPDATED AS I GROW</div>
          </section>

          {selectedViewer && (
            <section className="profile-lens section-wrap" aria-label={`${selectedViewer.name} profile summary`}>
              <div className="profile-lens-heading">
                <div><span className="lens-overline">{selectedViewer.badge} / PERSONALIZED VIEW</span><h2>{selectedViewer.lensTitle}</h2></div>
                <p>{selectedViewer.lensIntro}</p>
              </div>
              <div className="profile-lens-cards">
                {selectedViewer.focus.map((item, index) => (
                  <article className="lens-card" key={item.label}>
                    <span className="lens-card-index">0{index + 1}</span>
                    <span className="lens-card-label">{item.label}</span>
                    <strong>{item.value}</strong>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({length: 2}, (_, i) => <div className="ticker-group" key={i}><span>DATA ANALYTICS</span><b>✳</b><span>PREDICTIVE MODELLING</span><b>✳</b><span>PROBLEM SOLVING</span><b>✳</b><span>CONTINUOUS LEARNING</span><b>✳</b></div>)}</div></section>

          <section id="story" className="story-section section-wrap section-space">
            <div className="section-heading reveal"><SectionLabel index="01">THE BEGINNING</SectionLabel><h2>Learning to see<br/><em>the signal in the noise.</em></h2></div>
            <div className="story-grid">
              <div className="story-intro reveal"><span className="big-quote">“</span><p>I’m an MCA student at <strong>MIT Manipal</strong> with a growing interest in data analytics, predictive modelling and the questions that data can help answer.</p></div>
              <div className="story-detail reveal"><p>My journey began with computer applications, where strong academic foundations and hands-on projects pushed me to explore beyond the syllabus. Today, I’m building towards a career that starts with data analysis and grows into data science.</p><p>I enjoy understanding how things work: asking better questions, breaking problems into smaller pieces, and building something useful from what I learn.</p><a className="inline-link" href={LINKEDIN} target="_blank" rel="noreferrer">A little more about my journey <ArrowUpRight size={15}/></a></div>
            </div>
            <div className="journey-strip reveal">
              <div className="journey-item"><span>01 / FOUNDATION</span><strong>BCA</strong><p>Computer applications</p><small>CGPA 9.6 / 10</small></div>
              <div className="journey-connector"><i/><ArrowRight size={17}/><i/></div>
              <div className="journey-item journey-current"><span>02 / RIGHT NOW</span><strong>MCA</strong><p>MIT Manipal · School of Computer Engineering</p><small>Learning by building</small></div>
              <div className="journey-connector"><i/><ArrowRight size={17}/><i/></div>
              <div className="journey-item"><span>03 / THE DIRECTION</span><strong>Data Science</strong><p>Analysis → modelling → insight</p><small>One step at a time</small></div>
            </div>
          </section>

          <section id="work" className="work-section section-space">
            <div className="section-wrap">
              <div className="work-heading reveal"><div><SectionLabel index="02">{selectedViewer?.workLabel || "SELECTED WORK"}</SectionLabel><h2>{selectedViewer?.workTitle || <>Things I’ve <em>made.</em></>}</h2></div><p>{selectedViewer?.workIntro || "A collection of projects, experiments and questions I’ve explored through code. Each one taught me something different."}</p></div>
              <div className="filter-row reveal" role="group" aria-label="Filter projects">
                {["All", "Data", "AI", "Web"].map((filter) => <button key={filter} className={activeFilter === filter ? "filter-active" : ""} onClick={() => setActiveFilter(filter)}>{filter}<span>{filter === "All" ? projects.length : projects.filter((p) => p.type === filter.toLowerCase()).length.toString().padStart(2, "0")}</span></button>)}
              </div>
              <div className="project-grid" key={activeFilter}>
                {filteredProjects.map((project, index) => {
                  const featured = activeFilter === "All" && project.featured;
                  return (
                    <div className={`project-grid-item ${featured ? "project-grid-featured" : ""}`} key={project.id} style={{ animationDelay: `${index * 70}ms` }}>
                      <ProjectCard project={project} onOpen={setSelectedProject} featured={featured}/>
                    </div>
                  );
                })}
              </div>
              <div className="work-footer reveal"><span>MORE EXPERIMENTS WILL FIND THEIR WAY HERE.</span><a href={GITHUB} target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight size={15}/></a></div>
            </div>
          </section>

          <section id="research" className="research-section section-wrap section-space">
            <div className="section-heading reveal"><SectionLabel index="03">THE RESEARCH LAB</SectionLabel><h2>Looking beyond<br/><em>the obvious answer.</em></h2></div>
            <div className="research-card reveal">
              <div className="research-main">
                <div className="research-status"><span className="status-pulse"/> ONGOING MCA RESEARCH</div>
                <p className="research-overline">PREDICTIVE ANALYTICS / FINANCIAL MODELLING</p>
                <h3>Retirement Fund<br/><em>Estimation.</em></h3>
                <p className="research-description">How can we estimate the value of a retirement fund at a person’s expected retirement age? This research explores the question using synthetic financial data and predictive models.</p>
                <div className="research-tags"><span>Python</span><span>Regression</span><span>Model evaluation</span><span>Synthetic data</span></div>
              </div>
              <div className="research-side">
                <div className="research-chart-title"><span>MODEL COMPARISON</span><span>CONCEPT / 01</span></div>
                <div className="chart-legend"><span><i className="legend-a"/> Financial baseline</span><span><i className="legend-b"/> ML models</span></div>
                <div className="chart-stage">
                  <div className="chart-y-label">ESTIMATED VALUE</div>
                  <div className="chart-grid-lines"><i/><i/><i/><i/></div>
                  <svg viewBox="0 0 420 190" preserveAspectRatio="none" role="img" aria-label="Illustrative model comparison curves, not measured results">
                    <path className="chart-area" d="M0 158 C55 145 70 124 112 126 S181 104 218 92 S295 76 330 48 S390 34 420 16 L420 190 L0 190Z"/>
                    <path className="chart-line chart-line-a" d="M0 158 C55 145 70 124 112 126 S181 104 218 92 S295 76 330 48 S390 34 420 16"/>
                    <path className="chart-line chart-line-b" d="M0 172 C55 160 75 147 112 141 S180 127 218 111 S290 100 330 77 S385 58 420 43"/>
                  </svg>
                  <div className="chart-x-labels"><span>NOW</span><span>TIME</span><span>RETIREMENT</span></div>
                </div>
                <p className="chart-note">Illustrative concept only — not experimental results.</p>
              </div>
            </div>
          </section>

          <section id="toolkit" className="toolkit-section section-wrap section-space">
            <div className="work-heading reveal"><div><SectionLabel index="04">THE TOOLKIT</SectionLabel><h2>What I work <em>with.</em></h2></div><p>A practical toolkit I’m developing through coursework and projects. I’d rather show what I use than claim expertise I haven’t earned.</p></div>
            <div className="toolkit-grid">
              {skills.map(({ name, detail, level, icon: Icon }, index) => <div className="skill-card reveal" key={name} style={{ transitionDelay: `${index * 55}ms` }}><div className="skill-top"><Icon size={19}/><span>{level}</span></div><strong>{name}</strong><p>{detail}</p></div>)}
            </div>
            <div className="toolkit-note reveal"><Sparkles size={16}/><span>Currently deepening my foundations in data analysis, statistics and machine learning.</span></div>
          </section>

          <section className="beyond-section section-wrap section-space">
            <div className="section-heading reveal"><SectionLabel index="05">OUTSIDE THE IDE</SectionLabel><h2>Progress is also<br/><em>people and persistence.</em></h2></div>
            <div className="beyond-grid">
              <div className="beyond-card reveal"><span className="beyond-number">01</span><div className="beyond-icon">✳</div><p className="eyebrow">INTER-COLLEGE FEST · NITTE</p><h3>First Prize</h3><p>Recognised at Cyber Quest, an inter-college event at Nitte.</p></div>
              <div className="beyond-card reveal"><span className="beyond-number">02</span><div className="beyond-icon">⌘</div><p className="eyebrow">INTER-COLLEGE FEST · MAHAVEER</p><h3>Second Prize</h3><p>Placed second in the Mahaveer Debugging competition.</p></div>
              <div className="beyond-card reveal"><span className="beyond-number">03</span><div className="beyond-icon">♡</div><p className="eyebrow">COMMUNITY</p><h3>NSS Volunteer</h3><p>Two years of volunteering, teamwork and learning beyond the classroom.</p></div>
            </div>
          </section>

          <section id="contact" className="contact-section section-wrap">
            <div className="contact-top reveal"><SectionLabel index="06">TO BE CONTINUED</SectionLabel><span>THE NEXT CHAPTER STARTS WITH A CONVERSATION.</span></div>
            <div className="contact-content reveal"><h2>Have a good<br/><em>question?</em></h2><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={21}/></a><p>I’m always interested in thoughtful conversations about data, technology and opportunities to learn by doing.</p></div>
            <div className="contact-bottom">
              <BrandMark />
              <div className="social-links"><a href={GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={18}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={18}/></a></div>
              <span>© {new Date().getFullYear()} KISHAN D SALIAN · MADE WITH CURIOSITY.</span>
            </div>
          </section>
        </main>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);