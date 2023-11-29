console.log("hello world");

document.addEventListener("DOMContentLoaded", function(){
    const plusBtn = document.querySelector("#plusBtn");
    const minusBtn = document.querySelector("#minusBtn");
    const showIpt = document.querySelector("#showIpt");

    plusBtn.addEventListener("click", function(){
        showIpt.value = parseInt(showIpt.value) + 1;
    });
    // minusBtn이 클릭 되었을 때 처리되는 함수를 등록
    minusBtn.addEventListener("click", function(){
        showIpt.value = parseInt(showIpt.value) - 1;        
    });
});