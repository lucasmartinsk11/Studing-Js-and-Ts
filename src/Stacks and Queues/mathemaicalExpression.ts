
function isOperator(char:string) {

    const asciiZero = 48;
    const asciiNine = 57;
    if (char.charCodeAt(0) >= asciiZero && char.charCodeAt(0) <= asciiNine) {
        return true;
    }
    return false;
}

function evaluatedMathExpression(expression: string): number {

    const numbers: number[] = [];
    const operators: string[] = [];
    
    for(let i: number = 0; i < expression.length; i++){
        
        let teste = expression[i];
        if (isOperator(expression[i])) {
            numbers.push(expression.charCodeAt(i)-48);
        }
        else if (expression[i] !== '(' && expression[i] !== ')') {
            operators.push(expression[i])
        }
        else if(expression[i] === ')'){

            const o1: number = numbers.pop()!;
            const o2: number = numbers.pop()!;

            switch (operators.pop()) {
                case '+':
                    numbers.push(o1 + o2);
                    break;
                case '-':
                    numbers.push(o1 - o2);
                    break;
                case '*':
                    numbers.push(o1 * o2);
                    break;
                case '/':
                    numbers.push(o1 / o2);
                    break;
                }
        }

    }


    const lastItemInStack = numbers[numbers.length-1];
    return lastItemInStack;
}

// function evaluatedMathExpression(expression: string): string {

//     const numbers: string[] = [];
//     const operators: string[] = [];
    
//     for(let i = 0; i < expression.length; i++){
        
//         if (isOperator(expression[i])) {
//             numbers.push(expression[i]);
//         }
//         else if (expression[i] !== '(' && expression[i] !== ')') {
//             operators.push()
//         }

//     }



//     return ""
// }

const myString = "(+3(+(*28)9))";

console.log(evaluatedMathExpression(myString));