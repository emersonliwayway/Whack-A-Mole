import { useGame } from "../GameContext";
import Game from "./Game";

export default function Play() {
  const { isPlaying, score, timer, endGame } = useGame();

  {
    if (isPlaying) {
      return (
        <>
          <div className="header">
            <div className="time">
              <h3>Time: {timer}</h3>
            </div>
            <div className="score">
              <h3>Score: {score}</h3>
            </div>

            <div className="restart" onClick={() => endGame()}>
              <h3>Restart</h3>
            </div>
          </div>
          <Game />
        </>
      );
    }
  }
}
