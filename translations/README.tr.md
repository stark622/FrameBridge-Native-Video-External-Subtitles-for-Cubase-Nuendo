# FrameBridge — Cubase ve Nuendo için yerel video ve harici altyazılar

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · **Türkçe** · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Nuendo’nun yerel video kanalında çalışan FrameBridge — demoyu izlemek için tıklayın](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Web sitesi: [framebridge.cc](https://framebridge.cc/tr/)** · [FrameBridge tanıtımını YouTube’da izleyin](https://youtu.be/qJqN0ybHV8E)

FrameBridge, Windows x64’teki Cubase ve Nuendo’nun yerel video motorunu genişletir. Modern video formatları yerel video kanalında (Video Track) açılır ve yerleşik Video Player’da oynatılır; harici altyazı dosyaları ise görüntünün üzerinde otomatik olarak gösterilir — medyayı dönüştürmeden ve altyazıları videoya gömmeden.

## Başlıca avantajlar

- Cubase/Nuendo’nun yerel video kanalı ve yerleşik Video Player’ı ile çalışır.
- Pakete dahil FFmpeg kütüphaneleri (LGPL) sayesinde genişletilmiş kapsayıcı ve codec desteği.
- Harici altyazı dosyaları otomatik olarak yüklenir ve görüntünün üzerinde gösterilir; altyazı dosyasında yapılan değişiklikler anında yansır. Video dosyasının kendisi asla değiştirilmez.
- Tüm altyazı formatları tek tip bir görünümle (SRT görünümüyle) gösterilir. Blu-ray PGS/SUP ve DVD VobSub görüntüleri, Windows’un yerleşik OCR özelliğiyle metin olarak okunur.
- Ayrı bir video oynatıcı, codec paketi veya LAV Filters gerekmez.
- VST eklentisi değildir: projede hiçbir şey yüklemeniz gerekmez; FrameBridge doğrudan yerel video motorunu genişletir.
- Desteklenen HDR içerikler için görsel olarak doğrulanmış HDR’den SDR’ye dönüştürme. Renk doğruluğuna dair ölçüme dayalı bir iddiada bulunulmaz.

## Desteklenen Cubase ve Nuendo sürümleri

**Doğrulanmış sürümler**

- **Cubase:** 8.0.10 ve 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo:** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Yakın sürümlerin çalışması çok olasıdır.** Video motoru bir ürün kuşağı içinde neredeyse hiç değişmez: örneğin Nuendo 12.0.52 doğrulandıysa, 12.0.20 veya 12.0.70 de büyük olasılıkla çalışır. Yükleyici her kurulumun video motorunu kendisi kontrol eder: uyumlu olan kurulum için önerilir, uyumsuz olan listede yer almaz ve hiçbir şey değiştirilmez. Bu bir garanti değildir. Aynı motor kuşağına sahip daha eski sürümler (örneğin Nuendo 7–9, Cubase 8.5 / 9.5) de uygun olabilir, ancak test edilmemiştir.

Cubase 8 ve 9’da FrameBridge, açtığı dosyaların sesini de sağlar (örneğin MKV); böylece “Extract Audio From Video” bu sürümlerde de yenilerde olduğu gibi çalışır.

Cubase Pro, Artist, Elements, AI ve LE sürümleri de aynı şekilde bulunur. Tam tablo [COMPATIBILITY.txt](../COMPATIBILITY.txt) dosyasındadır (İngilizce).

**Cubase veya Nuendo güncellemesinden sonra çalışır mı?** FrameBridge, yukarıda listelenen sürümlerle, Cubase ve Nuendo 15.0.30’a kadar doğrulanmıştır ve 15 sürümünün tamamında çalışacak şekilde tasarlanmıştır: yükleyici her kurulumun video motorunu kendisi kontrol eder. 15 sürümü içindeki bir güncellemeden sonra FrameBridge çalışmayı bırakırsa INSTALL.cmd’yi yeniden çalıştırın; güncelleme program dosyasını değiştirmiş olabilir. Cubase veya Nuendo 16 gibi yeni bir ana sürüm video motorunu değiştirebilir ve bu beta kapsamında değildir.

## Doğrulanmış medya desteği

**Kapsayıcılar:** MKV / WebM, FLV, M2TS / MTS / TS, MOV / MP4, AVI, MXF, MPEG-PS / VOB ve OGV.

**Video codec’leri ve profilleri:** APV, AV1 8-bit, AV1 10-bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, Theora, UtVideo, VP8, VP9 10-bit ve Xvid.

**Harici altyazılar:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP ve VobSub (.idx + .sub çifti). Altyazı dosyasını aynı adla videonun yanına koyun (örneğin `film.mkv` + `film.srt`).

PGS/SUP ve VobSub metin tanıma, Windows’ta yüklü OCR dillerini kullanır (genellikle sistem dili ve İngilizce; Windows ayarlarından başka diller eklenebilir). Gerekli dil yoksa altyazıların orijinal görüntüleri gösterilir.

VVC/H.266 bu betada bilinçli olarak desteklenmez.

## Kurulum ve geri alma

- Cubase ve Nuendo’yu kapatın ve `INSTALL.cmd`’yi çalıştırın. Kayıtlı kurulumlar otomatik olarak bulunur; bulunamazsa programın EXE dosyasını veya klasörünü seçin.
- `UNINSTALL.cmd`, programın orijinal dosyalarını doğrulanmış bir yedekten geri yükler (bayt bayt). Projelere, tercihlere ve eklentilere dokunulmaz.
- Pakette hiçbir Steinberg dosyası yoktur; yükleyici yalnızca kendi kurulumunuzdaki dosyalarla çalışır.

Ayrıntılı talimatlar [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) ve [README.txt](../README.txt) dosyalarındadır (İngilizce).

## Sürüm dosyası kontrolü

- Güncel sürüm: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256: `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [VirusTotal raporu](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (31 Ekim 2026 itibarıyla): 1/63 — tek bir motordan (MaxSecure) gelen tek bir genel sezgisel tespit; Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec ve taramayı tamamlayan diğer motorlar hiçbir şey bulmadı.

## Performans

Oynatma akıcılığı medyaya ve donanıma bağlıdır. Ağır 4K 10-bit video (HEVC Main10, H.264 High10) güçlü bir CPU/GPU gerektirir: eski bir test bilgisayarında (Intel Core i5-2550K + GeForce GTX 660) ciddi şekilde takıldı, çünkü o kuşaktan bir GPU bu formatları donanımsal olarak çözemez. Zayıf bilgisayarlarda DAW’daki video küçük resimlerini kapatmanız ve 1080p’ye kadar H.264 8-bit çalışma kopyaları kullanmanız önerilir. Bilinen sorunlar [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) dosyasında listelenmiştir.

## FrameBridge’i kim geliştiriyor

Ben Roman Aksonov; dublaj ve seslendirme mühendisiyim, FrameBridge’in de geliştiricisiyim. Onu kendi işim için yaptım: müşterilerden gelen videolar çoğu zaman Cubase’in açmadığı formatlarda, altyazılar ise ayrı dosyalar halinde geliyor; her teslimatı dönüştürmek ya da altyazıyı görüntüye gömmek zaman kaybettiriyor. Sorular ve geri bildirimler doğrudan bana ulaşır: stark622@ukr.net.

Ayrıca: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Platform ve durum

- Windows x64
- FrameBridge Beta 1 · 29 Ekim 2026’da yayımlandı
- Ticari, kapalı kaynak yazılım

**[FrameBridge’i satın al](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Web sitesi: [framebridge.cc](https://framebridge.cc/tr/)

**Fiyat:** dilediğiniz fiyat — en az 29 USD, önerilen 59 USD. Tek seferlik satın alma.

Satın aldıktan sonraki 14 gün içinde stark622@ukr.net adresine yazın. FrameBridge, Cubase veya Nuendo kurulumunuza yüklenmez ya da çalışmazsa ödediğiniz tutarın tamamı iade edilir.

**Destek:** stark622@ukr.net

**Yasal belgeler (İngilizce; İngilizce sürüm esas alınır):**

- [Gizlilik Politikası](../PRIVACY_POLICY.md)
- [Hizmet Şartları](../TERMS_OF_SERVICE.md)
- [Son Kullanıcı Lisansı](../END_USER_LICENSE.txt)

## Lisanslama

FrameBridge ticari bir yazılımdır. Ürüne ait koşullar [END_USER_LICENSE.txt](../END_USER_LICENSE.txt) dosyasındadır. Pakete dahil FFmpeg paylaşımlı kütüphanelerine (LGPL 2.1 veya üstü, kaynak kodu pakette) uygulanan koşullar dahil olmak üzere üçüncü taraf lisans bilgileri [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt) dosyasındadır.

FrameBridge bağımsız bir yazılımdır; Steinberg ile bağlantılı değildir, Steinberg tarafından desteklenmez veya onaylanmaz. Cubase ve Nuendo, ilgili sahibinin ticari markalarıdır.
