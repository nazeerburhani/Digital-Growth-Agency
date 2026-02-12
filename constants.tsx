
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
  GraduationCap
} from 'lucide-react';

/**
 * Main Profile Photos from GitHub (Raw URLs)
 */
export const FOUNDER_IMAGE_1 = "https://raw.githubusercontent.com/nazeerburhani/website-assets/main/IMG_20250818_091711.jpg"; 
export const FOUNDER_IMAGE_2 = "https://raw.githubusercontent.com/nazeerburhani/website-assets/main/IMG_20251031_084101.jpg";
export const FOUNDER_IMAGE_CINEMATIC = "https://raw.githubusercontent.com/nazeerburhani/website-assets/main/a-cinematic-studio-portrait-of-a-young-a_BWWQHxNzSBqguh8zqisQrg_DeCNTomnToWS2CnTs86EKg.jpeg";

/**
 * Contact & Social Links
 */
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
    title: "Website Development",
    description: "High-performance, scalable web systems built with the latest modern frameworks and architectures.",
    icon: <Globe className="w-8 h-8 text-[#0fb9b1]" />,
  },
  {
    title: "E-commerce Launch",
    description: "Complete end-to-end e-commerce solutions that convert browsers into loyal brand advocates.",
    icon: <ShoppingCart className="w-8 h-8 text-[#0fb9b1]" />,
  },
  {
    title: "Ads Management",
    description: "Data-driven advertising strategies across Facebook, TikTok, and Google to scale your revenue.",
    icon: <BarChart3 className="w-8 h-8 text-[#0fb9b1]" />,
  }
];

export const QURAN_SUBJECTS = [
  { name: "Quran with Tajweed", icon: <BookOpen className="w-6 h-6" /> },
  { name: "Hifz Program", icon: <Award className="w-6 h-6" /> },
  { name: "Islamic Studies", icon: <Compass className="w-6 h-6" /> },
  { name: "Mathematics", icon: <Binary className="w-6 h-6" /> },
  { name: "Physics", icon: <Atom className="w-6 h-6" /> },
  { name: "General Science", icon: <GraduationCap className="w-6 h-6" /> },
];

export const PROCESS_STEPS = [
  { id: 1, title: "Strategy", icon: <Target className="w-6 h-6" />, desc: "In-depth market analysis and platform architecture planning." },
  { id: 2, title: "Build", icon: <Zap className="w-6 h-6" />, desc: "Expert development and pedagogical content creation." },
  { id: 3, title: "Launch", icon: <Rocket className="w-6 h-6" />, desc: "System testing and live deployment with growth triggers." },
  { id: 4, title: "Scale", icon: <BarChart3 className="w-6 h-6" />, desc: "Continuous optimization through data and feedback loops." },
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
