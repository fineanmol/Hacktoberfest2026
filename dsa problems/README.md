# DSA Problems (Java)

This folder contains a selection of commonly asked interview data-structures & algorithms problems implemented in Java. Each file includes a simple `main` with example usage for quick smoke tests.

Included problems:

- `TwoSum.java` — HashMap two-sum solution
- `ReverseLinkedList.java` — Iterative reverse of a singly linked list
- `MergeIntervals.java` — Merge overlapping intervals
- `ValidParentheses.java` — Parentheses/brace matching
- `LongestSubstringWithoutRepeatingCharacters.java` — Sliding window
- `KthLargestElement.java` — Quickselect (kth largest)
- `TopKFrequentElements.java` — Map + min-heap
- `BinarySearch.java` — Iterative binary search

How to compile (from repository root on Windows PowerShell):

```powershell
javac "dsa problems\*.java"
```

Run an example (class must be on classpath):

```powershell
java -cp "dsa problems" TwoSum
java -cp "dsa problems" BinarySearch
```

Feel free to request more problems or tests (linked lists, trees, DP, graphs, LRU cache, etc.).
