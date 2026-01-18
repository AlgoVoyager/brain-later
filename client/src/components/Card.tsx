
import { Share2, Trash2 } from 'lucide-react'
import { useState } from 'react'
import type { CardProps } from '../utils/types'
import useYoutubeEmbed from '../utils/useYoutubeEmbed'
import Button from './ui/Button'
import ShareWindow from './ShareWindow'

const Card = (props: CardProps) => {
  const LinkType = () => {
    const yid = useYoutubeEmbed(props.link)
    switch (props.type) {
      case "Youtube Video":
        return (
          <div className="sociallink">
            <iframe width="460" height="280" src={"https://www.youtube.com/embed/" + yid}
              title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>)
        break;
      // case "Twitter Video":
      //   return (
      //   <div className="sociallink">
      //     <iframe width="560" height="315" src={"https://www.youtube.com/embed/"}
      //     title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //     referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      //   </div>)
      //   break;
      default:
        return <a href={props.link} target='_blank' className='text-primary underline hover:text-primary/50'>{props.link}</a>
        break;
    }
  }


  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleDelete = () => {
    if (props.deleteContent) {
      props.deleteContent(props._id);
      setConfirmOpen(false);
    }
  };

  return (
    <div className='flex flex-col justify-between gap-2 items-start hover:shadow-lg shadow-none duration-200 bg-white p-4 min-h-72 max-w-1/3  min-w-1/4 border-4 rounded-xl'>
      <div className="w-full flex flex-col items-start gap-2">
        <div className="upperSec flex items-center justify-between w-full">
          <div className="bg-secondary/50 text-primary border rounded-full px-2 py-1">{props.type}</div>
          <div className="contentOptions flex gap-2 items-center">
            <ShareWindow />
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
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      text="No"
                      onClick={() => setConfirmOpen(false)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <h2 className='text-4xl font-semibold'>{props.title}</h2>
        <p className="text-justify">{props.description}</p>
        <LinkType />
      </div>
      <div className="w-full flex flex-col gap-2 ">
        <div className="tags flex flex-wrap  gap-2">
          {(props?.tags).map((tag, key) => (
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