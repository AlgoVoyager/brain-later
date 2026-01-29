
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
    <div className=' dark:bg-slate-800 text-black dark:text-white dark:border-slate-700 flex flex-col justify-between gap-2 items-start hover:shadow-lg shadow-none duration-200 bg-white lg:p-4 p-2 lg:min-h-72 lg:max-w-1/3 max-w-1/2  lg:min-w-1/4 border-4 rounded-xl'>
      <div className="w-full flex flex-col items-start gap-2">
        <div className="upperSec flex items-center justify-between w-full">
          <div className="bg-secondary/50 text-primary dark:bg-slate-600 dark:border-primary dark:text-secondary border rounded-full px-2 py-1">{content.type}</div>
          {!shared && <div className="contentOptions flex gap-2 items-center">
            <ShareWindow contentId={content._id} shared={content.shared}  />
            <div className='group relative hover:bg-red-300 dark:hover:bg-red-800 hover:translate-y-1 hover:rotate-6 duration-200 rounded-full cursor-pointer p-2'
              onClick={() => setConfirmOpen(!confirmOpen)}>
              <Trash2 size={20} />
              {confirmOpen && (
                <div className="absolute -top-7 -right-8 group-hover:rotate-6 bg-white dark:bg-slate-800 border dark:border-slate-700 shadow-lg rounded-lg p-3 z-10 flex flex-col items-center gap-2"
                  onClick={(e) => e.stopPropagation()} >
                  <h3 className="whitespace-nowrap font-bold">Confirm Delete?</h3>
                  <div className="flex gap-2">
                    <Button
                      customStyles='bg-red-500 hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-900'
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
        <h2 className='lg:text-4xl text-xl font-semibold '>{content.title}</h2>
        <p className="text-justify lg:text-lg text-sm">{content.description}</p>
        <LinkType link={content.link} type={content.type} />
      </div>
      <div className="w-full flex flex-col gap-2 ">
        <div className="tags flex flex-wrap  gap-2">
          {(content?.tags).map((tag, key) => (
            <div key={key} className="bg-secondary/50 text-primary lg:text-sm text-xs border rounded-full lg:px-2 px-1 lg:py-1 py-0">
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