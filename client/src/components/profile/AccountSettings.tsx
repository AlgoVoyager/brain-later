
import { useNavigate } from "react-router-dom"
import Button from "../ui/Button"
import ChangeName from "./ChangeName"
import ChangePassword from "./ChangePassword"
import { useDispatch } from "react-redux"
import { setLogout } from "../../redux/features/userSlice"
const AccountSettings = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogout = () => {

    localStorage.clear()
    dispatch(setLogout())
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
      <ChangePassword />

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