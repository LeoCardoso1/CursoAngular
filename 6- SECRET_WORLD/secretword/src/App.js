
import './App.css';
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import End from './components/End';

import {useCallBack, useEffect, useState} from "react";
import { wordsList } from "./data/words";



const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const[pickedWord, setPickedWord] = useState([]);
  const[pickedCategory, setPickedCategory] = useState([]);
  const[letters, setLetters] = useState([]);

  const[guessedLetters, setGuessedLetters] = useState([]);
  const[wrongLetters, setWrongLetters] = useState([]);
  const[guesses, setGuesses] = useState(5);
  const[score, setScore] = useState(0);


  const pickedWordAndCategory = () => {
    // pick a random category
    const categories = Object.keys(words);
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word = words[category][[Math.floor(Math.random() * Object.keys(category).length)]];
    return {category, word};
  }




  // start the game
  const startGame = useCallBack(() => {
    // set new chances

    setGuesses(5)

    // clear all letters
    clearLetterStates();


    setGameStage(stages[1].name);

    // pick word and category
    const {category, word} = pickedWordAndCategory();
    console.log(category, word);

    // create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);

    console.log(guessedLetters);
    
    setPickedCategory(category);
    setPickedWord(word);

    setLetters(wordLetters)

    console.log(letters)
  }, [pickedCategory])

  // process letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);

  }};

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() =>{
    if(guesses <= 0){
      clearLetterStates()

      setGameStage(stages[2].name)
    }

  }, [guesses])

  // Check win condition

  useEffect(()=> {
    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      // add score
      setScore((actualScore => actualScore + 100));

      // restarts the game
      startGame();
    }
  }, [guessedLetters])

  // restarts the game
  const retry = () => {
    setScore(0) 
    setGameStage(stages[0].name)
    setGuesses(5)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && 
      <Game 
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score} />}
      {gameStage === "end" && <End retry={retry} score={score}/>}
    </div>
  );
}

export default App;
