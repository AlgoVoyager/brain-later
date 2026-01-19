

const LoadingSkeleton = () => {
  return (
    <div className="loadingSkeleton opacity-70 p-3 bg-slate-50/40 px-0 rounded-xl border-2 w-11/12 h-4/5 gap-5 grid grid-cols-2 items-center place-items-center lg:grid-cols-3">
      {Array(6).fill(null).map((_, i) => (
        <ContentSkeletonBox key={i} />
      ))}
    </div>
  )
}
const ContentSkeletonBox = ()=>{
  return (<div className="s-box p-5 flex flex-col justify-between">
        <div className="w-full flex flex-col items-start gap-2">
          <div className="upperSec flex items-center justify-between w-full">
            <div className="bg-gray-300/50  border rounded-full  w-1/5 h-5"></div>
            <div className=" flex gap-2 items-center">
                <div className="round-btn-skeleton rounded-full bg-gray-300/50 size-5"></div>
                <div className="round-btn-skeleton rounded-full bg-gray-300/50 size-5"></div>
            </div>
          </div>
          <h2 className='mt-3 mb-2 bg-gray-300/50 border rounded-full w-1/2 h-5'></h2>
          <p className=" bg-gray-300/50 border rounded-full w-full h-5"></p>
          <div className="bg-gray-300/50 border rounded-full w-3/5 h-5"></div>
        </div>
        <div className="w-full flex flex-col gap-2 ">
          <div className="tags flex flex-wrap w-2/5 rounded-full bg-gray-300 h-5 gap-2">
          </div>
        </div>
      </div>)
}

export default LoadingSkeleton