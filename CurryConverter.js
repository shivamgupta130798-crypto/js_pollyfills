function CurryConverter(func) {
    return function curry(...args) {
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return function (...next) {
                return curry(...args, ...next)
            }
        }
    }
}

const add = (a, b, c) => a + b + c
const res = CurryConverter(add)

console.log(res(2,3,4))