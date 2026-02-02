import { Inter, DM_Serif_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif"
});

export { inter, dmSerif };
