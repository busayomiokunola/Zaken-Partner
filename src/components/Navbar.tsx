import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleHashLink = (hash: string) => {
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/">
          <span className="text-xl font-heading font-bold tracking-wide">
            ZAKEN
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleHashLink("#services")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:border-b hover:border-white ease-in-out duration-500"
          >
            Services
          </button>
          <button
            onClick={() => handleHashLink("#about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hover:border-b hover:border-white ease-in-out duration-500"
          >
            About
          </button>
          <Link to="/Contact">
            <Button
              size="sm"
              className="bg-[#5b7158] text-white hover:bg-[#4a5f48]"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 pb-4 pt-2 space-y-3">
              <button
                className="block w-full text-left text-muted-foreground py-2"
                onClick={() => handleHashLink("#services")}
              >
                Services
              </button>
              <button
                className="block w-full text-left text-muted-foreground py-2"
                onClick={() => handleHashLink("#about")}
              >
                About
              </button>
              <Link to="/Contact" onClick={() => setOpen(false)}>
                <Button
                  size="sm"
                  className="w-full bg-[#5b7158] text-white hover:bg-[#4a5f48]"
                >
                  Book a Call
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
