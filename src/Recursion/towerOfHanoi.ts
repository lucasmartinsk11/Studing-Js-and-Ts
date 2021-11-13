
function towerofHanoi(numberOfDiscs: number, from: string, to: string, inter: string) {

    if (numberOfDiscs === 1) {
        count++;
        console.log(`Moving disc 1 from ${from} to ${to}`);
    } else {
        count++;
        towerofHanoi(numberOfDiscs - 1, from, inter, to);
        console.log(`Moving disc ${numberOfDiscs} from ${from} to ${to}`)
        towerofHanoi(numberOfDiscs - 1, inter, to, from);
    }

}

const A: string = "A";
const B: string = "B";
const C: string = "C";

var count: number = 0;
towerofHanoi(5,A,C,B);
console.log(count);

function towerOfHanoiArr(numberOfDiscs: number, from: number[], to: number[], inter: number[]) {

    if (numberOfDiscs === 1) {
        to.push(from.pop()!);
        console.log(`- From: ${X} Inter: ${Y} To: ${Z}`);
    } else {
        towerOfHanoiArr(numberOfDiscs - 1, from, inter, to);
        to.push(from.pop()!);
        console.log(`From: ${X} Inter: ${Y} To: ${Z}`);
        towerOfHanoiArr(numberOfDiscs - 1, inter, to, from);
    }


}

const X: number[] = [3,2,1];
const Y: number[] = [];
const Z: number[] = [];

// towerOfHanoiArr(X.length, X, Z, Y);
// console.log(`From: ${X} Inter: ${Y} To: ${Z}`);