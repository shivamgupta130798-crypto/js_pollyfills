let arr = [ 10, 8, 5, 4, 3, 2, 1]

let reduceRes = arr.reduce((acc, curr) => acc * curr, 1)
 

Array.prototype.myMap = function (cb){
    let temp =[]
    for(let i =0; i < this.length; i++){
        let newValue = cb(this[i], i, this)
        temp.push(newValue)
    }
    return temp
}

let res = arr.myMap(i => i + i)

const wordCount = (str) => str.trim().split(/\s+/).length;



console.log('a')
setTimeout(()=> console.log('b'),0)
Promise.resolve().then(console.log('c'))
console.log('d')