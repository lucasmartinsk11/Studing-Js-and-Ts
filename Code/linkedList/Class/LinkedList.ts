import No from "./Node";

class LinkedList {
    head: No | null;

    constructor() {
        this.head = null;
    }


    setNodeAtHead = (newNode: No) => {
        newNode.setNextNode(this.head!);
        this.head = newNode;
    }
    setAtHead = (value: number) => {
        const node: No = new No(value);
        node.setNextNode(this.head!);
        this.head = node;
    }
    orderedInsertion = (value: number) => {
        const newNode: No = new No(value);
        let current: No | null = this.head;

        if(this.head === null || value < this.head?.getValue()!){
            this.setAtHead(value);
            return null
        }
        

        while (current !== null){
            let nextNode: No = current.getNextNode()!;

            if(value > current.getValue() && value < nextNode.getValue()){
                newNode.setNextNode(nextNode);
                current.setNextNode(newNode);
                return null;
            }

            current = current.getNextNode();
        }
        current = newNode;
    }
    deleteFromHead = () => {
        this.head = this.head?.getNextNode()!;
    }
    searchNode = (value: number): No | null => {
        let current: No | null = this.head!;

        while (current !== null) {
            if (current.getValue() === value) {
                return current;
            }
            current = current.getNextNode();
        }
        return null;
    }
    searchIndex = (value: number): number | null => {
        let current: No | null = this.head!;
        let count: number = 0;
        while (current !== null) {
            count++;
            if (current.getValue() === value) {
                return count;
            }
            current = current.getNextNode();
        }
        return null;
    }
    toString = (): string => {
        let result: string = "{"
        let current: No | null = this.head;

        while (current !== null) {
            result += " ,", current.toString()
            current = current.getNextNode();
        }
        result += "}";
        return result;
    }
    length = (): number => {
        let count: number = 0
        if (!this.head) {
            return count
        }
        let current: No | null = this.head;
        while (current !== null) {
            count++;
            current = current.getNextNode();
        }
        return count;
    }
}

export default LinkedList;