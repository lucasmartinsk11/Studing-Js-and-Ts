class TreeNode {

    private value: number;
    private left: TreeNode | null;
    private right: TreeNode | null;
    private isDeleted: boolean;

    constructor (value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.isDeleted = false
    }

    getValue():number {
        return this.value;
    }
    getLeftNode(): TreeNode | null {
        return this.left;
    }
    getRigthNode(): TreeNode | null {
        return this.right;
    }

    setLeftNode(node: TreeNode | null): void {
        this.left = node;
    }
    setRightNode(node: TreeNode | null) {
        this.right = node;
    }

    delete (): void {
        this.isDeleted = true;
    }
    getIsDeleted (): boolean {
        return this.isDeleted;
    }

    insert (value: number)  {

        if (value < this.value) {
            if (!this.left) {
                this.left = new TreeNode(value);
                return null;
            }
            this.left.insert(value);
        }
        if (value >= this.value) {
            if (!this.right) {
                this.right = new TreeNode(value);
                return null;
            }
            this.right.insert(value);
        }

    }

    search (value: number): TreeNode | null  {

        if (this.value === value && !this.isDeleted) {
            return this;
        }
        if (this.left && value < this.value) {
            return this.left.search(value);
        }
        if (this.right && value > this.value) {
            return this.right.search(value);
        }

        return null;
    }

    minValue(): number {

        if (!this.getLeftNode()) {
            return this.getValue();
        }
        return this.getLeftNode()?.minValue()!;
    }

    maxValue(): number {

        if (!this.getRigthNode()) {
            return this.getValue();
        }
        return this.getRigthNode()?.maxValue()!
    }

    inOrder(arr: number[]) {

        if(this.getLeftNode()){
            this.getLeftNode()?.inOrder(arr);
        }

        arr.push(this.getValue());

        if(this.getRigthNode()){
            this.getRigthNode()?.inOrder(arr);
        }
       
        return;
    }

    preOrder(arr: number[]) {

        arr.push(this.getValue());

        if(this.getLeftNode()){
            this.getLeftNode()?.preOrder(arr);
        }

        if(this.getRigthNode()){
            this.getRigthNode()?.preOrder(arr);
        }
       
        return;
    }

    postOrder(arr: number[]) {

        if(this.getLeftNode()){
            this.getLeftNode()?.postOrder(arr);
        }

        if(this.getRigthNode()){
            this.getRigthNode()?.postOrder(arr);
        }
       
        arr.push(this.getValue());

        return;

    }

    inversalInOrder(arr: number[]) {

        if(this.getRigthNode()){
            this.getRigthNode()?.inversalInOrder(arr);
        }

        arr.push(this.getValue());

        if(this.getLeftNode()){
            this.getLeftNode()?.inversalInOrder(arr);
        }

        return;
    }

    toString(): string {
        return `Value: ${this.value}`;
    }
}

export default TreeNode;