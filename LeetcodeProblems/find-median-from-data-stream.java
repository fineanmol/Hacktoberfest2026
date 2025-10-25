
class MedianFinder {
  public void addNum(int num) {
    if (maxHeap.isEmpty() || num <= maxHeap.peek())
      maxHeap.offer(num);
    else
      minHeap.offer(num);

    if (maxHeap.size() < minHeap.size())
      maxHeap.offer(minHeap.poll());
    else if (maxHeap.size() - minHeap.size() > 1)
      minHeap.offer(maxHeap.poll());
  }

  public double findMedian() {
    if (maxHeap.size() == minHeap.size())
      return (double) (maxHeap.peek() + minHeap.peek()) / 2.0;
    return (double) maxHeap.peek();
  }

  private Queue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
  private Queue<Integer> minHeap = new PriorityQueue<>();
}
