'use strict';

class LinkedList {
  constructor(){
    this.head= null;
    this.length=0;
  }

  _find(index){
    let node = this.head;
    for(let i=0; i < index;i++){
      node = node.next;
    }
    return node;
  }
}