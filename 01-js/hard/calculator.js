class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this;
  }

  subtract(num) {
    this.result -= num;
    return this;
  }

  multiply(num) {
    this.result *= num;
    return this;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Division by zero is not allowed.");
    }

    this.result /= num;
    return this;
  }

  clear() {
    this.result = 0;
    return this;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const sanitizedExpression = expression.replace(/\s+/g, ""); // Remove all spaces from the expression

    const numberRegex = /[+\-]?\d+(\.\d+)?/g; // Matches numbers (integers or floating-point) with optional leading "+" or "-"
    const operatorRegex = /[+\-*/]/g; // Matches arithmetic operators: +, -, *, /
    const parenthesesRegex = /[()]/g; // Matches parentheses: (, )

    const numbers = sanitizedExpression.match(numberRegex);
    const operators = sanitizedExpression.match(operatorRegex);
    const parentheses = sanitizedExpression.match(parenthesesRegex);

    if (!numbers || !operators || !parentheses) {
      throw new Error("Invalid expression.");
    }

    const numbersStack = [];
    const operatorsStack = [];
    const parenthesesStack = [];

    for (let i = 0; i < numbers.length; i++) {
      const number = Number(numbers[i]);

      if (isNaN(number)) {
        throw new Error("Invalid number in the expression.");
      }

      numbersStack.push(number);
    }

    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];

      while (
        operatorsStack.length > 0 &&
        this.hasPrecedence(operator, operatorsStack[operatorsStack.length - 1]) &&
        parenthesesStack.length === 0
      ) {
        this.evaluate(numbersStack, operatorsStack);
      }

      operatorsStack.push(operator);
    }

    for (let i = 0; i < parentheses.length; i++) {
      const parenthesis = parentheses[i];

      if (parenthesis === "(") {
        parenthesesStack.push(parenthesis);
      } else if (parenthesis === ")") {
        if (operatorsStack.length === 0 || parenthesesStack.length === 0) {
          throw new Error("Mismatched parentheses in the expression.");
        }

        while (operatorsStack.length > 0 && operatorsStack[operatorsStack.length - 1] !== "(") {
          this.evaluate(numbersStack, operatorsStack);
        }

        if (operatorsStack.length === 0 || operatorsStack[operatorsStack.length - 1] !== "(") {
          throw new Error("Mismatched parentheses in the expression.");
        }

        operatorsStack.pop(); // Remove the opening parenthesis
        parenthesesStack.pop(); // Remove the closing parenthesis
      }
    }

    while (operatorsStack.length > 0) {
      this.evaluate(numbersStack, operatorsStack);
    }

    if (numbersStack.length !== 1 || operatorsStack.length !== 0 || parenthesesStack.length !== 0) {
      throw new Error("Mismatched parentheses in the expression.");
    }

    this.result = numbersStack[0];
    return this;
  }

  hasPrecedence(operator1, operator2) {
    const precedenceMap = {
      "+": 1,
      "-": 1,
      "*": 2,
      "/": 2,
    };

    return precedenceMap[operator1] <= precedenceMap[operator2];
  }

  evaluate(numbersStack, operatorsStack) {
    const operator = operatorsStack.pop();
    const operand2 = numbersStack.pop();
    const operand1 = numbersStack.pop();

    let result;

    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
    }

    numbersStack.push(result);
  }
}

// Example usage:
const calculator = new Calculator();

const expression = "10 + 2 * (6 - (4 + 1) / 2) + 7";
calculator.calculate(expression);
console.log(calculator.getResult()); // Output: 24
