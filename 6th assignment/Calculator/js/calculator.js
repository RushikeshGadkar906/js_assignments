var calculate = document.getElementById("calculate");
<<<<<<< HEAD
var aaa = document.getElementById("res");
=======
>>>>>>> 4d76ef6908185e5f8eca4f6a69fbb19187026782

$("input").click(function() {
    myNumVal = $(this).val();
    // console.log(myNumVal);
    calculate.value += myNumVal;
});

<<<<<<< HEAD
function calResult() {
    document.getElementById("historyBlock").style.display = "block";
    let myNum = calculate.value;
    // console.log("Called" + myNum);
    let a = myNum;
=======
function result() {
    let myNum = calculate.value;

>>>>>>> 4d76ef6908185e5f8eca4f6a69fbb19187026782
    if (myNum == "")
        alert("Enter Number")
    else {
        // console.log(myNum);
        result = eval(myNum);
        calculate.value = result;
<<<<<<< HEAD

        var op = document.createElement("p");
        op.innerHTML = a + " = " + result;
        document.getElementById("res").appendChild(op);

    }

=======
    }
>>>>>>> 4d76ef6908185e5f8eca4f6a69fbb19187026782
}

function Clear() {
    myNum = "";
    calculate.value = "";
    // console.log(myNum);
<<<<<<< HEAD
}

function clearHis() {
    var removeDiv = document.getElementById("res");
    removeDiv.parentNode.removeChild(removeDiv);
=======
>>>>>>> 4d76ef6908185e5f8eca4f6a69fbb19187026782
}