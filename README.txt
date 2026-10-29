FrameBridge — Native Video for Cubase & Nuendo
v4 Beta
================================================

FrameBridge adds an FFmpeg-based native video path to selected Windows x64
versions of Cubase and Nuendo. Supported media appears on the native video track
and plays in the built-in Video Player. No external video player or codec pack is
required.

FrameBridge has been tested on selected Cubase 8-15 and Nuendo 10-15 builds.
See COMPATIBILITY.txt for the exact verified versions. Other builds, including
nearby releases and older Nuendo editions, may also work if their video engine
passes the installer's compatibility check; this is not a guarantee.

MAIN FEATURES
-------------

  - Native video track and built-in Cubase/Nuendo Video Player.
  - Extended container and codec support through packaged FFmpeg libraries.
  - Automatic loading and rendering of supported external subtitle sidecars, all
    in one look (the SRT look); PGS/SUP and VobSub pictures are read as text with
    the Windows OCR.
  - Audio of the video file on import ("Extract audio from video"), Cubase 8-15
    and Nuendo 10-15.
  - Supported files can be used without preliminary transcoding.
  - No separate external video player.
  - No need to burn subtitles into the source video in advance.
  - Visually verified HDR-to-SDR conversion for supported HDR media.

INSTALL
-------

1. Close Cubase and Nuendo.
2. Run INSTALL.cmd from the main package folder (one level above this documentation folder).
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

Projects keep their media links. After rollback, video clips in formats that only
FrameBridge opens (for example MKV) appear empty in existing projects; their audio
is unaffected. Reinstalling FrameBridge shows them again. If such an empty clip is
removed, save and reopen the project before importing new video: one test showed the
DAW's own original engine crashing on a video import right after that removal (no
FrameBridge code was loaded; the repeated sequence worked).

Run UNINSTALL.cmd. When several tracked installations exist, choose which ones
to restore; rollback never restores every copy without confirmation. The
original engine is restored only from its state-bound, SHA-256-verified backup.
Unknown engines, backups, MXF handlers, and FFmpeg DLLs are left untouched.

FILE SAFETY
-----------

Depending on the verified host, the installer manages these files inside the
selected DAW folder:

  Components\videoengine.dll
  Components\MXFHandler\mxfhandler.dll (only on verified applicable versions)
  _dsreader\videoengine_orig.dll
  _dsreader\mxfhandler_orig.dll
  _dsreader\ffmpeg\the five packaged *-dsr-*.dll files
  _dsreader\videodecode.exe, videooutput.exe, videopreload.exe (Cubase 8/9 only:
    verified local copies of that installation's existing QuickTime helpers)

State is stored only in %ProgramData%\CubaseNuendoDirectShow. Old extension
values recorded by this product are removed only when their value still matches
the product value. User projects, DAW preferences, third-party plug-ins, media,
and unrelated system data are not touched. Cubase 8/9 helper EXEs are copied
locally from the user's existing installation, not shipped with FrameBridge;
product-owned copies are removed on rollback.

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
TTML/DFXP/IMSC, EBU STL, SCC, DCP XML, PGS/SUP and VobSub (the .idx + .sub pair, both
with the video's name; either file alone shows nothing). Every format is drawn in
the same look as SRT. PGS/SUP and VobSub store pictures of the lines: they are read
as text with the Windows built-in OCR (Windows 10/11, the OCR languages installed
in Windows) on a background thread a moment after the file is opened. Lines that
cannot be read, or a language that is not installed in Windows, keep the original
pictures. Rare single-letter recognition errors are possible. Setting the
environment variable CUBASE_DSREADER_SUBOCR=0 keeps the original pictures.

HDR-to-SDR conversion was visually verified. No quantitative color-accuracy
claim is made.

KNOWN BETA LIMITATIONS
----------------------

  - VVC/H.266 is intentionally unsupported.
  - On older CPUs/GPUs, 4K HEVC Main10 and H.264 High10 may be too demanding
    for real-time playback, even when audio continues normally. For best results
    on weak PCs, disable video thumbnails in the DAW where available. FrameBridge
    also temporarily pauses thumbnail generation after sustained playback delays;
    this reduces competition for CPU time but cannot overcome decode limits.
  - Nuendo 13 may open the video window in full screen about 300 ms more slowly.
  - Cubase 8/9 without QuickTime installed show "QuickTime cannot be initialized"
    when importing video; click Continue - FrameBridge media imports and plays.
    Only Cubase's own QuickTime formats need QuickTime.
  - Cubase 8/9: install QuickTime completely or remove it completely. A partly
    removed QuickTime can crash Cubase's own video helper processes at start-up
    (Cubase closes; the next start works).
  - Cubase 8/9 build a thumbnail cache of every imported clip in the background
    right after import. With many 4K clips in one project, playback is heavier for
    the first minutes; switching video thumbnails off avoids it.
  - Nuendo: an MXF file dropped onto the track list (the left area) instead of the
    event display can start Nuendo's own MXF project import and offer to create a
    new project. Drop it onto the event display or a video track, or use
    File > Import > Video File.
  - Some MKV files with an incomplete seek index (seen on a 4K Blu-ray REMUX) can
    pause for about 1-2 s on an occasional jump while scrubbing; the following
    jumps are fast again.

See COMPATIBILITY.txt for the verified host and format matrix.
See END_USER_LICENSE.txt and LICENSE_AND_NOTICE.txt for licensing information.
