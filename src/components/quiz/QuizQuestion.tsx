import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

const QuizQuestion = () => {
  const quizData = useContext(QuizContext)
  const { quiz, currentQuestion } = quizData as QuizContextType
  const question = quiz?.questions[currentQuestion]

  return <h3>{question?.title}</h3>
}

export default QuizQuestion
