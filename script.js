function change() {
    var numOne = document.querySelector("#num1").value;
    var numTwo = document.querySelector("#num2").value;
    var numThree = document.querySelector("#num3").value;
    var bNumOne = parseFloat(31) - parseFloat(numOne)
    var bNumTwo = parseFloat(12) - parseFloat(numTwo)
    var bNumThree = parseFloat(2023) - parseFloat(numThree)
    var outPutMessage = "your age is " + bNumThree + " Years " + bNumTwo + " Months " + bNumTwo + " Days"
    document.querySelector("#output").innerHTML = outPutMessage

}