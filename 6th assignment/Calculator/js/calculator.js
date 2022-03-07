var calculate = document.getElementById("calculate");
var aaa = document.getElementById("res");

$("input").click(function() {
    myNumVal = $(this).val();
    // console.log(myNumVal);
    calculate.value += myNumVal;
});

function calResult() {
    document.getElementById("historyBlock").style.display = "block";
    let myNum = calculate.value;
    // console.log("Called" + myNum);
    let a = myNum;
    if (myNum == "")
        alert("Enter Number")
    else {
        // console.log(myNum);
        result = eval(myNum);
        calculate.value = result;

        var op = document.createElement("p");
        op.innerHTML = a + " = " + result;
        document.getElementById("res").appendChild(op);

    }

}

function Clear() {
    myNum = "";
    calculate.value = "";
    // console.log(myNum);
}