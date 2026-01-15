import {  Share2, Trash2 } from 'lucide-react'
import type { CardProps } from '../utils/types'

const Card = (props:CardProps) => {
  return (
      <div className='flex flex-col justify-between gap-2 items-start hover:shadow-lg shadow-none duration-200 bg-white p-4 min-h-72 max-w-96  min-w-96 border-4 rounded-xl'>
        <div className="w-full flex flex-col items-start gap-2">
            <div className="upperSec flex items-center justify-between w-full">
              <div className="bg-secondary/50 text-primary border rounded-full px-2 py-1">{props.type}</div>
              <div className="contentOptions flex gap-2 items-center">
                <div className='hover:bg-red-300 hover:translate-y-1 hover:-rotate-6 duration-200 rounded-full cursor-pointer p-2'>
                  <Trash2 />
                </div>
                <div className='hover:bg-secondary hover:translate-y-1 hover:rotate-6 duration-200 rounded-full cursor-pointer p-2'>
                  <Share2 />
                </div>
              </div>
            </div>
            <h2 className='text-4xl font-semibold'>{props.title}</h2>
            <p className="text-justify">{props.description}</p>
            {/* <div className="sociallink">
                    <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+yid}
                title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
        </div>
        <div className="w-full flex flex-col gap-2 ">
            <div className="tags flex flex-wrap  gap-2">
                {(props?.tags).map((tag)=>( 
                    <div className="bg-secondary/50 text-primary text-sm border rounded-full px-2 py-1">#{tag.substring(0,6)}</div>
                ))} 
            </div>
         </div>
    </div>
  )
}

export default Card