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
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

// Restoring the original provided images
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
    description: "Engineering high-performance web systems using cutting-edge React & Next.js frameworks for global scalability.",
    icon: <Globe className="w-8 h-8 text-[#0fb9b1]" />,
  },
  {
    title: "Growth Systems",
    description: "Strategic performance marketing and conversion optimization designed to dominate digital marketplaces.",
    icon: <Target className="w-8 h-8 text-[#0fb9b1]" />,
  },
  {
    title: "Learning Portals",
    description: "Architecting bespoke educational ecosystems that bridge tradition with modern pedagogical excellence.",
    icon: <BookOpen className="w-8 h-8 text-[#0fb9b1]" />,
  }
];

export const QURAN_SUBJECTS = [
  { name: "Quran with Tajweed", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Hifz Program", icon: <Award className="w-6 h-6" /> },
  { name: "Islamic Studies", icon: <Compass className="w-6 h-6" /> },
  { name: "Pure Mathematics", icon: <Binary className="w-6 h-6" /> },
  { name: "Advanced Physics", icon: <Atom className="w-6 h-6" /> },
  { name: "Computing", icon: <Zap className="w-6 h-6" /> },
];

export const ACADEMY_STATS = [
  { label: "Global Learners", value: "12,400+" },
  { label: "Elite Teachers", value: "48" },
  { label: "Active Countries", value: "22" },
  { label: "Success Rate", value: "99.8%" },
];

export const ACADEMY_PROCESS = [
  { title: "Diagnostic Audit", desc: "We evaluate current knowledge levels to architect a custom mastery roadmap." },
  { title: "Mentor Alignment", desc: "Pairing students with specialists based on learning style and long-term goals." },
  { title: "Active Learning", desc: "Synchronous sessions combined with a proprietary resource portal for 24/7 progress." },
  { title: "Certification", desc: "Rigorous assessment and formal accreditation through the Mastery Bureau." }
];

export const ACADEMY_FAQS = [
  { q: "Is the QuranHub Academy strictly for children?", a: "While we specialize in youth development, we offer bespoke adult programs for Quranic sciences and professional digital skills." },
  { q: "How are instructors selected?", a: "Our vetting process includes 3-stage testing: Technical/Spiritual competency, Pedagogical ability, and background verification." },
  { q: "Do you offer physical sessions?", a: "We are primarily a digital-first bureau to ensure the best talent reaches global students, however private in-person sessions can be arranged." },
  { q: "What is the QuranHub learning portal?", a: "It's a custom-built LMS where students track progress, access recordings, and receive direct feedback from mentors." }
];

export const ACADEMY_FEATURES = [
  { title: "Holistic Pedagogy", desc: "Merging sacred tradition with modern scientific inquiry.", icon: <Lightbulb size={24} /> },
  { title: "Mastery Focus", desc: "We teach for retention and application, not just completion.", icon: <CheckCircle size={24} /> },
  { title: "Global Accredited", desc: "Recognized certifications by international standards.", icon: <ShieldCheck size={24} /> },
  { title: "Family Support", desc: "Direct concierge line for parents to track excellence.", icon: <MessageSquare size={24} /> }
];

export const PROCESS_STEPS = [
  { id: 1, title: "Audit", icon: <Target className="w-6 h-6" />, desc: "Deep-dive analysis into market gaps and platform potential." },
  { id: 2, title: "Architect", icon: <Zap className="w-6 h-6" />, desc: "Engineering the foundational systems for long-term scalability." },
  { id: 3, title: "Deploy", icon: <Rocket className="w-6 h-6" />, desc: "Strategic launch with growth-hacking tracking enabled." },
  { id: 4, title: "Optimize", icon: <BarChart3 className="w-6 h-6" />, desc: "Recursive refinement based on live behavioral data." },
];

export const PROJECTS = [
  { 
    title: "QuranHub LMS", 
    category: "EdTech Bureau", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    desc: "A custom-engineered educational ecosystem facilitating mastery across 22 countries."
  },
  { 
    title: "Growth Dashboard", 
    category: "SaaS Enterprise", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    desc: "Proprietary ROI tracking system for high-volume performance marketing agencies."
  }
];