// File: components/BioMap.jsx
import React from "react";

export function BioMap() {
  return (
    <div className="mt-8">
      <h3 className="text-center text-lg font-semibold mb-2">Visit Us</h3>
      <iframe
        src="https://maps.app.goo.gl/caowy78gbTgmU54P8?g_st=com.google.maps.preview.copy"
        title="Kandis Coffee Location"
        className="w-full h-64 rounded-xl border"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
