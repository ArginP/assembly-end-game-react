import clsx from 'clsx'
import { languages } from '../assets/languages'

export const HealthBar = (props: { wrongGuesses: number }) => {
  return (
    <section className="health-bar">
      {languages.map((language, index) => {
        return (
          <span
            key={language.name}
            className={clsx('language-point', {
              lost: index < props.wrongGuesses,
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
