# FrameBridge — Native Video & External Subtitles for Cubase & Nuendo

**English** · [Deutsch](translations/README.de.md) · [Français](translations/README.fr.md) · [Español](translations/README.es.md) · [Italiano](translations/README.it.md) · [Português (Brasil)](translations/README.pt-br.md) · [Polski](translations/README.pl.md) · [Türkçe](translations/README.tr.md) · [Русский](translations/README.ru.md) · [Українська](translations/README.uk.md) · [日本語](translations/README.ja.md) · [简体中文](translations/README.zh.md) · [한국어](translations/README.ko.md)

[![FrameBridge running on the native Nuendo video track — click to watch the demo](poster.png)](https://youtu.be/qJqN0ybHV8E)

**Website: [framebridge.cc](https://framebridge.cc)** · [Watch the FrameBridge demonstration on YouTube](https://youtu.be/qJqN0ybHV8E)

FrameBridge extends the native video engine of Windows x64 Cubase and Nuendo. Modern video formats open on the native video track and play in the built-in Video Player, and external subtitle files are shown over the picture automatically — without transcoding the media and without burning subtitles into the video.

## Key benefits

- Works with the native Cubase/Nuendo video track and built-in Video Player.
- Extended container and codec support through packaged FFmpeg libraries (LGPL).
- External subtitle sidecars are loaded automatically and shown over the picture; edits to the subtitle file are picked up live — even a file added or renamed after import, no re-import needed. The video file itself is never changed.
- Every subtitle format is drawn in one clean look (the SRT look). Blu-ray PGS/SUP and DVD VobSub pictures are read as text with the Windows built-in OCR.
- No separate video player, codec pack or LAV Filters required.
- Not a VST plugin: no plug-in slot, nothing to load in each project, no MTC sync — FrameBridge extends the native video engine itself.
- Audio comes in with the standard “Extract Audio From Video” — also from MKV and other files Cubase and Nuendo can't open on their own.
- Visually verified HDR-to-SDR conversion for supported HDR media. No quantitative color-accuracy claim is made.

## Supported Cubase and Nuendo versions

**Verified builds**

- **Cubase:** 8.0.10 and 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52, 13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
- **Nuendo:** 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

**Nearby builds very likely work.** The video engine barely changes within one product generation, so if, for example, Nuendo 12.0.52 is verified, 12.0.20 or 12.0.70 will very likely work too. The installer checks the video engine of each installation itself: a compatible one is offered for installation, an incompatible one is not listed and nothing is changed. This is not a guarantee. Older editions with the same engine generation (for example Nuendo 7–9, Cubase 8.5 / 9.5) may also qualify but have not been tested.

Thumbnails on the video track are shown in all verified builds except Cubase 10.5–11 and Nuendo 10, where the video plays without thumbnails.

Cubase Pro, Artist, Elements, AI and LE editions are found the same way. See [COMPATIBILITY.txt](COMPATIBILITY.txt) for the full matrix.

**Will it work after a Cubase or Nuendo update?** FrameBridge is verified with the builds listed above, up to Cubase and Nuendo 15.0.30, and will very likely keep working through version 15, though this is not guaranteed. New major versions may change the video engine; using FrameBridge with them is at your own risk. To update Cubase or Nuendo, run UNINSTALL.cmd first, then install the update, then run INSTALL.cmd again. If FrameBridge stops working after an update, write to support.

## Verified media support

**Containers:** MKV / WebM, MK3D, FLV, F4V, M2TS / MTS / TS, TOD, MOV / MP4, M4V, AVI, DivX, MXF, MPEG-PS / VOB, WMV / ASF, WTV / DVR-MS, 3GP / 3G2, RM / RMVB, OGM, and OGV.

**Video codecs and profiles:** APV, AV1 8-bit, AV1 10-bit, CineForm, DNxHR, FFV1, H.264 Main / High10 / B-frames / VFR, HEVC Main / Main10, HuffYUV, MPEG-2, ProRes 422 HQ, ProRes 4444, ProRes Proxy, ProRes LT, Theora, UtVideo, VP8, VP9 10-bit, WMV 7 / 8, DNxHD, XDCAM, XAVC / AVC-Intra, DVCPRO HD, DVCPRO50, Avid 1:1, SpeedHQ, Uncompressed v210, QuickTime Animation, PNG, TIFF, MagicYUV, FFVHuff, DivX / MS MPEG-4, H.263, VP9 8-bit, Sorenson Spark, RealVideo, Cinepak, Sorenson Video, Microsoft Video 1, Canopus HQ, Canopus HQX, and Xvid.

Tested on heavy real material: a 4K HDR Blu-ray remux (HEVC, ~25 GB) in a project with 8 dialogue tracks and many plug-ins, and a 4K HEVC streaming episode (~7 GB) — smooth playback and seeking.

**External subtitles:** SRT, ASS, SSA, VTT, SMI / SAMI, MicroDVD, TTML, DFXP, IMSC, EBU STL, SCC, DCP XML, PGS / SUP, and VobSub (the .idx + .sub pair). Put the subtitle file next to the video with the same name (for example `film.mkv` + `film.srt`).

PGS/SUP and VobSub text recognition uses the OCR languages installed in Windows (usually the system language and English; more can be added in Windows settings). Without the needed language the original subtitle pictures are shown.

<details>
<summary>Likely to play too</summary>

**Containers:** MOD, EVO, DV

**Video codecs:** HEVC 4:2:2 / 4:4:4, JPEG 2000, HAP / HAP Q, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, MPEG-1, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo, VVC / H.266

Decoded by the same FFmpeg 9.0.2 inside FrameBridge. These usually open and may well play smoothly, but only the formats above are verified for smooth playback and seeking. The 14-day refund applies.

</details>

**Cubase or Nuendo says “Invalid or not supported file!” — will FrameBridge open the video?** Often, yes. Cubase and Nuendo show this message when their built-in video engine cannot handle the file’s container, codec or frame rate — for example MKV, WebM, MXF, HEVC from phones such as the iPhone, or video with a variable frame rate. FrameBridge reads such files with its own decoder; the verified formats are listed above. If your file still does not open, you get a full refund within 14 days.

## Installation and rollback

- Close Cubase and Nuendo and run `INSTALL.cmd`. Registered installations are found automatically; otherwise pick the program's EXE or folder.
- `UNINSTALL.cmd` restores the original program files from a verified backup (byte for byte). Projects, preferences and plug-ins are not touched.
- No Steinberg file is shipped in the package; the installer works only with the files of your own installation.

Full instructions are in [READ_ME_FIRST.txt](READ_ME_FIRST.txt) and [README.txt](README.txt).

## Release file check

- Current release: `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256: `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [VirusTotal report](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection) (as of 31 October 2026): 1/63 — a single generic heuristic from one engine (MaxSecure); Microsoft Defender, Kaspersky, BitDefender, ESET, Malwarebytes, Sophos, Symantec and the other completed engines report no detection.
- What the installer changes on your PC and how to check it yourself: [SECURITY.md](SECURITY.md)

## Performance

Playback speed depends on the media and the hardware. Heavy 4K 10-bit video (HEVC Main10, H.264 High10) needs a capable CPU/GPU: on an older test PC (Intel Core i5-2550K + GeForce GTX 660) it stuttered heavily, because a GPU of that generation cannot decode these formats in hardware. On weak PCs, switching off video thumbnails in the DAW and using H.264 8-bit working copies up to 1080p is recommended. Known issues are listed in [READ_ME_FIRST.txt](READ_ME_FIRST.txt).

## Who makes FrameBridge

I'm stark622, a dubbing and voice-over engineer and the developer of FrameBridge. I made it for my own work: client videos often arrive in formats Cubase does not open, with subtitles as separate files, and converting every delivery or burning subtitles into the picture costs time. Questions and feedback come straight to me: stark622@ukr.net.

Also on: [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## Platform and status

- Windows x64
- FrameBridge Beta 1 · released 29 October 2026
- Commercial, proprietary software

**[Buy FrameBridge](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Website: [framebridge.cc](https://framebridge.cc)

**Pricing:** Pay what you want — 29 USD minimum,  
59 USD suggested. One-time purchase.

Write to stark622@ukr.net within 14 days of purchase. If FrameBridge does not install or work with your Cubase or Nuendo, you get a full refund.

**Support:** stark622@ukr.net

**Legal:**

- [Privacy Policy](PRIVACY_POLICY.md)
- [Terms of Service](TERMS_OF_SERVICE.md)
- [End-User License](END_USER_LICENSE.txt)

## Licensing

FrameBridge is commercial software. The proprietary product terms are provided in [END_USER_LICENSE.txt](END_USER_LICENSE.txt). Third-party licensing details, including the terms applicable to the packaged FFmpeg shared libraries (LGPL 2.1 or later, source included in the package), are provided in [LICENSE_AND_NOTICE.txt](LICENSE_AND_NOTICE.txt).

FrameBridge is independent software and is not affiliated with, sponsored by, or endorsed by Steinberg. Cubase and Nuendo are trademarks of their respective owner.
