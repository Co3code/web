import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  Bell,
  ShieldCheck,
  MapPin,
  Download,
  Github,
  Twitter,
  Instagram,
  Menu,
  X,
  AlertCircle,
  CheckCircle,
  Tag,
  FileText,
  Cpu,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";

const HERO_VIDEO_URL = "/sample2.mp4";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#070709]/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-light tracking-wide text-white">AIFoundIT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#features" className="text-sm font-light text-white/70 hover:text-white transition-colors">
            features
          </a>
          <a href="#how-it-works" className="text-sm font-light text-white/70 hover:text-white transition-colors">
            how it works
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="stroke-[1]" /> : <Menu className="stroke-[1]" />}
        </button>
      </div>

      {/* Mobile Menue */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#070709]/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-6"
        >
          <a
            href="#features"
            className="text-lg font-light text-white/70 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            features
          </a>
          <a
            href="#how-it-works"
            className="text-lg font-light text-white/70 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            how it works
          </a>
        </motion.div>
      )}
    </nav>
  );
};  

const VideoBanner = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#070709] flex items-center justify-center border-b border-white/[0.02]">
      {/* Background Video */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50 mix-blend-lighten">
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/30 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center mt-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#FF416C] animate-pulse" />
          <span className="text-xs tracking-[0.2em] font-light text-white/80 uppercase">AI-Powered Lost & Found</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-white mb-6 leading-tight"
        >
          lost it? <br />
          <span className="font-normal bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-transparent bg-clip-text">
            AI will find it.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl font-light text-white/60 max-w-2xl mb-12"
        >
          A smart lost-and-found platform that uses AI to match lost and found items through image and text similarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#download"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white font-normal hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,65,108,0.3)]"
          >
            <Download className="w-5 h-5 stroke-[1.5]" />
            Get the App
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 font-normal hover:bg-white/10 hover:text-white transition-all shadow-xl"
          >
            How it works
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 stroke-[1]" />,
      title: "AI Image Matching",
      description:
        "Our AI uses the CLIP model to compare item photos and find visually similar matches between lost and found reports.",
    },
    {
      icon: <Bell className="w-8 h-8 stroke-[1]" />,
      title: "Real-time Notifications",
      description: "Get instant alerts the moment our AI finds a possible match for your lost or found item.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 stroke-[1]" />,
      title: "Secure Authentication",
      description: "Firebase-powered authentication keeps your account and personal information safe and protected.",
    },
    {
      icon: <Cpu className="w-8 h-8 stroke-[1]" />,
      title: "Hybrid Matching Algorithm",
      description: "Combines 60% image similarity and 40% text similarity for the most accurate match results.",
    },
  ];

  return (
    <section id="features" className="py-32 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-thin text-white mb-6">
            Powerful{" "}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]">
              Capabilities
            </span>
          </h2>
          <p className="text-white/50 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Built with real AI technology to help reunite lost items with their owners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-white/40 group-hover:text-[#FF416C] mb-8 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-normal text-white/90 mb-4">{feature.title}</h3>
              <p className="text-white/40 font-light text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Post",
      description: "Take a photo and describe your lost or found item with its title, category, and location.",
    },
    {
      number: "02",
      title: "Match",
      description:
        "Our AI combines CLIP-based image matching with text similarity to automatically find the best lost and found matches.",
    },
    {
      number: "03",
      title: "Connect",
      description:
        "Get notified instantly and contact the other user directly through their profile to recover your item.",
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#070709] border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-6xl font-thin text-white mb-10">
              three simple <br />
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]">
                steps
              </span>
            </h2>
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="text-4xl font-thin text-white/10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] transition-all duration-500 font-mono">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-normal text-white/90 mb-3">{step.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="aspect-[4/5] rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF416C]/10 to-[#FF4B2B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Replace the URL below with your actual picture URL later! */}
              <img
                src="/meet.jpg"
                alt="AIFoundIt App UI"
                className="w-full h-full object-cover rounded-[2rem] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-[#070709]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <p className="text-white/80 font-light italic mb-4 leading-relaxed">
                  "I lost my keys at the university library. AIfoundIT matched them with a post from another student
                  almost instantly!"
                </p>
                <p className="text-[#FF416C] font-normal text-sm tracking-wide uppercase">— Sarah J.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PostingTips = () => {
  return (
    <section id="tips" className="py-32 bg-[#070709] border-t border-white/[0.02] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-thin text-white mb-6">
            how to post{" "}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]">
              effectively
            </span>
          </h2>
          <p className="text-white/50 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Follow these tips to help our AI find the best match for your item.
          </p>
        </div>

        {/* Cards Side By Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Card 1: Lost */}
          <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl group hover:border-white/10 transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wider border border-[#FF416C]/30 bg-[#FF416C]/10 text-[#FF416C]">
                LOST
              </span>
              <AlertCircle className="w-5 h-5 text-white/20 group-hover:text-[#FF416C] transition-colors" />
            </div>
            <h3 className="text-2xl font-normal text-white border-b border-white/[0.02] pb-4 mb-4">
              Black Leather Wallet
            </h3>
            <p className="text-[#FF416C] text-sm mb-6 font-light uppercase tracking-wider">Category: Wallet</p>

            <div className="space-y-6">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Description</p>
                <p className="text-white/70 font-light text-base leading-relaxed">
                  Black leather wallet with ID cards and cash inside. Has a small scratch on the back.
                </p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Location</p>
                <div className="flex items-center gap-2 text-white/70 font-light text-base">
                  <MapPin className="w-4 h-4 text-[#FF4B2B]" />
                  SM Mall Food Court, 2nd Floor
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Found */}
          <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl group hover:border-white/10 transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wider border border-green-500/30 bg-green-500/10 text-green-400">
                FOUND
              </span>
              <CheckCircle className="w-5 h-5 text-white/20 group-hover:text-green-400 transition-colors" />
            </div>
            <h3 className="text-2xl font-normal text-white border-b border-white/[0.02] pb-4 mb-4">
              Found Blue Backpack
            </h3>
            <p className="text-green-400 text-sm mb-6 font-light uppercase tracking-wider">Category: Bag</p>

            <div className="space-y-6">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Description</p>
                <p className="text-white/70 font-light text-base leading-relaxed">
                  Found a blue Jansport backpack near the entrance. Contains books and a water bottle.
                </p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Location</p>
                <div className="flex items-center gap-2 text-white/70 font-light text-base">
                  <MapPin className="w-4 h-4 text-green-400" />
                  University Library Main Entrance
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Tips in a row */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-10 border-t border-white/[0.05]">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-white/40">
              <Tag className="w-6 h-6 stroke-[1]" />
            </div>
            <div>
              <h4 className="text-lg font-normal text-white/90 mb-1">Title</h4>
              <p className="text-white/40 font-light text-sm leading-relaxed">
                Be specific about the item name and color
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-white/40">
              <FileText className="w-6 h-6 stroke-[1]" />
            </div>
            <div>
              <h4 className="text-lg font-normal text-white/90 mb-1">Description</h4>
              <p className="text-white/40 font-light text-sm leading-relaxed">
                Include unique details like brand, color, contents, markings
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-white/40">
              <MapPin className="w-6 h-6 stroke-[1]" />
            </div>
            <div>
              <h4 className="text-lg font-normal text-white/90 mb-1">Location</h4>
              <p className="text-white/40 font-light text-sm leading-relaxed">
                Be as specific as possible like building name, floor, area
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const APK_URL = "https://github.com/Co3code/capstone2/releases/download/v1.6.0/AIFoundIT.apk";
  return (
    <section id="download" className="py-40 bg-[#070709] border-t border-white/[0.02] relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF416C] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-thin text-white mb-8">
          Ready to find <br className="md:hidden" />
          <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] to-[#FF4B2B]">
            what's yours?
          </span>
        </h2>
        <p className="text-xl text-white/40 font-light mb-12 max-w-lg">
          Install AIFoundIt on your Android device today and let AI help reunite you with your lost items.
        </p>

        <a
          href={APK_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] text-white font-normal hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,65,108,0.3)]"
        >
          <Download className="w-5 h-5 stroke-[1.5]" />
          Download APK
        </a>

        <div className="max-w-lg mx-auto p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center mt-[20px]">
          <p className="text-white/50 font-light text-sm leading-relaxed">
            <span className="text-white/80 font-normal">Note:</span> This app is not yet available on Google Play Store.{" "}
            <br />
            Before installing, please enable <span className="text-[#FF416C]">"Install from unknown sources"</span>{" "}
            <br />
            in your Android Settings &rarr; Security &rarr; Unknown Sources.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#070709] py-12 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-white/50 font-light tracking-wide text-sm">AIfoundIT © {new Date().getFullYear()}</span>
        </div>

        <div className="flex gap-8 text-sm font-light text-white/40">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#FF416C] hover:bg-white/5 transition-all"
          >
            <Twitter className="w-4 h-4 stroke-[1.5]" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#FF416C] hover:bg-white/5 transition-all"
          >
            <Instagram className="w-4 h-4 stroke-[1.5]" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/40 hover:text-[#FF416C] hover:bg-white/5 transition-all"
          >
            <Github className="w-4 h-4 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

const SECTION_IDS = ["hero", "features", "how-it-works", "tips", "download"];

export default function App() {
  const currentIndex = useRef(0);
  const [navHint, setNavHint] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
      e.preventDefault();
      if (e.key === "ArrowDown") {
        currentIndex.current = Math.min(currentIndex.current + 1, SECTION_IDS.length - 1);
      } else {
        currentIndex.current = Math.max(currentIndex.current - 1, 0);
      }
      document.getElementById(SECTION_IDS[currentIndex.current])?.scrollIntoView({ behavior: "smooth" });
    };
    window.addEventListener("keydown", handleKeyDown);
    const timer = setTimeout(() => setNavHint(false), 4000);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#070709]">
      <Navbar />
      <main>
        <div id="hero">
          <VideoBanner />
        </div>
        <Features />
        <HowItWorks />
        <PostingTips />
        <CTA />
      </main>
      <Footer />

      {/* Arrow key nav hint */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: navHint ? 1 : 0, x: navHint ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="fixed right-6 bottom-8 z-50 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-1 bg-white/[0.04] border border-white/10 backdrop-blur-md px-4 py-3 rounded-2xl">
          <span className="text-white/30 text-[10px] tracking-widest uppercase mb-1">navigate</span>
          <div className="flex flex-col items-center gap-1">
            <div className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 text-xs">
              ↑
            </div>
            <div className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white/50 text-xs">
              ↓
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
