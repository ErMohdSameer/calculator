function solve(val) {
    var v = document.getElementById('answer');
    v.value += val;
 }
 function result() {
    var num1 = document.getElementById('answer').value;
    var num2 = eval(num1);
    document.getElementById('answer').value = num2;
 }
 function clear() {
    var inp = document.getElementById('answer');
    inp.value = '';
 }
