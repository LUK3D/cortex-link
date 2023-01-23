import { ReactNode } from "react";


interface Props {
    children?: ReactNode,
    className?: string
}

const Button = ({ children, className }: Props) => {
    return (<a className={`px-5 py-2 rounded-full bg-yellow-400 font-bold text-gray-900 transform transition-transform active:scale-95 ${className} `} href="#">{children}</a>);
}

export default Button;