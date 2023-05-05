import { ReactNode, useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

type QuizPlaygroundProps = {
  children: ReactNode
}

const QuizPlayground = ({ children }: QuizPlaygroundProps) => {
  const quizData = useContext(QuizContext)
  const { startQuiz } = quizData as QuizContextType

  if (!startQuiz) return null

  return <div className="bg-slate-100">{children}</div>
}

export default QuizPlayground
