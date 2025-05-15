import { useGame } from "../GameContext";

export default function Scores() {
  const { highScores } = useGame();

  return (
    <>
      <div className="highscores">
        {highScores.length > 0 ? (
          highScores.map((score, index) => <li key={index}>{score}</li>)
        ) : (
          <p>No scores yet...</p>
        )}{" "}
      </div>
    </>
  );
}
