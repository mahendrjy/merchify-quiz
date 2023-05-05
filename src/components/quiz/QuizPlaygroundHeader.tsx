import { ReactNode, useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

type QuizPlaygroundHeaderProps = {
  children: ReactNode
}

const QuizPlaygroundHeader = ({
  children,
}: QuizPlaygroundHeaderProps) => {
  const quizData = useContext(QuizContext)
  const { results } = quizData as QuizContextType

  if (results.showResults) return null

  return (
    <div className="flex items-center justify-between py-4 px-6">
      {children}
    </div>
  )
}

export default QuizPlaygroundHeader
