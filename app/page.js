"use client";
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";

export default function Home() {
  const {  googleSignIn} = UserAuth();
  const { user } = UserAuth();
  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
        {user ? (
          <Link href="/quiz">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Start Quiz
            </button>
          </Link>
        ) : (
          <p className="text-lg text-gray-600 mb-4">
            Please{" "}
            <button
              onClick={handleSignIn}
              className="bg-blue-600 text-white font-semibold py-2 px-4 mr-1 rounded-md"
            >
              Login
            </button>
            to start the quiz.
          </p>
        )}
      </div>
    </main>
  );
}
