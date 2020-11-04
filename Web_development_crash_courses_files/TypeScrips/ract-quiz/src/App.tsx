import React, { useState } from "react";
import { fetchQuestions } from "./api/API";

//Components
import QuestionCard from "./components/QuestionCard";

//types
import { QuestionState, Difficulty } from "./api/API";

//styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswers] = useState<AnswerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  // console.log(questions);
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      //users answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      //save answer in the Array for user Answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //Move onto Next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Trivia quiz!</h1>
        {gameOver || userAnswer.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            start
          </button>
        ) : null}
        {!gameOver ? <p className="score">score: {score} </p> : null}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
          !loading &&
          userAnswer.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
      </Wrapper>
    </>
  );
};

export default App;
