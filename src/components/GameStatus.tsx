import clsx from 'clsx'
import { GameStatusProps } from '../App'
import { getFarewellText } from '../assets/utils'
import { languages } from '../assets/languages'

export function GameStatus(props: GameStatusProps) {
  const lostLanguageIndex: number =
    props.wrongGuesses > 0 ? props.wrongGuesses - 1 : 0

  function headingText(): string {
    if (props.isGameWon) return 'Победа!'
    else if (props.isGameLost) return 'Игра окончена!'
    else if (props.isLastGuessWrong)
      return getFarewellText(languages[lostLanguageIndex].name)
    else return ''
  }

  return (
    <section
      className={clsx(
        'game-status',
        { 'game-won': props.isGameWon },
        { 'game-lost': props.isGameLost },
        { 'a-language-lost': !props.isGameLost && props.isLastGuessWrong }
      )}
    >
      <h2 className="game-status-heading">{headingText()}</h2>
      <div className="game-status-text"></div>
    </section>
  )
}
