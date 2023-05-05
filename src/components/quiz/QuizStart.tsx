import { useContext, useEffect } from 'react'
import {
  QuizContext,
  QuizContextType,
} from '../../contexts/QuizContext'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../Button'

const QuizStart = () => {
  const quizData = useContext(QuizContext)
  const { quiz, takeQuiz, setStartQuiz, setTakeQuiz } =
    quizData as QuizContextType
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(takeQuiz)
  }, [takeQuiz])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen(false)
          setTakeQuiz(false)
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="absolute inset-0">
            <div className="pointer-events-none fixed inset-x-0 bottom-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm h-128 mx-auto">
                  <div className="flex h-full flex-col bg-white py-6 shadow-xl rounded-t-xl">
                    <div className="px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-semibold leading-6 text-gray-900">
                          Quiz Rules
                        </Dialog.Title>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-6">
                      <ul className="flex flex-col gap-6">
                        {quiz?.rules.map((rule) => (
                          <div
                            key={rule.id}
                            className="flex items-center gap-6"
                          >
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 border rounded-full">
                              <div className="border-2 w-8 h-8 border-purple-800 rounded-full" />
                            </div>
                            <li key={rule.id} className="w-64">
                              <div className="font-semibold text-md">
                                {rule.title}
                              </div>
                              <div className="text-base">
                                {rule.description}
                              </div>
                            </li>
                          </div>
                        ))}
                      </ul>
                      <div className="bg-slate-100 w-64 rounded-md mx-auto text-xs py-1 px-3 my-6 flex items-center gap-2 text-slate-600">
                        <div className="w-3 h-3 bg-purple-800 rounded-full"></div>
                        This quiz can only be attempted once.
                      </div>
                      <Button onClick={() => setStartQuiz(true)}>
                        Start Quiz
                      </Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default QuizStart
