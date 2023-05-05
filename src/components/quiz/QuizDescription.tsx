import { useContext, useState } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizDescription = () => {
  const quizData = useContext(QuizContext)
  const { quiz } = quizData as QuizContextType
  const [showMore, setShowMore] = useState(false)

  const truncatedDescription = quiz?.description.slice(0, 200)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <p className="text-sm">
      {showMore ? quiz.description : truncatedDescription}{' '}
      {quiz.description.length > 100 && (
        <button
          onClick={toggleShowMore}
          className="text-purple-700 text-xs font-semibold"
        >
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      )}
    </p>
  )
}

export default QuizDescription
