import React from 'react'
import LogoMark from './LogoMark.jsx'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="py-10 px-6 relative z-10 border-t border-white/10 bg-[#050810]" id="contact">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="text-white/50"><LogoMark size={28} /></div>
                    <div>
                        <div className="font-extrabold tracking-[2px] text-[15px] bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">ASAUViA</div>
                        <div className="text-white/40 text-[11px] font-semibold tracking-[3px] uppercase mt-1">ASAUViA</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <Link className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors" to="/">Home</Link>
                    <Link className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors" to="/events">Events</Link>
                    <Link className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors" to="/about">About</Link>
                </div>
                <div className="text-white/30 text-[12px] font-medium tracking-[0.5px] mt-4">© {new Date().getFullYear()} • ASAUViA'26</div>
            </div>
        </footer>
    )
}
