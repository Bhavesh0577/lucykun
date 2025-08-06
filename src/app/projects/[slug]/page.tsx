import React from 'react'
import { getProjectBySlug } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { Badge } from '@/components/ui/badge'

export default async function Project({params}: {params: {slug: string}}) {
    const {slug} = params
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
            <div className='container max-w-4xl'>
                <Link
                    href='/projects'
                    className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
                >
                    <ArrowLeftIcon className='h-5 w-5' />
                    <span>Back to projects</span>
                </Link>

                {image && (
                    <div className='relative mb-8 h-80 w-full overflow-hidden rounded-lg md:h-96'>
                        <Image
                            src={image}
                            alt={title || ''}
                            className='object-cover'
                            fill
                        />
                    </div>
                )}

                <header className='mb-8'>
                    <div className='mb-4 flex flex-wrap items-center gap-3'>
                        {featured && (
                            <Badge variant="secondary" className='bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'>
                                ⭐ Featured
                            </Badge>
                        )}
                        {status && (
                            <Badge className={getStatusColor(status)}>
                                {status.replace('-', ' ')}
                            </Badge>
                        )}
                        {category && (
                            <Badge variant="outline">
                                {category}
                            </Badge>
                        )}
                    </div>

                    <h1 className='title mb-4'>{title}</h1>
                    
                    {description && (
                        <p className='text-lg text-muted-foreground mb-6'>
                            {description}
                        </p>
                    )}

                    <div className='flex flex-wrap items-center gap-4 mb-6'>
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
                            >
                                <GitHubLogoIcon className='h-4 w-4' />
                                View Code
                            </a>
                        )}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground'
                            >
                                <ExternalLinkIcon className='h-4 w-4' />
                                Live Demo
                            </a>
                        )}
                    </div>

                    {technologies && technologies.length > 0 && (
                        <div className='mb-6'>
                            <h3 className='mb-3 text-sm font-medium text-muted-foreground'>Technologies Used</h3>
                            <div className='flex flex-wrap gap-2'>
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className='rounded-full bg-muted px-3 py-1 text-sm font-medium'
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {createdAt && (
                        <p className='text-sm text-muted-foreground'>
                            Created on {formatDate(createdAt)}
                        </p>
                    )}
                </header>

                <main className='prose prose-lg dark:prose-invert max-w-none'>
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}