import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          What will you manage?
        </h1>

        <div className="space-y-4">
          {[
            "User Management",
            "Skill Categories",
            "Platform Settings",
            "Content Moderation",
            "Analytics & Reports"
          ].map((task) => (
            <label
              key={task}
              className="flex items-center space-x-3 p-3 border rounded-xl cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
            >
              <input
                type="checkbox"
                name="adminTask"
                value={task.toLowerCase().replace(/\s+/g, "-")}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-gray-700">{task}</span>
            </label>
          ))}
        </div>

        <Link
          to="/onboarding/admin/dashboard"
          className="mt-6 block w-full text-center bg-indigo-600 text-white py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
