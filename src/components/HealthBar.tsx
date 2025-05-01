import { languages } from '../assets/languages'

export const HealthBar = () => {
  return (
    <section className="health-bar">
      {languages.map((language) => {
        return (
          <span
            key={language.name}
            className="language-point"
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
