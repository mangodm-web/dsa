class Node:
    def __init__(self, value):
        self.value = value
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.tail = new_node
        self.length = 1


    def print_list(self):
        temp = self.head 

        while temp:
            print(temp.value)
            temp = temp.next
            

    def append(self, value):
        new_node = Node(value)
        
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return True


    def pop(self):
        if self.head is None:
            return None
        temp = self.tail
        self.tail = self.tail.prev
        self.tail.next = None 
        temp.prev = None

        self.length -= 1

        if self.head is None:
            self.head = None 
            self.tail = None

        return temp


    def prepend(self, value):
        new_node = Node(value)
        
        if self.head is None:
            self.head = new_node 
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

        self.length += 1
        return
  
dl = DoublyLinkedList(3)
dl.prepend(4)
dl.append(7)

dl.print_list()
