import React from 'react'
import LogoMark from './LogoMark.jsx'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="sticky top-0 z-[100] backdrop-blur-[20px] saturate-[180%] bg-[#050810]/65 border-b border-white/10 transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center gap-4">
                <div className="flex items-center gap-2.5 min-w-[150px] no-underline max-sm:min-w-0">
                    <span className="w-[34px] h-[34px] grid place-items-center text-accent-cyan drop-shadow-[0_0_8px_rgba(92,228,248,0.4)]">
                        <LogoMark size={34} />
                    </span>
                    <span className="font-extrabold tracking-[3px] text-[13px] bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent">
                        ASAUViA
                    </span>
                </div>

                <nav className="flex-1 flex justify-center gap-1 max-md:hidden" aria-label="Primary">
                    <Link to="/" className="text-white/70 font-medium text-[14px] py-2 px-4 rounded-full transition-all duration-200 hover:bg-white/5 hover:text-white/95">Home</Link>
                    <Link to="/events" className="text-white/70 font-medium text-[14px] py-2 px-4 rounded-full transition-all duration-200 hover:bg-white/5 hover:text-white/95">Events</Link>
                    <Link to="/about" className="text-white/70 font-medium text-[14px] py-2 px-4 rounded-full transition-all duration-200 hover:bg-white/5 hover:text-white/95">About</Link>
                </nav>

                <div className="flex items-center gap-2.5">
                    <Link className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.5px] transition-all duration-200 bg-white/5 text-white/95 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20" to="/events">Explore</Link>
                    <Link className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-[13px] tracking-[0.5px] transition-all duration-200 bg-white text-[#050810] hover:bg-white/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]" to="/login">Login</Link>
                </div>
            </div>
        </header>
    )
}
