import Navbar from "@/components/SignInNavbar";
import { Outfit } from "next/font/google";
import SignInBox from "@/components/SignInBox";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function SignIn() {
  return (
    <>
      <div className={outfit.className}>
        <Navbar {...outfit} />
      </div>
      <div className="mb-20" />
      <SignInBox />
    </>
  );
}
