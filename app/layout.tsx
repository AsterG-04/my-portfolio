import "./globals.css";
import Sidebar from "./components/Sidebar";
import Owl from "./components/Owl";

export const metadata = {
  title: "Portfolio",
  description: "My Futuristic Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Sidebar />
        
        <main className="ml-20">{children}</main>
      </body>
    </html>
  );
}
