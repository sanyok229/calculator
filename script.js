let activeButton = document.querySelectorAll(".active-button")
let btnClear = document.querySelector(".clear")
let btnEqual = document.querySelector(".equal")

activeButton.forEach(btn => {
    btn.addEventListener("click", function(){
        let input = document.querySelector(".number")
        input.value = input.value + btn.value
    })
})

btnClear.addEventListener("click", function(){
    document.querySelector(".number").value = ""
})

btnEqual.addEventListener("click", function(){
    let input = document.querySelector(".number")
    input.value = eval(input.value)
})