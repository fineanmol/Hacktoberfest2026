function longestSubstring(s) {
  let start = 0;
  let maxLength = 0;
  let seen = new Map(); // Stores character -> last index

  for (let end = 0; end < s.length; end++) {
    if (seen.has(s[end]) && seen.get(s[end]) >= start) {
      start = seen.get(s[end]) + 1; // Move start to avoid duplicate
    }
    seen.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
let input = "abcabcbb";
console.log("Longest substring length:", longestSubstring(input)); // Output: 3
