import { useEffect, useState } from 'react'

const useResponseMessage = () => {
    interface ResponseMsg {
        statusCode: number;
        message: string;
    }
    const defaultResponseMessage: ResponseMsg = {
        statusCode: 0,
        message: "",
    }
    const [responseMessage, setResponseMessage] = useState<ResponseMsg>(defaultResponseMessage)

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
    return [responseMessage, setResponseMessage] as const
}

export default useResponseMessage