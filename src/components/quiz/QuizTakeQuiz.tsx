import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'
import Button from '../Button'

const QuizTakeQuiz = () => {
  const quizData = useContext(QuizContext)
  const { setTakeQuiz } = quizData as QuizContextType

  return (
    <>
      <Button onClick={() => setTakeQuiz(true)}>
        Take Quiz
      </Button>
    </>
  )
}

export default QuizTakeQuiz
