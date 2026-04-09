import { FlipWords } from './ui/flip-words'
import { Button } from '@/components/ui/button'
import { ArrowDownToLineIcon, ArrowUpRightIcon } from 'lucide-react'

export default function Intro() {
  return (
    <section className='flex flex-col items-start gap-y-6'>
      {/* Availability badge */}
      <div className='inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/30 px-3 py-1 text-xs text-muted-foreground'>
        <span className='relative flex h-2 w-2'>
          <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75'></span>
          <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500'></span>
        </span>
        Available for opportunities
      </div>

      {/* Heading */}
      <div>
        <h1 className='font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl'>
          Hey, I&#39;m Bhavesh
          <FlipWords words={[".", " Shrigiri"]} />
        </h1>
        <p className='mt-4 text-sm font-normal text-muted-foreground leading-relaxed max-w-sm sm:text-base sm:max-w-md'>
          Software engineer based in Bengaluru, India — building real-world
          products and passionate about learning new technologies.
        </p>
      </div>

      {/* CTA buttons */}
      <div className='flex flex-wrap items-center gap-3'>
        <Button asChild size='sm' className='gap-2 rounded-full px-5'>
          <a
            href='https://drive.google.com/file/d/1mpVtFd2iUmPR-R0se4_R30QWoTGdJ49l/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ArrowDownToLineIcon className='h-3.5 w-3.5' />
            Resume
          </a>
        </Button>
        <Button asChild variant='outline' size='sm' className='gap-2 rounded-full px-5'>
          <a
            href='https://github.com/Bhavesh0577'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
            <ArrowUpRightIcon className='h-3.5 w-3.5' />
          </a>
        </Button>
      </div>
    </section>
  )
}