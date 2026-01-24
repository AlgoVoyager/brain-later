import Button from '../ui/Button'
import { Check, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useChangePasswordMutation } from "../../redux/api/userApi"
const ChangePassword = () => {
    const [changePassword, { isLoading, data, error }] = useChangePasswordMutation()
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
    const oldPasswordRef = useRef<HTMLInputElement>(null)
    const newPasswordRef = useRef<HTMLInputElement>(null)

    const handlePasswordChange = () => {
        const oldPassword = oldPasswordRef.current?.value || "";
        const newPassword = newPasswordRef.current?.value || "";
        if (oldPassword.length < 3) console.log("small")
        else changePassword({ oldPassword, newPassword })
            .then(() => {
                settoggleChange(false)
            })
    }
    return (
        <>
            {/* Change Password */}
            <div className="option-info ">
                <h2 className='text-2xl font-semibold'>Change Password</h2>
                <h4 className='opacity-60'>Forgot Password? or want to change it?</h4>
            </div>
            <div className="option-action flex flex-wrap items-center gap-2 relative">
                <Button disabled={isLoading} variant={toggleChange ? 'secondary' : 'primary'} size={'lg'} text={toggleChange ? 'Cancel' : 'Change'} onClick={() => settoggleChange(p => !p)} />
                {toggleChange && <>
                    <input type="text" ref={oldPasswordRef} placeholder='Enter Old Password' id="password" name="password" className='bg-secondary text-primary rounded-xl p-3' />
                    <input type="text" ref={newPasswordRef} placeholder='Enter New Password' id="password" name="password" className='bg-secondary text-primary rounded-xl p-3' />
                    <Button disabled={isLoading} variant={'secondary'} size={'lg'} text={'Comfirm'} sIcon={<Check />} onClick={handlePasswordChange} />
                </>}

                {infoMessage.type !== "" &&
                    <p onClick={(e) => e.currentTarget.remove()}
                        className={`text-${infoMessage.type === "success" ? "green" : "red"}-500 hover:line-through absolute top-0 left-0 flex gap-2 items-center cursor-pointer`}
                    >{infoMessage.message} <X />
                </p>}
            </div>
        </>
    )
}

export default ChangePassword