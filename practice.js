let arr = [10, 8, 5, 4, 3, 2, 1]
let reduceRes = arr.reduce((acc, curr) => acc * curr, 1)
const wordCount = (str) => str.trim().split(/\s+/).length;
const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);
const duplicateRemove2 = (arr) => [...new Set(arr)]

Array.prototype.myMap = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        let newValue = cb(this[i], i, this)
        temp.push(newValue)
    }
    return temp
}

const duplicateRemove = (arr) => {
    const result = new Array()
    const res = new Set(arr)
    for (let i = 0; i < arr.length; i++) {
        res.add(arr[i])
    }
    for (let i = 0; i < res.size; i++) {
        result.push(res[i])
    }
    return result
}

function find() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
}

const closure = find(); 

closure(6);
closure(12);

function createBase(n) {
  return function (val) {
    console.log(n + val);
  };
}

var addSix = createBase(6);

addSix(5);
addSix(10);

for (var i = 0; i < 5; i++) {
  function inner(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

// Q: How would you use a closure to create a private counter ?

function counter() {
  let _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

const c = counter();
c.add(5);
// console.log("hiiii",c.retrieve())

// Q: What is module design pattern

var Module = (function () {
  function privateMethod() {
    console.log("private");
  }

  return {
    publicMethod: function () {
      console.log("public method");
      console.log("Invoking private method");
      privateMethod();
    },
  };
})();

Module.publicMethod();

// Q Make this run only once

function likeTheVideo() {
  let called = false;
  return function () {
    if (!called) {
      console.log("Liked the video");
      called = true;
    } else {
      console.log("Already called");
    }
  };
}

const fnLike = likeTheVideo();

fnLike();
fnLike();
fnLike();
fnLike();
fnLike();