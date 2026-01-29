import { Brain } from 'lucide-react'

const About = () => {
  return (
    <main className='w-full h-full px-32 py-40 dark:bg-slate-900 dark:text-white'>
      <div className="about-hero flex justify-between">
        <div className="about-hero-content space-y-10 w-2/3 text-justify">
          <h1 className='text-5xl font-bold'>About | Brain Later</h1>
          <p className='text-xl'>Brain Later is a platform for sharing and saving content for later use. It is a place where you can store all your important links, articles, videos, and other resources in one organized place.</p>
          <p className='text-xl'>With Brain Later, you can easily save and access your favorite content from anywhere, anytime.</p>
          <p className='text-xl'>Share your favorite content with your friends and family.</p>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center w-1/3">
          <div className="profileBrainLogo bg-primary p-6 rounded-full text-secondary border-secondary/50 border-4">
            <Brain size={100} />
          </div>
          <h1 className='text-4xl font-bold'>Brain Later</h1>
        </div>
      </div>
    </main>
  )
}

export default About