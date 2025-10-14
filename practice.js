let arr = [ 10, 8, 5, 4, 3, 2, 1]

let reduceRes = arr.reduce((acc, curr) => acc * curr, 1)
console.log(reduceRes);


Array.prototype.map = function (cb){
    let temp =[]
    for(let i =0; i < this.length; i++){
        let newValue = cb(this[i], i, this)
        temp.push(newValue)
    }
    return temp
}

let res = arr.map(i => i + i)

console.log(res)