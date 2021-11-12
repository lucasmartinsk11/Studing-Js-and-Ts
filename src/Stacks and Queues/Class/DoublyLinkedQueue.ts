import DoublyLinkedList from "../../LinkedList/Class/DoublyLinkedList";
import DoublyNo from "../../LinkedList/Class/DoublyNode";

class DoublyLinkedQueue extends DoublyLinkedList {
    console: any;
    
    /**
     * Insert items into the queue
     * @param value Any number
     */
    enqueue(value: number) {
        super.setTail(value);
    }

    dequeue() {
        const node: DoublyNo|null = this.head;
        super.deleteFromHead();
        return node;
    }

    peek() {
        return this.head;
    }
}

export default DoublyLinkedQueue