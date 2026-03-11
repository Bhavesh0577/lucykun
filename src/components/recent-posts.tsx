import Link from 'next/link'
import Posts from './posts'
import { getPosts } from '@/lib/posts'

export default async function RecentPosts() {
  const posts = await getPosts(2)

  return (
    <section>
      <div>
        <h2 className='title mb-12'>Recent Posts</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground group'
        >
          <span className='underline decoration-1 underline-offset-2'>All posts</span>
          <svg className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
        </Link>
      </div>
    </section>
  )
}