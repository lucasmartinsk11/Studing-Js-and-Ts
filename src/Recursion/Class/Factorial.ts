

class Factorial {
    
    static factorial(value: number): number {
        if (value === 1 || value === 0) {
            return 1;
        }
        return value * this.factorial(value-1);
    }

    static tailFactorial(value: number, result: number): number {
        if (value === 1 || value === 0) {
            return result;
        }
        return this.tailFactorial(value-1,value*result);
    }

}

export default  Factorial