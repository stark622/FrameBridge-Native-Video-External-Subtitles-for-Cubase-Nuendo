# FrameBridge — video nativo y subtítulos externos para Cubase y Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · **Español** · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![FrameBridge en la pista de video nativa de Nuendo — haga clic para ver la demo](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Sitio web: [framebridge.cc](https://framebridge.cc/es/)** · [Ver la demostración de FrameBridge en YouTube](https://youtu.be/qJqN0ybHV8E)

FrameBridge amplía el motor de video nativo de Cubase y Nuendo en Windows x64. Los formatos de video modernos se abren en la pista de video nativa y se reproducen en el Reproductor de video integrado, y los archivos de subtítulos externos se muestran sobre la imagen automáticamente, sin transcodificar el material y sin incrustar los subtítulos en el video.

## Ventajas principales

- Funciona con la pista de video nativa y el Reproductor de video integrado de Cubase/Nuendo.
- Compatibilidad ampliada de contenedores y códecs gracias a las bibliotecas FFmpeg incluidas (LGPL).
- Los archivos de subtítulos externos se cargan automáticamente y se muestran sobre la imagen; los cambios en el archivo de subtítulos se aplican al instante, incluso si el archivo se añade o se renombra después de importar, sin volver a importar. El archivo de video nunca se modifica.
- Todos los formatos de subtítulos se muestran con un mismo aspecto (el de SRT). Las imágenes PGS/SUP de Blu-ray y VobSub de DVD se leen como texto con el OCR integrado de Windows.
- No hace falta un reproductor de video aparte, un paquete de códecs ni LAV Filters.
- No es un plugin VST: sin ranura de plugin, sin cargar nada en cada proyecto y sin sincronización MTC; FrameBridge amplía el propio motor de video nativo.
- El audio llega con la opción estándar «Extraer audio de video», también desde MKV y otros archivos que Cubase y Nuendo no abren por sí solos.
- Conversión de HDR a SDR verificada visualmente para el material HDR compatible. No se afirma ninguna medición cuantitativa de la precisión del color.

## Versiones de Cubase y Nuendo compatibles

**Versiones verificadas**

- **Cubase:** 8.0.10 y 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo:** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Es muy probable que las versiones cercanas funcionen.** El motor de video apenas cambia dentro de una misma generación del producto: si, por ejemplo, Nuendo 12.0.52 está verificado, es muy probable que 12.0.20 o 12.0.70 también funcionen. El instalador comprueba por sí mismo el motor de video de cada instalación: si es compatible, la ofrece para instalar; si no lo es, no aparece en la lista y no se cambia nada. No es una garantía. Ediciones más antiguas con la misma generación de motor (por ejemplo, Nuendo 7–9, Cubase 8.5 / 9.5) también podrían ser compatibles, pero no se han probado.

Las miniaturas en la pista de video se muestran en todas las versiones verificadas, excepto Cubase 10.5–11 y Nuendo 10, donde el video se reproduce sin miniaturas.

Las ediciones Cubase Pro, Artist, Elements, AI y LE se detectan de la misma manera. La matriz completa está en [COMPATIBILITY.txt](../COMPATIBILITY.txt) (en inglés).

**¿Funcionará después de actualizar Cubase o Nuendo?** FrameBridge está verificado con las versiones indicadas arriba, hasta Cubase y Nuendo 15.0.30, y muy probablemente seguirá funcionando en toda la versión 15, aunque no está garantizado. Una nueva versión principal, como Cubase o Nuendo 16, puede cambiar el motor de video; usar FrameBridge con ella es bajo su propio riesgo. Para actualizar Cubase o Nuendo, ejecute primero UNINSTALL.cmd, instale la actualización y vuelva a ejecutar INSTALL.cmd. Si FrameBridge deja de funcionar tras una actualización, escriba a soporte.

## Formatos verificados

**Contenedores:** MKV / WebM, FLV, M2TS / MTS / TS, MOV / MP4, AVI, MXF, MPEG-PS / VOB, WMV / ASF y OGV.

**Códecs de video y perfiles:** APV, AV1 de 8 bits, AV1 de 10 bits, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main / Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, Theora, UtVideo, VP8, VP9 de 10 bits, WMV 8 y Xvid.

Probado con material real y pesado: un remux de Blu-ray 4K HDR (HEVC, ~25 GB) en un proyecto con 8 pistas de diálogo y muchos plugins, y un episodio 4K HEVC de streaming (~7 GB), con reproducción y desplazamiento fluidos.

**Subtítulos externos:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP y VobSub (el par .idx + .sub). Coloque el archivo de subtítulos junto al video, con el mismo nombre (por ejemplo, `film.mkv` + `film.srt`).

El reconocimiento de texto de PGS/SUP y VobSub usa los idiomas de OCR instalados en Windows (normalmente el idioma del sistema y el inglés; se pueden añadir más en la configuración de Windows). Si falta el idioma necesario, se muestran las imágenes originales de los subtítulos.

VVC/H.266 no es compatible en esta beta de forma intencionada.

<details>
<summary>Probablemente también funcionan</summary>

**Contenedores:** 3GP / 3G2, M4V, F4V, DivX, RM / RMVB, MOD / TOD, WTV / DVR-MS, OGM, MK3D, EVO

**Códecs de video:** DNxHD, XDCAM HD / EX / IMX, XAVC / AVC-Intra, HEVC 4:2:2 / 4:4:4, DVCPRO HD, JPEG 2000, Avid Meridian / 1:1, HAP / HAP Q, NotchLC, Canopus HQ / HQX / Lossless, SheerVideo, SpeedHQ (NDI), Apple Intermediate, Uncompressed (v210, r210, R10k), QuickTime Animation, PNG, TIFF, Lagarith, MagicYUV, FFVHuff, WMV 7 / 9, VC-1, DivX / MS MPEG-4, MPEG-1, H.263, VP9 8-bit, Sorenson Spark, VP6, RealVideo, TechSmith / Camtasia, Fraps, CamStudio, Cinepak, Indeo, Sorenson Video, Microsoft Video 1

Los decodifica el mismo FFmpeg 9.0.2 incluido en FrameBridge. Normalmente se abren y es muy posible que se reproduzcan con fluidez, pero solo los formatos de arriba están verificados para reproducción y desplazamiento fluidos. Se aplica el reembolso de 14 días.

</details>

**Cubase o Nuendo muestra «¡El archivo no se soporta o no es válido!»: ¿abrirá FrameBridge el video?** A menudo, sí. Cubase y Nuendo muestran este mensaje cuando su motor de video integrado no puede manejar el contenedor, el códec o la frecuencia de fotogramas del archivo; por ejemplo MKV, WebM, MXF, HEVC de teléfonos como el iPhone o video con frecuencia de fotogramas variable. FrameBridge lee estos archivos con su propio decodificador; los formatos verificados figuran más arriba. Si su archivo sigue sin abrirse, recibirá un reembolso completo dentro de 14 días.

## Instalación y restauración

- Cierre Cubase y Nuendo y ejecute `INSTALL.cmd`. Las instalaciones registradas se detectan automáticamente; si no, elija el EXE o la carpeta del programa.
- `UNINSTALL.cmd` restaura los archivos originales del programa desde una copia de seguridad verificada (byte a byte). Los proyectos, las preferencias y los plug-ins no se tocan.
- El paquete no incluye ningún archivo de Steinberg; el instalador trabaja únicamente con los archivos de su propia instalación.

Las instrucciones completas están en [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) y [README.txt](../README.txt) (en inglés).

## Comprobación del archivo de la versión

- Versión actual: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256: `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [Informe de VirusTotal](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (a 31 de octubre de 2026): 1/63, una única detección heurística genérica de un solo motor (MaxSecure); Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec y el resto de motores que completaron el análisis no detectan nada.
- Qué cambia el instalador en su PC y cómo comprobarlo usted mismo: [SECURITY.md](../SECURITY.md)

## Rendimiento

La fluidez de reproducción depende del material y del hardware. El video 4K de 10 bits exigente (HEVC Main10, H.264 High10) requiere una CPU/GPU potente: en un PC de prueba antiguo (Intel Core i5-2550K + GeForce GTX 660) se entrecortaba mucho, porque una GPU de esa generación no puede decodificar estos formatos por hardware. En equipos modestos se recomienda desactivar las miniaturas de video en el DAW y usar copias de trabajo H.264 de 8 bits de hasta 1080p. Los problemas conocidos se enumeran en [READ_ME_FIRST.txt](../READ_ME_FIRST.txt).

## Quién desarrolla FrameBridge

Soy stark622, ingeniero de doblaje y locución, y desarrollador de FrameBridge. Lo creé para mi propio trabajo: los videos de los clientes suelen llegar en formatos que Cubase no abre, con los subtítulos en archivos aparte, y convertir cada entrega o incrustar los subtítulos en la imagen cuesta tiempo. Las preguntas y comentarios me llegan directamente: stark622@ukr.net.

También en: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Plataforma y estado

- Windows x64
- FrameBridge Beta 1 · lanzado el 29 de octubre de 2026
- Software comercial y propietario

**[Comprar FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Sitio web: [framebridge.cc](https://framebridge.cc/es/)

**Precio:** precio libre — mínimo 29 USD, sugerido 59 USD. Pago único.

Escriba a stark622@ukr.net dentro de los 14 días posteriores a la compra. Si FrameBridge no se instala o no funciona con su Cubase o Nuendo, recibirá un reembolso completo.

**Soporte:** stark622@ukr.net

**Información legal (en inglés; prevalece la versión en inglés):**

- [Política de privacidad](../PRIVACY_POLICY.md)
- [Términos del servicio](../TERMS_OF_SERVICE.md)
- [Licencia de usuario final](../END_USER_LICENSE.txt)

## Licencias

FrameBridge es software comercial. Los términos del producto propietario se encuentran en [END_USER_LICENSE.txt](../END_USER_LICENSE.txt). Los detalles de licencias de terceros, incluidos los términos aplicables a las bibliotecas compartidas de FFmpeg incluidas (LGPL 2.1 o posterior, código fuente incluido en el paquete), se encuentran en [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

FrameBridge es software independiente y no está afiliado, patrocinado ni respaldado por Steinberg. Cubase y Nuendo son marcas comerciales de su respectivo propietario.
