"use client";
import React, { useState } from "react";

export default function ModalTeacher() {
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    course_name: "",
    description: "",
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
    const response = await fetch(
      "https://ajsuccic54.execute-api.us-east-1.amazonaws.com/prod/addCourse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("primaryKey"),
          course_name: formData.course_name,
          description: formData.description,
        }),
      }
    );
    const data = await response.json();
    if (data.message) {
      setShowErrorMessage(data.message);
    } else {
      console.log("success");
      location.reload();
    }
  };

  return (
    <div className="max-w-[70%] mx-auto p-10 rounded-3xl">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl font-bold">Create Course</h2>
        <div>
          <label htmlFor="code" className="ml-[20px] block">
            Course Code
          </label>
          <input
            type="code"
            id="course_name"
            name="course_name"
            className="w-full p-[10px] rounded-3xl border border-gray-300"
            value={formData.course_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="ml-[20px] block">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full h-[150px] p-[10px] rounded-3xl border border-gray-300"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="mx-auto w-[30%] p-2 rounded-3xl border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
        >
          Confirm
        </button>
      </form>
      {showErrorMessage ? (
        <div className="text-red-500 text-center mt-5">{showErrorMessage}</div>
      ) : (
        ""
      )}
    </div>
  );
}
