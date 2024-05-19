import { Link } from 'react-router-dom';

export default function NotLogged() {
    return(<div className="grid grid-cols-2 w-full h-screen lg:p-14 -mt-14 text-black dark:text-slate-300">
        <div className="flex items-center justify-center">
            <img className="h-[70vh] w-auto notloggedBg" src="./Images/notLoggedBG.png" alt="GIF"/>
        </div>
        <div className="flex items-center justify-center flex-col">
            <h1 className="flex text-7xl font-bold">Book<div className="anim-2 px-2 text-8xl text-red-700  dark:text-red-500 relative bottom-3">2</div>Read</h1>
            <ul className="text-3xl my-12 text-center font-bold">
                <li>Sell books after reading</li>
                <li>Buy books read by others</li>
                <li>Use same book many times</li>
            </ul>
            <div className="flex items-center">
                <Link className="bg-blue-800 text-2xl text-white px-4 py-2 rounded-2xl dark:bg-blue-40 hover:brightness-150 mx-4" to="/auth/signup">Sign Up</Link>
                <Link className="bg-blue-800 text-2xl text-white px-4 py-2 rounded-2xl dark:bg-blue-40 hover:brightness-150 mx-4" to="/auth/login">Log In</Link>
            </div>
        </div>
    </div>);
}