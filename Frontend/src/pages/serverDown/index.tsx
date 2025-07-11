import { useState } from "react";
import { Navigate } from "react-router-dom";
import { RefreshCcw } from "lucide-react";

const ServerDown = () => {
  const [isHealthy, setIsHealthy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkHealth = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/health", {
        method: "GET",
        credentials: "include",
      });
      if (response.status === 200) {
        setIsHealthy(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isHealthy) {
    return <Navigate to="/app" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center  space-y-6 lg:w-1/2">
            <img
              src="./logo.svg"
              alt="logo"
              className="w-56 lg:w-80 transition-transform hover:scale-105"
            />
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                We'll be back shortly
              </h1>

              <p className="text-center text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                Our servers are taking a quick break. We're working hard to get
                everything back up and running.
              </p>
            </div>

            <button
              onClick={checkHealth}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-3 bg-second hover:bg-slate-800
                       text-white rounded-lg font-medium transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCcw
                className={`h-5 w-5 ${isLoading ? "animate-spin" : ""}`}
              />
              {isLoading ? "Checking Status..." : "Retry Connection"}
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="./serverError.svg"
                alt="Server Error Illustration"
                className="w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerDown;
