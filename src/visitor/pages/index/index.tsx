import Button from "../../components/button";
import Footer from "../../components/footer";
import Header from "../../components/header";
import i18next from '../../../translations'

const Index = () => {
    const i18n = i18next;


    return (
        <div className="w-full flex flex-col  h-auto">
            <Header></Header>
            <div className="flex w-full  p-20 mt-12">
                <div className="w-full flex flex-col min-h-100 justify-center">
                    <p className="text-indigo-500 mb-10">🧑🏾 Melhor Plataforma de E-Learning</p>
                    <h2 className="text-6xl font-bold">Getting Best</h2>
                    <h2 className="text-6xl font-bold">Quality Education</h2>
                    <h2 className="text-6xl font-bold">Is Now More Easier</h2>
                    <p className="mt-10 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus commodi natus assumenda cumque totam autem ipsam consectetur, nostrum vitae maiores numquam quam. Alias, dolores ab exercitationem placeat eaque sed impedit?</p>
                    <div className="flex items-center mt-10">
                        <Button>Join Course</Button>

                        <a href="#" className="mx-5 flex items-center transform transition-transform active:scale-95">
                            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-indigo-500 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="ml-3 font-bold">See how it works?</p>
                        </a>
                    </div>

                </div>
                <div className="w-full flex flex-col justify-center items-center relative">
                    <img className="object-cover w-5/10 h-full rounded-full shadow-xl" src="https://images.pexels.com/photos/4144038/pexels-photo-4144038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className="object-cover w-40 absolute  left-0 rounded-full" src="https://images.pexels.com/photos/4144177/pexels-photo-4144177.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <img className="object-cover w-40 absolute  left-right -bottom-30 rounded-full" src="https://images.pexels.com/photos/6794181/pexels-photo-6794181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className="object-cover w-60 h-60 absolute  right-0 -top-10 rounded-full" src="https://images.pexels.com/photos/5905866/pexels-photo-5905866.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />

                </div>
            </div>
            <div className="w-full h-40 bg-indigo-500 mt-20 flex items-center justify-center">
                <div className="flex flex-col justify-center items-center  text-center text-white border-r px-20">
                    <h2 className="font-bold text-4xl">8K+</h2>
                    <p className="mt-4 text-sm">Success Stories</p>
                </div>
                <div className="flex flex-col justify-center items-center  text-center text-white border-r px-20">
                    <h2 className="font-bold text-4xl">200+</h2>
                    <p className="mt-4 text-sm">Expert Instructor</p>
                </div>
                <div className="flex flex-col justify-center items-center  text-center text-white border-r px-20">
                    <h2 className="font-bold text-4xl">108K+</h2>
                    <p className="mt-4 text-sm">Worldwide Students</p>
                </div>
                <div className="flex flex-col justify-center items-center  text-center text-white  px-20">
                    <h2 className="font-bold text-4xl">310+</h2>
                    <p className="mt-4 text-sm">Trendy Subjects</p>
                </div>
            </div>
            <div className="w-full flex justify-between px-20 pt-20 pb-10">
                <div className="w-2/5 pr-20 flex flex-col">
                    <h2 className="text-5xl font-bold">Why we are best from others?</h2>
                    <p className="mt-10 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus commodi natus assumenda cumque totam autem ipsam consectetur, nostrum vitae maiores numquam quam.</p>

                    <div className="mt-10"><Button>Start Now</Button></div>
                </div>
                <div className="w-3/5 grid grid-cols-2 gap-10">
                    <div className="col-span-1 h-100 bg-white shadow-lg rounded-lg flex-col p-10">
                        <div className="w-20 h-20 rounded-md bg-indigo-400 p-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                            </svg>
                        </div>
                        <p className="font-semi-bold text-lg my-5 selection:(bg-indigo-500 text-white)">AI Data processing</p>
                        <p className="text-gray-500 selection:(bg-indigo-500 text-white)">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolores placeat esse doloremque aperiam. Maxime a eum beatae blanditiis obcaecati, at animi mollitia cumque non atque unde quae officiis sunt.</p>
                    </div>
                    <div className="col-span-1 h-100 bg-white shadow-lg rounded-lg flex-col p-10">
                        <div className="w-20 h-20 rounded-md bg-green-400 p-2 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>

                        </div>
                        <p className="font-semi-bold text-lg my-5 selection:(bg-green-400 text-white)">Community based Content Sharing</p>
                        <p className="text-gray-500 selection:(bg-green-400 text-white)">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolores placeat esse doloremque aperiam. Maxime a eum beatae blanditiis obcaecati, at animi mollitia cumque non atque unde quae officiis sunt.</p>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-4 gap-10 px-20 mb-20">
                <div className="col-span-1 h-100 bg-white shadow-lg rounded-lg flex-col p-10">
                    <div className="w-20 h-20 rounded-md bg-blue-400 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                        </svg>
                    </div>
                    <p className="font-semi-bold text-lg my-5 selection:(bg-blue-500 text-white)">AI Data processing</p>
                    <p className="text-gray-500 selection:(bg-blue-500 text-white)">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolores placeat esse doloremque aperiam. Maxime a eum beatae blanditiis obcaecati, at animi mollitia cumque non atque unde quae officiis sunt.</p>
                </div>
                <div className="col-span-1 h-100 bg-white shadow-lg rounded-lg flex-col p-10">
                    <div className="w-20 h-20 rounded-md bg-pink-400 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                    </div>
                    <p className="font-semi-bold text-lg my-5 selection:(bg-pink-400 text-white)">Community based Content Sharing</p>
                    <p className="text-gray-500 selection:(bg-pink-400 text-white)">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolores placeat esse doloremque aperiam. Maxime a eum beatae blanditiis obcaecati, at animi mollitia cumque non atque unde quae officiis sunt.</p>
                </div>
                <div className="col-span-1 h-100 bg-white shadow-lg rounded-lg flex-col p-10">
                    <div className="w-20 h-20 rounded-md bg-yellow-400 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                    </div>
                    <p className="font-semi-bold text-lg my-5 selection:(bg-yellow-400 text-white)">Community based Content Sharing</p>
                    <p className="text-gray-500 selection:(bg-yellow-400 text-white)">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolores placeat esse doloremque aperiam. Maxime a eum beatae blanditiis obcaecati, at animi mollitia cumque non atque unde quae officiis sunt.</p>
                </div>
                <div className="col-span-1 h-100 bg-white shadow-lg rounded-lg flex-col p-10">
                    <div className="w-20 h-20 rounded-md bg-red-400 p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                    </div>
                    <p className="font-semi-bold text-lg my-5 selection:(bg-red-400 text-white)">Community based Content Sharing</p>
                    <p className="text-gray-500 selection:(bg-red-400 text-white)">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolores placeat esse doloremque aperiam. Maxime a eum beatae blanditiis obcaecati, at animi mollitia cumque non atque unde quae officiis sunt.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Index;