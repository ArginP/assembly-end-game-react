import { useState } from 'react'
import { Header } from './components/Header'
import { GameStatus } from './components/GameStatus'
import { HealthBar } from './components/HealthBar'
import { WordDisplay } from './components/WordDisplay'

export type GameStatusState = 'inProgress' | 'isWon' | 'isLost'

function App() {
  // const [gameStatusState, setGameStatusState] = useState<GameStatusState>('inProgress')
  // console.log(gameStatusState);

  const [currentWord, setCurrentWord] = useState<string>('react')

  return (
    <>
      <main>
        <Header />
        <GameStatus />
        <HealthBar />
        <WordDisplay
          currentWord={currentWord}
        />
      </main>
    </>
  )
}

export default App
