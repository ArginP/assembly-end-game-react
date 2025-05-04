export function getFarewellText(language: string): string {
  const options = [
    `Прощай, ${language}`,
    `Досвидос, ${language}`,
    `Помянем ${language}`,
    `Мы будем скучать, ${language}`,
    `О нет, только не ${language}!`,
    `${language} пал смертью храбрых`,
    `${language} потерян, но не забыт`,
    `Сладких снов, ${language}`,
    `${language} ушел в закат`,
    `${language} ушел в магаз за молоком`,
    `Спасибо за теплые воспоминания, ${language}`,
    `Дело не в тебе, ${language}, дело во мне`,
    `Твой дозор закончен, ${language}`,
    `Сила течет через тебя, ${language}`,
    `${language} покинул здание`,
    `Ты был так молод, ${language}`,
    `${language} летит к свету`,
    `${language}, беспечный ангел дорог`,
  ]

  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}
