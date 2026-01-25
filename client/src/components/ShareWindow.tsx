import { useState } from 'react'
import Button from './ui/Button';
import { Share2 } from 'lucide-react';

const ShareWindow = () => {
    const [confirmOpen, setConfirmOpen] = useState(false);
  return (
    <div onClick={()=>setConfirmOpen(p=>!p)} 
        className='hover:bg-secondary relative hover:translate-y-1 hover:z-50  duration-100 rounded-full cursor-pointer p-2'>
             
        {confirmOpen && (
                <div className="absolute confirm-share-window -top-7 -right-10  group-hover:rotate-6 bg-white border shadow-lg rounded-lg p-3  flex flex-col items-center gap-2"
                  onClick={(e) => e.stopPropagation()} >
                  <h3 className="whitespace-nowrap font-semibold">Share this to public?</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      text="Yes"
                      onClick={()=>{}}
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      text="No"
                      onClick={() => setConfirmOpen(false)}
                    />
                  </div>
                </div>
              )}
     <Share2 />
    </div>
  )
}

export default ShareWindow