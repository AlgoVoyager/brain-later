const MsgBlock = ({error, data}: {error: any, data: any})=>{
    return (<div onClick={(e)=>{
        const target = e.target as HTMLElement;
        target.style.display="none"
    }}
     className={`message w-fit mx-auto py-1 px-2 rounded-lg ${error?"bg-red-100 dark:bg-red-800 dark:text-red-200 text-red-600":"bg-green-100 dark:bg-green-800 dark:text-green-400 text-green-600"}`}>
        {error?error.data.message
        :data?data.message:""}
    </div>)
}
export default MsgBlock