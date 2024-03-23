import Navbar from "@/components/SignInNavbar";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function SignIn() {
  return (
    <main className={outfit.className}>
      <Navbar {...outfit} />
      <div>sign in</div>
    </main>
  );
}
