# FrameBridge — natywne wideo i zewnętrzne napisy dla Cubase i Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · **Polski** · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![FrameBridge na natywnej ścieżce wideo Nuendo — kliknij, aby obejrzeć demo](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Strona: [framebridge.cc](https://framebridge.cc/pl/)** · [Obejrzyj demonstrację FrameBridge na YouTube](https://youtu.be/qJqN0ybHV8E)

FrameBridge rozszerza natywny silnik wideo Cubase i Nuendo w systemie Windows x64. Nowoczesne formaty wideo otwierają się na natywnej ścieżce wideo (Video Track) i są odtwarzane we wbudowanym Video Playerze, a pliki napisów zewnętrznych wyświetlają się na obrazie automatycznie — bez transkodowania materiału i bez wypalania napisów w wideo.

## Najważniejsze zalety

- Działa z natywną ścieżką wideo i wbudowanym Video Playerem Cubase/Nuendo.
- Rozszerzona obsługa kontenerów i kodeków dzięki dołączonym bibliotekom FFmpeg (LGPL).
- Zewnętrzne pliki napisów są wczytywane automatycznie i wyświetlane na obrazie; zmiany w pliku napisów są uwzględniane na bieżąco. Sam plik wideo nigdy nie jest zmieniany.
- Każdy format napisów jest wyświetlany w jednym stylu (takim jak SRT). Obrazy napisów PGS/SUP z Blu-ray i VobSub z DVD są odczytywane jako tekst przez wbudowane w Windows OCR.
- Nie potrzeba osobnego odtwarzacza wideo, pakietu kodeków ani LAV Filters.
- To nie jest wtyczka VST: w projekcie nie trzeba niczego ładować — FrameBridge rozszerza sam natywny silnik wideo.
- Sprawdzona wizualnie konwersja HDR do SDR dla obsługiwanych materiałów HDR. Nie deklarujemy pomiarowej wierności kolorów.

## Obsługiwane wersje Cubase i Nuendo

**Sprawdzone wersje**

- **Cubase:** 8.0.10 i 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo:** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Pokrewne wersje najprawdopodobniej działają.** Silnik wideo prawie się nie zmienia w obrębie jednej generacji produktu: jeśli na przykład sprawdzono Nuendo 12.0.52, to 12.0.20 czy 12.0.70 najprawdopodobniej też zadziałają. Instalator sam sprawdza silnik wideo każdej instalacji: zgodna jest proponowana do instalacji, niezgodna nie pojawia się na liście i nic nie jest zmieniane. To nie jest gwarancja. Starsze edycje z tą samą generacją silnika (na przykład Nuendo 7–9, Cubase 8.5 / 9.5) również mogą się nadawać, ale nie były testowane.

W Cubase 8 i 9 FrameBridge dostarcza też dźwięk otwieranych plików (na przykład MKV), dzięki czemu „Extract Audio From Video” działa tam tak jak w nowszych wersjach.

Edycje Cubase Pro, Artist, Elements, AI i LE są wykrywane w ten sam sposób. Pełna tabela jest w pliku [COMPATIBILITY.txt](../COMPATIBILITY.txt) (po angielsku).

**Czy zadziała po aktualizacji Cubase lub Nuendo?** FrameBridge jest sprawdzony z wersjami wymienionymi wyżej, do Cubase i Nuendo 15.0.30, i przeznaczony do działania w całej wersji 15: instalator sam sprawdza silnik wideo każdej instalacji. Jeśli po aktualizacji w obrębie wersji 15 FrameBridge przestanie działać, uruchom ponownie INSTALL.cmd – aktualizacja mogła zastąpić plik programu. Nowa główna wersja, np. Cubase lub Nuendo 16, może zmienić silnik wideo i nie jest objęta tą betą.

## Sprawdzone formaty

**Kontenery:** MKV / WebM, FLV, M2TS / MTS / TS, MOV / MP4, AVI, MXF, MPEG-PS / VOB i OGV.

**Kodeki wideo i profile:** APV, AV1 8-bit, AV1 10-bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, Theora, UtVideo, VP8, VP9 10-bit i Xvid.

**Napisy zewnętrzne:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP i VobSub (para .idx + .sub). Umieść plik napisów obok wideo pod tą samą nazwą (na przykład `film.mkv` + `film.srt`).

Rozpoznawanie tekstu PGS/SUP i VobSub korzysta z języków OCR zainstalowanych w Windows (zwykle język systemu i angielski; kolejne można dodać w ustawieniach Windows). Jeśli brakuje potrzebnego języka, wyświetlane są oryginalne obrazy napisów.

VVC/H.266 celowo nie jest obsługiwany w tej becie.

## Instalacja i przywracanie

- Zamknij Cubase i Nuendo i uruchom `INSTALL.cmd`. Zarejestrowane instalacje zostaną znalezione automatycznie; w przeciwnym razie wskaż plik EXE lub folder programu.
- `UNINSTALL.cmd` przywraca oryginalne pliki programu ze sprawdzonej kopii zapasowej (bajt po bajcie). Projekty, ustawienia i wtyczki pozostają nietknięte.
- W pakiecie nie ma żadnego pliku Steinberga; instalator pracuje wyłącznie na plikach Twojej własnej instalacji.

Pełna instrukcja jest w plikach [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) i [README.txt](../README.txt) (po angielsku).

## Weryfikacja pliku wydania

- Aktualne wydanie: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256: `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [Raport VirusTotal](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (stan na 31 października 2026): 1/63 — pojedyncza ogólna heurystyka jednego silnika (MaxSecure); Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec i pozostałe silniki, które ukończyły skanowanie, niczego nie wykrywają.

## Wydajność

Płynność odtwarzania zależy od materiału i sprzętu. Wymagające wideo 4K 10-bit (HEVC Main10, H.264 High10) potrzebuje wydajnego CPU/GPU: na starszym komputerze testowym (Intel Core i5-2550K + GeForce GTX 660) mocno się zacinało, bo GPU tej generacji nie dekoduje tych formatów sprzętowo. Na słabszych komputerach zalecamy wyłączenie miniatur wideo w DAW i pracę na kopiach roboczych H.264 8-bit w rozdzielczości do 1080p. Znane problemy opisano w [READ_ME_FIRST.txt](../READ_ME_FIRST.txt).

## Kto tworzy FrameBridge

Nazywam się Roman Aksonov, jestem realizatorem dźwięku w dubbingu i nagraniach lektorskich oraz twórcą FrameBridge. Zrobiłem go do własnej pracy: wideo od klientów często przychodzi w formatach, których Cubase nie otwiera, a napisy w osobnych plikach – i konwertowanie każdej dostawy albo wypalanie napisów w obrazie kosztuje czas. Pytania i opinie trafiają prosto do mnie: stark622@ukr.net.

Również na: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Platforma i status

- Windows x64
- FrameBridge Beta 1 · wydanie 29 października 2026
- Oprogramowanie komercyjne, zamknięte

**[Kup FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Strona: [framebridge.cc](https://framebridge.cc/pl/)

**Cena:** płacisz, ile chcesz — minimum 29 USD, sugerowane 59 USD. Zakup jednorazowy.

Napisz na stark622@ukr.net w ciągu 14 dni od zakupu. Jeśli FrameBridge nie zainstaluje się lub nie będzie działać z Twoim Cubase albo Nuendo, otrzymasz pełny zwrot pieniędzy.

**Wsparcie:** stark622@ukr.net

**Informacje prawne (po angielsku; wiążąca jest wersja angielska):**

- [Polityka prywatności](../PRIVACY_POLICY.md)
- [Warunki korzystania](../TERMS_OF_SERVICE.md)
- [Licencja użytkownika końcowego](../END_USER_LICENSE.txt)

## Licencje

FrameBridge to oprogramowanie komercyjne. Warunki produktu są opisane w [END_USER_LICENSE.txt](../END_USER_LICENSE.txt). Informacje o licencjach komponentów zewnętrznych, w tym o warunkach dla dołączonych bibliotek współdzielonych FFmpeg (LGPL 2.1 lub nowsza, kod źródłowy dołączony do pakietu), znajdują się w [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge to niezależne oprogramowanie, niepowiązane ze Steinbergiem ani przez niego niesponsorowane czy niepopierane. Cubase i Nuendo są znakami towarowymi ich właściciela.
