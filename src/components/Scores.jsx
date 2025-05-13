import { useGame } from "../GameContext";

export default function Scores() {
  const { score } = useGame();
  {
    if (!score) {
      return (
        <>
          <p>No scores yet...</p>
        </>
      );
    }
  }
  return <></>;
}
