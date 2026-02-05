import { useState, type Dispatch, type SetStateAction } from 'react'
import InputText from './ui/InputText';
import { CircleFadingPlus, Loader, Plus } from 'lucide-react';
import Button from './ui/Button';
import { useDispatch } from 'react-redux';
import type { CardProps, updateFormInterface } from '../utils/types';
import { useUpdateContentRequestMutation } from '../redux/api/contentApi';
import MsgBlock from './shared/MsgBlock';
import { updateContent } from '../redux/features/contentsSlice';

const contentTags = [
  'Important', 'Todo', 'Reminder', 'Forher'
]

const contentTypes = [
  'Post', 'Link', 'Idea', 'Youtube Video', 'Document',
  'Todo', 'Other'
]

const EditContentForm = ({ content, setEditWindow }: { content: CardProps, setEditWindow: Dispatch<SetStateAction<boolean>> }) => {
  const dispatch = useDispatch()
  const initialTags = content.tags.map((tag: any) => typeof tag === "string" ? tag : tag.name);
  const defaultForm: updateFormInterface = {
    contentId: content._id,
    title: content.title,
    description: content.description,
    type: content.type,
    link: content.link,
    tags: initialTags
  }
  const [form, setform] = useState(defaultForm)
  const [updateContentRequest, { isLoading, data, error }] = useUpdateContentRequestMutation();
  const [Tags] = useState(contentTags);

  const handleSubmit = async () => {
    try {
      const res = await updateContentRequest(form).unwrap();
      dispatch(updateContent(res.content))
      setTimeout(() => {
        setEditWindow(false)
      }, 300);
    }
    catch (error: any) {
      console.log(error)
    }
  }
  return (
    <div className="addContentForm bg-white dark:bg-slate-800/70 border-4 dark:border-slate-700 p-5 rounded-2xl lg:w-1/2 w-full translate-y-1/4 lg:translate-x-1/2 translate-x-0 relative flex flex-col items-center justify-center gap-1">
      <h1 className='font-bold text-3xl'>Update Content</h1>
      <MsgBlock error={error} data={data} />
      <InputText name='title' label='Title' placeholder='Enter Content Title'
        value={form.title} setter={setform} />
      <InputText name='description' label='Description' placeholder='Enter Content description'
        value={form.description} setter={setform} />
      <div className="typesRadios grid grid-cols-3 gap-2 py-2">
        <h3 className='text-lg font-bold'>Select The Content Type</h3>
        {contentTypes.map((item, key) => (
          <label key={key} htmlFor={item} className='flex gap-1 items-center'>
            <input type="radio" id={item} name='content-type' value={item}
              checked={form.type === item}
              onChange={(e) => setform({
                ...form,
                //@ts-ignore
                type: e.target.value
              })} />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <InputText name='link' label='Link' placeholder='Enter Content link'
        value={form.link} setter={setform} />
      <div className="contentTags flex flex-wrap items-center mb-2 self-start gap-2">
        <h2 className='text-xl'>Select Relevant #Tags :</h2>
        <div className="selected-tags-container flex gap-2">
          {form.tags.map((tag, key) => (
            <div key={key} className=' bg-primary/30 w-fit rounded-full text-sm px-2 py-1 flex gap-1 items-center cursor-pointer'
              onClick={() => setform(prev => ({
                ...prev,
                tags: prev.tags.filter((item) => item !== tag)
              }))}>
              #{tag}
            </div>
          ))}{form.tags.length == 0 && "No Tags Selected"}
        </div>
      </div>
      <div className="available-tags-container opacity-50 flex gap-2">
        {Tags.map((tag, key) => (
          <div key={key} className=' bg-black/10 dark:bg-slate-700/70 w-fit rounded-full text-sm px-2 py-1 flex gap-1 items-center cursor-pointer'
            onClick={() => setform(prev => {
              if (prev.tags.includes(tag)) return prev;
              return { ...prev, tags: [...prev.tags, tag] }
            })}>#{tag} <Plus size={14} /></div>
        ))}
      </div>
      <Button
        text={isLoading ? "Updating" : "Update Content"}
        size="lg"
        variant="primary"
        pIcon={isLoading ? <Loader /> : <CircleFadingPlus />}
        disabled={isLoading}
        onClick={handleSubmit}
      />
    </div>
  )
}

export default EditContentForm
