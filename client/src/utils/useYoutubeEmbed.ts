
const useYoutubeEmbed = (ytlink:string) => {
    function getYoutubeId() {
        const regex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = ytlink.match(regex);
        return (match && match[2].length === 11) ? match[2] : "";
    }

  return getYoutubeId();
  
}

export default useYoutubeEmbed