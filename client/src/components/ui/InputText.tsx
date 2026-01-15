interface InputProps {
    name: string;
    label: string;
    placeholder: string;
    value: string;
    setter: React.Dispatch<React.SetStateAction<any>>;
}

const InputText = (props: InputProps) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor={props.name} className='text-xl '>{props.label}</label>
            <input
                className='px-4 py-2 bg-secondary/30 rounded-xl text-2xl placeholder:text-gray-500 text-primary'
                type="text"
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => {
                    props.setter((prev: any) => ({ ...prev, [props.name]: e.target.value }));
                }}
            />
        </div>
    );
}

export default InputText