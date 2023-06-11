import { useEffect } from "preact/hooks";
import { optimalEuroJackpotNumbers } from "./functions/algorithm";

export const App = () => {
  const data = optimalEuroJackpotNumbers;

  useEffect(() => {
    console.log(data);
  }, []);

  const { numbers, euroNumbers } = data;

  return (
    <>
      <h1>
        {numbers.map((number) => (
          <div key={number}>{number}</div>
        ))}
      </h1>
      <h1>
        {euroNumbers.map((number) => (
          <div key={number}>{number}</div>
        ))}
      </h1>
    </>
  );
};
