export default function Assignment(props: any) {
  return (
    <div className="w-[100%] h-[100px] border-[3px] rounded-3xl p-5 border-[#0B6FFF]">
      <div className="text-2xl">{props.courseName}</div>
      <div>Assignments: {props.numberOfAssignments}</div>
    </div>
  );
}
