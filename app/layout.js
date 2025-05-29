import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ai4U - AI for your career",
  description: "AI for your career. It helps you to build your resume, cover letter and more.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressContentEditableWarning>
        <body
          className={`${inter.className}`}
        ><ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            {/* Header  */}
            <Header></Header>
            {/* Main */}
            <main className="min-h-screen"> {children} </main>
            {/* Footer */}
            <footer className="bg-muted/50 py-10">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="">
                  © {new Date().getFullYear()} Tusher Bhakta. All rights reserved.
                </p>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
