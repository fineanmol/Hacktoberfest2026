import java.util.Random;

public class KthLargestElement {
    private static final Random rand = new Random();

    public static int findKthLargest(int[] nums, int k) {
        return quickSelect(nums, 0, nums.length - 1, nums.length - k);
    }

    private static int quickSelect(int[] a, int l, int r, int index) {
        if (l == r) return a[l];
        int pivotIndex = l + rand.nextInt(r - l + 1);
        pivotIndex = partition(a, l, r, pivotIndex);
        if (index == pivotIndex) return a[index];
        else if (index < pivotIndex) return quickSelect(a, l, pivotIndex - 1, index);
        else return quickSelect(a, pivotIndex + 1, r, index);
    }

    private static int partition(int[] a, int l, int r, int pivotIndex) {
        int pivot = a[pivotIndex];
        swap(a, pivotIndex, r);
        int store = l;
        for (int i = l; i < r; i++) {
            if (a[i] < pivot) {
                swap(a, store, i);
                store++;
            }
        }
        swap(a, store, r);
        return store;
    }

    private static void swap(int[] a, int i, int j) {
        int t = a[i]; a[i] = a[j]; a[j] = t;
    }

    public static void main(String[] args) {
        int[] arr = {3,2,1,5,6,4};
        System.out.println(findKthLargest(arr, 2)); // expected 5
    }
}
