import { GuessedLettersProps } from '../App'

export const Keyboard = (props: GuessedLettersProps) => {
  const alphabet =
    'а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я'
  const currentWordArray = alphabet.split(' ')

  function addGuessedLetter(letter: string) {
    if (props && props.setGuessedLetters) {
      props.setGuessedLetters((prevLetters) =>
        prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      )
    }
  }

  return (
    <section className="keyboard">
      {currentWordArray.map((letter) => {
        return (
          <button
            key={letter}
            className="key"
            style={{}}
            onClick={() => addGuessedLetter(letter)}
          >
            {letter}
          </button>
        )
      })}
    </section>
  )
}
