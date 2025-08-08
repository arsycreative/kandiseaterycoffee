import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Coffee, Store, Instagram } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import logo from "./assets/logo.png";
import backgroundImage from "./assets/background.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function App() {
  useEffect(() => {
    document.title = "Kandis Coffee Eatery";
  }, []);

  const links = [
    {
      label: "Menu",
      icon: <Store className="w-5 h-5" />,
      url: "https://drive.google.com/file/d/1lKS8Cj8I_WjouO7YJCggFnAI-SJ0lv6M/view?usp=sharing",
    },
    {
      label: "Shopee",
      icon: <ShoppingCart className="w-5 h-5" />,
      url: "https://shopee.co.id/universal-link/now-food/shop/21657196?deep_and_deferred=1&shareChannel=copy_link",
    },
    {
      label: "Grab Food",
      icon: <Store className="w-5 h-5" />,
      url: "https://r.grab.com/g/6-20241121_211048_22FFD7D8559B40E5852CEF3A6B0C1ED5_MEXMPS-6-C6MZAPLWTENCEE",
    },
    {
      label: "Go Food",
      icon: <Coffee className="w-5 h-5" />,
      url: "https://gofood.link/u/wyk4aW",
    },
    {
      label: "Tiktok",
      icon: <FaTiktok className="w-5 h-5" />,
      url: "https://www.tiktok.com/@kandis.coffeeeatery?_t=8qNGYSo7xPm&_r=1",
    },
    {
      label: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/kandis.coffeeeatery?igsh=MTVxbGk0M2N0MXE5aA==",
    },
  ];

  return (
    <div
      className="min-h-screen w-full px-4 pt-10 pb-20 font-['Inter'] text-[#084423] relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#062e1f] opacity-55 z-0" />

      <div className="relative z-10 max-w-2xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-10"
        >
          <img
            src={logo}
            alt="Kandis Coffee Eatery Logo"
            className="mx-auto w-28 h-28 rounded-full object-cover mb-5 border-2 border-white shadow-lg"
          />
          <h1 className="text-4xl font-['Playfair_Display'] font-semibold text-white">
            Kandis Coffee Eatery
          </h1>
          <p className="text-4xl mt-3 text-[#dbdbdb] font-light tracking-wide whitespace-nowrap overflow-hidden border-r-2 border-white tangerine-regular">
            memories made here~
          </p>
        </motion.div>

        {/* Link Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 gap-5"
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="flex items-center justify-between bg-white rounded-full px-5 py-3 shadow-lg border border-[#e5e5e5] hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="text-[#084423]">{link.icon}</div>
                <span className="text-base font-medium text-[#084423]">
                  {link.label}
                </span>
              </div>
              <span className="text-sm text-gray-400">↗</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10 mb-6"
        >
          <h5 className="text-2xl md:text-3xl font-semibold text-white font-['Playfair_Display']">
            Visit Us at Kandis Coffee Eatery
          </h5>
        </motion.div>

        {/* Map Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-5 rounded-lg overflow-hidden shadow-lg border border-white"
        >
          <iframe
            title="Kandis Coffee Eatery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.676185047271!2d108.3443007!3d-7.325835899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5ff4e7afd367%3A0x94ce60e501fb9536!2sKandis%20Coffee%20Eatery!5e0!3m2!1sen!2sid!4v1715087322549!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/628131389209"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-20 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition-all duration-300"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}
