import { v4 as uuidv4 } from 'uuid'
import { WordDisplayProps } from '../App'
import clsx from 'clsx'
import React from 'react'

export const WordDisplay: React.FC<WordDisplayProps> = ({
  currentWord,
  guessedLetters,
  isGameOver,
}) => {
  const currentWordArray = currentWord.split('')

  function isRevealed(letter: string) {
    return guessedLetters.includes(letter)
  }

  return (
    <section
      className="word-bar"
      aria-live="polite"
      role="status"
    >
      {currentWordArray.map((letter) => {
        return (
          <span
            key={uuidv4()}
            className="letter"
          >
            {isRevealed(letter) ? letter : ''}
          </span>
        )
      })}
    </section>
  )
}
