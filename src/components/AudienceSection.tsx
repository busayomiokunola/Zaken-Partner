import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Rocket,
  Building2,
  Briefcase,
  Lightbulb,
  User,
} from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    text: "Startup founders seeking structure, clarity, or funding",
  },
  {
    icon: Building2,
    text: "SMEs looking to formalize operations and grow profitably",
  },
  {
    icon: Briefcase,
    text: "9–5 professionals who want to own side businesses without managing daily operations",
  },
  {
    icon: Lightbulb,
    text: "Entrepreneurs & creatives who need stronger operational systems",
  },
  {
    icon: User,
    text: "Individuals who want to execute a project but do not know where to start from",
  },
];

const AudienceSection = () => (
  <section className="py-10 md:py-24 bg-white">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl text-center mb-16 font-medium text-black tracking-wide"
      >
        Built for Founders{" "}
        <span className="text-gradient-green">Ready to Scale</span>
      </motion.h2>
      <div className="max-w-2xl mx-auto space-y-6 mb-12 ">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <a.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-lg text-black">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
