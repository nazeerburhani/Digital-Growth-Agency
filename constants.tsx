import React from 'react';
import { 
  Globe, 
  ShoppingCart, 
  BarChart3, 
  BookOpen, 
  Award, 
  Target, 
  Zap, 
  Rocket, 
  Compass,
  Atom,
  Binary,
  GraduationCap,
  Cpu,
  ShieldCheck,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

export const HERO_VISUAL = "https://raw.githubusercontent.com/nazeerburhani/website-assets/main/IMG_20250818_091711.jpg"; 
export const VISION_VISUAL = "https://raw.githubusercontent.com/nazeerburhani/website-assets/main/a-cinematic-studio-portrait-of-a-young-a_BWWQHxNzSBqguh8zqisQrg_DeCNTomnToWS2CnTs86EKg.jpeg";
export const ABOUT_VISUAL = "https://raw.githubusercontent.com/nazeerburhani/website-assets/main/IMG_20251031_084101.jpg";

export const CONTACT_LINKS = {
  whatsapp: "https://wa.me/923419781283",
  email: "mailto:support@nazeerahmad.dev",
  emailRaw: "support@nazeerahmad.dev",
  fbQuranHub: "https://facebook.com/profile.php?id=100077656573540",
  fbNazeer: "https://facebook.com/nazeerburhani/",
  phone: "+92 341 9781283"
};

export const SERVICES = [
  {
    title: "Web Architecture",
    description: "Engineering high-performance web systems using cutting-edge architectural standards for global scalability.",
    icon: <Cpu className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Growth Logistics",
    description: "Strategic performance engineering and conversion logistics designed to dominate saturated marketplaces.",
    icon: <Zap className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Learning Portals",
    description: "Architecting bespoke pedagogical ecosystems that fuse sacred tradition with modern scientific precision.",
    icon: <BookOpen className="w-10 h-10" />,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  }
];

export const QURAN_SUBJECTS = [
  { name: "Tajweed Mastery", icon: <BookOpen />, desc: "The Science of Articulation." },
  { name: "Hifz Program", icon: <Award />, desc: "Divine Memorization Track." },
  { name: "Pure Mathematics", icon: <Binary />, desc: "Universal Logic & Algebra." },
  { name: "Quantum Physics", icon: <Atom />, desc: "The Laws of Creation." },
];

export const PROJECTS = [
  { 
    title: "QuranHub LMS", 
    category: "EdTech Platform", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    desc: "A bespoke Learning Management System designed for interactive Quranic studies and academic tracking."
  },
  { 
    title: "MarketFlow SaaS", 
    category: "SaaS Development", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    desc: "A powerful marketing analytics dashboard providing real-time ROI tracking for digital agencies."
  },
  { 
    title: "SwiftRetail E-com", 
    category: "E-commerce System", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    desc: "A custom headless Shopify solution optimized for ultra-fast checkout and high retention."
  },
  { 
    title: "Pulse Ads Manager", 
    category: "Performance Dashboard", 
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop",
    desc: "Automated ad management platform integrating Facebook and Google APIs for optimized spending."
  },
];

export const PROCESS_STEPS = [
  { id: 1, title: "Strategy", icon: <Target className="w-6 h-6" />, desc: "In-depth market analysis and architecture planning." },
  { id: 2, title: "Build", icon: <Zap className="w-6 h-6" />, desc: "Expert development and pedagogical content creation." },
  { id: 3, title: "Launch", icon: <Rocket className="w-6 h-6" />, desc: "System testing and live deployment with growth triggers." },
  { id: 4, title: "Scale", icon: <BarChart3 className="w-6 h-6" />, desc: "Continuous optimization through data and feedback loops." },
];

export const ACADEMY_STATS = [
  { label: "Global Learners", value: "12,400+", icon: <Users size={20}/> },
  { label: "Success Rate", value: "99.8%", icon: <Award size={20}/> },
  { label: "Active Nations", value: "22+", icon: <Globe size={20}/> },
  { label: "Elite Mentors", value: "48", icon: <ShieldCheck size={20}/> },
];

export const ACADEMY_PROCESS = [
  { title: "Initial Assessment", desc: "We evaluate current proficiency and set baseline goals." },
  { title: "Pathway Selection", desc: "Choosing between memorization, linguistics, or STEM mastery." },
  { title: "Active Learning", desc: "Interactive sessions with real-time feedback and tracking." },
  { title: "Certification", desc: "Final assessment and global recognition of achievement." },
];

export const ACADEMY_FAQS = [
  { q: "Is the academy suitable for beginners?", a: "Yes, we have foundational tracks designed specifically for those starting their journey." },
  { q: "Are classes available globally?", a: "Our portal is optimized for low-latency streaming across 22+ countries." },
  { q: "What is the student-to-teacher ratio?", a: "We maintain a strict ratio of 1:12 to ensure precision-guided learning." },
];

export const ACADEMY_FEATURES = [
  { title: "Verified Mastery", desc: "Rigorous certification from global authorities.", icon: <ShieldCheck /> },
  { title: "Personalized Track", desc: "Curriculum tailored to individual pace and level.", icon: <Target /> },
  { title: "Expert Mentorship", desc: "Learn from specialists with decades of experience.", icon: <GraduationCap /> },
  { title: "Sacred Context", desc: "Traditional values meeting modern scientific rigor.", icon: <Lightbulb /> },
];

import { Users } from 'lucide-react';