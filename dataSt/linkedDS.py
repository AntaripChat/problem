class node:
    def __init__(self,data):
        self.data = data
        self.next = None

class Linkedlist:

    def __init__(self):
        self.head = None

    def printList(self):
        tem = self.head

        while(tem):
            print(tem.data)
            tem = tem.next

if __name__ == '__main__':

    list = Linkedlist()

    list.head = node(1)

    sec = node(2)

    ana = node(4)

    ter = node(3)

    list.head.next = sec

    sec.next = ana



    list.printList()

