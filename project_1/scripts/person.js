'use strict';
function person(){
   var firstName='' ;//private variable
    
    var lastName='';
    this.address='Texas';//local variable 
  
    
    
    this.setFirstName=function(fname){
        
        firstName=fname;
    }
    this.getFirstName=function(){
        return firstName;
    }
    this.setLastName=function(lname){
        
        lsatName=lname;
    }
    this.getLastName=function(){
        return lirstName;
    }
    
    
    
    
}
var personObj =new person();
console.log(personObj.address);
personObj.setFirstName('john');
console.log(personObj.getFirstName());
personObj.setLastName('smith');
console.log(personObj.getLastName());s


