import React from "react";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "per month",
      features: ["Basic Features", "Email Support", "Single User"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      features: ["All Starter Features", "Priority Support", "Up to 5 Users"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Let's Talk",
      features: [
        "All Pro Features",
        "Dedicated Manager",
        "Unlimited Users",
        "Custom Integrations",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            SkillSwap Pricing Plans
          </h1>
          <p className="text-xl text-gray-500 mt-4">
            Choose the plan that fits your needs. Upgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl shadow-md p-12 bg-white border transition transform hover:-translate-y-2 hover:shadow-2xl ${
                plan.highlight ? "border-indigo-600 scale-105" : "border-gray-200"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900">{plan.name}</h2>
              <p className="mt-6 text-5xl font-extrabold text-gray-900">
                {plan.price}{" "}
                <span className="text-2xl font-medium text-gray-500">{plan.period}</span>
              </p>

              <ul className="mt-8 space-y-4 text-gray-700 text-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-indigo-500 mr-3 text-2xl">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-4 rounded-2xl font-semibold text-lg transition ${
                  plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.highlight ? "Get Started" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
