import { useState } from 'react'
import Button from './ui/Button';
import { Share2 } from 'lucide-react';
import { useShareContentMutation } from '../redux/api/contentApi';
import { useDispatch } from 'react-redux';
import { setPublicPosts } from '../redux/features/userSlice';

const ShareWindow = ({contentId}: {contentId: string}) => {
  const [shareContent, { isLoading, data, error }] = useShareContentMutation();
  const dispatch = useDispatch();
    const [confirmOpen, setConfirmOpen] = useState(false);
    const handleShare = () => {
      shareContent({contentId}).then(()=>{
        setTimeout(()=>{
          setConfirmOpen(false)
          dispatch(setPublicPosts())
        },1000)
      })
    }
  return (
    <div onClick={()=>setConfirmOpen(p=>!p)} 
        className='hover:bg-secondary relative hover:translate-y-1 hover:z-50  duration-100 rounded-full cursor-pointer p-2'>
             
        {confirmOpen && (
                <div className="absolute confirm-share-window -top-7 -right-10  group-hover:rotate-6 bg-white border shadow-lg rounded-lg p-3  flex flex-col items-center gap-2"
                  onClick={(e) => e.stopPropagation()} >
                    {data&&data.message+" & Link copied!"}
                    {error?.data?.message}
                  <h3 className="whitespace-nowrap font-semibold">Share this to public?</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      text="Yes"
                      onClick={handleShare}
                      disabled={isLoading}
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      text="No"
                      onClick={() => setConfirmOpen(false)}
                      disabled={isLoading}
                    />
                  </div>
                </div>
              )}
     <Share2 />
    </div>
  )
}

export default ShareWindow