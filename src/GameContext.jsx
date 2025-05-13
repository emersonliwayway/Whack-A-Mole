import { createContext, useContext, useState } from "react";

// create context
const GameContext = createContext();

// provider
export function GameProvider({ children }) {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState();
  const [timer, setTimer] = useState();
  const [mole, setMole] = useState();

  //   random number between 0-8
  const random = Math.floor(Math.random() * 9);

  // start game
  const startGame = () => {
    setIsPlaying(!isPlaying);
    setScore(0);
    setTimer(15);

    //   pick random number from 0-8
    const random = Math.floor(Math.random() * 9);
    setMole(random);
    console.log(mole);
  };

  // increase score when mole is clicked
  const increaseScore = () => {
    setScore(score + 1);
    setMole(random);
  };

  const value = { isPlaying, startGame, score, timer, mole, increaseScore };
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
