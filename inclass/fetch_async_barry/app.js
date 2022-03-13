

        //// Callstack calisma Prensibi:

// js kodlari satir satir diyoruz ama aslinda expression expression seklinde calisir.

// bu calismayi callstack de yapar.
// öncelikle global scope daha sonra blok bazli gider

// callstack multitasking calisamaz. bu nedenle bu görevler web api ye devredilir.

// callstack in takilmamasi bloklanmamasi lazim. bu nedenle bloklayacak bekletecek islemler mesela settimeout gibi web api ye devredilir.

// settimeout gibi func larda yapilacak 2 is vardir:
// birincisi belirlenen süre kadar beklemek
// ikincisi ise o süreden sonra yapilacak islem

// bekleme isini web api yapar.
// yapilacak isi ise; settimeout icinde callback func oldugu icin callback queue e aktaririz. burada islem hemen yapilmaz. callstack bosaltildiktan sonra yapilir.
// callback func js in isidir. bu nedenle web api de yapilmaz

// Bu nedenle biz 10 saniye bekle dersek, kodumuzun 10 saniye sonra calisacaginin garantisi yok.  10+ saniye olur. ama 9 saniye olmaz.

// settimeout kullandigimizda 0 saniye bile versek, o kod otomatik olarak web api ye gider.

// yani 0 da olsa callstackteki tüm kodlardan sonra calisir.

// tüm islerin koordinesi event loop tarafindan

// promise ler microtask a gider. burasi VIP dir en önceliklidir.

// callback calisirken microtask a is gelirse is micro ya gecer.

// Pythonda single threated bir dildir. mesela kullanidan input istedigimizde input gelmeden islem yapamayiz.

// python da kütüphaneler ile asnc hale getirilebilir.






                ////////////Request Response Model
                ///////    Client Server Mimarisi

///  client web server a bir request gönderir, web server response gönderir.

// Ajax: asyncronus Javascript and Xml







/////  Promise:

///  1:  Pending
//   2:  Settled (fullfilled,  reject)








    ////////////  Rest countries Api:

    // json formati özelligi, veriler object tipindedir ama bir ana array icinde gelir


    const data = fetch("https://restcountries.com/v3.1/name/Turkey");

    // console.log(data);
    // eger böyle yazarsak pending aliriz. süreci beklemedik
    // console dan baktigimizda fullfilled oldugunu görürüz ama biz verileri yakalayamadik. cünkü beklemedik


    // fetch("https://restcountries.com/v3.1/name/Turkey")
    // .then(response => {
    //     console.log(response);
    // })

    /// fetch de bilgiler iki asamada alinir. ikinci bir then e ihtiyac var. bu nedenle yukaridaki kod da yine göremeyiz verileri.



    fetch("https://restcountries.com/v3.1/name/Turkey")
    .then(response => {
        return response.json(); // json a burada cevrilir
    }) .then(data => {
        // console.log(data);
        // console.log(data[0].capital);
        // önce array icine girmemiz gerekir

        // console.log(data[0].name.common);
    });





    /////////////////////////////////

    /////////////   async await:

    // bu yapi then lerden kurtulmak icin yapilmistir. ancak global scope da kullanilamaz. sadece async func iicnde await olur.

    // Not: then ile async yapisi beraber kullanilabilir. ama iyi bir hal tarzi degildir.

    /// Js block bazli bir dildir. block larin isi bittikten sonra, garbage collector tarafindan cöpe atilir.


        async function getCountry(countryName) {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);

        if (!response.ok) {
            throw new Error(response.statusText)
            // cikan output a console da bakarsak icerisinde status text diye birsey görürüz.
            // burada hatayi biz yakaladik ve tetikledik

            /// eger burada bir hata yakalanirsa, kodun geri kalan kismi calismaz. direkt catch kismina gider. catch de en asagida view func sonundadir.
        }

        const data = await response.json();
        return data;
        // console.log(data);
        // console.log(data[0].name.common);
        // console.log(data[0].capital);

        // console icinde de direkt await calisabilir.
        // console.log(await response.json());
    };

    // getCountry("Turkey");





    //////////  simdi ülkelerin komsularini card yapacagiz. bu nedenle ayni name endpoint i ile gidemeyiz. code endpoint ile gitmemiz lazim:

    //  https://restcountries.com/v3.1/alpha/{code}




    const getNeighbour = async (countryCode) => {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

        const data = await response.json();
        return data[0];
    };



    const viewCountry = async (countryName) => {
        try {
            const data = await getCountry(countryName);
            renderCountry(data[0]);
        // console.log(data[0].borders[1]); // azerbeycan

        console.log(data[0].borders);
        // const neighbour = await getNeighbour(data[0].borders[1]);
        // bu kod bize türkiye ye ait komple bir object gibi azerbeycan a ait bir object döndürür
        // console.log(neighbour);
        // renderCountry(neighbour, "neighbour");


        if (data[0].borders) {  // eger komsusu varsa


        ////////////////  foreach:
        /// foreach icindeki func async olmali

        // data[0].borders.forEach(async (item, index) => {
        //     const neighbour = await getNeighbour(data[0].borders[index]);
        //     // console.log(neighbour);
        //     renderCountry(neighbour, "neighbour");
        // })


                //// 2. method:

        // data[0].borders.forEach(async (item, index) => {
        //     const neighbour = await getNeighbour(item);
        //     // console.log(neighbour);
        //     renderCountry(neighbour, "neighbour");
        // })


        /////////////////  for of:  and async:

        const neighbourList = data[0].borders;
        console.log(neighbourList);
        for await (let i of neighbourList) {
           const neighbour = await getNeighbour(i);
           renderCountry(neighbour, "neighbour");
        }
    }   else {
        throw new Error("No Neighbour");
        // komsu olmamasi eftch icin hata degil ama bizim icin sikinti. o nedenle burada hata tetikliyoruz. throw  ifadesini kendi elimizle tetikledigimiz hatalar icin kullaniyoruz. catch ise program tarafindan olusan hatalar.
        // kendimiz hata olusturdugumuzda bu hata catch de de yakalanabiliyor.
    }

        } catch(error) {
            console.log(error);
            renderError(error);
        }
    };

    viewCountry("Turkey");
    // viewCountry("Australia");
    
    // viewCountry("England");  // error 
    // diger bir hata endpoint yanlis girilebilir.

    // getCountry func'i sadece veri cekmesi icin design ettik bu nedenle render icin ayri bir func olusturduk.

    // forEach artik cok kullanilmaz cok tutarli degil.
    // map de yeni array olusturur burada yeni array e ihtiyac yok sadece elemanlari gezecegiz.

    // foreach map filter gibi func larda, async kullaniminda sikinti yasanabiliyor. Bu nedenle async ile en iyi kullanim for await of yapisi kullanmaktir   yapisi kullanmaktir.


    



    ////////////////// Render Error:

    const renderError = (msg) => {
        const inputContainer = document.querySelector(".input-section");
        const errorHtml = document.createElement("div");
        errorHtml.classList.add("alert", "alert-danger", "alert-container");
        errorHtml.innerHTML = msg;

        inputContainer.insertAdjacentElement("beforeEnd", errorHtml);

        setTimeout(() => {
            // errorHtml.style.visibility = "hidden";
            errorHtml.remove();
        }, 5000);
        // inputContainer.insertAdjacentElement("afterBegin", errorHtml);
    };







    /////////////////////  Button addevent:

    let button = document.getElementById("search");
    let input = document.getElementById("input");

    button.addEventListener("click", async function(e) {
        try {
            const main = document.querySelector('main');
            main.innerHTML = "";
            const user = input.value.charAt(0).toUpperCase() + input.value.slice(1);
            console.log(user);
            viewCountry(user);
        } catch (error) {
            alert("Please Enter a valid Countryname");
        }
    });











    ////////////////////  render Function:



    const renderCountry = (data, type = 'country') => {
        // console.log(data);
    // const flag = data.flags.svg;
    
    // const countryName = data.name.common;
    // const region = data.region;
    // const capital = data.capital;
    // const population = data.population;
    // const languages = data.languages;
    // const currencies = data.currencies;

        //// destruckturing:
        // object oldugu zaman {} kullaniriz.
    
    // const {
    //     svg : flag
    // } = data.flags;
    // svg leri flag adi ile aldik

        /// flasg 2. method:
    
    const {
        flags : {svg : flag}
    } = data;

    const {
        name: {common : countryName},
        region,
        capital,
        population,
        languages,
        currencies
    } = data;


    const countryHtmlCard = `
      <img src="${flag}" class="card-img-top border border-secondary" alt="Flag" />
      <div class="card-body">
        <h5 class="card-title">${countryName}</h5>
        <p class="card-text">${region}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><span><i class="fas fa-2x fa-landmark"></i>${capital}</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-users"></i>${(
          population / 1_000_000
        ).toFixed(2)} M</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-comments"></i>${Object.values(languages)}</span></li>
        <li class="list-group-item"><span><i class="fas fa-lg fa-money-bill-wave"></i>${
              Object.values(currencies)[0].name
            } ${Object.values(currencies)[0].symbol}</span>
        </li>
      </ul>`;
    if (type === 'country') {
      const countryHtml = `<div class="container country">
            <div class="row justify-content-center mt-5">
              <div class="card country-card col col-sm-6 col-lg-3 py-3" >
                ${countryHtmlCard}
              </div>
            </div>
            <div class="row justify-content-start neighbour-container">
          </div>`;
      const main = document.querySelector('main');
      main.insertAdjacentHTML('afterbegin', countryHtml);
    } else if (type === 'neighbour') {
      const neighbourHtml = `<div class="card col col-sm-6 col-lg-3 py-3 neighbour">${countryHtmlCard}</div>`;
      const neighbourDiv = document.querySelectorAll('.neighbour-container');
      neighbourDiv[0].insertAdjacentHTML('beforeend', neighbourHtml);
    }
  };