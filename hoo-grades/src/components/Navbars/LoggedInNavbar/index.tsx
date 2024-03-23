"use client";
import { useEffect, useState } from "react";

export default function LoggedInNavbar(props: { className: string }) {
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setFirstName(localStorage.getItem("firstName") || "");
    setLoading(false);
  }, []);
  if (loading) return null;
  return (
    <div className={`h-[100px] bg-[#0B6FFF] ${props.className} text-white`}>
      <div className="flex ml-[15%] h-[100%] mr-[15%]">
        <div className="text-4xl mt-[25px] font-bold">
          <a href="/">HooGrades</a>
        </div>
        <div className="text-xl mt-auto mb-auto ml-auto mr-5">
          hello {firstName}
        </div>
        <div className="text-xl mt-auto mb-auto">
          <a
            href="/"
            onClick={() => {
              localStorage.clear();
            }}
          >
            signout
          </a>
        </div>
      </div>
    </div>
  );
}
