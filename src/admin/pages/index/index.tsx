import Button from "../../components/button";
import LineChart from "../../components/charts/lineChart";
import Layout from "../../components/layout";


const Index = () => {


    return (
        <Layout>
            <div className="w-full  px-10 py-10 flex flex-col  p-10">
                <div className="w-full h-70  mb-7 grid grid-cols-10 gap-10">
                    <div className="h-full bg-gradient-to-r from-pink-400 to-red-400 col-span-4 rounded-lg flex flex-col">
                        <div className="flex flex-col w-full h-full p-6">
                            <div className=" flex w-full justify-between items-center">
                                <p className="text-white text-lg font-semibold w-full">Relatório de </p>
                                <Button onClick={() => { }}>
                                    <div className="mr-4 select-none text-pink-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>

                                    </div>
                                    <p className="text-pink-700 select-none">Ver detalhes</p>
                                </Button>
                            </div>
                            <p className="text-sm text-white opacity-50 mt-10">22 de Outubro de 2022</p>
                            <h1 className="text-4xl text-white font-bold">kz14,920.54</h1>
                        </div>
                        <div className=" border-t p-5 border-pink-300 flex justify-between items-center">
                            <div className="flex flex-col border-r px-5 text-white  border-pink-300">
                                <p className="text-sm opacity-50">Vendido</p>
                                <p className="font-bold text-white">224</p>
                            </div>
                            <div className="flex flex-col border-r px-5 text-white  border-pink-300">
                                <p className="text-sm opacity-50">Devolvidos</p>
                                <p className="font-bold text-white">12</p>
                            </div>
                            <div className="flex flex-col border-r px-5 text-white  border-pink-300">
                                <p className="text-sm opacity-50">Escolhido</p>
                                <p className="font-bold text-white">210</p>
                            </div>
                            <div className="flex flex-col px-5 text-white ">
                                <p className="text-sm opacity-50">Em Transito</p>
                                <p className="font-bold text-white">112</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-gradient-to-b from-sky-500 to-sky-300 col-span-2 rounded-lg flex flex-col">
                        <div className="flex flex-col w-full h-full p-6">
                            <p className="text-white text-lg font-semibold">Relatório de </p>
                            <p className="text-sm text-white opacity-50 mt-10">22 de Outubro de 2022</p>
                            <h1 className="text-4xl text-white font-bold">kz14,920</h1>
                        </div>
                        <div className="p-5">
                            <Button onClick={() => { }}>
                                <div className="mr-4 select-none text-sky-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>

                                </div>
                                <p className="text-sky-700 select-none">Ver detalhes</p>
                            </Button>
                        </div>
                    </div>
                    <div className="h-full bg-gradient-to-b from-orange-500 to-red-300 col-span-2 rounded-lg flex flex-col">
                        <div className="flex flex-col w-full h-full p-6">
                            <p className="text-white text-lg font-semibold">Relatório de </p>
                            <p className="text-sm text-white opacity-50 mt-10">22 de Outubro de 2022</p>
                            <h1 className="text-4xl text-white font-bold">kz14,920</h1>
                        </div>
                        <div className="p-5">
                            <Button onClick={() => { }}>
                                <div className="mr-4 select-none text-orange-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>

                                </div>
                                <p className="text-orange-700 select-none">Ver detalhes</p>
                            </Button>
                        </div>
                    </div>
                    <div className="h-full bg-gradient-to-b from-purple-500 to-purple-300 col-span-2 rounded-lg flex flex-col">
                        <div className="flex flex-col w-full h-full p-6">
                            <p className="text-white text-lg font-semibold">Relatório de </p>
                            <p className="text-sm text-white opacity-50 mt-10">22 de Outubro de 2022</p>
                            <h1 className="text-4xl text-white font-bold">kz14,920</h1>
                        </div>
                        <div className="p-5">
                            <Button onClick={() => { }}>
                                <div className="mr-4 select-none text-indigo-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>

                                </div>
                                <p className="text-indigo-700 select-none">Ver detalhes</p>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-100 bg-white rounded-lg shadow  flex flex-col">
                    <div className="w-full px-5 flex  py-5 justify-center border-b">
                        <div className="w-12 h-12 p-2 border rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                            </svg>
                        </div>
                        <div className="flex flex-col w-full justify-center ml-4">
                            <h3 className="font-bold text-xl">Acadêmico</h3>
                            <p className="text-sm">Resumo de Relatórios académico</p>
                        </div>
                    </div>
                    <div className="w-full flex flex-col p-10 h-full">
                        <LineChart></LineChart>
                    </div>
                </div>
                <div className="w-full h-100 bg-white rounded-lg shadow mt-5"></div>
                <div className="w-full h-100 bg-white rounded-lg shadow mt-5"></div>
            </div>
        </Layout>);
}

export default Index;