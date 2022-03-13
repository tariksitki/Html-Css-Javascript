

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

// 


