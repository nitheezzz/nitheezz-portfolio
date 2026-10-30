import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Github,
  Radio,
  Terminal,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Student Fee Management System",
    type: "WEB PROJECT",
    icon: Code2,
    note: "A project from my web development journey. I’m preparing a fuller walkthrough of how I approached it.",
    color: "mint",
  },
  {
    number: "02",
    title: "Daynote",
    type: "WEB PROJECT",
    icon: Terminal,
    note: "One of the projects I’m proud to include here. More of the story will follow as I document the build.",
    color: "peach",
  },
  {
    number: "03",
    title: "Websites",
    type: "WEB DEVELOPMENT",
    icon: Radio,
    note: "A growing collection of websites I’ve made. I’ll add individual links and project notes as they’re ready.",
    color: "blue",
  },
  {
    number: "04",
    title: "Arduino Uno & line-following robot",
    type: "HARDWARE · IoT",
    icon: Cpu,
    note: "Hands-on hardware projects that bring my curiosity beyond the browser and into the physical world.",
    color: "yellow",
  },
];

const skills = ["Web development", "IoT", "Arduino Uno", "Hardware projects"];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduceMotion ? 0 : 0.85,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="film-progress"
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? 0 : scaleX }}
    />
  );
}

function HardwareOrb() {
  const reduceMotion = useReducedMotion();
  const orbRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: orbRef,
    offset: ["start end", "end start"],
  });
  const floatY = useSpring(useTransform(scrollYProgress, [0, 1], [28, -34]), {
    stiffness: 55,
    damping: 20,
  });
  const orbitTilt = useTransform(scrollYProgress, [0, 1], [-7, 8]);

  return (
    <motion.div
      ref={orbRef}
      className="orb-stage"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.78, rotate: -8, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
      transition={{ duration: reduceMotion ? 0 : 1.35, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { rotateY: 11, rotateX: -8, scale: 1.035 }}
      style={{ y: reduceMotion ? 0 : floatY, rotateZ: reduceMotion ? 0 : orbitTilt, transformStyle: "preserve-3d" }}
    >
      <div className="orb-halo" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orb-core"><span>NR</span><i /></div>
      <div className="orb-chip chip-one">&lt;/&gt;</div>
      <div className="orb-chip chip-two">01</div>
      <div className="orb-chip chip-three"><Cpu size={17} /></div>
      <div className="orb-caption"><span className="pulse-dot" /> SIGNAL: CURIOUS</div>
      <div className="orb-crosshair crosshair-a" />
      <div className="orb-crosshair crosshair-b" />
      <div className="orb-coordinate">FIG. 01 — WEB / HARDWARE</div>
    </motion.div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const heroTitleTransition = {
    duration: reduceMotion ? 0 : 1.05,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  return (
    <main>
      <ScrollProgress />
      <div className="film-vignette" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nitheeshvar R, home">
          <span className="brand-mark">NR<span>_</span></span>
          <span className="brand-name">Nitheeshvar R</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work <span className="nav-count">04</span></a>
          <a href="#skills">Focus</a>
          <a className="nav-contact" href="#contact">Say hello <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <section className="hero page-wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-light hero-light-one" aria-hidden="true" />
        <div className="hero-light hero-light-two" aria-hidden="true" />
        <div className="hero-copy" id="main-content">
          <motion.div
            className="eyebrow hero-eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 12, letterSpacing: "0.22em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.08em" }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.18 }}
          >
            <span className="live-dot" /> FIRST-YEAR IT STUDENT <span className="eyebrow-divider">/</span> WEB + IoT
          </motion.div>
          <h1 id="hero-title" aria-label="I make ideas tangible.">
            <motion.span
              className="hero-line hero-line-one"
              aria-hidden="true"
              initial={reduceMotion ? false : { opacity: 0, y: 75, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ ...heroTitleTransition, delay: 0.24 }}
            >I make ideas</motion.span>
            <motion.span
              className="hero-line hero-line-two"
              aria-hidden="true"
              initial={reduceMotion ? false : { opacity: 0, y: 85, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ ...heroTitleTransition, delay: 0.42 }}
            >tangible<span className="hero-period">.</span></motion.span>
          </h1>
          <motion.p
            className="hero-intro"
            initial={reduceMotion ? false : { opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.7 }}
          >
            I’m Nitheeshvar — a first-year B.Tech IT student learning by building things for the screen and the real world.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.87 }}
          >
            <a className="button button-dark" href="#work">Explore my work <ArrowDown size={16} /></a>
            <a className="text-link" href="mailto:nitheeshvar200831@gmail.com">Let’s connect <ArrowUpRight size={15} /></a>
          </motion.div>
          <motion.div
            className="hero-footnote"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 1.1 }}
          ><span>01</span> LEARNING BY MAKING, ONE PROJECT AT A TIME</motion.div>
        </div>
        <HardwareOrb />
        <div className="hero-side-note" aria-hidden="true"><span>WEB</span><i /><span>HARDWARE</span><i /><span>IDEAS</span></div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDown size={11} /></a>
        <div className="hero-frame-note" aria-hidden="true">A PERSONAL FIELD NOTE <span>—</span> 2026</div>
      </section>

      <div className="ticker" aria-label="Web development, IoT, learning by making">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 2 }, (_, i) => (
            <div className="ticker-group" key={i}>
              <span>WEB DEVELOPMENT</span><b>✳</b><span>INTERNET OF THINGS</span><b>✳</b><span>LEARNING BY MAKING</span><b>✳</b><span>HARDWARE CURIOSITY</span><b>✳</b>
            </div>
          ))}
        </div>
      </div>

      <section className="about-section page-wrap section-pad" id="about" aria-labelledby="about-title">
        <Reveal className="section-kicker"><span>01 / A LITTLE ABOUT ME</span><span className="kicker-rule" /><span className="kicker-note">THE PERSON BEHIND THE PIXELS</span></Reveal>
        <div className="about-grid">
          <Reveal className="about-heading">
            <h2 id="about-title">Curious by nature.<br /><em>Learning by doing.</em></h2>
            <span className="hand-drawn-star" aria-hidden="true">✳</span>
          </Reveal>
          <Reveal className="about-body" delay={0.15}>
            <p className="about-lead">I’m at the beginning of my journey in Information Technology—and I like learning by making things.</p>
            <p>My interests span web development and IoT: from building websites to experimenting with hardware like the Arduino Uno and a line-following robot. This portfolio is a snapshot of what I’ve been working on so far, and what I’m excited to learn next.</p>
            <div className="about-signoff"><span className="signature-mark">n.</span><span>Nitheeshvar R<br /><small>B.Tech Information Technology · Year 1</small></span></div>
          </Reveal>
        </div>
      </section>

      <section className="work-section section-pad" id="work" aria-labelledby="work-title">
        <div className="page-wrap">
          <Reveal className="section-kicker"><span>02 / SELECTED PROJECTS</span><span className="kicker-rule" /><span className="kicker-note">A WORK IN PROGRESS, LIKE ME.</span></Reveal>
          <div className="work-heading-row">
            <Reveal><h2 id="work-title">Things I’ve<br /><em>been making.</em></h2></Reveal>
            <Reveal delay={0.15}><p className="work-heading-note">A few projects from my web and hardware explorations. I’m still writing up the details—more soon.</p></Reveal>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal className={`project-card project-${project.color}`} key={project.number} delay={index % 2 ? 0.15 : 0}>
                  <div className="project-topline"><span className="project-number">{project.number} <i /> {project.type}</span><span className="project-orbit" aria-hidden="true">↗</span></div>
                  <div className="project-art" aria-hidden="true">
                    <div className="art-window"><div className="window-top"><span /><span /><span /><small>nitheeshvar / project_{project.number}</small></div><div className="art-content"><Icon size={35} strokeWidth={1.4} /><span className="art-grid" /><span className="art-spark">✳</span><span className="art-label">MADE WITH CURIOSITY</span></div></div>
                  </div>
                  <div className="project-info"><h3>{project.title}</h3><p>{project.note}</p><span className="project-status"><span className="status-dot" /> PROJECT NOTES IN PROGRESS</span></div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="skills-section page-wrap section-pad" id="skills" aria-labelledby="skills-title">
        <Reveal className="section-kicker"><span>03 / CURRENT CURIOSITIES</span><span className="kicker-rule" /><span className="kicker-note">BUILD / TEST / LEARN</span></Reveal>
        <div className="skills-layout">
          <Reveal><h2 id="skills-title">What I’m<br /><em>exploring.</em></h2></Reveal>
          <Reveal className="skills-content" delay={0.15}>
            <p>I’m building my foundation one project at a time. These are the areas I’m spending time with:</p>
            <div className="skill-chips">{skills.map((skill, index) => <span className="skill-chip" key={skill}><small>0{index + 1}</small>{skill}</span>)}</div>
            <div className="skills-note"><Terminal size={15} /><span>STILL LEARNING. ALWAYS BUILDING.</span><span className="note-caret" /></div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner page-wrap">
          <Reveal className="section-kicker contact-kicker"><span>04 / LET’S CONNECT</span><span className="kicker-rule" /></Reveal>
          <Reveal className="contact-main" delay={0.15}>
            <div><span className="contact-overline"><span className="live-dot" /> OPEN TO GOOD CONVERSATIONS</span><h2 id="contact-title">Have an idea?<br /><em>Let’s talk.</em></h2></div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:nitheeshvar200831@gmail.com"><span>nitheeshvar200831@gmail.com</span><ArrowUpRight size={20} /></a>
              <a className="github-link" href="https://github.com/nitheezzz" target="_blank" rel="noreferrer"><Github size={17} /> Find me on GitHub <ArrowUpRight size={14} /></a>
            </div>
          </Reveal>
          <div className="contact-doodle" aria-hidden="true">✳</div>
        </div>
      </section>

      <footer className="site-footer page-wrap">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">NR<span>_</span></span><span className="brand-name">Nitheeshvar R</span></a>
        <span className="footer-note">MADE WITH CURIOSITY <span>✳</span> © {new Date().getFullYear()}</span>
        <a className="back-top" href="#top">BACK TO TOP <ArrowRight size={14} /></a>
      </footer>
    </main>
  );
}
