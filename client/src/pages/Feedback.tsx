import { Brain, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/ui/Button'

interface FeedbackForm {
  name: string;
  email: string;
  message: string;
}

const Feedback = () => {
  const [form, setForm] = useState<FeedbackForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<{ type: 'success' | 'error' | '', message: string }>({
    type: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setResponseMessage({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setResponseMessage({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsLoading(true);
    setResponseMessage({ type: '', message: '' });

    try {
      // Replace with your actual API endpoint
      const response = await fetch('v1/feedback', {
        method: 'POST',
        headers: {
          'token': `${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage({
          type: 'success',
          message: 'Thank you for your feedback!'
        });
        // Reset form
        setForm({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setResponseMessage({
          type: 'error',
          message: data.message || 'Failed to submit feedback. Please try again.'
        });
      }
    } catch (error) {
      setResponseMessage({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='w-full h-full px-16  justify-center dark:bg-slate-900 dark:text-white'>
      <div className="about-hero flex justify-between items-center  h-full gap-10">
        <div className="about-hero-content space-y-3 w-2/3">
          <h1 className='text-5xl font-bold'>Contact | Brain Later</h1>
          <p className='text-xl'>If you have any questions or suggestions, please feel free to contact us.</p>

          <form onSubmit={handleSubmit} className='space-y-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='text-lg font-semibold'>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder='Enter your name'
                className='px-4 py-3 bg-secondary/30 dark:bg-slate-700/50 rounded-lg text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 text-primary dark:text-white border border-transparent focus:border-primary dark:focus:border-secondary outline-none transition-colors'
                disabled={isLoading}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='text-lg font-semibold'>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder='Enter your email'
                className='px-4 py-3 bg-secondary/30 dark:bg-slate-700/50 rounded-lg text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 text-primary dark:text-white border border-transparent focus:border-primary dark:focus:border-secondary outline-none transition-colors'
                disabled={isLoading}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="message" className='text-lg font-semibold'>Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleInputChange}
                placeholder='Enter your message or feedback'
                rows={6}
                className='px-4 py-3 bg-secondary/30 dark:bg-slate-700/50 rounded-lg text-lg placeholder:text-gray-500 dark:placeholder:text-gray-400 text-primary dark:text-white border border-transparent focus:border-primary dark:focus:border-secondary outline-none transition-colors resize-none'
                disabled={isLoading}
              />
            </div>

            {responseMessage.message && (
              <div className={`p-4 rounded-lg ${responseMessage.type === 'success'
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                }`}>
                {responseMessage.message}
              </div>
            )}

            <Button
              variant="primary"
              size="lg"
              type="submit"
              text={isLoading ? 'Sending...' : 'Send Feedback'}
              pIcon={isLoading ? <Loader2 className='animate-spin' /> : <Send />}
              disabled={isLoading}
              customStyles='w-full justify-center dark:bg-primary dark:text-secondary dark:hover:bg-primary/90'
            />
          </form>

        </div>

        <div className="flex flex-col gap-6 items-center justify-center w-1/3">
        <div className="flex flex-col gap-6 items-center justify-center ">
            <div className="profileBrainLogo bg-primary p-6 rounded-full text-secondary border-secondary/50 border-4">
              <Brain size={100} />
            </div>
            <h1 className='text-4xl font-bold'>Brain Later</h1>
        </div>
          <p className='text-lg text-center text-gray-600 dark:text-gray-400'>
            You can also reach us at: <a href="mailto:contact@brainlater.com" className='text-primary dark:text-secondary hover:underline'>contact@brainlater.com</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Feedback