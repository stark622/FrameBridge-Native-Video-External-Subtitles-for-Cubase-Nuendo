# FrameBridge — Cubase & Nuendo のためのネイティブビデオと外部字幕

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · **日本語** · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Windows x64](https://img.shields.io/badge/Windows-x64-2b6cb0)](#リリースファイルの確認) [![Cubase 8–16](https://img.shields.io/badge/Cubase-8%E2%80%9316-2b6cb0)](#対応する-cubase--nuendo-のバージョン) [![Nuendo 10–15](https://img.shields.io/badge/Nuendo-10%E2%80%9315-2b6cb0)](#対応する-cubase--nuendo-のバージョン) [![VirusTotal 0/61](https://img.shields.io/badge/VirusTotal-0%2F61-2f9e5b)](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection) [![Beta 2](https://img.shields.io/badge/release-Beta%202-6b7280)](#リリースファイルの確認)

[![Nuendo 標準のビデオトラックで動作する FrameBridge — クリックでデモを再生](../media/poster.png)](https://youtu.be/qJqN0ybHV8E)

上の動画は Cubase 11 Pro での短いビデオガイドで、SRT 字幕ファイル付きの MKV と、SDR で表示される HDR の MKV を紹介しています。[YouTube の拡張版](https://youtu.be/NjNHtkc8-OE)は、ノーカットのワンテイクでその場で読み込んでいます：MKV（HEVC 4K 10 ビット、HDR を含む）、OGV（Theora）、MXF（DNxHR 4K）、MOV（ProRes 4444 4K）と複数の字幕形式。

**[Web サイト](https://framebridge.cc/ja/)** · **[購入](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · **[購入前にチェック](https://framebridge.cc/ja/#check)**

FrameBridge は Windows x64 版 Cubase と Nuendo のネイティブビデオエンジンを拡張します。最新のビデオフォーマットが標準のビデオトラックで開き、内蔵のビデオプレーヤーで再生されます。外部字幕ファイルは自動的に映像の上に表示されます。素材の変換も、字幕の焼き込みも必要ありません。

**Cubase や Nuendo で「形式が不適切であるか、対応していないファイルです。」と表示されますか？** FrameBridge はまさにこのメッセージのために作られました。このメッセージは、標準のビデオエンジンがファイルのコンテナ、コーデック、フレームレートに対応できないときに表示されます。MKV、WebM、MXF、iPhone などのスマートフォンで撮影した HEVC、可変フレームレートの動画などです。FrameBridge はこうしたファイルを独自のデコーダーで読み込みます。それでもファイルが開けない場合は、14 日以内なら全額返金します。

## 主なメリット

- **標準のビデオトラックでモダンなフォーマット** — MKV、WebM、MXF、HEVC、AV1、ProRes 4444 など多数を、変換なしで内蔵ビデオプレーヤーで再生できます。
- **映像の上に外部字幕** — `film.mkv` の隣に `film.srt` を置くだけ。字幕ファイルの編集はすぐに反映されます。ビデオファイルは一切変更されません。
- **吹き替えのために** — エンジニア用の 2 つ目のビデオウィンドウ、役名付きの吹き替え台本から直接字幕。
- **プラグインではありません** — プラグインスロット不要、プロジェクトごとの読み込み不要、MTC 同期不要、コーデックパック不要。UNINSTALL.cmd で元どおりに戻せます。

<details>
<summary>すべての機能</summary>

- Cubase/Nuendo 標準のビデオトラックと内蔵ビデオプレーヤーで動作します。
- 同梱の FFmpeg ライブラリ（LGPL）により、対応コンテナとコーデックを拡張します。
- 外部字幕ファイルを自動で読み込み、映像の上に表示します。字幕ファイルの変更もその場で反映されます。読み込み後に追加・名前変更したファイルも、読み込み直さずに表示されます。ビデオファイル自体は一切変更されません。
- どの字幕フォーマットも統一された表示（SRT と同じ見た目）で描画されます。Blu-ray の PGS/SUP や DVD の VobSub の画像字幕は、Windows 内蔵の OCR でテキストとして読み取ります。
- 吹き替え用の 2 つ目のビデオウィンドウ：役者が別の画面でビデオプレーヤーを見ている間、エンジニア用に Cubase/Nuendo のビデオプレーヤーのライブコピーを表示します。
- 役名付きの吹き替え台本やダイアログリストから直接字幕：PDF、DOCX、TXT、XLSX、CSV。
- 別のビデオプレーヤー、コーデックパック、LAV Filters は不要です。
- VST プラグインではありません。プラグインスロットは不要で、プロジェクトごとに何かを読み込む必要も、MTC 同期も要りません。FrameBridge が標準のビデオエンジン自体を拡張します。
- 標準の「ビデオからオーディオを抽出」でオーディオも読み込めます。Cubase や Nuendo 単体では開けない MKV などのファイルからも可能です。
- HDR 映像は通常の色（SDR）で表示されます。目視で確認済みで、色再現の正確さについて定量的な保証はしていません。

</details>

## 吹き替え用の 2 つ目のビデオウィンドウ

Cubase と Nuendo では、ビデオは 1 つのビデオプレーヤーウィンドウにしか表示されません。FrameBridge はそのライブコピーを追加します。役者は自分の画面でビデオプレーヤーを見て、あなたはプロジェクトの横にコピーを置いておけます。HDMI スプリッターも、Blackmagic の出力カードも不要です。

![ビデオプレーヤーを役者の画面へドラッグし、ダブルクリックで全画面にして、タスクトレイの FrameBridge アイコンをクリックすると、あなたの画面にコピーが開きます](../media/dub-window.gif)

## 対応する Cubase / Nuendo のバージョン

| | 検証済みバージョン |
|---|---|
| **Cubase** | 8.0.10 および 9.0.0（LE AI Elements）、10.5.0.68、11、12.0.10 / 12.0.51 / 12.0.52、13.0.21、14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40、15.0.5 / 15.0.21 / 15.0.30、16.0.5 |
| **Nuendo** | 10、12.0.52、13.0.10 / 13.0.50、14.0.32 / 14.0.40、15.0.21 / 15.0.30 |

Cubase Pro、Artist、Elements、AI、LE の各エディションも同じ方法で検出されます。完全な一覧は [COMPATIBILITY.txt](../docs/COMPATIBILITY.txt)（英語）をご覧ください。 ビデオトラックのサムネイルは、すべての検証済みバージョンで表示されます。

<details>
<summary>その他のバージョンとアップデート</summary>

**近いバージョンでも動作する可能性が非常に高いと考えられます。** ビデオエンジンは同じ製品世代の中ではほとんど変わりません。たとえば Nuendo 12.0.52 で検証済みなら、12.0.20 や 12.0.70 でも動作する可能性が非常に高いです。インストーラーは各インストールのビデオエンジンを自ら確認し、互換性があればインストール候補として表示し、互換性がなければ一覧に表示せず、何も変更しません。同じ世代のエンジンを持つ古いエディション（Nuendo 7–9、Cubase 8.5 / 9.5 など）も対象になる場合がありますが、テストはしていません。

**Cubase や Nuendo をアップデートしても動作しますか？** FrameBridge は上記のビルド（Cubase 16.0.5 / Nuendo 15.0.30 まで）で検証済みです。新しいメジャーバージョンでビデオエンジンが変わった場合、インストーラーはそのインストールを候補に出さず、何も変更しません。Cubase / Nuendo をアップデートしたら、もう一度 INSTALL.cmd を実行するだけです。Cubase / Nuendo のアップデート後に FrameBridge が動作しなくなった場合は、サポートまでご連絡ください。

</details>

## 検証済みのメディア

**コンテナ：** MKV / WebM、MOV / MP4、MXF、M2TS / MTS / TS、AVI、MPEG-PS / VOB、WMV など。

**ビデオコーデック：** H.264（High10、B フレーム、VFR を含む）、HEVC Main / Main10、AV1 8/10 ビット、VP9、ProRes 422 HQ / 4444 / LT / Proxy、DNxHD / DNxHR、CineForm、XDCAM、XAVC / AVC-Intra、MPEG-2、APV、FFV1 など。

**外部字幕：** SRT、ASS、SSA、VTT、SMI / SAMI、MicroDVD、TTML、DFXP、IMSC、EBU STL、SCC、DCP XML、PGS / SUP、VobSub（.idx + .sub の組）。字幕ファイルはビデオと同じ名前で同じ場所に置いてください（例：`film.mkv` + `film.srt`）。

重い実素材でテスト済み：8 本のダイアログトラックと多数のプラグインを使ったプロジェクトでの 4K HDR Blu-ray リマックス（HEVC、約 25 GB）と、4K HEVC の配信エピソード（約 7 GB）。再生もシークもスムーズです。

<details>
<summary>検証済みのすべてのコンテナとコーデック</summary>

**コンテナ：** MKV / WebM、MK3D、FLV、F4V、M2TS / MTS / TS、TOD、MOD、EVO、DV、MOV / MP4、M4V、AVI、DivX、MXF、MPEG-PS / VOB、WMV / ASF、WTV / DVR-MS、3GP / 3G2、RM / RMVB、OGM、OGV

**ビデオコーデックとプロファイル：** APV、AV1 8 ビット、AV1 10 ビット、CineForm、DNxHR、FFV1、H.264 Main / High10 / B フレーム / VFR、HEVC Main / Main10、HuffYUV、HAP / HAP Q、MPEG-1、DV、MPEG-2、ProRes 422 HQ、ProRes 4444、ProRes Proxy、ProRes LT、Theora、UtVideo、VP8、VP9 10 ビット、WMV 7 / 8、DNxHD、XDCAM、XAVC / AVC-Intra、DVCPRO HD、DVCPRO50、Avid 1:1、SpeedHQ、Uncompressed v210、QuickTime Animation、PNG、TIFF、MagicYUV、FFVHuff、DivX / MS MPEG-4、H.263、VP9 8 ビット、Sorenson Spark、RealVideo、Cinepak、Sorenson Video、Microsoft Video 1、Canopus HQ、Canopus HQX、Xvid

PGS/SUP と VobSub の文字認識には、Windows にインストールされている OCR 言語を使用します（通常はシステムの言語と英語。その他の言語は Windows の設定で追加できます）。必要な言語がない場合は、元の字幕画像がそのまま表示されます。

</details>

<details>
<summary>これらもおそらく再生できます</summary>

**ビデオコーデック:** HEVC 4:2:2 / 4:4:4, JPEG 2000, Lagarith, Canopus Lossless, Avid Meridian, NotchLC, SheerVideo, Apple Intermediate, Uncompressed r210 / R10k / 2vuy, WMV 9, VC-1, VP6, TechSmith / Camtasia, Fraps, CamStudio, Indeo、VVC / H.266

FrameBridge に内蔵された同じ FFmpeg 9.0.2 でデコードされます。通常は開くことができ、スムーズに再生できる可能性も十分ありますが、スムーズな再生とシークを確認済みなのは上記の形式だけです。14 日間の返金保証が適用されます。

</details>

## パフォーマンス

1080p までの一般的な映像は、ほとんどのコンピューターでスムーズに再生されます。4K 10 ビット（HEVC、AV1）には 2016 年以降のグラフィックカードが向いています。こうした映像をカード自身がデコードするためです。お使いのファイルとコンピューターでのおおよその滑らかさは、上の[「購入前にチェック」](https://framebridge.cc/ja/#check)で分かります。 既知の問題は [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) にまとめています。

## インストールと復元

- Cubase と Nuendo を終了し、`INSTALL.cmd` を実行します。登録済みのインストールは自動で見つかります。見つからない場合は、プログラムの EXE またはフォルダーを選択してください。
- `UNINSTALL.cmd` は、検証済みのバックアップからプログラムの元のファイルを復元します（1 バイト単位で正確に）。プロジェクト、環境設定、プラグインには一切触れません。
- パッケージに Steinberg のファイルは一切含まれていません。インストーラーは、お使いのインストール環境のファイルだけを扱います。

詳しい手順は [READ_ME_FIRST.txt](../docs/READ_ME_FIRST.txt) と [README.txt](../docs/README.txt)（英語）をご覧ください。

## リリースファイルの確認

- 現在のリリース：`FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta v2.zip`
- SHA-256：`714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc`
- [VirusTotal のレポート](https://www.virustotal.com/gui/file/714df321641fb5c947244c9b3e55c72e5551bdb2c4b6d546b2cf6afc95931abc/detection)（2026 年 11 月 14 日時点）：0/61 — Microsoft Defender、ESET、Malwarebytes、Sophos、Symantec を含め、どのエンジンも検出なしです。
- インストーラーが PC で何を変更するか、またそれを自分で確認する方法: [SECURITY.md](../SECURITY.md)

## FrameBridge の開発者

吹き替え・ボイスオーバーのエンジニアで、FrameBridge の開発者の stark622 です。自分の仕事のために作りました。クライアントから届くビデオは Cubase で開けないフォーマットであることが多く、字幕も別ファイルです。納品のたびに変換したり、字幕を映像に焼き込んだりするのは時間がかかります。ご質問やご意見は直接私に届きます：stark622@ukr.net。

関連ページ： [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## 価格とサポート

**[FrameBridge を購入](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)**

**価格：** 価格は US$29〜US$59 で自由に設定 · 決済ページは 59 で開きますが、29 まで下げられます · 買い切り

購入から14日以内に stark622@ukr.net までご連絡ください。FrameBridge がお使いの Cubase / Nuendo にインストールできない、または動作しない場合は全額返金します。

## ライセンス

FrameBridge は商用ソフトウェアです。製品の使用条件は [END_USER_LICENSE.txt](../docs/END_USER_LICENSE.txt) に記載しています。同梱の FFmpeg 共有ライブラリ（LGPL 2.1 以降、ソースコードはパッケージに同梱）に適用される条件を含む、サードパーティのライセンス情報は [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt) に記載しています。

FrameBridge は独立したソフトウェアであり、Steinberg との提携関係はなく、Steinberg による後援や承認も受けていません。Cubase および Nuendo は、それぞれの所有者の商標です。

**法的文書（英語。英語版が優先されます）：** [プライバシーポリシー](../docs/PRIVACY_POLICY.md) · [利用規約](../docs/TERMS_OF_SERVICE.md)
