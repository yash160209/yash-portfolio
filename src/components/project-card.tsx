import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project, index }: { project: Project; index: string }) {
  return (
    <article className="project-card">
      {project.previewImage ? (
        <Link
          className="project-visual-link"
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.name} project details`}
          style={{ aspectRatio: `${project.previewImage.width} / ${project.previewImage.height}`, overflow: "hidden" }}
        >
          <Image
            src={project.previewImage.src}
            alt={project.previewImage.alt}
            width={project.previewImage.width}
            height={project.previewImage.height}
            sizes="(max-width: 620px) 100vw, (max-width: 900px) 48vw, 33vw"
            style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Link>
      ) : project.visual === "cake" ? (
        <div className="project-visual-link">
          <ProjectVisual
            visual={project.visual}
            compact
            previewHref={`/projects/${project.slug}`}
          />
        </div>
      ) : (
        <Link
          className="project-visual-link"
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.name} project details`}
        >
          <ProjectVisual visual={project.visual} compact />
        </Link>
      )}
      <div className="project-card-body">
        <div className="project-card-topline">
          <span className="project-index">{index}</span>
          <span className={`status status-${project.status === "Demo Ready" ? "ready" : "progress"}`}>
            <span />{project.status}
          </span>
        </div>
        <span className="project-category">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.role && <p className="project-role">Role <span>{project.role}</span></p>}
        {project.technologies.length > 0 && (
          <div className="tag-list project-tags" aria-label="Technologies">
            {project.technologies.slice(0, 4).map((technology) => (
              <span className="tag" key={technology}>{technology}</span>
            ))}
          </div>
        )}
        <div className="project-card-actions">
          <Link className="project-action project-action-details" href={`/projects/${project.slug}`}>
            Details <span aria-hidden="true">↗</span>
          </Link>
          {project.liveUrl ? (
            <a
              className="project-action project-action-external"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo <span aria-hidden="true">↗</span>
            </a>
          ) : project.status === "Demo Ready" ? (
            <span className="project-action project-action-unavailable" aria-disabled="true">
              Live Demo unavailable
            </span>
          ) : (
            <span className="project-action project-action-unavailable" aria-disabled="true">
              In Development
            </span>
          )}
          {project.sourceUrl ? (
            <a
              className="project-action project-action-code"
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.cardSourceLabel ?? project.sourceLabel ?? "View Code"} <span aria-hidden="true">↗</span>
            </a>
          ) : project.status === "Demo Ready" ? (
            <span className="project-action project-action-unavailable" aria-disabled="true">
              Code unavailable
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
