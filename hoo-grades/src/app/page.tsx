import Navbar from "@/components/UnloggedInNavbar";
import Footer from "@/components/footer";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className={`flex-grow ${outfit.className}`}>
        <Navbar {...outfit} />
      </main>
      <Footer />
    </div>
  );
}
