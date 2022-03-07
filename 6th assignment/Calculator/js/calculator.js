var calculate = document.getElementById("calculate");

$("input").click(function() {
    myNumVal = $(this).val();
    // console.log(myNumVal);
    calculate.value += myNumVal;
});

function result() {
    let myNum = calculate.value;

    if (myNum == "")
        alert("Enter Number")
    else {
        // console.log(myNum);
        result = eval(myNum);
        calculate.value = result;
    }
}

function Clear() {
    myNum = "";
    calculate.value = "";
    // console.log(myNum);
}