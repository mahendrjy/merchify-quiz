import { ReactNode, useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

type QuizOverviewProps = {
  children: ReactNode
}

const QuizOverview = ({ children }: QuizOverviewProps) => {
  const quizData = useContext(QuizContext)
  const { startQuiz } = quizData as QuizContextType

  if (startQuiz) return null

  return <div>{children}</div>
}

export default QuizOverview
