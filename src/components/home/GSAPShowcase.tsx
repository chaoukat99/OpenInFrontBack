import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Brain, Network, Cpu, Zap, Activity, Sparkles, Code2, Database, Lock, Fingerprint } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionGlow } from "@/components/ui/SectionGlow";

export const GSAPShowcase = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const techStack = [
        { name: "TensorFlow", icon: Brain, color: "text-orange-500" },
        { name: "Node.js", icon: Code2, color: "text-green-500" },
        { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
        { name: "CyberSec", icon: Lock, color: "text-red-500" },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });

        tl.from(".tech-card", {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.7)",
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden bg-background">
            {/* Animated Background Lines */}
            <div className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container relative z-10 px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Content Text */}
                    <motion.div
                        style={{ y: yMove }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-primary tracking-widest uppercase">
                                {t('gsap_showcase.badge')}
                            </span>
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-black tracking-tight leading-[0.9] text-foreground">
                            {t('gsap_showcase.title_part1')} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                                {t('gsap_showcase.title_highlight')}
                            </span>
                            <br />
                            {t('gsap_showcase.title_part2')}
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg font-light">
                            {t('gsap_showcase.description')}
                        </p>

                        {/* Feature Stack Mini-Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
                                <Brain className="w-5 h-5 text-orange-500" />
                                <span className="text-sm font-bold text-foreground/80">{t('gsap_showcase.stack.sourcing')}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
                                <Zap className="w-5 h-5 text-green-500" />
                                <span className="text-sm font-bold text-foreground/80">{t('gsap_showcase.stack.matching')}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
                                <Activity className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-bold text-foreground/80">{t('gsap_showcase.stack.analytics')}</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
                                <Lock className="w-5 h-5 text-red-500" />
                                <span className="text-sm font-bold text-foreground/80">{t('gsap_showcase.stack.compliance')}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Visual Showcase */}
                    <div className="lg:w-1/2 relative h-[600px] w-full flex items-center justify-center perspective-1000">
                        {/* Hexagonal Core System */}
                        <motion.div
                            style={{ rotateX: rotate, rotateY: rotate }}
                            className="relative w-[500px] h-[500px] flex items-center justify-center transform-3d"
                        >
                            {/* Ambient Glow */}
                            <div className="absolute w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full opacity-50 pointer-events-none" />

                            {/* Connecting Lines (SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="currentColor" className="text-primary/20" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="currentColor" className="text-primary/20" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="currentColor" className="text-primary/20" strokeWidth="2" strokeDasharray="4 4" />

                                <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" className="text-primary/5" strokeWidth="1" />
                            </svg>

                            {/* Center Core Hexagon */}
                            <div className="relative z-20 w-48 h-52 group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-xl clip-hex transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/30" />
                                <div className="absolute inset-[2px] bg-background clip-hex flex items-center justify-center">
                                    <div className="text-center space-y-2">
                                        <Activity className="w-12 h-12 text-primary mx-auto animate-pulse" />
                                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">
                                            {t('gsap_showcase.visual.core_logic')}
                                        </div>
                                    </div>
                                </div>
                                {/* Decorative borders */}
                                <div className="absolute inset-0 border-2 border-primary/50 clip-hex pointer-events-none" />
                            </div>

                            {/* Satellite Nodes */}
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-4 tech-card">
                                <HexNode icon={Fingerprint} label={t('gsap_showcase.visual.security')} color="text-emerald-400" />
                            </div>
                            <div className="absolute bottom-20 left-10 tech-card">
                                <HexNode icon={Database} label={t('gsap_showcase.visual.data')} color="text-blue-400" />
                            </div>
                            <div className="absolute bottom-20 right-10 tech-card">
                                <HexNode icon={Network} label={t('gsap_showcase.visual.neural')} color="text-purple-400" />
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .clip-hex {
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-3d {
                    transform-style: preserve-3d;
                }
            `}} />
            <SectionDivider fill="fill-black" />
        </section>
    );
};

const HexNode = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
    <div className="w-28 h-32 relative group cursor-default transition-transform hover:-translate-y-2 duration-300">
        <div className="absolute inset-0 bg-secondary/80 backdrop-blur-md clip-hex border border-white/10 shadow-xl transition-colors group-hover:bg-primary/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-2">
            <Icon className={`w-8 h-8 ${color} mb-2 drop-shadow-lg`} />
            <span className="text-[10px] font-bold text-foreground/70 tracking-wider text-center">{label}</span>
        </div>
    </div>
);
