export default function Navbar(props: { className: string }) {
  return (
    <div className={`h-[100px] bg-[#0B6FFF] ${props.className} text-white`}>
      <div className="flex">
        <div className="text-4xl">HooGrades</div>
        <div>about</div>
        <div>pricing</div>
        <div>signin</div>
      </div>
    </div>
  );
}
