"use client";
import { useEffect, useState } from "react";

export default function OwlRobot() {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // prevent blocking clicks
        zIndex: 50,
      }}
    >
      {/* Just Owl Head (no text) */}
      <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center relative shadow-lg">
        {/* Eyes */}
        <div className="w-3 h-3 bg-white rounded-full absolute left-4 top-5"></div>
        <div className="w-3 h-3 bg-white rounded-full absolute right-4 top-5"></div>
      </div>
    </div>
  );
}
