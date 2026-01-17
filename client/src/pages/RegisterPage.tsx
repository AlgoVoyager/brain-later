import { useState } from 'react'
import InputText from '../components/ui/InputText'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useResponseMessage from '../utils/useResponseMessage'
const RegisterPage = () => {
    const navigate = useNavigate();
    const defaultForm = {
        email: '',
        password: '',
        firstname: "",
        lastname: ""
    }
    const [form, setform] = useState(defaultForm);
    const [responseMessage, setResponseMessage, MsgBlock, responseLoading, setResponseLoading, Loader] = useResponseMessage()
    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {

            const res = await axios.post('/v1/user/signup', form)
            // console.log(res)
            setResponseMessage(p => ({ ...p, message: "Registration Successful! Please Login", statusCode: res.status }));
            // setTimeout(() => {
            //     navigate('/login')
            // }, 1000);
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
            <h1 className='text-4xl font-semibold'>Register | Brain Later</h1>
            <MsgBlock />
            <InputText name='firstname' placeholder='Enter First Name' label='First Name' value={form.firstname} setter={setform} />
            <InputText name='lastname' placeholder='Enter Last Name' label='Last Name' value={form.lastname} setter={setform} />
            <InputText name='email' placeholder='Enter Email' label='Email' value={form.email} setter={setform} />
            <InputText name='password' placeholder='Enter Password' label='Password' value={form.password} setter={setform} />
            <Button
                text="Register"
                size="xl"
                variant="primary"
                sIcon={<Loader />}
                disabled={responseLoading}
                onClick={() => { }}
            />
            <div className='flex items-center gap-1'>
                Already have an Account?
                <Button
                    text="Login"
                    size="sm"
                    variant="secondary"
                    onClick={() => navigate('/login')}
                />
                here
            </div>
        </form>
    )
}

export default RegisterPage