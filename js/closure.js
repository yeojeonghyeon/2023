
// this
// closure
function outer() {
    let count = 0;
    function inner() {
        return count++;
    }
    return inner;
}

const c1 = outer();
console.log(c1());
console.log(c1());

const c2 = outer();
console.log(c2());
console.log(c2());