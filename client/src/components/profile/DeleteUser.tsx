import Button from '../ui/Button'
import { Check, Loader2, Trash, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useDeleteUserMutation } from "../../redux/api/userApi"
import { useDispatch } from "react-redux"
import { setLogout } from '../../redux/features/userSlice'
const DeleteUser = () => {
    const dispatch = useDispatch()
    const [deleteUser, { isLoading, data, error }] = useDeleteUserMutation()
    const [infoMessage, setinfoMessage] = useState<{ message: string, type: string }>({
        message: "",
        type: ""
    })
    useEffect(() => {
        if (infoMessage.message) {
            const timeout = setTimeout(() => {
                setinfoMessage({
                    message: "",
                    type: ""
                })
            }, 5000)
            return () => clearTimeout(timeout)
        }
    }, [infoMessage.message, infoMessage.type])
    useEffect(() => {
        if (error) {
            setinfoMessage({
                message: error.data.message,
                type: "error"
            })
        }
        if (data) {
            setinfoMessage({
                message: data.message,
                type: "success"
            })
        }
    }, [error, data])
    const [toggleChange, settoggleChange] = useState<boolean>(false)
    const passwordref = useRef<HTMLInputElement>(null)

    const handleDeleteUser = () => {
        const password = passwordref.current?.value || "";
        if (password.length < 3) console.log("small")
        else deleteUser({ password })
            .then(() => {
                data&&settoggleChange(false)
                data&&dispatch(setLogout())
            })
    }
    return (
        <>
            {/* Change Password */}
            <div className="account-setting-item col-span-2 flex items-center justify-between rounded-lg shadow">
                <div className="option-info ">
                    <h2 className='text-2xl font-semibold'>Delete Your Account?</h2>
                    <h4 className='opacity-60'>All your data will be deleted Permanently</h4>
                </div>
                <div className="option-action flex flex-wrap items-center gap-2 relative">
                    <Button disabled={isLoading} variant={toggleChange ? 'secondary' : 'primary'} size={'lg'} text={toggleChange ? 'Cancel' : 'Delete'} onClick={() => settoggleChange(p => !p)} customStyles='dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 dark:hover:text-white' />
                    {toggleChange && <>
                        <input type="text" ref={passwordref} placeholder='Enter Password' id="password" name="password" className='bg-secondary dark:bg-slate-700 dark:text-white text-primary rounded-xl p-3' />
                        <Button disabled={isLoading} pIcon={isLoading?<Loader2 className='animate-spin'/>:<Trash className='text-red-500' size={20} />} variant={'secondary'} size={'lg'} text={'Delete'} onClick={handleDeleteUser} customStyles='dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 dark:hover:text-white' />
                    </>}

                    {infoMessage.type !== "" &&
                        <p onClick={(e) => e.currentTarget.remove()}
                            className={`text-${infoMessage.type === "success" ? "green" : "red"}-500 hover:line-through absolute top-0 left-0 flex gap-2 items-center cursor-pointer`}
                        >{infoMessage.message} <X />
                    </p>}
                </div>
            </div>
        </>
    )
}

export default DeleteUser