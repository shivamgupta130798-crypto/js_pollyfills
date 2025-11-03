function reverseString(input) {
    if (input === '') return ''

    return reverseString(input.substring(1)) + input.charAt(0)
}

function capitalize(input) {
    if (typeof input !== 'string' || input.length === 0) return ''

    return input.charAt(0).toUpperCase() + input.slice(1)
}

function uppercase(input) {
    if (typeof input !== 'string' || input.length === 0) return ''

    return input.charAt(0).toUpperCase() + uppercase(input.substring(1))
}

function palindrome(input) {
    if (input.length === 0 || input.length === 1) return true

    if(input.charAt(0) === input.charAt(input.length - 1)){
        return palindrome(input.substring(1, input.length - 1))
    }
    return false
}

let arr = ["madam", "racecar", "level", "rotor", "kayak", "refer", "stats", "noon", "pop", "aba", "12321"]

arr.map((i) => console.log(palindrome(i)))
