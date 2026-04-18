import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SolutionSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className=" text-3xl md:text-5xl font-medium tracking-wide mb-8 ">
          Your #1 Business Partner{" "}
          <span className="text-gradient-green">
            Without Giving Up Your Equity
          </span>
        </h2>
        <p className="text-lg text-white mt-10 mb-6 leading-relaxed">
          We step in as your hands-on strategic partner, handling the groundwork
          so you can focus on vision and results.
        </p>
        <p className="text-lg text-white mt-10 mb-10 leading-relaxed">
          From ideation to execution, we bring structure, branding, and
          operational excellence to turn your idea or investment into a
          profitable, fundable venture.
        </p>
        {/* <Button size="lg" className="text-lg px-8 py-6 bg-[#5b7158] text-white hover:bg-[#4a5f48]">
          Let's Talk About Your Business
        </Button> */}
      </motion.div>
    </div>
  </section>
);

export default SolutionSection;
