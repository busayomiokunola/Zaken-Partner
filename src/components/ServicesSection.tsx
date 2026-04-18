import { motion } from "framer-motion";
import { Briefcase, Palette, Settings, Handshake } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Development",
    items: [
      "Business plans & feasibility studies",
      "Pitch decks & investor presentations",
      "Grant research & applications",
      "Business model design & strategy",
    ],
  },
  {
    icon: Palette,
    title: "Branding & Digital Presence",
    items: [
      "Brand identity & positioning",
      "Social media management",
      "Marketing campaigns & analytics",
      "Content direction",
    ],
  },
  {
    icon: Settings,
    title: "Operations & Project Management",
    items: [
      "Operational structure & process design",
      "Project planning & execution",
      "Workflow optimization",
    ],
  },
  {
    icon: Handshake,
    title: "Strategic & Partnership Support",
    items: [
      "Stakeholder & partnership management",
      "Compliance support",
      "Fundraising & investor readiness",
    ],
  },
];

const ServicesSection = () => (
  <section className="py-10 md:py-24 bg-white">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className=" flex flex-col  gap-8 text-xl md:text-2xl tracking-wider text-gradient-green font-bold text-center mb-16"
      >
        ZAKEN'S SERVICES{" "}
        <span className="text-black font-medium text-3xl md:text-5xl tracking-wide">
          Relax. We'll Handle Everything
        </span>
        <span className="text-lg tracking-normal text-primary-foreground font-light">
          Comprehensive Business Management, Just for You
        </span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-16 md:gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.1 }}
            className="bg-white border border-gray-300 rounded-lg p-8 transition-shadow duration-100 ease-in-out hover:shadow-[0_10px_0_0_black] hover:bg-gray-400 hover:bg-opacity-10"
          >
            <s.icon className="w-10 h-10 text-[#5b7158] mb-4" />
            <h3 className=" text-2xl md:text-3xl leading-loose tracking-tight h-[90px] md:h-[120px] text-black font-medium mb-4">
              {s.title}
            </h3>
            <hr className="border-border/20 mb-4" />
            <ul className="space-y-6 list-none ">
              {s.items.map((item, j) => (
                <li
                  key={j}
                  className=" text-primary-foreground tracking-tight font-light font-inter text-lg flex items-center gap-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
