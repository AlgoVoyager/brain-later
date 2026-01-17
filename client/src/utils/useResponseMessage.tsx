import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react'

interface ResponseMsg {
    statusCode: number;
    message: string;
}
const useResponseMessage = () => {
    const defaultResponseMessage: ResponseMsg = {
        statusCode: 0,
        message: "",
    }
    const [responseMessage, setResponseMessage] = useState<ResponseMsg>(defaultResponseMessage)
    const [responseLoading, setResponseLoading] = useState(false);
    useEffect(() => {
        if (responseMessage.message) {
            const timeout = setTimeout(() => {
                setResponseMessage(defaultResponseMessage)
            }, 5000);
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [responseMessage])
    const Loader=()=>{
        return (
            responseLoading&&<div className='animate-spin'><Loader2/></div>
        )
    }
    const MsgBlock = ()=>{
        return (<div className={`message py-1 px-2 rounded-lg ${responseMessage.statusCode>=400?"bg-red-100 text-red-600":"bg-green-100 text-green-600"}`}>
            {responseMessage.message}
        </div>)
    }
    return [responseMessage, setResponseMessage, MsgBlock, responseLoading, setResponseLoading, Loader] as const
}

export default useResponseMessage