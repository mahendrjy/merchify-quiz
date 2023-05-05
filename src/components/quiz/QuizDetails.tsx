import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'
import QuizActions from './QuizActions'
import QuizDescription from './QuizDescription'
import QuizIncludes from './QuizIncludes'
import QuizRatings from './QuizRatings'
import QuizPeople from './QuizPeople'

const QuizDetails = () => {
  const quizData = useContext(QuizContext)
  const { quiz } = quizData as QuizContextType

  return (
    <>
      <div className="px-6">
        <h1 className="text-xl font-bold">{quiz?.title}</h1>
        <div className="flex justify-between items-center">
          <QuizActions />
          <div>
            <QuizPeople />
            <QuizRatings />
          </div>
        </div>
        <QuizDescription />
      </div>
      <QuizIncludes />
    </>
  )
}

export default QuizDetails
