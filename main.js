// n/2[2 * a + (n − 1) * d]
// n = last number
// a = first number
// d = step up

function calc() {
    a = (typeof parseInt(document.getElementById("input1").innerHTML.trim()) !== undefined) ? parseInt(document.getElementById("input1").innerHTML.trim()):0;
    n = (typeof parseInt(document.getElementById("input2").innerHTML.trim()) !== undefined) ? parseInt(document.getElementById("input2").innerHTML.trim()):0;
    console.log(a)
    d=1
    s = n/2 * (2 * a + (n - 1) * d);
    document.getElementById("output").innerHTML = s;
}
window.onload = (event) => {
    setInterval(calc(), 300)
}