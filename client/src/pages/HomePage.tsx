import React, { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/ui/Button'
import { CirclePlus, Cross, Share2, X, XCircle } from 'lucide-react'
import AddContentForm from '../components/addContentForm'

const HomePage = () => {
  const [addContentWindow, setaddContentWindow] = useState(false);
  const closeContentWindow = () => setaddContentWindow(p => !p)
  const contents = [
    {
      "_id": "69677bb0a68e2c9b2c55731c",
      "title": "first one",
      "description": "desc",
      "link": "href",
      "type": "idea",
      "tags": [
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419"
      ],
      "userId": "696771b9141abae27d19e419",
      "__v": 0
    },
    {
      "_id": "69677bb0a68e2c9b2c55731c",
      "title": "first one",
      "description": "desc",
      "link": "href",
      "type": "idea",
      "tags": [
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419"
      ],
      "userId": "696771b9141abae27d19e419",
      "__v": 0
    },
    {
      "_id": "69677bb0a68e2c9b2c55731c",
      "title": "first one",
      "description": "desc",
      "link": "href",
      "type": "idea",
      "tags": [
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419",
      ],
      "userId": "696771b9141abae27d19e419",
      "__v": 0
    },
    {
      "_id": "69677bb0a68e2c9b2c55731c",
      "title": "first one",
      "description": "desc",
      "link": "href",
      "type": "idea",
      "tags": [
        "696771b9141abae27d19e419",
        "696771b9141abae27d19e419"
      ],
      "userId": "696771b9141abae27d19e419",
      "__v": 0
    },
  ]
  return (<>
    <main>
      <header className='flex justify-between items-center p-10'>
        <div className='text-3xl font-bold'>All Ideas</div>
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
              <AddContentForm closeContentWindow={setaddContentWindow} />
            </div>
          )}
        </div>
      </header>
      <div className="flex flex-wrap gap-5 justify-start p-5">
        {contents.map((content, key) => (
          <Card key={key} {...content} />
        ))}
      </div>
    </main>
  </>)
}

export default HomePage