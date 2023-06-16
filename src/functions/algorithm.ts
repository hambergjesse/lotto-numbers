import { euroJackpotData } from "../data/pastResults";

// Function to generate optimal numbers
export const generateOptimalNumbers = (
  pastData: { numbers: number[]; starNumbers: number[] }[]
): { numbers: number[]; starNumbers: number[] } => {
  // Calculate number frequency
  const numberFrequency: Map<number, number> = new Map();
  const euroNumberFrequency: Map<number, number> = new Map();

  pastData.forEach((draw) => {
    draw.numbers.forEach((number) => {
      if (numberFrequency.has(number)) {
        numberFrequency.set(number, numberFrequency.get(number)! + 1);
      } else {
        numberFrequency.set(number, 1);
      }
    });

    draw.starNumbers.forEach((euroNumber) => {
      if (euroNumberFrequency.has(euroNumber)) {
        euroNumberFrequency.set(
          euroNumber,
          euroNumberFrequency.get(euroNumber)! + 1
        );
      } else {
        euroNumberFrequency.set(euroNumber, 1);
      }
    });
  });

  // Sort numbers by frequency (descending order)
  const sortedNumbers: number[] = Array.from(numberFrequency.keys()).sort(
    (a, b) => numberFrequency.get(b)! - numberFrequency.get(a)!
  );

  const sortedEuroNumbers: number[] = Array.from(
    euroNumberFrequency.keys()
  ).sort((a, b) => euroNumberFrequency.get(b)! - euroNumberFrequency.get(a)!);

  // Shuffle the sorted arrays
  const shuffledNumbers: number[] = shuffleArray(sortedNumbers);
  const shuffledEuroNumbers: number[] = shuffleArray(sortedEuroNumbers);

  // Generate optimal numbers based on shuffled arrays
  const optimalNumbers: number[] = shuffledNumbers.slice(0, 5); // Select top 5 numbers
  const optimalEuroNumbers: number[] = shuffledEuroNumbers.slice(0, 2); // Select top 2 EuroNumbers

  return { numbers: optimalNumbers, starNumbers: optimalEuroNumbers };
};

// Helper function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array: number[]): number[] => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const optimalEuroJackpotNumbers =
  generateOptimalNumbers(euroJackpotData);
