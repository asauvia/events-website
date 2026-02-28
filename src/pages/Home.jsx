import React from 'react'
import { Link } from 'react-router-dom'

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:border-white/15 hover:-translate-y-0.5">
      <div className="font-extrabold text-[22px] tracking-[-0.5px] bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent">{value}</div>
      <div className="mt-1 text-white/45 font-medium text-[11px] tracking-[0.3px] uppercase">{label}</div>
    </div>
  )
}

function Chip({ children }) {
  return (
    <span className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.035] text-white/70 font-medium text-[12px] tracking-[0.2px] transition-all duration-200 hover:border-white/15 hover:bg-white/[0.065]">
      {children}
    </span>
  )
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex-1">
      {/* Background decoration layers */}
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

      <main className="relative z-10">
        <section className="pt-30 pb-10 px-6 max-sm:pt-16 max-sm:pb-8" id="top">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-center">

            {/* Hero Left */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2.5 py-[7px] px-[14px] rounded-full border border-[#5ce4f8]/20 bg-[#5ce4f8]/5 text-white/80 font-semibold text-[12px] tracking-[0.5px] w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5ce4f8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5ce4f8]"></span>
                </span>
                ASAUViA Fest
              </div>

              <h1 className="mt-5 text-[clamp(34px,8vw,68px)] font-black leading-none tracking-[-1.5px]">
                Innovate. Implement.
                <span className="bg-gradient-to-br from-[#5ce4f8] to-[#a78bff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(92,228,248,0.2)]"> Improve.</span>
              </h1>

              <div className="mt-5 flex flex-wrap gap-2" aria-label="Highlights">
                <Chip>Robotics</Chip>
                <Chip>AI • ML</Chip>
                <Chip>IoT</Chip>
                <Chip>Hackathons</Chip>
                <Chip>Workshops</Chip>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="px-5 py-2.5 rounded-full font-bold text-[13px] tracking-[0.5px] transition-all duration-200 bg-white text-[#050810] hover:bg-white/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]" href="#register">Get Tickets</a>
                <Link className="px-5 py-2.5 rounded-full font-bold text-[13px] tracking-[0.5px] transition-all duration-200 bg-white/5 text-white/95 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20" to="/events">View Events</Link>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                <Stat label="Events & Challenges" value="30+" />
                <Stat label="Speakers & Mentors" value="20+" />
                <Stat label="Prize Pool" value="₹10L+" />
              </div>
            </div>

            {/* Hero Right - Holo Card */}
            <div className="relative max-lg:max-w-[560px]" aria-hidden="true">
              <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden backdrop-blur-xl">
                <div className="flex items-center gap-2 py-3 px-4 border-b border-white/10 bg-white/[0.025]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5a5a]/85" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffc34b]/85" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5ce4f8]/85" />
                  <div className="ml-1.5 font-bold text-white/70 text-xs tracking-[0.5px]">Mission Control</div>
                </div>
                <div className="p-4 grid gap-3.5">
                  <div className="relative h-[220px] rounded-2xl border border-white/10 overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(92, 228, 248, 0.12) 0%, transparent 60%), rgba(0, 0, 0, 0.18)' }}>
                    <div className="absolute -inset-[20%] animate-[spin_3s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent 0%, transparent 75%, rgba(92, 228, 248, 0.18) 90%, transparent 100%)' }} />
                    <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                    {/* Blips */}
                    <div className="absolute w-2 h-2 rounded-full bg-[#5ce4f8] shadow-[0_0_16px_rgba(92,228,248,0.5)] animate-pulse left-[26%] top-[44%]" />
                    <div className="absolute w-2 h-2 rounded-full bg-[#5ce4f8] shadow-[0_0_16px_rgba(92,228,248,0.5)] animate-pulse left-[61%] top-[30%]" style={{ animationDelay: '0.6s' }} />
                    <div className="absolute w-2 h-2 rounded-full bg-[#5ce4f8] shadow-[0_0_16px_rgba(92,228,248,0.5)] animate-pulse left-[75%] top-[68%]" style={{ animationDelay: '1.1s' }} />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex justify-between items-center py-2.5 px-3.5 rounded-xl border border-white/10 bg-white/[0.035] transition-colors hover:border-white/15">
                      <div className="text-white/45 font-semibold text-xs">Location</div>
                      <div className="text-white/95 font-bold text-xs">Remote</div>
                    </div>
                    <div className="flex justify-between items-center py-2.5 px-3.5 rounded-xl border border-white/10 bg-white/[0.035] transition-colors hover:border-white/15">
                      <div className="text-white/45 font-semibold text-xs">Season</div>
                      <div className="text-white/95 font-bold text-xs">2026</div>
                    </div>
                    <div className="flex justify-between items-center py-2.5 px-3.5 rounded-xl border border-white/10 bg-white/[0.035] transition-colors hover:border-white/15">
                      <div className="text-white/45 font-semibold text-xs">Theme</div>
                      <div className="text-white/95 font-bold text-xs">Future-Forward</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3.5 border-t border-white/10 bg-white/[0.02]">
                  <div className="inline-flex gap-1 items-end h-[22px]">
                    <span className="w-[5px] rounded border border-[#5ce4f8]/50 bg-gradient-to-b from-[#5ce4f8] to-[#a78bff] opacity-85 animate-pulse h-[7px]" />
                    <span className="w-[5px] rounded border border-[#5ce4f8]/50 bg-gradient-to-b from-[#5ce4f8] to-[#a78bff] opacity-85 animate-pulse h-[11px]" style={{ animationDelay: '0.2s' }} />
                    <span className="w-[5px] rounded border border-[#5ce4f8]/50 bg-gradient-to-b from-[#5ce4f8] to-[#a78bff] opacity-85 animate-pulse h-[16px]" style={{ animationDelay: '0.4s' }} />
                    <span className="w-[5px] rounded border border-[#5ce4f8]/50 bg-gradient-to-b from-[#5ce4f8] to-[#a78bff] opacity-85 animate-pulse h-[22px]" style={{ animationDelay: '0.6s' }} />
                  </div>
                  <span className="text-white/40 text-[11px] font-semibold tracking-wide uppercase">Status: Online</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW GALLERY SECTION */}
        {/* <section className="py-14 px-6 border-t border-white/10" id="gallery">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.5px] mb-6">Event Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 1, title: 'RoboWars Championship', src: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&q=80&w=800&h=500' },
                { id: 2, title: 'Applied Hardware AI', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=500' },
                { id: 3, title: 'Keynote Speaker', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800&h=500' },
                { id: 4, title: 'IoT Prototyping', src: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800&h=500' },
                { id: 5, title: 'Pitch Deck Stage', src: 'https://images.unsplash.com/photo-1559136555-9ce7b5fda016?auto=format&fit=crop&q=80&w=800&h=500' },
                { id: 6, title: 'Winner Ceremony', src: 'https://images.unsplash.com/photo-1523580494112-071fd62b2fc3?auto=format&fit=crop&q=80&w=800&h=500' }
              ].map(img => (
                <div key={img.id} className="group relative overflow-hidden rounded-2xl aspect-[16/10] bg-white/5 border border-white/10 cursor-pointer">
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/90 via-[#050810]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-white/95 font-bold tracking-wide text-sm">{img.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-14 px-6" id="about">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.5px] mb-5">About ASAUViA</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <div className="font-bold text-[15px] tracking-[-0.2px]">Competitions</div>
                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Build, battle, and benchmark — from robotics to code.</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <div className="font-bold text-[15px] tracking-[-0.2px]">Workshops</div>
                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Hands‑on sessions led by industry mentors & experts.</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
                <div className="font-bold text-[15px] tracking-[-0.2px]">Talks</div>
                <div className="mt-2 text-white/70 leading-[1.6] text-[13px]">Keynotes, panels, and founder stories that inspire.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-6" id="tracks">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.5px] mb-5">Tracks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col items-start gap-4">
                <div className="flex items-center justify-between gap-3 w-full">
                  <span className="py-1 px-3 rounded-full border border-white/10 bg-white/[0.035] text-white/70 font-semibold text-[11px] tracking-[0.5px] uppercase">Flagship</span>
                  <div className="font-extrabold tracking-[-0.3px] text-[17px]">RoboWars</div>
                </div>
                <a className="text-[#5ce4f8] hover:text-white transition-colors text-[14px] font-semibold" href="#events">Details →</a>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col items-start gap-4">
                <div className="flex items-center justify-between gap-3 w-full">
                  <span className="py-1 px-3 rounded-full border border-white/10 bg-white/[0.035] text-white/70 font-semibold text-[11px] tracking-[0.5px] uppercase">Build</span>
                  <div className="font-extrabold tracking-[-0.3px] text-[17px]">Hackathons</div>
                </div>
                <a className="text-[#5ce4f8] hover:text-white transition-colors text-[14px] font-semibold" href="#events">Details →</a>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col items-start gap-4">
                <div className="flex items-center justify-between gap-3 w-full">
                  <span className="py-1 px-3 rounded-full border border-white/10 bg-white/[0.035] text-white/70 font-semibold text-[11px] tracking-[0.5px] uppercase">Learn</span>
                  <div className="font-extrabold tracking-[-0.3px] text-[17px]">AI • ML</div>
                </div>
                <a className="text-[#5ce4f8] hover:text-white transition-colors text-[14px] font-semibold" href="#events">Details →</a>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.035] border border-white/10 backdrop-blur-md transition-all duration-200 hover:bg-white/[0.065] hover:border-white/15 hover:-translate-y-1 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex flex-col items-start gap-4">
                <div className="flex items-center justify-between gap-3 w-full">
                  <span className="py-1 px-3 rounded-full border border-white/10 bg-white/[0.035] text-white/70 font-semibold text-[11px] tracking-[0.5px] uppercase">Hardware</span>
                  <div className="font-extrabold tracking-[-0.3px] text-[17px]">IoT</div>
                </div>
                <a className="text-[#5ce4f8] hover:text-white transition-colors text-[14px] font-semibold" href="#events">Details →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-6" id="schedule">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.5px] mb-5">Schedule Snapshot</h2>
            <div className="grid gap-2.5">
              <div className="flex gap-3.5 items-start p-4 rounded-2xl bg-white/[0.035] border border-white/10 transition-colors hover:border-white/15">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5ce4f8] mt-1 shrink-0 shadow-[0_0_0_6px_rgba(92,228,248,0.1)]" />
                <div>
                  <div className="font-bold text-[14px]">Day 1</div>
                  <div className="mt-1 text-white/70 text-[13px]">Opening • Keynote • Registrations</div>
                </div>
              </div>
              <div className="flex gap-3.5 items-start p-4 rounded-2xl bg-white/[0.035] border border-white/10 transition-colors hover:border-white/15">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5ce4f8] mt-1 shrink-0 shadow-[0_0_0_6px_rgba(92,228,248,0.1)]" />
                <div>
                  <div className="font-bold text-[14px]">Day 2</div>
                  <div className="mt-1 text-white/70 text-[13px]">Workshops • Hackathons • Expo</div>
                </div>
              </div>
              <div className="flex gap-3.5 items-start p-4 rounded-2xl bg-white/[0.035] border border-white/10 transition-colors hover:border-white/15">
                <div className="w-2.5 h-2.5 rounded-full bg-[#5ce4f8] mt-1 shrink-0 shadow-[0_0_0_6px_rgba(92,228,248,0.1)]" />
                <div>
                  <div className="font-bold text-[14px]">Day 3</div>
                  <div className="mt-1 text-white/70 text-[13px]">Finals • Awards • Closing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 px-6" id="register">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-[32px] border border-[#5ce4f8]/20 bg-gradient-to-br from-[#5ce4f8]/[.07] to-[#a78bff]/[.07] shadow-[0_12px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] p-8 flex justify-between items-center gap-5 flex-wrap backdrop-blur-xl">
              <div>
                <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold tracking-[-0.5px]">Ready to launch?</h2>
                <p className="text-white/70 leading-[1.7] text-[16px] max-w-[70ch] mt-2">
                  Wire this template into your real data (events, teams, sponsors) and you’re set.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link to="/contact" className="px-5 py-2.5 rounded-full font-bold text-[13px] tracking-[0.5px] transition-all bg-white text-[#050810] hover:bg-white/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]">
                  Contact Team                                            </Link>
                {/* <a className="px-5 py-2.5 rounded-full font-bold text-[13px] tracking-[0.5px] transition-all bg-white text-[#050810] hover:bg-white/90 shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]" href="/contact">Contact Team</a> */}
                <a className="px-5 py-2.5 rounded-full font-bold text-[13px] tracking-[0.5px] transition-all  bg-white/5 text-white/95 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20" href="#top">Back to top</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
