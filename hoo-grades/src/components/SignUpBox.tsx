export default function SignUpBox() {
  return (
    <>
      <div className="max-w-sm mx-auto p-5 rounded-lg shadow-md bg-gray-100">
        <form className="flex flex-col gap-5">
          <h2 className="text-center text-lg font-bold">
            Sign up for HooGrades
          </h2>
          <div>
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="mb-2 block">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="w-full p-3 rounded-md border border-gray-300"
              required
            >
              <option value="">Select your role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button
            type="submit"
            className="p-2 rounded-md border-none text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
          >
            Log in
          </button>
          <button
            type="button"
            className="p-2 rounded-md border-none text-blue-600 bg-transparent hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
