import { Dispatch, SetStateAction, useState } from 'react'
import { Header } from './components/Header'
import { GameStatus } from './components/GameStatus'
import { HealthBar } from './components/HealthBar'
import { WordDisplay } from './components/WordDisplay'
import { Keyboard } from './components/Keyboard'
import { NewGameBtn } from './components/NewGameBtn'
import { languages } from './assets/languages'

export interface WordDisplayProps {
  currentWord: string
  guessedLetters: Array<string>
}

export interface KeyboardProps extends WordDisplayProps {
  currentWord: string
  guessedLetters: Array<string>
  setGuessedLetters?: Dispatch<SetStateAction<string[]>>
}

export interface GameStatusProps {
  isGameLost: boolean
  isGameWon: boolean
  wrongGuesses: number
  isLastGuessWrong: boolean
}

function App() {
  const [currentWord, setCurrentWord] = useState<string>('реакт')
  const [guessedLetters, setGuessedLetters] = useState<Array<string>>([])

  const wrongGuesses = guessedLetters.filter(
    (guessedLetter) => !currentWord.includes(guessedLetter)
  ).length
  const isGameLost = languages.length <= wrongGuesses + 1
  const isGameWon = guessedLetters.length - wrongGuesses >= currentWord.length
  const isGameOver = isGameLost || isGameWon
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessWrong =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter) ? true : false

  return (
    <>
      <main>
        <Header />
        <GameStatus
          isGameLost={isGameLost}
          isGameWon={isGameWon}
          wrongGuesses={wrongGuesses}
          isLastGuessWrong={isLastGuessWrong}
        />
        <HealthBar wrongGuesses={wrongGuesses} />
        <WordDisplay
          currentWord={currentWord}
          guessedLetters={guessedLetters}
        />
        <Keyboard
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
        />
        <NewGameBtn isGameOver={isGameOver} />
      </main>
    </>
  )
}

export default App
