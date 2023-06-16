import { useState } from "preact/hooks";
import {
  optimalEuroJackpotNumbers,
  generateOptimalNumbers,
} from "./functions/algorithm";
import { euroJackpotData } from "./data/pastResults";

import { Copyright } from "./components/Copyright";

export const App = () => {
  const [data, setData] = useState(optimalEuroJackpotNumbers);

  const { numbers, starNumbers } = data;

  const fetchNumbers = () => {
    const updatedData = generateOptimalNumbers(euroJackpotData); // Generate new optimal numbers
    setData(updatedData); // Update the state with the new numbers
  };

  return (
    <main className="app__wrapper">
      <h1>EuroJackpot Numbers</h1>
      <section className="number__container">
        <h2>normal numbers</h2>
        <ul className="lottery-numbers">
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
        <h2>star numbers</h2>
        <ul className="euro-numbers">
          {starNumbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </section>
      <button onClick={fetchNumbers}>Generate</button>
      <Copyright />
    </main>
  );
};
