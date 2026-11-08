# FrameBridge — video nativo e sottotitoli esterni per Cubase e Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · **Italiano** · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![FrameBridge sulla traccia video nativa di Nuendo — clicca per guardare la demo](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Sito web: [framebridge.cc](https://framebridge.cc/it/)** · [Guarda la dimostrazione di FrameBridge su YouTube](https://youtu.be/qJqN0ybHV8E)

FrameBridge estende il motore video nativo di Cubase e Nuendo su Windows x64. I formati video moderni si aprono sulla traccia video nativa e vengono riprodotti nel Riproduttore video integrato, mentre i file di sottotitoli esterni vengono mostrati automaticamente sopra l’immagine — senza transcodificare il materiale e senza imprimere i sottotitoli nel video.

## Vantaggi principali

- Funziona con la traccia video nativa e il Riproduttore video integrato di Cubase/Nuendo.
- Supporto esteso di contenitori e codec grazie alle librerie FFmpeg incluse (LGPL).
- I file di sottotitoli esterni vengono caricati automaticamente e mostrati sopra l’immagine; le modifiche al file dei sottotitoli vengono applicate in tempo reale. Il file video non viene mai modificato.
- Ogni formato di sottotitoli viene mostrato con un unico aspetto (quello degli SRT). Le immagini PGS/SUP dei Blu-ray e VobSub dei DVD vengono lette come testo con l’OCR integrato in Windows.
- Non servono player video separati, codec pack o LAV Filters.
- Non è un plugin VST: non c’è niente da caricare nel progetto — FrameBridge estende direttamente il motore video nativo.
- Conversione da HDR a SDR verificata visivamente per i contenuti HDR supportati. Non viene dichiarata alcuna misura quantitativa della fedeltà cromatica.

## Versioni di Cubase e Nuendo supportate

**Versioni verificate**

- **Cubase:** 8.0.10 e 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo:** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Le versioni vicine molto probabilmente funzionano.** Il motore video cambia pochissimo all’interno della stessa generazione di prodotto: se, ad esempio, Nuendo 12.0.52 è verificato, molto probabilmente funzioneranno anche 12.0.20 o 12.0.70. Il programma di installazione controlla da sé il motore video di ogni installazione: quella compatibile viene proposta per l’installazione, quella incompatibile non compare nell’elenco e non viene modificato nulla. Non è una garanzia. Anche edizioni più vecchie con la stessa generazione di motore (ad esempio Nuendo 7–9, Cubase 8.5 / 9.5) potrebbero essere idonee, ma non sono state testate.

In Cubase 8 e 9 FrameBridge fornisce anche l’audio dei file che apre (ad esempio MKV), quindi «Estrai l’audio dal video» funziona come nelle versioni più recenti.

Le edizioni Cubase Pro, Artist, Elements, AI e LE vengono rilevate allo stesso modo. La matrice completa è in [COMPATIBILITY.txt](../COMPATIBILITY.txt) (in inglese).

**Funzionerà dopo un aggiornamento di Cubase o Nuendo?** FrameBridge è verificato con le build elencate sopra, fino a Cubase e Nuendo 15.0.30, e molto probabilmente continuerà a funzionare per tutta la versione 15, anche se non è garantito. Una nuova versione principale, come Cubase o Nuendo 16, può cambiare il motore video: usarla con FrameBridge è a tuo rischio. Se dopo un aggiornamento FrameBridge smette di funzionare, scrivi all’assistenza.

## Formati verificati

**Contenitori:** MKV / WebM, FLV, M2TS / MTS / TS, MOV / MP4, AVI, MXF, MPEG-PS / VOB e OGV.

**Codec video e profili:** APV, AV1 8 bit, AV1 10 bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frame / VFR, HEVC Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, Theora, UtVideo, VP8, VP9 10 bit e Xvid.

**Sottotitoli esterni:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP e VobSub (la coppia .idx + .sub). Metti il file di sottotitoli accanto al video, con lo stesso nome (ad esempio `film.mkv` + `film.srt`).

Il riconoscimento del testo di PGS/SUP e VobSub usa le lingue OCR installate in Windows (di solito la lingua di sistema e l’inglese; altre si possono aggiungere nelle impostazioni di Windows). Se manca la lingua necessaria, vengono mostrate le immagini originali dei sottotitoli.

VVC/H.266 non è supportato di proposito in questa beta.

**Cubase o Nuendo mostra «File non valido o non supportato!»: FrameBridge aprirà il video?** Spesso sì. Cubase e Nuendo mostrano questo messaggio quando il motore video integrato non riesce a gestire il contenitore, il codec o il frame rate del file, ad esempio MKV, WebM, MXF, HEVC da smartphone come l’iPhone o video con frame rate variabile. FrameBridge legge questi file con un proprio decoder; i formati verificati sono elencati sopra. Se il tuo file non si apre comunque, ricevi un rimborso completo entro 14 giorni.

## Installazione e ripristino

- Chiudi Cubase e Nuendo ed esegui `INSTALL.cmd`. Le installazioni registrate vengono trovate automaticamente; in alternativa scegli l’EXE o la cartella del programma.
- `UNINSTALL.cmd` ripristina i file originali del programma da un backup verificato (byte per byte). Progetti, preferenze e plug-in non vengono toccati.
- Nel pacchetto non c’è alcun file Steinberg; il programma di installazione lavora solo con i file della tua installazione.

Le istruzioni complete sono in [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) e [README.txt](../README.txt) (in inglese).

## Verifica del file della release

- Release attuale: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256: `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [Report di VirusTotal](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (al 31 ottobre 2026): 1/63 — un’unica segnalazione euristica generica di un solo motore (MaxSecure); Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec e gli altri motori che hanno completato l’analisi non rilevano nulla.
- Cosa modifica il programma di installazione sul tuo PC e come verificarlo da solo: [SECURITY.md](../SECURITY.md)

## Prestazioni

La fluidità di riproduzione dipende dal materiale e dall’hardware. Il video 4K a 10 bit più pesante (HEVC Main10, H.264 High10) richiede una CPU/GPU adeguata: su un vecchio PC di prova (Intel Core i5-2550K + GeForce GTX 660) scattava molto, perché una GPU di quella generazione non può decodificare questi formati in hardware. Sui PC meno potenti si consiglia di disattivare le miniature video nella DAW e di usare copie di lavoro H.264 a 8 bit fino a 1080p. I problemi noti sono elencati in [READ_ME_FIRST.txt](../READ_ME_FIRST.txt).

## Chi sviluppa FrameBridge

Sono stark622, fonico di doppiaggio e voice-over e sviluppatore di FrameBridge. L’ho creato per il mio lavoro: i video dei clienti arrivano spesso in formati che Cubase non apre, con i sottotitoli in file separati, e convertire ogni consegna o imprimere i sottotitoli nell’immagine fa perdere tempo. Domande e feedback arrivano direttamente a me: stark622@ukr.net.

Anche su: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Piattaforma e stato

- Windows x64
- FrameBridge Beta 1 · uscita il 29 ottobre 2026
- Software commerciale e proprietario

**[Acquista FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Sito web: [framebridge.cc](https://framebridge.cc/it/)

**Prezzo:** prezzo libero — minimo 29 USD, consigliati 59 USD. Acquisto una tantum.

Scrivi a stark622@ukr.net entro 14 giorni dall’acquisto. Se FrameBridge non si installa o non funziona con il tuo Cubase o Nuendo, ricevi un rimborso completo.

**Assistenza:** stark622@ukr.net

**Note legali (in inglese; fa fede la versione inglese):**

- [Informativa sulla privacy](../PRIVACY_POLICY.md)
- [Termini di servizio](../TERMS_OF_SERVICE.md)
- [Licenza d’uso](../END_USER_LICENSE.txt)

## Licenze

FrameBridge è un software commerciale. I termini del prodotto proprietario sono in [END_USER_LICENSE.txt](../END_USER_LICENSE.txt). Le informazioni sulle licenze di terze parti, compresi i termini applicabili alle librerie condivise FFmpeg incluse (LGPL 2.1 o successiva, codice sorgente incluso nel pacchetto), sono in [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge è un software indipendente e non è affiliato, sponsorizzato né approvato da Steinberg. Cubase e Nuendo sono marchi del rispettivo proprietario.
