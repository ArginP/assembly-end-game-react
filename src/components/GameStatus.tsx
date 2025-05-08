import clsx from 'clsx'

import { GameStatusProps } from '../App'
import { languages } from '../assets/languages'
import { getFarewellText } from '../assets/utils'

export const GameStatus: React.FC<GameStatusProps> = ({
  wrongGuesses,
  isGameWon,
  isGameLost,
  isLastGuessWrong,
}) => {
  const lostLanguageIndex: number = wrongGuesses > 0 ? wrongGuesses - 1 : 0

  function headingText(): string {
    if (isGameWon) return 'Победа!'
    else if (isGameLost) return 'Игра окончена!'
    else if (isLastGuessWrong)
      return getFarewellText(languages[lostLanguageIndex].name)
    else return ''
  }

  return (
    <section
      className={clsx(
        'game-status',
        { 'game-won': isGameWon },
        { 'game-lost': isGameLost },
        { 'a-language-lost': !isGameLost && isLastGuessWrong }
      )}
      aria-live="polite"
      role="status"
    >
      <h2 className="game-status-heading">{headingText()}</h2>
      <div className="game-status-text"></div>
    </section>
  )
}
