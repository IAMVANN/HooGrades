import Course from "../Course";
import ModalTeacher from "../ModalTeacher";
import { useEffect, useState } from "react";
export default function CoursePageTeacher() {
  const [courses, setCourses] = useState([
    { key: 0, name: "", numberOfAssignments: 0 },
  ]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setCourses([
      // sample not real code
      { key: 1, name: "Math", numberOfAssignments: 5 },
      { key: 2, name: "Science", numberOfAssignments: 3 },
      { key: 3, name: "History", numberOfAssignments: 2 },
    ]);
    setLoading(false);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          <button
            onClick={openModal}
            className="w-[345px] h-[200px] rounded-3xl bg-[#0B6FFF] flex items-center justify-center text-white text-center cursor-pointer"
          >
            Create Course
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-xl">
            <div className="text-right">
              <button onClick={closeModal} className="text-xl font-bold">
                &times;
              </button>
            </div>
            <div className="mt-2">
              <ModalTeacher />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
