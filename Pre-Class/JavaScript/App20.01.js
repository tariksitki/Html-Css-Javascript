console.log("I am from file");

// eger html ye tanimlamazsak consol da cikmaz 

var x = 7;
var y = 5;

console.log(x);
console.log({x});

y = x ;
console.log();

// Js otomatik olarak ; tamamlar 

// isimlenidrme de for reserved dir 
// ama For calisir. ama yine de kullanmamakta fayda var 


// var alert = "Merhaba";
// console.log(alert);

// bunu let ile de yapsak aynisi olur 

// Bu sekilde yaparsak mesela alertin yapisi 
// variable olarak degisir ve asil alert calismaz

// alert("hey"); 


// consol ekranina window yazip tikliyoruz
// ama akrani yenileyince gider 

// var yerine artik let ve const kullanilir 


// scope 
// hocam variable sadece süslü parantez icinde cagrilabilir. disinda kullanilamaz

var a = "Global";
console.log(a);

{
    let a = "Scope";
    console.log(a);

    {
        let a = "inner scope";
        console.log(a);
    }
            // en icte inner yazarken var felan yazmadigimiz icin üsttekini aldi 
    console.log(a);
}

console.log(a);

// süslü parantez ici hafiza da yer isgal etmez 
// ici ice scope acilabilir 
// süslü parantezt icinde var kullanmazsak yukaridakini cagirmis
// oluruz ve yukaridaki globali bozar
// var let yada const kullanilabilir parantez icinde

// mesela dairenin yaricapini hesapladik ciktik ve 
// birdaha buna ihtiyacimiz olmayacak ve bunun 
// programi yavaslatmamasi icin scope kullaniriiz 




var c = 3;

console.log(c);

var c = 5;

console.log(c);


// bunu let ile yapalim 

// let c = 3;

// console.log(c);

// let c = 5;

// console.log(c);

// ikisi de yukaridaki gibi olursa hata olur 
// ikisinde de declare ediyoruz

// ikinci de let kullanmayacagiz 


// var led const yazmadan yazarsak temiz kod olmaz

// default olarak const kullaniriz 
// eger degistirmek istersek let yapariz 


// var a = 5;
// let aa = 3;
// simdi consol da window yazip icine bakalim 
// yer isgal edip etmedigine 

// let aa ile yazilan hemen gitmez hemen yer isgal etmez

// var la yapilan ise hemen hafizada yer isgal eder
// kullanmasak bile stack de buna bir yer tahsisi yapilir




// const da ilk atama yapmadan atama yapilamaz 

// const x;
// x = 7;  bu hata verir 


// const x = 7;

// dememiz lazim 


 // JS in böyle bir lüksü yok maalesef :slightly_smiling_face:
// Misal Python 2 ve Python 3. Birinde çalışan kod diğerinde çalışmayabilir.
// JS geçmişinden kurtulamaz. Bütün sürümleri desteklemek zorunda. Geçmişte yapılmış bir web sayfası hala kullanılıyor olabilir. Ben artık seni desteklemiyorum diyemez JS. Hala onu çalıştırmak zorunda.


// takeaway leri indir 

// https://app.peardeck.com/takeaways/101651142867518915087/tzvovngry


// const h = "constant";

// console.log(h);

// h = "2";


// burada hata verir

// console.log(d); 
// var d;   bunu yazsak undefined olur
            // ama bu satiri yazmazsak hata gelir
// tanimlamadan önce cagirdigimiz icin hata 

// undefined bir data type dir
// is not defined ise hatadir kirmizi olarak cikar ve 
// kodun calismasini keser 



// console.log(e);
// let e = 5;

// consol da this yazsak da window acar 


// var ile tanimlanan window yapisinin en üstüne cikar 
// kullanima hazir hale gelir 

// birsey önce tanimlanir sonra cagirilir  

// hosting mülakatlarda cikar



// var ile tanimlama yapmadan önce cagirirsak
// hata vermez undefined verir 
// ama let de hata verir, 
// yani let de tanimlama yapmadan hata aliriz 










// 7 de number 7.2 de numberr 

var f;
console.log(typeof(f));


f = 5;
console.log(typeof(f));

f = "Hallo";

console.log(typeof(f));




console.log(typeof(5));
console.log(typeof(5.45));
console.log(typeof(-5));

// - sayilarda numberdir 

console.log(typeof(0));
console.log(typeof(5/0));
console.log(typeof(NaN));
console.log(typeof(typeof(5))); // dikkat

console.log(1/0);

console.log(typeof(Infinity));

// infinity nin veri tipi number oldugu icin 1/0 in 
// veri tipi o nedenle number cikar 

// NaN da bir data type dir veri tipi number dir 

// 0 da number dir 


// kullanicinin girdigi veri tipi number sa dersek 
// ve kullanici aaa girdiginde NaN cikar 
// bunu da veri tipi number oldugundan bizi
// yaniltacaktir 












// string 


// string ler text depolamak ve manipule etmek icin 
// kullanilir 

var a = "Hello";

var b = "World\"Mark";

console.log(a, b);

var instructor = "Mark";
var d = `Merhaba ${instructor}`;

// dolar isareti ile {} birlesince  f stting gibi oluyor 

console.log(d);


console.log(`${2+3}`);










// Booleans 

var s;

console.log(Boolean(s));

// undefined false döndürür 

// 3,14 yanlistir  3.14 olmali 


console.log(Boolean(""));
console.log(Boolean(" "));

console.log(Boolean("3 < 5"));

// console.log(Boolean(3>%));  hata verir 


var s;
console.log(typeof(s));

console.log(typeof null);

// null un tipi object tir 

console.log(Boolean(null));


console.log(null == false);
console.log(null == true);

console.log(null == undefined);

// === herseyi ile ayni mi 

console.log(null === undefined);


console.log(2 == "2");

console.log(2 === "2");

console.log(2 + "2"); 

console.log(2 + + "2");

console.log(2 == 2.0);


console.log(Number("11"));  
