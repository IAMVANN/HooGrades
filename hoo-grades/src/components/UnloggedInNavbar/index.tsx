export default function UnloggedInNavbar(props: { className: string }) {
  return (
    <div className={`h-[100px] bg-[#0B6FFF] ${props.className} text-white`}>
      <div className="flex ml-[10%] h-[100%]">
        <div className="text-4xl mt-[25px] font-bold">
          <a href="/">HooGrades</a>
        </div>
        <div className="text-xl mt-auto mb-auto ml-auto mr-5">
          <a href="/about">about</a>
        </div>
        <div className="text-xl mt-auto mb-auto mr-5">
          <a href="/pricing">pricing</a>
        </div>
        <div className="text-xl mt-auto mb-auto mr-5">
          <a href="/contact">contact</a>
        </div>
        <div className="text-xl mt-auto mb-auto mr-[10%]">
          <a href="/signin">signin</a>
        </div>
      </div>
    </div>
  );
}
