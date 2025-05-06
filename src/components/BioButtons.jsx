// File: components/BioButtons.jsx
import React from "react";
import { motion } from "framer-motion";

const links = [
  { label: "WhatsApp", url: "https://wa.me/6281222249229", color: "#25D366" },
  {
    label: "Shopee",
    url: "https://shopee.co.id/universal-link/now-food/shop/21657196?deep_and_deferred=1&shareChannel=copy_link",
    color: "#ee4d2d",
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@kandis.coffeeeatery?_t=8qNGYSo7xPm&_r=1",
    color: "#000",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/kandis.coffeeeatery?igsh=MTVxbGk0M2N0MXE5aA==",
    color: "#E1306C",
  },
  {
    label: "Grab Food",
    url: "https://r.grab.com/g/6-20241121_211048_22FFD7D8559B40E5852CEF3A6B0C1ED5_MEXMPS-6-C6MZAPLWTENCEE",
    color: "#00A826",
  },
  { label: "Go Food", url: "https://gofood.link/u/wyk4aW", color: "#D73D32" },
];

export function BioButtons() {
  return (
    <div className="mt-6 space-y-3">
      {links.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full text-center py-3 rounded-xl text-white font-semibold"
          style={{ backgroundColor: link.color }}
        >
          {link.label}
        </motion.a>
      ))}
    </div>
  );
}
