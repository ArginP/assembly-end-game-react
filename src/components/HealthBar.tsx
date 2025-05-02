import clsx from 'clsx'
import { languages } from '../assets/languages'

export const HealthBar = (props: { wrongGuesses: number }) => {
  return (
    <section className="health-bar">
      {languages.map((language, index) => {
        console.log(index)
        console.log(props)

        return (
          <span
            key={language.name}
            className={clsx('language-point', {
              lost: index + 1 <= props.wrongGuesses,
            })}
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </span>
        )
      })}
    </section>
  )
}
