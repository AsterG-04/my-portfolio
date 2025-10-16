"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <div className="hidden lg:flex fixed left-0 top-10 h-[70%] w-20 bg-black flex-col items-center py-12 space-y-8 z-50 rounded-tr-2xl rounded-br-2xl">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="relative group">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300
                  ${pathname === item.href
                    ? "bg-cyan-300 ring-4 ring-cyan-500 text-black font-semibold"
                    : "bg-cyan-400 hover:bg-cyan-200 text-black font-semibold"
                  }`}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                  {item.label}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ===== Mobile Hamburger Button ===== */}
      <div className="lg:hidden fixed top-4 left-4 z-50">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-black text-white shadow-md focus:outline-none"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* ===== Mobile Sidebar Drawer ===== */}
      <div
        className={`lg:hidden fixed top-5 left-0 h-full w-64 bg-black z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start py-16 px-4 space-y-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                onClick={() => setIsOpen(false)} // close sidebar when clicked
                className={`w-full px-4 py-2 rounded-md cursor-pointer transition-all duration-200
                  ${pathname === item.href
                    ? "bg-cyan-300 text-black font-semibold"
                    : "text-white hover:bg-gray-800"
                  }`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== Overlay when sidebar is open ===== */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
}
