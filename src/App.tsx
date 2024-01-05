import { useCallback, useEffect, useState } from "react"
import myWordList from "./answerWordList.json"
import { HangmanCanvas } from "./HangmanCanvas"
import { HangmanWord } from "./HangmanWord"
import { KeyBoard } from "./KeyBoard"

function getWord() {
  return myWordList[Math.floor(Math.random() * myWordList.length)]
}

function App() {
  const [wordToGuess, setMainWord] = useState(getWord())
  const[guessedLetters, setGuessLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter =>
    guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return

    setGuessLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])



  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keypress",handler)

    return() => {
      document.removeEventListener("keypress",handler)
    }
  },[guessedLetters]  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if(key !== "Enter") return 
      e.preventDefault()
      setGuessLetters([])
      setMainWord(getWord())
    }

    document.addEventListener("keypress",handler)

    return() => {
      document.removeEventListener("keypress",handler)
    }
  },[]  )

  return <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{ fontSize: "2rem", textAlign:"center"}}>
      {isWinner && "Winner! Congrats, refresh to play more"}
      {isLoser && "Sorry, you lose :("}
    </div>
    <HangmanCanvas numberOfGuesses={incorrectLetters.length}></HangmanCanvas>
    <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}></HangmanWord>
    <div style={{alignSelf:"stretch"}}>
      <KeyBoard
       disabled={isWinner || isLoser}
       activeLetters ={guessedLetters.filter(letter => 
        wordToGuess.includes(letter)
      )}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}

      />
    </div>
    
  </div>
}

export default App
