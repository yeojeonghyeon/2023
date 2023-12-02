function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `이름은 : ${this.name}, 나이는 ${this.age}`;
    }
}
// new + 함수호출 (생성자)
// {} 객체가 생성이 되고, this에 바인됭
const p = new Person("hong", 25);
console.log(p.getInfo());
console.log(p);
const p2 = new Person("King", 87);
console.log(p2);

function foo() {
    console.log(this.age);
}

// 함수는 Function 객체
// Function.prototype.apply
foo.apply(p);
foo.apply(p2);

p.foo = foo;
// this <= Person {name: "hong", age: 25}
p.foo();

// this <= window
foo();