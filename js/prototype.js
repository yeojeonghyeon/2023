Person.prototype.getVersion = function() {
    return this.version;
};
Person.prototype.version = 1.5;

// 생성자 함수
// 객체를 만들 용도로 사용
function Person(name, age) {
    // 새로운 객체가 만들어지고 {} => this binding
    // {__proto__: Person.prototype}
    // 새로 만들어진 객체를 반환한다
    this.name = name;
    this.age = age;
    this.getInfo = function(){
        return `이름 : ${this.name}, 나이: ${this.age}`;
    };
    this.showInfo = ()=>{
        console.log(`이름 : ${this.name}, 나이: ${this.age}`);
    };
    //return this;
}

const p = new Person("kang", 15);
const p2 = new Person("kim", 25);
console.log(p.getInfo());
p.showInfo();