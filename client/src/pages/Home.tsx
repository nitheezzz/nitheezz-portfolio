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
  Download,
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
    note: "A web project included in my portfolio. Technical details will be added as I prepare its project overview.",
    color: "mint",
  },
  {
    number: "02",
    title: "Daynote",
    type: "WEB PROJECT",
    icon: Terminal,
    note: "A web project included in this portfolio. A detailed project summary will follow.",
    color: "peach",
  },
  {
    number: "03",
    title: "Websites",
    type: "WEB DEVELOPMENT",
    icon: Radio,
    note: "A selection of websites I have created. Individual descriptions and links will be added as they are prepared.",
    color: "blue",
  },
  {
    number: "04",
    title: "Arduino Uno & line-following robot",
    type: "HARDWARE · IoT",
    icon: Cpu,
    note: "Hands-on hardware projects that reflect my interest in IoT and building beyond the browser.",
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

function PortraitStage() {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start end", "end start"],
  });
  const floatY = useSpring(useTransform(scrollYProgress, [0, 1], [18, -22]), {
    stiffness: 55,
    damping: 20,
  });

  return (
    <motion.div
      ref={stageRef}
      className="orb-stage portrait-stage"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, filter: "blur(8px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
      style={{ y: reduceMotion ? 0 : floatY }}
    >
      <div className="orb-halo" aria-hidden="true" />
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="orbit orbit-three" aria-hidden="true" />
      <figure className="portrait-frame">
        <img
          src="/manus-storage/261003g.jpg_af52cbdb.webp"
          alt="Portrait of Nitheeshvar R wearing a light shirt."
          loading="eager"
          decoding="async"
          draggable="false"
        />
        <figcaption className="portrait-caption">
          <span className="portrait-indicator" aria-hidden="true" />
          <span>PROFILE / 001</span>
          <span className="caption-separator" aria-hidden="true" />
          <span>NITHEESHVAR R</span>
        </figcaption>
      </figure>
      <div className="orb-chip chip-one" aria-hidden="true">01</div>
      <div className="orb-chip chip-two" aria-hidden="true">&lt;/&gt;</div>
      <div className="orb-chip chip-three" aria-hidden="true"><Cpu size={17} /></div>
      <div className="orb-caption"><span className="pulse-dot" /> WEB DEVELOPMENT · IoT</div>
      <div className="orb-crosshair crosshair-a" aria-hidden="true" />
      <div className="orb-crosshair crosshair-b" aria-hidden="true" />
      <div className="orb-coordinate" aria-hidden="true">B.TECH IT · YEAR 1</div>
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
          <a href="#work">Projects <span className="nav-count">04</span></a>
          <a href="#skills">Focus</a>
          <a className="nav-contact" href="#contact">Contact <ArrowUpRight size={14} /></a>
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
            <span className="live-dot" /> B.TECH IT · YEAR 1 <span className="eyebrow-divider">/</span> WEB + IoT
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
            I am Nitheeshvar R, a first-year B.Tech IT student developing practical experience in web development and IoT.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.87 }}
          >
            <a className="button button-dark" href="#work">View selected projects <ArrowDown size={16} /></a>
            <a className="resume-link" href="/manus-storage/NITHEESHVAR_R_Resume-4_b8bb8e64.pdf" download="Nitheeshvar-R-Resume.pdf" type="application/pdf"><Download size={15} /> Download résumé</a>
            <a className="text-link" href="mailto:nitheeshvar200831@gmail.com">Contact me <ArrowUpRight size={15} /></a>
          </motion.div>
          <motion.div
            className="hero-footnote"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: 1.1 }}
          ><span>01</span> DEVELOPING PRACTICAL EXPERIENCE THROUGH PROJECTS</motion.div>
        </div>
        <PortraitStage />
        <div className="hero-side-note" aria-hidden="true"><span>WEB</span><i /><span>HARDWARE</span><i /><span>IoT</span></div>
        <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDown size={11} /></a>
        <div className="hero-frame-note" aria-hidden="true">A PERSONAL PORTFOLIO <span>—</span> 2026</div>
      </section>

      <div className="ticker">
        <div className="ticker-group" aria-label="Areas of focus">
          <span>WEB DEVELOPMENT</span><b aria-hidden="true">✳</b><span>INTERNET OF THINGS</span><b aria-hidden="true">✳</b><span>PROJECT WORK</span><b aria-hidden="true">✳</b><span>HARDWARE</span>
        </div>
      </div>

      <section className="about-section page-wrap section-pad" id="about" aria-labelledby="about-title">
        <Reveal className="section-kicker"><span>01 / PROFILE</span><span className="kicker-rule" /><span className="kicker-note">BACKGROUND &amp; INTERESTS</span></Reveal>
        <div className="about-grid">
          <Reveal className="about-heading">
            <h2 id="about-title">Focused on learning.<br /><em>Grounded in building.</em></h2>
            <span className="hand-drawn-star" aria-hidden="true">✳</span>
          </Reveal>
          <Reveal className="about-body" delay={0.15}>
            <p className="about-lead">I am a first-year B.Tech student in Information Technology with an interest in web development and IoT.</p>
            <p>My work so far includes websites, a Student Fee Management System, Daynote, and hardware projects involving Arduino Uno and a line-following robot. I am continuing to develop my skills through hands-on project work.</p>
            <div className="about-signoff"><span className="signature-mark">n.</span><span>Nitheeshvar R<br /><small>B.Tech Information Technology · Year 1</small></span></div>
          </Reveal>
        </div>
      </section>

      <section className="work-section section-pad" id="work" aria-labelledby="work-title">
        <div className="page-wrap">
          <Reveal className="section-kicker"><span>02 / SELECTED PROJECTS</span><span className="kicker-rule" /><span className="kicker-note">WEB DEVELOPMENT &amp; HARDWARE</span></Reveal>
          <div className="work-heading-row">
            <Reveal><h2 id="work-title">Selected projects<br /><em>and explorations.</em></h2></Reveal>
            <Reveal delay={0.15}><p className="work-heading-note">Selected examples from my web development and hardware work. Project descriptions will be expanded as I document each one.</p></Reveal>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal className={`project-card project-${project.color}`} key={project.number} delay={index % 2 ? 0.15 : 0}>
                  <div className="project-topline"><span className="project-number">{project.number} <i /> {project.type}</span><span className="project-orbit" aria-hidden="true">↗</span></div>
                  <div className="project-art" aria-hidden="true">
                    <div className="art-window"><div className="window-top"><span /><span /><span /><small>nitheeshvar / project_{project.number}</small></div><div className="art-content"><Icon size={35} strokeWidth={1.4} /><span className="art-grid" /><span className="art-spark">✳</span><span className="art-label">PROJECT / {project.number}</span></div></div>
                  </div>
                  <div className="project-info"><h3>{project.title}</h3><p>{project.note}</p><span className="project-status"><span className="status-dot" /> PROJECT DETAILS IN PREPARATION</span></div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="skills-section page-wrap section-pad" id="skills" aria-labelledby="skills-title">
        <Reveal className="section-kicker"><span>03 / AREAS OF FOCUS</span><span className="kicker-rule" /><span className="kicker-note">CURRENT DEVELOPMENT FOCUS</span></Reveal>
        <div className="skills-layout">
          <Reveal><h2 id="skills-title">Areas of<br /><em>focus.</em></h2></Reveal>
          <Reveal className="skills-content" delay={0.15}>
            <p>My current areas of focus include:</p>
            <div className="skill-chips">{skills.map((skill, index) => <span className="skill-chip" key={skill}><small>0{index + 1}</small>{skill}</span>)}</div>
            <div className="skills-note"><Terminal size={15} /><span>CONTINUING TO DEVELOP PRACTICAL SKILLS</span><span className="note-caret" /></div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner page-wrap">
          <Reveal className="section-kicker contact-kicker"><span>04 / CONTACT</span><span className="kicker-rule" /></Reveal>
          <Reveal className="contact-main" delay={0.15}>
            <div><span className="contact-overline"><span className="live-dot" /> OPEN TO PROFESSIONAL OPPORTUNITIES</span><h2 id="contact-title">Interested in working together?<br /><em>Get in touch.</em></h2></div>
            <div className="contact-actions">
              <p className="contact-note">For professional inquiries and project opportunities, please email me.</p>
              <a className="contact-email" href="mailto:nitheeshvar200831@gmail.com"><span>nitheeshvar200831@gmail.com</span><ArrowUpRight size={20} /></a>
              <a className="github-link" href="https://github.com/nitheezzz" target="_blank" rel="noreferrer"><Github size={17} /> View GitHub profile <ArrowUpRight size={14} /></a>
            </div>
          </Reveal>
          <div className="contact-doodle" aria-hidden="true">✳</div>
        </div>
      </section>

      <footer className="site-footer page-wrap">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">NR<span>_</span></span><span className="brand-name">Nitheeshvar R</span></a>
        <span className="footer-note">PROFESSIONAL PORTFOLIO <span>✳</span> © {new Date().getFullYear()}</span>
        <a className="back-top" href="#top">BACK TO TOP <ArrowRight size={14} /></a>
      </footer>
    </main>
  );
}
