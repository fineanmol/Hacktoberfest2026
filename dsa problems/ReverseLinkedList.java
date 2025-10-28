public class ReverseLinkedList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int v) { val = v; }
    }

    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public static void main(String[] args) {
        ListNode n1 = new ListNode(1);
        n1.next = new ListNode(2);
        n1.next.next = new ListNode(3);
        ListNode r = reverseList(n1);
        while (r != null) {
            System.out.print(r.val);
            if (r.next != null) System.out.print(" -> ");
            r = r.next;
        }
        System.out.println(); // expected 3 -> 2 -> 1
    }
}
