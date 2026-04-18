import { Mail, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container text-center">
      <h3 className="text-2xl font-bold mb-2 text-[#5b7158]">
        ZAKEN <span className="text-white">Strategic Partner LTD</span>
      </h3>
      <p className="text-white mb-6">
        Bridging the gap between vision and execution.
      </p>
      <div className="flex items-center justify-center mt-10 gap-6">
        <a
          href="mailto:hi.zakenpartners@gmail.com"
          className="text-[#5b7158] hover:text-white transition-colors duration-300 ease-in-out"
        >
          <Mail className="w-5 h-5" />
        </a>
        {/* <a
          href="#"
          className="text-[#5b7158] hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a> */}
        <a
          href="https://www.instagram.com/zakenpartner?igsh=a3U5eWRiNjV2MnRn&utm_source=qr"
          className="text-[#5b7158] hover:text-white transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
      <p className=" text-sm text-white mt-10 ">
        © 2026 Zaken Strategic Partner. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
