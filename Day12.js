/*You are given a string s consisting of different types of parentheses: (), {}, and []. Your task is to determine whether the given string is valid.

A string is considered valid if:

1. Every opening bracket has a corresponding closing bracket of the same type.

2. The brackets are closed in the correct order. This means that a closing bracket

must close the most recent unmatched opening bracket.*/

function isValid(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // जर closing bracket असेल
        if (char in map) {
            let top = stack.length > 0 ? stack.pop() : '#';
            if (map[char] !== top) {
                return false;
            }
        } else {
            // opening bracket असेल तर stack मध्ये टाक
            stack.push(char);
        }
    }

    // शेवटी stack रिकामा असेल तर valid
    return stack.length === 0;
}

// Test Cases
console.log(isValid("()"));      // true
console.log(isValid("([)]"));    // false
console.log(isValid("{[()]}"));  // true
console.log(isValid(""));        // true
console.log(isValid("{[]("));    // false
