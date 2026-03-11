import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col divide-y divide-border'>
      {posts.map(post => (
        <li key={post.slug} className='group'>
          <Link
            href={`/posts/${post.slug}`}
            className='flex flex-col justify-between gap-x-4 gap-y-1 py-4 sm:flex-row sm:items-center transition-colors hover:text-foreground'
          >
            <div className='max-w-lg'>
              <p className='text-base font-semibold group-hover:text-primary transition-colors flex items-center gap-1'>
                {post.title}
                <ArrowRightIcon className='h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-60 group-hover:translate-x-0' />
              </p>
              <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                {post.summary}
              </p>
            </div>

            {post.publishedAt && (
              <p className='text-xs font-light text-muted-foreground tabular-nums shrink-0'>
                {formatDate(post.publishedAt)}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  )
}