export const getRandomNumber = (min: number, max: number): number => {
  const randomFloat = Math.random();
  const scaledRandom = randomFloat * (max - min + 1);
  const randomNumber = Math.floor(scaledRandom) + min;
  return randomNumber;
};
