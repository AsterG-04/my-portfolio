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
      {/* Owl Robot Logo (optional) */}
      <div className="text-center mb-10"></div>

      {/* Navigation Circles */}
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <div className="relative group">
            {/* Circle */}
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 
                ${pathname === item.href
                  ? "bg-cyan-300 ring-4 ring-cyan-500 text-black font-semibold"
                  : "bg-cyan-400 hover:bg-cyan-200 text-black font-semibold"
                }`}
            >
              {/* Text (hidden until hover) */}
              <span
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm"
              >
                {item.label}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
