
// görevimiz:

// bir sayfa var. bu sayfada üye olan kullanicilari listeleyecegiz.

// url ile talep ettigimiz de gelen veriyi bir table a yerlestirecegiz







//                      Postman:

// postman, en basit tabir ile api test aracidir.
// yani url leri test ediyoruz. gelen verilere bakarak nasil bir tablo olusturmamiz gerektigini kafamizda hayal ediyoruz.


// postman de url kismi fetch icine yazilan url i temsil eder.

// bu nedenle ? den sonraki kismi parametre olarak alir. yani ? den sonra page = 1 yaziyorsa burada page key olur 1 ise value olur.

// biz asagida key kisminda 1 i 2 yaparsak  yukarida url kisminda da 2 olur.

// authorization kisminda tokenlar var

// headers kisminda, postman ve browser tarafindan default olarak api ye gönderilen veriler bulunur.

// body kismi post ile veri gönderecegimiz kisim

// pre-request script: burada gönderim yapmadan önce script yazabiliyoruz.

// tests kisminda test yapabiliyoruz. yani bize veri kac saniyede geliyor.

// send tusu fetch, axios yada ajax a karsilik geliyor.

// sayfa degisikligi, url kismindaki 1 i 2 yaparak olabiliyor.








///////// verileri table body ye apend edecegiz:

const tbody = document.getElementById("tbodyUserList");
const loading = document.getElementById("loading");
const button = document.querySelector(".button");

let responseData = ""; // buton ile ulasmak icin disarida tanimladik

// window.onload = function() {

// }

window.onload = () => {
    // showLoading();
    // func isminde get yazmamiz önemli:
    getApiUserList();
    setInterval(getApiUserList, 10000);
    // burada bir sikinti var. sayfa her yenilendiginde spinner dönmeye basliyor. ve bu 3 saniye sürüyor. spinner gittikten sonra 2 saniye sonra yine sayfa yenileniyor ve spinner yine cikiyor. bu nedenle spinner 2 saniye dönüyor gibi görünüyor.

        // burada aralarda + degil de , koyarsak calismiyor
        // burada diger sayfada sifreledigimiz token i tekrar sifreden cözüyoruz ve sayfalar arasi kullaniciya gezinme imkani vererek sunum yapiyourz

    // alert("Your Token is: " + DecryptStringAES(localStorage.getItem("apiKey")));

    // alert("Your Token is: " + DecryptStringAES(localStorage.getItem("baseUrl")));
}

button.addEventListener("click", () => {
    responseData.data.page == 1 ? getApiUserList(2) : getApiUserList(1);
    // console.log(responseData.data.page);
});

const getApiUserList = async (pageNumber) => {
    // showLoading();

    // axios:
    // axios da .json() yazma yok

    // burada async yapisi kullandigimiz icin bir then catch yapisi yok. bu nedenle tray catch yapisini manuel olarak koymaliyiz.


    try {
            // 1. method:
        // const responseData = await axios("https://reqres.in/api/users?page=1");

            /// 2. Method: hocanin tavsiyesi

            responseData = await axios({
            url : `https://reqres.in/api/users?page=${pageNumber}`,
            method : "get"
            // data : apiKey
            // gercek hayatta, kullanici log in olacak. ancak log in oldugunda token alabilecek. aldigi bu token ile userlist i görebilecek ve ancak token aldiginda localstorage da bir token ve id olacak. bu nedenle eger user log in olmadi ise local da bir token olmayacak ve dolayisi ile userlist i göremeyecek

            // get methodunda data kullanmaya gerek yok. post da kullanilir.
            // burada süslü parantez objecti temsil eder. aslinda axios ile object gönderiyoruz.
            // Note: fetch methodu ile de post yapilabilir ve fetch ile de bu sekilde yazilabilir.
        })
        
        
        
        // 2. method: bu da calisir.
    // const responseData = await axios.get("https://reqres.in/api/users?page=1");

        // destructur:
    const {data : {data : userListArray}} = responseData;
    // console.log(userListArray);


        /// 2. method:
    // const {data} = responseData.data;
    // console.log(data);


    // userlistarray de veri olmamasi axios icin bir hata degil bu bizim icin bir hatadir. bu nedenle bu hata catch kismina düsmez. biz simdi if bloku yazacagiz.

    if (userListArray.length == 0) {
        alert("userlist not found");
    } else {
        tbody.innerHTML = "";
        // bu islemi yapmazsak sürekli ayni kisileri ekler
        userListArray.forEach((customer) => {
            tbody.innerHTML += `
            <tr>
            <td>
            ${customer.id}
            </td>
            <td>
            <img src="${customer.avatar}"/>
            </td>
            <td>
            ${customer.email}
            </td>
            <td>
            ${customer.first_name}
            </td>
            <td>
            ${customer.last_name}
            </td>
     </tr>
            `
            removeLoading();
        })
    }
    // not: image in verisi "" icerisinde 


}   catch (error) {
    alert(error);
        // gercek hayatta söyle olur. hatalarimizin hepsini database ve api de kaydederiz. müsteri hata aldigini söylediginde hangi saat de aldi ise o saati acar kontrol ederiz.
        // database de errorlogs table a göndeririz.
        // postErrorLog("userList", "getApiUserList", error)
        // proje yaparken bunlari hepsini detayli düsünmemiz lazim. ger bunu yapmaz isek hata bulmamiz günlerimizi alir.
    removeLoading();
} 
}


    // bu funclari 50 sayfamiz olsa hepsinde de kullanacagiz. Bu nedenle bunlari extension.js sayfamiza alacagiz. ihtiyac oldukca oradan cekecegiz.  tabi bunu yapabilmek icin html sayfamizin head kisminda extension.js i link olarak ekledik
    // ama dikkat etmemiz gereken sey, önce extension import edilmesi gerektiginden, normal html imize bagladigimiz js sayfasinin baglantisini extension in baglantisindan sonra yapmaliyiz.

// const showLoading = function() {
//     loading.style.display = "block";
// };

// const removeLoading = () => {
//     loading.style.display = "none";
// }