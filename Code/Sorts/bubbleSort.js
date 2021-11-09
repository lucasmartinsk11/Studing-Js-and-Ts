function bubbleSort (arr){
	
  for(let i = 0; i < arr.length-1; i++){
  	for(let j = 0; j < arr.length-1-i; j++ ){
      //Swap elements
      if(arr[j] > arr[j+1]){
      	let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  
  console.log(arr);
  
}

const myArr = [12,8,7,5,2];
bubbleSort(myArr);
