import { useState } from "preact/hooks";
import {
  optimalEuroJackpotNumbers,
  generateOptimalNumbers,
  euroJackpotData,
} from "./functions/algorithm";

export const App = () => {
  const [data, setData] = useState(optimalEuroJackpotNumbers);

  const { numbers, euroNumbers } = data;

  const fetchNumber = () => {
    const updatedData = generateOptimalNumbers(euroJackpotData); // Generate new optimal numbers
    setData(updatedData); // Update the state with the new numbers
  };

  return (
    <main className="app__wrapper">
      <h1>EuroJackpot Numbers</h1>
      <section className="number__container">
        <ul className="lottery-numbers">
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
        <ul className="euro-numbers">
          {euroNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </section>
      <button onClick={fetchNumber}>Generate numbers</button>
    </main>
  );
};
