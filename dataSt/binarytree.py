class add:
    def __init__(self,key):
        self.right = None
        self.left = None
        self.vlu = key

    def tra(self):
        print(self.vlu, end='')
        if self.left:
            self.left.tra()
        if self.right:
            self.right.tra()

    def ino(self):
        if self.left:
            self.left.ino()
        print(self.vlu, end='')
        if self.right:
            self.right.ino()


root = add(1)
root.left = add(2)
root.right = add(3)
root.left.left = add(4)
root.tra()
print('\n')
root.ino()
    