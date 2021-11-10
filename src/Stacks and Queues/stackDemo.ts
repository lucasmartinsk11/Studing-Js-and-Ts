import DoublyLinkedStack from "./Class/DoublyLinkedStack";

const linkedStack: DoublyLinkedStack = new DoublyLinkedStack();

linkedStack.push(1);
linkedStack.push(2);
linkedStack.push(3);
linkedStack.push(4);
linkedStack.push(5);

console.log(linkedStack.toString());

while (linkedStack.peek() !== null) {

    console.log(linkedStack.toString());
    if(linkedStack.peek()?.getValue() === 3){
        linkedStack.pop();
        linkedStack.push(6);
    }else{
        linkedStack.pop();
    }
    
}