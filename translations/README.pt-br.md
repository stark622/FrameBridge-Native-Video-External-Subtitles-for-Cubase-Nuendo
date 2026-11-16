# FrameBridge — vídeo nativo e legendas externas para Cubase e Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · **Português (Brasil)** · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#plataforma-e-status) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#versões-do-cubase-e-do-nuendo-compatíveis) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#versões-do-cubase-e-do-nuendo-compatíveis) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#plataforma-e-status)

[![FrameBridge na pista de vídeo nativa do Nuendo — clique para ver a demonstração](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Acima, um guia em vídeo curto no Cubase 11 Pro: um MKV com seu arquivo de legenda SRT e um MKV HDR exibido em SDR. [Versão estendida no YouTube](https://youtu.be/NjNHtkc8-OE): uma única tomada sem cortes, com a importação ao vivo de vários formatos de vídeo e tipos de legenda.

**[Site](https://framebridge.cc/pt-br/)** · **[Comprar](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

O FrameBridge amplia o mecanismo de vídeo nativo do Cubase e do Nuendo no Windows x64. Formatos de vídeo modernos abrem na pista de vídeo nativa e são reproduzidos no Player de Vídeo integrado, e arquivos de legenda externos são exibidos automaticamente sobre a imagem — sem transcodificar a mídia e sem gravar as legendas no vídeo.

**O Cubase ou o Nuendo mostra “Arquivo inválido ou não suportado.”?** O FrameBridge foi feito justamente para essa mensagem. O Cubase e o Nuendo a mostram quando o mecanismo de vídeo nativo não consegue lidar com o contêiner, o codec ou a taxa de quadros do arquivo — MKV, WebM, MXF, HEVC de celulares como o iPhone, vídeo com taxa de quadros variável. O FrameBridge lê esses arquivos com o próprio decodificador. Se o seu arquivo ainda assim não abrir, você recebe o reembolso integral em até 14 dias.

## Principais vantagens

- **Formatos modernos na pista de vídeo nativa** — MKV, WebM, MXF, HEVC, AV1, ProRes 4444 e muitos outros tocam no Player de Vídeo integrado, sem transcodificação.
- **Legendas externas sobre a imagem** — coloque `film.srt` ao lado de `film.mkv`; as alterações no arquivo de legenda aparecem na hora. O arquivo de vídeo nunca é alterado.
- **Feito para dublagem** — uma segunda janela de vídeo para o técnico de som e legendas direto de roteiros de dublagem com papéis.
- **Não é um plugin** — sem slot de plugin, nada para carregar em cada projeto, sem sincronização MTC, sem pacote de codecs. Restauração exata com UNINSTALL.cmd.

<details>
<summary>Todos os recursos</summary>

- Funciona com a pista de vídeo nativa e o Player de Vídeo integrado do Cubase/Nuendo.
- Suporte ampliado a contêineres e codecs por meio das bibliotecas FFmpeg incluídas (LGPL).
- Arquivos de legenda externos são carregados automaticamente e exibidos sobre a imagem; alterações no arquivo de legenda são aplicadas na hora, até mesmo um arquivo adicionado ou renomeado depois da importação, sem reimportar. O arquivo de vídeo nunca é alterado.
- Todos os formatos de legenda são exibidos com o mesmo visual (o do SRT). As imagens PGS/SUP de Blu-ray e VobSub de DVD são lidas como texto pelo OCR integrado do Windows.
- Segunda janela de vídeo para dublagem: uma cópia ao vivo do Player de Vídeo do Cubase/Nuendo para o técnico de som, enquanto o ator vê o player em tela cheia em outra tela.
- Legendas direto de roteiros de dublagem e listas de diálogos com papéis: PDF, DOCX, TXT, XLSX, CSV.
- Não é preciso player de vídeo separado, pacote de codecs nem LAV Filters.
- Não é um plugin VST: sem slot de plugin, nada para carregar em cada projeto, sem sincronização MTC — o FrameBridge amplia o próprio mecanismo de vídeo nativo.
- O áudio vem pela opção padrão “Extrair áudio do vídeo”, inclusive de MKV e de outros arquivos que o Cubase e o Nuendo não abrem sozinhos.
- Conversão de HDR para SDR verificada visualmente para mídias HDR compatíveis. Nenhuma medição quantitativa de precisão de cor é declarada.

</details>

## Segunda janela de vídeo para dublagem

Duas telas: o Player de Vídeo do Cubase/Nuendo em tela cheia para o ator, a cópia do FrameBridge para você.

![Arraste o Player de Vídeo para a tela do ator, clique duas vezes para tela cheia e clique no ícone do FrameBridge na bandeja: a cópia abre na sua tela](../media/dub-window.gif)

## Versões do Cubase e do Nuendo compatíveis

| | Versões verificadas |
|---|---|
| **Cubase** | 8.0.10 e 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30, 16.0.5 |
| **Nuendo** | 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 |

As edições Cubase Pro, Artist, Elements, AI e LE são encontradas da mesma forma. A matriz completa está em [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt) (em inglês). As miniaturas na pista de vídeo aparecem em todas as versões verificadas.

<details>
<summary>Outras versões e atualizações</summary>

**Versões próximas muito provavelmente funcionam.** O mecanismo de vídeo quase não muda dentro de uma mesma geração do produto: se, por exemplo, o Nuendo 12.0.52 foi verificado, o 12.0.20 ou o 12.0.70 muito provavelmente também funcionarão. O próprio instalador verifica o mecanismo de vídeo de cada instalação: a compatível é oferecida para instalação, a incompatível não aparece na lista e nada é alterado. Isso não é uma garantia. Edições mais antigas com a mesma geração de mecanismo (por exemplo, Nuendo 7–9, Cubase 8.5 / 9.5) também podem ser compatíveis, mas não foram testadas.

**Vai funcionar depois de uma atualização do Cubase ou do Nuendo?** O FrameBridge é verificado com as versões listadas acima, até o Cubase 16.0.5 e o Nuendo 15.0.30. Novas versões principais podem alterar o mecanismo de vídeo; usar o FrameBridge com elas é por sua conta e risco. Para atualizar o Cubase ou o Nuendo, execute primeiro o UNINSTALL.cmd, instale a atualização e depois execute o INSTALL.cmd novamente. Se o FrameBridge parar de funcionar após uma atualização, escreva para o suporte.

</details>

## Mídias verificadas

**Contêineres:** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV e outros.

**Codecs de vídeo:** H.264 (incl. High10, B-frames, VFR), HEVC Main / Main10, AV1 8/10 bits, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 e outros.

**Legendas externas:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP e VobSub (o par .idx + .sub). Coloque o arquivo de legenda ao lado do vídeo, com o mesmo nome (por exemplo, `film.mkv` + `film.srt`).

Testado com material real e pesado: um remux de Blu-ray 4K HDR (HEVC, ~25 GB) em um projeto com 8 pistas de diálogo e muitos plugins e um episódio 4K HEVC de streaming (~7 GB), com reprodução e navegação fluidas.

<details>
<summary>Todos os contêineres e codecs verificados</summary>

**Contêineres:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM e OGV.

**Codecs de vídeo e perfis:** APV, AV1 8 bits, AV1 10 bits, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10 bits, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8 bits, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX e Xvid.

O reconhecimento de texto de PGS/SUP e VobSub usa os idiomas de OCR instalados no Windows (geralmente o idioma do sistema e o inglês; outros podem ser adicionados nas configurações do Windows). Sem o idioma necessário, são exibidas as imagens originais das legendas.

</details>

<details>
<summary>Provavelmente também funcionam</summary>

**Codecs de vídeo:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Decodificados pelo mesmo FFmpeg 9.0.2 incluído no FrameBridge. Normalmente abrem e podem muito bem ser reproduzidos com fluidez, mas apenas os formatos acima são verificados quanto à reprodução e navegação fluidas. O reembolso de 14 dias se aplica.

</details>

## Desempenho

A fluidez da reprodução depende da mídia e do hardware. Para o trabalho do dia a dia, conte com uma CPU intermediária atual e uma placa de vídeo que decodifique por hardware os formatos que você usa (HEVC, AV1). O FrameBridge também instala e roda sem travar em um PC muito antigo — em um PC de teste de 2012 (Intel Core i5-2550K + GeForce GTX 660) —, mas essa não é uma máquina para trabalhar: o vídeo 4K de 10 bits pesado (HEVC Main10, H.264 High10) engasga ali, porque uma GPU dessa geração não decodifica esses formatos por hardware. Em PCs fracos, ajuda desativar as miniaturas de vídeo na DAW e usar cópias de trabalho H.264 de 8 bits até 1080p. Os problemas conhecidos estão listados em [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt).

## Instalação e restauração

- Feche o Cubase e o Nuendo e execute o `INSTALL.cmd`. As instalações registradas são encontradas automaticamente; caso contrário, escolha o EXE ou a pasta do programa.
- O `UNINSTALL.cmd` restaura os arquivos originais do programa a partir de um backup verificado (byte a byte). Projetos, preferências e plug-ins não são afetados.
- Nenhum arquivo da Steinberg é distribuído no pacote; o instalador trabalha apenas com os arquivos da sua própria instalação.

As instruções completas estão em [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) e [README.txt](../docs/README.txt) (em inglês).

## Verificação do arquivo da versão

- Versão atual: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256: `714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [Relatório do VirusTotal](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) (em 14 de novembro de 2026): 0/61 — nenhum mecanismo detecta nada, incluindo Microsoft Defender, ESET, Malwarebytes, Sophos e Symantec.
- O que o instalador altera no seu PC e como verificar você mesmo: [SECURITY.md](../SECURITY.md)

## Quem desenvolve o FrameBridge

Sou o stark622, engenheiro de dublagem e locução e desenvolvedor do FrameBridge. Eu o criei para o meu próprio trabalho: os vídeos dos clientes costumam chegar em formatos que o Cubase não abre, com as legendas em arquivos separados, e converter cada entrega ou gravar as legendas na imagem custa tempo. Dúvidas e opiniões chegam direto para mim: stark622@ukr.net.

Também em: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Plataforma e status

- Windows x64
- FrameBridge Beta 2 · lançado em 14 de novembro de 2026
- Software comercial e proprietário

**[Comprar o FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Site: [framebridge.cc](https://framebridge.cc/pt-br/)

**Preço:** pague quanto quiser — mínimo de 29 USD, sugeridos 59 USD. Compra única.

Escreva para stark622@ukr.net em até 14 dias após a compra. Se o FrameBridge não instalar ou não funcionar com o seu Cubase ou Nuendo, você recebe o reembolso integral.

**Suporte:** stark622@ukr.net

**Informações legais (em inglês; prevalece a versão em inglês):**

- [Política de Privacidade](../docs/PRIVACY_POLICY.md)
- [Termos de Serviço](../docs/TERMS_OF_SERVICE.md)
- [Licença de usuário final](../docs/END_USER_LICENSE.txt)

## Licenciamento

O FrameBridge é um software comercial. Os termos do produto proprietário estão em [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt). As informações de licenciamento de terceiros, incluindo os termos aplicáveis às bibliotecas compartilhadas do FFmpeg incluídas (LGPL 2.1 ou posterior, código-fonte incluído no pacote), estão em [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

O FrameBridge é um software independente e não é afiliado, patrocinado nem endossado pela Steinberg. Cubase e Nuendo são marcas comerciais de seu respectivo proprietário.
