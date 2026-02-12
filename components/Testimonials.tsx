
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechLaunch",
    content: "Nazeer transformed our vision into a powerhouse e-commerce site. Our sales tripled within the first three months after launch."
  },
  {
    name: "Ahmad Rahim",
    role: "Director, Global Academy",
    content: "The QuranHub platform is intuitively designed and incredibly stable. It's exactly the modern edge our education system needed."
  },
  {
    name: "James Wilson",
    role: "Marketing Head, FitCloud",
    content: "Incredible attention to detail. The scaling strategy through Google and Meta ads was precise and highly profitable."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c1e21]">Voices of <span className="text-[#0fb9b1]">Trust</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[32px] bg-[#f8faf9] border border-gray-100 relative group"
            >
              <div className="absolute top-6 right-8 text-[#ff6b6b]/20 group-hover:text-[#ff6b6b]/40 transition-colors">
                <Quote size={48} />
              </div>
              <p className="text-lg text-[#6b7280] mb-8 leading-relaxed italic">
                "{t.content}"
              </p>
              <div>
                <h4 className="text-xl font-bold text-[#1c1e21]">{t.name}</h4>
                <p className="text-[#0fb9b1] font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
