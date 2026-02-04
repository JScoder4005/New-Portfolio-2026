'use client';

import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div className="group min-w-[400px] md:min-w-[500px] glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-500">
      {/* Project Number */}
      <div className="text-6xl font-bold text-primary/20 mb-4">
        {project.id.padStart(2, '0')}
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-6 line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 glass rounded-full text-sm hover:bg-white/10 transition-all duration-300"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-sm hover:scale-105 transition-transform duration-300"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};
