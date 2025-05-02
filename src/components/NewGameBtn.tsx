export const NewGameBtn = (props: { isGameOver: boolean }) => {
  return (
    <section className="new-game-btn-container">
      {props.isGameOver && (
        <button
          type="button"
          className="new-game-btn"
        >
          <span>Новая игра</span>
        </button>
      )}
    </section>
  )
}
