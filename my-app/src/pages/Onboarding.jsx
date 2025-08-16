import { Link } from "react-router-dom";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 text-center">
        
        <h1 className="text-3xl font-semibold text-gray-900">
          What’s your role?
        </h1>
        <p className="text-gray-500 mt-2">
          Choose how you want to offer or request skills on SkillSwap.
        </p>

        
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            to="admin"
            className="block rounded-xl border border-gray-200 p-6 hover:border-indigo-500 hover:shadow-md transition-all group"
          >
            <div className="text-indigo-500 group-hover:text-indigo-600 text-4xl mb-3">
              👨‍💼
            </div>
            <h2 className="text-lg font-medium text-gray-800">Admin</h2>
            <p className="text-sm text-gray-500 mt-1">
              Manage the platform, users, and skill categories.
            </p>
          </Link>

          <Link
            to="user"
            className="block rounded-xl border border-gray-200 p-6 hover:border-green-500 hover:shadow-md transition-all group"
          >
            <div className="text-green-500 group-hover:text-green-600 text-4xl mb-3">
              🙋‍♂️
            </div>
            <h2 className="text-lg font-medium text-gray-800">User</h2>
            <p className="text-sm text-gray-500 mt-1">
              Offer your skills or find people to collaborate with.
            </p>
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          You can always change your role later in settings.
        </p>
      </div>
    </div>
  );
}
