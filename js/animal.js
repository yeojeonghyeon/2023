// 즉시실행함수(IIFE)
// 선언하면서 실행
(function(){
    Animal.prototype.describe = function() {
        return `${this.typeOfSpecies} ${whereLives}`       
    };
    Animal.prototype.move = function() {
        console.log("animal moves");
    };
    function Animal(species, livingPlace){
      this.typeOfSpecies = species;
      this.whereLives = livingPlace;
    //   this.describe = function() {
    //     return `${this.typeOfSpecies} ${whereLives}`;
    //   }
    //   this.move = function() {
    //     console.log("animal moves");
    //   }
    }

    var dog = new Animal("개과", "육지");
    var cat = new Animal("고양이과", "육지");
    dog.describe();
    cat.describe();
})();
  