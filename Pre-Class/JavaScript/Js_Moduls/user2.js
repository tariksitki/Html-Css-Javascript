
    /// Önemli: app.js de bir object olusturduk. bunu user da import edip name ini
    // degistirdik. daha sonra bunu user2 ye gelip yine app.js den import ettik buna 
    // ragmen degismis sekilde geldi.

import { myObject2 } from "./app.js";
console.log(myObject2);

// Tekrar edecek olursak, modül yalnızca bir kez çalıştırılır. Dışa aktarımlar gerçekleştirilir ve bunlar içe aktarıldıkları bu yerlerde paylaşılır. Dolayısıyla eğer bir şey admin nesnesini değiştirirse, diğer modüller bu değişikliği görecektir.

// Böyle bir özellik konfigürasyon gerektiren modüller için harikadır. Gereken özellikleri ilk içe aktarımda ayarlayıp, daha sonraki içe aktarmalar için modülü hazır hale getiririz.



/// import.meta:
// hangi modülde yani hangi js dosyasinda yazildi ise o dosyanin url adresini verir.

console.log(import.meta);