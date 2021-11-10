function insertionSort(arr) {


  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i; j >= 0; j--) {

      if (arr[j - 1] > current) {
        arr[j] = arr[j - 1];
        arr[j - 1] = -1;
        if ((j - 1) === 0) {
          arr[j - 1] = current;
          break;
        }
      }
      else if ((j + 1) < arr.length && arr[j + 1] === -1) {
        arr[j + 1] = current;
        break;
      }
      else { break; }

    }
  }

  console.log(arr);

}

function insertionSort2(arr) {


  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--;
    }
    arr[j + 1]

  }

  console.log(arr);

}

const myArr = [12, 8, 7, 5, 2, 13];
insertionSort(myArr); // O(n^2)
insertionSort2(myArr); // O(n^2)
