import DoublyNo from "./DoublyNode";

class DoublyLinkedList {
    head: DoublyNo | null;


    constructor() {
        this.head = null;
    }


    setNodeAtHead(newNode: DoublyNo) {
        let current: DoublyNo | null = this.head;
        if (current === null) {
            this.head = newNode;
            return null;
        }
        newNode.setNextNode(this.head!)
        current.setPrevNode(newNode);
        this.head = newNode;
    }
    setAtHead(value: number) {
        const node: DoublyNo = new DoublyNo(value);
        let current: DoublyNo | null = this.head;
        if (current === null) {
            this.head = node;
            return null;
        }
        node.setNextNode(this.head!)
        current.setPrevNode(node);
        this.head = node;
    }

    doublyLinkedListInsertionSort() {

        if (this.head === null || (this.head?.getNextNode() === null && this.head?.getPreviousNode() === null)) {
            return null;
        }

        let current = this.head.getNextNode();
        while (current !== null) {
            let previous: DoublyNo | null = current.getPreviousNode()!;
            let auxNode: DoublyNo = new DoublyNo(current.getValue()!);

            if (current.getValue()! < previous.getValue()) {
                let next: DoublyNo | null = current.getNextNode();
                previous.setNextNode(next!);
                next?.setPrevNode(previous);
                previous = previous.getPreviousNode();

                while (previous?.getValue()! > auxNode.getValue()) {
                    previous = previous?.getPreviousNode()!;
                }
                
                if(previous === null){
                     this.setNodeAtHead(auxNode);
                }else{
                    auxNode.setNextNode(previous?.getNextNode());
                    auxNode.setPrevNode(previous);
                    auxNode.getNextNode()!.setPrevNode(auxNode);
                    previous?.setNextNode(auxNode);
                }
                
            }
            current = current?.getNextNode()!;
        }

    }

    // orderedInsertion = (value: number) => {
    //     const newNode: DoublyNo = new DoublyNo(value);
    //     let current: DoublyNo | null = this.head;

    //     if(this.head === null || value < this.head?.getValue()!){
    //         this.setAtHead(value);
    //         return null
    //     }


    //     while (current !== null){
    //         let nextNode: DoublyNo = current.getNextNode()!;

    //         if(value > current.getValue() && value < nextNode.getValue()){
    //             newNode.setNextNode(nextNode);
    //             current.setNextNode(newNode);
    //             return null;
    //         }

    //         current = current.getNextNode();
    //     }
    //     current = newNode;
    // }
    deleteFromHead() {
        this.head = this.head?.getNextNode()!;
        this.head.setPrevNode(null);
    }
    searchNode = (value: number): DoublyNo | null => {
        let current: DoublyNo | null = this.head!;

        while (current !== null) {
            if (current.getValue() === value) {
                return current;
            }
            current = current.getNextNode();
        }
        return null;
    }
    searchIndex(value: number): number | null {
        let current: DoublyNo | null = this.head!;
        let count: number = 0;
        while (current !== null) {
            if (current.getValue() === value) {
                return count;
            }
            count++;
            current = current.getNextNode();
        }
        return null;
    }
    toString(): string {
        let items: string[] = [];
        let current: DoublyNo | null = this.head;

        while (current !== null) {
            items.push(current.toString());
            current = current.getNextNode();
        }
        return `{${items.join()}}`;
    }
    length(): number {
        let count: number = 0
        if (!this.head) {
            return count
        }
        let current: DoublyNo | null = this.head;
        while (current !== null) {
            count++;
            current = current.getNextNode();
        }
        return count;
    }
}

export default DoublyLinkedList;