"use client";
import { useEffect, useState } from "react";
import UnloggedInNavbar from "@/components/Navbars/UnloggedInNavbar";
import LoggedInNavbar from "@/components/Navbars/LoggedInNavbar";
import CoursePage from "@/components/CoursePage";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
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
}
