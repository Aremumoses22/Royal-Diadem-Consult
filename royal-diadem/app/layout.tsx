import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { PageTransition } from "@/components/animation/PageTransition";
import { JsonLd } from "@/components/shared/JsonLd";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { SearchOverlay } from "@/components/shared/SearchOverlay";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royaldiadem.com"),
  title: {
    default: "Royal Diadem Consult | Architecture · Design · Vision",
    template: "%s | Royal Diadem Consult",
  },
  description:
    "Royal Diadem Consult is a world-class architecture studio creating timeless buildings that elevate the human experience. Based in Nigeria.",
  keywords: [
    "architecture",
    "architect Nigeria",
    "Lagos architect",
    "building design",
    "residential architecture",
    "commercial architecture",
    "Royal Diadem Consult",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Royal Diadem Consult",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <JsonLd type="Organization" />
        <JsonLd type="LocalBusiness" />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main id="main-content">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <WhatsAppButton />
            <SearchOverlay />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
