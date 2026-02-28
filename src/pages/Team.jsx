import React from 'react'
import { Link } from 'react-router-dom'

const teamData = [
    {
        category: "EXECUTIVE",
        members: [
            { name: "Rahul Sharma", role: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
            { name: "Anjali Desai", role: "Chief Technology Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    {
        category: "AI & DATA",
        members: [
            { name: "Vikram Singh", role: "Lead Data Scientist", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" },
            { name: "Priya Patel", role: "AI Engineer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
            { name: "Rohan Gupta", role: "ML Researcher", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" },
            { name: "Karan Verma", role: "Data Engineer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" }
        ]
    },
    {
        category: "ENGINEERING",
        members: [
            { name: "Amit Kumar", role: "Systems Architect", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" },
            { name: "Neha Sharma", role: "Frontend Lead", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
            { name: "Karthik Reddy", role: "Backend Engineer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" }
        ]
    }
];

function TeamCard({ name, role, image }) {
    return (
        <div className="flex flex-col items-center group w-full max-w-[300px] mx-auto">
            {/* Sci-fi Industrial Frame */}
            <div
                className="relative w-full aspect-[3/4] p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-white/20 transition-all duration-300 group-hover:from-[#5ce4f8]/50 group-hover:to-[#a78bff]/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_40px_rgba(92,228,248,0.2)]"
                style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}
            >
                {/* Inner Image Container */}
                <div
                    className="relative w-full h-full bg-[#050810] overflow-hidden"
                    style={{ clipPath: 'polygon(29px 0, 100% 0, 100% calc(100% - 29px), calc(100% - 29px) 100%, 0 100%, 0 29px)' }}
                >
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover opacity-60 grayscale-[80%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    />

                    {/* Glassy overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent opacity-80" />

                    {/* Vertical etched text */}
                    <div className="absolute top-4 left-3 text-[10px] font-mono text-white/40 tracking-[3px] uppercase rotate-90 origin-top-left translate-x-[10px] font-bold">
                        ASAUViA '26
                    </div>

                    {/* Top right barcode decoration */}
                    <div className="absolute top-3 right-3 flex gap-[2px] opacity-40">
                        <div className="w-[1.5px] h-3 bg-white"></div>
                        <div className="w-[3px] h-3 bg-white"></div>
                        <div className="w-[1px] h-3 bg-white"></div>
                        <div className="w-[2px] h-3 bg-white"></div>
                        <div className="w-[1.5px] h-3 bg-white"></div>
                    </div>

                    {/* Bottom right social dots */}
                    <div className="absolute bottom-4 right-4 flex gap-1.5">
                        <a href="#" className="w-2 h-2 justify-center items-center flex rounded-full bg-white/30 hover:bg-[#5ce4f8] transition-colors" aria-label="LinkedIn"></a>
                        <a href="#" className="w-2 h-2 justify-center items-center flex rounded-full bg-white/30 hover:bg-[#5ce4f8] transition-colors" aria-label="Twitter"></a>
                    </div>

                    {/* Mechanical corner accent */}
                    <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#5ce4f8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-0 right-0 w-[2px] h-8 bg-[#a78bff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            <div className="mt-5 text-center flex flex-col items-center">
                <h3 className="text-[18px] sm:text-[22px] font-black tracking-[1.5px] text-white uppercase group-hover:text-[#5ce4f8] transition-colors duration-300 leading-none">{name}</h3>
                <p className="text-[11px] sm:text-[13px] font-mono text-[#a78bff] tracking-[2px] uppercase mt-2 font-semibold">[{role}]</p>

                {/* Decorative line below name */}
                <div className="w-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent mt-3 group-hover:w-full transition-all duration-500" />
            </div>
        </div>
    )
}

export default function Team() {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex-1 bg-[#050810] overflow-hidden">
            {/* Matrix/Data Stream style background matching Prometeo vibe */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 11px)'
            }} />

            {/* Sci-fi dramatic lighting */}
            <div className="fixed inset-0 pointer-events-none z-0" style={{
                background: `
                  radial-gradient(800px 500px at 50% -10%, rgba(92, 228, 248, 0.15) 0%, transparent 70%),
                  radial-gradient(600px 400px at 50% 110%, rgba(167, 139, 255, 0.15) 0%, transparent 70%)
                `
            }} />

            <main className="relative z-10 pt-20 pb-32 px-6">
                <div className="max-w-[1200px] mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-24 relative">
                        {/* Background Text Layer for depth */}
                        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(60px,15vw,180px)] font-black text-white/[0.02] tracking-widest uppercase pointer-events-none whitespace-nowrap select-none">
                            ASAUViA
                        </div> */}

                        <h1 className="relative pt-10 inline-block text-[clamp(40px,8vw,80px)] font-black leading-none tracking-[4px] sm:tracking-[8px] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            TEAM ASAUViA
                        </h1>
                        <div className="mt-6 flex justify-center items-center gap-4">
                            <div className="w-12 h-[1px] bg-white/20" />
                            <div className="text-[#5ce4f8] font-mono text-[12px] tracking-[4px] uppercase font-bold">The Collective</div>
                            <div className="w-12 h-[1px] bg-white/20" />
                        </div>
                    </div>

                    {/* Categories and Grid */}
                    <div className="flex flex-col gap-24 sm:gap-32">
                        {teamData.map((section, idx) => (
                            <section key={idx} className="flex flex-col items-center">
                                {/* Sci-fi Section Title */}
                                <div className="mb-16 flex flex-col items-center relative">
                                    <h2 className="text-[clamp(24px,4vw,40px)] font-black tracking-[6px] sm:tracking-[12px] uppercase text-white/90 text-center">
                                        {section.category}
                                    </h2>
                                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#5ce4f8]/50 to-transparent" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 w-full justify-items-center">
                                    {section.members.map((member, mIdx) => (
                                        <TeamCard
                                            key={mIdx}
                                            name={member.name}
                                            role={member.role}
                                            image={member.image}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Pre-footer CTA */}
                    <div className="mt-32 p-[1px] rounded-[10px] bg-gradient-to-r from-white/10 via-white/30 to-white/10 relative overflow-hidden group max-w-[800px] mx-auto">
                        <div className="absolute inset-0 bg-[#050810] opacity-90 group-hover:opacity-80 transition-opacity" />
                        <div className="relative p-10 sm:p-14 text-center">
                            <h2 className="text-[24px] sm:text-[32px] font-black tracking-[2px] uppercase mb-4">Join the Arsenal</h2>
                            <p className="text-white/50 text-[14px] font-mono tracking-[1px] max-w-[500px] mx-auto mb-8 uppercase">
                                We are continually seeking elite operators to join our ranks.
                            </p>
                            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#050810] font-black text-[13px] tracking-[3px] uppercase hover:bg-[#5ce4f8] transition-colors duration-300">
                                INITIALIZE CONTACT
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
