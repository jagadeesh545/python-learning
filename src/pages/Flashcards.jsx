import { courseData } from '../data'
import { useState } from 'react'

export default function Flashcards({ darkMode }) {
  const cards = courseData.flashcards
  const [currentCard, setCurrentCard] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const card = cards[currentCard] || {}

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1)
      setShowAnswer(false)
    }
  }

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
      setShowAnswer(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Flashcards</h2>
      <div className="max-w-2xl">
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className={`cursor-pointer p-8 rounded-lg text-center min-h-96 flex flex-col justify-center items-center transition-all ${
            darkMode
              ? 'bg-gray-800 border-2 border-gray-700 hover:border-blue-500'
              : 'bg-white border-2 border-gray-200 hover:border-blue-400'
          }`}
        >
          <div className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
            {showAnswer ? 'Answer:' : 'Question:'}
          </div>
          <div className="text-2xl font-semibold my-4">
            {showAnswer ? card.answer : card.question}
          </div>
          <div className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Click to reveal
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={prevCard}
            disabled={currentCard === 0}
            className={`px-4 py-2 rounded ${
              currentCard === 0
                ? darkMode
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            ← Previous
          </button>

          <span className={`font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {currentCard + 1} / {cards.length}
          </span>

          <button
            onClick={nextCard}
            disabled={currentCard === cards.length - 1}
            className={`px-4 py-2 rounded ${
              currentCard === cards.length - 1
                ? darkMode
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : darkMode
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

