
// 선언 후에 값을 바꿀 수 있음
//var
// 값 할당 후 바꿀 수 없음
//const
// 선언 후에 값을 바꿀 수 있음
//let
// json
const person = {name: "kim", age: 25};

console.log(person.name);
console.log(person.age);

const result = concat(person);

console.log(result);

function concat(p) {
    return `이 사람의 정보는 : ${p.name} ${p.age}`;
}

const personArr = [{name: "kim", age: 12}, {name: "kang", age: 25}];
// 배열 0인덱스의 요소를 접근
console.log(personArr[0]);
console.log(personArr[1]);

for(const p of personArr) {
    console.log(p);
}

modify(person);

console.log(person);

function modify(p) {
    p.name = "hwang";
}


const p = {};
p.name = "kim";
const o = new Object();
o.name = "kang";