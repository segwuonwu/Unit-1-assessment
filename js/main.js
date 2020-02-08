var output = document.getElementById('output');
var plus = document.getElementById('plus');
var input = document.getElementById('input');
var minus = document.getElementById('minus');

var initialValue = 0;

input.value = 1;
output.value = initialValue;

plus.addEventListener('click', function() {
    initialValue += parseInt(input.value);
    output.value = parseInt(initialValue);
    if (output.value < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
    return output.value;
});

minus.addEventListener('click', function() {
    initialValue -= parseInt(input.value);
    output.value = parseInt(initialValue);
    if (output.value < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
    return output.value;
})