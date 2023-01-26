import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { sidePanelStore } from "../stores/sidePanelStore";

interface ISidepanel {
    children: ReactNode,
    onClick: () => void,
    className?: string,
    headClasses?: string,
    tittle?: ReactNode,
    description?: ReactNode,
}

const Sidepanel = ({ children,tittle,description, className,headClasses, onClick }: ISidepanel) => {
    
    const {close,val } = sidePanelStore((state) => state);
    return (
        <Transition appear show={val} as={Fragment}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
                <div className={`transform origin-right   absolute top-0 right-0 h-full w-full overflow-hidden bg-gray-800 bg-opacity-35 z-10 shadow-2xl flex justify-end transition-all`}>
                    
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 -right-100"
                enterTo="opacity-100 right-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 right-0"
                leaveTo="opacity-0 -right-100"
              >
                    <div className={`transform delay-200   flex flex-col w-120 h-full bg-white ${className}  shadow-4xl relative`}>
                        <div className={`text-white w-full p-5 bg-indigo-500 flex flex-col ${headClasses} `}>
                            <h1 className=" font-semibold text-lg">{ tittle }</h1>
                            <p className="text-xs opacity-80">{ description}</p>
                            </div>
                            <div className="w-full h-full flex flex-col">
                                {children}
                            </div>
                            <button onClick={()=>close()} className=" absolute -left-10 top-2 w-8 h-8 bg-white flex justify-center items-center rounded-full bg-opacity-70">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                </Transition.Child>
                    </div>
                </Transition.Child>
            </Transition>
    );
}

export default Sidepanel;
