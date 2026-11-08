# FrameBridge — Cubase & Nuendo のためのネイティブビデオと外部字幕

[English](../README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md) · [Italiano](README.it.md) · [Português (Brasil)](README.pt-br.md) · [Polski](README.pl.md) · [Türkçe](README.tr.md) · [Русский](README.ru.md) · [Українська](README.uk.md) · **日本語** · [简体中文](README.zh.md) · [한국어](README.ko.md)

[![Nuendo 標準のビデオトラックで動作する FrameBridge — クリックでデモを再生](../poster.png)](https://youtu.be/qJqN0ybHV8E)

**Web サイト：[framebridge.cc](https://framebridge.cc/ja/)** · [YouTube で FrameBridge のデモを見る](https://youtu.be/qJqN0ybHV8E)

FrameBridge は Windows x64 版 Cubase と Nuendo のネイティブビデオエンジンを拡張します。最新のビデオフォーマットが標準のビデオトラックで開き、内蔵のビデオプレーヤーで再生されます。外部字幕ファイルは自動的に映像の上に表示されます。素材のトランスコードも、字幕の焼き込みも必要ありません。

## 主なメリット

- Cubase/Nuendo 標準のビデオトラックと内蔵ビデオプレーヤーで動作します。
- 同梱の FFmpeg ライブラリ（LGPL）により、対応コンテナとコーデックを拡張します。
- 外部字幕ファイルを自動で読み込み、映像の上に表示します。字幕ファイルの変更もその場で反映されます。ビデオファイル自体は一切変更されません。
- どの字幕フォーマットも統一された表示（SRT と同じ見た目）で描画されます。Blu-ray の PGS/SUP や DVD の VobSub の画像字幕は、Windows 内蔵の OCR でテキストとして読み取ります。
- 別のビデオプレーヤー、コーデックパック、LAV Filters は不要です。
- VST プラグインではありません。プロジェクトに何かを読み込む必要はなく、FrameBridge が標準のビデオエンジン自体を拡張します。
- 対応する HDR 素材の HDR から SDR への変換を目視で確認済みです。色再現の正確さについて定量的な保証はしていません。

## 対応する Cubase / Nuendo のバージョン

**検証済みバージョン**

- **Cubase：** 8.0.10 および 9.0.0（LE AI Elements）、10.5.0.68、11、12.0.10 / 12.0.51 / 12.0.52、13.0.21、14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40、15.0.5 / 15.0.21 / 15.0.30
- **Nuendo：** 10、12.0.52、13.0.10 / 13.0.50、14.0.32 / 14.0.40、15.0.21 / 15.0.30

**近いバージョンでも動作する可能性が非常に高いと考えられます。** ビデオエンジンは同じ製品世代の中ではほとんど変わりません。たとえば Nuendo 12.0.52 で検証済みなら、12.0.20 や 12.0.70 でも動作する可能性が非常に高いです。インストーラーは各インストールのビデオエンジンを自ら確認し、互換性があればインストール候補として表示し、互換性がなければ一覧に表示せず、何も変更しません。動作を保証するものではありません。同じ世代のエンジンを持つ古いエディション（Nuendo 7–9、Cubase 8.5 / 9.5 など）も対象になる場合がありますが、テストはしていません。

Cubase 8 と 9 では、FrameBridge が開いたファイル（MKV など）の音声も提供するため、「ビデオからオーディオを抽出」が新しいバージョンと同じように使えます。

Cubase Pro、Artist、Elements、AI、LE の各エディションも同じ方法で検出されます。完全な一覧は [COMPATIBILITY.txt](../COMPATIBILITY.txt)（英語）をご覧ください。

**Cubase や Nuendo をアップデートしても動作しますか？** FrameBridge は上記のビルド（Cubase / Nuendo 15.0.30 まで）で検証済みで、バージョン 15 全体での動作を想定しています。インストーラーが各インストールのビデオエンジンを自ら確認します。バージョン 15 内のアップデート後に動作しなくなった場合は、INSTALL.cmd をもう一度実行してください。アップデートでプログラムファイルが置き換えられた可能性があります。Cubase / Nuendo 16 のような新しいメジャーバージョンではビデオエンジンが変わる可能性があり、このベータの対象外です。

## 検証済みのメディア

**コンテナ：** MKV / WebM、FLV、M2TS / MTS / TS、MOV / MP4、AVI、MXF、MPEG-PS / VOB、OGV

**ビデオコーデックとプロファイル：** APV、AV1 8 ビット、AV1 10 ビット、CineForm、DNxHR、FFV1、H.264 Main / High10 / B フレーム / VFR、HEVC Main10、HuffYUV、MPEG-2、ProRes 422 HQ、ProRes 4444、Theora、UtVideo、VP8、VP9 10 ビット、Xvid

**外部字幕：** SRT、ASS、SSA、VTT、SMI / SAMI、MicroDVD、TTML、DFXP、IMSC、EBU STL、SCC、DCP XML、PGS / SUP、VobSub（.idx + .sub の組）。字幕ファイルはビデオと同じ名前で同じ場所に置いてください（例：`film.mkv` + `film.srt`）。

PGS/SUP と VobSub の文字認識には、Windows にインストールされている OCR 言語を使用します（通常はシステムの言語と英語。その他の言語は Windows の設定で追加できます）。必要な言語がない場合は、元の字幕画像がそのまま表示されます。

VVC/H.266 は、このベータ版では意図的にサポートしていません。

**Cubase や Nuendo で「形式が不適切であるか、対応していないファイルです。」と表示されます。FrameBridge なら開けますか？** 多くの場合、開けます。このメッセージは、標準のビデオエンジンがファイルのコンテナ、コーデック、フレームレートに対応できないときに表示されます。たとえば MKV、WebM、MXF、iPhone などのスマートフォンで撮影した HEVC、可変フレームレートのビデオです。FrameBridge は独自のデコーダーでこれらのファイルを読み込みます。検証済みのフォーマットは上記のとおりです。それでもファイルが開けない場合は、14日以内なら全額返金します。

## インストールと復元

- Cubase と Nuendo を終了し、`INSTALL.cmd` を実行します。登録済みのインストールは自動で見つかります。見つからない場合は、プログラムの EXE またはフォルダーを選択してください。
- `UNINSTALL.cmd` は、検証済みのバックアップからプログラムの元のファイルを復元します（1 バイト単位で正確に）。プロジェクト、環境設定、プラグインには一切触れません。
- パッケージに Steinberg のファイルは一切含まれていません。インストーラーは、お使いのインストール環境のファイルだけを扱います。

詳しい手順は [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) と [README.txt](../README.txt)（英語）をご覧ください。

## リリースファイルの確認

- 現在のリリース：`FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`
- SHA-256：`c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`
- [VirusTotal のレポート](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection)（2026 年 10 月 31 日時点）：1/63 — 1 つのエンジン（MaxSecure）による汎用的なヒューリスティック検出が 1 件のみです。Microsoft Defender、Kaspersky、BitDefender、ESET、Malwarebytes、Sophos、Symantec など、スキャンを完了したその他のエンジンはすべて検出なしです。
- インストーラーが PC で何を変更するか、またそれを自分で確認する方法: [SECURITY.md](../SECURITY.md)

## パフォーマンス

再生のスムーズさは素材とハードウェアによって異なります。重い 4K 10 ビット映像（HEVC Main10、H.264 High10）には高性能な CPU/GPU が必要です。古いテスト用 PC（Intel Core i5-2550K + GeForce GTX 660）では、この世代の GPU がこれらのフォーマットをハードウェアでデコードできないため、大きくカクつきました。性能の低い PC では、DAW のビデオサムネイルをオフにし、1080p までの H.264 8 ビットの作業用コピーを使うことをおすすめします。既知の問題は [READ_ME_FIRST.txt](../READ_ME_FIRST.txt) に記載しています。

## FrameBridge の開発者

吹き替え・ボイスオーバーのエンジニアで、FrameBridge の開発者の Roman Aksonov です。自分の仕事のために作りました。クライアントから届くビデオは Cubase で開けないフォーマットであることが多く、字幕も別ファイルです。納品のたびに変換したり、字幕を映像に焼き込んだりするのは時間がかかります。ご質問やご意見は直接私に届きます：stark622@ukr.net。

関連ページ： [KVR Audio](https://www.kvraudio.com/news/framebridge-brings-modern-video-formats-and-external-subtitles-to-the-native-cubase-and-nuendo-video-player-69505) · [Gearspace](https://gearspace.com/threads/framebridge-beta-released-native-video-formats-and-external-subtitles-in-cubase-nuendo.1470656/) · [Noizefield](https://www.noizefield.com/news/framebridge-beta-extends-cubase-nuendo-video-engine)

## プラットフォームとステータス

- Windows x64
- FrameBridge Beta 1 · 2026年10月29日リリース
- 商用のプロプライエタリソフトウェア

**[FrameBridge を購入](https://www.creem.io/payment/prod_vhrQNgibUBvDcUt13M0f1)** · Web サイト：[framebridge.cc](https://framebridge.cc/ja/)

**価格：** 価格は自由に設定 — 最低 29 USD、推奨 59 USD。買い切りです。

購入から14日以内に stark622@ukr.net までご連絡ください。FrameBridge がお使いの Cubase / Nuendo にインストールできない、または動作しない場合は全額返金します。

**サポート：** stark622@ukr.net

**法的文書（英語。英語版が優先されます）：**

- [プライバシーポリシー](../PRIVACY_POLICY.md)
- [利用規約](../TERMS_OF_SERVICE.md)
- [エンドユーザー使用許諾](../END_USER_LICENSE.txt)

## ライセンス

FrameBridge は商用ソフトウェアです。製品の使用条件は [END_USER_LICENSE.txt](../END_USER_LICENSE.txt) に記載しています。同梱の FFmpeg 共有ライブラリ（LGPL 2.1 以降、ソースコードはパッケージに同梱）に適用される条件を含む、サードパーティのライセンス情報は [LICENSE_AND_NOTICE.txt](../LICENSE_AND_NOTICE.txt) に記載しています。

FrameBridge は独立したソフトウェアであり、Steinberg との提携関係はなく、Steinberg による後援や承認も受けていません。Cubase および Nuendo は、それぞれの所有者の商標です。
