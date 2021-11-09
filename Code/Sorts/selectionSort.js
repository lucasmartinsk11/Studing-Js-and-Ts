function selectionSort (arr){
  
  for(let i = 0; i < arr.length-1; i++){
  	let tempIndex = i;
  	for (let j = i+1; j < arr.length; j++){
    //Hold the smallest value's index in array at the interation moment
    	if(arr[tempIndex] > arr[j]){
      	tempIndex = j;
      }
    }
    // swap elements
    let temp = arr[i];
    arr[i] = arr[tempIndex];
    arr[tempIndex] = temp;
  }
  
  console.log(arr);
  
}

const myArr = [12,8,7,5,2];
selectionSort(myArr); // O(n^2)
