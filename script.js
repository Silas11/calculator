var v1;
var v2;
var rechenzeichen = "";

        
function fnumbers(value){
    document.getElementById("displayBox").value += value   
}

function fadition(){
    this.v1 = parseInt(document.getElementById("displayBox").value, 10)
    calculate()
    this.rechenzeichen = "+";
    document.getElementById("displayBox").value = '';
}

function fsubtraction(){
    this.v1 = parseInt(document.getElementById("displayBox").value, 10)
    calculate()
    this.rechenzeichen = "-";
    document.getElementById("displayBox").value = '';
}

function fmultiplication(){
    this.v1 = parseInt(document.getElementById("displayBox").value, 10)
    calculate()
    this.rechenzeichen = "*";
    document.getElementById("displayBox").value = '';
}

function fdivision(){
    this.v1 = parseInt(document.getElementById("displayBox").value, 10)
    calculate()
    this.rechenzeichen = "/";
    document.getElementById("displayBox").value = '';
}

function calculate() {
    switch(rechenzeichen){
        case '+':
            result = this.v1 + parseInt(document.getElementById("displayBox").value, 10);
            document.getElementById("displayBox").value = result;
            break;
        case '-':
            result = this.v1 - parseInt(document.getElementById("displayBox").value, 10);
            document.getElementById("displayBox").value = result;
            break;
        case '*':
            result = this.v1 * parseInt(document.getElementById("displayBox").value, 10);
            document.getElementById("displayBox").value = result;
            break;
        case '/':
            result = this.v1 / parseInt(document.getElementById("displayBox").value, 10);
            document.getElementById("displayBox").value = result;
            break;
    }
}

function fresult() {
    this.calculate();
}

function fclear() {
    document.getElementById("displayBox").value = '';
    this.v1 = 0;
    this.v2 = 0;
}