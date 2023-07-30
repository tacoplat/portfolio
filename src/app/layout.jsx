import { Inter } from "next/font/google";
import "./css-global.css";
import RootContainer from "../components/global/RootContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andy Zhen",
  description: "Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
}
