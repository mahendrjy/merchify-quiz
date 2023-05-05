import { ReactNode } from 'react'

type QuizProps = {
  children: ReactNode
}

const Quiz = ({ children }: QuizProps) => {
  return <div className="">{children}</div>
}

export default Quiz
