import { Dispatch, SetStateAction, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

import { languages } from './assets/languages'
import { getRandomWord } from './assets/utils'
import { GameStatus } from './components/GameStatus'
import { Header } from './components/Header'
import { HealthBar } from './components/HealthBar'
import { Keyboard } from './components/Keyboard'
import { NewGameBtn } from './components/NewGameBtn'
import { WordDisplay } from './components/WordDisplay'

export interface WordDisplayProps {
  currentWord: string
  guessedLetters: Array<string>
  isGameOver: boolean
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

export interface NewGameBtnProps {
  isGameOver: boolean
  resetGame: () => void
}

const App: React.FC = () => {
  const { width, height } = useWindowSize()
  const [currentWord, setCurrentWord] = useState<string>(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState<Array<string>>([])

  const resetGame = () => {
    setGuessedLetters([])
    setCurrentWord(getRandomWord())
  }

  const wrongGuesses = guessedLetters.filter(
    (guessedLetter) => !currentWord.includes(guessedLetter)
  ).length
  const isGameLost = languages.length <= wrongGuesses + 1
  const isGameWon = currentWord
    .split('')
    .every((item) => guessedLetters.includes(item))
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
          isGameOver={isGameOver}
        />
        <Keyboard
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          isGameOver={isGameOver}
          setGuessedLetters={setGuessedLetters}
        />
        <NewGameBtn
          isGameOver={isGameOver}
          resetGame={resetGame}
        />
        {isGameWon && (
          <Confetti
            width={width}
            height={height}
          />
        )}
      </main>
    </>
  )
}

export default App
