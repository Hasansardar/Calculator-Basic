const btn1 = document.querySelector("#numAdd");
const btn2 = document.querySelector("#numSub");
const btn3 = document.querySelector("#numMul");
const btn4 = document.querySelector("#numDiv");

let sumel= document.getElementById("sum-el");
let num1 = 8;
let num2 = 2;

function sum(){

let result= num1+ num2;
sumel.textContent= "Sum:" +" " + result;
}

function Subtract(){

    let result= num1- num2;
    sumel.textContent= "Subtract:" +" " + result;
    }

    function Multiply(){

        let result= num1*num2;
        sumel.textContent= "Multiply:" +" " + result;
        }

        function Divide(){

            let result= num1/num2;
            sumel.textContent= "Divide:" +" " + result;
            }



btn1.addEventListener("click", sum);
btn2.addEventListener("click", Subtract);
btn3.addEventListener("click", Multiply);
btn4.addEventListener("click", Divide);