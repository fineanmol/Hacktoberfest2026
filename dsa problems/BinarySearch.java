public class BinarySearch {
    public static int binarySearch(int[] a, int target) {
        int l = 0, r = a.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (a[mid] == target) return mid;
            else if (a[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] a = {1,2,3,4,5,6};
        System.out.println(binarySearch(a, 4)); // expected 3
        System.out.println(binarySearch(a, 7)); // expected -1
    }
}
