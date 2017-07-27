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
  if(isEmpty(list)){
    console.log('Empty list');
  }
  else{
    let node = list.head;
    console.log(node.value);
    while(node.next!== null){
      node = node.next;
      console.log(node.value);
    }
  }
}

function size(list){
  let counter=0;
  if(isEmpty(list)){
    return counter;
  }
  let node = list.head;
  while(node.next !== null){
    node = node.next;
    counter++;
  }
  counter++;
  return counter;
}

function isEmpty(list){
  if(list.head === null){
    return true;
  }
  return false;
}

function findPrevious(value, list){
  if(isEmpty(list)){
    throw new Error('Linked List is empty');
  }
  else{
    let node = list.head;
    let prevNode;
    if(node.value === value){
      throw new Error('You searched for the head, there is no previous node!');
    }
    while(node.value !== value){
      prevNode = node;
      node = node.next;
    }
    return prevNode;
  }
}

function findLast(list){
  if(isEmpty(list)){
    throw new Error('Linked List is empty');
  }
  else{
    let node = list.head;
    while(node.next !== null){
      node = node.next;
    }
    return node;
  }
}


function findMiddle(list){
  let node = list.head;
  let returnNode = list.head;
  while(node.next !== null && node.next.next !== null){
    node = node.next.next;
    returnNode = returnNode.next;
  }
  return returnNode.value;
}

  // _find(index){
  //   let node = this.head;
  //   for(let i=0; i < index;i++){
  //     node = node.next;
  //   }
  //   return node;
  // }

function findThirdToLast(list){
  if(isEmpty(list)){
    throw new Error('Empty List');
  }
  let secNodeToLast;
  let firstNodeToLast;
  let node = list.head;
  let counter = 0;
  while(node.next !== null){
    if(counter ===1){
      firstNodeToLast = node;
      node = node.next;
      counter++;
    }
    else if(counter >= 2){
      secNodeToLast = firstNodeToLast;
      firstNodeToLast = node;
      node = node.next;
      counter++;
    }else{
      node= node.next;
      counter++;
    }
  }
  if(secNodeToLast){
    throw new Error('Linked List size is not at least 3');
  }
  return secNodeToLast;
}

function reverseList(list){
  let head = list.head;
  let node = head.next;
  head.next = null;
  let prevNode = head;
  let next;
  while(node.next !== null){
    next = node.next;
    node.next = prevNode;
    prevNode = node;
    node = next;
  }
  if(node.next === null){
    list.head = node;
    list.head.next = prevNode;
  }
  return list;
}

// function isCycleList(list){
//   let node = list.head;
//   const objTracker = {};
//   while(node.next !== null){
//     if( objTracker[node.value]){
//       return true;
//     }
//     objTracker[node.value] = node.value;
//     node = node.next;
//   }
//   return false;
// }

function isCycleList(list){
  if(isEmpty(list)){
    return false;
  }
  let slowNode = list.head;
  let fastNode = list.head;
  while(fastNode.next !== null && fastNode.next.next !== null){
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
    if(fastNode === slowNode){
      return true;
    }
  }
  return false;
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

// console.log('/////////////////');
// console.log('Running printList');
// console.log('/////////////////');
// printList(llist);
// console.log('/////////////////');
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Deleting the one that doesn\'t belong');
// llist.delete(2);
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Running printList again');
// console.log('/////////////////');
// printList(llist);
// console.log('/////////////////');
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Is the one we just made empty?');
// console.log('/////////////////');
// console.log(isEmpty(llist));
// console.log('/////////////////');
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Finding the one before you nod');
// console.log('/////////////////');
// console.log(findPrevious('Just nod if you can hear me.', llist));
// console.log('/////////////////');
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Finding the last node');
// console.log('/////////////////');
// console.log(findLast(llist));
// console.log('/////////////////');
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Verifying that counting works as intended');
// console.log('/////////////////');
// console.log(size(llist));
// console.log('/////////////////');
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Seeing if findThirdToLast is working');
// console.log('/////////////////');
// console.log(findThirdToLast(llist));
// console.log('/////////////////');
// console.log('/////////////////');

console.log('/////////////////');
console.log('Testing reversal');
console.log('/////////////////');
console.log(reverseList(llist));
console.log('/////////////////');
console.log('/////////////////');

// console.log('/////////////////');
// console.log('Creating A New, Empty Linked List.');
// console.log('/////////////////');
// const elist  = new LinkedList();

// console.log('/////////////////');
// console.log('Is the empty one empty?');
// console.log('/////////////////');
// console.log(isEmpty(elist));
// console.log('/////////////////');
// console.log('/////////////////');

// console.log('/////////////////');
// console.log('Can we inset into the first index 1 of an empty list?');
// console.log('/////////////////');
// elist.insert(1,':)');

console.log('/////////////////');
console.log('Creating A cycle Linked List.');
console.log('/////////////////');
const cycleList  = new LinkedList();

cycleList.insert(0,0);
cycleList.insert(1,1);
cycleList.insert(2,2);
cycleList.insert(3,3);
let cycle = cycleList._find(2);
cycle.next = cycleList._find(0);

console.log('/////////////////');
console.log('Checking if is Cycle list works.');
console.log('/////////////////');
console.log(isCycleList(cycleList));
console.log('/////////////////');

console.log('/////////////////');
console.log('Finding the middle');
console.log('/////////////////');
console.log(findMiddle(llist));
console.log('/////////////////');