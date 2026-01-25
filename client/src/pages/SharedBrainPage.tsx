import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/ui/Button';
import { Brain } from 'lucide-react';
import type { SharedData } from '../utils/types';
import LoadingSkeleton from '../components/LoadingSkeleton';
import Card from '../components/Card';

const SharedBrainPage = () => {
    const { hash } = useParams();
    const [loading, setLoading] = useState(true)
    const [SharedData, setSharedData] = useState<SharedData>({
        "_id": "id",
        "hash": "hash",
        "userId": {
            "_id": "id",
            "fullname": "Brain Later User"
        },
        "publicSharing": [],
        "__v": 0
    })
    useEffect(() => {
    const fetchSharedData = async () => {
        setLoading(true)
        try {
            
            const token = localStorage.getItem("token")
            const response = await axios.get(`/v1/brain/${hash}`, { headers: { token } })
            setSharedData(response.data.sharedContents)
        } catch (error) {
            
        }
        finally {
            setLoading(false)
        }
    }
    fetchSharedData()
    }, [])
    return (
    <div className='w-full h-full flex flex-col overflow-hidden'>
      <div className="userDetails flex justify-between gap-8 p-6 px-20 items-center flex-shrink-0">
        <div className="left flex gap-8 items-center">
            <div className="profileBrainLogo bg-secondary p-6 rounded-full text-primary border-primary border-4">
            <Brain size={100} />
            </div>
            <div className='space-y-3'>
                <h2 className="fullname font-semibold text-3xl">{SharedData.userId.fullname}</h2>
                {/* <div className="email text-xl">{SharedData.userId.email}</div> */}
                {/* <CopyHashLink /> */}
            </div>
        </div>    
       
        {/* <div className="contentDetails flex flex-col items-center gap-2">         
        </div> */}
          <div className="cDetail bg-secondary w-72 h-20 rounded-lg flex flex-col gap-1 items-center justify-center">
            <span className='text-3xl font-bold text-primary'>{SharedData.publicSharing.length}</span>
            <span className='text-primary'>Total Shared Posts</span>
          </div>
      </div>
      <div className="Tabs flex gap-2 w-full bg-ternary px-5 py-3 flex-shrink-0">
        {/* <Button variant={'primary'} size={'sm'}
          text={'Account Settings'}
          onClick={() => { }} />
        <Button variant={'primary'} size={'sm'}
          text={'Shared Ideas'}
          onClick={() => { }} /> */}
      </div>
      <div className="shared-posts flex-1 overflow-hidden overflow-y-auto flex flex-wrap gap-5 justify-start p-5">
        {/* <AccountSettings /> */}
        {loading?(<LoadingSkeleton/>):SharedData.publicSharing.map((item)=>{
            return(
                <div key={item._id}>
                    <Card {...item} />
                </div>
            )
        })}
      </div>
    </div>
    )
}

export default SharedBrainPage