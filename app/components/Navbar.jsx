import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/"); // Redirect to the home page after sign-out
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="bg-blue-600 text-white p-4 md:p-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">Devminik</Link>
          </div>
          <div className="flex items-center">
            <ul className="hidden md:flex space-x-4">
              <li className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/about">About</Link>
              </li>
              {user && (
                <li className="cursor-pointer">
                  <Link href="/profile">Profile</Link>
                </li>
              )}
            </ul>
            {loading ? null : !user ? (
              <div className="md:flex space-x-2">
                <button
                  onClick={handleSignIn}
                  className="bg-white text-blue-600 font-semibold py-2 px-4 ml-5 rounded-md"
                >
                  Login
                </button>
                <button
                  onClick={handleSignIn}
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
                >
                  Sign up
                </button>
              </div>
            ) : (
              <div className="md:flex ml-2 space-x-2 items-center">
                <p className="hidden md:block">Welcome, {user.displayName}</p>
                <button
                  onClick={handleSignOut}
                  className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
