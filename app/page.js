import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz App</h1>
        <Link href="/quiz">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            Start Quiz
          </button>
        </Link>
      </div>
    </main>
  );
}
