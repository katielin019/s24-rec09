import React, { useState } from 'react'
import './Quiz.css'
import QuizQuestion from '../core/QuizQuestion';
import QuizCore from '../core/QuizCore';

interface QuizState {
  quiz: QuizCore
  currentQuestion: QuizQuestion | null
  selectedAnswer: string | null
}

const Quiz: React.FC = () => {
  const qCore: QuizCore = new QuizCore();

  const [state, setState] = useState<QuizState>({
    quiz: qCore,
    currentQuestion: qCore.getCurrentQuestion(),
    selectedAnswer: null,
  });

  const handleOptionSelect = (option: string): void => {
    setState((prevState) => ({ ...prevState, selectedAnswer: option }));
  }


  const handleButtonClick = (): void => {
    // Task3: Implement the logic for button click, such as moving to the next question.
    if (state.selectedAnswer !== null) {
      state.quiz.answerQuestion(state.selectedAnswer);
      state.quiz.nextQuestion();
      setState((prevState) => ({
        ...prevState,
        selectedAnswer: null,
        currentQuestion: state.quiz.getCurrentQuestion(),
      }));
    }
  } 

  const { quiz, selectedAnswer } = state;

  if (state.currentQuestion === null) {
    return (
      <div>
        <h2>Quiz Completed</h2>
        <p>Final Score: {quiz.getScore()} out of {quiz.getTotalQuestions()}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Quiz Question:</h2>
      <p>{state.currentQuestion.question}</p>
    
      <h3>Answer Options:</h3>
      <ul>
        {state.currentQuestion.options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={selectedAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>
      <br />
      <button onClick={ () => handleButtonClick()}>Next Question</button>
    </div>
  );
};

export default Quiz;