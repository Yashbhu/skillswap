import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function DetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isLogin =
      formData.name &&
      formData.email &&
      formData.password &&
      formData.confirmPassword;

    if (isLogin) {
      navigate("/onboarding");
    } else {
      alert("Please fill all fields correctly!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
        
       
        <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
      
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Welcome to <span className="text-indigo-600">SkillSwap</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Create your account and start your journey 
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-1 w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="mt-1 w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="mt-1 w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        
        <div className="flex w-full lg:w-1/2 relative">
          
          
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/70 via-purple-700/60 to-transparent"></div>
        
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-3xl font-bold">Level Up Your Skills</h2>
            <p className="text-lg text-gray-200 mt-2">
              Join the community of learners 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
