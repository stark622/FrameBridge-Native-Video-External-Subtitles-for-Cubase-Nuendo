# FrameBridge — vídeo nativo e legendas externas para Cubase e Nuendo

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · **Português (Brasil)** · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![FrameBridge na pista de vídeo nativa do Nuendo — clique para ver a demonstração](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Site: [framebridge.cc](https://framebridge.cc/pt-br/)** · [Assista à demonstração do FrameBridge no YouTube](https://youtu.be/qJqN0ybHV8E)

O FrameBridge amplia o mecanismo de vídeo nativo do Cubase e do Nuendo no Windows x64. Formatos de vídeo modernos abrem na pista de vídeo nativa e são reproduzidos no Player de Vídeo integrado, e arquivos de legenda externos são exibidos automaticamente sobre a imagem — sem transcodificar a mídia e sem gravar as legendas no vídeo.

## Principais vantagens

- Funciona com a pista de vídeo nativa e o Player de Vídeo integrado do Cubase/Nuendo.
- Suporte ampliado a contêineres e codecs por meio das bibliotecas FFmpeg incluídas (LGPL).
- Arquivos de legenda externos são carregados automaticamente e exibidos sobre a imagem; alterações no arquivo de legenda são aplicadas na hora. O arquivo de vídeo nunca é alterado.
- Todos os formatos de legenda são exibidos com o mesmo visual (o do SRT). As imagens PGS/SUP de Blu-ray e VobSub de DVD são lidas como texto pelo OCR integrado do Windows.
- Não é preciso player de vídeo separado, pacote de codecs nem LAV Filters.
- Não é um plugin VST: não há nada para carregar no projeto — o FrameBridge amplia o próprio mecanismo de vídeo nativo.
- Conversão de HDR para SDR verificada visualmente para mídias HDR compatíveis. Nenhuma medição quantitativa de precisão de cor é declarada.

## Versões do Cubase e do Nuendo compatíveis

**Versões verificadas**

- **Cubase:** 8.0.10 e 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo:** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Versões próximas muito provavelmente funcionam.** O mecanismo de vídeo quase não muda dentro de uma mesma geração do produto: se, por exemplo, o Nuendo 12.0.52 foi verificado, o 12.0.20 ou o 12.0.70 muito provavelmente também funcionarão. O próprio instalador verifica o mecanismo de vídeo de cada instalação: a compatível é oferecida para instalação, a incompatível não aparece na lista e nada é alterado. Isso não é uma garantia. Edições mais antigas com a mesma geração de mecanismo (por exemplo, Nuendo 7–9, Cubase 8.5 / 9.5) também podem ser compatíveis, mas não foram testadas.

No Cubase 8 e 9, o FrameBridge também fornece o áudio dos arquivos que abre (por exemplo, MKV), então "Extrair áudio do vídeo" funciona neles como nas versões mais novas.

As edições Cubase Pro, Artist, Elements, AI e LE são encontradas da mesma forma. A matriz completa está em [COMPATIBILITY.txt](../COMPATIBILITY.txt) (em inglês).

**Vai funcionar depois de uma atualização do Cubase ou do Nuendo?** O FrameBridge é verificado com as versões listadas acima, até o Cubase e o Nuendo 15.0.30, e foi feito para funcionar em toda a versão 15: o próprio instalador verifica o mecanismo de vídeo de cada instalação. Se o FrameBridge parar de funcionar após uma atualização dentro da versão 15, execute o INSTALL.cmd novamente — a atualização pode ter substituído o arquivo do programa. Uma nova versão principal, como o Cubase ou o Nuendo 16, pode alterar o mecanismo de vídeo e não é coberta por esta beta.

## Mídias verificadas

**Contêineres:** MKV / WebM, FLV, M2TS / MTS / TS, MOV / MP4, AVI, MXF, MPEG-PS / VOB e OGV.

**Codecs de vídeo e perfis:** APV, AV1 8 bits, AV1 10 bits, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, Theora, UtVideo, VP8, VP9 10 bits e Xvid.

**Legendas externas:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP e VobSub (o par .idx + .sub). Coloque o arquivo de legenda ao lado do vídeo, com o mesmo nome (por exemplo, `film.mkv` + `film.srt`).

O reconhecimento de texto de PGS/SUP e VobSub usa os idiomas de OCR instalados no Windows (geralmente o idioma do sistema e o inglês; outros podem ser adicionados nas configurações do Windows). Sem o idioma necessário, são exibidas as imagens originais das legendas.

O VVC/H.266 não é suportado nesta beta, por decisão intencional.

**O Cubase ou o Nuendo mostra “Arquivo inválido ou não suportado.” — o FrameBridge vai abrir o vídeo?** Muitas vezes, sim. O Cubase e o Nuendo mostram essa mensagem quando o mecanismo de vídeo nativo não consegue lidar com o contêiner, o codec ou a taxa de quadros do arquivo — por exemplo MKV, WebM, MXF, HEVC de celulares como o iPhone ou vídeo com taxa de quadros variável. O FrameBridge lê esses arquivos com seu próprio decodificador; os formatos verificados estão listados acima. Se o seu arquivo ainda assim não abrir, você recebe o reembolso integral em até 14 dias.

## Instalação e restauração

- Feche o Cubase e o Nuendo e execute o `INSTALL.cmd`. As instalações registradas são encontradas automaticamente; caso contrário, escolha o EXE ou a pasta do programa.
- O `UNINSTALL.cmd` restaura os arquivos originais do programa a partir de um backup verificado (byte a byte). Projetos, preferências e plug-ins não são afetados.
- Nenhum arquivo da Steinberg é distribuído no pacote; o instalador trabalha apenas com os arquivos da sua própria instalação.

As instruções completas estão em [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) e [README.txt](../README.txt) (em inglês).

## Verificação do arquivo da versão

- Versão atual: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256: `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [Relatório do VirusTotal](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (em 31 de outubro de 2026): 1/63 — uma única detecção heurística genérica de um só mecanismo (MaxSecure); Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec e os demais mecanismos que concluíram a análise não detectam nada.
- O que o instalador altera no seu PC e como verificar você mesmo: [SECURITY.md](../SECURITY.md)

## Desempenho

A fluidez da reprodução depende da mídia e do hardware. Vídeo 4K de 10 bits pesado (HEVC Main10, H.264 High10) exige CPU/GPU potentes: em um PC de teste antigo (Intel Core i5-2550K + GeForce GTX 660), ele travava bastante, porque uma GPU dessa geração não decodifica esses formatos por hardware. Em PCs mais fracos, recomenda-se desativar as miniaturas de vídeo na DAW e usar cópias de trabalho em H.264 de 8 bits até 1080p. Os problemas conhecidos estão listados em [READ_ME_FIRST.txt](../READ_ME_FIRST.txt).

## Quem desenvolve o FrameBridge

Sou Roman Aksonov, engenheiro de dublagem e locução e desenvolvedor do FrameBridge. Eu o criei para o meu próprio trabalho: os vídeos dos clientes costumam chegar em formatos que o Cubase não abre, com as legendas em arquivos separados, e converter cada entrega ou gravar as legendas na imagem custa tempo. Dúvidas e opiniões chegam direto para mim: stark622@ukr.net.

Também em: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Plataforma e status

- Windows x64
- FrameBridge Beta 1 · lançado em 29 de outubro de 2026
- Software comercial e proprietário

**[Comprar o FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Site: [framebridge.cc](https://framebridge.cc/pt-br/)

**Preço:** pague quanto quiser — mínimo de 29 USD, sugeridos 59 USD. Compra única.

Escreva para stark622@ukr.net em até 14 dias após a compra. Se o FrameBridge não instalar ou não funcionar com o seu Cubase ou Nuendo, você recebe o reembolso integral.

**Suporte:** stark622@ukr.net

**Informações legais (em inglês; prevalece a versão em inglês):**

- [Política de Privacidade](../PRIVACY_POLICY.md)
- [Termos de Serviço](../TERMS_OF_SERVICE.md)
- [Licença de usuário final](../END_USER_LICENSE.txt)

## Licenciamento

O FrameBridge é um software comercial. Os termos do produto proprietário estão em [END_USER_LICENSE.txt](../END_USER_LICENSE.txt). As informações de licenciamento de terceiros, incluindo os termos aplicáveis às bibliotecas compartilhadas do FFmpeg incluídas (LGPL 2.1 ou posterior, código-fonte incluído no pacote), estão em [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt).

O FrameBridge é um software independente e não é afiliado, patrocinado nem endossado pela Steinberg. Cubase e Nuendo são marcas comerciais de seu respectivo proprietário.
