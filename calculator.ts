type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation): number => {
  switch (op) {
    case 'add':
      return a + b;
    case 'divide':
      if (b === 0) throw new Error("Can't divide by zero!");
      return a / b;
    case 'multiply':
      return a * b;
    default:
      throw new Error('Unrecognized operation');
  }
};

try {
  console.log(calculator(1, 5, 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: ';
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
