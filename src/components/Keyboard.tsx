import React from 'react'
import { KeyboardProps } from '../App'
import clsx from 'clsx'

export const Keyboard: React.FC<KeyboardProps> = ({
  guessedLetters,
  setGuessedLetters,
  currentWord,
  isGameOver,
}) => {
  const alphabet =
    'а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я'
  const alphabetArray = alphabet.split(' ')

  function addGuessedLetter(letter: string) {
    if (setGuessedLetters) {
      setGuessedLetters((prevLetters) =>
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      )
    }
  }

  function isChosen(letter: string) {
    return guessedLetters.includes(letter)
  }

  function isCorrect(letter: string) {
    return currentWord.includes(letter)
  }

  return (
    <section className="keyboard">
      {alphabetArray.map((letter) => {
        return (
          <button
            key={letter}
            className={clsx(
              'key',
              { chosen: isChosen(letter) },
              isChosen(letter) && { correct: isCorrect(letter) },
              isChosen(letter) && { wrong: !isCorrect(letter) }
            )}
            onClick={() => addGuessedLetter(letter)}
            disabled={isGameOver}
            aria-disabled={guessedLetters.includes(letter) || isGameOver}
            aria-label={`Letter ${letter}`}
          >
            {letter}
          </button>
        )
      })}
    </section>
  )
}
