# FrameBridge — video nativo y subtítulos externos para Cubase y Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · **Español** · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#plataforma-y-estado) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#versiones-de-cubase-y-nuendo-compatibles) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#versiones-de-cubase-y-nuendo-compatibles) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#plataforma-y-estado)

[![FrameBridge en la pista de video nativa de Nuendo — haga clic para ver la demo](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Arriba, una breve guía en video en Cubase 11 Pro: un MKV con su archivo de subtítulos SRT y un MKV HDR mostrado en SDR. [Versión extendida en YouTube](https://youtu.be/NjNHtkc8-OE): una sola toma sin cortes con la importación en vivo de muchos formatos de video y tipos de subtítulos.

**[Sitio web](https://framebridge.cc/es/)** · **[Comprar](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

FrameBridge amplía el motor de video nativo de Cubase y Nuendo en Windows x64. Los formatos de video modernos se abren en la pista de video nativa y se reproducen en el Reproductor de video integrado, y los archivos de subtítulos externos se muestran sobre la imagen automáticamente, sin transcodificar el material y sin incrustar los subtítulos en el video.

**¿Cubase o Nuendo muestra «¡El archivo no se soporta o no es válido!»?** Justo para ese mensaje está hecho FrameBridge. Cubase y Nuendo lo muestran cuando su motor de video integrado no puede manejar el contenedor, el códec o la frecuencia de fotogramas del archivo: MKV, WebM, MXF, HEVC de teléfonos como el iPhone, video con frecuencia de fotogramas variable. FrameBridge lee esos archivos con su propio decodificador. Si su archivo aun así no se abre, recibe el reembolso completo en un plazo de 14 días.

## Ventajas principales

- **Formatos modernos en la pista de video nativa**: MKV, WebM, MXF, HEVC, AV1, ProRes 4444 y muchos más se reproducen en el Reproductor de video integrado, sin transcodificar.
- **Subtítulos externos sobre la imagen**: ponga `film.srt` junto a `film.mkv`; los cambios en el archivo de subtítulos se ven al instante. El archivo de video nunca se modifica.
- **Hecho para el doblaje**: una segunda ventana de video para el ingeniero de sonido y subtítulos directamente desde guiones de doblaje con roles.
- **No es un plugin**: sin ranura de plugin, sin cargar nada en cada proyecto, sin sincronización MTC y sin paquete de códecs. Restauración exacta con UNINSTALL.cmd.

<details>
<summary>Todas las funciones</summary>

- Funciona con la pista de video nativa y el Reproductor de video integrado de Cubase/Nuendo.
- Compatibilidad ampliada de contenedores y códecs gracias a las bibliotecas FFmpeg incluidas (LGPL).
- Los archivos de subtítulos externos se cargan automáticamente y se muestran sobre la imagen; los cambios en el archivo de subtítulos se aplican al instante, incluso si el archivo se añade o se renombra después de importar, sin volver a importar. El archivo de video nunca se modifica.
- Todos los formatos de subtítulos se muestran con un mismo aspecto (el de SRT). Las imágenes PGS/SUP de Blu-ray y VobSub de DVD se leen como texto con el OCR integrado de Windows.
- Segunda ventana de video para doblaje: una copia en vivo del Reproductor de video de Cubase/Nuendo para el ingeniero de sonido, mientras el actor ve el reproductor a pantalla completa en otra pantalla.
- Subtítulos directamente desde guiones de doblaje y listas de diálogos con roles: PDF, DOCX, TXT, XLSX, CSV.
- No hace falta un reproductor de video aparte, un paquete de códecs ni LAV Filters.
- No es un plugin VST: sin ranura de plugin, sin cargar nada en cada proyecto y sin sincronización MTC; FrameBridge amplía el propio motor de video nativo.
- El audio llega con la opción estándar «Extraer audio de video», también desde MKV y otros archivos que Cubase y Nuendo no abren por sí solos.
- Conversión de HDR a SDR verificada visualmente para el material HDR compatible. No se afirma ninguna medición cuantitativa de la precisión del color.

</details>

## Segunda ventana de video para doblaje

Dos pantallas: el Reproductor de video de Cubase/Nuendo a pantalla completa para el actor, la copia de FrameBridge para usted.

![Arrastre el Reproductor de video a la pantalla del actor, haga doble clic para pantalla completa y pulse el icono de FrameBridge en la bandeja: la copia se abre en su pantalla](../media/dub-window.gif)

## Versiones de Cubase y Nuendo compatibles

| | Versiones verificadas |
|---|---|
| **Cubase** | 8.0.10 y 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30, 16.0.5 |
| **Nuendo** | 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 |

Las ediciones Cubase Pro, Artist, Elements, AI y LE se detectan de la misma manera. La matriz completa está en [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt) (en inglés). Las miniaturas en la pista de video se muestran en todas las versiones verificadas.

<details>
<summary>Otras versiones y actualizaciones</summary>

**Es muy probable que las versiones cercanas funcionen.** El motor de video apenas cambia dentro de una misma generación del producto: si, por ejemplo, Nuendo 12.0.52 está verificado, es muy probable que 12.0.20 o 12.0.70 también funcionen. El instalador comprueba por sí mismo el motor de video de cada instalación: si es compatible, la ofrece para instalar; si no lo es, no aparece en la lista y no se cambia nada. No es una garantía. Ediciones más antiguas con la misma generación de motor (por ejemplo, Nuendo 7–9, Cubase 8.5 / 9.5) también podrían ser compatibles, pero no se han probado.

**¿Funcionará después de actualizar Cubase o Nuendo?** FrameBridge está verificado con las versiones indicadas arriba, hasta Cubase 16.0.5 y Nuendo 15.0.30. Las nuevas versiones principales pueden cambiar el motor de video; usar FrameBridge con ellas es bajo su propio riesgo. Para actualizar Cubase o Nuendo, ejecute primero UNINSTALL.cmd, instale la actualización y vuelva a ejecutar INSTALL.cmd. Si FrameBridge deja de funcionar tras una actualización, escriba a soporte.

</details>

## Formatos verificados

**Contenedores:** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV y más.

**Códecs de video:** H.264 (incl. High10, fotogramas B, VFR), HEVC Main / Main10, AV1 de 8/10 bits, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 y más.

**Subtítulos externos:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP y VobSub (el par .idx + .sub). Coloque el archivo de subtítulos junto al video, con el mismo nombre (por ejemplo, `film.mkv` + `film.srt`).

Probado con material real y pesado: un remux de Blu-ray 4K HDR (HEVC, ~25 GB) en un proyecto con 8 pistas de diálogo y muchos plugins, y un episodio 4K HEVC de streaming (~7 GB), con reproducción y desplazamiento fluidos.

<details>
<summary>Todos los contenedores y códecs verificados</summary>

**Contenedores:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM y OGV.

**Códecs de video y perfiles:** APV, AV1 de 8 bits, AV1 de 10 bits, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 de 10 bits, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 de 8 bits, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX y Xvid.

El reconocimiento de texto de PGS/SUP y VobSub usa los idiomas de OCR instalados en Windows (normalmente el idioma del sistema y el inglés; se pueden añadir más en la configuración de Windows). Si falta el idioma necesario, se muestran las imágenes originales de los subtítulos.

</details>

<details>
<summary>Probablemente también funcionan</summary>

**Códecs de video:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Los decodifica el mismo FFmpeg 9.0.2 incluido en FrameBridge. Normalmente se abren y es muy posible que se reproduzcan con fluidez, pero solo los formatos de arriba están verificados para reproducción y desplazamiento fluidos. Se aplica el reembolso de 14 días.

</details>

## Rendimiento

La fluidez de la reproducción depende del material y del hardware. Para el trabajo diario, cuente con una CPU actual de gama media y una tarjeta gráfica que decodifique por hardware los formatos que usa (HEVC, AV1). FrameBridge también se instala y funciona sin bloqueos en un PC muy antiguo —en un PC de prueba de 2012 (Intel Core i5-2550K + GeForce GTX 660)—, pero no es un equipo para trabajar: el video 4K de 10 bits pesado (HEVC Main10, H.264 High10) se entrecorta, porque una GPU de esa generación no puede decodificar esos formatos por hardware. En PC poco potentes ayuda desactivar las miniaturas de video en la DAW y trabajar con copias de trabajo H.264 de 8 bits hasta 1080p. Los problemas conocidos se enumeran en [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt).

## Instalación y restauración

- Cierre Cubase y Nuendo y ejecute `INSTALL.cmd`. Las instalaciones registradas se detectan automáticamente; si no, elija el EXE o la carpeta del programa.
- `UNINSTALL.cmd` restaura los archivos originales del programa desde una copia de seguridad verificada (byte a byte). Los proyectos, las preferencias y los plug-ins no se tocan.
- El paquete no incluye ningún archivo de Steinberg; el instalador trabaja únicamente con los archivos de su propia instalación.

Las instrucciones completas están en [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) y [README.txt](../docs/README.txt) (en inglés).

## Comprobación del archivo de la versión

- Versión actual: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256: `714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [Informe de VirusTotal](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) (a 14 de noviembre de 2026): 0/61, ningún motor detecta nada, incluidos Microsoft Defender, ESET, Malwarebytes, Sophos y Symantec.
- Qué cambia el instalador en su PC y cómo comprobarlo usted mismo: [SECURITY.md](../SECURITY.md)

## Quién desarrolla FrameBridge

Soy stark622, ingeniero de doblaje y locución, y desarrollador de FrameBridge. Lo creé para mi propio trabajo: los videos de los clientes suelen llegar en formatos que Cubase no abre, con los subtítulos en archivos aparte, y convertir cada entrega o incrustar los subtítulos en la imagen cuesta tiempo. Las preguntas y comentarios me llegan directamente: stark622@ukr.net.

También en: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Plataforma y estado

- Windows x64
- FrameBridge Beta 2 · lanzado el 14 de noviembre de 2026
- Software comercial y propietario

**[Comprar FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Sitio web: [framebridge.cc](https://framebridge.cc/es/)

**Precio:** precio libre — mínimo 29 USD, sugerido 59 USD. Pago único.

Escriba a stark622@ukr.net dentro de los 14 días posteriores a la compra. Si FrameBridge no se instala o no funciona con su Cubase o Nuendo, recibirá un reembolso completo.

**Soporte:** stark622@ukr.net

**Información legal (en inglés; prevalece la versión en inglés):**

- [Política de privacidad](../docs/PRIVACY_POLICY.md)
- [Términos del servicio](../docs/TERMS_OF_SERVICE.md)
- [Licencia de usuario final](../docs/END_USER_LICENSE.txt)

## Licencias

FrameBridge es software comercial. Los términos del producto propietario se encuentran en [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt). Los detalles de licencias de terceros, incluidos los términos aplicables a las bibliotecas compartidas de FFmpeg incluidas (LGPL 2.1 o posterior, código fuente incluido en el paquete), se encuentran en [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge es software independiente y no está afiliado, patrocinado ni respaldado por Steinberg. Cubase y Nuendo son marcas comerciales de su respectivo propietario.
