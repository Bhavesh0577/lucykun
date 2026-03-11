'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export default function NavLink({
  href,
  children
}: {
  href: string
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <Link
      href={href}
      className={cn(
        'relative transition-colors hover:text-foreground',
        isActive ? 'text-foreground' : 'text-muted-foreground'
      )}
    >
      {children}
      {isActive && (
        <span className='absolute -bottom-1 left-0 right-0 h-px bg-foreground rounded-full' />
      )}
    </Link>
  )
}
