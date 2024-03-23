<<<<<<< HEAD
import Navbar from "@/components/UnloggedInNavbar";
import Footer from "@/components/footer";
=======
"use client";
import { useEffect, useState } from "react";
import UnloggedInNavbar from "@/components/Navbars/UnloggedInNavbar";
import LoggedInNavbar from "@/components/Navbars/LoggedInNavbar";
import CoursePage from "@/components/CoursePage";
>>>>>>> f9ae85b257ae0b465d4adf692ef3e32bbf472425
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
<<<<<<< HEAD
  return (
    <div className="flex flex-col min-h-screen">
      <main className={`flex-grow ${outfit.className}`}>
        <Navbar {...outfit} />
      </main>
      <Footer />
    </div>
  );
=======
  const [primaryKey, setPrimaryKey] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setPrimaryKey(localStorage.getItem("primaryKey") || "");
    setLoading(false);
  }, []);
  if (loading) return null;
  if (primaryKey) {
    return (
      <main className={outfit.className}>
        <LoggedInNavbar {...outfit} />
        <CoursePage />
      </main>
    );
  } else {
    return (
      <main className={outfit.className}>
        <UnloggedInNavbar {...outfit} />
      </main>
    );
  }
>>>>>>> f9ae85b257ae0b465d4adf692ef3e32bbf472425
}
