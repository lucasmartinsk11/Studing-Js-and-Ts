import No from "./Node";

class LinkedList {
    head: No | null;

    constructor() {
        this.head = null;
    }


    setNodeAtHead(newNode: No) {
        newNode.setNextNode(this.head!);
        this.head = newNode;
    }
    setAtHead(value: number) {
        const node: No = new No(value);
        node.setNextNode(this.head!);
        this.head = node;
    }
    orderedInsertion(value: number) {
        const newNode: No = new No(value);
        let current: No | null = this.head;

        if (this.head === null || value < this.head?.getValue()!) {
            this.setAtHead(value);
            return null
        }


        while (current !== null) {
            let nextNode: No = current.getNextNode()!;

            if (value > current.getValue() && value < nextNode.getValue()) {
                newNode.setNextNode(nextNode);
                current.setNextNode(newNode);
                return null;
            }

            current = current.getNextNode();
        }
        current = newNode;
    }
    deleteFromHead() {
        this.head = this.head?.getNextNode()!;
    }
    deleteFromAnywhere(value: number) {
        if (value === this.head?.getValue()) {
            this.deleteFromHead();
        }
        let current: No | null = this.head;
        let savePrevNodes: No | null = null;
        while (current !== null) {
            if (current.getNextNode() !== null && current.getNextNode()?.getValue() === value) {
                savePrevNodes = current;
            }
            if (current.getValue() === value) {
                savePrevNodes?.setNextNode(current.getNextNode());
                return null;
            }
            current = current.getNextNode();
        }
    }
    searchNode(value: number): No | null {
        let current: No | null = this.head!;

        while (current !== null) {
            if (current.getValue() === value) {
                return current;
            }
            current = current.getNextNode();
        }
        return null;
    }
    searchIndex(value: number): number | null {
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
    toString(): string {
        let current: No | null = this.head;
        let arr: number[] = [];

        while (current !== null) {
            arr.push(current.getValue());
            current = current.getNextNode();
        }
        return `{${arr.join(", ")}}`;
    }
    length(): number {
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