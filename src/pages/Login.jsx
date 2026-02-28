import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    const [showPass, setShowPass] = useState(false)

    return (
        <div className="relative flex-1 min-h-[calc(100vh-64px)] overflow-hidden">
            <div className="fixed inset-0 pointer-events-none z-0" style={{
                backgroundImage: `
                  radial-gradient(1.5px 1.5px at 12% 22%, rgba(255, 255, 255, 0.30) 0%, transparent 100%),
                  radial-gradient(1px 1px at 65% 14%, rgba(255, 255, 255, 0.22) 0%, transparent 100%),
                  radial-gradient(1.5px 1.5px at 38% 68%, rgba(255, 255, 255, 0.18) 0%, transparent 100%),
                  radial-gradient(1px 1px at 82% 55%, rgba(255, 255, 255, 0.16) 0%, transparent 100%),
                  radial-gradient(1px 1px at 8% 55%, rgba(255, 255, 255, 0.14) 0%, transparent 100%),
                  radial-gradient(1px 1px at 55% 40%, rgba(255, 255, 255, 0.10) 0%, transparent 100%),
                  radial-gradient(1px 1px at 90% 28%, rgba(255, 255, 255, 0.12) 0%, transparent 100%),
                  radial-gradient(1px 1px at 28% 88%, rgba(255, 255, 255, 0.10) 0%, transparent 100%)
                `
            }} />
            <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(700px_400px_at_78%_12%,rgba(92,228,248,0.10)_0%,transparent_55%),radial-gradient(600px_400px_at_18%_78%,rgba(167,139,255,0.08)_0%,transparent_55%)]" />

            <main className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center p-6 sm:p-10 pt-28 sm:pt-32">
                <div className="flex flex-col md:flex-row w-full max-w-[960px] bg-white/[0.03] backdrop-blur-[20px] saturate-[180%] border border-white/5 rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] min-h-[560px]">

                    {/* Left: Login Form */}
                    <div className="flex-1 py-12 px-8 md:px-12 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2.5 py-[5px] px-[12px] rounded-full border border-[#5ce4f8]/20 bg-[#5ce4f8]/5 text-white/80 font-semibold text-[11px] tracking-[0.5px] w-fit mb-2">ASAUViA 2026</div>
                        <h1 className="text-[36px] font-black tracking-[-1px] mt-2.5 mb-0">Login</h1>
                        <p className="text-white/55 text-[14px] mt-2 mb-9">Step back into the experience.</p>

                        <div className="flex flex-col gap-4.5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/65 text-[12px] font-semibold tracking-[0.4px] uppercase">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="hello@example.com"
                                    className="w-full py-3.5 px-4 bg-black/25 border border-white/10 rounded-xl text-white/92 text-[15px] outline-none transition-all duration-200 focus:border-[#5ce4f8]/50 focus:bg-[#5ce4f8]/[0.04] focus:shadow-[0_0_0_3px_rgba(92,228,248,0.1)] placeholder:text-white/25"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5 mt-3">
                                <label className="text-white/65 text-[12px] font-semibold tracking-[0.4px] uppercase">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPass ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        className="w-full py-3.5 px-4 bg-black/25 border border-white/10 rounded-xl text-white/92 text-[15px] outline-none transition-all duration-200 focus:border-[#5ce4f8]/50 focus:bg-[#5ce4f8]/[0.04] focus:shadow-[0_0_0_3px_rgba(92,228,248,0.1)] placeholder:text-white/25"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-[15px] text-white/50 p-0"
                                        onClick={() => setShowPass(s => !s)}
                                    >
                                        {showPass ? '🙈' : '👁'}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-end -mt-2">
                                <a href="#forgot" className="text-[#5ce4f8] hover:text-white transition-colors text-[13px] font-medium decoration-transparent hover:decoration-white underline decoration-solid underline-offset-4">Forgot Password?</a>
                            </div>

                            <button className="w-full py-3.5 mt-2 rounded-xl font-bold text-[15px] transition-all duration-200 bg-white text-[#050810] hover:bg-white/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]">Log In</button>

                            <div className="flex items-center gap-3 my-2">
                                <span className="flex-1 h-px bg-white/10" />
                                <span className="text-white/40 text-[12px] font-semibold tracking-[0.5px]">OR</span>
                                <span className="flex-1 h-px bg-white/10" />
                            </div>

                            <button className="w-full py-3.5 rounded-xl font-bold text-[15px] transition-all duration-200 bg-white/5 text-white/95 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-3">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M17.64 9.2a10 10 0 0 0-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91A8.78 8.78 0 0 0 17.64 9.2z" fill="#4285F4" /><path d="M9 18a8.59 8.59 0 0 0 5.96-2.18l-2.91-2.26a5.43 5.43 0 0 1-8.09-2.85H.93v2.33A9 9 0 0 0 9 18z" fill="#34A853" /><path d="M3.96 10.71A5.41 5.41 0 0 1 3.68 9c0-.59.1-1.17.28-1.71V4.96H.93A9 9 0 0 0 0 9c0 1.45.35 2.82.93 4.04l3.03-2.33z" fill="#FBBC05" /><path d="M9 3.58a4.86 4.86 0 0 1 3.44 1.35L14.5 2.87A8.65 8.65 0 0 0 9 .99a9 9 0 0 0-8.07 4.97l3.03 2.33A5.37 5.37 0 0 1 9 3.58z" fill="#EA4335" /></svg>
                                Sign in with Google
                            </button>

                            <p className="text-center text-white/45 text-[13px] -mt-1">
                                Don't have an account? <Link to="/" className="text-[#5ce4f8] hover:text-white transition-colors text-[13px] font-medium decoration-transparent hover:decoration-white ml-1">Sign Up</Link>
                            </p>
                        </div>
                    </div>

                    {/* Right: Promo Panel */}
                    <div className="flex-[0_0_auto] md:flex-[0_0_360px] relative border-t md:border-t-0 md:border-l border-white/5">
                        <div className="relative h-full flex flex-col items-center justify-center text-center py-12 px-10 bg-gradient-to-br from-[#5ce4f8]/[.07] to-[#a78bff]/[.07] overflow-hidden">
                            <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_60%_40%,rgba(92,228,248,0.12)_0%,transparent_60%),radial-gradient(circle_at_40%_70%,rgba(167,139,255,0.10)_0%,transparent_60%)] pointer-events-none z-[1]" />
                            <div className="relative z-[2]">
                                <div className="inline-block py-1.5 px-3.5 rounded-full border border-[#5ce4f8]/25 bg-[#5ce4f8]/10 text-white/75 text-[11px] font-bold tracking-[1.5px] mb-5">ASAUViA 2026</div>
                                <h2 className="text-[34px] font-black tracking-[-1px] bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-4">Hello, Friend!</h2>
                                <p className="text-white/65 text-[14px] leading-[1.7] mb-9 max-w-[260px]">
                                    Enter your personal details and start your journey with us. Let's build the future together.
                                </p>
                                <Link to="/" className="inline-block px-9 py-3.5 rounded-full font-bold text-[14px] tracking-[1px] transition-all duration-200 bg-white/5 text-white/95 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20">
                                    SIGN UP
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}
