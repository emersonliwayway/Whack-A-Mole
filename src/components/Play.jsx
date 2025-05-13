import { useGame } from "../GameContext";
import Game from "./Game";

export default function Play() {
  const { isPlaying, startGame, score, timer } = useGame();

  {
    if (isPlaying) {
      return (
        <>
          <div className="header">
            <div className="score">
              <h3>Score: {score}</h3>
            </div>
            <div className="time">
              <h3>Time: {timer}</h3>
            </div>
            <div className="restart">
              <button onClick={() => startGame()}>Restart</button>
            </div>
          </div>
          <Game />
        </>
      );
    }
  }
}
