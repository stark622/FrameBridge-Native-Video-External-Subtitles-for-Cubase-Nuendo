FrameBridge — Native Video for Cubase & Nuendo
Beta 2
================================================

FrameBridge adds an FFmpeg-based native video path to selected Windows x64
versions of Cubase and Nuendo. Supported media appears on the native video track
and plays in the built-in Video Player. No external video player or codec pack is
required.

FrameBridge has been tested on selected Cubase 8-16 and Nuendo 10-15 builds.
See COMPATIBILITY.txt for the exact verified versions. Other builds, including
nearby releases and older Nuendo editions, may also work if their video engine
passes the installer's compatibility check; this is not a guarantee.

On Cubase 8 and 9, FrameBridge also supplies the audio of the files it opens
(for example MKV), so "Extract audio from video" works for them as in newer
versions.

MAIN FEATURES
-------------

  - Native video track and built-in Cubase/Nuendo Video Player.
  - Extended container and codec support through packaged FFmpeg libraries.
  - Automatic loading and rendering of supported external subtitle sidecars, all
    in one look (the SRT look); PGS/SUP and VobSub pictures are read as text with
    the Windows OCR.
  - Subtitles straight from dubbing scripts / dialogue lists with roles: PDF,
    DOCX, TXT, XLSX and CSV.
  - Sound engineer copy of the Video Player for dubbing and voice-over sessions:
    a live copy made by Windows, the same frame at the same moment.
  - Supported files can be used without preliminary transcoding.
  - No separate external video player.
  - No need to burn subtitles into the source video in advance.
  - Visually verified HDR-to-SDR conversion for supported HDR media.

WHAT'S NEW IN BETA 2
--------------------

  - Cubase 16.0.5 support (verified with the full test collection).
  - Sound engineer copy of the Video Player for dubbing (see below).
  - Subtitles from dubbing scripts / dialogue lists with roles: PDF, DOCX, TXT,
    XLSX and CSV.
  - More files import: MPEG-1, DV and DivX on more Cubase/Nuendo versions; all
    FrameBridge formats on Nuendo 10 and Cubase LE/AI/Elements 11; AVI with
    Xvid / UtVideo / HuffYUV on Cubase 16.
  - Correct proportions for non-square-pixel video (DV, DVCPRO50, DVCPRO HD);
    small videos with subtitles are enlarged to 720 lines so subtitles stay sharp.
  - Exact frame rates: no false "Project 24.00, Video 24.00" warning.
  - MOD / EVO / VOB subtitles in sync.
  - Thumbnails on Cubase 10.5/11 and Nuendo 10.
  - Video Player colours match a system media player on every supported version.
  - Faster HEVC 4:2:2/4:4:4, HAP, Lagarith, Canopus Lossless, JPEG 2000 and HDR
    conversion; faster thumbnails on 8+ core CPUs.
  - VVC/H.266 opens and plays.
  - Log file limited to 5 MB (one previous log kept).

UPDATING FROM BETA 1
--------------------

Close Cubase and Nuendo and run INSTALL.cmd from the Beta 2 package. Beta 1 is
recognised and replaced in place; uninstalling it first is not needed.

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

UPDATING CUBASE / NUENDO
------------------------

Recommended order: run UNINSTALL.cmd, update Cubase/Nuendo with the Steinberg
installer, then run INSTALL.cmd. INSTALL backs up the new original files and
installs FrameBridge if the new version is compatible.

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
Unknown engines, backups, MXF/AVI handlers, and FFmpeg DLLs are left untouched.

FILE SAFETY
-----------

Depending on the verified host, the installer manages these files inside the
selected DAW folder:

  Components\videoengine.dll
  Components\MXFHandler\mxfhandler.dll (only on verified applicable versions)
  Components\avisupport.dll (Cubase 16 only)
  _dsreader\videoengine_orig.dll
  _dsreader\mxfhandler_orig.dll
  _dsreader\avisupport_orig.dll (Cubase 16 only)
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

FrameBridge writes a local log, %TEMP%\cubase_dsreader.log (program and media
paths, formats, timings). It is never sent anywhere, is limited to 5 MB (one
previous log is kept as cubase_dsreader.log.old) and can be deleted at any time.
The sound engineer copy window remembers its position in
%APPDATA%\FrameBridge\booth.ini.

SUPPORTED MEDIA
---------------

Verified containers: MKV/WebM, MK3D, MOV/MP4, M4V, MXF (including Avid OP-Atom),
AVI, DivX, M2TS/MTS/TS, TOD, MOD, EVO, MPEG-PS/VOB, MPEG-1, DV, FLV, F4V, WMV/ASF,
WTV/DVR-MS, 3GP/3G2, RM/RMVB, OGV and OGM.

Verified codecs: H.264 (Main, High10, B-frames, VFR), HEVC Main/Main10, AV1
8/10-bit, ProRes Proxy/LT/422 HQ/4444, DNxHR/DNxHD, CineForm, XDCAM, XAVC/AVC-Intra,
DV, DVCPRO50, DVCPRO HD, MPEG-1, MPEG-2, VP8, VP9 8/10-bit, APV, FFV1,
HuffYUV/FFVHuff, UtVideo, MagicYUV, Uncompressed v210, QuickTime Animation, PNG,
TIFF, Canopus HQ/HQX, SpeedHQ, HAP/HAP Q, Theora, WMV 7/8, Xvid, DivX/MS MPEG-4,
Sorenson Spark, Sorenson Video, RealVideo, Microsoft Video 1, MJPEG, H.263, Avid 1:1
and Cinepak.

Supported external subtitle formats are SRT, ASS, SSA, VTT, SMI/SAMI, MicroDVD,
TTML/DFXP/IMSC, EBU STL, SCC, DCP XML, PGS/SUP and VobSub (the .idx + .sub pair, both
with the video's name; either file alone shows nothing). Every format is drawn in
the same look as SRT. PGS/SUP and VobSub store pictures of the lines: they are read
as text with the Windows built-in OCR (Windows 10/11, the OCR languages installed
in Windows) on a background thread a moment after the file is opened. Lines that
cannot be read, or a language that is not installed in Windows, keep the original
pictures. Rare single-letter recognition errors are possible. Setting the
environment variable CUBASE_DSREADER_SUBOCR=0 keeps the original pictures.

Dubbing scripts and dialogue lists with timecodes and roles are read as subtitles
too: PDF, DOCX, TXT, XLSX and CSV with the video's name. Lines appear in the SRT
look with the role as a prefix; an ordinary subtitle file with the same name takes
priority.

HDR-to-SDR conversion was visually verified. No quantitative color-accuracy
claim is made.

SOUND ENGINEER COPY OF THE VIDEO PLAYER
---------------------------------------

While Cubase/Nuendo runs with FrameBridge, a FrameBridge icon sits in the Windows
notification area. A click opens "Use this player on the same screen as Cubase" (or "...as Nuendo"): a live copy
of the host's own Video Player, drawn by Windows itself (no second decoding, no
separate playback, no settings). It shows the same frame at the same moment as the
Video Player, including subtitles, and follows the Video Player when it is moved
or resized.

For a dubbing booth: show the actor the Cubase/Nuendo Video Player itself in full
screen on the booth screen, and use the copy for the sound engineer. The copy cannot
be sharper than the Video Player it copies. The copy stays above Cubase/Nuendo
without taking the keyboard; double-click toggles full screen; the close button
hides it until the next click on the icon. Windows may hide new tray icons under the
"^" arrow next to the clock. Windows 7 needs Aero for the copy. Setting the
environment variable CUBASE_DSREADER_BOOTH=0 removes the icon.

KNOWN BETA LIMITATIONS
----------------------

  - VVC/H.266 opens and plays, but is not yet tuned for smooth playback.
  - Heavy formats that may play slower than real time on many PCs: HEVC 4:2:2 and
    4:4:4, JPEG 2000, Lagarith, Canopus Lossless, WMV 9, VC-1, NotchLC and
    uncompressed r210/R10k/2vuy.
  - On older CPUs/GPUs, 4K HEVC Main10 and H.264 High10 may be too demanding
    for real-time playback, even when audio continues normally. For best results
    on weak PCs, disable video thumbnails in the DAW where available. FrameBridge
    also temporarily pauses thumbnail generation after sustained playback delays;
    this reduces competition for CPU time but cannot overcome decode limits.
  - Video above 60 fps is delivered at 60 fps (Cubase/Nuendo do not accept more).
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
