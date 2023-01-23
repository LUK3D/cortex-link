import Button from "./button";

const Header = () => {
    return (
        <div className="fixed w-full h-12 py-5 flex items-center justify-between right-0 top-0 px-20 bg-gray-100 z-20">
            <h1 className="text-2xl font-bold ">Cortex-<span className="text-indigo-500">Link</span></h1>
            <ul className="flex items-center text-gray-600">
                <li className="mx-3 text-gray-800 font-bold"><a href="#">Home</a></li>
                <li className="mx-3"><a href="#">Features</a></li>
                <li className="mx-3"><a href="#">Pricing</a></li>
                <li className="mx-3"><a href="#">About</a></li>
            </ul>
            <ul className="flex items-center text-gray-600">
                <li className="mx-3 text-gray-800 font-bold"><a href="#">Sign in</a></li>
                <li className="mx-3">
                    <Button>Sign up</Button>
                </li>
            </ul>
        </div>
    );
}

export default Header;