import React from 'react'
import { getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'

export default async function Project({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params
    const project = await getProjectBySlug(slug)
    
    if (!project) {
        notFound()
    }

    const {metadata, content} = project
    const {title, description, image, technologies, category, status, githubUrl, liveUrl, createdAt, featured} = metadata

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            case 'in-progress':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
            case 'planned':
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
        }
    }

    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl'>
                {/* Back link */}
                <Link
                    href='/projects'
                    className='group mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
                >
                    <ArrowLeftIcon className='h-4 w-4 transition-transform group-hover:-translate-x-0.5' />
                    Back to projects
                </Link>

                {image && (
                    <div className='relative mb-10 h-64 w-full overflow-hidden rounded-2xl sm:h-96'>
                        <Image
                            src={image}
                            alt={title || ''}
                            className='object-cover'
                            fill
                        />
                    </div>
                )}

                <header className='mb-12'>
                    {/* Status / category chips */}
                    <div className='mb-4 flex flex-wrap items-center gap-2'>
                        {featured && (
                            <span className='inline-flex items-center gap-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-0.5 text-xs font-medium text-yellow-600 dark:text-yellow-400'>
                                ⭐ Featured
                            </span>
                        )}
                        {status && (
                            <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-medium ${getStatusColor(status)}`}>
                                {status.replace('-', ' ')}
                            </span>
                        )}
                        {category && (
                            <span className='inline-flex items-center rounded-full border border-border/60 bg-muted/30 px-3 py-0.5 text-xs text-muted-foreground'>
                                {category}
                            </span>
                        )}
                    </div>

                    <h1 className='title'>{title}</h1>

                    {description && (
                        <p className='mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl'>
                            {description}
                        </p>
                    )}

                    {/* Action links */}
                    <div className='mt-6 flex flex-wrap items-center gap-3'>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90'
                            >
                                <GitHubLogoIcon className='h-3.5 w-3.5' />
                                Source Code
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-5 py-2 text-xs font-medium transition-colors hover:bg-muted/50'
                            >
                                <ExternalLinkIcon className='h-3.5 w-3.5' />
                                Live Demo
                            </a>
                        )}
                    </div>

                    {/* Tech stack */}
                    {technologies && technologies.length > 0 && (
                        <div className='mt-6'>
                            <p className='mb-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground'>Stack</p>
                            <div className='flex flex-wrap gap-1.5'>
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='rounded-md border border-border/60 bg-muted/30 px-2.5 py-1 text-xs text-foreground'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {createdAt && (
                        <p className='mt-4 text-xs text-muted-foreground tabular-nums'>
                            {formatDate(createdAt)}
                        </p>
                    )}

                    <div className='mt-8 border-t border-border/50' />
                </header>

                <main className='prose prose-sm sm:prose-base dark:prose-invert max-w-none'>
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}