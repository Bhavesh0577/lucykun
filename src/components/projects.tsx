import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { Badge } from '@/components/ui/badge'
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

export default function Projects({ projects }: { projects: ProjectMetadata[] }) {
    return (
        <ul className='flex flex-col gap-8'>
            {projects.map(project => (
                <li
                    key={project.slug}
                    className='rounded-lg border p-4 hover:shadow-sm transition-shadow'
                >
                    <div className='flex items-start justify-between mb-2'>
                        <Link href={`/projects/${project.slug}`}>
                            <h3 className='font-medium hover:text-primary transition-colors'>
                                {project.title}
                            </h3>
                        </Link>
                        {project.status && (
                            <Badge variant="outline" className='text-xs'>
                                {project.status.replace('-', ' ')}
                            </Badge>
                        )}
                    </div>

                    {project.description && (
                        <p className='text-sm text-muted-foreground mb-3'>
                            {project.description}
                        </p>
                    )}

                    {project.technologies && project.technologies.length > 0 && (
                        <div className='flex flex-wrap gap-1 mb-3'>
                            {project.technologies.slice(0, 3).map((tech, index) => (
                                <span
                                    key={index}
                                    className='text-xs bg-muted px-2 py-1 rounded'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1 hover:text-foreground transition-colors'
                            >
                                <GitHubLogoIcon className='h-3 w-3' />
                                Code
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1 hover:text-foreground transition-colors'
                            >
                                <ExternalLinkIcon className='h-3 w-3' />
                                Demo
                            </a>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}
