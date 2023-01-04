Kullanılan Kütüphaneler : 
- Axios 
- Zustand ( state management için)
- React Router Dom
- Debounce ( Arama kısmında arama sonucu zamanlaması ayarlamak için)
- Sass 
- Recharts (Grafik için)

1. Npm paketleri kuruldu
2. CoinGecko api ile anasayfa için trend (zaman bazlı en çok işlem gören) coinler için gerekli sorgu yapıldı.
3. Bu yapılan sorgu sonucu trend coinler ile ilgili veriler alındı (İmage , name , bitcoin bazlı değerleri , dolar bazlı değerleri)
4. Ana sayfada listelenen bu değerlerin üzerine api tarafından verilen tüm coinlerin aranabileceği search inputu oluşturuldu tek veya iki harf ile yapılan aramalar yüklenme zamanını uzattığı için arama üç harf yazılmasının ardından çalıştırıldı.
5. Tüm sayfalarda görünecek aynı zamanda componentler arası geçişi sağlayan header oluşturuldu.
6. İndex sayfasını gösteren; Coin app detaydan , aramadan çıkmayı ve index sayfasına dönmeyi sağlayan geri butonu yerleştirildi.
7. Ardından seçilen coin ile ilgili detayların yer alacağı show componenti ve store yapısı oluşturuldu.
8. Store içerisinde api sorgusu ile coin ile ilgili daha fazla detayın alınabileceği bir sorgu daha yapıldı. 
9. Show componenti içerisinde grafik ile 1 haftalık değişim gösterildi ayrıca diğer detay bilgiler (piyasa değişim değeri, 24 saat içerisindeki en yüksek değeri ,24 saat içerisindeki en düşük değeri, piyasada dolaşan arzı , mevcut fiyatı, ve bir yıllık oransal değişimi) gösterildi.
10. Seçilen favorilerin gösterileceği ve listeleneceği ayrı bir component yapılıp içerisine yıldız butonuna tıklanarak eklenip çıkartılabilecek bir yöntem kullanıldı ayrıca liste içerisinde favorilerden sil butonu kullanılarak da silinebilir hale getirildi.
11. Favori değerleri LocalStorage ile tutulup kullanıcı tarafından silinene kadar burada tutuldu.
