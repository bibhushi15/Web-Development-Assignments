const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetbutton = document.getElementById("resetbutton");

// Change color dynamically
colorPicker.addEventListener("input", function () {
    colorBox.style.backgroundColor = colorPicker.value;
});
resetbutton.addEventListener("click", function () {
    colorBox.style.backgroundColor = "red";
});