import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SiteNav } from "@/components/site-nav";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} | Yash — Developer`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="project-detail section-wrap" aria-busy="true">
          <p>Loading project…</p>
        </main>
      }
    >
      <ProjectPageContent params={params} />
    </Suspense>
  );
}

async function ProjectPageContent({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const hasFeatures = project.completed.length > 0 || project.planned.length > 0;

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteNav />
      <main className="project-detail section-wrap" id="main">
        <div className="detail-breadcrumb">
          <Link href="/#projects">Projects</Link><span aria-hidden="true">/</span><span>{project.name}</span>
        </div>
        <section className="detail-hero">
          <div className="detail-hero-copy">
            <span className={`status status-${project.status === "Demo Ready" ? "ready" : "progress"}`}>
              <span />{project.status}
            </span>
            <span className="project-category">{project.category}</span>
            <h1>{project.name}</h1>
            {project.role && <span className="detail-role">Role <strong>{project.role}</strong></span>}
            <p>{project.description}</p>
            <div className="detail-actions">
              {project.liveUrl && (
                <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Visit live project <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.sourceUrl && (
                <a className="button button-secondary" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View source code <span aria-hidden="true">↗</span>
                </a>
              )}
              {!project.liveUrl && !project.sourceUrl && (
                <span className="detail-links-note">Demo and code links are unavailable until verified.</span>
              )}
            </div>
          </div>
          <span className="detail-index" aria-hidden="true">PROJECT / {String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
        </section>

        <div className="detail-visual-wrap">
          <ProjectVisual visual={project.visual} />
          {project.visual !== "cake" && (
            <p className="visual-note-global"><span aria-hidden="true">✳</span> Illustrative placeholder — not a screenshot of the working project.</p>
          )}
        </div>

        <div className="detail-content">
          <section className="detail-section detail-overview">
            <span className="section-kicker">THE PROJECT</span>
            <div><h2>Overview</h2><p>{project.overview}</p></div>
          </section>

          {hasFeatures && (
            <section className="detail-section">
              <span className="section-kicker">SCOPE & STATUS</span>
              <div className="detail-feature-columns">
                {project.completed.length > 0 && (
                  <div className="detail-feature-block">
                    <h2>{project.status === "Demo Ready" ? "Showcase" : "Work to date"}</h2>
                    <ul>
                      {project.completed.map((feature) => <li key={feature}><span aria-hidden="true">✳</span>{feature}</li>)}
                    </ul>
                  </div>
                )}
                {project.planned.length > 0 && (
                  <div className="detail-feature-block planned-block">
                    <h2>{project.status === "Demo Ready" ? "Future considerations" : "In development / associated scope"}</h2>
                    <ul>
                      {project.planned.map((feature) => <li key={feature}><span aria-hidden="true">↗</span>{feature}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          <section className="detail-section">
            <span className="section-kicker">THE TOOLKIT</span>
            <div><h2>Technologies</h2><div className="tag-list detail-tags">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div></div>
          </section>

          <section className="detail-section detail-feature-columns">
            <div className="detail-feature-block">
              <span className="section-kicker">A THOUGHTFUL CHALLENGE</span>
              <h2>What I&apos;m solving</h2>
              <p>{project.challenge}</p>
            </div>
            <div className="detail-feature-block planned-block">
              <span className="section-kicker">LOOKING AHEAD</span>
              <h2>Next steps</h2>
              <p>{project.nextSteps}</p>
            </div>
          </section>
        </div>
        <div className="detail-back"><Link className="text-link" href="/#projects">← Back to all projects</Link></div>
      </main>
      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <Link className="brand footer-brand" href="/"><span className="brand-mark">y.</span><span>yash<span className="brand-muted">.dev</span></span></Link>
          <span className="footer-credit">Made with curiosity <span aria-hidden="true">✳</span></span>
          <div className="footer-links"><Link href="/#about">About</Link><Link href="/#projects">Projects</Link><Link href="/#contact">Contact</Link></div>
          <span className="copyright">© Yash</span>
        </div>
      </footer>
    </>
  );
}
