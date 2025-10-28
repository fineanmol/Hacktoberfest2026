import java.util.*;

public class MergeIntervals {
    static class Interval {
        int start, end;
        Interval(int s, int e) { start = s; end = e; }
        public String toString() { return "[" + start + "," + end + "]"; }
    }

    public static List<Interval> merge(List<Interval> intervals) {
        if (intervals == null || intervals.size() <= 1) return intervals;
        intervals.sort(Comparator.comparingInt(a -> a.start));
        List<Interval> res = new ArrayList<>();
        Interval cur = intervals.get(0);
        for (int i = 1; i < intervals.size(); i++) {
            Interval next = intervals.get(i);
            if (next.start <= cur.end) {
                cur.end = Math.max(cur.end, next.end);
            } else {
                res.add(cur);
                cur = next;
            }
        }
        res.add(cur);
        return res;
    }

    public static void main(String[] args) {
        List<Interval> list = Arrays.asList(new Interval(1,3), new Interval(2,6), new Interval(8,10), new Interval(15,18));
        List<Interval> merged = merge(new ArrayList<>(list));
        System.out.println(merged); // expected [[1,6], [8,10], [15,18]]
    }
}
