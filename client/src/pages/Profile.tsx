
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
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <div className="userDetails flex gap-8 p-6 items-center flex-shrink-0">
        <div className="profileBrainLogo bg-secondary p-6 rounded-full text-primary border-primary border-4">
          <Brain size={100} />
        </div>
        <div className='space-y-3'>
          <h2 className="fullname font-semibold text-3xl">{user.fullname}</h2>
          <div className="email text-xl">{user.email}</div>
          <CopyHashLink />
        </div>
        <div className="contentDetails flex flex-col items-center gap-2">

          <div className="cDetail bg-secondary w-72 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
            <span className='text-3xl font-bold text-primary'>{user.contentDetails.totalPosts}</span>
            <span className='text-primary'>Total Posts</span>
          </div>
          <div className='flex gap-2'>
            <div className="cDetail bg-secondary w-36 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
              <span className='text-3xl font-bold text-primary'>{user.contentDetails.totalPosts - user.contentDetails.publicPosts}</span>
              <span className='text-primary'>Private Posts</span>
            </div>
            <div className="cDetail bg-secondary w-36 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
              <span className='text-3xl font-bold text-primary'>{user.contentDetails.publicPosts}</span>
              <span className='text-primary'>Shared Posts</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Tabs flex gap-2 w-full bg-ternary px-5 py-3 flex-shrink-0">
        <Button variant={'primary'} size={'sm'}
          text={'Account Settings'}
          onClick={() => { }} />
        <Button variant={'primary'} size={'sm'}
          text={'Shared Ideas'}
          onClick={() => { }} />
      </div>
      <div className="account-settings flex-1 overflow-hidden">
        <AccountSettings />
      </div>
    </div>
  )
}



export default Profile