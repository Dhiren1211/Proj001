import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Dhiren Kathayat — Full-Stack Developer",
  description:
    "Portfolio of Dhiren Kathayat, a full-stack developer building modern web applications, digital experiences, and scalable software solutions.",
  keywords: [
    "Dhiren Kathayat",
    "full-stack developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "software developer",
    "portfolio",
  ],
  authors: [{ name: "Dhiren Kathayat" }],
  openGraph: {
    title: "Dhiren Kathayat — Full-Stack Developer",
    description:
      "Building modern web applications and digital experiences with thoughtful design and clean engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${newsreader.variable} ${plexMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
