const result = operator((x, y)=>{
    return x + y;
}, 1, 2);

const result1 = operator(function(x, y){
    return x - y;
}, 2, 3);
console.log(result1);
console.log(result);

function operator(opFunc, x, y) {
    return opFunc(x, y);
}

const c = outer();

console.log(c());
console.log(c());
console.log(c());

const d = outer();
console.log(d());
console.log(d());
console.log(d());
// closure
// 내부 함수가 외부 함수의 변수를 사용하고 내부 함수의 레퍼런스가 살아있을 때
// 외부 함수의 식별자 정보(변수, 함수) 사라지지 않고 유지됨
function outer() {
    let counter = 0;
    return function(){
        counter++;
        return counter;
    };
}
