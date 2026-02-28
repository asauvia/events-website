import React from 'react'
import LogoMark from './LogoMark.jsx'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="py-10 px-6 relative z-10 border-t border-white/10 bg-[#050810]" id="contact">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-6 text-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="text-white/90 drop-shadow-[0_0_8px_rgba(92,228,248,0.3)] hover:scale-105 transition-transform cursor-pointer">
                        <LogoMark size={80} />
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-5">
                    <Link className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors" to="/events">Events</Link>
                    <Link className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors" to="/about">About</Link>
                    <Link className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors" to="/team">Team</Link>
                    <Link className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors" to="/contact">Contact</Link>
                    <a className="text-[13px] font-semibold text-[#5ce4f8]/70 hover:text-[#5ce4f8] transition-colors flex items-center gap-1" href="https://www.asauvia.com/" target="_blank" rel="noopener noreferrer">
                        Corporate Site <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                    </a>
                </div>
                <div className="text-white/30 text-[12px] font-medium tracking-[0.5px] mt-4">© {new Date().getFullYear()} • ASAUViA'26</div>
            </div>
        </footer>
    )
}
