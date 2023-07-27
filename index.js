/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid it

1- Open bracket must be closed by the same type of brackets
2- Open brackets must be closed in the correct order

Constraints:

1- s.length <= 184
s consists of parenthesis only '(){}[]'

{{}}()[()]
(())()()

*/

const patterns = ['()', '{}', '[]']


function isValid(str) {
    let flag = true
    let first = []
    let second = []
    let newArr = []

    const splitStr = str.split('')

    if (splitStr.length % 2 !== 0) {
        return "InValid"
    }

    for (let index = 0; index < splitStr.length; index++) {
        if (patterns.includes(`${splitStr[index]}${splitStr[index + 1]}`)) {
            delete splitStr[index]
            delete splitStr[index + 1]
        }
    }

    for (let index = 0; index < splitStr.length; index++) {
        if (splitStr[index]) {
            newArr.push(splitStr[index])
        } 
    }

    if (newArr.length) {
        const mid = newArr.length / 2

        for (let index = 0; index < mid; index++) {
            first.push(newArr[index]) 
        }

        for (let index = mid; index < newArr.length; index++) {
            second.push(newArr[index]) 
        }

        let count = second.length;

        for (let index = 0; index < mid; index++) {
            if (patterns.includes(first.join(''))) {
                flag = true
            } else if (patterns.includes(second.join(''))) {
                flag = true
            } else if (patterns.includes(`${first[index]}${second[index]}`)) {
                flag = true
            } else if (patterns.includes(`${first[index]}${second[count]}`)) {
                flag = true
            } else {
                false
            }            
        }
    }
    return flag ? 'valid' : "Invalid"
}

console.log(isValid('[{}]'))
