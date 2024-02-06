function change() {
    var numOne = document.querySelector("#num1").value;
    var numTwo = document.querySelector("#num2").value;
    var numThree = document.querySelector("#num3").value;
    var bNumOne = parseInt(2) - parseInt(numOne)
    var bNumTwo = parseInt(2) - parseInt(numTwo)
    var bNumThree = parseInt(2024) - parseInt(numThree)
    if (bNumTwo < 0) {
        bNumTwo = bNumTwo + 12
        bNumThree = bNumThree - 1
    }


    var outPutMessage = "your age is " + bNumThree + " Years " + bNumTwo + " Months " + bNumTwo + " Days"
    document.querySelector("#output").innerHTML = outPutMessage

}