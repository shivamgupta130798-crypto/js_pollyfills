const assert = require('node:assert/strict');

console.log(assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]));