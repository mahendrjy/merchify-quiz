import { useContext, useState } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizIncludes = () => {
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
    <div className="mt-4 border-b pb-2">
      <h3 className="font-bold text-md px-6">
        This Quiz Includes
      </h3>
      <ul className="flex flex-col gap-4 mt-2 px-6">
        {quiz?.includes.map((include, index) => (
          <div
            key={include.id}
            className="flex items-center gap-2"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div
              className={`bg-gray-100 w-4 h-4 rounded-full border border-gray-800 ${
                hoverStates[index] ? 'animate-bounce -mb-1' : ''
              }`}
            />
            <li className="text-sm" key={include.id}>
              {include.title}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default QuizIncludes
