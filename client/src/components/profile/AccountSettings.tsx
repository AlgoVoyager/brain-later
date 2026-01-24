
import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import ChangeName from "./ChangeName"
import ChangePassword from "./ChangePassword"

const AccountSettings = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }
  const handlePrivate = () => {

  }
  return (
    <div className='account-settings p-6 bg-slate-50 grid items-center grid-cols-2 h-full overflow-y-auto'>


      {/* disable shared */}
      <div className="option-info ">
        <h2 className='text-2xl font-semibold'>Disable Sharing?</h2>
        <h2 className='text-lg'>All posts will be removed from shared posts</h2>
        <h4 className='opacity-60'>Your all shared posts will be inaccessible to everyone</h4>
      </div>
      <div className="option-action">
        <Button variant={'primary'} size={'lg'} text={'Remove All'} onClick={handlePrivate} />
      </div>

      <ChangeName />

      {/* Change Password */}
      <ChangePassword />
      {/* <div className="option-info ">
        <h2 className='text-2xl font-semibold'>Change Password</h2>
        <h2 className='text-lg'>Change your password</h2>
        <h4 className='opacity-60'>Your all shared posts will be inaccessible to everyone</h4>
      </div>
      <div className="option-action">
        <Button variant={'primary'} size={'lg'} text={'Change'} onClick={handlePrivate} />
      </div> */}

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
export default AccountSettings