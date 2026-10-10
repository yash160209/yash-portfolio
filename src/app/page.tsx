import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { SiteNav } from "@/components/site-nav";
import { contact, projects } from "@/data/projects";

const skills = [
  { name: "Next.js", mark: "N" },
  { name: "TypeScript", mark: "TS" },
  { name: "Tailwind CSS", mark: "TW" },
  { name: "React Three Fiber", mark: "R3F" },
  { name: "Unity / C#", mark: "C#" },
  { name: "HTML", mark: "</>" },
  { name: "CSS", mark: "#" },
  { name: "JavaScript", mark: "JS" },
];

const journey = [
  ["CURRENT", "Student developer", "I’m an EXTC diploma student with a growing interest in building for the web and exploring interactive technology."],
  ["PRACTICE", "Learning by building", "I turn ideas into modern websites and tech projects, improving my development skills as I go."],
  ["GOAL", "Looking ahead", "Build real projects, work with clients, and grow as a professional developer."],
];

function ArrowUpRight() {
  return <span aria-hidden="true">↗</span>;
}

function ContactOptions() {
  const socialLinks = [
    { label: "GitHub", href: contact.githubUrl, description: "View my GitHub profile", mark: "GH" },
    { label: "Instagram", href: contact.instagramUrl, description: "Follow me on Instagram", mark: "IG" },
  ];

  return (
    <div className="contact-options">
      <a className="button button-primary contact-email" href={`mailto:${contact.email}`}>
        <span className="contact-link-mark" aria-hidden="true">@</span>
        <span className="contact-link-copy">
          <span>Email</span>
          <span>{contact.email}</span>
        </span>
        <ArrowUpRight />
      </a>
      {socialLinks.map((link) => (
        <a
          className="social-link"
          href={link.href}
          key={link.label}
          aria-label={link.description}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-link-mark" aria-hidden="true">{link.mark}</span>
          <span className="contact-link-copy">
            <span>{link.label}</span>
            <span>{link.description}</span>
          </span>
          <ArrowUpRight />
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-content">
            <div className="eyebrow hero-identity">
              <span className="availability-dot" />
              YASH MAKWANA <span aria-hidden="true">/</span> DEVELOPER &amp; CREATIVE TECHNOLOGIST
            </div>
            <h1 className="hero-statement">
              I don&apos;t just imagine it.<br />
              <span>I build it.</span>
            </h1>
            <p className="hero-headline hero-supporting">
              I turn ideas into interactive experiences, useful websites, and ambitious digital projects — learning, experimenting, and building with every line of code.
            </p>
            <p className="hero-intro hero-personal">
              EXTC diploma student building modern websites and interactive technology projects.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore My Projects <ArrowUpRight /></a>
              <a className="button button-secondary" href="#contact">Let&apos;s Connect <ArrowUpRight /></a>
            </div>
            <div className="hero-footnote">
              <span className="scroll-mark" aria-hidden="true"><span /></span>
              <span>IDEAS IN MOTION <i aria-hidden="true">/</i> ALWAYS BUILDING</span>
            </div>
          </div>
          <a className="hero-visual" href="#projects" aria-label="View all projects">
            <div className="build-blueprint" aria-hidden="true">
              <span className="blueprint-corner corner-top" />
              <span className="blueprint-corner corner-bottom" />
              <div className="blueprint-label"><span>FIELD NOTES</span><span>001 — Y / DEV</span></div>
              <div className="construction-graphic">
                <span className="construction-line line-horizontal" />
                <span className="construction-line line-vertical" />
                <span className="construction-line line-diagonal" />
                <span className="construction-node node-left" />
                <span className="construction-node node-top" />
                <span className="construction-node node-right" />
                <span className="construction-node node-bottom" />
                <span className="construction-bracket bracket-left">&lt;</span>
                <span className="construction-monogram">y<span>.</span></span>
                <span className="construction-bracket bracket-right">/&gt;</span>
              </div>
              <div className="blueprint-caption"><span>THOUGHT → PROTOTYPE → BUILD</span><span>FIG. 01</span></div>
              <span className="blueprint-cross cross-one">+</span>
              <span className="blueprint-cross cross-two">+</span>
            </div>
            <span className="currently-building" aria-hidden="true">
              <span className="current-indicator" />
              <span className="current-copy">
                <span className="current-label">CURRENTLY BUILDING</span>
                <span className="current-project">BUILDING WHAT&apos;S NEXT.</span>
              </span>
              <span className="current-arrow">↗</span>
            </span>
            <span className="hero-visual-index" aria-hidden="true">Y / 001</span>
          </a>
          <div className="hero-bottom-line" aria-hidden="true"><span>CREATIVE DEVELOPMENT</span><span>BASED IN CURIOSITY <i>✳</i></span></div>
        </section>

        <section className="intro-strip" aria-label="Introduction">
          <div className="section-wrap intro-strip-inner">
            <span>THOUGHTFUL BY DESIGN</span>
            <span aria-hidden="true">✳</span>
            <span>BUILT FOR PEOPLE</span>
            <span aria-hidden="true">✳</span>
            <span>ALWAYS IN PROGRESS</span>
          </div>
        </section>

        <section className="section-wrap section-pad about-section" id="about">
          <div className="section-heading">
            <span className="section-kicker">A LITTLE ABOUT ME</span>
            <span className="section-number">01 / 05</span>
          </div>
          <div className="about-grid">
            <h2>Developer &amp; creative<br /><span>technologist.</span></h2>
            <div className="about-copy">
              <p>
                I&apos;m Yash Makwana, an EXTC diploma student who builds modern websites and interactive tech projects.
              </p>
              <p>
                I enjoy turning ideas into working digital experiences while continuously improving my development skills.
              </p>
              <a className="text-link" href="#projects">A few things I&apos;ve been making <ArrowUpRight /></a>
            </div>
          </div>
          <div className="about-signoff"><span>Currently:</span> turning curiosity into code <i aria-hidden="true">✳</i></div>
        </section>

        <section className="section-wrap section-pad projects-section" id="projects">
          <div className="section-heading">
            <span className="section-kicker">SELECTED WORK</span>
            <span className="section-number">02 / 05</span>
          </div>
          <div className="section-title-row">
            <div>
              <h2>Projects &amp; <span>experiments.</span></h2>
              <p className="section-lede">A selection of ideas I&apos;m exploring, building, and learning from.</p>
            </div>
            <span className="project-count">0{projects.length} <span>PROJECTS</span></span>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={`0${index + 1}`} key={project.slug} />
            ))}
          </div>
          <p className="visual-note-global"><span aria-hidden="true">✳</span> Project visuals are illustrative placeholders, not screenshots of the working projects.</p>
        </section>

        <section className="section-wrap section-pad skills-section" id="skills">
          <div className="section-heading">
            <span className="section-kicker">TOOLS & TECHNOLOGIES</span>
            <span className="section-number">03 / 05</span>
          </div>
          <div className="skills-layout">
            <div className="skills-intro">
              <h2>Tools I work<br /><span>with.</span></h2>
              <p>A growing toolkit for building modern websites and interactive technology projects.</p>
            </div>
            <ul className="skills-cards">
              {skills.map((skill) => (
                <li className="skill-card" key={skill.name}>
                  <span className="skill-mark" aria-hidden="true">{skill.mark}</span>
                  <span>{skill.name}</span>
                  <span className="skill-card-arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-wrap section-pad journey-section" id="journey">
          <div className="section-heading">
            <span className="section-kicker">MY JOURNEY</span>
            <span className="section-number">04 / 05</span>
          </div>
          <div className="approach-layout">
            <div className="approach-intro">
              <h2>Learning by building.<br /><span>Growing with every idea.</span></h2>
              <p>My journey is about exploring technology, making real things, and steadily growing as a developer.</p>
            </div>
            <div className="approach-list">
              {journey.map(([number, title, description]) => (
                <article className="approach-step" key={number}>
                  <span className="approach-number">{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <span className="approach-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section-pad contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-orbit" aria-hidden="true" />
            <div className="section-heading">
              <span className="section-kicker">CONTACT &amp; COLLABORATION</span>
              <span className="section-number">05 / 05</span>
            </div>
            <div className="contact-content">
              <div>
                <span className="eyebrow"><span className="availability-dot" /> OPEN TO A CONVERSATION</span>
                <h2>Have an idea?<br /><span>Let&apos;s make it real.</span></h2>
                <p>Have a project idea or want to collaborate? I&apos;d be glad to connect and explore what we could build together.</p>
              </div>
              <ContactOptions />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <Link className="brand footer-brand" href="#home"><span className="brand-mark">y.</span><span>yash<span className="brand-muted">.dev</span></span></Link>
          <span className="footer-credit">Made with curiosity by Yash Makwana <span aria-hidden="true">✳</span></span>
          <div className="footer-links"><a href="#about">About</a><a href="#projects">Projects</a><a href="#journey">Journey</a><a href="#contact">Contact</a></div>
          <span className="copyright">© Yash Makwana</span>
        </div>
      </footer>
    </>
  );
}
