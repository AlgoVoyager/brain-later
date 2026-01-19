
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Button from '../components/ui/Button'
import { Brain, Copy, CopyCheckIcon, CopyIcon } from 'lucide-react'

const Profile = () => {
  const userdetails = {
    _id: "696b7fd3d756258f0696b175",
    fullname: "NISHANT DEWANGAN",
    email: "nishantdewangan2002@gmail.com",
    hash:"5m0hcxkjsp2yjke58bsq"
  }
  const hashlink = `${window.location.origin}/brain/${userdetails.hash}`;
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(!token)navigate('/login')
  },[])
  const handleLogout = ()=>{
    localStorage.clear()
    navigate('/login')
  }
  const handleCopy = () => {
    window.navigator.clipboard.writeText(hashlink);
  };
  return (
    <div className='w-full h-full'>
      {/* <div className="userDetails-container"> */}
      <div className="userDetails flex gap-10  p-10 items-center">
        <div className="profileBrainLogo bg-secondary p-8 rounded-full text-primary border-primary border-4">
          <Brain size={120} />
        </div>
        <div className='space-y-4 bg-slate-50'>
          <h2 className="fullname font-semibold text-3xl">{userdetails.fullname}</h2>
          <div className="email text-xl">{userdetails.email}</div>
          <div className="userHash flex items-center gap-1 rounded-full p-1 pl-2 border border-primary">
            <span>Shared Brain Link </span>
            <div className="hash px-3 bg-secondary w-fit rounded-full text-primary">
             {hashlink.substring(7)}
            </div>
            <div onClick={handleCopy}
              className="hash active:opacity-50 cursor-pointer h-3 py-3 px-2  bg-secondary w-fit rounded-full text-primary flex items-center">
                <CopyIcon size={20} />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="Tabs flex gap-2 w-full bg-secondary px-5 py-3">
        <Button variant={'primary'} size={'sm'} 
        text={'Account Settings'} 
        onClick={ ()=>{}} />
        <Button variant={'primary'} size={'sm'} 
        text={'Shared Ideas'} 
        onClick={ ()=>{}} />
      </div>

      {/* <h1>Profile</h1>
      <div>
        <Button variant={'primary'} size={'xl'} text={'Logout'} 
        onClick={handleLogout} />
        
      </div> */}
    </div>
  )
}

export default Profile