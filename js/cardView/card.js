document.addEventListener("DOMContentLoaded", function(){
    const animalArr = [{name: "Kitty", src: "cat.jpg", job: "생선도둑 & 집사브러커"}, 
                       {name: "puppy", src: "dog.jpg", job: "놀아주기 & 밥도둑"}];

    const itemImg = document.querySelector("#itemImg");
    const itemTitle = document.querySelector("#itemTitle");
    const itemJob = document.querySelector("#itemJob");
    
    const firstBtn = document.querySelector("#firstBtn");
    const secondBt = document.querySelector("#secondBtn");
    firstBtn.addEventListener("click", function(){
        itemImg.src = animalArr[0].src;
        itemTitle.innerHTML = animalArr[0].name;
        itemJob.innerHTML = animalArr[0].job;
    });
    secondBtn.addEventListener("click", function(){
        itemImg.src = animalArr[1].src;
        itemTitle.innerHTML = animalArr[1].name;
        itemJob.innerHTML = animalArr[1].job;
    });
});