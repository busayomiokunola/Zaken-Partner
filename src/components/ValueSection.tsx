import { motion } from "framer-motion";
import { Shield, Wrench, Layers } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Full Ownership",
    desc: "Your business stays yours. No equity, no strings.",
  },
  {
    icon: Wrench,
    title: "Hands-On Execution",
    desc: "We don't just advise. We build and operate alongside you.",
  },
  {
    icon: Layers,
    title: "One-Stop Structure",
    desc: "Strategy, branding, operations, and growth under one roof.",
  },
];

const ValueSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-medium tracking-wider mb-6">
          You Own the Business.{" "}
          <span className="text-gradient-green">We Make It Work.</span>
        </h2>
        <p className="text-lg text-white leading-relaxed">
          We combine creative and operational expertise with deep knowledge of
          partnerships, funding, and legal structure working in your
          business, not just on it.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-5">
              <p.icon className="w-8 h-8 text-[#5b7158]" />
            </div>
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-white">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueSection;
