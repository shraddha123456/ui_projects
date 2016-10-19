'use strict';
function calculation(){
    var firstNum1=0;//private variable
    var secondNum2=0;//private variable
    this.setfirstNum1=function(fnum1){
        firstNum1=fnum1;
    }
    this.getfirstNum1=function(){
        return firstNum1;
    }
this.setsecondNum2=function(snum2){
        secondNum2=snum2;
    }
    this.getsecondNum2=function(){
        return secondNum2;
    }
}
function add(fnum1,snum2){
    return fnum1+snum2;
}
function multiply(fnum1,snum2){
 return fnum1*snum2;   
}
function divide(fnum1,snum2){
 return fnum1/snum2;   
    
}
function substract(fnum1, snum2){
    return fnum1-snum2;
}
var calculationObj =new calculation();
//console.log(personObj.address);

calculationObj.setfirstNum1(5);
//console.log();

calculationObj.setsecondNum2(8);
//console.log();s

console.log(add(calculationObj.getfirstNum1(),calculationObj.getsecondNum2()))
console.log(multiply(calculationObj.getfirstNum1(),calculationObj.getsecondNum2()))
console.log(divide(calculationObj.getfirstNum1(),calculationObj.getsecondNum2()))
console.log(substract(calculationObj.getfirstNum1(),calculationObj.getsecondNum2()))