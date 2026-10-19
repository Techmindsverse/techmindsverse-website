"use client";
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle(){
 const [theme,setTheme]=useState<'light'|'dark'>('light');
 useEffect(()=>{const saved=localStorage.getItem('tmv-theme'); const next=saved==='dark'||saved==='light'?saved:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');setTheme(next);document.documentElement.dataset.theme=next;},[]);
 function toggle(){const next=theme==='light'?'dark':'light';setTheme(next);document.documentElement.dataset.theme=next;localStorage.setItem('tmv-theme',next)}
 return <button className="icon-button" onClick={toggle} aria-label={`Switch to ${theme==='light'?'dark':'light'} mode`}>{theme==='light'?<Moon size={19}/>:<Sun size={19}/>}</button>;
}
