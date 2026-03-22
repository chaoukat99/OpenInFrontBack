import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Rocket, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { SectionGlow } from "@/components/ui/SectionGlow";

interface HeroSectionProps {
  type?: "company" | "consultant" | "freelancer";
  topTitle?: string;
  badgeText?: string;
}

export function HeroSection({ type, topTitle, badgeText }: HeroSectionProps) {
  const { t } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(() => [
    t('hero.words.excellence'),
    t('hero.words.talent'),
    t('hero.words.innovation')
  ], [t]);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== word) {
        // Typing
        setDisplayText(word.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText !== "") {
        // Deleting
        setDisplayText(word.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText === word) {
        // Pause at the end of word
        setTimeout(() => setIsDeleting(true), 200);
      } else if (isDeleting && displayText === "") {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const renderButtons = () => {
    if (type === "company") {
      return (
        <>
          <Button
            asChild
            className="h-16 px-10 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 font-bold group"
          >
            <Link to="/company-register" className="flex items-center gap-3">
              <Building2 className="w-5 h-5" />
              {t('cta.btn_start')} {/* Start for Free */}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-16 px-10 rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300 font-bold"
          >
            <Link to="/company-login" className="flex items-center gap-3">
              <LogIn className="w-5 h-5" />
              {t('navbar.login')}
            </Link>
          </Button>
        </>
      );
    }

    if (type === "consultant" || type === "freelancer") {
      return (
        <>
          <Button
            asChild
            className="h-16 px-10 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 font-bold group"
          >
            <Link to="/consultant-register" className="flex items-center gap-3">
              <Rocket className="w-5 h-5" />
              {t('cta.btn_start')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-16 px-10 rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300 font-bold"
          >
            <Link to="/consultant-login" className="flex items-center gap-3">
              <LogIn className="w-5 h-5" />
              {t('navbar.login')}
            </Link>
          </Button>
        </>
      );
    }

    // Default (Home)
    return (
      <>
        <Button
          asChild
          className="h-16 px-10 rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300 font-bold group"
        >
          <Link to="/company-solutions" className="flex items-center gap-3">
            <Building2 className="w-5 h-5" />
            {t('hero.btn_company')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-16 px-10 rounded-full border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-300 font-bold"
        >
          <Link to="/consultant-opportunities" className="flex items-center gap-3">
            <Users className="w-5 h-5" />
            {t('hero.btn_consultant')}
          </Link>
        </Button>
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      <SectionGlow opacity={0.25} />

      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 grid-pattern opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-20 px-6 flex flex-col items-center text-center space-y-8 pt-20"
      >
        {/* Badge */}


        {/* Title */}
        <motion.h1
          variants={titleVariants}
          className="max-w-5xl text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            {/* Top Title Removed */}
            <span className="opacity-90">{t('hero.title_prefix')}</span>
            <span className="relative inline-block bg-gradient-to-r from-primary via-indigo-400 to-accent bg-clip-text text-transparent min-w-[2ch]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[3px] h-[0.85em] bg-indigo-400 ml-2 translate-y-1"
              />
            </span>
          </div>
        </motion.h1>
        <motion.div variants={itemVariants} className="relative inline-flex">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 blur-lg opacity-20" />
          <span className="relative px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/70">
            {badgeText || t('hero.badge')}
          </span>
        </motion.div>
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg md:text-xl text-white/50 leading-relaxed font-light tracking-wide text-balance"
        >
          {t('hero.subtitle')} {t('hero.subtitle_highlight')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 pt-4"
        >

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="pt-12 flex flex-col items-center gap-4 py-8"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>

      <SectionDivider />

      {/* Subtle Bottom Glow to help transition */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm" />
    </section>
  );
}
