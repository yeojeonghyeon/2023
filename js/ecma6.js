// 재할당 안됨, 초기화 하면 끝.
// 블럭 스코프
// 선언문이 실행되기 전에 사용 x
const a = 1;
//a = 2;
let b = 1;
b = 2;

// 함수 스코프
// 선언문이 실행되기 전에 사용 가능
var c = 1;
c = 3;

(function(){
    let funcArr = [];
    var i;
    for(i=0; i<10; i++){
        funcArr.push(function(){
            return i;
        });
    }
    // i = 10
    for(let func of funcArr) {
        console.log(func());
    }
})();

(function(){
    let funcArr = [];
    for(let i=0; i<10; i++){
        funcArr.push(function(){
            return i;
        });
    }
    // i = 10
    for(let func of funcArr) {
        console.log(func());
    }
    // 화살표 함수, lambda
    const func = (x, y)=>x+y;
    console.log(func(1, 2));

    // default value, ... 나마지 파라미터를 배열과 유사하게 받음
    function foo(x=1, y=2, ...rest) {
        console.log(x, y, rest);
    }
    foo(2, 3);
    foo();
    foo(1, 2, 3, 4, 5);

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const totalArr = [...arr1, ...arr2];
    console.log(totalArr);
})();