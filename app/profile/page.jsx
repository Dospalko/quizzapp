"use client"
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const ProfilePage = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Longer loading delay (1 second)
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
// Inside your ProfilePage component:


  return (
    <div className="p-4">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner />
        </div>
      ) : user ? (
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">
            Welcome, {user.displayName}!
          </h1>
          <p className="text-lg mb-2">You are logged in to the profile page.</p>
          <p className="text-sm text-gray-500">
            This is a protected route where you can view and edit your profile
            information.
          </p>
          {/* Add more user information here */}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-3xl font-semibold mb-4">Access Denied</p>
          <p className="text-lg mb-2">
            You must be logged in to view this page.
          </p>
          <p className="text-sm text-gray-500">
            Please log in to access your profile.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
