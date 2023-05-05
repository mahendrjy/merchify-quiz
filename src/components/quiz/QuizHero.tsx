import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizHero = () => {
  const quizData = useContext(QuizContext)
  const { quiz } = quizData as QuizContextType

  return (
    <div className="flex justify-between h-48 pt-8 mb-4 px-8 bg-purple-50">
      <h1 className="text-purple-800 text-2xl font-bold mt-4">
        {quiz.title}
      </h1>
      <div className="bg-purple-200 w-24 h-40 rounded-t-full rounded-b-3xl hover:animate-pulse border border-purple-400 drop-shadow-sm"></div>
    </div>
  )
}

export default QuizHero
