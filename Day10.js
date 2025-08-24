function groupAnagrams(strs) {
    let map = new Map();

    for (let word of strs) {
        // अक्षरे sort करून key तयार करतो
        let key = word.split("").sort().join("");
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(word);
    }

    // map मधले values (सगळे groups) array मध्ये convert करून परत करतो
    return Array.from(map.values());
}

// 🔎 Test Cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]

console.log(groupAnagrams(["abc","bca","cab","xyz","zyx","yxz"]));
// Output: [["abc","bca","cab"],["xyz","zyx","yxz"]]
