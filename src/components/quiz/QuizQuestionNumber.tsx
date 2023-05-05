import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizQuestionNumber = () => {
  const quizData = useContext(QuizContext)
  const { quiz, currentQuestion } = quizData as QuizContextType

  return (
    <div className="bg-green-500 text-gray-50 text-xs w-20 text-center rounded-full py-1 font-semibold">
      0{currentQuestion + 1} / 0{quiz?.questions?.length}
    </div>
  )
}

export default QuizQuestionNumber
