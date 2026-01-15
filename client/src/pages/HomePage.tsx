import React from 'react'
import Card from '../components/Card'
import Button from '../components/ui/Button'
import { CirclePlus, Share2  } from 'lucide-react'

const HomePage = () => {
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
            <div className="options flex gap-3">
                <Button
                    // customStyles='mx-auto'
                    text="Share Brain"
                    size="lg"
                    variant="secondary"
                    pIcon={<Share2  />}
                    onClick={()=>{console.log(1)}}
                />
                <Button
                    // customStyles='mx-auto'
                    text="Add Content"
                    size="lg"
                    variant="primary"
                    pIcon={<CirclePlus />}
                    onClick={()=>{console.log(1)}}
                />
            </div>
        </header>
        <div className="flex flex-wrap gap-5 justify-start p-5">
            {contents.map(content => (
                <Card key={content._id} {...content} />
            ))}
        </div> 
    </main>
  </>)
}

export default HomePage