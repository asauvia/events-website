import React from 'react'
export default function About() {
    return (
        <div className="relative min-h-screen flex-1">
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
            <div className="fixed inset-0 pointer-events-none z-0" style={{
                background: `
                  radial-gradient(700px 400px at 78% 12%, rgba(92, 228, 248, 0.10) 0%, transparent 55%),
                  radial-gradient(600px 400px at 18% 78%, rgba(167, 139, 255, 0.08) 0%, transparent 55%)
                `
            }} />

            <main className="relative z-10 pt-[100px]">
                <section className="py-14 px-6 border-t border-white/10" id="about-page">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="inline-flex items-center gap-2.5 py-[7px] px-[14px] rounded-full border border-[#5ce4f8]/20 bg-[#5ce4f8]/5 text-white/80 font-semibold text-[12px] tracking-[0.5px] w-fit mb-4">Intelligent Automation</div>
                        <h1 className="text-[clamp(34px,8vw,68px)] font-black leading-none tracking-[-1.5px] mt-0">
                            Transforming Business Through <span className="bg-gradient-to-br from-[#5ce4f8] to-[#a78bff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(92,228,248,0.2)]">Intelligent Automation</span>
                        </h1>
                        <p className="text-white/70 leading-[1.7] text-[18px] max-w-[800px] mb-8 mt-6">
                            We handle the complexities of modern software engineering, from LLM integration to full-stack ecosystems, so you can focus on scaling your vision.
                        </p>

                        <div className="mb-14">
                            <a href="https://www.asauvia.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-[14px] tracking-[0.5px] bg-[#5ce4f8]/10 border border-[#5ce4f8]/30 text-[#5ce4f8] hover:bg-[#5ce4f8]/20 transition-colors">
                                Visit Official Asauvia Site <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                            </a>
                        </div>

                        <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.5px] mb-5 mt-10">Core Capabilities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                                <div className="font-bold text-[15px] tracking-[-0.2px] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5ce4f8]" />
                                    Web Architecture
                                </div>
                                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">End-to-end web architecture using robust design systems and scalable frameworks for high-load environments.</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                                <div className="font-bold text-[15px] tracking-[-0.2px] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#a78bff]" />
                                    Embedded AI
                                </div>
                                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Embedding predictive models and LLMs directly into proprietary business logic for real-time decision making.</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                                <div className="font-bold text-[15px] tracking-[-0.2px] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7efbb4]" />
                                    Cloud Orchestration
                                </div>
                                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Automated CI/CD pipelines and cloud orchestration ensuring 100% reliability and global distribution.</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                                <div className="font-bold text-[15px] tracking-[-0.2px] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#5ce4f8]" />
                                    Data Engineering
                                </div>
                                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Systemizing unstructured data into actionable insights through sophisticated engineering layers.</div>
                            </div>
                        </div>

                        <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.5px] mb-5">Company Values</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                                <div className="font-bold text-[15px] tracking-[-0.2px] text-[rgba(102,230,255,0.9)]">Enterprise-Trustworthy</div>
                                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Security-first approaches and rigorous testing protocols (SOC2 Type II).</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                                <div className="font-bold text-[15px] tracking-[-0.2px] text-[rgba(169,139,255,0.9)]">Performance-First</div>
                                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Optimized for LCP, CLS, and TTFB.</div>
                            </div>
                            <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                                <div className="font-bold text-[15px] tracking-[-0.2px] text-[rgba(126,255,180,0.9)]">Systemized Scaling</div>
                                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Solutions that function as design system foundations.</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
