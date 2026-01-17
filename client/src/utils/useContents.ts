import { useEffect, useState } from "react"
import axios from "axios"
import useResponseMessage from "./useResponseMessage"
const useContents = (addContentWindow: boolean) => {
    const [responseMessage, setResponseMessage, MsgBlock, responseLoading, setResponseLoading, Loader] = useResponseMessage()
    const [contents, setcontents] = useState([])
    const fetchContents = async (resData?: { message: any; statusCode: number }) => {
        setResponseLoading(true);
        try {
            const res = await axios.get('/v1/content', {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            setcontents(res.data.contents)
            setResponseMessage(() =>{ 
                if(resData) return resData;
                else return { message: res.data.message, statusCode: res.status }
            })
        } catch (error) {
            console.log(error)
        }finally{
            setResponseLoading(false);
        }
    }
    useEffect(() => {
        fetchContents()
        console.log('first rerender')
    }, [])
    const deleteContent = async(id:string)=>{
        setResponseLoading(true)
        try {
            const res = await axios.delete('/v1/content/'+id,{
                headers:{
                    token : localStorage.getItem('token')
                }
            });
            const resData = { message: res.data.message, statusCode: res.status }
            fetchContents(resData)
            setResponseMessage(() => (resData))
        } catch (error) {
            console.log(error)            
        }
        finally{
            setResponseLoading(false)
        }

    }
    return [contents, setcontents, fetchContents, deleteContent, responseLoading, MsgBlock, responseMessage] as const
}

export default useContents