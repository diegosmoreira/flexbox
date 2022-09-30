const switcher = document.getElementById("switcher");
const boxContainer = document.getElementsByClassName("box-container");

switcher.addEventListener("change", (event) => {
    console.log(boxContainer[0])
    boxContainer[0].style.flexDirection = event.target.value;
});