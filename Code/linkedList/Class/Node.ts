class Node {
    value: number;
    nextNode: Node;

    constructor(value) {
        this.value = value;
        this.nextNode = null;
    };

    setValue = (newValue: number) => {
        this.value = newValue;
    }
    getValue = (): number => {
        return this.value;
    };
    setNextNode = (newNode: Node) => {
        return this.nextNode = newNode;
    };
    getNextNode = (): Node => {
        return this.nextNode;
    }
    toString = (): string => {
        return "Node value is: " + this.value;
    }

}
