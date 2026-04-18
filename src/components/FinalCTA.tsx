import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => (
  <section className="py-24 md:py-32 bg-[#5b7158]">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-medium tracking-wider mb-10">
          Ready to Turn Your Vision Into a{" "}
          <span className="">Structured, Profitable Business?</span>
        </h2>
        <p className="text-lg mb-10 leading-relaxed">
          Book a free strategy call. We'll assess where you are, where you want
          to go, and how we can get you there.
        </p>
        <Link to="/Contact">
          <Button
            size="lg"
            className=" font-bold px-10 py-6 mb-6 bg-white text-black hover:bg-transparent hover:border hover:border-white hover:text-white "
          >
            <p className="transition-colors hover:border-b hover:border-white ease-in duration-500">
              Book Your Free Consultation
            </p>
          </Button>
        </Link>
        <p className="text-lg mt-6">
          No pressure. No pitch decks required. Just a conversation about your
          business.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
