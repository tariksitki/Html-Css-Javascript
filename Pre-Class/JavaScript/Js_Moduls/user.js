
import {user} from "./app.js";
console.log(user);

    /// adresleme de ./ kullanmak zorundayiz
import { myFunc } from "./app.js";
// myFunc();


import {myProto} from "./app.js";
let myObject = new myProto("John", "Kennedy", 1997);
console.log(myObject);



import { myClass } from "./app.js";
let myAuto = new myClass("Mercedes", "EQS");
console.log(myAuto);



import { myClass2 } from "./app.js";
let myAuto2 = new myClass2("Mercedes", "E200", 2022);
console.log(myAuto2);



import { MyFirma } from "./app.js";
let firma1 = new MyFirma(10);
console.log(firma1);

let firma1_total_gider = firma1.calculate(5000, 50000, 4000);
console.log(firma1_total_gider);





////////  get set:

import { myCities } from "./app.js";
let city1 = new myCities("Turkey", "Izmir");
console.log(city1);

let myGet = city1.name;
console.log(myGet);

    /// set:
city1.name = "Germany";
console.log(city1);


    ///////  static:
    // class a direkt disaridan erisim.
myCities.func();








////
import { myObject2 } from "./app.js";
myObject2.name = "Alexander";
console.log(myObject2);












