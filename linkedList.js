'use strict';

class LinkedList {
  constructor(){
    this.head= null;
    this.length=0;
  }

  insert(index, value){
    if (index < 0 || index > this.length) {
      throw new Error('Index error');
    }

    let newNode = {
      value
    };

    if(index === 0){
      newNode.next = this.head;
      this.head = newNode;
    }

    else{
      let prevNode = this._find(index-1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }

    this.length++;
  }

  delete(index){
    if(index<0 || index >= this.length){
      throw new Error('Can not delete past length or before 0');
    }

    if(index === 0){
      this.head = this.head.next;
    }else{
      const prevNode = this._find(index-1);
      prevNode.next = prevNode.next.next;
    }
    this.length--;
  }

  _find(index){
    let node = this.head;
    for(let i=0; i < index;i++){
      node = node.next;
    }
    return node;
  }

  get(index){
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    let node = this._find(index);
    return node.value;
  }
}

function printList(list){
  for(let i=0; i < list.length; i++){
    console.log('value:', list.get(i), 'index:', i);
  }
}











/////////////////////////// INVOKING AND TESTING ///////////////////////////
console.log('/////////////////');
console.log('Creating Linked List.');
console.log('/////////////////');
const llist  = new LinkedList();

llist.insert(0,'Hello');
llist.insert(1,'Is there anybody in there?');
llist.insert(2,'Just nod if you can hear me.');
llist.insert(3,'Is there anybody home?');
llist.insert(2, "I don't belong.");

console.log('/////////////////');
console.log('Running printList');
console.log('/////////////////');
printList(llist);
console.log('/////////////////');
console.log('/////////////////');

console.log('/////////////////');
console.log('Deleting the one that doesn\'t belong');
llist.delete(2);
console.log('/////////////////');

console.log('/////////////////');
console.log('Running printList again');
console.log('/////////////////');
printList(llist);
console.log('/////////////////');
console.log('/////////////////');

