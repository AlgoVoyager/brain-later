import type { ButtonProps } from "../../utils/types"

const Button = (props: ButtonProps) => {

    const variantClasses = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-primary"
    }
    const sizeClasses = {
        sm: "text-sm px-2 py-1",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-2",
        xl: "text-xl px-4 py-1"
    }

    return (
        <button className={ `${props?.customStyles} ${variantClasses[props.variant]} ${sizeClasses[props.size]}  border rounded-xl flex items-center gap-2 `} onClick={props.onClick}>
            {props?.pIcon}
            {props.text} 
            {props?.sIcon}
        </button>
    )
}

export default Button
