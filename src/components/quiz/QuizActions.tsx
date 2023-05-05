import { useContext, useState } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizActions = () => {
  const quizData = useContext(QuizContext)
  const { quiz } = quizData as QuizContextType
  const [hoverStates, setHoverStates] = useState(
    quiz.actions.map(() => false)
  )

  const handleMouseEnter = (index: number) => {
    setHoverStates((prevState) => {
      const newState = [...prevState]
      newState[index] = true
      return newState
    })
  }

  const handleMouseLeave = (index: number) => {
    setHoverStates((prevState) => {
      const newState = [...prevState]
      newState[index] = false
      return newState
    })
  }

  return (
    <div className="flex flex-col gap-4 my-4">
      {quiz?.actions.map((action, index) => (
        <div
          key={action.id}
          className="text-xs flex items-center gap-2 font-semibold cursor-pointer"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div
            className={`bg-gray-100 w-3 h-3 rounded-full border border-gray-800 ${
              hoverStates[index] ? 'animate-bounce -mb-1' : ''
            }`}
          />
          {action.title}
        </div>
      ))}
    </div>
  )
}

export default QuizActions
