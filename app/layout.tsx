import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import Script from "next/script" // ✅ import Script

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cubiq Network - The first mobile-native Layer 1 blockchain with zero-knowledge proofs",
  description: "Official website for Cubiq Network - The first mobile-native Layer 1 blockchain with zero-knowledge proofs.",
  generator: "v0.dev",
  metadataBase: new URL("https://www.cubiq.website"),
  keywords: ["Cubiq Network", "zkEVM", "Mobile Blockchain", "Cubiq Docs"],
  openGraph: {
    title: "Cubiq Network Docs",
    description: "Build on the first zkEVM Mobile Blockchain - Cubiq.",
    url: "https://www.cubiq.website",
    siteName: "Cubiq Network",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cubiq Network",
    description: "The official website for Cubiq - The first mobile-native Layer 1 blockchain with zero-knowledge proofs",
    site: "@cubiqchain",
    creator: "@cubiqchain",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Load reCAPTCHA v3 globally */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=6LcNAZQrAAAAAGADGu-W4-QmbBKActqhSmCKVYbu`}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.className} pt-20`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
