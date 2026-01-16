import  { useState } from 'react'
import InputText from '../components/ui/InputText'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();
    const defaultForm = {
        email:'',
        password:''
    }
    const [form, setform] = useState(defaultForm);
    const handleSubmit = ()=>{

    }
  return (
    <div className='w-1/2 border-4 rounded-xl p-10 flex  flex-col items-center gap-10'>
        <h1 className='text-4xl font-semibold'>Login | Brain Later</h1>
        <InputText name='email' placeholder='Enter Email' label='Email' value={form.email} setter={setform} />
        <InputText name='password' placeholder='Enter Password' label='Password' value={form.password} setter={setform} />
        <Button
            // customStyles='mx-auto'
            text="Login"
            size="xl"
            variant="primary"
            // pIcon={<CirclePlus />}
            onClick={handleSubmit}
        />
        <div className='flex items-center gap-1'>
            Don't have an Account? 
            <Button
                // customStyles='mx-auto'
                text="Register"
                size="sm"
                variant="secondary"
                // pIcon={<CirclePlus />}
                onClick={()=>navigate('/register')}
            />
            here
        </div>
    </div>
  )
}

export default LoginPage