import { useContext } from 'react'

import { useEffect } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'
import { calculatePercentage } from '../../utils'

const QuizTimer = () => {
  const quizData = useContext(QuizContext)
  const {
    quiz,
    timeLeft,
    setTimeLeft,
    setResults,
    correctAnswersCount,
  } = quizData as QuizContextType

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime: number) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [setTimeLeft])

  useEffect(() => {
    if (timeLeft === 0) {
      setResults({
        value: calculatePercentage(
          quiz?.questions?.length,
          correctAnswersCount
        ),
        showResults: true,
      })
    }
  }, [
    correctAnswersCount,
    quiz?.questions?.length,
    setResults,
    timeLeft,
  ])

  const formattedTime = `${Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0')}:${(timeLeft % 60)
    .toString()
    .padStart(2, '0')}`

  return <div>{formattedTime}</div>
}

export default QuizTimer
