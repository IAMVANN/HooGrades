"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInBox() {
  const router = useRouter();
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ajsuccic54.execute-api.us-east-1.amazonaws.com/prod/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.message) {
        console.log(data.message);
        setShowErrorMessage(data.message);
      } else {
        localStorage.setItem("primaryKey", formData.email);
        localStorage.setItem("firstName", data.first_name);
        localStorage.setItem("role", data.role);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-[30%] mx-auto p-[30px] rounded-3xl shadow-md bg-gray-100">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl font-bold">Sign in to HooGrades</h2>
        <div>
          <label htmlFor="email" className="ml-[20px] block">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-[10px] rounded-3xl border border-gray-300"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="ml-[20px] block">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-[10px] rounded-3xl border border-gray-300"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="mx-auto w-[30%] p-2 rounded-3xl border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
        >
          Log in
        </button>
        <button
          type="button"
          className="mx-auto w-[40%] p-2 rounded-3xl border-none text-blue-600 bg-transparent hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
        >
          <Link href="/signup">Create Account</Link>
        </button>
        {showErrorMessage ? (
          <div className="text-red-500 text-center">{showErrorMessage}</div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
