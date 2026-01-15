import React, { useState } from 'react'
import InputText from './ui/InputText';
import { CircleFadingPlus, Plus } from 'lucide-react';
import Button from './ui/Button';
interface formInterface {
  title: string,
  description: string,
  type: string,
  link: string,
  tags: string[]
}
const AddContentForm = () => {
  const defualtForm: formInterface = {
    title: "",
    description: "",
    type: "Idea",
    link: "",
    tags: []
  }
  const [form, setform] = useState(defualtForm)
  function resetForm() {
    setform(defualtForm);
  }
  const ContentTypes = [
    'Post', 'Link', 'Idea', 'Youtube Video', 'Document',
    'Todo', 'Other'
  ]
  const tags = [
    'Important', 'Todo', 'Reminder', 'Forher'
  ]
  const [Tags, setTags] = useState(tags);
  const handleContentAdd = () =>{
    
  }
  return (
    <div className="addContentForm bg-white border-4 p-5 rounded-2xl w-1/2 translate-y-1/4 translate-x-1/2 relative flex flex-col items-center justify-center gap-1">
      <h1 className='font-bold text-3xl'>Enter Details of new Content</h1>
      <InputText name='title' label='Title' placeholder='Enter Content Title'
        value={form.title} setter={setform} />
      <InputText name='description' label='Description' placeholder='Enter Content description'
        value={form.description} setter={setform} />
      <div className="typesRadios grid grid-cols-3 gap-2 py-2">
        <h3 className='text-lg font-bold'>Select The Content Type</h3>
        {ContentTypes.map((item) => (
          <label htmlFor={item} className='flex gap-1 items-center'>
            <input type="radio" id={item} name='content-type' value={item}
              checked={form.type === item}
              onClick={(e) => setform({ ...form, type: e.target.value })} />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <InputText name='link' label='Link' placeholder='Enter Content link'
        value={form.link} setter={setform} />
      
      <div className="contentTags flex flex-wrap items-center mb-2 self-start gap-2">
        <h2 className='text-xl'>Select Relevant #Tags :</h2>
        <div className="selected-tags-container  flex gap-2">
          {form.tags.map(tag => (
            <div className=' bg-primary/30 w-fit rounded-full text-sm px-2 py-1 flex gap-1 items-center cursor-pointer'>#{tag}</div>
          ))}{form.tags.length == 0 && "No Tags Selected"}
        </div>
      </div>
      <div className="available-tags-container opacity-50 flex gap-2">
        {Tags.map(tag => (
          <div className=' bg-black/10 w-fit rounded-full text-sm px-2 py-1 flex gap-1 items-center cursor-pointer'
            onClick={() => setform(prev => {
              if (prev.tags.includes(tag)) return prev;
              return { ...prev, tags: [...prev.tags, tag] }
            })}>#{tag} <Plus size={14} /></div>
        ))}
      </div>
      <Button
          // customStyles='mx-auto'
          text="Add Content"
          size="lg"
          variant="primary"
          pIcon={<CircleFadingPlus />}
          onClick={handleContentAdd}
      />
    </div>
  )
}

export default AddContentForm