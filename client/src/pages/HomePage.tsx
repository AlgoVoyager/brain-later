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
    <main className='w-full h-full'>
      <header className='flex justify-between items-center p-10'>
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
            <div className={`confirm-share-window space-y-2 px-4 flex flex-col justify-center ${shareWindow && 'expandShareAnimation'}`}>
              <XCircle onClick={() => { setshareWindow(p => !p) }} 
                className='bg-white rounded-bl-full flex items-center justify-center rounded-full absolute right-8 top-4 cursor-pointer' size={50} />
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
              <XCircle onClick={()=>setaddContentWindow(false)} className='bg-white rounded-bl-full flex items-center justify-center rounded-full absolute right-12 top-10' size={50} />
              <AddContentForm setaddContentWindow={setaddContentWindow} />
            </div>
          )}
        </div>
      </header>
      <div className="homeOptions">
        <MsgBlock error={undefined} data={undefined} />
      </div>
      <div className="max-h-[80vh] overflow-y-auto flex flex-wrap gap-5 justify-start p-5">
        {loadingContents ? <LoadingSkeleton />
          : (contents.length
            ? contents.map((content, key) => (
              
              <Card  key={key} {...content}  />
            ))
            : "No Content Added..")
        }
      </div>
    </main>
  </>)
}

export default HomePage