
function partition(arr: number[],start: number, end: number): number {
    let pivot: number = arr[end];
    let i: number = start;
    for (let j: number = start; j < end; j++) {
        if (arr[j]<=pivot) {
            let temp:number = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
    }
    arr[end] = arr[i];
    arr[i] = pivot;
    return i;
}


function quickSort(arr: number[],start: number, end: number): number[]{
    
    if(start < end){
        let pivot: number = partition(arr,start,end)
        quickSort(arr,start,pivot-1);
        quickSort(arr,pivot+1,end);
    }

    return arr;
}


const myArr = [12, 8, 7, 5, 2];
//quickSort(myArr); // O(n^2) in worst case, in avarage case it is O(nLogn)
console.log(quickSort(myArr,0,myArr.length-1).join(", "));