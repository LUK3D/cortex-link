import { ReactNode } from "react";

interface IButton {
    children: ReactNode,
    onClick: () => void,
    active?: boolean,
    expandable?: boolean,
    expanded?: boolean
}

const Button = ({ children, onClick, active, expandable, expanded }: IButton) => {
    return (
        // I didn't use a button tag because they cant be nested (a button can't be a child of another button)
        <label onClick={(e) => { onClick(); e.stopPropagation() }} className={`${active ? 'bg-[#6366F1] text-white bg-opacity-25 text-[#6366F1]' : 'text-gray-500 hover:(bg-white text-indigo-500)'} ${expanded && 'font-bold text-[#6366F1]'} cursor-pointer w-full pl-3 rounded-md flex transition-transform transform active:scale-95 bg-white py-2 `}>
            {children}
            {expandable && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={` mt-1 mr-4 transform transition-transform ${expanded ? 'rotate-180' : 'rotate-0'} w-5 h-5`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
            }
        </label>
    );
}

export default Button;
