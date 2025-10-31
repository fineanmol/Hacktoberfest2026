public class ReverseNodeKGroupSize {
    private static Node CovertArr2LL(int[] arr) {
        Node head = new Node(arr[0]);
        Node tmp = head;
        for (int i = 1; i < arr.length; i++) {
            tmp.next = new Node(arr[i]);
            tmp = tmp.next;
        }
        return head;
    }
    private static void printLL(Node head) {
        Node tmp = head; 
        while (tmp != null) {
            System.out.print(tmp.data + " ");
            tmp = tmp.next;
        }
        System.out.println();
    }


    // TC -> O(N) + O(N)
    // SC -> O(1)
    private static Node reverseLL(Node head) {
        Node prev = null;
        Node curr = head;
        while (curr != null) {
            Node next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    private static Node findKthNode(Node head, int k) {
        k -= 1;
        while (head != null && k > 0) {
            k--;
            head = head.next;
        }
        return head;
    }
    public static Node reverseKGroup(Node head, int k) {
        Node tmp = head;
        Node prevNode = null;
        while (tmp != null) {
            Node kthNode = findKthNode(tmp,k);
            if (kthNode == null) {
                if (prevNode != null) prevNode.next = tmp;
                break;
            }
            Node nxtNode = kthNode.next;
            kthNode.next = null;
            reverseLL(tmp);
            if (tmp == head) {
                head = kthNode;
            }
            else prevNode.next = kthNode;
            prevNode = tmp;
            tmp = nxtNode;
        }
        return head;
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8};
        Node head = CovertArr2LL(arr);
        int k = 3;
        printLL(head);

        head = reverseKGroup(head, k);
        printLL(head);
    }
}
