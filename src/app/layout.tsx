import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu ({
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang = "en" className = { ubuntu.className }>
      <body>
        { children }
      </body>
    </html>
  );
}
