import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'

export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section>
      <div>
        <h2 className='title mb-12'>Recent Projects</h2>
        <Projects projects={projects} />

        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground group'
        >
          <span className='underline decoration-1 underline-offset-2'>All projects</span>
          <svg className='h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M5 12h14M12 5l7 7-7 7'/></svg>
        </Link>
      </div>
    </section>
  )
}