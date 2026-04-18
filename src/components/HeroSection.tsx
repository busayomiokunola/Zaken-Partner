import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-background/70" />
    <div className="container relative z-10 py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        className="max-w-3xl"
      >
        <h1 className=" text-4xl md:text-6xl lg:text-6xl font-medium tracking-wider leading-tight mb-6">
          You Own Your Business; We{" "}
          <span className="text-gradient-green">
            Create, Organize, and Expand It.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed">
          Strategic partnership for founders and SMEs who have the vision but
          need the execution. No equity taken. Full ownership retained.
        </p>
        {/* <Button
          size="lg"
          className="bg-[#5b7158] text-white hover:bg-[#4a5f48]"
        >
          Book Your Free Strategy Call
        </Button> */}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
