import { CopyIcon } from "lucide-react";
import { useAppSelector } from "../../utils/hooks";


const CopyHashLink = () => {
    const user = useAppSelector(state => state.user)
    const hashlink = `${window.location.origin}/brain/${user.hash}`;
    const handleCopy = () => {
        window.navigator.clipboard.writeText(hashlink);
    };
    return (
        <div className="userHash flex items-center gap-1 rounded-full p-1 pl-2 border border-primary">
            <span>Shared Brain Link </span>
            <div className="hash px-3 bg-secondary w-fit rounded-full text-primary">
                {hashlink.substring(7)}
            </div>
            <div onClick={handleCopy}
                className="hash active:opacity-50 cursor-pointer h-3 py-3 px-2  bg-secondary w-fit rounded-full text-primary flex items-center">
                <CopyIcon size={20} />
            </div>
        </div>
    )
}

export default CopyHashLink