import Course from "../Course";
import { useEffect, useState } from "react";
export default function CoursePage() {
  const [courses, setCourses] = useState([
    { key: 0, name: "", numberOfAssignments: 0 },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setCourses([
      // sample not real code
      { key: 1, name: "Math", numberOfAssignments: 5 },
      { key: 2, name: "Science", numberOfAssignments: 3 },
      { key: 3, name: "History", numberOfAssignments: 2 },
    ]);
    setLoading(false);
  }, []);

  if (loading) return null;
  return (
    <div>
      <div className="ml-[15%] mr-[15%] mt-5">
        <div className="text-3xl mb-10">Your Assignments</div>
        <div className="grid grid-cols-3 gap-4">
          {courses.map((course) => (
            <a href={`/assignment/${course.key}`}>
              <Course
                key={course.key}
                courseName={course.name}
                numberOfAssignments={course.numberOfAssignments}
              />
            </a>
          ))}
          <a href="/">
            <div className="w-[345px] h-[200px] rounded-3xl bg-[#0B6FFF] flex items-center justify-center text-white text-center">
              Add Course
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
