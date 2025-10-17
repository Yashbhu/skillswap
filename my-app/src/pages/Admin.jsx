import { useState } from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  const [allowRealtime, setAllowRealtime] = useState(false);

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

        <div className="mt-10 flex items-center justify-center space-x-4">
          <label className="flex items-center space-x-3 text-lg font-medium text-gray-800">
            <input
              type="checkbox"
              checked={allowRealtime}
              onChange={(e) => setAllowRealtime(e.target.checked)}
              className="h-6 w-6 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            Allow users to connect with me in real-time
          </label>
        </div>

        <Link
          to="/onboarding/admin/meet"
          state={{ allowRealtime }}
          className="mt-12 block w-1/2 mx-auto text-center bg-indigo-600 text-white py-5 rounded-2xl font-semibold text-lg hover:bg-indigo-700 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
