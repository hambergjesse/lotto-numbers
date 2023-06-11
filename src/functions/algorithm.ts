// Sample past EuroJackpot data
const euroJackpotData: { numbers: number[]; euroNumbers: number[] }[] = [
  { numbers: [5, 12, 23, 38, 42], euroNumbers: [4, 10] },
  { numbers: [8, 15, 22, 30, 32], euroNumbers: [2, 8] },
  { numbers: [1, 7, 15, 29, 36], euroNumbers: [3, 6] },
  { numbers: [11, 16, 21, 34, 40], euroNumbers: [5, 9] },
  { numbers: [3, 5, 12, 18, 38], euroNumbers: [1, 6] },
  { numbers: [9, 14, 26, 27, 41], euroNumbers: [1, 8] },
  { numbers: [2, 8, 24, 27, 33], euroNumbers: [1, 3] },
  { numbers: [10, 19, 21, 41, 47], euroNumbers: [1, 4] },
  { numbers: [6, 9, 18, 28, 38], euroNumbers: [3, 4] },
  { numbers: [13, 18, 24, 35, 47], euroNumbers: [3, 6] },
  { numbers: [16, 21, 23, 29, 40], euroNumbers: [5, 10] },
  { numbers: [4, 9, 12, 26, 30], euroNumbers: [3, 7] },
  { numbers: [2, 7, 13, 33, 49], euroNumbers: [5, 10] },
  { numbers: [14, 24, 26, 28, 38], euroNumbers: [1, 9] },
  { numbers: [3, 18, 19, 32, 46], euroNumbers: [3, 5] },
  { numbers: [9, 12, 15, 32, 35], euroNumbers: [4, 10] },
  { numbers: [5, 10, 15, 38, 49], euroNumbers: [2, 7] },
  { numbers: [1, 4, 6, 35, 48], euroNumbers: [4, 9] },
  { numbers: [7, 10, 16, 39, 48], euroNumbers: [2, 5] },
  { numbers: [11, 15, 19, 41, 48], euroNumbers: [3, 8] },
  { numbers: [2, 7, 10, 34, 35], euroNumbers: [3, 9] },
  { numbers: [3, 7, 15, 29, 45], euroNumbers: [2, 5] },
  { numbers: [8, 19, 20, 35, 40], euroNumbers: [4, 9] },
  { numbers: [6, 18, 28, 34, 50], euroNumbers: [3, 10] },
];

// Function to generate optimal numbers
const generateOptimalNumbers = (
  pastData: { numbers: number[]; euroNumbers: number[] }[]
): { numbers: number[]; euroNumbers: number[] } => {
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

    draw.euroNumbers.forEach((euroNumber) => {
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

  return { numbers: optimalNumbers, euroNumbers: optimalEuroNumbers };
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
