# FrameBridge — 适用于 Cubase 和 Nuendo 的原生视频与外挂字幕

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · [日本語](README.ja.md) · **简体中文** · [한국어](README.ko.md)

[![FrameBridge 在 Nuendo 原生视频轨上运行 — 点击观看演示](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**网站：[framebridge.cc](https://framebridge.cc/zh/)** · [在 YouTube 上观看 FrameBridge 演示](https://youtu.be/qJqN0ybHV8E)

FrameBridge 扩展了 Windows x64 版 Cubase 和 Nuendo 的原生视频引擎。现代视频格式可直接在原生视频轨上打开，并在内置视频播放器中播放；外挂字幕文件会自动显示在画面上——无需转码素材，也无需将字幕压制进视频。

## 主要优势

- 使用 Cubase/Nuendo 原生视频轨和内置视频播放器。
- 通过随附的 FFmpeg 库（LGPL）扩展对封装格式和编解码器的支持。
- 外挂字幕文件自动加载并显示在画面上；修改字幕文件后会即时生效。视频文件本身永远不会被修改。
- 所有字幕格式均以统一样式（与 SRT 相同）显示。蓝光 PGS/SUP 和 DVD VobSub 图形字幕通过 Windows 内置 OCR 识别为文本。
- 无需单独的视频播放器、解码器包或 LAV Filters。
- 不是 VST 插件：无需在工程中加载任何东西，FrameBridge 直接扩展原生视频引擎。
- 对受支持的 HDR 素材进行 HDR 到 SDR 的转换，效果经过目视验证。不对色彩准确度作任何量化声明。

## 支持的 Cubase 和 Nuendo 版本

**已验证的版本**

- **Cubase：** 8.0.10 和 9.0.0（LE AI Elements）、10.5.0.68、11、12.0.10 / 12.0.51 / 12.0.52、13.0.21、14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40、15.0.5 / 15.0.21 / 15.0.30
- **Nuendo：** 10、12.0.52、13.0.10 / 13.0.50、14.0.32 / 14.0.40、15.0.21 / 15.0.30

**相近版本很可能同样可以使用。** 同一代产品中的视频引擎几乎不变：例如 Nuendo 12.0.52 已经过验证，那么 12.0.20 或 12.0.70 很可能同样可以使用。安装程序会自行检查每个安装的视频引擎：兼容的会列出供安装，不兼容的不会出现在列表中，也不会做任何更改。这并不构成保证。具有相同引擎世代的旧版本（例如 Nuendo 7–9、Cubase 8.5 / 9.5）也可能适用，但尚未测试。

在 Cubase 8 和 9 中，FrameBridge 还会提供所打开文件（例如 MKV）的音频，因此“从视频中提取音频”可以像在新版本中一样使用。

Cubase Pro、Artist、Elements、AI 和 LE 版本均以相同方式识别。完整列表请参阅 [COMPATIBILITY.txt](../COMPATIBILITY.txt)（英文）。

**升级 Cubase 或 Nuendo 后还能用吗？** FrameBridge 已在上方列出的版本（最高至 Cubase 和 Nuendo 15.0.30）上验证，设计为在整个 15 版本系列中工作：安装程序会自行检查每个安装的视频引擎。如果在 15 版本内升级后 FrameBridge 不再工作，请重新运行 INSTALL.cmd——升级可能替换了程序文件。新的主版本（例如 Cubase 或 Nuendo 16）可能会更改视频引擎，不在本测试版的支持范围内。

## 已验证的媒体

**封装格式：** MKV / WebM、FLV、M2TS / MTS / TS、MOV / MP4、AVI、MXF、MPEG-PS / VOB 和 OGV。

**视频编解码器和配置：** APV、AV1 8 位、AV1 10 位、CineForm、DNxHR、FFV1、H.264 Main / High10 / B 帧 / VFR、HEVC Main10、HuffYUV、MPEG-2、ProRes 422 HQ、ProRes 4444、Theora、UtVideo、VP8、VP9 10 位和 Xvid。

**外挂字幕：** SRT、ASS、SSA、VTT、SMI / SAMI、MicroDVD、TTML、DFXP、IMSC、EBU STL、SCC、DCP XML、PGS / SUP 和 VobSub（.idx + .sub 一对文件）。将字幕文件以相同的文件名放在视频旁边（例如 `film.mkv` + `film.srt`）。

PGS/SUP 和 VobSub 的文字识别使用 Windows 中已安装的 OCR 语言（通常为系统语言和英语；可在 Windows 设置中添加更多语言）。如果缺少所需语言，则显示原始字幕图像。

本测试版有意不支持 VVC/H.266。

## 安装与还原

- 关闭 Cubase 和 Nuendo，然后运行 `INSTALL.cmd`。已注册的安装会被自动找到；否则请选择程序的 EXE 文件或文件夹。
- `UNINSTALL.cmd` 会从经过验证的备份中恢复程序的原始文件（逐字节）。工程、偏好设置和插件均不受影响。
- 安装包中没有任何 Steinberg 文件；安装程序只处理您自己安装中的文件。

完整说明请参阅 [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) 和 [README.txt](../README.txt)（英文）。

## 发布文件校验

- 当前版本：`FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256：`c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [VirusTotal 报告](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection)（截至 2026 年 10 月 31 日）：1/63——仅有一个引擎（MaxSecure）给出一条通用启发式检测；Microsoft Defender、Kaspersky、BitDefender、ESET、Malwarebytes、Sophos、Symantec 以及其他完成扫描的引擎均未检出。

## 性能

播放流畅度取决于素材和硬件。高负载的 4K 10 位视频（HEVC Main10、H.264 High10）需要性能足够的 CPU/GPU：在一台较旧的测试电脑（Intel Core i5-2550K + GeForce GTX 660）上播放明显卡顿，因为这一代显卡无法对这些格式进行硬件解码。在性能较弱的电脑上，建议在 DAW 中关闭视频缩略图，并使用 1080p 及以下的 H.264 8 位工作副本。已知问题列于 [READ_ME_FIRST.txt](../READ_ME_FIRST.txt)。

## FrameBridge 的开发者

我是 Roman Aksonov，配音与旁白录音工程师，也是 FrameBridge 的开发者。我为自己的工作开发了它：客户发来的视频经常是 Cubase 打不开的格式，字幕又是单独的文件；每次交付都要转码，或把字幕压进画面，非常耗时。问题和反馈会直接发到我这里：stark622@ukr.net。

另见： [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## 平台与状态

- Windows x64
- FrameBridge Beta 1 · 2026 年 10 月 29 日发布
- 商业专有软件

**[购买 FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · 网站：[framebridge.cc](https://framebridge.cc/zh/)

**价格：** 自定价格——最低 29 USD，建议 59 USD。一次性购买。

请在购买后 14 天内发邮件至 stark622@ukr.net。如果 FrameBridge 无法在您的 Cubase 或 Nuendo 上安装或运行，将为您全额退款。

**支持：** stark622@ukr.net

**法律文件（英文，以英文版本为准）：**

- [隐私政策](../PRIVACY_POLICY.md)
- [服务条款](../TERMS_OF_SERVICE.md)
- [最终用户许可](../END_USER_LICENSE.txt)

## 许可

FrameBridge 是商业软件。产品的使用条款见 [END_USER_LICENSE.txt](../END_USER_LICENSE.txt)。第三方许可信息（包括随附的 FFmpeg 共享库所适用的条款：LGPL 2.1 或更高版本，源代码已包含在安装包中）见 [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt)。

FrameBridge 是独立软件，与 Steinberg 无关联，也未获得 Steinberg 的赞助或认可。Cubase 和 Nuendo 是其各自所有者的商标。
