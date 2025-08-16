import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-4/5 max-w-5xl bg-white shadow-2xl rounded-3xl p-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10">
          What can you do as an Admin?
        </h1>

        <div className="space-y-6">
          {["Coding", "Artist", "Tutor", "Gooning", "Yapping"].map((task) => (
            <label
              key={task}
              className="flex items-center space-x-5 p-5 border rounded-2xl cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
            >
              <input
                type="checkbox"
                name="adminTask"
                value={task.toLowerCase().replace(/\s+/g, "-")}
                className="h-8 w-8 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-xl font-medium text-gray-800">{task}</span>
            </label>
          ))}
        </div>

        <Link
          to="/onboarding/admin/dashboard"
          className="mt-12 block w-1/2 mx-auto text-center bg-indigo-600 text-white py-5 rounded-2xl font-semibold text-lg hover:bg-indigo-700 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
