# FrameBridge — рідне відео та зовнішні субтитри для Cubase і Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · **Українська** · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#перевірка-релізного-файлу) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#підтримувані-версії-cubase-і-nuendo) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#підтримувані-версії-cubase-і-nuendo) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/e79196151d3289c6b99cdc94880cc61db3f26f613051897cca8f482ad5fbb436/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#перевірка-релізного-файлу)

[![FrameBridge на штатному відеотреку Nuendo — натисніть, щоб переглянути демо](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Вище — короткий відеогайд у Cubase 11 Pro: MKV із парним SRT-файлом субтитрів і HDR-MKV, показаний у SDR. [Розширена версія на YouTube](https://youtu.be/NjNHtkc8-OE) — один дубль без монтажу, наживо імпортуються MKV (HEVC 4K 10 біт, зокрема HDR), OGV (Theora), MXF (DNxHR 4K), MOV (ProRes 4444 4K) і субтитри різних форматів.

**[Сайт](https://framebridge.cc/uk/)** · **[Купити](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · **[Перевірте до покупки](https://framebridge.cc/uk/#check)** · **[Завантажити демо](https://framebridge.cc/download/FrameBridge-trial.zip)**

FrameBridge розширює штатний відеорушій Cubase і Nuendo у Windows x64. Сучасні відеоформати відкриваються на штатному відеотреку (Video Track) і відтворюються у вбудованому відеоплеєрі (Video Player), а зовнішні файли субтитрів автоматично показуються поверх зображення — без конвертації матеріалу й без вшивання субтитрів у відео.

**Cubase або Nuendo пише «Invalid or not supported file!» («Повреждённый или неподдерживаемый файл!»)?** Саме для цього повідомлення і зроблено FrameBridge. Cubase і Nuendo показують його, коли штатний відеорушій не справляється з контейнером, кодеком або частотою кадрів файлу — MKV, WebM, MXF, HEVC із телефонів на кшталт iPhone, відео зі змінною частотою кадрів. FrameBridge читає такі файли своїм декодером. Якщо ваш файл однаково не відкриється — повне повернення коштів протягом 14 днів.

## Головні переваги

- **Сучасні формати на штатному відеотреку** — MKV, WebM, MXF, HEVC, AV1, ProRes 4444 і багато іншого відтворюється у вбудованому відеоплеєрі, без конвертації.
- **Зовнішні субтитри поверх картинки** — покладіть `film.srt` поруч із `film.mkv`; правки у файлі субтитрів видно одразу. Відеофайл ніколи не змінюється.
- **Зроблено для озвучення** — друге вікно відео для звукорежисера, субтитри просто з монтажних листів із ролями.
- **Не плагін** — без слота плагіна, нічого не треба підключати в кожному проєкті, без синхронізації по MTC і без кодек-паків. Точний відкат через UNINSTALL.cmd.

<details>
<summary>Усі можливості</summary>

- Працює зі штатним відеотреком і вбудованим відеоплеєром Cubase/Nuendo.
- Розширена підтримка контейнерів і кодеків завдяки бібліотекам FFmpeg, що входять до комплекту (LGPL).
- Зовнішні файли субтитрів завантажуються автоматично й показуються поверх зображення; зміни у файлі субтитрів підхоплюються на льоту — навіть якщо файл додали чи перейменували вже після імпорту, без повторного імпорту. Сам відеофайл ніколи не змінюється.
- Усі формати субтитрів відображаються в єдиному вигляді (як SRT). Зображення Blu-ray PGS/SUP і DVD VobSub розпізнаються як текст вбудованим OCR Windows.
- Друге вікно відео для озвучення: жива копія відеоплеєра Cubase/Nuendo для звукорежисера, поки актор дивиться плеєр на іншому моніторі.
- Субтитри просто з монтажних листів і скриптів озвучення з ролями: PDF, DOCX, TXT, XLSX, CSV.
- Не потрібні окремий відеоплеєр, кодек-пак чи LAV Filters.
- Це не VST-плагін: не займає слот плагіна, нічого не треба підключати в кожному проєкті, не потрібна синхронізація по MTC — FrameBridge розширює сам штатний відеорушій.
- Звук надходить штатною опцією «Extract Audio From Video» — зокрема з MKV та інших файлів, які Cubase і Nuendo самі не відкривають.
- HDR-відео показується у звичайних кольорах (SDR); перевірено візуально, кількісних тверджень щодо точності кольору не робиться.

</details>

## Друге вікно відео для озвучення

Cubase і Nuendo показують відео в одному вікні відеоплеєра. FrameBridge додає його живу копію: актор дивиться відеоплеєр на своєму моніторі, а копія лишається у вас поруч із проєктом — без HDMI-спліттера й без окремої карти відеовиводу Blackmagic.

![Перетягніть відеоплеєр на екран актора, подвійний клік — на весь екран, клік по значку FrameBridge у треї — копія відкривається на вашому екрані](../media/dub-window.gif)

## Підтримувані версії Cubase і Nuendo

| | Перевірені збірки |
|---|---|
| **Cubase** | 8.0.10 і 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30, 16.0.5 |
| **Nuendo** | 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 / 15.0.40 |

Редакції Cubase Pro, Artist, Elements, AI та LE визначаються так само. Повна таблиця — у [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt) (англійською). Мініатюри на відеотреку є в усіх перевірених версіях.

<details>
<summary>Інші збірки та оновлення</summary>

**Сусідні збірки з високою ймовірністю працюють.** Відеорушій майже не змінюється в межах одного покоління продукту: якщо, наприклад, перевірено Nuendo 12.0.52, то 12.0.20 чи 12.0.70 з високою ймовірністю теж працюватимуть. Інсталятор сам перевіряє відеорушій кожного встановлення: сумісне пропонується до встановлення, несумісне не потрапляє до списку, і нічого не змінюється. Старіші редакції з тим самим поколінням рушія (наприклад, Nuendo 7–9, Cubase 8.5 / 9.5) теж можуть підійти, але не тестувалися.

**Чи працюватиме після оновлення Cubase або Nuendo?** FrameBridge перевірено на збірках зі списку вище, до Cubase 16.0.5 і Nuendo 15.0.40 включно. Нова основна версія може змінити відеорушій — тоді інсталятор просто не запропонує таке встановлення і нічого не змінить. Після оновлення Cubase або Nuendo просто знову запустіть INSTALL.cmd. Якщо після оновлення вашого Cubase або Nuendo FrameBridge перестав працювати, напишіть у підтримку.

</details>

## Перевірені формати

**Контейнери:** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV та інші.

**Відеокодеки:** H.264 (зокрема High10, B-кадри, VFR), HEVC Main / Main10, AV1 8/10 біт, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 та інші.

**Зовнішні субтитри:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP та VobSub (пара .idx + .sub). Покладіть файл субтитрів поруч із відео під тією самою назвою (наприклад, `film.mkv` + `film.srt`).

Перевірено на важкому реальному матеріалі: 4K HDR Blu-ray remux (HEVC, ~25 ГБ) у проєкті з 8 доріжками акторів і безліччю плагінів та 4K HEVC епізод зі стримінгу (~7 ГБ) — плавне відтворення й перемотування.

<details>
<summary>Усі перевірені контейнери та кодеки</summary>

**Контейнери:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM та OGV.

**Відеокодеки та профілі:** APV, AV1 8 біт, AV1 10 біт, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-кадри / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10 біт, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8 біт, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX та Xvid.

Розпізнавання тексту PGS/SUP і VobSub використовує мови OCR, встановлені у Windows (зазвичай мова системи та англійська; інші можна додати в налаштуваннях Windows). Якщо потрібної мови немає, показуються оригінальні зображення субтитрів.

</details>

<details>
<summary>Найімовірніше, теж відтворюються</summary>

**Відеокодеки:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Їх декодує той самий FFmpeg 9.0.2 усередині FrameBridge. Зазвичай вони відкриваються й цілком можуть відтворюватися плавно, але плавне відтворення й перемотування перевірені лише для форматів вище. Діє повернення коштів протягом 14 днів.

</details>

## Продуктивність

Звичайне відео до 1080p іде плавно на більшості комп’ютерів. Для 4K 10 біт (HEVC, AV1) краще відеокарта не старша за 2016 рік — вона декодує таке відео сама. Приблизну плавність для вашого файлу й комп’ютера покаже [«Перевірте до покупки»](https://framebridge.cc/uk/#check) вище. Відомі проблеми перелічено в [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt).

## Встановлення та відкат

- Закрийте Cubase і Nuendo та запустіть `INSTALL.cmd`. Зареєстровані встановлення знаходяться автоматично; якщо ні — вкажіть EXE або теку програми.
- `UNINSTALL.cmd` відновлює оригінальні файли програми з перевіреної резервної копії (байт у байт). Проєкти, налаштування та плагіни не зачіпаються.
- У пакеті немає жодного файлу Steinberg; інсталятор працює лише з файлами вашого власного встановлення.

Повна інструкція — у [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) та [README.txt](../docs/README.txt) (англійською).

## Перевірка релізного файлу

- Поточний реліз: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v3.zip`
- SHA-256: `e79196151d3289c6b99cdc94880cc61db3f26f613051897cca8f482ad5fbb436`
- [Звіт VirusTotal](https://www.virustotal.com/gui/file/e79196151d3289c6b99cdc94880cc61db3f26f613051897cca8f482ad5fbb436/detection) (станом на 26 листопада 2026 року): 0/61 — жоден рушій нічого не знаходить, зокрема Microsoft Defender, ESET, Malwarebytes, Sophos і Symantec.
- Що саме інсталятор змінює на комп’ютері і як перевірити це самостійно: [SECURITY.md](../SECURITY.md)

## Хто робить FrameBridge

Я Roman Aksonov, звукорежисер дубляжу та озвучення, розробник FrameBridge. Зробив його для своєї роботи: відео від клієнтів часто надходять у форматах, які Cubase не відкриває, а субтитри — окремими файлами, і конвертувати кожну поставку чи вшивати субтитри в картинку — це втрата часу. Питання та відгуки надходять напряму мені: stark622@ukr.net.

Також на: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Ціна та підтримка

**[Купити FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

**Ціна:** Ціну обираєте ви: від 29 до 59 USD · на сторінці оплати одразу стоїть 59 — можна зменшити до 29 · разова покупка

Напишіть на stark622@ukr.net протягом 14 днів після покупки. Якщо FrameBridge не встановлюється або не працює з вашим Cubase чи Nuendo, ви отримаєте повне повернення коштів.

## Ліцензування

FrameBridge — комерційна програма. Умови використання продукту — в [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt). Відомості про ліцензії сторонніх компонентів, зокрема умови для спільних бібліотек FFmpeg, що входять до комплекту (LGPL 2.1 або новіша, вихідний код включено до пакета), — в [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge — незалежна програма: вона не пов’язана з компанією Steinberg, не спонсорується й не схвалюється нею. Cubase і Nuendo — торговельні марки їхнього правовласника.

**Юридичні документи (англійською; переважну силу має англійська версія):** [Політика конфіденційності](../docs/PRIVACY_POLICY.md) · [Умови обслуговування](../docs/TERMS_OF_SERVICE.md)
