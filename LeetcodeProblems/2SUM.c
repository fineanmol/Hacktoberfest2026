#include <stdio.h>

int countPairs(int arr[], int n, int target) {
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                cnt++;
            }
        }
    }
    return cnt;
}

int main() {
    int arr[] = {1, 5, 7, -1, 5};
    int target = 6;
    int n = sizeof(arr) / sizeof(arr[0]);
    printf("%d\n", countPairs(arr, n, target));
    return 0;
}