FrameBridge — Native Video for Cubase & Nuendo
v4 Beta
================================================

FrameBridge adds an FFmpeg-based native video path to selected Windows x64
versions of Cubase and Nuendo. Supported media appears on the native video track
and plays in the built-in Video Player. No external video player or codec pack is
required.

FrameBridge has been tested on selected Cubase and Nuendo versions from the 10-15
product generations. See COMPATIBILITY.txt for the exact verified builds; this
statement is not a promise of compatibility with every release in that range.

MAIN FEATURES
-------------

  - Native video track and built-in Cubase/Nuendo Video Player.
  - Extended container and codec support through packaged FFmpeg libraries.
  - Automatic loading and rendering of supported external subtitle sidecars.
  - Supported files can be used without preliminary transcoding.
  - No separate external video player.
  - No need to burn subtitles into the source video in advance.
  - Visually verified HDR-to-SDR conversion for supported HDR media.

INSTALL
-------

1. Close Cubase and Nuendo.
2. Run INSTALL.cmd.
3. If exactly one compatible registered installation is found, it is selected
   automatically.
4. If several compatible installations are found, choose one, several, or all
   from the numbered list. Full installation paths are shown.
5. If none is found, choose a Cubase*.exe / Nuendo*.exe file or its installation
   folder using the standard Windows selection dialog.

Automatic discovery uses only normal Windows registration and product-owned
install state. It does not scan drives, Desktop folders, archives, or unrelated
test copies. Any drive letter and non-default registered path are supported.
You may also drag an installation folder or executable onto INSTALL.cmd.

Cancellation exits without changing files. Exit codes: 0 success, 1 error,
2 cancelled.

ROLLBACK
--------

Run UNINSTALL.cmd. When several tracked installations exist, choose which ones
to restore; rollback never restores every copy without confirmation. The
original engine is restored only from its state-bound, SHA-256-verified backup.
Unknown engines, backups, MXF handlers, and FFmpeg DLLs are left untouched.

FILE SAFETY
-----------

The installer changes only these product files inside a selected DAW folder:

  Components\videoengine.dll
  Components\MXFHandler\mxfhandler.dll (only on verified applicable versions)
  _dsreader\videoengine_orig.dll
  _dsreader\mxfhandler_orig.dll
  _dsreader\ffmpeg\the five packaged *-dsr-*.dll files

State is stored only in %ProgramData%\CubaseNuendoDirectShow. Old extension
values recorded by this product are removed only when their value still matches
the product value. User projects, DAW preferences, third-party plug-ins, media,
and unrelated system data are not touched.

An existing DLL in _dsreader\ffmpeg is accepted only when its filename and
SHA-256 belong to a released payload. Any unknown DLL or unknown hash causes a
safe refusal before the selected installation is changed. Rollback deletes only
known product hashes and preserves user replacements.

SUPPORTED MEDIA
---------------

Verified video families include MKV/WebM, FLV, M2TS/MTS/TS, MOV/MP4, AVI, MXF,
MPEG-2, H.264 including High10/VFR, HEVC Main10, AV1 8/10-bit, VP8/VP9 10-bit,
ProRes 422 HQ/4444, CineForm, DNxHR, FFV1, HuffYUV, UtVideo, Theora, Xvid and APV.

Supported external subtitle formats are SRT, ASS, SSA, VTT, SMI/SAMI, MicroDVD,
TTML/DFXP/IMSC, EBU STL, SCC, DCP XML, PGS/SUP and VobSub. Text and bitmap
subtitle paths were tested. Corrected smooth PGS/SUP rendering is included.

HDR-to-SDR conversion was visually verified. No quantitative color-accuracy
claim is made.

KNOWN BETA LIMITATIONS
----------------------

  - VVC/H.266 is intentionally unsupported.
  - Heavy software-decoded formats can seek less smoothly on low-end CPUs/GPUs.
  - Nuendo 13 may open the video window in full screen about 300 ms more slowly.

See COMPATIBILITY.txt for the verified host and format matrix.
See END_USER_LICENSE.txt and LICENSE_AND_NOTICE.txt for licensing information.
