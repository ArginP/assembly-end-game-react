import { NewGameBtnProps } from '../App'

export const NewGameBtn: React.FC<NewGameBtnProps> = ({
  isGameOver,
  resetGame,
}) => {
  return (
    <section className="new-game-btn-container">
      {isGameOver && (
        <button
          type="button"
          className="new-game-btn"
          onClick={resetGame}
        >
          <span>Новая игра</span>
        </button>
      )}
    </section>
  )
}
