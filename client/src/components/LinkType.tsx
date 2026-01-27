import useYoutubeEmbed from '../utils/useYoutubeEmbed';
import type { CardProps } from '../utils/types';

const LinkType = ({link, type}:{link:string, type:string}) => {
    const yid = useYoutubeEmbed(link)
    switch (type) {
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
        return <a href={link} target='_blank' className='text-primary underline hover:text-primary/50'>{link}</a>
        break;
    }
  }
            export default LinkType