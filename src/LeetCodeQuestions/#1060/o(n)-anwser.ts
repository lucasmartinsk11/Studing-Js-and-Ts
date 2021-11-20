function missing(lastIndex: number,arr: number[]) {
    let lastArrNumnber: number = arr[lastIndex];
    let firstArrNumber: number = arr[0];
    
    // Here I'm setting the real number of numbers between arr[0] and arr[n];
    let setOfNums: number =  arr[lastIndex] - arr[0];
    
    // Here I'm removing the numbers that already have;
    let countMissing = setOfNums - lastIndex;
    
    // So here I'm returning the quantity of numbers missing
    return  countMissing;
}

function missingElement(nums: number[], k: number): number {
    
    let sizeArrNums: number = nums.length;
    
    if(k > missing(sizeArrNums-1, nums)){
       return nums[sizeArrNums - 1] + k - missing(sizeArrNums-1, nums);
    }
    
    let i: number = 1;
    
    while ( missing(i,nums) < k) {
           i++;
    }
    
    return nums[i - 1] + k - missing(i-1, nums);
    
};


const arr: number[] = [4,7,9,10];
const k: number = 3;

missingElement(arr,k);
