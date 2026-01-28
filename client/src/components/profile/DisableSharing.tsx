import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRemoveAllSharedMutation } from '../../redux/api/contentApi'
import Button from '../ui/Button'
import { resetPublicPosts } from '../../redux/features/userSlice'
import { unShareAllContents } from '../../redux/features/contentsSlice'

const DisableSharing = () => {
    const [removeAllShared] = useRemoveAllSharedMutation()
    
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)
      const handleMakeAllPrivate = () => {
        removeAllShared().then((res)=>{
          if(res.data){
            dispatch(resetPublicPosts())
            dispatch(unShareAllContents())
          }
        })
    
      }
    
  return (
    <div className="account-setting-item col-span-2 flex items-center justify-between rounded-lg shadow"> 
        <div className="option-info ">
          <h2 className='text-2xl font-semibold'>Disable Sharing?</h2>
          {user.contentDetails.publicPosts === 0 ? <h2 className='text-lg'>All posts are private</h2> 
          :(<>
          <h2 className='text-lg'>All posts will be removed from shared posts</h2>
          <h4 className='opacity-60'>Your all shared posts will be inaccessible to everyone</h4>
          </>)}
        </div>
        <div className="option-action">
          <Button variant={'primary'} size={'lg'} text={'Remove All'} onClick={handleMakeAllPrivate}
          disabled={user.contentDetails.publicPosts === 0} />
        </div>
      </div>
  )
}

export default DisableSharing