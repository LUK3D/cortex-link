import { ReactNode } from "react";
import Button from "../components/button";
import MenuComponent from "../components/menu";
import { useMenuStore } from "../stores/menuStore";
import { Menu } from "../types";


interface ILayout {
    children: ReactNode
}

const Layout = ({ children }: ILayout) => {
    const { activeMenu, menus } = useMenuStore((state) => state);

    const onClick = (menu?: Menu) => {
        activeMenu(menu?.link ?? '/');
    }
    return (
        <div className="w-full flex  h-full text-gray-700">
            <div className="w-[300px] h-full bg-white border-r flex flex-col">
                <div className="h-full w-full flex flex-col overflow-y-auto py-10 px-2">
                    <MenuComponent onClick={onClick} menus={menus}></MenuComponent>
                </div>
                <div className="w-full h-f flex flex-col">
                    <div className="w-full   flex flex-col  ">
                        <div className="mb-2">
                            <Button onClick={() => { }} >
                                <div className="flex w-full justify-between pr-4 my-1">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                        </svg>
                                        <p className="ml-2">Chat</p>
                                    </div>
                                    <div className="w-6 h-6 flex justify-center items-center rounded-full border">5</div>
                                </div>
                            </Button>
                            <Button onClick={() => { }} >
                                <div className="flex w-full justify-between pr-4 my-1">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                        <p className="ml-2">Definições</p>
                                    </div>
                                </div>
                            </Button>
                            <Button onClick={() => { }} >
                                <div className="flex w-full justify-between pr-4 my-1">
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                        </svg>


                                        <p className="ml-2">Inteligência Artificial</p>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className="w-full flex cursor-pointer border-t px-5 py-2">
                            <img className="w-10 h-10 rounded-full object-cover" src="https://images.pexels.com/photos/1689608/pexels-photo-1689608.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                            <div className="pl-2">
                                <p className="text-sm font-bold">Lukebana Ndontoni</p>
                                <p className="text-xs ">filipelukebana@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col">
                <div className="w-full  bg-white border-b px-5 py-4">
                    <h1 className="font-bold text-xl">Get Started</h1>
                </div>
                <div className="flex flex-col w-full h-full  overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;