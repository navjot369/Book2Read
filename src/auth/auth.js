import "./auth.css";
import {Outlet} from 'react-router-dom';
import {useState} from 'react';
import clsx from 'clsx';
import LogIn from "./login.js";
import SignUp from "./signup.js";

export default function Auth() {
    const [isLogin, setLogin] = useState(true);
    return(<div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-authBG duration-200 bg-no-repeat bg-cover">
        <div className={clsx("w-1/2 flex",
            {"signUpClass" : isLogin, "" : !isLogin}
        )}>
        <div className="flex items-center justify-stretch w-full gap-4 duration-1000">
        <div class="card-wrapper flip-right">
            <div class="card">
                <div class="front flex flex-col items-center">
                <Logo />
                <div className="text-lg font-light">Don't have account? <span className="cursor-pointer text-blue-800 hover:text-blue-500" onClick={() => {setLogin(true)}}>Sign Up</span></div>
                </div>
                <div class="back"><SignUp /></div>
            </div>
        </div>
        <div class="card-wrapper flip-left">
            <div class="card">
                <div class="front"><LogIn /></div>
                <div class="back flex flex-col items-center">
                <Logo />
                <div className="text-lg">Already have account? <span className="cursor-pointer text-blue-800 hover:text-blue-500" onClick={() => {setLogin(false)}}>Log In</span></div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>);
}

function Logo() {
    
    return(<h1 className="text-black text-5xl flex group my-2">Book<span className="text-red-700 font-bold px-1 text-6xl -rotate-12 block relative bottom-1">2</span>read</h1>);
}