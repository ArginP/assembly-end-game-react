// import type { GameStatusState } from '../App'

import clsx from 'clsx'
import { GameStatusProps } from '../App'

export function GameStatus(props: GameStatusProps) {
  return (
    <section
      className={clsx(
        'game-status',
        { 'game-won': props.isGameWon },
        { 'game-lost': props.isGameLost }
      )}
    >
      <h2 className="game-status-heading"></h2>
      <div className="game-status-text"></div>
    </section>
  )
}
