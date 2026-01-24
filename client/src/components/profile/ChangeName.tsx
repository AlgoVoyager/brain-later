import Button from '../ui/Button'
import { Check, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { useChangeUserNameMutation } from "../../redux/api/userApi"
import { setUserName } from '../../redux/features/userSlice'
import { useDispatch } from 'react-redux'
const ChangeName = () => {
    const dispatch = useDispatch()
    const [changeName, { isLoading, data, error }] = useChangeUserNameMutation()
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
    const inputRef = useRef<HTMLInputElement>(null)

    const handleNameChange = () => {
        const changedName = inputRef.current?.value || "";
        if (changedName.length < 3) console.log("small")
        else changeName({fullname: changedName}).then(()=>{
            settoggleChange(false)
            dispatch(setUserName(changedName))
        })
    }
    return (
        <>
            {/* Change Name */}
            <div className="option-info ">
                <h2 className='text-2xl font-semibold'>Change Name</h2>
                <h4 className='opacity-60'>Your name is displayed on your shared brain page</h4>
            </div>
            <div className="option-action flex flex-wrap items-center gap-2 relative">
                <Button disabled={isLoading} variant={toggleChange ? 'secondary' : 'primary'} size={'lg'} text={toggleChange ? 'Cancel' : 'Change'} onClick={() => settoggleChange(p => !p)} />
                {toggleChange && <>
                    <input type="text" ref={inputRef} placeholder='Enter New Name' id="fullname" name="fullname" className='bg-secondary text-primary rounded-xl p-3' />
                    <Button disabled={isLoading} variant={'secondary'} size={'lg'} text={'Comfirm'} sIcon={<Check />} onClick={handleNameChange} />
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

export default ChangeName