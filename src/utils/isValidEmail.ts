export const isValidEmail = (userInput: string | undefined) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userInput) {
    return emailPattern.test(userInput);
  } else {
    return false;
  }
};
