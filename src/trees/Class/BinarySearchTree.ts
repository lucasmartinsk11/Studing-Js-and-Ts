import TreeNode from "./treeNode";

class BinarySearchTree {

    private root: TreeNode | null;

    constructor() {
        this.root = null;

    }

    createTreeWithSortedArr(arr: number[],start: number,end:number): void {

        if(start === end){
            this.insert(arr[start]);
            return;
        }
        let middleArr = Math.floor((end+start)/2);
        this.insert(arr[middleArr]);
        if (start < middleArr) {
            this.createTreeWithSortedArr(arr,start,middleArr-1);
        }
        if (middleArr < end) {
            this.createTreeWithSortedArr(arr,middleArr+1,end);
        } 
       
    }

    insert(value: number): void {

        if (!this.root) {
            this.root = new TreeNode(value);
            return;
        }
        this.root.insert(value);
    }

    find(value: number): TreeNode | null {

        if (this.root) {
            return this.root.search(value);
        }
        return null;

    }

    getRoot(): TreeNode | null {
        return this.root;
    }
    
    getMinValue(): number | null {
        if(!this.root){
            return null;
        }
        return this.root.minValue();     
    }
    
    getMaxValue(): number | null {
        if(!this.root){
            return null;
        }
        return this.root.maxValue();
    }

    delete(value: number): void {

        const toDel: TreeNode | null = this.find(value);

        if (toDel) {
            toDel.delete();
        }
    }

    inOrder(): number[] {
        if(!this.root){
            return [];
        }
        let inOrderArr: number[] = []
        this.root.inOrder(inOrderArr);
        return inOrderArr;
    }

    preOrder(): number[] {
        if(!this.root){
            return [];
        }
        let inOrderArr: number[] = []
        this.root.preOrder(inOrderArr);
        return inOrderArr;
    }

    postOrder(): number[] {
        if(!this.root){
            return [];
        }
        let postOrderArr: number[] = []
        this.root.postOrder(postOrderArr);
        return postOrderArr;
    }

    inversalInOrder(): number[] {
        if(!this.root){
            return [];
        }
        let inOrderArr: number[] = []
        this.root.inversalInOrder(inOrderArr);
        return inOrderArr;
    }

    static height(node: TreeNode | null): number {

        if(!node){
           return -1;
        }

        let leftTHeight: number = this.height(node.getLeftNode());
        let rightTHeight: number = this.height(node.getRigthNode());

        return Math.max(leftTHeight,rightTHeight)+1;
    }

    static countLeafs(node: TreeNode | null): number {
        let countLeaf: number = 0;

        if (!node) {
            return countLeaf;
        }

        if(!node.getLeftNode() && !node.getRigthNode()){
            return 1;
        }

        if(node.getLeftNode()){
            countLeaf += this.countLeafs(node.getLeftNode());
        }

        if(node.getRigthNode()){
            countLeaf += this.countLeafs(node.getRigthNode());
        }

        return countLeaf;

    }


    // private deleteInterNode(setParent: (node: TreeNode | null) => void, current: TreeNode): void {

    //     if (!current.getRigthNode()) {
    //         if (current === this.root) {
    //             this.root = current.getLeftNode();
    //             return;
    //         }
    //         setParent(current.getLeftNode());
    //     }
    //     else if (!current.getLeftNode()) {
    //         if (current === this.root) {
    //             this.root = current.getRigthNode();
    //             return;
    //         }
    //         setParent(current.getRigthNode());
    //     }
    // }


    // delete(value: number): void {

    //     if (!this.root) {
    //         return;
    //     }

    //     let current: TreeNode | null = this.root;
    //     let parent: TreeNode | null = this.root;
    //     let isLeftChild: boolean = false;

    //     while (current && current.getValue() !== value) {
    //         parent = current;

    //         if (value < current.getValue()) {
    //             current = current.getLeftNode();
    //             isLeftChild = true;
    //         } else {
    //             current = current.getRigthNode();
    //             isLeftChild = false;
    //         }
    //     }

    //     if (current === null) {
    //         return;
    //     }

    //     // Here will delete a leaf
    //     if (!current.getLeftNode() && !current.getRigthNode()) {
    //         if (current === this.root) {
    //             this.root = null;
    //         } else {
    //             if (isLeftChild) {
    //                 parent.setLeftNode(null);
    //             } else {
    //                 parent.setRightNode(null);
    //             }
    //         }
    //     }
    //     // Here will delete a tree node 
    //     else {

    //         if (isLeftChild) {

    //             this.deleteInterNode(parent.setLeftNode, current);

    //         } else {

    //             this.deleteInterNode(parent.setRightNode, current);

    //         }
    //     }
    // }
}

export default BinarySearchTree;