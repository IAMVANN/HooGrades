export default function SignUpBox() {
  return (
    <>
      <div className="max-w-[30%] mx-auto p-10 rounded-3xl shadow-md bg-gray-100">
        <form className="flex flex-col gap-5">
          <h2 className="text-center text-2xl font-bold">
            Sign up for HooGrades
          </h2>
          <div>
            <label htmlFor="email" className="ml-[20px] block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-[10px] rounded-3xl border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="ml-[20px] block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-[10px] rounded-3xl border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="ml-[10px] block">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full p-[10px] rounded-3xl border border-gray-300"
              required
            >
              <option value="">Select your role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button
            type="submit"
            className="mx-auto w-[40%] p-2 rounded-3xl border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
