
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1, l2):
        n1 = 0
        c = l1
        i = 0
        while c:
            t = c.val*(10**i)
            n1 += t
            i += 1
            c = c.next
        n2 = 0
        c = l2
        i = 0
        while c:
            t = c.val*(10**i)
            n2 += t
            i+=1
            c = c.next
        s = n1 + n2
        if s == 0:
            return ListNode(0)
        d = ListNode(0)
        c = d
        while s>0 :
            v = s%10
            s //= 10
            c.next = ListNode(v)
            c = c.next
        head = d.next
        return head