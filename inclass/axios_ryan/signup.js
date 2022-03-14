

/// simdi sunu yapacagiz:
/// database deki verilere sadece kayitli kullanicilarin ulasmasini saglayacagiz. 

// Note: api sayfasinda sol yukarida browser da yazan url e base url denir. url in son kismi ise endpoint tir. 
// islerimizi kolaylastirmak icin base url. localstorage da yada database de depolanir. cagirma esnasinda sadece her defasinda endpoint yazilir.

// html kodlarinda 3 ile baslayanlar redirection.
// yani sayfamizda bir problem var. kullanicilarin problem yasamasini istemiyoruz ve bu nedenle userlari baska bir sayfaya yönlendiriyoruz. bu islem server yani sunucu tarafindan yapilir.





/// Biz simdi api ye post ile veri gönderecegiz. 
// gönderecegimiz veri tipi object olmalidir.
// bu nedenle ya json() func yada new Object() kullanmaliyiz.

// ancak biz burada axios kullaniyoruz. bu nedenle axios a biz object olarak veri verecegiz. o bizim yerimize bunu json stringify() yapacak.
// axios ayni zamanda veri alirken de, parse islemlerini yapar. dolayisi ile biz hicbiri ile ugrasmayiz.

// eger fetch ile yapmis olsaydik stringify islemini kendimiz yapacaktik

// api yi inceldigimizde post isleminde sadece base url ile endpoint yazmamiz yeterli olmuyor. bunlara ilave olarak kullanici email ve password unu da göndermemiz gerekir.
// bunlarin gönderimini body kisminda yapiyoruz.
// body kisminda 6 farkli gönderim sekli vardir.

///  Cok önemli:  post yaparken, body kisminda en sagda veri tipi bulunur. eger bu text ise hata olur. bunu json yapmamiz lazim

// simdi kafamizda canlandirma yapiyoruz.
// kullanicidan email ve password alacagiz. bunun icin 2 tane input a ihtiyac var. daha sonra bir object im olmasi lazim. bu object in email birinci property si password ise ikinci parametresi olmasi lazim .
// ve daha sonra bu object i fetch yada axios ile göndermem lazim 

// axios da 3. parametre olan data, postman deki body kismina tekabül eder.

// Önemli:  rest api, hem json hem de xml destekler ama xml kullanabilmek icin api nin xml olarak yazilmis olmasi lazim. eger json() olarak yazildi ise sadece json ile kullanabiliriz

// yani her restful api json olarak yazilmis degil. 

// bu gönderdiklerimizi, postman da row ile degilde x www yöntemi ile de gönderdik. bu yöntem form yöntemidir




/// Note: bu sayfadaki islemlerde biz yeni bir kullanici register edemiyoruz ama register api kullaniyoruz ve eve holt isimli kisiyi register ediyoruz.
// kullandigimiz api sitesinde register api bize token ve email verir
// login api ise sadece token verir




const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");


// bu tanimlamalari console.log ile yazmayagerek yok kontrol icin. bunlari kopyalayip direkt console a yapistirabiliriz. sadece document dan sonraki kismi kopyaliyoruz. console a yazip enter a tikliyoruz. sonra maus ile üzerine gidince sayfa da o element mavi oluyor.

window.onload = function() {
    // calisma esnasinda sürekli verileri girmemek icin böyle yapiyoruz.
    email.value = "eve.holt@reqres.in";
    password.value = "pistol";

        // kullanicinin verilerini localstorage da kaydedecegiz:
    

}

    submitBtn.onclick = () => {
        postCustomerRegister();
    }


    const postCustomerRegister = async () => {
        // ilk önce gönderecegimiz veriyi hazirliyoruz.
        // buna bodydata diyecegiz postman de de ayni isim oldugu icin ve object tipinde

        const bodyData = {
            email : email.value,
            password : password.value
        };
        // console.log(bodyData); /// axios oldugu icin
        // fetch olsaydi su sekilde olacakti:
        // console.log(JSON.stringify(bodyData));
        // bu yapi yine axios da da kullanilabilir

            // simdi post isleminde postman i taklit edecegiz. yani postman deki url, method ve data yi aynen yazacagiz.
            // biz kullanici verilerini gönderdikten sonra api bize bir id bir de token gönderecek.
            // bu nedenle asagidaki response degiskenimize biz bir axios tanimlamamoza ragmen bunun degeri artik id ve token olacak.
            // bize gelen veri direkt gelmeyecek data icinde olacak o neenle destruckture gerekir.

        try {
            const response = await axios({
                url : "https://reqres.in/api/register",
                method : "post",
                data : bodyData
                
            })
            console.log(response);
            const {data : userData} = response;
            console.log(userData);

                // simdi fetch icin hata olmayan bizim kendi error larimizi hazirliyoruz.
                // bizim icin önemli olan id ve token.
                // bunlari elde etmemizlazim. 
                // url deki api yi silince o zaman hata catch e 404 olarak düsüyor. ama sadece son harfi silersek bu durumda bizim if imize düsüyor

            if (userData.token == undefined) {
                alert("undefined");
                // bunu denemek icin yukarida url in sonundan bir harf siliyoruz.
            } else {
                localStorage.setItem("apiKey", EncryptStringAES(userData.token));

                localStorage.setItem("baseUrl", EncryptStringAES("https://reqres.in/"));
                // biz belki 100 tane api istegi gönderecegiz. her seferinde base url i yazmaya gerek yok. o nedenle database e yada local a kaydediyoruz oradan cekiyoruz.
                // her ihtiyac oldugunda oradan cekmeliyiz
                // amac cok fazla yerde kullanilacak verileri local de depoluyoruz
                // kullanicinin ve baskalarinin bizim apimizi ve token i görmesine gerek yok o nedenle sifreliyoruz

                // eger browser kapatildiginda silinsin istiyorsak local storage degil session storage kullanilir. kullanici diger sayfaya yönlendirildiginde silinsin istiyorsak da, sessionstorage.remove kullanabiliriz.
                
                removeLoading();

                window.location.href = "userList.html";
                // eger kullanici sign in oldu ise bu durumda kullaniciya izin veriyoruz kullanici listesini görmesi icin ve o sayfaya yönlendiriyoruz. 
                // userlist in js dosyasina da gidip bu sifreyi cöz ve alert de bas diyoruz.

                // sadece sayfa ismini yaziyoruz. url deki 127.0.0.1:5501/ kismini yazmiyoruz. bu bizim serverimizin yani sunucunun ip si veya port adresi

            }
            // apikey bir tokendir. bizim apiden veri talep edebilmemiz icin register yapmamiz lazim. aksi takdirde api bize veri vermez.





        } catch (error) {
            alert(error);
        }
    }

    /// status code 200 olmazsa catch e düser


