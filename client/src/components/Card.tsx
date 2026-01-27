
import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import type { CardProps } from '../utils/types'
import Button from './ui/Button'
import ShareWindow from './ShareWindow'
import { useDeleteContentRequestMutation } from '../redux/api/contentApi'
import { useDispatch } from 'react-redux'
import { deleteContent } from '../redux/features/contentsSlice'
import LinkType from './LinkType'
import { setPublicPosts, setTotalPosts } from '../redux/features/userSlice'

const Card = ({content, shared}: {content: CardProps, shared?: boolean}) => {
  // console.log(content)
  const [confirmOpen, setConfirmOpen]  = useState(false);
  const dispatch = useDispatch();
  const [ deleteContentRequest, {
      isLoading: deleteLoading, 
      error: deleteErrorMessage, 
    }] = useDeleteContentRequestMutation()
 
  const handleDelete = () => {
    const contentId = content._id;
    const wasShared = content.shared;
    deleteContentRequest({ contentId }).then(() => {
      setTimeout(() => {
        setConfirmOpen(false);
      }, 1000);
      dispatch(deleteContent(contentId))
      dispatch(setTotalPosts(-1));
      if(wasShared){
          dispatch(setPublicPosts(wasShared ? -1 : 1));
      }
    })
  }

  return (
    <div className='flex flex-col justify-between gap-2 items-start hover:shadow-lg shadow-none duration-200 bg-white p-4 min-h-72 max-w-1/3  min-w-1/4 border-4 rounded-xl'>
      <div className="w-full flex flex-col items-start gap-2">
        <div className="upperSec flex items-center justify-between w-full">
          <div className="bg-secondary/50 text-primary border rounded-full px-2 py-1">{content.type}</div>
          {!shared && <div className="contentOptions flex gap-2 items-center">
            <ShareWindow contentId={content._id} shared={content.shared}  />
            <div className='group relative hover:bg-red-300 hover:translate-y-1 hover:rotate-6 duration-200 rounded-full cursor-pointer p-2'
              onClick={() => setConfirmOpen(!confirmOpen)}>
              <Trash2 />
              {confirmOpen && (
                <div className="absolute -top-7 -right-8 group-hover:rotate-6 bg-white border shadow-lg rounded-lg p-3 z-10 flex flex-col items-center gap-2"
                  onClick={(e) => e.stopPropagation()} >
                  <h3 className="whitespace-nowrap font-bold">Confirm Delete?</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      size="sm"
                      text="Yes"
                      onClick={handleDelete}
                      disabled={deleteLoading}
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      text="No"
                      onClick={() => setConfirmOpen(false)}
                      disabled={deleteLoading}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>}
        </div>
        <h2 className='text-4xl font-semibold'>{content.title}</h2>
        <p className="text-justify">{content.description}</p>
        <LinkType link={content.link} type={content.type} />
      </div>
      <div className="w-full flex flex-col gap-2 ">
        <div className="tags flex flex-wrap  gap-2">
          {(content?.tags).map((tag, key) => (
            <div key={key} className="bg-secondary/50 text-primary text-sm border rounded-full px-2 py-1">
              #{
                //@ts-ignore
                tag.name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Card