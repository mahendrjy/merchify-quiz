import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizOptions = () => {
  const quizData = useContext(QuizContext)
  const {
    quiz,
    currentQuestion,
    selectedOptionId,
    setSelectedOptionId,
  } = quizData as QuizContextType
  const question = quiz?.questions[currentQuestion]

  const handleOptionClick = (optionId: number) => {
    setSelectedOptionId(optionId)
  }

  return (
    <ul className="flex flex-col gap-3 mb-8">
      {question?.options.map((option, index) => (
        <li key={option.id}>
          <button
            onClick={() => handleOptionClick(option.id)}
            className={`${
              selectedOptionId === option.id
                ? 'bg-green-300'
                : 'bg-white'
            } hover:bg-green-100 w-full text-left text-gray-800 py-2 px-4 border border-gray-400 rounded shadow flex items-center gap-6 font-normal`}
          >
            <div className="border border-gray-800 px-2 py-0.5 text-xs">
              {index === 0
                ? 'A'
                : index === 1
                ? 'B'
                : index === 2
                ? 'C'
                : 'D'}
            </div>
            {option.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default QuizOptions
