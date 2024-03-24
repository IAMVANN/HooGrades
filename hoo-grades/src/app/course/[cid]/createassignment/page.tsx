"use client";
import Navbar from "@/components/Navbars/LoggedInNavbar";
import { Outfit } from "next/font/google";
import { useState } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function CreateAssignment() {
  const [questions, setQuestions] = useState([""]);
  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };
  return (
    <main className={outfit.className}>
      <Navbar {...outfit} />
      <div className="ml-[15%] mr-[15%] mt-5">
        <a href="/">
          <button
            type="button"
            className="mx-auto w-[10%] p-2 rounded-3xl border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
          >
            Cancel
          </button>
        </a>
      </div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col bg-gray-100 shadow-md rounded-3xl pt-6 pb-8 mb-4">
          <div className="mb-4 px-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 px-4"
              htmlFor="assignmentName"
            >
              Assignment Name
            </label>
            <input
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="assignmentName"
              type="text"
              placeholder="Assignment Name"
            />
          </div>
          <div className="mb-4 px-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 px-4"
              htmlFor="dueDate"
            >
              Due Date
            </label>
            <input
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dueDate"
              type="date"
            />
          </div>
          {questions.map((_, index) => (
            <div key={index} className="mb-4 px-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 px-4"
                htmlFor={`question${index}`}
              >
                {`Question ${index + 1} Rubric`}
              </label>
              <textarea
                className="shadow appearance-none border rounded-3xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id={`question${index}`}
                placeholder={`Enter rubric for question ${index + 1}`}
              />
            </div>
          ))}
          <div className="flex items-center justify-between px-4">
            <button
              onClick={addQuestion}
              className="w-[10%] p-2 rounded-3xl border-none text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 cursor-pointer"
              type="button"
            >
              Add Question
            </button>
            <button
              className="w-[10%] p-2 rounded-3xl border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
              type="button"
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
