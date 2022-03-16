
export let user = "John";


export let myFunc = () => {
    alert("Hello");
};


export let myProto = function (name, lastname, birthday) {
    this.name = name,
    this.lastname = lastname,
    this.birthday = birthday
};



export class myClass {
    constructor (marke, model) {
        this.marke = marke; /// prototip de , kullanimi
        this.model = model
    };
};

    /// inheritance:
export class myClass2 extends myClass {
    constructor (marke, model, year) {
        super(marke, model);
        this.year = year;
    }
    
    present() {
        return `My Auto is ${marke}, ${model}, from ${year}`;
    }
};


export class MyFirma {
    constructor (numberOfPersonal) {
        this.personal = numberOfPersonal;
    }

    calculate(maas, faturalar, kira) {
        this.totalMaas = maas * this.personal;
        this.faturalar = faturalar;
        this.kira = kira;
        let totalGider = this.totalMaas + this.faturalar + this.kira;
        return totalGider;
    };
};






////////////////  get and set methods:

export class myCities {
    constructor (country, city) {
        this.country = country;
        this.city = city;
    };

    get name () {
        return (this.country + " " + this.city);
    };

    set name (country) {  // set sadece tek parametre alir.
        return (this.country = country);
    }

    static func() {
        console.log("Hello");
    };
};







//////////////
/// simdi burada olusturdugumuz objecti user da import edip adini degistirecegiz
// daha sonra user2 de cagiracagiz ismi degismis olacak
// disarida yaptigimiz degisiklikler burada da görünür.

export let myObject2 = {
    name : "Barry"
};

console.log(myObject2);






//////////  import.meta:
// import.meta nesnesi kullanılmakta olan modül hakkında bilgileri içerir.

// İçeriği ortama bağlıdır. Tarayıcıda programın URL bilgisini ya da eğer HTML içindeyse ilgili web sayfasının URL bilgisini içerir:

console.log(import.meta);




////  Normal bir js dosyasinda this yazdigimizda, window nesnesi gelir. ama burada biz script tagi icinde module yazarak html de tanitim yaptigimiz icin, undefined gelir. yani;
// Üst seviye "this"in değeri undefined dır.
// Bu detay bir bilgidir ancak eksik bir şey bırakmamak adına bundan söz etmeliyiz.

// Bir modülde üst seviye thisin değeri, modül olmayan programdaki bir global nesnenin tersine, tanımsızdır (undefined):

console.log(this);






