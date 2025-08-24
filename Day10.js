/* Problem : Group Anagrams
You are given an array of strings strs[]. Your task is to group all the strings that are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
The goal is to return the grouped anagrams as a list of lists, where each sublist contains words that are anagrams of each other.

Input :
An array of strings strs[] consisting of lowercase English letters.
Input: strs[] = ["eat", "tea", "tan", "ate", "nat", "bat"]

Output :
A list of lists, where each sublist contains strings that are anagrams of each other. The order of the output groups does not matter.
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] */


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
