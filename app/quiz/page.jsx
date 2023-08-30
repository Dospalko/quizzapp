"use client"
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
    <div className="container">
      <h1>Quiz Page</h1>

      <div className="quiz-selection">
        <label>Select a Quiz:</label>
        <select
          value={activeQuiz.id}
          onChange={(e) => {
            const selectedQuizId = e.target.value;
            const newSelectedQuiz = quizzes.find((quiz) => quiz.id === selectedQuizId);
            setActiveQuiz(newSelectedQuiz);
          }}
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
            <h3>
              {" "}
              Question: {activeQuestion + 1} / {questions.length}{" "}
              <p> {questions[activeQuestion].question}</p>
            </h3>
            {questions[activeQuestion].answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={nextQuestion} className="btn">
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button onClick={nextQuestion} disabled className="btn-disabled">
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results :</h3>
            <h3>Overall {(result.score / (questions.length * 5) * 100).toFixed(2)}%</h3>

            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
