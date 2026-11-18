import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/components/theme-provider"
import AppShell from "./components/layout/app-shell"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MINUTE OS",
  description: "App to manage all the minutes from clients... yey!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
        attribute = "class"
        defaultTheme = "dark"
        enableSystem
        disableTransitionOnChange
      >
           <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
