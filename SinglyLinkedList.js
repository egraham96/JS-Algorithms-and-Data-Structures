/*Pushing to a Singly Linked List:
-Write a function that accepts a value. With that value, create a new node. If there is no head property
on the list, set the head and tail property to be the newly created node. Otherwise, set the next property on the tail
to be the new node and set the tail property on the list to be the newly created node. Increment length of list by one. */
/*class Node {
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
*/
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
            
            
        }
}
}

var newList=new SinglyLinkedList();
newList.push("Emma")
newList.push("Juju")
newList.push("Sue")
newList.push("Nugget")
newList.push("Danica")
console.log(newList)
newList.pop()
console.log(newList)


