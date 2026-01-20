
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Button from '../components/ui/Button'
import { Brain, Check, CopyCheckIcon, CopyIcon } from 'lucide-react'
import './profile.css'
import { useAppDispatch, useAppSelector } from '../utils/hooks'



const Profile = () => {
  const user = useAppSelector(state => state.user)

  const hashlink = `${window.location.origin}/brain/${user.hash}`;
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if(!token)navigate('/login')
  },[])

  const handleCopy = () => {
    window.navigator.clipboard.writeText(hashlink);
  };
  return (
    <div className='w-full h-full'>
      <div className="userDetails flex gap-8  p-6 items-center">
        <div className="profileBrainLogo bg-secondary p-6 rounded-full text-primary border-primary border-4">
          <Brain size={100} />
        </div>
        <div className='space-y-3'>
          <h2 className="fullname font-semibold text-3xl">{user.fullname}</h2>
          <div className="email text-xl">{user.email}</div>
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
        <div className="contentDetails flex flex-col items-center gap-2">
          
          <div className="cDetail bg-secondary w-72 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
            <span className='text-3xl font-bold text-primary'>{user.contentDetails.totalPosts}</span>
            <span className='text-primary'>Total Posts</span>
          </div>
          <div className='flex gap-2'>
            <div className="cDetail bg-secondary w-36 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
              <span className='text-3xl font-bold text-primary'>{user.contentDetails.totalPosts -user.contentDetails.publicPosts}</span>
              <span className='text-primary'>Private Posts</span>
            </div>
            <div className="cDetail bg-secondary w-36 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
              <span className='text-3xl font-bold text-primary'>{user.contentDetails.publicPosts}</span>
              <span className='text-primary'>Shared Posts</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Tabs flex gap-2 w-full bg-ternary px-5 py-3">
        <Button variant={'primary'} size={'sm'} 
        text={'Account Settings'} 
        onClick={ ()=>{}} />
        <Button variant={'primary'} size={'sm'} 
        text={'Shared Ideas'} 
        onClick={ ()=>{}} />
      </div>
      <AccountSettings />
    </div>
  )
}
const AccountSettings = () => {
  const navigate = useNavigate()
  const [toggleChange, settoggleChange] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>()

  const handleNameChange = () =>{
    const changedName = inputRef.current.value;
    if(changedName.length<3) console.log("small")
  }
  const handleLogout = ()=>{
    localStorage.clear()
    navigate('/login')
  }
  const handlePrivate = () =>{

  }
  return (
    <div className='account-settings p-6 bg-slate-50 grid  items-center grid-cols-2 '>
      {/* Change Name */}
      <div className="option-info ">
        <h2 className='text-2xl font-semibold'>Change Name</h2>
        {/* <h2 className='text-lg'>All posts will be removed from shared posts</h2> */}
        <h4 className='opacity-60'>Your name is displayed on your shared brain page</h4>
      </div>
      <div className="option-action flex flex-wrap items-center gap-2">
        <Button variant={toggleChange?'secondary':'primary'} size={'lg'} text={toggleChange?'Cancel':'Change'} onClick={()=>settoggleChange(p=>!p)} />
        {toggleChange&&<>
          <input type="text" ref={inputRef} placeholder='Enter New Name' className='bg-secondary text-primary rounded-xl p-3' />
          <Button variant={'secondary'} size={'lg'} text={'Comfirm'} sIcon={<Check />} onClick={ handleNameChange }/>
        </>}
      </div>

      {/* disable shared */}
      <div className="option-info ">
        <h2 className='text-2xl font-semibold'>Disable Sharing?</h2>
        <h2 className='text-lg'>All posts will be removed from shared posts</h2>
        <h4 className='opacity-60'>Your all shared posts will be inaccessible to everyone</h4>
      </div>
      <div className="option-action">
        <Button variant={'primary'} size={'lg'} text={'Remove All'} onClick={handlePrivate} />
      </div>

      {/* logput */}
      <div className="option-info">
        <h2 className='text-2xl font-semibold'>Log out from this device?</h2>
      </div>
      <div className="option-action">
        <Button customStyles='bg-red-600 w-fit' variant={'primary'} size={'lg'} text={'Logout'} onClick={handleLogout} />
      </div>
    </div>
  )
}


export default Profile

  // const userdetails = {
  //   _id: "696b7fd3d756258f0696b175",
  //   fullname: "NISHANT DEWANGAN",
  //   email: "nishantdewangan2002@gmail.com",
  //   hash:"5m0hcxkjsp2yjke58bsq"
  // }
  // const contentDetails = {
  //   totalPosts:10,
  //   publicPosts:3,
  // }