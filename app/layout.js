
// import { Footer } from "./components/Footer";
// import Navbar from "./components/Navbar";
// import "./globals.css";

// export const metadata = {
//   title: "My Portfolio",
//   description: "A showcase of my work and skills.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-slate-950 text-white antialiased">
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="flex-grow">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }
// layout.js
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dhrubajotee Howlader — Full-Stack Engineer",
  description: "Software Engineer with 4+ years of experience in React, Next.js, and Node.js. Based in Jyväskylä, Finland. Open to full-stack and frontend roles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 min-h-screen text-white antialiased">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}