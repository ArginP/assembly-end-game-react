import { v4 as uuidv4 } from 'uuid'

export const WordDisplay = ({currentWord}) => {
  // const currentWord = 'react'
  const currentWordArray = currentWord.split('')

  return (
    <section className="word-bar">
      {currentWordArray.map((letter) => {
        return (
          <span
            key={uuidv4()}
            className="letter"
            style={{}}
          >
            {letter}
          </span>
        );
      })}
    </section>
  );
};
