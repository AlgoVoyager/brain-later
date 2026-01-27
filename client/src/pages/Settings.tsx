import React, { useEffect } from 'react'
import { contentApi } from '../redux/api/contentApi'
import LoadingSkeleton from '../components/LoadingSkeleton'
import Card from '../components/Card'
import { useDispatch } from 'react-redux'
import { addContent, setContents } from '../redux/features/contentsSlice'
import Button from '../components/ui/Button'
import { useAppSelector } from '../utils/hooks'

const Settings = () => {
  const contents = useAppSelector((state) => state.contents);
  const dispatch = useDispatch()
  const { isLoading } = contentApi.useFetchContentsQuery()
  
    const handleAdd =() =>{
      const addedData = {
          _id: "69778753371a9c8006fde90a",
          title: "five",
          description: "sd",
          link: "",
          type: "Idea",
          tags: [],
          userId: "6974afe4fa020e9076fda828",
          shared: false,
          __v: 0
      }
      dispatch(addContent(addedData))
    }
  return (
    <main className='w-full h-full'>
      <div className="homeOptions">
        {/* <MsgBlock/> */}
      </div>
      <div className="max-h-[80vh] overflow-y-auto flex flex-wrap gap-5 justify-start p-5">
        <Button text="Add Content" size="lg" variant="primary" onClick={handleAdd} />
        {isLoading ? <LoadingSkeleton />
          : (contents?.length
            ? contents.map((content, key) => (
              // @ts-ignore
              <Card key={key} {...content} />
            ))
            : "No Content Added..")
        }
      </div>
    </main>
  )
}

export default Settings