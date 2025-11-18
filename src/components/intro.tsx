import Image from 'next/image'
import { FlipWords } from './ui/flip-words'
import { Button } from '@/components/ui/button'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Bhavesh<FlipWords words={[".", "Shrigiri"]} /></h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in Bengaluru, India. I&#39;m
          passionate about learning new technologies and sharing knowledge with
          others.
        </p>
        <div className='mt-6'>
          <Button asChild>
            <a
              href='https://drive.google.com/file/d/1FLK0BxG1aaXP6G8D-QedVguqRXAm-3rW/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}