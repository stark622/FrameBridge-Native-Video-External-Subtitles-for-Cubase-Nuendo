# FrameBridge — video nativo e sottotitoli esterni per Cubase e Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · **Italiano** · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#verifica-del-file-della-release) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#versioni-di-cubase-e-nuendo-supportate) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#versioni-di-cubase-e-nuendo-supportate) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#verifica-del-file-della-release)

[![FrameBridge sulla traccia video nativa di Nuendo — clicca per guardare la demo](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Qui sopra, una breve guida video in Cubase 11 Pro: un MKV con il suo file di sottotitoli SRT e un MKV HDR visualizzato in SDR. [Versione estesa su YouTube](https://youtu.be/NjNHtkc8-OE): un’unica ripresa senza tagli, importata dal vivo — MKV (HEVC 4K a 10 bit, anche HDR), OGV (Theora), MXF (DNxHR 4K), MOV (ProRes 4444 4K) e diversi formati di sottotitoli.

**[Sito web](https://framebridge.cc/it/)** · **[Acquista](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

FrameBridge estende il motore video nativo di Cubase e Nuendo su Windows x64. I formati video moderni si aprono sulla traccia video nativa e vengono riprodotti nel Riproduttore video integrato, mentre i file di sottotitoli esterni vengono mostrati automaticamente sopra l’immagine — senza convertire il materiale e senza imprimere i sottotitoli nel video.

**Cubase o Nuendo mostra «File non valido o non supportato!»?** FrameBridge è fatto proprio per questo messaggio. Cubase e Nuendo lo mostrano quando il motore video integrato non riesce a gestire il contenitore, il codec o il frame rate del file: MKV, WebM, MXF, HEVC da smartphone come l’iPhone, video con frame rate variabile. FrameBridge legge questi file con un proprio decoder. Se il tuo file continua a non aprirsi, ricevi il rimborso completo entro 14 giorni.

## Vantaggi principali

- **Formati moderni sulla traccia video nativa**: MKV, WebM, MXF, HEVC, AV1, ProRes 4444 e molti altri vengono riprodotti nel Riproduttore video integrato, senza conversione.
- **Sottotitoli esterni sull’immagine**: metti `film.srt` accanto a `film.mkv`; le modifiche al file dei sottotitoli compaiono subito. Il file video non viene mai modificato.
- **Pensato per il doppiaggio**: una seconda finestra video per il fonico, sottotitoli direttamente dai copioni di doppiaggio con i ruoli.
- **Non è un plugin**: nessuno slot plugin, niente da caricare in ogni progetto, nessuna sincronizzazione MTC, nessun codec pack. Ripristino esatto con UNINSTALL.cmd.

<details>
<summary>Tutte le funzioni</summary>

- Funziona con la traccia video nativa e il Riproduttore video integrato di Cubase/Nuendo.
- Supporto esteso di contenitori e codec grazie alle librerie FFmpeg incluse (LGPL).
- I file di sottotitoli esterni vengono caricati automaticamente e mostrati sopra l’immagine; le modifiche al file dei sottotitoli vengono applicate in tempo reale, anche per un file aggiunto o rinominato dopo l’importazione, senza reimportare. Il file video non viene mai modificato.
- Ogni formato di sottotitoli viene mostrato con un unico aspetto (quello degli SRT). Le immagini PGS/SUP dei Blu-ray e VobSub dei DVD vengono lette come testo con l’OCR integrato in Windows.
- Seconda finestra video per il doppiaggio: una copia dal vivo del Riproduttore video di Cubase/Nuendo per il fonico, mentre l’attore guarda il riproduttore su un altro schermo.
- Sottotitoli direttamente dai copioni di doppiaggio e dalle liste dialoghi con i ruoli: PDF, DOCX, TXT, XLSX, CSV.
- Non servono player video separati, codec pack o LAV Filters.
- Non è un plugin VST: nessuno slot plugin, niente da caricare in ogni progetto, nessuna sincronizzazione MTC — FrameBridge estende direttamente il motore video nativo.
- L’audio arriva con l’opzione standard «Estrai l’audio dal video», anche da MKV e da altri file che Cubase e Nuendo da soli non aprono.
- Conversione da HDR a SDR verificata visivamente per i contenuti HDR supportati. Non viene dichiarata alcuna misura quantitativa della fedeltà cromatica.

</details>

## Seconda finestra video per il doppiaggio

Cubase e Nuendo mostrano il video in un’unica finestra Riproduttore video. FrameBridge ne aggiunge una copia dal vivo: l’attore guarda il Riproduttore video sul suo schermo e tu tieni la copia accanto al progetto, senza splitter HDMI e senza scheda di uscita Blackmagic.

![Trascina il Riproduttore video sullo schermo dell’attore, doppio clic per lo schermo intero, clic sull’icona FrameBridge nell’area di notifica: la copia si apre sul tuo schermo](../media/dub-window.gif)

## Versioni di Cubase e Nuendo supportate

| | Versioni verificate |
|---|---|
| **Cubase** | 8.0.10 e 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30, 16.0.5 |
| **Nuendo** | 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 |

Le edizioni Cubase Pro, Artist, Elements, AI e LE vengono rilevate allo stesso modo. La matrice completa è in [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt) (in inglese). Le miniature sulla traccia video compaiono in tutte le versioni verificate.

<details>
<summary>Altre versioni e aggiornamenti</summary>

**Le versioni vicine molto probabilmente funzionano.** Il motore video cambia pochissimo all’interno della stessa generazione di prodotto: se, ad esempio, Nuendo 12.0.52 è verificato, molto probabilmente funzioneranno anche 12.0.20 o 12.0.70. Il programma di installazione controlla da sé il motore video di ogni installazione: quella compatibile viene proposta per l’installazione, quella incompatibile non compare nell’elenco e non viene modificato nulla. Anche edizioni più vecchie con la stessa generazione di motore (ad esempio Nuendo 7–9, Cubase 8.5 / 9.5) potrebbero essere idonee, ma non sono state testate.

**Funzionerà dopo un aggiornamento di Cubase o Nuendo?** FrameBridge è verificato con le build elencate sopra, fino a Cubase 16.0.5 e Nuendo 15.0.30. Una nuova versione principale può cambiare il motore video: in quel caso l’installer semplicemente non propone quell’installazione e non modifica nulla. Dopo aver aggiornato Cubase o Nuendo, basta eseguire di nuovo INSTALL.cmd. Se dopo l’aggiornamento del tuo Cubase o Nuendo FrameBridge smette di funzionare, scrivi all’assistenza.

</details>

## Formati verificati

**Contenitori:** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV e altri.

**Codec video:** H.264 (incl. High10, B-frame, VFR), HEVC Main / Main10, AV1 8/10 bit, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 e altri.

**Sottotitoli esterni:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP e VobSub (la coppia .idx + .sub). Metti il file di sottotitoli accanto al video, con lo stesso nome (ad esempio `film.mkv` + `film.srt`).

Testato su materiale reale e pesante: un remux Blu-ray 4K HDR (HEVC, ~25 GB) in un progetto con 8 tracce di dialogo e molti plugin e un episodio 4K HEVC da streaming (~7 GB), con riproduzione e spostamento fluidi.

<details>
<summary>Tutti i contenitori e codec verificati</summary>

**Contenitori:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM e OGV.

**Codec video e profili:** APV, AV1 8 bit, AV1 10 bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frame / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10 bit, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8 bit, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX e Xvid.

Il riconoscimento del testo di PGS/SUP e VobSub usa le lingue OCR installate in Windows (di solito la lingua di sistema e l’inglese; altre si possono aggiungere nelle impostazioni di Windows). Se manca la lingua necessaria, vengono mostrate le immagini originali dei sottotitoli.

</details>

<details>
<summary>Probabilmente funzionano anche</summary>

**Codec video:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Decodificati dallo stesso FFmpeg 9.0.2 incluso in FrameBridge. Di solito si aprono e possono benissimo essere riprodotti in modo fluido, ma solo i formati sopra sono verificati per riproduzione e spostamento fluidi. Vale il rimborso entro 14 giorni.

</details>

## Prestazioni

La fluidità della riproduzione dipende dal materiale e dall’hardware. Per il lavoro quotidiano conviene una CPU di fascia media attuale e una scheda video che decodifichi in hardware i formati che usi (HEVC, AV1). Sui PC più vecchi — ad esempio un PC di prova del 2012 (Intel Core i5-2550K + GeForce GTX 660) — il video 4K a 10 bit pesante (HEVC Main10, H.264 High10) scatta, perché una GPU di quella generazione non sa decodificare questi formati in hardware. Sui PC poco potenti aiuta disattivare le miniature video nella DAW e usare copie di lavoro H.264 a 8 bit fino a 1080p. I problemi noti sono elencati in [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt).

## Installazione e ripristino

- Chiudi Cubase e Nuendo ed esegui `INSTALL.cmd`. Le installazioni registrate vengono trovate automaticamente; in alternativa scegli l’EXE o la cartella del programma.
- `UNINSTALL.cmd` ripristina i file originali del programma da un backup verificato (byte per byte). Progetti, preferenze e plug-in non vengono toccati.
- Nel pacchetto non c’è alcun file Steinberg; il programma di installazione lavora solo con i file della tua installazione.

Le istruzioni complete sono in [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) e [README.txt](../docs/README.txt) (in inglese).

## Verifica del file della release

- Release attuale: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256: `714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [Report di VirusTotal](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) (al 14 novembre 2026): 0/61 — nessun motore rileva nulla, compresi Microsoft Defender, ESET, Malwarebytes, Sophos e Symantec.
- Cosa modifica il programma di installazione sul tuo PC e come verificarlo da solo: [SECURITY.md](../SECURITY.md)

## Chi sviluppa FrameBridge

Sono stark622, fonico di doppiaggio e voice-over e sviluppatore di FrameBridge. L’ho creato per il mio lavoro: i video dei clienti arrivano spesso in formati che Cubase non apre, con i sottotitoli in file separati, e convertire ogni consegna o imprimere i sottotitoli nell’immagine fa perdere tempo. Domande e feedback arrivano direttamente a me: stark622@ukr.net.

Anche su: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Prezzo e assistenza

**[Acquista FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

**Prezzo:** Prezzo libero: da US$29 a US$59 · la pagina di pagamento si apre su 59, puoi scendere fino a 29 · acquisto una tantum

Scrivi a stark622@ukr.net entro 14 giorni dall’acquisto. Se FrameBridge non si installa o non funziona con il tuo Cubase o Nuendo, ricevi un rimborso completo.

## Licenze

FrameBridge è un software commerciale. I termini del prodotto proprietario sono in [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt). Le informazioni sulle licenze di terze parti, compresi i termini applicabili alle librerie condivise FFmpeg incluse (LGPL 2.1 o successiva, codice sorgente incluso nel pacchetto), sono in [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge è un software indipendente e non è affiliato, sponsorizzato né approvato da Steinberg. Cubase e Nuendo sono marchi del rispettivo proprietario.

**Note legali (in inglese; fa fede la versione inglese):** [Informativa sulla privacy](../docs/PRIVACY_POLICY.md) · [Termini di servizio](../docs/TERMS_OF_SERVICE.md)
