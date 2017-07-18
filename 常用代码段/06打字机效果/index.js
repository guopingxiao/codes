var index = 0;
var word = document.getElementById("w").innerHTML;
console.log(word)

function type() {
    document.getElementById("aa").innerText = word.substring(0, index++);
}
setInterval(type, 500);