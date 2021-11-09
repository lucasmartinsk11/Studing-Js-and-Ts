function searchOrderedArr (sortedArr,fisrtPosition,lastPosition, value){

	let notFoundValue = -1;
	
  if(sortedArr.length < 1){
  	return notFoundValue;
  }
  if(sortedArr.length === 1 && sortedArr[0] === value){
  	return 0;
  }else if(sortedArr.length === 1){
  	return notFoundValue;
  }
  
  let middleArr = Math.floor((lastPosition+fisrtPosition)/2)
  
  if(sortedArr[middleArr] === value){
  	return middleArr
  }else if(sortedArr[middleArr] > value){
  	return searchOrderedArr(sortedArr,0,middleArr,value);
  }else if(sortedArr[middleArr] < value){
  	return searchOrderedArr(sortedArr,middleArr,lastPosition,value);
  }
  
  return notFoundValue;
}
  

const myArr = [0,9,17,23,41,57,60,89,120];
console.log(searchOrderedArr(myArr,0,myArr.length-1,0));
