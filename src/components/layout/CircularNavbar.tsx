import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
    Building2,
    Users,
    Sparkles,
    FileText,
    Briefcase,
    LogIn,
    UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "@/components/ui/Logo";

const circularNavItems = [
    {
        href: "/company-solutions",
        tKey: "navbar.company",
        icon: Building2,
        color: "from-[#FACC15] via-[#EAB308] to-[#CA8A04]",
        shadowColor: "shadow-yellow-500/30"
    },
    {
        href: "/consultant-opportunities",
        tKey: "navbar.talents",
        icon: Users,
        color: "from-[#22C55E] via-[#16A34A] to-[#15803D]",
        shadowColor: "shadow-green-500/30"
    },
    {
        href: "/cabinet-conseil",
        tKey: "Cabinet\nde Conseil",
        icon: Briefcase,
        color: "from-[#14B8A6] via-[#0D9488] to-[#0F766E]",
        shadowColor: "shadow-teal-500/30"
    },
    {
        href: "/Ghaya-agence-ai",
        tKey: "GHAYA\nAgence Ai",
        icon: Sparkles,
        color: "from-[#EC4899] via-[#D946EF] to-[#A855F7]",
        shadowColor: "shadow-pink-500/30"
    },
    {
        href: "/resources",
        tKey: "navbar.ressource",
        icon: FileText,
        color: "from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9]",
        shadowColor: "shadow-purple-500/30"
    },
];

export function CircularNavbar() {
    const location = useLocation();
    const { t } = useLanguage();
    const isVisible = true;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.header
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
                >
                    {/* ── Centered circular navbar pill ── */}
                    <div className="mx-auto mt-2 max-w-fit px-2 sm:px-4 pointer-events-auto flex items-center justify-center">
                        <nav className="relative">
                            <div
                                className="backdrop-blur-3xl border border-white/10 rounded-full p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.9)] flex items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-hide max-w-[98vw] ring-1 ring-white/5"
                                style={{ background: "radial-gradient(circle at 50% 30%, #354759 0%, #192432 100%)" }}
                            >
                                {/* Logo */}
                                <Link to="/" className="flex-shrink-0 self-center origin-center ml-4 pl-3 pr-2 mr-6 scale-[2]">
                                    <Logo size="sm" />
                                </Link>

                                {/* Navigation Items */}
                                <div className="flex items-center gap-1 sm:gap-2.5">
                                    {circularNavItems.map((item, index) => {
                                        const isActive = location.pathname === item.href;
                                        return (
                                            <div key={item.href} className="flex items-center">
                                                <Link to={item.href} id={`nav-${item.tKey}`}>
                                                    <motion.div
                                                        className="relative group"
                                                        whileHover={{ y: -4, scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                                    >
                                                        {/* Active Glow Backdrop */}
                                                        {isActive && (
                                                            <motion.div
                                                                layoutId="nav-glow"
                                                                className={cn(
                                                                    "absolute inset-[-3px] rounded-full blur-lg opacity-40",
                                                                    `bg-gradient-to-br ${item.color}`
                                                                )}
                                                            />
                                                        )}

                                                        {/* Circle Item */}
                                                        <div className={cn(
                                                            "relative w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] rounded-full border-[1.5px] overflow-hidden flex flex-col transition-all duration-500",
                                                            isActive
                                                                ? "border-white/60 shadow-xl ring-2 ring-white/10 scale-105"
                                                                : "border-white/5 group-hover:border-white/25 shadow-md",
                                                            item.shadowColor
                                                        )}>
                                                            {/* TOP: Icon */}
                                                            <div className={cn(
                                                                "h-[58%] w-full flex items-center justify-center relative",
                                                                `bg-gradient-to-br ${item.color}`
                                                            )}>
                                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/30" />
                                                                <motion.div
                                                                    animate={isActive ? { y: [0, -2, 0], scale: [1, 1.05, 1] } : {}}
                                                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                                    className="relative z-10"
                                                                >
                                                                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.3)]" />
                                                                </motion.div>
                                                            </div>

                                                            {/* BOTTOM: Label */}
                                                            <div className={cn(
                                                                "h-[45%] w-full flex items-center justify-center px-1 text-center border-t border-black/40 relative z-10",
                                                                "bg-[#1a262f] group-hover:bg-[#2c3d4a] transition-colors"
                                                            )}>
                                                                <div className="absolute inset-0 shadow-[inset_0_1.5px_6px_rgba(0,0,0,0.5)] pointer-events-none" />
                                                                <span className={cn(
                                                                    "text-[5.5px] sm:text-[7.5px] font-bold tracking-tight leading-none transition-all uppercase whitespace-pre-line text-center",
                                                                    isActive ? "text-white" : "text-white/40 group-hover:text-white"
                                                                )}>
                                                                    {t(item.tKey)}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Active Dot */}
                                                        {isActive && (
                                                            <motion.div
                                                                layoutId="active-nav-indicator"
                                                                className="absolute -bottom-2.5 left-1/2 -translate-x-1/2"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,0.6)]" />
                                                            </motion.div>
                                                        )}
                                                    </motion.div>
                                                </Link>

                                                {/* Connector Triangle */}
                                                {index < circularNavItems.length - 1 && (
                                                    <div className="mx-0.5 sm:mx-1 flex items-center justify-center">
                                                        <div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-l-[5.5px] border-l-white/20 border-b-[3.5px] border-b-transparent" />
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </nav>
                    </div>

                    {/* ── Desktop: right floating panel — outside the pill ── */}
                    <motion.div
                        id="navbar-right-panel"
                        initial={{ y: -60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="hidden md:flex absolute top-3 right-4 items-center gap-2 pointer-events-auto"
                    >
                        <LanguageSelector />

                        <div className="w-px h-5 bg-white/10" />

                        <ThemeSwitcher />

                        <div className="w-px h-5 bg-white/10" />

                        {/* Login */}
                        <Link to="/login">
                            <motion.button
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/15
                                           text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5
                                           transition-all duration-200 text-xs font-semibold tracking-wide"
                            >
                                <LogIn className="w-3.5 h-3.5" />
                                <span>{t("navbar.login") || "Login"}</span>
                            </motion.button>
                        </Link>

                        {/* Sign Up */}
                        <Link to="/register">
                            <motion.button
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white
                                           text-xs font-semibold tracking-wide
                                           shadow-md shadow-violet-500/25 hover:shadow-violet-500/50
                                           transition-all duration-200"
                                style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)" }}
                            >
                                <UserPlus className="w-3.5 h-3.5" />
                                <span>{t("navbar.signup") || "Sign Up"}</span>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* ── Mobile: compact controls top-right ── */}
                    <div className="absolute top-3 right-3 md:hidden pointer-events-auto flex items-center gap-1.5 scale-90 origin-top-right">
                        <LanguageSelector />
                        <div className="w-px h-4 bg-white/10" />
                        <ThemeSwitcher />
                    </div>
                </motion.header>
            )}
        </AnimatePresence>
    );
}
