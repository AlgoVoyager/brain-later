
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../components/ui/Button'
import { Brain } from 'lucide-react'
import './profile.css'
import { useAppSelector } from '../utils/hooks'
import AccountSettings from '../components/profile/AccountSettings'
import CopyHashLink from '../components/profile/CopyHashLink'

const Profile = () => {

  const user = useAppSelector(state => state.user)

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (!token) navigate('/login')
  }, [])
  return (
    <div className='w-full max-h-full h-full overflow-y-auto flex flex-col'>
      <div className="userDetails flex lg:flex-row flex-col lg:gap-8 gap-4 lg:p-6 p-4 items-center flex-shrink-0">
        <div className="profileBrainLogo bg-primary lg:p-6 p-2 rounded-full text-secondary border-secondary/50 border-4">
          <Brain className="lg:size-20 size-10"/>
        </div>
        <div className='space-y-3 lg:text-left text-center'>
          <h2 className="fullname font-semibold text-3xl">{user.fullname}</h2>
          <div className="email text-xl">{user.email}</div>
          <CopyHashLink />
        </div>
        <div className="contentDetails flex lg:flex-col flex-row items-center gap-2">

          <div className="cDetail bg-secondary dark:bg-secondary/20 lg:w-72 w-36 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
            <span className='text-3xl font-bold text-primary dark:text-secondary'>{user.contentDetails.totalPosts}</span>
            <span className='text-primary dark:text-secondary'>Total Posts</span>
          </div>
          <div className='flex gap-2'>
            <div className="cDetail bg-secondary dark:bg-secondary/20 lg:w-36 w-28 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
              <span className='text-3xl font-bold text-primary dark:text-secondary'>{user.contentDetails.totalPosts - user.contentDetails.publicPosts}</span>
              <span className='text-primary dark:text-secondary'>Private Posts</span>
            </div>
            <div className="cDetail bg-secondary dark:bg-secondary/20 lg:w-36 w-28 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
              <span className='text-3xl font-bold text-primary dark:text-secondary'>{user.contentDetails.publicPosts}</span>
              <span className='text-primary dark:text-secondary'>Shared Posts</span>
            </div>
          </div>
        </div>
      </div>
      <div className="account-page-tabs flex gap-2 w-full bg-ternary dark:bg-slate-700 px-5 py-3 flex-shrink-0">
        <Button variant={'primary'} size={'sm'}
          text={'Account Settings'}
          onClick={() => { }} />
        <Button variant={'primary'} size={'sm'}
          text={'Shared Ideas'}
          onClick={() => { }} />
      </div>
      <div className="account-settings flex-1 overflow-y-auto">
        <AccountSettings />
      </div>
    </div>
  )
}



export default Profile