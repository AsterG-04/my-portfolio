// app/layout.tsx
import "./globals.css";
import Sidebar from "./components/Sidebar"; // adjust path if needed

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio of Chaw Thiri Win",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Sidebar is outside pages */}
        <Sidebar />
        <main className="ml-0 md:ml-20">{children}</main>
      </body>
    </html>
  );
}
