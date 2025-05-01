export const Keyboard = () => {
  const alphabet =
    'а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я'
  const currentWordArray = alphabet.split(' ')

  return (
    <section className="keyboard">
      {currentWordArray.map((letter) => {
        return (
          <button
            key={letter}
            className="key"
            style={{}}
          >
            {letter}
          </button>
        )
      })}
    </section>
  )
}
