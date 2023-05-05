import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizRatings = () => {
  const quizData = useContext(QuizContext)
  const { quiz } = quizData as QuizContextType

  return (
    <>
      <ul className="flex items-center py-1">
        {Array.from({
          length: quiz?.ratings?.stars,
        }).map((star, index) => (
          <li key={index} className="text-xs">
            ⭐
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-800 pl-1">
        {quiz?.ratings?.rating}
      </p>
    </>
  )
}

export default QuizRatings
