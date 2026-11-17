# FrameBridge — родное видео и внешние субтитры для Cubase и Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · **Русский** · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#платформа-и-статус) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#поддерживаемые-версии-cubase-и-nuendo) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#поддерживаемые-версии-cubase-и-nuendo) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#платформа-и-статус)

[![FrameBridge на штатном видеотреке Nuendo — нажмите, чтобы посмотреть демо](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Выше — короткий видеогайд в Cubase 11 Pro: MKV с парным SRT-файлом субтитров и HDR-MKV, показанный в SDR. [Расширенная версия на YouTube](https://youtu.be/NjNHtkc8-OE) — один дубль без монтажа, вживую импортируются MKV (HEVC 4K 10 бит, в том числе HDR), OGV (Theora), MXF (DNxHR 4K), MOV (ProRes 4444 4K) и субтитры разных форматов. Без FrameBridge Cubase MKV и OGV не открывает, а из MXF берёт только звук.

**[Сайт](https://framebridge.cc/ru/)** · **[Купить](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

FrameBridge расширяет штатный видеодвижок Cubase и Nuendo в Windows x64. Современные видеоформаты открываются на штатном видеотреке и воспроизводятся во встроенном Видеоплеере, а внешние файлы субтитров автоматически показываются поверх изображения — без перекодирования материала и без прожига субтитров в видео.

**Cubase или Nuendo пишет «Повреждённый или неподдерживаемый файл!»?** Именно для этого сообщения и сделан FrameBridge. Cubase и Nuendo выдают его, когда штатный видеодвижок не справляется с контейнером, кодеком или частотой кадров файла — MKV, WebM, MXF, HEVC с телефонов вроде iPhone, видео с переменной частотой кадров. FrameBridge читает такие файлы своим декодером. Если ваш файл всё равно не откроется — полный возврат денег в течение 14 дней.

## Главные преимущества

- **Современные форматы на штатном видеотреке** — MKV, WebM, MXF, HEVC, AV1, ProRes 4444 и многое другое играет во встроенном Видеоплеере, без перекодирования.
- **Внешние субтитры поверх картинки** — положите `film.srt` рядом с `film.mkv`; правки в файле субтитров видны сразу. Видеофайл никогда не изменяется.
- **Сделан для озвучания** — второе окно видео для звукорежиссёра, субтитры прямо из монтажных листов с ролями.
- **Не плагин** — без слота плагина, ничего не нужно подключать в каждом проекте, без синхронизации по MTC и без кодек-паков. Точный откат через UNINSTALL.cmd.

<details>
<summary>Все возможности</summary>

- Работает со штатным видеотреком и встроенным Видеоплеером Cubase/Nuendo.
- Расширенная поддержка контейнеров и кодеков за счёт входящих в комплект библиотек FFmpeg (LGPL).
- Внешние файлы субтитров загружаются автоматически и показываются поверх изображения; правки в файле субтитров подхватываются на лету — даже если файл положили или переименовали уже после импорта, без повторного импорта. Сам видеофайл никогда не изменяется.
- Все форматы субтитров отображаются в едином виде (как SRT). Картинки Blu-ray PGS/SUP и DVD VobSub распознаются как текст встроенным OCR Windows.
- Второе окно видео для озвучания: живая копия Видеоплеера Cubase/Nuendo для звукорежиссёра, пока актёр смотрит плеер на весь экран на другом мониторе.
- Субтитры прямо из монтажных листов и скриптов озвучания с ролями: PDF, DOCX, TXT, XLSX, CSV.
- Не нужны отдельный видеоплеер, кодек-пак или LAV Filters.
- Это не VST-плагин: не занимает слот плагина, ничего не нужно подключать в каждом проекте, не нужна синхронизация по MTC — FrameBridge расширяет сам штатный видеодвижок.
- Звук приходит штатной опцией «Извлечь Аудио из Видео» — в том числе из MKV и других файлов, которые Cubase и Nuendo сами не открывают.
- Визуально проверенное преобразование HDR в SDR для поддерживаемых HDR-материалов. Количественных заявлений о точности цвета не делается.

</details>

## Второе окно видео для озвучания

Два экрана: Видеоплеер Cubase/Nuendo на весь экран — для актёра, копия FrameBridge — для вас.

![Перетащите Видеоплеер на экран актёра, двойной клик — на весь экран, клик по значку FrameBridge в трее — копия открывается на вашем экране](../media/dub-window.gif)

## Поддерживаемые версии Cubase и Nuendo

| | Проверенные сборки |
|---|---|
| **Cubase** | 8.0.10 и 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30, 16.0.5 |
| **Nuendo** | 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 |

Редакции Cubase Pro, Artist, Elements, AI и LE определяются так же. Полная таблица — в [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt) (на английском). Миниатюры на видеотреке есть во всех проверенных версиях.

<details>
<summary>Другие сборки и обновления</summary>

**Соседние сборки с высокой вероятностью работают.** Видеодвижок почти не меняется в пределах одного поколения продукта: если, например, проверена Nuendo 12.0.52, то 12.0.20 или 12.0.70 с высокой вероятностью тоже будут работать. Установщик сам проверяет видеодвижок каждой установки: совместимая предлагается к установке, несовместимая не попадает в список, и ничего не меняется. Более старые редакции с тем же поколением движка (например, Nuendo 7–9, Cubase 8.5 / 9.5) тоже могут подойти, но не тестировались.

**Будет ли работать после обновления Cubase или Nuendo?** FrameBridge проверен на сборках из списка выше, до Cubase 16.0.5 и Nuendo 15.0.30 включительно. Новая основная версия может изменить видеодвижок — тогда установщик просто не предложит такую установку и ничего не изменит. После обновления Cubase или Nuendo просто снова запустите INSTALL.cmd. Если после обновления вашего Cubase или Nuendo FrameBridge перестал работать, напишите в поддержку.

</details>

## Проверенные форматы

**Контейнеры:** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV и другие.

**Видеокодеки:** H.264 (в том числе High10, B-кадры, VFR), HEVC Main / Main10, AV1 8/10 бит, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 и другие.

**Внешние субтитры:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP и VobSub (пара .idx + .sub). Положите файл субтитров рядом с видео под тем же именем (например, `film.mkv` + `film.srt`).

Проверено на тяжёлом реальном материале: 4K HDR Blu-ray remux (HEVC, ~25 ГБ) в проекте с 8 дорожками актёров и множеством плагинов и 4K HEVC эпизод со стриминга (~7 ГБ) — плавное воспроизведение и перемотка.

<details>
<summary>Все проверенные контейнеры и кодеки</summary>

**Контейнеры:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM и OGV.

**Видеокодеки и профили:** APV, AV1 8 бит, AV1 10 бит, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-кадры / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10 бит, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8 бит, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX и Xvid.

Распознавание текста PGS/SUP и VobSub использует языки OCR, установленные в Windows (обычно язык системы и английский; другие можно добавить в настройках Windows). Если нужного языка нет, показываются исходные картинки субтитров.

</details>

<details>
<summary>Скорее всего, тоже играют</summary>

**Видеокодеки:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Их декодирует тот же FFmpeg 9.0.2 внутри FrameBridge. Обычно они открываются и вполне могут играть плавно, но плавное воспроизведение и перемотка проверены только для форматов выше. Действует возврат за 14 дней.

</details>

## Производительность

Плавность воспроизведения зависит от материала и железа. Для повседневной работы рассчитывайте на современный процессор среднего уровня и видеокарту, которая аппаратно декодирует нужные вам форматы (HEVC, AV1). На старых компьютерах — например, на тестовом ПК 2012 года (Intel Core i5-2550K + GeForce GTX 660) — тяжёлое видео 4K 10 бит (HEVC Main10, H.264 High10) дёргается, потому что видеокарта этого поколения не умеет аппаратно декодировать такие форматы. На слабых компьютерах помогает отключить миниатюры видео в DAW и работать с рабочими копиями H.264 8 бит до 1080p. Известные проблемы перечислены в [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt).

## Установка и откат

- Закройте Cubase и Nuendo и запустите `INSTALL.cmd`. Зарегистрированные установки находятся автоматически; если нет — укажите EXE или папку программы.
- `UNINSTALL.cmd` восстанавливает оригинальные файлы программы из проверенной резервной копии (байт в байт). Проекты, настройки и плагины не затрагиваются.
- В пакете нет ни одного файла Steinberg; установщик работает только с файлами вашей собственной установки.

Полная инструкция — в [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) и [README.txt](../docs/README.txt) (на английском).

## Проверка релизного файла

- Текущий релиз: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256: `714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [Отчёт VirusTotal](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) (по состоянию на 14 ноября 2026 года): 0/61 — ни один движок ничего не находит, в том числе Microsoft Defender, ESET, Malwarebytes, Sophos и Symantec.
- Что именно установщик меняет на компьютере и как проверить это самому: [SECURITY.md](../SECURITY.md)

## Кто делает FrameBridge

Я stark622, звукорежиссёр дубляжа и озвучания, разработчик FrameBridge. Сделал его для своей работы: видео от клиентов часто приходят в форматах, которые Cubase не открывает, а субтитры — отдельными файлами, и конвертировать каждую поставку или вшивать субтитры в картинку — это потеря времени. Вопросы и отзывы приходят напрямую мне: stark622@ukr.net.

Также на: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Платформа и статус

- Windows x64
- FrameBridge Beta 2 · выпуск 14 ноября 2026
- Коммерческая проприетарная программа

**[Купить FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Сайт: [framebridge.cc](https://framebridge.cc/ru/)

**Цена:** Цену выбираете вы: от 29 до 59 USD · на странице оплаты сразу стоит 59 — можно уменьшить до 29 · разовая покупка

Напишите на stark622@ukr.net в течение 14 дней после покупки. Если FrameBridge не устанавливается или не работает с вашим Cubase или Nuendo, вы получите полный возврат денег.

**Поддержка:** stark622@ukr.net

**Юридические документы (на английском; приоритет имеет английская версия):**

- [Политика конфиденциальности](../docs/PRIVACY_POLICY.md)
- [Условия обслуживания](../docs/TERMS_OF_SERVICE.md)
- [Лицензия пользователя](../docs/END_USER_LICENSE.txt)

## Лицензирование

FrameBridge — коммерческая программа. Условия использования продукта — в [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt). Сведения о лицензиях сторонних компонентов, включая условия для входящих в комплект разделяемых библиотек FFmpeg (LGPL 2.1 или новее, исходный код включён в пакет), — в [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge — независимая программа: она не связана с компанией Steinberg, не спонсируется и не одобряется ею. Cubase и Nuendo — товарные знаки их правообладателя.
