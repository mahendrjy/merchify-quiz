import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'
import Button from '../Button'

const QuizResults = () => {
  const quizData = useContext(QuizContext)
  const {
    results,
    quiz,
    setResults,
    setCorrectAnswersCount,
    setCurrentQuestion,
    setStartQuiz,
    setTakeQuiz,
    correctAnswersCount,
    setTimeLeft,
    timeLeft,
    totalTime,
  } = quizData as QuizContextType

  if (!results.showResults) return null

  const handleReset = () => {
    setResults({ value: 0, showResults: false })
    setCorrectAnswersCount(0)
    setCurrentQuestion(0)
    setStartQuiz(false)
    setTakeQuiz(false)
    setTimeLeft(60)
  }

  return (
    <div className="bg-purple-200 h-screen">
      <h1 className="text-center text-2xl font-semibold py-8">
        {quiz?.title}
      </h1>
      <div className="bg-white w-80 mx-auto h-40 rounded-md">
        <p className="text-center text-green-600 text-sm font-semibold py-4">
          You scored:
        </p>
        <h3 className="text-center text-6xl font-bold text-purple-700 pb-1">
          {results.value}%
        </h3>
        <h4 className="text-center py-2 font-bold text-sm">
          {results.value < 50
            ? 'Oh Snap, You can do better!'
            : 'Well Done!'}
        </h4>
      </div>
      <div className="flex items-center justify-between p-12 border-b">
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">Your Score</h4>
          <span className="font-bold text-purple-800 text-3xl">
            {correctAnswersCount} / {quiz?.questions?.length}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">Time Taken</h4>
          <span className="font-bold text-purple-800 text-3xl">
            {(totalTime - timeLeft).toFixed(2)}{' '}
            <span className="text-xs -ml-1">seconds</span>
          </span>
        </div>
      </div>
      <div className="bg-white h-full pt-4">
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}

export default QuizResults
