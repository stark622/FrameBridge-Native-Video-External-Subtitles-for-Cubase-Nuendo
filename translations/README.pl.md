# FrameBridge — natywne wideo i zewnętrzne napisy dla Cubase i Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · **Polski** · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#weryfikacja-pliku-wydania) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#obsługiwane-wersje-cubase-i-nuendo) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#obsługiwane-wersje-cubase-i-nuendo) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#weryfikacja-pliku-wydania)

[![FrameBridge na natywnej ścieżce wideo Nuendo — kliknij, aby obejrzeć demo](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Powyżej krótki poradnik wideo w Cubase 11 Pro: plik MKV z napisami SRT oraz MKV HDR wyświetlany w SDR. [Wersja rozszerzona na YouTube](https://youtu.be/NjNHtkc8-OE): jedno ujęcie bez cięć, importowane na żywo: MKV (HEVC 4K 10-bit, także HDR), OGV (Theora), MXF (DNxHR 4K), MOV (ProRes 4444 4K) i kilka formatów napisów.

**[Strona](https://framebridge.cc/pl/)** · **[Kup](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

FrameBridge rozszerza natywny silnik wideo Cubase i Nuendo w systemie Windows x64. Nowoczesne formaty wideo otwierają się na natywnej ścieżce wideo (Video Track) i są odtwarzane we wbudowanym Video Playerze, a pliki napisów zewnętrznych wyświetlają się na obrazie automatycznie — bez konwersji materiału i bez wypalania napisów w wideo.

**Cubase lub Nuendo pokazuje „Invalid or not supported file!”?** FrameBridge powstał właśnie z myślą o tym komunikacie. Cubase i Nuendo pokazują go, gdy wbudowany silnik wideo nie radzi sobie z kontenerem, kodekiem lub liczbą klatek pliku — MKV, WebM, MXF, HEVC z telefonów takich jak iPhone, wideo o zmiennej liczbie klatek. FrameBridge czyta takie pliki własnym dekoderem. Jeśli Twój plik nadal się nie otworzy, otrzymasz pełny zwrot pieniędzy w ciągu 14 dni.

## Najważniejsze zalety

- **Nowoczesne formaty na natywnej ścieżce wideo** — MKV, WebM, MXF, HEVC, AV1, ProRes 4444 i wiele innych odtwarza się we wbudowanym Video Playerze, bez konwersji.
- **Zewnętrzne napisy na obrazie** — połóż `film.srt` obok `film.mkv`; zmiany w pliku napisów widać od razu. Plik wideo nigdy nie jest zmieniany.
- **Stworzony do dubbingu** — drugie okno wideo dla realizatora dźwięku, napisy prosto ze scenariuszy dubbingowych z rolami.
- **To nie wtyczka** — bez slotu wtyczki, bez ładowania czegokolwiek w każdym projekcie, bez synchronizacji MTC, bez pakietu kodeków. Dokładne przywracanie przez UNINSTALL.cmd.

<details>
<summary>Wszystkie funkcje</summary>

- Działa z natywną ścieżką wideo i wbudowanym Video Playerem Cubase/Nuendo.
- Rozszerzona obsługa kontenerów i kodeków dzięki dołączonym bibliotekom FFmpeg (LGPL).
- Zewnętrzne pliki napisów są wczytywane automatycznie i wyświetlane na obrazie; zmiany w pliku napisów są uwzględniane na bieżąco — nawet gdy plik zostanie dodany lub przemianowany już po imporcie, bez ponownego importu. Sam plik wideo nigdy nie jest zmieniany.
- Każdy format napisów jest wyświetlany w jednym stylu (takim jak SRT). Obrazy napisów PGS/SUP z Blu-ray i VobSub z DVD są odczytywane jako tekst przez wbudowane w Windows OCR.
- Drugie okno wideo do dubbingu: kopia na żywo okna Video Player z Cubase/Nuendo dla realizatora dźwięku, podczas gdy aktor ogląda odtwarzacz na innym monitorze.
- Napisy prosto ze scenariuszy dubbingowych i list dialogowych z rolami: PDF, DOCX, TXT, XLSX, CSV.
- Nie potrzeba osobnego odtwarzacza wideo, pakietu kodeków ani LAV Filters.
- To nie jest wtyczka VST: bez slotu wtyczki, bez ładowania czegokolwiek w każdym projekcie i bez synchronizacji MTC — FrameBridge rozszerza sam natywny silnik wideo.
- Dźwięk trafia do projektu standardową opcją „Extract Audio From Video” — także z MKV i innych plików, których Cubase i Nuendo same nie otwierają.
- Sprawdzona wizualnie konwersja HDR do SDR dla obsługiwanych materiałów HDR. Nie deklarujemy pomiarowej wierności kolorów.

</details>

## Drugie okno wideo do dubbingu

Cubase i Nuendo pokazują wideo w jednym oknie Video Player. FrameBridge dodaje jego kopię na żywo: aktor ogląda Video Player na swoim monitorze, a Ty masz kopię obok projektu — bez splittera HDMI i bez karty wyjściowej Blackmagic.

![Przeciągnij Video Player na ekran aktora, kliknij dwukrotnie, aby włączyć pełny ekran, kliknij ikonę FrameBridge w zasobniku: kopia otworzy się na Twoim ekranie](../media/dub-window.gif)

## Obsługiwane wersje Cubase i Nuendo

| | Sprawdzone wersje |
|---|---|
| **Cubase** | 8.0.10 i 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30, 16.0.5 |
| **Nuendo** | 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 |

Edycje Cubase Pro, Artist, Elements, AI i LE są wykrywane w ten sam sposób. Pełna tabela jest w pliku [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt) (po angielsku). Miniatury na ścieżce wideo są widoczne we wszystkich sprawdzonych wersjach.

<details>
<summary>Inne wersje i aktualizacje</summary>

**Pokrewne wersje najprawdopodobniej działają.** Silnik wideo prawie się nie zmienia w obrębie jednej generacji produktu: jeśli na przykład sprawdzono Nuendo 12.0.52, to 12.0.20 czy 12.0.70 najprawdopodobniej też zadziałają. Instalator sam sprawdza silnik wideo każdej instalacji: zgodna jest proponowana do instalacji, niezgodna nie pojawia się na liście i nic nie jest zmieniane. Starsze edycje z tą samą generacją silnika (na przykład Nuendo 7–9, Cubase 8.5 / 9.5) również mogą się nadawać, ale nie były testowane.

**Czy zadziała po aktualizacji Cubase lub Nuendo?** FrameBridge jest sprawdzony z wersjami wymienionymi wyżej, do Cubase 16.0.5 i Nuendo 15.0.30. Nowa główna wersja może zmienić silnik wideo — wtedy instalator po prostu nie zaproponuje takiej instalacji i niczego nie zmieni. Po aktualizacji Cubase lub Nuendo wystarczy ponownie uruchomić INSTALL.cmd. Jeśli po aktualizacji Twojego Cubase lub Nuendo FrameBridge przestanie działać, napisz do wsparcia.

</details>

## Sprawdzone formaty

**Kontenery:** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV i inne.

**Kodeki wideo:** H.264 (w tym High10, B-klatki, VFR), HEVC Main / Main10, AV1 8/10-bit, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 i inne.

**Napisy zewnętrzne:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP i VobSub (para .idx + .sub). Umieść plik napisów obok wideo pod tą samą nazwą (na przykład `film.mkv` + `film.srt`).

Przetestowane na ciężkim, prawdziwym materiale: remux Blu-ray 4K HDR (HEVC, ~25 GB) w projekcie z 8 ścieżkami dialogowymi i wieloma wtyczkami oraz odcinek 4K HEVC ze streamingu (~7 GB) — płynne odtwarzanie i przewijanie.

<details>
<summary>Wszystkie sprawdzone kontenery i kodeki</summary>

**Kontenery:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM i OGV.

**Kodeki wideo i profile:** APV, AV1 8-bit, AV1 10-bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10-bit, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8-bit, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX i Xvid.

Rozpoznawanie tekstu PGS/SUP i VobSub korzysta z języków OCR zainstalowanych w Windows (zwykle język systemu i angielski; kolejne można dodać w ustawieniach Windows). Jeśli brakuje potrzebnego języka, wyświetlane są oryginalne obrazy napisów.

</details>

<details>
<summary>Prawdopodobnie też działają</summary>

**Kodeki wideo:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Dekoduje je ten sam FFmpeg 9.0.2 wbudowany we FrameBridge. Zwykle się otwierają i mogą też działać płynnie, ale płynne odtwarzanie i przewijanie sprawdzono tylko dla formatów powyżej. Obowiązuje zwrot pieniędzy w ciągu 14 dni.

</details>

## Wydajność

Płynność odtwarzania zależy od materiału i sprzętu. Do codziennej pracy warto mieć aktualny procesor ze średniej półki i kartę graficzną, która sprzętowo dekoduje używane formaty (HEVC, AV1). Na starszych komputerach — na przykład na komputerze testowym z 2012 roku (Intel Core i5-2550K + GeForce GTX 660) — ciężkie wideo 4K 10-bit (HEVC Main10, H.264 High10) się zacina, bo GPU tej generacji nie potrafi sprzętowo dekodować tych formatów. Na słabych komputerach pomaga wyłączenie miniatur wideo w DAW i praca na kopiach roboczych H.264 8-bit do 1080p. Znane problemy są opisane w [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt).

## Instalacja i przywracanie

- Zamknij Cubase i Nuendo i uruchom `INSTALL.cmd`. Zarejestrowane instalacje zostaną znalezione automatycznie; w przeciwnym razie wskaż plik EXE lub folder programu.
- `UNINSTALL.cmd` przywraca oryginalne pliki programu ze sprawdzonej kopii zapasowej (bajt po bajcie). Projekty, ustawienia i wtyczki pozostają nietknięte.
- W pakiecie nie ma żadnego pliku Steinberga; instalator pracuje wyłącznie na plikach Twojej własnej instalacji.

Pełna instrukcja jest w plikach [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) i [README.txt](../docs/README.txt) (po angielsku).

## Weryfikacja pliku wydania

- Aktualne wydanie: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256: `714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [Raport VirusTotal](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) (stan na 14 listopada 2026): 0/61 — żaden silnik niczego nie wykrywa, w tym Microsoft Defender, ESET, Malwarebytes, Sophos i Symantec.
- Co instalator zmienia na komputerze i jak samodzielnie to sprawdzić: [SECURITY.md](../SECURITY.md)

## Kto tworzy FrameBridge

Tu stark622, jestem realizatorem dźwięku w dubbingu i nagraniach lektorskich oraz twórcą FrameBridge. Zrobiłem go do własnej pracy: wideo od klientów często przychodzi w formatach, których Cubase nie otwiera, a napisy w osobnych plikach – i konwertowanie każdej dostawy albo wypalanie napisów w obrazie kosztuje czas. Pytania i opinie trafiają prosto do mnie: stark622@ukr.net.

Również na: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Cena i wsparcie

**[Kup FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

**Cena:** Płacisz, ile chcesz: od 29 do 59 USD · strona płatności otwiera się na 59, możesz obniżyć do 29 · zakup jednorazowy

Napisz na stark622@ukr.net w ciągu 14 dni od zakupu. Jeśli FrameBridge nie zainstaluje się lub nie będzie działać z Twoim Cubase albo Nuendo, otrzymasz pełny zwrot pieniędzy.

## Licencje

FrameBridge to oprogramowanie komercyjne. Warunki produktu są opisane w [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt). Informacje o licencjach komponentów zewnętrznych, w tym o warunkach dla dołączonych bibliotek współdzielonych FFmpeg (LGPL 2.1 lub nowsza, kod źródłowy dołączony do pakietu), znajdują się w [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge to niezależne oprogramowanie, niepowiązane ze Steinbergiem ani przez niego niesponsorowane czy niepopierane. Cubase i Nuendo są znakami towarowymi ich właściciela.

**Informacje prawne (po angielsku; wiążąca jest wersja angielska):** [Polityka prywatności](../docs/PRIVACY_POLICY.md) · [Warunki korzystania](../docs/TERMS_OF_SERVICE.md)
