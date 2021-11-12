class MergeSort {

    static mergeSort(arr: number[], begining: number, endining: number): number[] {

        if ((endining - begining) <= 0) {
            return arr;
        }

        const middleOfArr: number = Math.floor((endining + begining) / 2);

        this.mergeSort(arr, begining, middleOfArr);
        this.mergeSort(arr, middleOfArr + 1, endining);

        this.merge(arr, begining, middleOfArr, endining);

        return arr;
    }

    private static merge(arr: number[], start: number, middle: number, end: number): number[] {

        let n1 = middle - start + 1;
        let n2 = end - middle;

        let left: number[] = [];
        let rigth: number[] = [];

        let i: number = 0;
        let j: number = 0;

        while (i < n1) {
            left[i] = arr[start + i];
            i++;
        }
        while (j < n2) {
            rigth[j] = arr[middle + 1 + j];
            j++;
        }

        i = 0;
        j = 0;
        let k: number = start;
        while (i < n1 && j < n2) {
            if (left[i] <= rigth[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = rigth[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = left[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = rigth[j];
            j++;
            k++;
        }

        return arr;
    }
}

export default MergeSort;