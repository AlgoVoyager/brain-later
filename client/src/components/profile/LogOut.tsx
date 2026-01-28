import React from 'react'
import Button from '../ui/Button'
import { useAppDispatch } from '../../utils/hooks'
import { setLogout } from '../../redux/features/userSlice'
import { useNavigate } from 'react-router-dom'

const LogOut = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleLogout = () => {
        localStorage.clear()
        dispatch(setLogout())
        navigate('/login')
    }
  return (
    <div className="account-setting-item col-span-2 flex items-center justify-between  rounded-lg shadow">
        <div className="option-info">
        <h2 className='text-2xl font-semibold'>Log out from this device?</h2>
        </div>
        <div className="option-action">
        <Button customStyles='bg-red-600 w-fit' variant={'primary'} size={'lg'} text={'Logout'} onClick={handleLogout} />
        </div>
    </div>
  )
}

export default LogOut