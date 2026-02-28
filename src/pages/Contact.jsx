import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex-1 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(700px_400px_at_80%_20%,rgba(167,139,255,0.12)_0%,transparent_60%),radial-gradient(600px_500px_at_20%_80%,rgba(92,228,248,0.10)_0%,transparent_60%)]" />

            <main className="relative z-10 flex items-center justify-center p-6 pt-28 sm:p-10 sm:pt-32 min-h-[calc(100vh-64px)]">
                <div className="w-full max-w-[1000px] bg-white/[0.03] backdrop-blur-[20px] saturate-[180%] border border-white/10 rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] flex flex-col md:flex-row">

                    {/* Left: Contact Info */}
                    <div className="flex-1 p-10 md:p-14 bg-gradient-to-br from-white/[0.05] to-transparent border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
                        <div className="absolute -inset-[50%] bg-[radial-gradient(circle_at_30%_50%,rgba(92,228,248,0.15)_0%,transparent_50%)] pointer-events-none" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="inline-block py-1 px-3 rounded-full border border-[#a78bff]/30 bg-[#a78bff]/10 text-white/80 font-semibold text-[11px] tracking-[1px] uppercase mb-4">Connect</div>
                                <h1 className="text-[38px] font-black tracking-[-1px] mb-3 leading-[1.1]">Let's build<br />something great.</h1>
                                <p className="text-white/60 text-[15px] leading-[1.6] max-w-[280px]">
                                    Whether you need scalable architecture, AI integration, or full-stack engineering, our team is ready to execute.
                                </p>
                            </div>

                            <div className="mt-12 space-y-6">
                                <div>
                                    <div className="text-white/40 text-[11px] font-bold tracking-[1px] uppercase mb-1.5">Direct Email</div>
                                    <a href="mailto:info@asauvia.com" className="text-[18px] font-semibold text-white/95 hover:text-[#5ce4f8] transition-colors decoration-transparent hover:underline underline-offset-4 decoration-[#5ce4f8]/50">
                                        info@asauvia.com
                                    </a>
                                </div>
                                <div>
                                    <div className="text-white/40 text-[11px] font-bold tracking-[1px] uppercase mb-1.5">Corporate</div>
                                    <a href="https://www.asauvia.com" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5 group">
                                        Visit asauvia.com
                                        <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="flex-[0_0_auto] md:flex-[0_0_55%] p-10 md:p-14 flex flex-col justify-center">
                        <form className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/60 text-[12px] font-semibold tracking-[0.5px] uppercase">First Name</label>
                                    <input type="text" placeholder="John" className="w-full py-3 px-4 bg-black/20 border border-white/10 rounded-xl text-white/95 text-[15px] outline-none transition-all duration-200 focus:border-[#5ce4f8]/50 focus:bg-white/[0.04] focus:shadow-[0_0_0_3px_rgba(92,228,248,0.1)] placeholder:text-white/20" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white/60 text-[12px] font-semibold tracking-[0.5px] uppercase">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full py-3 px-4 bg-black/20 border border-white/10 rounded-xl text-white/95 text-[15px] outline-none transition-all duration-200 focus:border-[#5ce4f8]/50 focus:bg-white/[0.04] focus:shadow-[0_0_0_3px_rgba(92,228,248,0.1)] placeholder:text-white/20" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-white/60 text-[12px] font-semibold tracking-[0.5px] uppercase">Email Address</label>
                                <input type="email" placeholder="john@company.com" className="w-full py-3 px-4 bg-black/20 border border-white/10 rounded-xl text-white/95 text-[15px] outline-none transition-all duration-200 focus:border-[#5ce4f8]/50 focus:bg-white/[0.04] focus:shadow-[0_0_0_3px_rgba(92,228,248,0.1)] placeholder:text-white/20" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-white/60 text-[12px] font-semibold tracking-[0.5px] uppercase">Project Details</label>
                                <textarea rows="4" placeholder="Tell us about what you're building..." className="w-full py-3 px-4 bg-black/20 border border-white/10 rounded-xl text-white/95 text-[15px] outline-none transition-all duration-200 focus:border-[#5ce4f8]/50 focus:bg-white/[0.04] focus:shadow-[0_0_0_3px_rgba(92,228,248,0.1)] placeholder:text-white/20 resize-none"></textarea>
                            </div>

                            <button type="button" className="mt-2 w-full py-3.5 rounded-xl font-bold text-[15px] tracking-[0.5px] bg-gradient-to-r from-[#5ce4f8] to-[#a78bff] text-[#050810] hover:opacity-90 transition-opacity shadow-[0_4px_14px_rgba(92,228,248,0.3)]">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                </div>
            </main>
        </div>
    )
}
