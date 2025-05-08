interface NewGameBtnProps {
  isGameOver: boolean
  resetGame: () => void
}

export const NewGameBtn = (props: NewGameBtnProps) => {
  return (
    <section className="new-game-btn-container">
      {props.isGameOver && (
        <button
          type="button"
          className="new-game-btn"
          onClick={props.resetGame}
        >
          <span>Новая игра</span>
        </button>
      )}
    </section>
  )
}
