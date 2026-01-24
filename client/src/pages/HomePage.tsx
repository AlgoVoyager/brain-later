import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/ui/Button'
import { CirclePlus, Share2, XCircle } from 'lucide-react'
import AddContentForm from '../components/AddContentForm'
import useContents from '../utils/useContents'
import LoadingSkeleton from '../components/LoadingSkeleton'

const HomePage = () => {
  const [addContentWindow, setaddContentWindow] = useState(false);
  const closeContentWindow = () => setaddContentWindow(p => !p)
  const [contents, setcontents, fetchContents, deleteContent, loadingContents, MsgBlock, responseMessage] = useContents(addContentWindow)

  return (<>
    <main className='w-full h-full'>
      <header className='flex justify-between items-center p-10'>
        <h1 className='text-3xl font-bold'>All Ideas</h1>
        <div className="options flex gap-3 relative">
          <Button
            // customStyles='mx-auto'
            text="Share Brain"
            size="lg"
            variant="secondary"
            pIcon={<Share2 />}
            onClick={() => { console.log(1) }}
          />
          <Button
            // customStyles='mx-auto'
            text="Add Content"
            size="lg"
            variant="primary"
            pIcon={<CirclePlus />}
            onClick={() => { setaddContentWindow(p => !p) }}
          />
          {addContentWindow && (
            <div className={'addContentWindow ' + addContentWindow && ' expandAnimation'}>
              <XCircle onClick={closeContentWindow} className='bg-white rounded-bl-full flex items-center justify-center rounded-full absolute right-12 top-10' size={50} />
              <AddContentForm closeContentWindow={setaddContentWindow} fetchContents={fetchContents} />
            </div>
          )}
        </div>
      </header>
      <div className="homeOptions">
        <MsgBlock/>
      </div>
      <div className="max-h-[80vh] overflow-y-auto flex flex-wrap gap-5 justify-start p-5">
        {loadingContents ? <LoadingSkeleton />
          : (contents.length
            ? contents.map((content, key) => (
              // @ts-ignore
              <Card key={key} {...content} deleteContent={deleteContent} />
            ))
            : "No Content Added..")
        }
      </div>
    </main>
  </>)
}

export default HomePage