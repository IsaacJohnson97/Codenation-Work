/* CHALLENGES */

let string =("Isaac")
let num = 22
let bool = true 

let array1 = ["item1","item2","item3","item4",]
array1.push("item5")
console.log(array1)

for(arrayIndex = 0; arrayIndex<array1.length; arrayIndex++){
    console.log(array1[arrayIndex]);
}


const person = {

    withdrawal: 150,
    balance: 500,
    
account(){
    newbalance = (person['balance'] - person['withdrawal']);
    return `you withdrew ${this.withdrawal} pounds. You have ${this.newbalance} pounds left in your account.`;
}};

    console.log(person.account())