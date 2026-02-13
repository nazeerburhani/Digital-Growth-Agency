
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Globe, ShoppingCart, BarChart3 } from 'lucide-react';

interface DetailedServicesProps {
  onBack: () => void;
  onContact: () => void;
}

const DetailedServices: React.FC<DetailedServicesProps> = ({ onBack, onContact }) => {
  const details = [
    {
      title: "Web Architecture",
      icon: <Globe className="w-12 h-12" />,
      color: "bg-teal-500",
      description: "We don't just build websites; we engineer digital foundations that support massive traffic and complex business logic.",
      features: ["Next.js & React Expert Development", "Headless CMS Integration", "SEO-First Performance", "High-Security Cloud Hosting"]
    },
    {
      title: "E-commerce Icons",
      icon: <ShoppingCart className="w-12 h-12" />,
      color: "bg-coral-500",
      description: "From Shopify customizations to custom-built retail platforms, we create shopping experiences that shoppers love.",
      features: ["Conversion Rate Optimization", "Advanced Analytics Setup", "Logistics & Payment Integration", "Brand Identity Design"]
    },
    {
      title: "Growth Engines",
      icon: <BarChart3 className="w-12 h-12" />,
      color: "bg-blue-500",
      description: "Our marketing isn't about likes; it's about revenue. We use advanced tracking to scale your ROI exponentially.",
      features: ["Meta & TikTok Ads Management", "Google Search Dominance", "Retention Marketing Systems", "Predictive Customer Insights"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-[#6b7280] hover:text-[#0fb9b1] font-bold mb-16 transition-colors group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Return to Overview
        </motion.button>
        <header className="mb-24">
          <h1 className="text-6xl md:text-8xl font-bold text-[#1c1e21] mb-8 tracking-tighter">Our <span className="gradient-text-teal">Expertise.</span></h1>
          <p className="text-2xl text-[#6b7280] max-w-3xl font-light leading-relaxed">
            A comprehensive suite of digital services designed to transform startups into industry leaders through technological precision.
          </p>
        </header>
        <div className="space-y-32">
          {details.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-20 items-center`}
            >
              <div className="flex-1">
                <div className={`w-24 h-24 rounded-[32px] ${detail.color} text-white flex items-center justify-center mb-10 shadow-2xl`}>
                  {detail.icon}
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1c1e21] mb-8 tracking-tight">{detail.title}</h2>
                <p className="text-2xl text-[#6b7280] mb-12 font-light leading-relaxed">{detail.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {detail.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#0fb9b1]" size={20} />
                      <span className="text-[#1c1e21] font-bold text-lg">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full aspect-square bg-gray-50 rounded-[80px] border border-gray-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0fb9b1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-center h-full text-[#1c1e21]/5 font-black text-9xl select-none rotate-12">
                  {detail.title.split(' ')[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-32 p-16 rounded-[80px] bg-[#1c1e21] text-center text-white">
          <h3 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight">Ready to activate one of these?</h3>
          <button 
            onClick={onContact}
            className="bg-[#0fb9b1] text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-[#0d9d96] transition-colors"
          >
            Start Strategy Session
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailedServices;
