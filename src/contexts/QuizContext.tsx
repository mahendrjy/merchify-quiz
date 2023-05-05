import { ReactNode, createContext, useState } from 'react'
import { quiz } from '../data'

export type QuizContextType = {
  quiz: {
    title: string
    description: string
    includes: {
      id: number
      title: string
      icon: string
    }[]
    actions: {
      id: number
      title: string
      icon: string
    }[]
    rules: {
      id: number
      title: string
      description: string
    }[]
    questions: {
      id: number
      title: string
      options: {
        id: number
        title: string
      }[]
      answer: number
    }[]
    people: { id: number; color: string; noOfPeople?: number }[]
    ratings: {
      stars: number
      rating: string
    }
  }
  takeQuiz: boolean
  startQuiz: boolean
  currentQuestion: number
  correctAnswersCount: number
  results: {
    value: number
    showResults?: boolean
  }
  setTakeQuiz: (takeQuiz: boolean) => void
  setStartQuiz: (startQuiz: boolean) => void
  setCurrentQuestion: (currentQuestion: number) => void
  setCorrectAnswersCount: (correctAnswersCount: number) => void
  setResults: (results: {
    value: number
    showResults: boolean
  }) => void
  timeLeft: number
  setTimeLeft: (timeLeft: any) => any
  totalTime: number
  selectedOptionId: number | null
  setSelectedOptionId: (selectedOptionId: any) => void
}

export const QuizContext = createContext<
  QuizContextType | undefined
>(undefined)

type QuizContextProps = {
  children: ReactNode
}

const QuizContextProvider = ({ children }: QuizContextProps) => {
  const [takeQuiz, setTakeQuiz] = useState(false)
  const [startQuiz, setStartQuiz] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswersCount, setCorrectAnswersCount] =
    useState(0)
  const [results, setResults] = useState({
    value: 0,
    showResults: false,
  })
  const totalTime = 60
  const [timeLeft, setTimeLeft] = useState(totalTime)
  const [selectedOptionId, setSelectedOptionId] = useState(null)

  return (
    <QuizContext.Provider
      value={{
        quiz,
        takeQuiz,
        startQuiz,
        setTakeQuiz,
        setStartQuiz,
        currentQuestion,
        correctAnswersCount,
        setCorrectAnswersCount,
        setCurrentQuestion,
        results,
        setResults,
        timeLeft,
        setTimeLeft,
        totalTime,
        selectedOptionId,
        setSelectedOptionId,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export default QuizContextProvider
