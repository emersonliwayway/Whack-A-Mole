import { useGame } from "../GameContext";
import Play from "./Play";
import Scores from "./Scores";

// start menu component
export default function Start() {
  const { isPlaying, startGame } = useGame();

  {
    if (isPlaying) {
      return (
        <>
          <Play />
        </>
      );
    }
    return (
      <>
        <div className="intro">
          <p>Welcome to Whack-A-Mole!</p>
          <p>Whack a mole to earn points.</p>
          <p>How many can you get?</p>
        </div>
        <div className="start" onClick={() => startGame()}>
          <h3>Play</h3>
        </div>
        <div className="scores">
          <h2>High Scores</h2>
          <Scores />
        </div>
      </>
    );
  }
}
