import { useState } from "react";
import { Link } from "react-router-dom";

const messages = [
  "Welcome! Let's start your journey.",
  "Every great project starts with a single step.",
  "Ready to explore something new?",
  "Success begins with a click!",
  "Your adventure starts here.",
];

export const WelcomeCard = () => {
  const [message, setMessage] = useState(() =>
    messages[Math.floor(Math.random() * messages.length)],
  );

  const handleNewMessage = () => {
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(newMessage);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100 p-4">
      <div className="max-w-md w-full bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-8 text-center space-y-6">
        {/* Logo or Icon */}
        <div className="text-4xl font-bold text-blue-500">🚀</div>

        {/* Random Message */}
        <h1 className="text-xl font-semibold">{message}</h1>

        {/* Get Started Button */}
        <Link
          to="/signup"
          className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
        >
          Get Started
        </Link>

        {/* Optional: Change Message Button */}
        <button
          onClick={handleNewMessage}
          className="mt-2 text-sm text-gray-400 hover:text-gray-200 transition"
        >
          Show another message
        </button>
      </div>
    </div>
  );
};
