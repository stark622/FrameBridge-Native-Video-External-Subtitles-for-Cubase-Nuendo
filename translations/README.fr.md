# FrameBridge — vidéo native & sous-titres externes pour Cubase & Nuendo

[English](../README.md) · [Deutsch](README.de.md) · **Français** · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#vérification-du-fichier-de-la-version) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#versions-de-cubase-et-nuendo-prises-en-charge) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#versions-de-cubase-et-nuendo-prises-en-charge) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#vérification-du-fichier-de-la-version)

[![FrameBridge sur la piste vidéo native de Nuendo — cliquez pour voir la démo](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Ci-dessus, un court guide vidéo dans Cubase 11 Pro : un MKV avec son fichier de sous-titres SRT, et un MKV HDR affiché en SDR. [Version longue sur YouTube](https://youtu.be/NjNHtkc8-OE) : une seule prise sans coupes, importée en direct — MKV (HEVC 4K 10 bits, y compris HDR), OGV (Theora), MXF (DNxHR 4K), MOV (ProRes 4444 4K) et plusieurs formats de sous-titres.

**[Site web](https://framebridge.cc/fr/)** · **[Acheter](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · **[Vérifiez avant d’acheter](https://framebridge.cc/fr/#check)**

FrameBridge étend le moteur vidéo natif de Cubase et Nuendo sous Windows x64. Les formats vidéo modernes s’ouvrent sur la piste vidéo native et sont lus dans le Lecteur vidéo intégré, et les fichiers de sous-titres externes s’affichent automatiquement sur l’image — sans convertir le média et sans incruster les sous-titres dans la vidéo.

**Cubase ou Nuendo affiche « Fichier non valide ou non supporté ! » ?** C’est précisément pour ce message que FrameBridge existe. Cubase et Nuendo l’affichent lorsque leur moteur vidéo intégré ne gère pas le conteneur, le codec ou la fréquence d’images du fichier — MKV, WebM, MXF, HEVC de smartphones comme l’iPhone, vidéo à fréquence d’images variable. FrameBridge lit ces fichiers avec son propre décodeur. Si votre fichier ne s’ouvre toujours pas, vous êtes intégralement remboursé sous 14 jours.

## Principaux avantages

- **Formats modernes sur la piste vidéo native** — MKV, WebM, MXF, HEVC, AV1, ProRes 4444 et bien d’autres sont lus dans le Lecteur vidéo intégré, sans conversion.
- **Sous-titres externes sur l’image** — placez `film.srt` à côté de `film.mkv` ; les modifications du fichier de sous-titres apparaissent en direct. Le fichier vidéo n’est jamais modifié.
- **Conçu pour le doublage** — une deuxième fenêtre vidéo pour l’ingénieur du son, des sous-titres directement depuis les scripts de doublage avec les rôles.
- **Pas un plug-in** — aucun slot de plug-in, rien à charger dans chaque projet, aucune synchro MTC, aucun pack de codecs. Restauration exacte avec UNINSTALL.cmd.

<details>
<summary>Toutes les fonctionnalités</summary>

- Fonctionne avec la piste vidéo native et le Lecteur vidéo intégré de Cubase/Nuendo.
- Prise en charge étendue des conteneurs et des codecs grâce aux bibliothèques FFmpeg fournies (LGPL).
- Les fichiers de sous-titres externes sont chargés automatiquement et affichés sur l’image ; les modifications du fichier de sous-titres sont prises en compte en direct — même un fichier ajouté ou renommé après l’import, sans réimporter. Le fichier vidéo lui-même n’est jamais modifié.
- Tous les formats de sous-titres sont affichés dans un même style (celui du SRT). Les images PGS/SUP (Blu-ray) et VobSub (DVD) sont lues comme du texte grâce à l’OCR intégré à Windows.
- Deuxième fenêtre vidéo pour le doublage : une copie en direct du Lecteur vidéo de Cubase/Nuendo pour l’ingénieur du son, pendant que le comédien regarde le lecteur sur un autre écran.
- Sous-titres directement depuis les scripts de doublage et les listes de dialogues avec les rôles : PDF, DOCX, TXT, XLSX, CSV.
- Aucun lecteur vidéo séparé, pack de codecs ou LAV Filters n’est nécessaire.
- Ce n’est pas un plug-in VST : aucun slot de plug-in, rien à charger dans chaque projet, aucune synchro MTC — FrameBridge étend directement le moteur vidéo natif.
- Le son arrive via l’option standard « Extraire l’audio de la vidéo » — y compris depuis des MKV et d’autres fichiers que Cubase et Nuendo n’ouvrent pas seuls.
- La vidéo HDR s’affiche en couleurs normales (SDR) ; vérifié visuellement, aucune mesure quantitative de la fidélité des couleurs n’est revendiquée.

</details>

## Deuxième fenêtre vidéo pour le doublage

Cubase et Nuendo affichent la vidéo dans une seule fenêtre Lecteur vidéo. FrameBridge en ajoute une copie en direct : le comédien regarde le Lecteur vidéo sur son écran, et vous gardez la copie à côté de votre projet — sans splitter HDMI, sans carte de sortie Blackmagic.

![Faites glisser le Lecteur vidéo sur l’écran du comédien, double-cliquez pour le plein écran, cliquez sur l’icône FrameBridge de la barre des tâches : la copie s’ouvre sur votre écran](../media/dub-window.gif)

## Versions de Cubase et Nuendo prises en charge

| | Versions vérifiées |
|---|---|
| **Cubase** | 8.0.10 et 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30, 16.0.5 |
| **Nuendo** | 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 |

Les éditions Cubase Pro, Artist, Elements, AI et LE sont détectées de la même manière. La matrice complète se trouve dans [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt) (en anglais). Les miniatures sur la piste vidéo s’affichent dans toutes les versions vérifiées.

<details>
<summary>Autres versions et mises à jour</summary>

**Les versions voisines fonctionnent très probablement.** Le moteur vidéo change à peine au sein d’une même génération de produit : si, par exemple, Nuendo 12.0.52 est vérifié, 12.0.20 ou 12.0.70 fonctionneront très probablement aussi. L’installateur vérifie lui-même le moteur vidéo de chaque installation : une installation compatible est proposée, une installation incompatible n’apparaît pas dans la liste et rien n’est modifié. Des éditions plus anciennes de la même génération de moteur (par exemple Nuendo 7–9, Cubase 8.5 / 9.5) peuvent aussi convenir, mais n’ont pas été testées.

**Fonctionnera-t-il après une mise à jour de Cubase ou Nuendo ?** FrameBridge est vérifié avec les versions listées ci-dessus, jusqu’à Cubase 16.0.5 et Nuendo 15.0.30. Une nouvelle version majeure peut modifier le moteur vidéo : l’installateur ne propose alors tout simplement pas cette installation et ne modifie rien. Après la mise à jour de Cubase ou Nuendo, relancez simplement INSTALL.cmd. Si FrameBridge ne fonctionne plus après la mise à jour de votre Cubase ou Nuendo, écrivez au support.

</details>

## Médias vérifiés

**Conteneurs :** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV et d’autres.

**Codecs vidéo :** H.264 (dont High10, B-frames, VFR), HEVC Main / Main10, AV1 8/10 bits, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 et d’autres.

**Sous-titres externes :** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP et VobSub (la paire .idx + .sub). Placez le fichier de sous-titres à côté de la vidéo, sous le même nom (par exemple `film.mkv` + `film.srt`).

Testé sur du matériel réel et lourd : un remux Blu-ray 4K HDR (HEVC, ~25 Go) dans un projet avec 8 pistes de dialogue et de nombreux plug-ins, et un épisode 4K HEVC issu du streaming (~7 Go) — lecture et déplacement fluides.

<details>
<summary>Tous les conteneurs et codecs vérifiés</summary>

**Conteneurs :** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM et OGV.

**Codecs vidéo et profils :** APV, AV1 8 bits, AV1 10 bits, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10 bits, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8 bits, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX et Xvid.

La reconnaissance du texte PGS/SUP et VobSub utilise les langues OCR installées dans Windows (en général la langue du système et l’anglais ; d’autres peuvent être ajoutées dans les paramètres de Windows). Sans la langue nécessaire, les images d’origine des sous-titres sont affichées.

</details>

<details>
<summary>Devraient aussi fonctionner</summary>

**Codecs vidéo:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Décodés par le même FFmpeg 9.0.2 intégré à FrameBridge. Ces formats s’ouvrent généralement et peuvent tout à fait être lus de façon fluide, mais seuls les formats ci-dessus sont vérifiés pour une lecture et un déplacement fluides. Le remboursement sous 14 jours s’applique.

</details>

## Performances

Une vidéo ordinaire jusqu’en 1080p est fluide sur la plupart des ordinateurs. Pour la 4K 10 bits (HEVC, AV1), mieux vaut une carte graphique de 2016 ou plus récente : elle décode elle-même ce type de vidéo. [« Vérifiez avant d’acheter »](https://framebridge.cc/fr/#check) ci-dessus donne une idée de la fluidité de votre fichier sur votre ordinateur. Les problèmes connus sont listés dans [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt).

## Installation et restauration

- Fermez Cubase et Nuendo et lancez `INSTALL.cmd`. Les installations enregistrées sont trouvées automatiquement ; sinon, choisissez l’EXE ou le dossier du programme.
- `UNINSTALL.cmd` restaure les fichiers d’origine du programme à partir d’une sauvegarde vérifiée (octet par octet). Les projets, préférences et plug-ins ne sont pas touchés.
- Aucun fichier Steinberg n’est fourni dans le paquet ; l’installateur travaille uniquement avec les fichiers de votre propre installation.

Les instructions complètes se trouvent dans [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) et [README.txt](../docs/README.txt) (en anglais).

## Vérification du fichier de la version

- Version actuelle : `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256 : `714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [Rapport VirusTotal](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) (au 14 novembre 2026) : 0/61 — aucun moteur ne signale quoi que ce soit, dont Microsoft Defender, ESET, Malwarebytes, Sophos et Symantec.
- Ce que l’installateur modifie sur votre PC et comment le vérifier vous-même: [SECURITY.md](../SECURITY.md)

## Qui développe FrameBridge

Je suis Roman Aksonov, ingénieur du son en doublage et voice-over, et développeur de FrameBridge. Je l’ai créé pour mon propre travail : les vidéos des clients arrivent souvent dans des formats que Cubase n’ouvre pas, avec les sous-titres dans des fichiers séparés, et convertir chaque livraison ou incruster les sous-titres dans l’image fait perdre du temps. Questions et retours m’arrivent directement : stark622@ukr.net.

Également sur : [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Prix et support

**[Acheter FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

**Prix :** Prix libre : de 29 à 59 US$ · la page de paiement s’ouvre à 59, vous pouvez descendre à 29 · achat unique

Écrivez à stark622@ukr.net dans les 14 jours suivant l’achat. Si FrameBridge ne s’installe pas ou ne fonctionne pas avec votre Cubase ou Nuendo, vous êtes intégralement remboursé.

## Licences

FrameBridge est un logiciel commercial. Les conditions du produit propriétaire figurent dans [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt). Les informations sur les licences des composants tiers, y compris les conditions applicables aux bibliothèques FFmpeg fournies (LGPL 2.1 ou ultérieure, code source inclus dans le paquet), figurent dans [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge est un logiciel indépendant, sans lien avec Steinberg, ni sponsorisé ni approuvé par Steinberg. Cubase et Nuendo sont des marques de leur propriétaire respectif.

**Mentions légales (en anglais ; la version anglaise fait foi) :** [Politique de confidentialité](../docs/PRIVACY_POLICY.md) · [Conditions d’utilisation](../docs/TERMS_OF_SERVICE.md)
