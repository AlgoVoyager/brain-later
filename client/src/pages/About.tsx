import { Brain } from 'lucide-react'

const About = () => {
  return (
    <main className='w-full max-h-full overflow-y-auto lg:px-32 lg:py-40 px-5 py-10 dark:bg-slate-900 dark:text-white'>
      <div className="about-hero flex lg:flex-row lg:gap-0 gap-10  flex-col justify-between">
        <div className="about-hero-content space-y-10 lg:w-2/3 w-full text-justify">
          <h1 className='lg:text-5xl text-3xl text-center lg:text-left font-bold'>About | Brain Later</h1>
          <p className='lg:text-xl text-lg'>Brain Later is a platform for sharing and saving content for later use. It is a place where you can store all your important links, articles, videos, and other resources in one organized place.</p>
          <p className='lg:text-xl text-lg'>With Brain Later, you can easily save and access your favorite content from anywhere, anytime.</p>
          <p className='lg:text-xl text-lg'>Share your favorite content with your friends and family.</p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center lg:w-1/3 w-full">
          <div className="profileBrainLogo bg-primary p-6 rounded-full text-secondary border-secondary/50 border-4">
            <Brain className='lg:size-20 size-16' />
          </div>
          <h1 className='text-4xl font-bold'>Brain Later</h1>
        </div>
      </div>
    </main>
  )
}

export default About