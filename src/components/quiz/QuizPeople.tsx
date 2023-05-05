import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizPeople = () => {
  const quizData = useContext(QuizContext)
  const { quiz } = quizData as QuizContextType

  return (
    <div className="flex flex-col">
      <ul className="flex items-center">
        {quiz.people.map((person) =>
          person?.noOfPeople ? (
            <li
              key={person.id}
              className={`w-9 h-6 rounded-full border-2 border-white -mr-2 text-xs flex items-center justify-center font-bold pb-0.5 hover:animate-bounce cursor-pointer ${person.color}`}
            >
              +{person.noOfPeople}
            </li>
          ) : (
            <li
              key={person.id}
              className={`w-6 h-6 rounded-full border-2 border-white -mr-2 hover:animate-bounce cursor-pointer ${person.color}`}
            />
          )
        )}
      </ul>
      <p className="text-xs mt-1 text-gray-800 pl-1">
        people enrolled
      </p>
    </div>
  )
}

export default QuizPeople
