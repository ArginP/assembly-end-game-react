import { v4 as uuidv4 } from 'uuid'
import { WordDisplayProps } from '../App'

export const WordDisplay = (props: WordDisplayProps) => {
  const currentWordArray = props.currentWord.split('')
  const guessedLetters = props.guessedLetters

  function isRevealed(letter: string) {
    return guessedLetters.includes(letter)
  }

  return (
    <section className="word-bar">
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
