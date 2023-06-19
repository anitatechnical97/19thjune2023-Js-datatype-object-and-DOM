let car1 = {
    //1.  P:V (Many)

    brand:"TATA",
    year:2023,
    model:"Harrier",
    color:"black",
    type:'SUV',
    engine:"EV/Petrol/Diesel",
    price:120000,

    //2.  Function / Method (Many)

    getFullDetail() {

        //  Every function return something.
            return this.brand+" "+this.type+" "+this.price;
    }
}

let car2 = {
    //1.  P:V (Many)

    brand:"Mahindra",
    year:2022,
    model:"Thar",
    color:"black",
    type:'GYPSY',
    engine:"EV/Petrol/Diesel",
    price:200000

    //2.  Function / Method (Many)
}

let car3 = {
    //1.  P:V (Many)

    brand:"Hundai",
    year:2023,
    model:"verna",
    color:"white",
    type:'Sedan',
    engine:"Petrol",
    price:1600000

    //2.  Function / Method (Many)
}


console.log(car1.brand);
console.log(car1.getFullDetail());

/*
 There are 3 methods to access JS Object properties(members).

 1. object.property
 2. object["property"]
 3. object[expression]

*/

console.log(car1.brand);            //  1.  object.property
console.log(car2["brand"]);         //  2.  object["property"]
let x = "brand";
console.log(car3[x]);               //  3.  object[expression]
