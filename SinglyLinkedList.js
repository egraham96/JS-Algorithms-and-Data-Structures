/*Pushing to a Singly Linked List:
-Write a function that accepts a value. With that value, create a new node. If there is no head property
on the list, set the head and tail property to be the newly created node. Otherwise, set the next property on the tail
to be the new node and set the tail property on the list to be the newly created node. Increment length of list by one. */
class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }
    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }
}

var list=new SinglyLinkedList();


/*Popping from a Singly Linked List:
-Define a function called pop that does not take in any data. If there are no nodes in the singly linked list, pop should return undefined.
Otherwise, loop through the entire singly linked list until you get to the tail. After finding the tail set the next property of the 2nd to last node to null. Finally, set the tail
to be the 2nd to last node. */
class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }


    pop (){
        if (!this.head){
            return undefined;
        } else {
            var current=this.head
            var newTail=current;
            while (current.next){
                newTail=current;
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null;
            this.length--
            return current;
            
            
        }
}
}


/*Shifting from a Singly Linked List:
-Define a function called shift that does not take in any data. If there are no nodes in the singly linked list, shift should return undefined.
First, store the current head property in a variable. Set the head property to be the current head's next property. Finally, return the value of
the node removed. */
class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }


    pop (){
        if (!this.head){
            return undefined;
        } else {
            var current=this.head
            var newTail=current;
            while (current.next){
                newTail=current;
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null;
            this.length--
            return current;
            
            
        }
}

shift (){
    if (!this.head){
        return undefined;
    }
    var listHead=this.head;
    this.head=listHead.next
    this.length--
    return listHead;
}
}

var newList=new SinglyLinkedList();


/*Unshifting from a Singly Linked List:
-Define a function called unshift that takes in a value. Create a new node with the value passed into unshift function. 
If the list has no head, set the new node to be list's head and tail. Otherwise, set newly created node's next property to be the current head property on the list.
Then, set the head property of the list to be the newly created node. Finally, increment length of list by 1 and return the linked list.*/
class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }


    pop (){
        if (!this.head){
            return undefined;
        } else {
            var current=this.head
            var newTail=current;
            while (current.next){
                newTail=current;
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null;
            this.length--
            return current;
            
            
        }
}

shift (){
    if (!this.head){
        return undefined;
    }
    var listHead=this.head;
    this.head=listHead.next
    this.length--
    return listHead;
}

unshift (val){
    var newNode=new Node(val);
    if (!this.head){
        this.head=newNode;
        this.tail=newNode;
    } else {
    newNode.next=this.head
    this.head=newNode
    }
    this.length++
    return this;
}
}

var newList=new SinglyLinkedList();


/*Getting from a Singly Linked List:
-Define a function called get that takes in an index. If the index is less than 0, or greater than or equal to length of list, 
return null. Otherwise, loop through the list until you reach the index and return the node at that specific index.*/
class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }


    pop (){
        if (!this.head){
            return undefined;
        } else {
            var current=this.head
            var newTail=current;
            while (current.next){
                newTail=current;
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null;
            this.length--
            return current;
            
            
        }
}

shift (){
    if (!this.head){
        return undefined;
    }
    var listHead=this.head;
    this.head=listHead.next
    this.length--
    return listHead;
}

unshift (val){
    var newNode=new Node(val);
    if (!this.head){
        this.head=newNode;
        this.tail=newNode;
    } else {
    newNode.next=this.head
    this.head=newNode
    }
    this.length++
    return this;
}

get(index){
   if (index <0 || index >= this.length){
    return null;
   }
   var currentIndex=this.head
   var counter=0;
   while (counter !=index ){
    currentIndex=currentIndex.next
    counter ++
   }
   return current;
}

}

var newList=new SinglyLinkedList();


/*Setting from a Singly Linked List:
-Define a function called set that takes in an position or an index and a value to update the item at that index to.  
 If node is not found, return false. Otherwise, loop through the list until you reach the index and then change the value
 at that index to value passed to function.*/
class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }


    pop (){
        if (!this.head){
            return undefined;
        } else {
            var current=this.head
            var newTail=current;
            while (current.next){
                newTail=current;
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null;
            this.length--
            return current;
            
            
        }
}

shift (){
    if (!this.head){
        return undefined;
    }
    var listHead=this.head;
    this.head=listHead.next
    this.length--
    return listHead;
}

unshift (val){
    var newNode=new Node(val);
    if (!this.head){
        this.head=newNode;
        this.tail=newNode;
    } else {
    newNode.next=this.head
    this.head=newNode
    }
    this.length++
    return this;
}

get(index){
   if (index <0 || index >= this.length){
    return null;
   }
   var currentIndex=this.head
   var counter=0;
   while (counter !=index ){
    currentIndex=currentIndex.next
    counter ++
   }
   return current;
}

set(index, val){
   var foundNode= this.get(index);
   if (foundNode){
    foundNode.val=val;
    return true;
   }
   return false;
 }

}

var newList=new SinglyLinkedList();


/*Inserting into a Singly Linked List:
-Define a function called insert that takes in an position or an index you'd like to insert a value and the value itself. If the index is less than 0 or greater than the length of the list, return false.
 If the index value is equal to length of list, push new node to end of list. If index is 0, unshift new node to beginning of list. Otherwise, loop through the list until you reach the index -1 (use get method) and then change the next property
 at index-1 to the value. Change the next property at newly inserted value to be previous value's next property value. Finally, increment the list and return true. */
 class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }


    pop (){
        if (!this.head){
            return undefined;
        } else {
            var current=this.head
            var newTail=current;
            while (current.next){
                newTail=current;
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null;
            this.length--
            return current;
            
            
        }
}

shift (){
    if (!this.head){
        return undefined;
    }
    var listHead=this.head;
    this.head=listHead.next
    this.length--
    return listHead;
}

unshift (val){
    var newNode=new Node(val);
    if (!this.head){
        this.head=newNode;
        this.tail=newNode;
    } else {
    newNode.next=this.head
    this.head=newNode
    }
    this.length++
    return this;
}

get(index){
   if (index <0 || index >= this.length){
    return null;
   }
   var currentIndex=this.head
   var counter=0;
   while (counter !=index ){
    currentIndex=currentIndex.next
    counter ++
   }
   return current;
}

set(index, val){
   var foundNode= this.get(index);
   if (foundNode){
    foundNode.val=val;
    return true;
   }
   return false;
 }

 insert(index,val){
    if (index <0 || index>this.length){
        return false;
    }
    if (index===this.length){
        this.push(val);
        return true;
    }
    if (index=0){
        this.unshift(val)
        return true;
    }
    else {
       var prev= this.get(index-1);
       if (prev){
        var newNode= new Node (val)
        var temp=prev.next
        prev.next=newNode;
        newNode.next=temp
        this.length++
        return true;
       }
    }
    var foundNode=this.get(index);

 }

}


/*Removing from a Singly Linked List:
-Define a function called remove that takes in an position or an index you'd like to remove a value and the value itself. If the index is less than 0 or greater than the length of the list, return undefined or null.
 If the index value is equal to length of list - 1, use pop method. If index is 0, use shift method. Otherwise, loop through the list until you reach the index -1 (use get method) and then change the next property
 at index-1 to the next property of the next node. Finally, increment the list and return true. */
 class Node {
    constructor (val) {
        this.val=val;
        this.next=null;
    }
}


class SinglyLinkedList {
    constructor () {
        this.head=null;
        this.tail=null;
        this.length=0;

    }

    push (val){
        const newNode= new Node(val)
        if (!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode
            this.tail=newNode
            
        }
        this.length++ 
    return this; }


    pop (){
        if (!this.head){
            return undefined;
        } else {
            var current=this.head
            var newTail=current;
            while (current.next){
                newTail=current;
                current=current.next
            }
            this.tail=newTail
            this.tail.next=null;
            this.length--
            return current;
            
            
        }
}

shift (){
    if (!this.head){
        return undefined;
    }
    var listHead=this.head;
    this.head=listHead.next
    this.length--
    return listHead;
}

unshift (val){
    var newNode=new Node(val);
    if (!this.head){
        this.head=newNode;
        this.tail=newNode;
    } else {
    newNode.next=this.head
    this.head=newNode
    }
    this.length++
    return this;
}

get(index){
   if (index <0 || index >= this.length){
    return null;
   }
   var currentIndex=this.head
   var counter=0;
   while (counter !=index ){
    currentIndex=currentIndex.next
    counter ++
   }
   return current;
}

set(index, val){
   var foundNode= this.get(index);
   if (foundNode){
    foundNode.val=val;
    return true;
   }
   return false;
 }

 insert(index,val){
    if (index <0 || index>this.length){
        return false;
    }
    if (index===this.length){
        this.push(val);
        return true;
    }
    if (index=0){
        this.unshift(val)
        return true;
    }
    else {
       var prev= this.get(index-1);
       if (prev){
        var newNode= new Node (val)
        var temp=prev.next
        prev.next=newNode;
        newNode.next=temp
        this.length++
        return true;
       }
    }
    var foundNode=this.get(index);

 }

 remove(index){
    if (index<0 || index> this.length){
        return undefined;
    }
    if (index===0){
    return this.shift()
    }
    if (index===this.length-1){
    return this.pop()
    }
    else {
        var prevNode=this.get(index-1)
        var removed=prevNode.next
        prevNode.next=removed.next
        this.length--
        return removed;
    }
 }

}


