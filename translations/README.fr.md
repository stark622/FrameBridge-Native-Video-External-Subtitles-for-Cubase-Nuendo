# FrameBridge — vidéo native & sous-titres externes pour Cubase & Nuendo

[English](../README.md) · [Deutsch](README.de.md) · **Français** · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![FrameBridge sur la piste vidéo native de Nuendo — cliquez pour voir la démo](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Site web : [framebridge.cc](https://framebridge.cc/fr/)** · [Voir la démonstration de FrameBridge sur YouTube](https://youtu.be/qJqN0ybHV8E)

FrameBridge étend le moteur vidéo natif de Cubase et Nuendo sous Windows x64. Les formats vidéo modernes s’ouvrent sur la piste vidéo native et sont lus dans le Lecteur vidéo intégré, et les fichiers de sous-titres externes s’affichent automatiquement sur l’image — sans transcoder le média et sans incruster les sous-titres dans la vidéo.

## Principaux avantages

- Fonctionne avec la piste vidéo native et le Lecteur vidéo intégré de Cubase/Nuendo.
- Prise en charge étendue des conteneurs et des codecs grâce aux bibliothèques FFmpeg fournies (LGPL).
- Les fichiers de sous-titres externes sont chargés automatiquement et affichés sur l’image ; les modifications du fichier de sous-titres sont prises en compte en direct. Le fichier vidéo lui-même n’est jamais modifié.
- Tous les formats de sous-titres sont affichés dans un même style (celui du SRT). Les images PGS/SUP (Blu-ray) et VobSub (DVD) sont lues comme du texte grâce à l’OCR intégré à Windows.
- Aucun lecteur vidéo séparé, pack de codecs ou LAV Filters n’est nécessaire.
- Ce n’est pas un plug-in VST : rien à charger dans le projet — FrameBridge étend directement le moteur vidéo natif.
- Conversion HDR vers SDR vérifiée visuellement pour les médias HDR pris en charge. Aucune mesure quantitative de la fidélité des couleurs n’est revendiquée.

## Versions de Cubase et Nuendo prises en charge

**Versions vérifiées**

- **Cubase :** 8.0.10 et 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo :** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Les versions voisines fonctionnent très probablement.** Le moteur vidéo change à peine au sein d’une même génération de produit : si, par exemple, Nuendo 12.0.52 est vérifié, 12.0.20 ou 12.0.70 fonctionneront très probablement aussi. L’installateur vérifie lui-même le moteur vidéo de chaque installation : une installation compatible est proposée, une installation incompatible n’apparaît pas dans la liste et rien n’est modifié. Ce n’est pas une garantie. Des éditions plus anciennes de la même génération de moteur (par exemple Nuendo 7–9, Cubase 8.5 / 9.5) peuvent aussi convenir, mais n’ont pas été testées.

Sous Cubase 8 et 9, FrameBridge fournit aussi le son des fichiers qu’il ouvre (par exemple MKV), si bien que « Extraire l’audio de la vidéo » y fonctionne comme dans les versions plus récentes.

Les éditions Cubase Pro, Artist, Elements, AI et LE sont détectées de la même manière. La matrice complète se trouve dans [COMPATIBILITY.txt](../COMPATIBILITY.txt) (en anglais).

**Fonctionnera-t-il après une mise à jour de Cubase ou Nuendo ?** FrameBridge est vérifié avec les versions listées ci-dessus, jusqu’à Cubase et Nuendo 15.0.30, et prévu pour fonctionner sur toute la version 15 : l’installateur vérifie lui-même le moteur vidéo de chaque installation. Si FrameBridge ne fonctionne plus après une mise à jour au sein de la version 15, relancez INSTALL.cmd : la mise à jour a pu remplacer le fichier du programme. Une nouvelle version majeure, comme Cubase ou Nuendo 16, peut modifier le moteur vidéo et n’est pas couverte par cette bêta.

## Médias vérifiés

**Conteneurs :** MKV / WebM, FLV, M2TS / MTS / TS, MOV / MP4, AVI, MXF, MPEG-PS / VOB et OGV.

**Codecs vidéo et profils :** APV, AV1 8 bits, AV1 10 bits, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, Theora, UtVideo, VP8, VP9 10 bits et Xvid.

**Sous-titres externes :** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP et VobSub (la paire .idx + .sub). Placez le fichier de sous-titres à côté de la vidéo, sous le même nom (par exemple `film.mkv` + `film.srt`).

La reconnaissance du texte PGS/SUP et VobSub utilise les langues OCR installées dans Windows (en général la langue du système et l’anglais ; d’autres peuvent être ajoutées dans les paramètres de Windows). Sans la langue nécessaire, les images d’origine des sous-titres sont affichées.

Le VVC/H.266 n’est volontairement pas pris en charge dans cette bêta.

**Cubase ou Nuendo affiche « Fichier non valide ou non supporté ! » — FrameBridge ouvrira-t-il la vidéo ?** Souvent, oui. Cubase et Nuendo affichent ce message lorsque leur moteur vidéo intégré ne gère pas le conteneur, le codec ou la fréquence d’images du fichier — par exemple MKV, WebM, MXF, HEVC de smartphones comme l’iPhone, ou une vidéo à fréquence d’images variable. FrameBridge lit ces fichiers avec son propre décodeur ; les formats vérifiés sont listés plus haut. Si votre fichier ne s’ouvre toujours pas, vous êtes intégralement remboursé sous 14 jours.

## Installation et restauration

- Fermez Cubase et Nuendo et lancez `INSTALL.cmd`. Les installations enregistrées sont trouvées automatiquement ; sinon, choisissez l’EXE ou le dossier du programme.
- `UNINSTALL.cmd` restaure les fichiers d’origine du programme à partir d’une sauvegarde vérifiée (octet par octet). Les projets, préférences et plug-ins ne sont pas touchés.
- Aucun fichier Steinberg n’est fourni dans le paquet ; l’installateur travaille uniquement avec les fichiers de votre propre installation.

Les instructions complètes se trouvent dans [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) et [README.txt](../README.txt) (en anglais).

## Vérification du fichier de la version

- Version actuelle : `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256 : `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [Rapport VirusTotal](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (au 31 octobre 2026) : 1/63 — une seule détection heuristique générique, par un seul moteur (MaxSecure) ; Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec et les autres moteurs ayant terminé l’analyse ne signalent rien.

## Performances

La fluidité de lecture dépend du média et du matériel. La vidéo 4K 10 bits exigeante (HEVC Main10, H.264 High10) demande un CPU/GPU performant : sur un ancien PC de test (Intel Core i5-2550K + GeForce GTX 660), elle saccadait fortement, car un GPU de cette génération ne peut pas décoder ces formats matériellement. Sur les PC modestes, il est conseillé de désactiver les miniatures vidéo dans la DAW et de travailler avec des copies de travail H.264 8 bits jusqu’en 1080p. Les problèmes connus sont listés dans [READ_ME_FIRST.txt](../READ_ME_FIRST.txt).

## Qui développe FrameBridge

Je suis Roman Aksonov, ingénieur du son en doublage et voice-over, et développeur de FrameBridge. Je l’ai créé pour mon propre travail : les vidéos des clients arrivent souvent dans des formats que Cubase n’ouvre pas, avec les sous-titres dans des fichiers séparés, et convertir chaque livraison ou incruster les sous-titres dans l’image fait perdre du temps. Questions et retours m’arrivent directement : stark622@ukr.net.

Également sur : [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Plateforme et statut

- Windows x64
- FrameBridge Beta 1 · sortie le 29 octobre 2026
- Logiciel commercial et propriétaire

**[Acheter FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Site web : [framebridge.cc](https://framebridge.cc/fr/)

**Prix :** prix libre — 29 USD minimum, 59 USD suggérés. Achat unique.

Écrivez à stark622@ukr.net dans les 14 jours suivant l’achat. Si FrameBridge ne s’installe pas ou ne fonctionne pas avec votre Cubase ou Nuendo, vous êtes intégralement remboursé.

**Assistance :** stark622@ukr.net

**Mentions légales (en anglais ; la version anglaise fait foi) :**

- [Politique de confidentialité](../PRIVACY_POLICY.md)
- [Conditions d’utilisation](../TERMS_OF_SERVICE.md)
- [Licence utilisateur final](../END_USER_LICENSE.txt)

## Licences

FrameBridge est un logiciel commercial. Les conditions du produit propriétaire figurent dans [END_USER_LICENSE.txt](../END_USER_LICENSE.txt). Les informations sur les licences des composants tiers, y compris les conditions applicables aux bibliothèques FFmpeg fournies (LGPL 2.1 ou ultérieure, code source inclus dans le paquet), figurent dans [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge est un logiciel indépendant, sans lien avec Steinberg, ni sponsorisé ni approuvé par Steinberg. Cubase et Nuendo sont des marques de leur propriétaire respectif.
