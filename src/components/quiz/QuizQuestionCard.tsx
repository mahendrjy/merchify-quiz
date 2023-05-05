import { ReactNode } from 'react'

type QuizQuestionCardProps = {
  children: ReactNode
}

const QuizQuestionCard = ({
  children,
}: QuizQuestionCardProps) => {
  return (
    <div className="flex flex-col justify-between h-full bg-slate-100 px-6">
      {children}
    </div>
  )
}

export default QuizQuestionCard
