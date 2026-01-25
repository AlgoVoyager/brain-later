import { useState } from 'react'
import InputText from '../components/ui/InputText'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import useResponseMessage from '../utils/useResponseMessage'
import { useGetUserQuery } from '../redux/api/userApi'

const LoginPage = () => {
    const navigate = useNavigate();
    const { refetch } = useGetUserQuery(); // Call hook at component level
    const defaultForm = {
        email: '',
        password: ''
    }
    const [form, setform] = useState(defaultForm);
    const [responseMessage, setResponseMessage, MsgBlock, responseLoading, setResponseLoading, Loader] = useResponseMessage()
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {

            const res = await axios.post('/v1/user/signin', form)
            // console.log(res)
            setResponseMessage(p => ({ ...p, message: "Login Successful!", statusCode: res.status }));
            localStorage.setItem('token', res.data.token)

            // Refetch user data with the new token
            await refetch();

            setTimeout(() => {
                navigate('/')
            }, 500);
        }
        catch (error: any) {
            const msg = error.response?.data?.message || "Something went wrong";
            setResponseMessage(p => ({ ...p, message: msg, statusCode: error.response?.status || 500 }));
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit}
            className='w-1/2 border-4 rounded-xl p-10 flex bg-white flex-col items-center gap-10'>
            <h1 className='text-4xl font-semibold'>Login | Brain Later</h1>
            <MsgBlock />
            <InputText name='email' placeholder='Enter Email' label='Email' value={form.email} setter={setform} />
            <InputText name='password' placeholder='Enter Password' label='Password' value={form.password} setter={setform} />
            <Button
                text="Login"
                size="xl"
                variant="primary"
                sIcon={<Loader />}
                disabled={responseLoading}
                onClick={() => { }}
            />
            <div className='flex items-center gap-1'>
                Don't have an Account?
                <Button
                    text="Register"
                    size="sm"
                    variant="secondary"
                    sIcon={<Loader />}
                    disabled={responseLoading}
                    onClick={() => navigate('/register')}
                />
                here
            </div>
        </form>
    )
}

export default LoginPage