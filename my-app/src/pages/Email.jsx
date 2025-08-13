import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
//defined navigate to programmatically change the route
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const isLogin = formData.email && formData.password && formData.name && formData.password===confirmPassword// simple validation
    if (isLogin) {
      navigate("/onboarding"); // redirect after submission
    } else {
      alert("Please fill all fields correctly!");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96 p-6 border rounded shadow">
        <h2 className="text-xl font-bold">Enter Your Details</h2>

        <label>Name</label>
        <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" required className="border p-2 rounded" />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} placeholder="Enter your email" required className="border p-2 rounded" />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" required className="border p-2 rounded" />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm your password" required className="border p-2 rounded" />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
