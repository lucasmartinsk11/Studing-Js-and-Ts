import DoublyLinkedList from "./Class/DoublyLinkedList"

const doublyLinkedList: DoublyLinkedList = new DoublyLinkedList ();

for(let i: number = 0; i < 11; i++){
  doublyLinkedList.setAtHead(Math.floor((Math.random()*10)*Math.random()*10));
}


// doublyLinkedList.setAtHead(5);
// doublyLinkedList.setAtHead(50);
// doublyLinkedList.setAtHead(25);
// doublyLinkedList.setAtHead(100);

doublyLinkedList.doublyLinkedListInsertionSort();

console.log(doublyLinkedList.toString());