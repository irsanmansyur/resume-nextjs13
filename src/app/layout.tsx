import { Navbar } from "@/components/layout";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { SidebarProvider, ThemeProviderCustom } from "@/context";

const linkWeb = "https://resume-nextjs13.vercel.app";
export const metadata: Metadata = {
  title: { default: "Welcome to the Portfolio of Irsan Mansyur", template: "%s | Irsan Mansyur" },
  description:
    "I am someone who deals in the field of web programming, I am a disciplined person, hard worker, able to work on a project on time and consistently to a job that is assigned to me ",
  keywords: ["Irsan Mansyur", "Resume Irsan Mansyur", "CV Irsan Mansyur", "About Irsan Mansyur", "Portfolio irsan mansyur"],
  authors: [{ name: "Irsan Mansyur" }, { name: "Irsan Mansyur", url: linkWeb }],
  creator: "Irsan Mansyur",
  publisher: "Irsan Mansyur",
  openGraph: {
    title: "Welcome to the resume of Irsan Mansyur",
    description:
      "I am someone who deals in the field of web programming, I am a disciplined person, hard worker, able to work on a project on time and consistently to a job that is assigned to me",
    url: linkWeb,
    siteName: "Portfolio Irsan Mansyur",
    images: [
      {
        url: "/images/irsan-home1-crop.png",
        width: 800,
        height: 600,
      },
      {
        url: "images/irsan-home2-crop.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/ico/android-icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/ico/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/ico/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/ico/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    shortcut: ["/ico/ms-icon-150x150.png"],
    apple: [{ url: "/ico/apple-icon.png" }, { url: "/ico/apple-icon-180x180.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/ico/apple-icon-precomposed.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to the resume of Irsan Mansyur",
    description:
      "I am someone who deals in the field of web programming, I am a disciplined person, hard worker, able to work on a project on time and consistently to a job that is assigned to me",
    creator: "irsan mansyur",
    images: ["/images/irsan-home1-crop.png", "/images/irsan-home2-crop.png"],
  },
  bookmarks: [linkWeb],
};

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className + " bg-default text-slate-100"}>
        <SidebarProvider>
          <ThemeProviderCustom>
            <Navbar user={{ name: "Irsan", about: "" }} />
            <main className="relative">{children}</main>
            <div className="absolute h-[300px] w-[480px] -translate-x-1/2 rounded-full bg-gradient-radial from-slate-400 to-transparent blur-2xl top-0 translate-y-1/2  z-[-1]"></div>
          </ThemeProviderCustom>
        </SidebarProvider>
      </body>
    </html>
  );
}
