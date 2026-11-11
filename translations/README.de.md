# FrameBridge — natives Video & externe Untertitel für Cubase & Nuendo

[English](../README.md) · **Deutsch** · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![FrameBridge auf der nativen Videospur von Nuendo — klicken, um die Demo anzusehen](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Website: [framebridge.cc](https://framebridge.cc/de/)** · [Demovideo von FrameBridge auf YouTube ansehen](https://youtu.be/qJqN0ybHV8E)

FrameBridge erweitert die native Video-Engine von Cubase und Nuendo unter Windows x64. Moderne Videoformate öffnen sich auf der nativen Videospur und laufen im integrierten Video-Player, und externe Untertiteldateien werden automatisch über dem Bild angezeigt — ohne Transcodierung des Materials und ohne Einbrennen der Untertitel ins Video.

## Die wichtigsten Vorteile

- Arbeitet mit der nativen Videospur und dem integrierten Video-Player von Cubase/Nuendo.
- Erweiterte Container- und Codec-Unterstützung durch mitgelieferte FFmpeg-Bibliotheken (LGPL).
- Externe Untertiteldateien werden automatisch geladen und über dem Bild angezeigt; Änderungen an der Untertiteldatei werden live übernommen – auch eine Datei, die erst nach dem Import hinzugefügt oder umbenannt wird, ohne erneuten Import. Die Videodatei selbst wird nie verändert.
- Jedes Untertitelformat wird in einem einheitlichen Look dargestellt (dem SRT-Look). Blu-ray-PGS/SUP- und DVD-VobSub-Bilder werden mit der in Windows integrierten Texterkennung (OCR) als Text gelesen.
- Kein separater Videoplayer, kein Codec-Pack und keine LAV Filters nötig.
- Kein VST-Plug-in: kein Plug-in-Slot, nichts in jedem Projekt zu laden, keine MTC-Synchronisation – FrameBridge erweitert die native Video-Engine selbst.
- Der Ton kommt über das normale „Audio aus Videodatei extrahieren“ – auch aus MKV und anderen Dateien, die Cubase und Nuendo allein nicht öffnen.
- Visuell geprüfte HDR-zu-SDR-Umwandlung für unterstütztes HDR-Material. Eine messtechnische Aussage zur Farbgenauigkeit wird nicht getroffen.

## Unterstützte Versionen von Cubase und Nuendo

**Geprüfte Versionen**

- **Cubase:** 8.0.10 und 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo:** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Benachbarte Versionen funktionieren sehr wahrscheinlich.** Die Video-Engine ändert sich innerhalb einer Produktgeneration kaum: Ist zum Beispiel Nuendo 12.0.52 geprüft, funktionieren 12.0.20 oder 12.0.70 sehr wahrscheinlich ebenfalls. Das Installationsprogramm prüft die Video-Engine jeder Installation selbst: Eine kompatible wird zur Installation angeboten, eine inkompatible erscheint nicht in der Liste, und nichts wird verändert. Eine Garantie ist das nicht. Ältere Editionen mit derselben Engine-Generation (zum Beispiel Nuendo 7–9, Cubase 8.5 / 9.5) können ebenfalls infrage kommen, wurden aber nicht getestet.

Thumbnails auf der Videospur gibt es in allen geprüften Versionen außer Cubase 10.5–11 und Nuendo 10; dort läuft das Video ohne Thumbnails.

Die Editionen Cubase Pro, Artist, Elements, AI und LE werden auf dieselbe Weise erkannt. Die vollständige Matrix steht in [COMPATIBILITY.txt](../COMPATIBILITY.txt) (Englisch).

**Funktioniert es nach einem Update von Cubase oder Nuendo?** FrameBridge ist mit den oben aufgeführten Versionen bis Cubase und Nuendo 15.0.30 geprüft und dürfte in der gesamten Version 15 weiter funktionieren, eine Garantie gibt es dafür aber nicht. Eine neue Hauptversion wie Cubase oder Nuendo 16 kann die Video-Engine ändern – die Nutzung von FrameBridge damit erfolgt auf eigenes Risiko. Um Cubase oder Nuendo zu aktualisieren, führen Sie zuerst UNINSTALL.cmd aus, installieren dann das Update und führen anschließend erneut INSTALL.cmd aus. Funktioniert FrameBridge nach einem Update nicht mehr, schreiben Sie dem Support.

## Geprüfte Medienunterstützung

**Container:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOV / MP4, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM und OGV.

**Videocodecs und Profile:** APV, AV1 8-Bit, AV1 10-Bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-Frames / VFR, HEVC Main / Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, Theora, UtVideo, VP8, VP9 10-Bit, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8-Bit, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, HAP, Canopus HQX und Xvid.

Getestet mit schwerem echtem Material: ein 4K-HDR-Blu-ray-Remux (HEVC, ~25 GB) in einem Projekt mit 8 Dialogspuren und vielen Plug-ins und eine 4K-HEVC-Streaming-Folge (~7 GB) – flüssige Wiedergabe und flüssiges Spulen.

**Externe Untertitel:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP und VobSub (das Paar .idx + .sub). Legen Sie die Untertiteldatei mit gleichem Namen neben das Video (zum Beispiel `film.mkv` + `film.srt`).

Die Texterkennung von PGS/SUP und VobSub nutzt die in Windows installierten OCR-Sprachen (meist die Systemsprache und Englisch; weitere lassen sich in den Windows-Einstellungen hinzufügen). Fehlt die benötigte Sprache, werden die ursprünglichen Untertitelbilder angezeigt.

VVC/H.266 wird in dieser Beta bewusst nicht unterstützt.

<details>
<summary>Läuft wahrscheinlich auch</summary>

**Container:** M4V, MOD, EVO

**Videocodecs:** HEVC 4:2:2 / 4:4:4, JPEG 2000, HAP Q, Lagarith, Canopus HQ / Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k, MPEG-1, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo

Dekodiert vom selben FFmpeg 9.0.2 in FrameBridge. Diese Formate öffnen sich meist und laufen oft auch flüssig; auf flüssige Wiedergabe und flüssiges Spulen geprüft sind jedoch nur die Formate oben. Es gilt die Rückerstattung innerhalb von 14 Tagen.

</details>

**Cubase oder Nuendo meldet „Datei ist entweder fehlerhaft oder Medientyp wird nicht unterstützt!“ – öffnet FrameBridge das Video?** Oft ja. Cubase und Nuendo zeigen diese Meldung, wenn die integrierte Video-Engine mit Container, Codec oder Bildrate der Datei nicht zurechtkommt – etwa MKV, WebM, MXF, HEVC von Smartphones wie dem iPhone oder Video mit variabler Bildrate. FrameBridge liest solche Dateien mit einem eigenen Decoder; die geprüften Formate stehen oben. Öffnet sich Ihre Datei trotzdem nicht, erhalten Sie innerhalb von 14 Tagen den vollen Kaufpreis zurück.

## Installation und Wiederherstellung

- Cubase und Nuendo schließen und `INSTALL.cmd` ausführen. Registrierte Installationen werden automatisch gefunden; andernfalls die EXE-Datei oder den Programmordner auswählen.
- `UNINSTALL.cmd` stellt die originalen Programmdateien aus einer geprüften Sicherung wieder her (Byte für Byte). Projekte, Einstellungen und Plug-ins bleiben unberührt.
- Im Paket wird keine Steinberg-Datei mitgeliefert; das Installationsprogramm arbeitet nur mit den Dateien Ihrer eigenen Installation.

Die vollständige Anleitung steht in [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) und [README.txt](../README.txt) (Englisch).

## Prüfung der Release-Datei

- Aktuelles Release: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256: `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [VirusTotal-Bericht](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (Stand 31. Oktober 2026): 1/63 — eine einzelne generische Heuristik eines einzigen Scanners (MaxSecure); Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec und die übrigen abgeschlossenen Scanner melden nichts.
- Was das Installationsprogramm auf Ihrem PC ändert und wie Sie es selbst prüfen: [SECURITY.md](../SECURITY.md)

## Leistung

Die Wiedergabegeschwindigkeit hängt vom Material und von der Hardware ab. Anspruchsvolles 4K-10-Bit-Video (HEVC Main10, H.264 High10) braucht eine leistungsfähige CPU/GPU: Auf einem älteren Test-PC (Intel Core i5-2550K + GeForce GTX 660) ruckelte es stark, weil eine GPU dieser Generation diese Formate nicht in Hardware decodieren kann. Auf schwachen PCs empfiehlt es sich, die Video-Thumbnails in der DAW abzuschalten und mit H.264-8-Bit-Arbeitskopien bis 1080p zu arbeiten. Bekannte Probleme sind in [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) aufgeführt.

## Wer FrameBridge entwickelt

Ich bin stark622, Toningenieur für Synchronisation und Voice-over und Entwickler von FrameBridge. Ich habe es für meine eigene Arbeit gebaut: Videos von Kunden kommen oft in Formaten, die Cubase nicht öffnet, die Untertitel als separate Dateien – und jede Lieferung zu konvertieren oder Untertitel ins Bild einzubrennen kostet Zeit. Fragen und Feedback landen direkt bei mir: stark622@ukr.net.

Auch auf: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Plattform und Status

- Windows x64
- FrameBridge Beta 1 · veröffentlicht am 29. Oktober 2026
- Kommerzielle, proprietäre Software

**[FrameBridge kaufen](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Website: [framebridge.cc](https://framebridge.cc/de/)

**Preis:** frei wählbar — mindestens 29 USD, empfohlen 59 USD. Einmalkauf.

Schreiben Sie innerhalb von 14 Tagen nach dem Kauf an stark622@ukr.net. Lässt sich FrameBridge mit Ihrem Cubase oder Nuendo nicht installieren oder funktioniert es nicht, erhalten Sie den vollen Kaufpreis zurück.

**Support:** stark622@ukr.net

**Rechtliches (Englisch; maßgeblich ist die englische Fassung):**

- [Datenschutzerklärung](../PRIVACY_POLICY.md)
- [Nutzungsbedingungen](../TERMS_OF_SERVICE.md)
- [Endbenutzerlizenz](../END_USER_LICENSE.txt)

## Lizenzierung

FrameBridge ist kommerzielle Software. Die Bedingungen für das proprietäre Produkt stehen in [END_USER_LICENSE.txt](../END_USER_LICENSE.txt). Angaben zur Lizenzierung von Drittkomponenten, einschließlich der Bedingungen für die mitgelieferten FFmpeg-Bibliotheken (LGPL 2.1 oder später, Quellcode im Paket enthalten), stehen in [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge ist unabhängige Software und steht in keiner Verbindung zu Steinberg, wird von Steinberg weder gesponsert noch unterstützt. Cubase und Nuendo sind Marken ihres jeweiligen Inhabers.
