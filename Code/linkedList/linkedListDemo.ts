import LinkedList from "./Class/LinkedList"

const linkedListDemo: LinkedList = new LinkedList ();

for(let i: number = 0; i < 11; i++){
  linkedListDemo.setAtHead(i);
}

console.log(linkedListDemo.toString());