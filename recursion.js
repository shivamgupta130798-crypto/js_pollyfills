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

    if (input.charAt(0) === input.charAt(input.length - 1)) {
        return palindrome(input.substring(1, input.length - 1))
    }
    return false
}

let arr = ["madam", "racecar", "level", "rotor", "kayak", "refer", "stats", "noon", "pop", "aba", "12321"]

// arr.map((i) => console.log(palindrome(i)))

function decimalToBinary(input, result) {
    if (input === 0) return result

    result = String(Math.floor(input % 2) + result)
    return decimalToBinary(Math.floor(input / 2), result)
}

async function sumOfNaturalNumbers(n, acc = 0) {
  if (n <= 0) return acc;
  if (n % 1000 === 0) await new Promise(r => setImmediate(r));
  return sumOfNaturalNumbers(n - 1, acc + n);
}

function sumRecursive(n, acc = 0, cb) {
  if (n <= 0) return cb(acc);
  if (n % 1000 === 0) return setImmediate(() => sumRecursive(n - 1, acc + n, cb));
  sumRecursive(n - 1, acc + n, cb);
}

sumRecursive(10, 0, result => {
  console.log(result);
});

