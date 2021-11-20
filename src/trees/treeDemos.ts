import BinarySearchTree from "./Class/BinarySearchTree";

//example I
const binaryTreeDemo: BinarySearchTree = new BinarySearchTree();

binaryTreeDemo.insert(50);
binaryTreeDemo.insert(100);
binaryTreeDemo.insert(25);
binaryTreeDemo.insert(75);
binaryTreeDemo.insert(1);
binaryTreeDemo.insert(5);
binaryTreeDemo.insert(150);
binaryTreeDemo.insert(125);
binaryTreeDemo.insert(7);
binaryTreeDemo.insert(4);

console.log(`Min value: ${binaryTreeDemo.getMinValue()}`);
console.log(`Max value: ${binaryTreeDemo.getMaxValue()}`);

binaryTreeDemo.insert(-1);
binaryTreeDemo.insert(175);

console.log(`------------------------------------------`);
console.log(`Min value: ${binaryTreeDemo.getMinValue()}`);
console.log(`Max value: ${binaryTreeDemo.getMaxValue()}`);
console.log(`------------------------------------------`);

console.log(`InOrder: ${binaryTreeDemo.inOrder().join(", ")}`);
console.log(`------------------------------------------`);
console.log(`inversalInOrder: ${binaryTreeDemo.inversalInOrder().join(", ")}`);
console.log(`------------------------------------------`);
console.log(`preOrder: ${binaryTreeDemo.preOrder().join(", ")}`);
console.log(`------------------------------------------`);
console.log(`postOrder: ${binaryTreeDemo.postOrder().join(", ")}`);
console.log(`------------------------------------------`);
console.log(`Height: ${BinarySearchTree.height(binaryTreeDemo.getRoot())}`);
console.log(`------------------------------------------`);
console.log(`Leafs: ${BinarySearchTree.countLeafs(binaryTreeDemo.getRoot())}`);
console.log(`------------------------------------------`);

// Example II
const myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
const binaryTreeDemo2: BinarySearchTree = new BinarySearchTree();
binaryTreeDemo2.createTreeWithSortedArr(myArr,0, myArr.length-1);
console.log(`Leafs: ${(BinarySearchTree.countLeafs(binaryTreeDemo2.getRoot()))}`);
console.log(`------------------------------------------`);
console.log(`Height: ${BinarySearchTree.height(binaryTreeDemo2.getRoot())}`);

console.log(`------------------------------------------`);

//Example III
const binaryTreeDemo3: BinarySearchTree = new BinarySearchTree();
binaryTreeDemo3.insert(1);
binaryTreeDemo3.insert(2);
binaryTreeDemo3.insert(3);
binaryTreeDemo3.insert(4);
binaryTreeDemo3.insert(5);
binaryTreeDemo3.insert(6);
binaryTreeDemo3.insert(7);
binaryTreeDemo3.insert(8);
binaryTreeDemo3.insert(9);
binaryTreeDemo3.insert(10);

console.log(`preOrder: ${binaryTreeDemo3.preOrder()}`);
console.log(`------------------------------------------`);
console.log(`Before balance Height: ${BinarySearchTree.height(binaryTreeDemo3.getRoot())}`);
//example IV
const myArr2: number[] = binaryTreeDemo3.inOrder();
const binaryTreeDemo4: BinarySearchTree = new BinarySearchTree();
binaryTreeDemo4.createTreeWithSortedArr(myArr2,0,myArr2.length-1);
console.log(`------------------------------------------`);
console.log(`preOrder: ${binaryTreeDemo4.preOrder()}`);
console.log(`------------------------------------------`);
console.log(`After balance Height: ${BinarySearchTree.height(binaryTreeDemo4.getRoot())}`);




