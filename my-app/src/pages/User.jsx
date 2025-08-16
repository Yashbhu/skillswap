import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-10">
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Skills You’re Looking For
        </h1>

        <div className="space-y-4">
          {["Coding", "Design", "Marketing", "Writing", "Other"].map((skill) => (
            <label
              key={skill}
              className="flex items-center space-x-4 p-4 border rounded-2xl cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition"
            >
              <input
                type="checkbox"
                name="skill"
                value={skill.toLowerCase()}
                className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="text-gray-800 font-medium">{skill}</span>
            </label>
          ))}
        </div>

        <Link
          to="/onboarding/user/mainpage"
          className="mt-8 block w-full text-center bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:bg-indigo-700 transition"
        >
          Next
        </Link>
      </div>
    </div>
  );
}
