import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "wouter";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;