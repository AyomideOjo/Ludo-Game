console.log('Hello World!');
// https://2ality.com/2018/12/creating-arrays.html#:~:text=One%20common%20way%20of%20creating,has%20holes%20in%20it%20assert.
const LEN = 72;
const arr = new Array(LEN);
assert.equal(arr.length, LEN);

assert.deepEqual(Object.keys(arr), []);
