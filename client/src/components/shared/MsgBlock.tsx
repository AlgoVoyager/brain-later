const MsgBlock = ({error, data}: {error: any, data: any})=>{
    return (<div onClick={(e)=>{
        const target = e.target as HTMLElement;
        target.style.display="none"
    }}
     className={`message w-fit mx-auto py-1 px-2 rounded-lg ${error?"bg-red-100 text-red-600":"bg-green-100 text-green-600"}`}>
        {error?error.data.message
        :data?data.message:""}
    </div>)
}
export default MsgBlock