function uniquePermutations(s) {
  const chars = s.split('').sort();          // sorting groups duplicates
  const used = Array(chars.length).fill(false);
  const result = [];
  const path = [];

  function backtrack() {
    if (path.length === chars.length) {
      result.push(path.join(''));
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      if (used[i]) continue;

      // Skip duplicates: only use the first unused occurrence in a group
      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(chars[i]);
      backtrack();
      path.pop();
      used[i] = false;
    }
  }

  backtrack();
  return result;
}

// ---- Quick tests ----
console.log(uniquePermutations("abc")); // ["abc","acb","bac","bca","cab","cba"] (order may vary)
console.log(uniquePermutations("aab")); // ["aab","aba","baa"]
console.log(uniquePermutations("aaa")); // ["aaa"]
console.log(uniquePermutations("a"));   // ["a"]
console.log(uniquePermutations("abcd").length); // 24
