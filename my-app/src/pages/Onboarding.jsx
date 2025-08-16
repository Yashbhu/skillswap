import { Link, Outlet } from "react-router-dom";
import admin from "../assets/admin.png";
import user from "../assets/user.png";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="w-4/5 max-w-4xl bg-white rounded-3xl shadow-2xl p-12 text-center">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          What’s your role?
        </h1>
        <p className="text-gray-500 mt-4 text-lg md:text-xl">
          Choose how you want to offer or request skills on SkillSwap.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Link
            to="/onboarding/admin"
            className="block rounded-3xl border border-gray-200 p-8 hover:border-indigo-500 hover:shadow-xl transition-all group"
          >
            <img
              src={admin}
              alt="admin icon"
              className="w-24 h-24 mx-auto mb-5"
            />
            <h2 className="text-xl font-semibold text-gray-800">Admin</h2>
            <p className="text-base text-gray-500 mt-2">
              Manage the platform, users, and skill categories.
            </p>
          </Link>

          <Link
            to="/onboarding/user"
            className="block rounded-3xl border border-gray-200 p-8 hover:border-green-500 hover:shadow-xl transition-all group"
          >
            <img
              src={user}
              alt="user icon"
              className="w-24 h-24 mx-auto mb-5"
            />
            <h2 className="text-xl font-semibold text-gray-800">User</h2>
            <p className="text-base text-gray-500 mt-2">
              Offer your skills or find people to collaborate with.
            </p>
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          You can always change your role later in settings.
        </p>

        <Outlet />
      </div>
    </div>
  );
}
