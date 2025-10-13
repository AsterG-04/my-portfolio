"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-black flex flex-col items-center py-6 space-y-6">
      {/* Owl Robot Logo */}
      <div className="text-center mb-10">
        <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
          🤖
        </div>
        <p className="text-cyan-400 text-sm mt-2">Robot</p>
      </div>

      {/* Navigation Dots */}
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <div
            className={`w-16 h-16 rounded-full cursor-pointer transition-transform hover:scale-110 ${
              pathname === item.href
                ? "bg-cyan-300 ring-4 ring-cyan-500"
                : "bg-cyan-400 hover:bg-cyan-200"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}
