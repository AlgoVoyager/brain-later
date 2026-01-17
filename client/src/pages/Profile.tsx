
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Profile = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(!token)navigate('/login')
  },[])
  return (
    <div>
      <h1>Profile</h1>
      <div>
        
      </div>
    </div>
  )
}

export default Profile