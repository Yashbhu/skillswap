import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

function Dropdown({ options, selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    });
  }, []);

  const handleGoogleConnect = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    authInstance.signIn().then(() => {
      console.log("Google Calendar connected!");
      alert("Google Calendar connected!");
      
    });
  };

  return (
    <div className="relative w-full sm:w-96 mt-6 mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-indigo-600 text-white py-4 px-5 rounded-3xl flex justify-between items-center text-xl sm:text-2xl font-bold shadow-lg"
      >
        {selected || "Select a Calendar"}
        <span className="ml-4 text-2xl sm:text-3xl">&#9662;</span>
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-white border-2 border-gray-300 rounded-3xl mt-2 shadow-xl z-10 max-h-72 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              className="px-5 py-4 hover:bg-indigo-50 cursor-pointer flex justify-between items-center text-lg sm:text-xl font-medium"
            >
              <span
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </span>

              {option === "Google Calendar" && (
                <button
                  onClick={handleGoogleConnect}
                  className="bg-green-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-2xl hover:bg-green-700 text-sm sm:text-lg font-semibold shadow-md"
                >
                  Connect
                </button>
              )}

              {option !== "Google Calendar" && (
                <button
                  onClick={() => alert(`Connect ${option} later`)}
                  className="bg-gray-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-2xl text-sm sm:text-lg font-semibold shadow-md"
                >
                  Connect
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Meet() {
  const [answer, setAnswer] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/next-page", { state: { answer, dropdownValue } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full sm:w-3/4 md:w-1/2 bg-white rounded-3xl shadow-2xl p-6 sm:p-12 text-center flex flex-col justify-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-6">
          Want to include your own calendar or integrate your calendar?
        </h1>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-12 mb-6 text-xl sm:text-2xl">
          <label className="flex items-center space-x-3 justify-center">
            <input
              type="radio"
              name="calendar"
              value="no"
              checked={answer === "no"}
              onChange={(e) => setAnswer(e.target.value)}
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span>No</span>
          </label>

          <label className="flex items-center space-x-3 justify-center">
            <input
              type="radio"
              name="calendar"
              value="yes"
              checked={answer === "yes"}
              onChange={(e) => setAnswer(e.target.value)}
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span>Yes</span>
          </label>
        </div>

        {answer === "yes" && (
          <Dropdown
            options={["Google Calendar", "Outlook", "Apple Calendar"]}
            selected={dropdownValue}
            setSelected={setDropdownValue}
          />
        )}

        <button
          onClick={handleSubmit}
          className="mt-10 w-full sm:w-1/2 bg-indigo-700 text-white py-4 px-6 rounded-3xl hover:bg-indigo-800 transition-all text-xl sm:text-2xl font-extrabold shadow-lg self-center"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
