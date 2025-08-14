import React, { useState } from "react";

const onboardingData = [
  { title: "Welcome", description: "Welcome to our app!" },
  { title: "Profile Setup", description: "Set up your profile." },
  { title: "Get Started", description: "Let's get started!" }
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Finished onboarding");
      // You can navigate to main page or dashboard here
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">{onboardingData[currentStep].title}</h2>
        <p className="mb-6">{onboardingData[currentStep].description}</p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
          onClick={nextStep}
        >
          {currentStep === onboardingData.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
