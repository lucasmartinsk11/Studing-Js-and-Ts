function twoSum(nums: number[], target: number): number[] {
    
    const output: number [] = [];
    
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 0; i < nums.length; i++) {
            
            if (i == j) {continue;}
            
            if ((target-nums[i]) === nums[j] ){
               output.push(i);
               output.push(j);
               break;
            }
        }
        if(output.length == 2){
            break;
        }
    }
    
    return output;

};

const arr1: number[] = [3,2,4];
const target: number = 6;

console.log(twoSum(arr1,target));