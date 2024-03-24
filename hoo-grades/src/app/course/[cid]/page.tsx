"use client";
import LoggedInNavbar from "@/components/Navbars/LoggedInNavbar";
import AssignmentBox from "@/components/AssignmentBox";
import { useEffect, useState } from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function Course({ params }: { params: { cid: string } }) {
  const [assignments, setAssignments] = useState([
    { assignmentName: "", status: "", dueDate: "", assignedDate: "" },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setAssignments([
      // sample not real code
      {
        assignmentName: "Math1",
        status: "Not Submitted",
        dueDate: "2022-12-31",
        assignedDate: "2022-12-31",
      },
      {
        assignmentName: "Science",
        status: "Not Submitted",
        dueDate: "2022-12-31",
        assignedDate: "2022-12-31",
      },
      {
        assignmentName: "History",
        status: "Not Submitted",
        dueDate: "2022-12-31",
        assignedDate: "2022-12-31",
      },
    ]);
    setLoading(false);
  }, []);

  if (loading) return null;
  return (
    <main className={outfit.className}>
      <LoggedInNavbar {...outfit} />
      <div className="ml-[15%] mr-[15%] mt-5">
        <div className="text-3xl mb-10">{params.cid.replace(/%20/g, " ")}</div>
        <div className="grid grid-cols-1 gap-4">
          {assignments.map((assignment) => (
            <a
              href={`/course/${params.cid}/assignment/${assignment.assignmentName}`}
            >
              <AssignmentBox
                key={assignment.assignmentName}
                assignmentName={assignment.assignmentName}
                status={assignment.status}
                dueDate={assignment.dueDate}
                assignedDate={assignment.assignedDate}
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
