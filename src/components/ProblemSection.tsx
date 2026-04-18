import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const problems = [
  "You can build, but scaling and selling feel impossible",
  "Managing operations, branding, and funding can quickly become overwhelming.",
  "You want to own a business, but daily management isn't your strength",
  "Without clear strategy and execution, growth stalls",
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-white text-black">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-medium tracking-wider mb-16 text-center">
          Outstanding Concepts Fail Without{" "}
          <span className="text-gradient-green"> Adequate Organization</span>
        </h2>
      </motion.div>
      <div className="max-w-xl mx-auto space-y-6 mb-16">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <XCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
            <p className="text-lg text-primary-foreground">{p}</p>
          </motion.div>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-lg text-black font-medium max-w-xl mx-auto"
      >
        You need someone who will work with you to get things done
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;
