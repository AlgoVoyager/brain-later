import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/ui/Button'
import { CirclePlus, Share2, XCircle } from 'lucide-react'
import AddContentForm from '../components/AddContentForm'
import LoadingSkeleton from '../components/LoadingSkeleton'
import CopyHashLink from '../components/profile/CopyHashLink'
import { contentApi } from '../redux/api/contentApi'
import { useAppSelector } from '../utils/hooks'
import MsgBlock from '../components/shared/MsgBlock'

const HomePage = () => {
  const { isLoading:loadingContents } = contentApi.useFetchContentsQuery()
  const contents = useAppSelector((state) => state.contents);
  
  const [addContentWindow, setaddContentWindow] = useState(false);

  const [shareWindow, setshareWindow] = useState(false);
  return (<>
    <main className='w-full h-full max-h-full dark:bg-slate-900 dark:text-white'>
      <header className='flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-0 gap-2 lg:p-10 p-2'>
        <h1 className='text-3xl font-bold'>All Ideas</h1>
        <div className="options flex gap-3 relative">
          <Button
            text="Share Brain"
            size="lg"
            variant="secondary"
            pIcon={<Share2 />}
            onClick={() => { setshareWindow(p => !p) }}
          />
          {shareWindow && (
            <div className={`confirm-share-window dark:bg-slate-700/50 dark:text-white space-y-2 px-4 py-4 flex flex-col items-center justify-center ${shareWindow && 'expandShareAnimation'}`}>
              <XCircle onClick={() => { setshareWindow(p => !p) }} 
                className='bg-white dark:bg-slate-700 dark:text-secondary rounded-bl-full flex items-center justify-center rounded-full absolute lg:right-8 right-2 lg:top-4 top-2 cursor-pointer' size={50} />
              <h1 className='text-2xl font-bold'>Share Brain</h1>
              <p>Anyone with this link can view your Contents</p>
              <CopyHashLink />
            </div>
          )}
          <Button
            text="Add Content"
            size="lg"
            variant="primary"
            pIcon={<CirclePlus />}
            onClick={() => { setaddContentWindow(p => !p) }}
          />
          {addContentWindow && (
            <div className={'addContentWindow ' + addContentWindow && ' expandAnimation'}>
              <XCircle onClick={()=>setaddContentWindow(false)} className='bg-white dark:bg-slate-700 dark:text-secondary rounded-bl-full flex items-center justify-center rounded-full absolute right-12 lg:top-4 top-24' size={50} />
              <AddContentForm setaddContentWindow={setaddContentWindow} />
            </div>
          )}
        </div>
      </header>
      <div className="homeOptions">
        <MsgBlock error={undefined} data={undefined} />
      </div>
      <div className="max-h-[75vh] rounded-xl overflow-y-auto flex flex-wrap gap-5 justify-start p-5">
        {loadingContents ? <LoadingSkeleton />
          : (contents.length
            ? contents.map((content, key) => (
              
              <Card  key={key} content={content}  />
            ))
            : "No Content Added..")
        }
      </div>
    </main>
  </>)
}

export default HomePage