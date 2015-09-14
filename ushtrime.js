//////////////////////////////////// manipulimi me for in loop//////////
var teDhenat= "";
var person = {fname:"Valorina", lname:"Dreshaj", age:2}; 
var variabla;
for (variabla in person) {
    teDhenat += person[variabla]  + " ";
}
console.log(teDhenat.toUpperCase());

////////////////// manipulime me funksione //////////
function person(emri ,mbiemri, mosha , ngjyra) {
    this.name = emri;
    this.lastname = mbiemri;
    this.age = mosha;
    this.eyecolor = ngjyra;
}
var deti = new person("Deti", "Vuthi", 1, "blue");
var era = new person("Valorina", "Dreshaj", 24, "black");
console.log("My name is " +deti['name'].toUpperCase()+ " and my last name is " + deti.lastname.toUpperCase());
console.log("My eye color is " + deti.eyecolor.toUpperCase() + ". My age is  " + deti.age);
console.log("My name is " + era.name.toUpperCase() + ". My last name is " + era.lastname.toUpperCase());
console.log("My age is " + era.age + ". My eye color is " + era.eyecolor.toUpperCase());

///////////////// manipulimet me Array ///////
var veturat= "";
var cars = ["Saab", "Volvo","BMW", "audi","mercedes"];
var llojet;
for (llojet in cars) {
    veturat += cars[llojet]  + " ";
}
console.log(veturat.toUpperCase());

//////// bashkimi i arrave//////
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi"; 
var str =fruits.concat("peach","green apple")
console.log(str);
