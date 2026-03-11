import Link from 'next/link'
import ThemeToggle from '@/components/theme-toggle'
import NavLink from '@/components/nav-link'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/80 py-5 backdrop-blur-md border-b border-border/40'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity'>
            BS
          </Link>
        </div>

        <ul className='flex items-center gap-7 text-sm font-light sm:gap-10'>
          <li>
            <NavLink href='/posts'>Posts</NavLink>
          </li>
          <li>
            <NavLink href='/projects'>Projects</NavLink>
          </li>
          <li>
            <NavLink href='/contact'>Contact</NavLink>
          </li>
        </ul>

        <div className='flex items-center gap-3'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
