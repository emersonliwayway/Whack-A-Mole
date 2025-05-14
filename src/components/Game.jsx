import { useGame } from "../GameContext";

export default function Game() {
  const { mole, increaseScore } = useGame();

  return (
    <>
      <div className="container">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className={`hole ${mole === index ? "mole" : ""}`}
            onClick={mole === index ? increaseScore : undefined}
          ></div>
        ))}
      </div>
    </>
  );
}
