import { useContext } from 'react'
import {
  Quiz,
  QuizOverview,
  QuizDetails,
  QuizHero,
  QuizStart,
  QuizPlayground,
  QuizPlaygroundHeader,
  QuizQuestionNumber,
  QuizTimer,
  QuizQuestionCard,
  QuizResults,
  QuizTakeQuiz,
  QuizNext,
  QuizQuestionWrapper,
  QuizOptions,
  QuizQuestion,
} from './components/quiz'
import Header from './components/Header'
import {
  QuizContext,
  QuizContextType,
} from './contexts/QuizContext'

function App() {
  const quizData = useContext(QuizContext)
  const { startQuiz } = quizData as QuizContextType

  return (
    <div className="max-w-sm mx-auto shadow-xl min-h-screen bg-white">
      {!startQuiz && <Header />}
      <Quiz>
        <QuizOverview>
          <QuizHero />
          <QuizDetails />
          <QuizTakeQuiz />
          <QuizStart />
        </QuizOverview>

        <QuizPlayground>
          <QuizPlaygroundHeader>
            <QuizQuestionNumber />
            <QuizTimer />
          </QuizPlaygroundHeader>

          <QuizQuestionWrapper>
            <QuizQuestionCard>
              <QuizQuestion />
              <QuizOptions />
            </QuizQuestionCard>
            <QuizNext />
          </QuizQuestionWrapper>
        </QuizPlayground>

        <QuizResults />
      </Quiz>
    </div>
  )
}

export default App
