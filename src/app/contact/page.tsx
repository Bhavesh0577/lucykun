import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div>
            <h2 className='title'>Let&apos;s talk</h2>
            <p className='mt-4 text-lg text-muted-foreground'>
              Fill out the form
              and I&apos;ll get back to you as soon as possible.
            </p>
            <div className='mt-8'>
              <p className='text-muted-foreground'>
                Prefer email?{' '}
                <a
                  href='mailto:bhaveshshrigiri04@gmail.com'
                  className='text-foreground underline'
                >
                  bhaveshshrigiri04@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

