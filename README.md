# FrameBridge — Native Video & External Subtitles for Cubase & Nuendo

**English** · [Deutsch](translations/README.de.md) · [Français](translations/README.fr.md) · [Español](translations/README.es.md) · [Italiano](translations/README.it.md) · [Português (Brasil)](translations/README.pt-br.md) · [Polski](translations/README.pl.md) · [Türkçe](translations/README.tr.md) · [Русский](translations/README.ru.md) · [Українська](translations/README.uk.md) · [日本語](translations/README.ja.md) · [简体中文](translations/README.zh.md) · [한국어](translations/README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#platform-and-status) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#supported-cubase-and-nuendo-versions) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#supported-cubase-and-nuendo-versions) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#platform-and-status)

[![FrameBridge running on the native Nuendo video track — click to watch the demo](media/poster.png)](https://youtu.be/qJqN0ybHV8E)

Above is a short video guide in Cubase 11 Pro: an MKV with its SRT subtitle file, and an HDR MKV shown in SDR.
[Extended version on YouTube](https://youtu.be/NjNHtkc8-OE): one uncut take with live imports of many video formats and subtitle types.

**[Website](https://framebridge.cc)** · **[Buy](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

FrameBridge extends the native video engine of Windows x64 Cubase and Nuendo. Modern video formats open on the native video track and play in the built-in Video Player, and external subtitle files are shown over the picture automatically — without transcoding the media and without burning subtitles into the video.

**Cubase or Nuendo says “Invalid or not supported file!”?** That is the message FrameBridge is made for. Cubase and Nuendo show it when their built-in video engine cannot handle the file’s container, codec or frame rate — MKV, WebM, MXF, HEVC from phones such as the iPhone, video with a variable frame rate. FrameBridge reads such files with its own decoder. If your file still does not open, you get a full refund within 14 days.

## Key benefits

- **Modern formats on the native video track** — MKV, WebM, MXF, HEVC, AV1, ProRes 4444 and many more play in the built-in Video Player, no transcoding.
- **External subtitles over the picture** — put `film.srt` next to `film.mkv`; edits to the subtitle file show up live. The video file is never changed.
- **Built for dubbing** — a second video window for the sound engineer, subtitles straight from dubbing scripts with roles.
- **Not a plugin** — no plug-in slot, nothing to load in each project, no MTC sync, no codec pack. Exact rollback with UNINSTALL.cmd.

<details>
<summary>All features</summary>

- Works with the native Cubase/Nuendo video track and built-in Video Player.
- Extended container and codec support through packaged FFmpeg libraries (LGPL).
- External subtitle sidecars are loaded automatically and shown over the picture; edits to the subtitle file are picked up live — even a file added or renamed after import, no re-import needed. The video file itself is never changed.
- Every subtitle format is drawn in one clean look (the SRT look). Blu-ray PGS/SUP and DVD VobSub pictures are read as text with the Windows built-in OCR.
- Second video window for dubbing: a live copy of the Cubase/Nuendo Video Player for the sound engineer, while the actor watches the player in full screen on another screen.
- Subtitles straight from dubbing scripts and dialogue lists with roles: PDF, DOCX, TXT, XLSX, CSV.
- No separate video player, codec pack or LAV Filters required.
- Not a VST plugin: no plug-in slot, nothing to load in each project, no MTC sync — FrameBridge extends the native video engine itself.
- Audio comes in with the standard “Extract Audio From Video” — also from MKV and other files Cubase and Nuendo can't open on their own.
- Visually verified HDR-to-SDR conversion for supported HDR media. No quantitative color-accuracy claim is made.

</details>

## Second video window for dubbing

Two screens: the Cubase/Nuendo Video Player in full screen for the actor, the FrameBridge copy for you.

![Drag the Video Player to the actor's screen, double-click for full screen, click the FrameBridge tray icon: the copy opens on your screen](media/dub-window.gif)

## Supported Cubase and Nuendo versions

| | Verified builds |
|---|---|
| **Cubase** | 8.0.10 and 9.0.0 (LE AI Elements) · 10.5.0.68 · 11 · 12.0.10 / 12.0.51 / 12.0.52 · 13.0.21 · 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40 · 15.0.5 / 15.0.21 / 15.0.30 · 16.0.5 |
| **Nuendo** | 10 · 12.0.52 · 13.0.10 / 13.0.50 · 14.0.32 / 14.0.40 · 15.0.21 / 15.0.30 |

Cubase Pro, Artist, Elements, AI and LE editions are found the same way. Thumbnails on the video track are shown in all verified builds. Full matrix: [COMPATIBILITY.txt](docs/COMPATIBILITY.txt).

<details>
<summary>Other builds and updates</summary>

**Nearby builds very likely work.** The video engine barely changes within one product generation, so if, for example, Nuendo 12.0.52 is verified, 12.0.20 or 12.0.70 will very likely work too. The installer checks the video engine of each installation itself: a compatible one is offered for installation, an incompatible one is not listed and nothing is changed. This is not a guarantee. Older editions with the same engine generation (for example Nuendo 7–9, Cubase 8.5 / 9.5) may also qualify but have not been tested.

**Will it work after a Cubase or Nuendo update?** FrameBridge is verified with the builds listed above, up to Cubase 16.0.5 and Nuendo 15.0.30. New major versions may change the video engine; using FrameBridge with them is at your own risk. To update Cubase or Nuendo, run UNINSTALL.cmd first, then install the update, then run INSTALL.cmd again. If FrameBridge stops working after an update, write to support.

</details>

## Verified media support

**Containers:** MKV / WebM, MOV / MP4, MXF, M2TS / MTS / TS, AVI, MPEG-PS / VOB, WMV and more.

**Video codecs:** H.264 (incl. High10, B-frames, VFR), HEVC Main / Main10, AV1 8/10-bit, VP9, ProRes 422 HQ / 4444 / LT / Proxy, DNxHD / DNxHR, CineForm, XDCAM, XAVC / AVC-Intra, MPEG-2, APV, FFV1 and more.

**External subtitles:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP, and VobSub (the .idx + .sub pair). Put the subtitle file next to the video with the same name (for example `film.mkv` + `film.srt`).

Tested on heavy real material: a 4K HDR Blu-ray remux (HEVC, ~25 GB) in a project with 8 dialogue tracks and many plug-ins, and a 4K HEVC streaming episode (~7 GB) — smooth playback and seeking.

<details>
<summary>All verified containers and codecs</summary>

**Containers:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOD, EVO, DV, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM, and OGV.

**Video codecs and profiles:** APV, AV1 8-bit, AV1 10-bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main / Main10, HuffYUV, HAP / HAP Q, MPEG-1, DV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10-bit, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8-bit, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX, and Xvid.

PGS/SUP and VobSub text recognition uses the OCR languages installed in Windows (usually the system language and English; more can be added in Windows settings). Without the needed language the original subtitle pictures are shown.

</details>

<details>
<summary>Likely to play too</summary>

**Video codecs:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Decoded by the same FFmpeg 9.0.2 inside FrameBridge. These usually open and may well play smoothly, but only the formats above are verified for smooth playback and seeking. The 14-day refund applies.

</details>

## Performance

Playback speed depends on the media and the hardware. For everyday work, plan for a current mid-range CPU and a graphics card that decodes the formats you use (HEVC, AV1) in hardware. FrameBridge also installs and runs on a very old PC without crashing — on a 2012 test PC (Intel Core i5-2550K + GeForce GTX 660) — but that is not a machine to work on: heavy 4K 10-bit video (HEVC Main10, H.264 High10) stutters there, because a GPU of that generation cannot decode these formats in hardware. On weak PCs, switching off video thumbnails in the DAW and using H.264 8-bit working copies up to 1080p helps. Known issues are listed in [READ_ME_FIRST.txt](docs/READ_ME_FIRST.txt).

## Installation and rollback

- Close Cubase and Nuendo and run `INSTALL.cmd`. Registered installations are found automatically; otherwise pick the program's EXE or folder.
- `UNINSTALL.cmd` restores the original program files from a verified backup (byte for byte). Projects, preferences and plug-ins are not touched.
- No Steinberg file is shipped in the package; the installer works only with the files of your own installation.

Full instructions are in [READ_ME_FIRST.txt](docs/READ_ME_FIRST.txt) and [README.txt](docs/README.txt).

## Release file check

- Current release: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256: `714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [VirusTotal report](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) (as of 14 November 2026): 0/61 — no engine reports a detection, including Microsoft Defender, ESET, Malwarebytes, Sophos and Symantec.
- What the installer changes on your PC and how to check it yourself: [SECURITY.md](SECURITY.md)

## Who makes FrameBridge

I'm stark622, a dubbing and voice-over engineer and the developer of FrameBridge. I made it for my own work: client videos often arrive in formats Cubase does not open, with subtitles as separate files, and converting every delivery or burning subtitles into the picture costs time. Questions and feedback come straight to me: stark622@ukr.net.

Also on: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Platform and status

- Windows x64
- FrameBridge Beta 2 · released 14 November 2026
- Commercial, proprietary software

**[Buy FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Website: [framebridge.cc](https://framebridge.cc)

**Pricing:** Pay what you want — 29 USD minimum,  
59 USD suggested. One-time purchase.

Write to stark622@ukr.net within 14 days of purchase. If FrameBridge does not install or work with your Cubase or Nuendo, you get a full refund.

**Support:** stark622@ukr.net

**Legal:**

- [Privacy Policy](docs/PRIVACY_POLICY.md)
- [Terms of Service](docs/TERMS_OF_SERVICE.md)
- [End-User License](docs/END_USER_LICENSE.txt)

## Licensing

FrameBridge is commercial software. The proprietary product terms are provided in [END_USER_LICENSE.txt](docs/END_USER_LICENSE.txt). Third-party licensing details, including the terms applicable to the packaged FFmpeg shared libraries (LGPL 2.1 or later, source included in the package), are provided in [LICENSE_AND_NOTICE.txt](LICENSE_AND_NOTICE.txt).

FrameBridge is independent software and is not affiliated with, sponsored by, or endorsed by Steinberg. Cubase and Nuendo are trademarks of their respective owner.
