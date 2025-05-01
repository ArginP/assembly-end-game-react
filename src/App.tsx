import { Dispatch, SetStateAction, useState } from 'react'
import { Header } from './components/Header'
import { GameStatus } from './components/GameStatus'
import { HealthBar } from './components/HealthBar'
import { WordDisplay } from './components/WordDisplay'
import { Keyboard } from './components/Keyboard'
import { NewGameBtn } from './components/NewGameBtn'

export type GameStatusState = 'inProgress' | 'isWon' | 'isLost'

export interface GuessedLettersProps {
  currentWord: string
  guessedLetters: Array<string>
  setGuessedLetters?: Dispatch<SetStateAction<string[]>>
}

function App() {
  // const [gameStatusState, setGameStatusState] = useState<GameStatusState>('inProgress')
  // console.log(gameStatusState);

  const [currentWord, setCurrentWord] = useState<string>('реакт')
  const [guessedLetters, setGuessedLetters] = useState<Array<string>>([])
  console.log(guessedLetters);

  return (
    <>
      <main>
        <Header />
        <GameStatus />
        <HealthBar />
        <WordDisplay currentWord={currentWord} />
        <Keyboard
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          setGuessedLetters={setGuessedLetters}
        />
        <NewGameBtn />
      </main>
    </>
  )
}

export default App
