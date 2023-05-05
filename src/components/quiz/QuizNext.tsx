import { useContext } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'
import { calculatePercentage } from '../../utils'
import Button from '../Button'

const QuizNext = () => {
  const quizData = useContext(QuizContext)
  const {
    quiz,
    currentQuestion,
    setCurrentQuestion,
    correctAnswersCount,
    setResults,
    setCorrectAnswersCount,
    selectedOptionId,
    setSelectedOptionId,
  } = quizData as QuizContextType
  const question = quiz?.questions[currentQuestion]

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    let currentCorrectAnswersCount = correctAnswersCount
    if (question.answer === selectedOptionId) {
      currentCorrectAnswersCount++
      setCorrectAnswersCount(currentCorrectAnswersCount)
    }

    setSelectedOptionId(null)

    if (currentQuestion === quiz?.questions.length - 1) {
      setResults({
        value: calculatePercentage(
          quiz?.questions?.length,
          currentCorrectAnswersCount
        ),
        showResults: true,
      })
    }
  }

  const isButtonDisabled = selectedOptionId === null

  return (
    <div className="bg-white">
      <Button
        disabled={isButtonDisabled}
        onClick={handleNextQuestion}
        className={
          isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
        }
      >
        {currentQuestion < quiz?.questions.length - 1
          ? 'Next'
          : 'Submit'}
      </Button>
    </div>
  )
}

export default QuizNext
