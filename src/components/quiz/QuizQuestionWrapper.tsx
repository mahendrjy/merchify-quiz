import { ReactNode, useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

type QuizQuestionWrapperProps = {
  children: ReactNode
}

const QuizQuestionWrapper = ({
  children,
}: QuizQuestionWrapperProps) => {
  const quizData = useContext(QuizContext)
  const { results } = quizData as QuizContextType

  if (results?.showResults) return null

  return (
    <div className="flex flex-col justify-between h-148">
      {children}
    </div>
  )
}
export default QuizQuestionWrapper
