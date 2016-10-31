'use strict';// creating json prog

var person={
    firstName:"john",
    lastName:"doe",
    address:"123asbdfd",
    dob:"12/12/2012",
    test:function(){  // test is variable and function is function
    console.log("form Test");
},
  test2:outsideFunc,  
  sampleObj:{
         account:"1200",
balance:"Na",
car:["toyota","honda"],
    complexArray:[        // array 0 index
        {
            fruit:"Apple",
            pet:"dog"
        },
        {                 // array 1 index
           fruit:"mango",
            pet:"cat"
        }
    ]
  }
};

function outsideFunc(){
    console.log("form outside");
    
}





console.log(person.firstName);//dot notation
console.log(person['firstName']);//hash array
console.log(person.lastName);
console.log(person.address);
console.log(person.dob);
person.test();
person.test2();

console.log(person.sampleObj.account);
person.sampleObj.balance=500;//update value
console.log(person.sampleObj.balance);
console.log(person.sampleObj.complexArray[1]['fruit']);

