"use client";
import React, { useState, useEffect } from "react";
import { quizzes } from "../data.js";

const Page = () => {
  const [activeQuiz, setActiveQuiz] = useState(quizzes[0]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = activeQuiz;

  useEffect(() => {
    // Reset the quiz state when the active quiz changes
    setActiveQuestion(0);
    setSelectedAnswer("");
    setChecked(false);
    setSelectedAnswerIndex(null);
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  }, [activeQuiz]);

  const switchQuiz = (quiz) => {
    setActiveQuiz(quiz);
  };

  //kontrola otazkzy
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === questions[activeQuestion].correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }

    setChecked(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Quiz Page</h1>

      <div className="quiz-selection mb-4">
        <label className="block mb-2 text-blue-600">Select a Quiz:</label>
        <select
          value={activeQuiz.id}
          onChange={(e) => {
            const selectedQuizId = e.target.value;
            const newSelectedQuiz = quizzes.find(
              (quiz) => quiz.id === selectedQuizId
            );
            setActiveQuiz(newSelectedQuiz);
          }}
          className="border p-2 rounded-md w-full"
        >
          {quizzes.map((quiz) => (
            <option key={quiz.id} value={quiz.id}>
              {quiz.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              Question: {activeQuestion + 1} / {questions.length}
            </h3>
            <p className="mb-4">{questions[activeQuestion].question}</p>
            {questions[activeQuestion].answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={`py-2 px-4 rounded-md cursor-pointer mb-2 ${
                  selectedAnswerIndex === idx
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {answer}
              </li>
            ))}
            {checked ? (
              <button
                onClick={nextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled
                className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-md mt-4 cursor-not-allowed"
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              Results :
            </h3>
            <h3 className="text-lg font-semibold text-blue-600">
              Overall{" "}
              {((result.score / (questions.length * 5)) * 100).toFixed(2)}%
            </h3>

            <p className="mb-2">
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className="mb-2">
              Total Score: <span>{result.score}</span>
            </p>
            <p className="mb-2">
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className="mb-4">
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
