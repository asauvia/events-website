import React from 'react'

function EventCard({ tag, title, desc, date, status }) {
    return (
        <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative">
            <div className="flex items-center justify-between gap-3">
                <span className="py-1 px-3 rounded-full border bg-white/[0.035] text-white/70 font-semibold text-[11px] tracking-[0.5px] uppercase" style={{
                    borderColor: status === 'Live' ? 'rgba(126,255,180,0.5)' : 'rgba(255,255,255,0.1)'
                }}>{tag}</span>
                <div className="font-extrabold tracking-[-0.3px] text-[17px]">{title}</div>
            </div>

            <div className="mt-4 flex justify-between items-center">
                <span className="text-[12px] text-white/50">{date}</span>

                {status === 'Live' ? (
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7efbb4] animate-pulse shadow-[0_0_8px_rgba(126,255,180,0.6)]" />
                        <span className="text-[12px] font-bold text-[#7efbb4]">LIVE NOW</span>
                    </div>
                ) : (
                    <a className="px-3 py-1.5 rounded-full font-bold text-[12px] tracking-[0.5px] transition-all duration-200 bg-white text-[#050810] hover:bg-white/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]" href="#register">Track Event</a>
                )}
            </div>
        </div>
    )
}

export default function Events() {
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

            <main className="relative z-10 pt-[60px]">
                <section className="py-14 px-6 border-t border-white/10 border-t-transparent">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="inline-flex items-center gap-2.5 py-[7px] px-[14px] rounded-full border border-[#5ce4f8]/20 bg-[#5ce4f8]/5 text-white/80 font-semibold text-[12px] tracking-[0.5px] w-fit mb-4">Upcoming Tracking</div>
                        <h1 className="text-[clamp(34px,8vw,68px)] font-black leading-none tracking-[-1.5px] mt-0 mb-10">
                            Event <span className="bg-gradient-to-br from-[#5ce4f8] to-[#a78bff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(92,228,248,0.2)]">Dashboard</span>
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <EventCard
                                tag="Flagship"
                                title="RoboWars Championship"
                                date="Day 2 • 14:00 IST"
                                status="Upcoming"
                            />
                            <EventCard
                                tag="Hackathon"
                                title="AI Innovation Hack"
                                date="Day 1 • 09:00 IST"
                                status="Live"
                            />
                            <EventCard
                                tag="Workshop"
                                title="Applied LLMs in Prod"
                                date="Day 1 • 16:00 IST"
                                status="Upcoming"
                            />
                            <EventCard
                                tag="Hardware"
                                title="IoT Edge Computing"
                                date="Day 3 • 10:00 IST"
                                status="Upcoming"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
