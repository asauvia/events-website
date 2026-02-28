import React, { useState } from 'react'
import LogoMark from './LogoMark.jsx'
import { Link } from 'react-router-dom'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 md:px-6 pointer-events-none">
            <div className="w-full max-w-[1000px] backdrop-blur-2xl saturate-150 bg-[#050810]/75 border border-white/10 rounded-[28px] flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-auto transition-all duration-500 hover:border-white/20">
                <div className="flex items-center gap-2.5 min-w-[120px] max-sm:min-w-0">
                    <Link to="/" className="flex items-center text-accent-cyan drop-shadow-[0_0_12px_rgba(92,228,248,0.5)] hover:scale-105 transition-transform">
                        <LogoMark size={60} />
                    </Link>
                </div>

                <div className="md:hidden flex">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 -mr-2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full border border-transparent hover:border-white/10">
                        {menuOpen ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        )}
                    </button>
                </div>

                {menuOpen && (
                    <div className="absolute top-[calc(100%+12px)] left-0 right-0 p-5 bg-[#050810]/95 backdrop-blur-[30px] border border-white/10 rounded-[24px] flex flex-col gap-2 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-40 md:hidden animate-[slideDown_0.3s_ease-out]">
                        <Link className="text-[14px] font-bold tracking-[0.5px] text-white/50 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link className="text-[14px] font-bold tracking-[0.5px] text-white/50 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all" to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
                        <Link className="text-[14px] font-bold tracking-[0.5px] text-white/50 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link className="text-[14px] font-bold tracking-[0.5px] text-white/50 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all" to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
                        <Link className="text-[14px] font-bold tracking-[0.5px] text-white/50 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                )}

                <nav className="hidden md:flex flex-1 justify-center gap-2 items-center" aria-label="Primary">
                    {['Home', 'Events', 'About', 'Team', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="relative px-4 py-2 font-semibold text-[13px] tracking-[0.5px] text-white/60 hover:text-white transition-colors duration-300 rounded-full group overflow-hidden"
                        >
                            <span className="relative z-10">{item}</span>
                            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full scale-75 group-hover:scale-100"></span>
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <Link className="px-5 py-2 rounded-full font-bold text-[13px] tracking-[0.5px] transition-all duration-300 bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30 backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" to="/events">
                        Explore
                    </Link>
                    <Link className="px-5 py-2 rounded-full font-bold text-[13px] tracking-[0.5px] transition-all duration-300 bg-gradient-to-r from-white to-white/90 text-[#050810] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]" to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </header>
    )
}
