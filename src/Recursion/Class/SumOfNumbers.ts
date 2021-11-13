class SumOfNumbers{

    static sumOfSquares(n:number): number {

        if(n === 1){
            return 1;
        }
        return (n*n) + this.sumOfSquares(n-1);
    }


}

export default SumOfNumbers;