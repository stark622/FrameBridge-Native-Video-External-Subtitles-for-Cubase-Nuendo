# FrameBridge — 适用于 Cubase 和 Nuendo 的原生视频与外挂字幕

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · **简体中文** · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#平台与状态) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#支持的-cubase-和-nuendo-版本) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#支持的-cubase-和-nuendo-版本) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#平台与状态)

[![FrameBridge 在 Nuendo 原生视频轨上运行 — 点击观看演示](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

上方是 Cubase 11 Pro 中的简短视频指南：带 SRT 字幕文件的 MKV，以及以 SDR 显示的 HDR MKV。[YouTube 上的加长版](https://youtu.be/NjNHtkc8-OE)：一镜到底、无剪辑，现场导入多种视频格式和字幕类型。

**[网站](https://framebridge.cc/zh/)** · **[购买](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

FrameBridge 扩展了 Windows x64 版 Cubase 和 Nuendo 的原生视频引擎。现代视频格式可直接在原生视频轨上打开，并在内置视频播放器中播放；外挂字幕文件会自动显示在画面上——无需转码素材，也无需将字幕压制进视频。

**Cubase 或 Nuendo 提示“无效或不支持的文件！”？** FrameBridge 正是为这条提示而做的。当内置视频引擎无法处理文件的容器、编码或帧率时，Cubase 和 Nuendo 就会显示这条提示，例如 MKV、WebM、MXF、iPhone 等手机拍摄的 HEVC、可变帧率的视频。FrameBridge 用自己的解码器读取这类文件。如果您的文件仍然无法打开，可在 14 天内获得全额退款。

## 主要优势

- **原生视频轨上的现代格式** — MKV、WebM、MXF、HEVC、AV1、ProRes 4444 等众多格式在内置视频播放器中直接播放，无需转码。
- **外挂字幕显示在画面上** — 把 `film.srt` 放在 `film.mkv` 旁边即可；修改字幕文件后即时生效。视频文件永远不会被修改。
- **为配音而做** — 为录音师提供第二个视频窗口，直接从带角色的配音台本生成字幕。
- **不是插件** — 不占插件槽位，无需在每个工程中加载，无需 MTC 同步，无需解码器包。可用 UNINSTALL.cmd 精确还原。

<details>
<summary>全部功能</summary>

- 使用 Cubase/Nuendo 原生视频轨和内置视频播放器。
- 通过随附的 FFmpeg 库（LGPL）扩展对封装格式和编解码器的支持。
- 外挂字幕文件自动加载并显示在画面上；修改字幕文件后会即时生效；即使字幕文件是在导入之后才添加或改名的，也无需重新导入。视频文件本身永远不会被修改。
- 所有字幕格式均以统一样式（与 SRT 相同）显示。蓝光 PGS/SUP 和 DVD VobSub 图形字幕通过 Windows 内置 OCR 识别为文本。
- 配音用的第二个视频窗口：演员在另一块屏幕上全屏观看视频播放器时，为录音师显示 Cubase/Nuendo 视频播放器的实时副本。
- 直接从带角色的配音台本和对白表生成字幕：PDF、DOCX、TXT、XLSX、CSV。
- 无需单独的视频播放器、解码器包或 LAV Filters。
- 不是 VST 插件：不占插件槽位，无需在每个工程中加载任何东西，也不需要 MTC 同步，FrameBridge 直接扩展原生视频引擎。
- 音频通过标准的“从视频中提取音频”导入——包括 Cubase 和 Nuendo 自身无法打开的 MKV 等文件。
- 对受支持的 HDR 素材进行 HDR 到 SDR 的转换，效果经过目视验证。不对色彩准确度作任何量化声明。

</details>

## 配音用的第二个视频窗口

两块屏幕：演员看全屏的 Cubase/Nuendo 视频播放器，您看 FrameBridge 副本。

![把视频播放器拖到演员的屏幕上，双击切换全屏，再点击任务栏通知区域中的 FrameBridge 图标：副本会在您的屏幕上打开](../media/dub-window.gif)

## 支持的 Cubase 和 Nuendo 版本

| | 已验证的版本 |
|---|---|
| **Cubase** | 8.0.10 和 9.0.0（LE AI Elements）、10.5.0.68、11、12.0.10 / 12.0.51 / 12.0.52、13.0.21、14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40、15.0.5 / 15.0.21 / 15.0.30、16.0.5 |
| **Nuendo** | 10、12.0.52、13.0.10 / 13.0.50、14.0.32 / 14.0.40、15.0.21 / 15.0.30 |

Cubase Pro、Artist、Elements、AI 和 LE 版本均以相同方式识别。完整列表请参阅 [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt)（英文）。 所有已验证版本的视频轨上都会显示缩略图。

<details>
<summary>其他版本与更新</summary>

**相近版本很可能同样可以使用。** 同一代产品中的视频引擎几乎不变：例如 Nuendo 12.0.52 已经过验证，那么 12.0.20 或 12.0.70 很可能同样可以使用。安装程序会自行检查每个安装的视频引擎：兼容的会列出供安装，不兼容的不会出现在列表中，也不会做任何更改。这并不构成保证。具有相同引擎世代的旧版本（例如 Nuendo 7–9、Cubase 8.5 / 9.5）也可能适用，但尚未测试。

**升级 Cubase 或 Nuendo 后还能用吗？** FrameBridge 已在上方列出的版本（最高至 Cubase 16.0.5 和 Nuendo 15.0.30）上验证。新的主版本可能会更改视频引擎，与其搭配使用 FrameBridge 风险自负。升级 Cubase 或 Nuendo 时，请先运行 UNINSTALL.cmd，再安装升级，然后重新运行 INSTALL.cmd。如果升级后 FrameBridge 不再工作，请联系支持。

</details>

## 已验证的媒体

**封装格式：** MKV / WebM、MOV / MP4、MXF、M2TS / MTS / TS、AVI、MPEG-PS / VOB、WMV 等。

**视频编解码器：** H.264（含 High10、B 帧、VFR）、HEVC Main / Main10、AV1 8/10 位、VP9、ProRes 422 HQ / 4444 / LT / Proxy、DNxHD / DNxHR、CineForm、XDCAM、XAVC / AVC-Intra、MPEG-2、APV、FFV1 等。

**外挂字幕：** SRT、ASS、SSA、VTT、SMI / SAMI、MicroDVD、TTML、DFXP、IMSC、EBU STL、SCC、DCP XML、PGS / SUP 和 VobSub（.idx + .sub 一对文件）。将字幕文件以相同的文件名放在视频旁边（例如 `film.mkv` + `film.srt`）。

已在高负载的真实素材上测试：在含 8 条对白轨和大量插件的工程中播放 4K HDR 蓝光原盘重封装（HEVC，约 25 GB）以及 4K HEVC 流媒体剧集（约 7 GB）——播放和定位都很流畅。

<details>
<summary>全部已验证的封装格式和编解码器</summary>

**封装格式：** MKV / WebM、MK3D、FLV、F4V、M2TS / MTS / TS、TOD、MOD、EVO、DV、MOV / MP4、M4V、AVI、DivX、MXF、MPEG-PS / VOB、WMV / ASF、WTV / DVR-MS、3GP / 3G2、RM / RMVB、OGM 和 OGV。

**视频编解码器和配置：** APV、AV1 8 位、AV1 10 位、CineForm、DNxHR、FFV1、H.264 Main / High10 / B 帧 / VFR、HEVC Main / Main10、HuffYUV、HAP / HAP Q、MPEG-1、DV、MPEG-2、ProRes 422 HQ、ProRes 4444、ProRes Proxy、ProRes LT、Theora、UtVideo、VP8、VP9 10 位、WMV 7 / 8、DNxHD、XDCAM、XAVC / AVC-Intra、DVCPRO HD、DVCPRO50、Avid 1:1、SpeedHQ、Uncompressed v210、QuickTime Animation、PNG、TIFF、MagicYUV、FFVHuff、DivX / MS MPEG-4、H.263、VP9 8 位、Sorenson Spark、RealVideo、Cinepak、Sorenson Video、Microsoft Video 1、Canopus HQ、Canopus HQX和 Xvid。

PGS/SUP 和 VobSub 的文字识别使用 Windows 中已安装的 OCR 语言（通常为系统语言和英语；可在 Windows 设置中添加更多语言）。如果缺少所需语言，则显示原始字幕图像。

</details>

<details>
<summary>这些格式很可能也能播放</summary>

**视频编解码器:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo、VVC / H.266

由 FrameBridge 内置的同一个 FFmpeg 9.0.2 解码。这些格式通常可以打开，也很可能流畅播放，但只有上面列出的格式经过了流畅播放和定位的验证。适用 14 天退款。

</details>

## 性能

播放流畅度取决于素材和硬件。日常工作建议使用当代中端 CPU，以及能对您所用格式（HEVC、AV1）进行硬件解码的显卡。FrameBridge 在非常旧的电脑上也能安装并运行而不崩溃（2012 年的测试电脑：Intel Core i5-2550K + GeForce GTX 660），但那样的机器并不适合工作：高负载的 4K 10 位视频（HEVC Main10、H.264 High10）在上面会卡顿，因为这一代显卡无法对这些格式进行硬件解码。在性能较弱的电脑上，在 DAW 中关闭视频缩略图并使用 1080p 及以下的 H.264 8 位工作副本会有帮助。已知问题列于 [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt)。

## 安装与还原

- 关闭 Cubase 和 Nuendo，然后运行 `INSTALL.cmd`。已注册的安装会被自动找到；否则请选择程序的 EXE 文件或文件夹。
- `UNINSTALL.cmd` 会从经过验证的备份中恢复程序的原始文件（逐字节）。工程、偏好设置和插件均不受影响。
- 安装包中没有任何 Steinberg 文件；安装程序只处理您自己安装中的文件。

完整说明请参阅 [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) 和 [README.txt](../docs/README.txt)（英文）。

## 发布文件校验

- 当前版本：`FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256：`714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [VirusTotal 报告](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection)（截至 2026 年 11 月 14 日）：0/61——包括 Microsoft Defender、ESET、Malwarebytes、Sophos、Symantec 在内，没有任何引擎检出。
- 安装程序会在您的电脑上更改什么，以及如何自行核实: [SECURITY.md](../SECURITY.md)

## FrameBridge 的开发者

我是 stark622，配音与旁白录音工程师，也是 FrameBridge 的开发者。我为自己的工作开发了它：客户发来的视频经常是 Cubase 打不开的格式，字幕又是单独的文件；每次交付都要转码，或把字幕压进画面，非常耗时。问题和反馈会直接发到我这里：stark622@ukr.net。

另见： [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## 平台与状态

- Windows x64
- FrameBridge Beta 2 · 2026 年 11 月 14 日发布
- 商业专有软件

**[购买 FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · 网站：[framebridge.cc](https://framebridge.cc/zh/)

**价格：** 自定价格——最低 29 USD，建议 59 USD。一次性购买。

请在购买后 14 天内发邮件至 stark622@ukr.net。如果 FrameBridge 无法在您的 Cubase 或 Nuendo 上安装或运行，将为您全额退款。

**支持：** stark622@ukr.net

**法律文件（英文，以英文版本为准）：**

- [隐私政策](../docs/PRIVACY_POLICY.md)
- [服务条款](../docs/TERMS_OF_SERVICE.md)
- [最终用户许可](../docs/END_USER_LICENSE.txt)

## 许可

FrameBridge 是商业软件。产品的使用条款见 [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt)。第三方许可信息（包括随附的 FFmpeg 共享库所适用的条款：LGPL 2.1 或更高版本，源代码已包含在安装包中）见 [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt)。

FrameBridge 是独立软件，与 Steinberg 无关联，也未获得 Steinberg 的赞助或认可。Cubase 和 Nuendo 是其各自所有者的商标。
