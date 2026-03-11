import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { Badge } from '@/components/ui/badge'
import { ExternalLinkIcon, GitHubLogoIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'

export default function Projects({ projects }: { projects: ProjectMetadata[] }) {
    return (
        <ul className='flex flex-col gap-5'>
            {projects.map(project => (
                <li
                    key={project.slug}
                    className='group rounded-xl border border-border bg-muted/10 p-5 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-muted/30 hover:shadow-sm'
                >
                    <div className='flex items-start justify-between mb-2'>
                        <Link href={`/projects/${project.slug}`} className='flex items-center gap-1'>
                            <h3 className='font-semibold text-sm group-hover:text-primary transition-colors'>
                                {project.title}
                            </h3>
                            <ArrowTopRightIcon className='h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:opacity-60' />
                        </Link>
                        {project.status && (
                            <Badge variant="secondary" className='text-xs ml-2 shrink-0'>
                                {project.status.replace('-', ' ')}
                            </Badge>
                        )}
                    </div>

                    {project.description && (
                        <p className='text-sm text-muted-foreground mb-3 leading-relaxed'>
                            {project.description}
                        </p>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                        <div className='flex flex-wrap gap-1.5 mb-3'>
                            {project.technologies.slice(0, 4).map((tech, index) => (
                                <span
                                    key={index}
                                    className='text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md border border-border/50'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className='flex items-center gap-4 text-xs text-muted-foreground'>
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 hover:text-foreground transition-colors'
                            >
                                <GitHubLogoIcon className='h-3.5 w-3.5' />
                                Source
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 hover:text-foreground transition-colors'
                            >
                                <ExternalLinkIcon className='h-3.5 w-3.5' />
                                Live demo
                            </a>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}
