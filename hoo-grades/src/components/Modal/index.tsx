export default function Modal() {
  return (
    <div className="max-w-[70%] mx-auto p-10 rounded-3xl">
      <form className="flex flex-col gap-5">
        <h2 className="text-center text-2xl font-bold">Create Course</h2>
        <div>
          <label htmlFor="code" className="ml-[20px] block">
            Course Code
          </label>
          <input
            type="code"
            id="code"
            name="code"
            className="w-full p-[10px] rounded-3xl border border-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="mx-auto w-[30%] p-2 rounded-3xl border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
        >
          Confirm
        </button>
        <button
          type="button"
          className="mx-auto w-[40%] p-2 rounded-3xl border-none text-blue-600 bg-transparent hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
        ></button>
      </form>
    </div>
  );
}
