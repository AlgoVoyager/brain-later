
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../components/ui/Button'

const Profile = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(!token)navigate('/login')
  },[])
  const handleLogout = ()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div>
      <h1>Profile</h1>
      <div>
        <Button variant={'primary'} size={'xl'} text={'Logout'} 
        onClick={handleLogout} />
        
      </div>
    </div>
  )
}

export default Profile