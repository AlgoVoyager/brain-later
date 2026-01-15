import type { CardProps } from '../utils/types'

const Card = (props:CardProps) => {
  return (
      <div className='flex flex-col justify-between gap-2 items-start bg-white p-4 min-h-72 max-w-96  min-w-96 border-4 rounded-xl'>
        <div className="w-full flex flex-col items-start gap-2">
            <div className="bg-secondary/50 text-primary border rounded-full px-2 py-1">{props.type}</div>
            <h2 className='text-4xl font-semibold'>{props.title}</h2>
            <p className="text-justify">{props.description}</p>
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