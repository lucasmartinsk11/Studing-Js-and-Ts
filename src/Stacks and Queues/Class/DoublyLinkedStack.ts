import DoublyLinkedList from "../../linkedList/Class/DoublyLinkedList";
import DoublyNo from "../../linkedList/Class/DoublyNode";

class DoublyLinkedStack extends DoublyLinkedList{


    push(value: number) {
        super.setAtHead(value);
    }

    pop() {
        const node: DoublyNo|null = this.head;
        super.deleteFromHead();

        return node;
    }

    peek() {
        return this.head;
    }
}

export default DoublyLinkedStack;