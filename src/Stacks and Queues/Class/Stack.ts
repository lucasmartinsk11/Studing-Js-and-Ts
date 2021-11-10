class Stack {

    stack: number[] = [];
    constructor() {

    }

    push(value: number) {
        this.stack.push(value);
    }

    pop() {
        this.stack.pop();
    }

    peek(): number{
        return this.stack[this.stack.length-1];
    }

}