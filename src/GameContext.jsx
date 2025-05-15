import { useRef } from "react";
import { createContext, useContext, useState, useEffect } from "react";

// create context
const GameContext = createContext();

// provider
export function GameProvider({ children }) {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState();
  const [mole, setMole] = useState();
  const [highScores, setHighScores] = useState([]);
  const [timer, setTimer] = useState(15);
  const time = useRef();

  //   random number between 0-8
  const random = Math.floor(Math.random() * 9);

  // use effect to stop game when timer ends
  useEffect(() => {
    if (timer <= 0) endGame();
  }, [timer]);

  // start game
  const startGame = () => {
    setIsPlaying(true);
    setScore(0);

    //   pick random number from 0-8
    const random = Math.floor(Math.random() * 9);
    setMole(random);
    console.log(mole);

    // timer
    time.current = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
  };

  const endGame = () => {
    setIsPlaying(false);
    console.log(score);

    // sorts from highest to lowest
    const newScores = [...highScores, score].sort((a, z) => z - a);

    setHighScores([...newScores]);

    clearInterval(time.current);
    setTimer(15);
  };

  // increase score when mole is clicked
  const increaseScore = () => {
    setScore(score + 1);
    setMole(random);
  };

  //   countdowns down from 15 to 0, at 0 game ends and high score is updated

  const value = {
    isPlaying,
    startGame,
    endGame,
    score,
    timer,
    mole,
    increaseScore,
    highScores,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

// hook
export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw Error("useGame must be used with GameContext provider");
  }

  return context;
}
