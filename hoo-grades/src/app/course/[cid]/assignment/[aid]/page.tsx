"use client";
import { Outfit } from "next/font/google";
import LoggedInNavbar from "@/components/Navbars/LoggedInNavbar";
import { useEffect, useState } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function Assignment({
  params,
}: {
  params: { aid: string; cid: string };
}) {
  const [questions, setQuestions] = useState([
    {
      question_number: "",
      Points: "",
      rubric: "",
      content: "",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [assignmentName, setAssignmentName] = useState("");
  const [status, setStatus] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const retrieve = async () => {
      try {
        const response = await fetch(
          "https://ajsuccic54.execute-api.us-east-1.amazonaws.com/prod/getQuestionsFromAssignment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              assignment_id: params.aid.replace(/%20/g, " "),
            }),
          }
        );
        const data = await response.json();
        if (data.message) {
          console.log(data.message);
        }
        setQuestions(data.questions);
        setAssignmentName(data.assignment_name);
        setStatus(data.status);
        setFeedback(data.feedback);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    retrieve();
  }, []);

  return (
    <main className={outfit.className}>
      <LoggedInNavbar {...outfit} />
      <div className="ml-[15%] mr-[15%] mt-5">
        <a href={`/course/${params.cid}`}>
          <button
            type="button"
            className="mx-auto w-[10%] p-2 rounded-3xl border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
          >
            Back
          </button>
        </a>
        <div className="mt-10 text-3xl">{assignmentName}</div>
        <div>
          {questions?.map((question) => (
            <div>
              <div>{question.question_number}</div>
              <div>{question.Points}</div>
              <div>{question.rubric}</div>
              <div>{question.content}</div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </main>
  );
}
