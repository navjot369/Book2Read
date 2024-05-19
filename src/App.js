import './App.css';
import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import NotLogged from './components/notLogged.js';
import {NavLink} from 'react-router-dom'
import MaterialUISwitch from './components/darkModeSwitch.js';
import clsx from 'clsx';
import Avatar from '@mui/material/Avatar';

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const toggleDarkTheme = () => {
    localStorage.setItem("bookMode", toggleDarkMode? "light": "dark");
    setToggleDarkMode(!toggleDarkMode);
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    if(localStorage.getItem("booksUser") != null) {
      setUser(localStorage.getItem("booksUser"));
    }
    let mode = localStorage.getItem("bookMode");
    if(mode != null) {
      if(mode === "light"){
        setToggleDarkMode(false);
      } else {
        setToggleDarkMode(true);
      }
    }else{
      localStorage.setItem("bookMode", "dark");
    }
  }, []);

  return (
    <div className={clsx("", {"dark" : toggleDarkMode})}>
    <div className="fixed flex justify-between w-full px-4 py-2  bg-slate-300 dark:bg-slate-700">
        <h1 className="text-black dark:text-white text-3xl flex group">Book<span className="text-red-700 font-bold px-1 text-4xl -rotate-12 block group-hover:rotate-12 duration-200 relative bottom-1">2</span>read</h1>
        <div className="flex gap-3 items-center font-bold text-black dark:text-white">
            <NavLink href="/explore">Explore</NavLink>
            <NavLink href="/Sell">Sell</NavLink>
            <NavLink href="/Shop">Shop</NavLink>
            <NavLink href="/Shop">Revenue</NavLink>
            <MaterialUISwitch checked={toggleDarkMode} onChange={toggleDarkTheme}/>
            {user !== "" && <div className="relative flex items-center gap-2 rounded-3xl bg-[#011E3C] dark:bg-slate-300 p-2">
              <Avatar sx={{ width: 30, height: 30 }}>{user[0]}</Avatar>
              <p className="text-slate-300 text-xl dark:text-[#011E3C]">{user}</p>
              </div>}
        </div>
    </div>
      <div className="bg-white dark:bg-slate-900 w-full h-full pt-12">
        {user === "" ?
        <NotLogged />:
        <Outlet />
      }
      </div>
      <div className="bg-white dark:bg-black h-14 w-full"></div>
    </div>
  );
}

export default App;

