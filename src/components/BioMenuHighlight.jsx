// File: components/BioMenuHighlight.jsx
import React from "react";
import menuImage from "../assets/menu-preview.jpg"; // export from Screenshot
import { motion } from "framer-motion";

export function BioMenuHighlight() {
  return (
    <div className="mt-8 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-semibold mb-2"
      >
        Featured Menu
      </motion.h2>
      <img
        src={menuImage}
        alt="Menu preview"
        className="rounded-xl border shadow-md w-full"
      />
    </div>
  );
}
