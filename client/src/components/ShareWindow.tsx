import { useState } from 'react'
import Button from './ui/Button';
import { Share2 } from 'lucide-react';
import { useToggleShareContentMutation } from '../redux/api/contentApi';
import { useDispatch } from 'react-redux';
import { setPublicPosts } from '../redux/features/userSlice';
import { updateShareContent } from '../redux/features/contentsSlice';
import { useAppSelector } from '../utils/hooks';

const ShareWindow = ({ contentId, shared }: { contentId: string, shared: boolean }) => {
  const user = useAppSelector(state => state.user)
  const [toggleShareContent, { isLoading, data, error }] = useToggleShareContentMutation();
  const dispatch = useDispatch();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const handleShare = async () => {
    try {
      await toggleShareContent({ contentId }).unwrap();
      dispatch(updateShareContent(contentId));
      dispatch(setPublicPosts(shared ? -1 : 1));
      if(!shared){
        const hashlink = `${window.location.origin}/brain/${user.hash}/${contentId}`;
        window.navigator.clipboard.writeText(hashlink);
      }
      setTimeout(() => {
        setConfirmOpen(false);
      }, 1500);
    } catch (err) {
      console.error('Failed to toggle share:', err);
    }
  }
  return (
    <div onClick={() => setConfirmOpen(p => !p)}
      className={` ${shared ? "bg-secondary dark:bg-primary" : "hover:bg-secondary dark:hover:bg-primary"} relative hover:translate-y-1 hover:z-50  duration-100 rounded-full cursor-pointer p-2 `}>

      {confirmOpen && (
        <div className="absolute confirm-share-window -top-7 -right-24  group-hover:rotate-6 bg-white dark:bg-slate-800 border dark:border-slate-700 shadow-lg rounded-lg p-3  flex flex-col items-center gap-2"
          onClick={(e) => e.stopPropagation()} >
          {data && data.message + (!shared ? " & Link Revoked!" : " & Link Copied!" )}
          {/* @ts-ignore */}
          {error?.data?.message}
          <h3 className="whitespace-nowrap font-semibold">{shared ? "Unshare this from public?" : "Share this to public?"}</h3>
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="sm"
              text="Yes"
              onClick={handleShare}
              disabled={isLoading}
            />
            <Button
              variant="secondary"
              size="sm"
              text="No"
              onClick={() => setConfirmOpen(false)}
              disabled={isLoading}
            />
          </div>
        </div>
      )}
      <Share2 size={20} />
    </div>
  )
}

export default ShareWindow