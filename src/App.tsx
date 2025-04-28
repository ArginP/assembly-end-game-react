// import { useState } from 'react'
import { Header } from './components/Header'
import { GameStatus } from './components/GameStatus'
import { HealthBar } from './components/HealthBar'

export type GameStatusState = 'inProgress' | 'isWon' | 'isLost'

function App() {
  // [gameStatusState, setGameStatusState] = useState<GameStatusState>('inProgress')
  // console.log(gameStatusState);

  return (
    <>
      <main>
        <Header />
        <GameStatus />
        <HealthBar />
      </main>
    </>
  )
}

export default App
