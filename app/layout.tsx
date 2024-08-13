import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import ActivePageContextProvider from "@/context/active-page-context";
import ActiveFiltersContextProvider from "@/context/active-filters-context";

const fira_sans = Fira_Sans({
  weight: ["300", "400", "500", "700"], // Ensure spaces after commas for readability (optional)
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipit Vasdev - Project Cabinet",
  description:
    " Curated by Dipit Vasdev, this collection showcases data science, machine learning, and software development projects, neatly organized with intuitive filtering options and featuring links and previews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fira_sans.className} bg-gray-50 text-gray-950 relative !pb-0 !pr-0 !pl-0 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] 
          h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] 
          h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>
        <ActiveFiltersContextProvider>
          <ActivePageContextProvider>{children}</ActivePageContextProvider>
        </ActiveFiltersContextProvider>
      </body>
    </html>
  );
}
