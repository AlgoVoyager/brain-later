import ThemeToggle from '../components/ThemeToggle'

const Settings = () => {
  return (
    <main className='w-full h-full p-10 dark:bg-slate-900 dark:text-white'>
      <div className="flex flex-col gap-6">
        <h1 className='text-4xl font-bold'>Settings</h1>

        <div className="setting-item flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-lg shadow">
          <div>
            <h2 className='text-2xl font-semibold'>Theme</h2>
            <p className='text-gray-600 dark:text-gray-400'>Switch between light and dark mode</p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </main>
  )
}

export default Settings