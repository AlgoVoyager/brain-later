import type { ButtonProps } from "../../utils/types"

const Button = (props: ButtonProps) => {

    const variantClasses = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-primary",
        ternary: "bg-ternary text-primary",
    }
    const sizeClasses = {
        sm: "text-sm px-2 py-1",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-2",
        xl: "text-2xl px-6 py-3"
    }

    return (
        <button className={ `${props?.customStyles} ${variantClasses[props.variant]} ${sizeClasses[props.size]} ${props.disabled&&"opacity-15"}  border rounded-xl flex items-center gap-2 hover:opacity-80 duration-150 hover:shadow active:opacity-40 `} 
            onClick={props.onClick}
            disabled={props.disabled}>
            {props?.pIcon}
            {props.text} 
            {props?.sIcon}
        </button>
    )
}

export default Button
