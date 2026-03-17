import "./globals.css";

export const metadata = {
  title: "Job Listings",
  description: "Job listings with filtering built with Next.js and Zustand",
  icons: {
    icon: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="outer-wrapper">{children}</div>
      </body>
    </html>
  );
}
