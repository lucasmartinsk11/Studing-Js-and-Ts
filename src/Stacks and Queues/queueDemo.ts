import DoublyLinkedQueue from "./Class/DoublyLinkedQueue";

const linkedQueue: DoublyLinkedQueue = new DoublyLinkedQueue();

linkedQueue.enqueue(1);
linkedQueue.enqueue(2);
linkedQueue.enqueue(3);
linkedQueue.enqueue(4);
linkedQueue.enqueue(5);

//linkedQueue.

console.log(linkedQueue.toString());

while (linkedQueue.peek() !== null) {

    console.log(linkedQueue.toString());
    if(linkedQueue.peek()?.getValue() === 3){
        linkedQueue.dequeue();
        linkedQueue.enqueue(6);
    }else{
        linkedQueue.dequeue();
    }
    
}