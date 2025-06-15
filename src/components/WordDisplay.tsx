import clsx from 'clsx'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { WordDisplayProps } from '../App'

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
            className={clsx('letter', {
              'unguessed': isGameOver && !isRevealed(letter),
              'long-word': currentWordArray.length > 8
            })}
          >
            {isRevealed(letter) ? letter : ''}
            {!isRevealed(letter) && isGameOver ? letter : ''}
          </span>
        )
      })}
    </section>
  )
}
