import React from 'react'
import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'

export default async function Post({params}: {params: Promise<{slug: string}>}) {
    const {slug} = await params
    const post = await getPostBySlug(slug)
    if (!post) {
        notFound()
    }

    const {metadata, content} = post
    const {title, image, author, publishedAt} = metadata

    return (
        <section className='pb-24 pt-32'>
            <div className='container max-w-3xl'>
                {/* Back link */}
                <Link
                    href='/posts'
                    className='group mb-10 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
                >
                    <ArrowLeftIcon className='h-4 w-4 transition-transform group-hover:-translate-x-0.5' />
                    Back to posts
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
                    <h1 className='title'>{title}</h1>
                    <div className='mt-4 flex flex-wrap items-center gap-3'>
                        {author && (
                            <span className='inline-flex items-center rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs text-muted-foreground'>
                                {author}
                            </span>
                        )}
                        {publishedAt && (
                            <span className='text-xs text-muted-foreground tabular-nums'>
                                {formatDate(publishedAt)}
                            </span>
                        )}
                    </div>
                    <div className='mt-8 border-t border-border/50' />
                </header>

                <main className='prose prose-sm sm:prose-base dark:prose-invert max-w-none'>
                    <MDXContent source={content} />
                </main>
            </div>
        </section>
    )
}
