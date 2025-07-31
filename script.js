//your JS code here. If required.
let selectedValue;
document.getElementById("colorSelect").addEventListener("change", function () {
    const elements = document.getElementById("colorSelect").children;
    selectedValue = this.value;
    
})

document.querySelector("input[type='button']").addEventListener("click", function () {
    const elements = document.getElementById("colorSelect").children;

    for(let i = 0; i < elements.length; i++) {
        if(elements[i].textContent === selectedValue) {
            elements[i].remove();
        }
    }
})