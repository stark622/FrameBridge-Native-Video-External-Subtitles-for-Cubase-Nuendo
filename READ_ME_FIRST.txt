FrameBridge — Native Video for Cubase & Nuendo — Beta
========================================================

INSTALL
-------
1. Close Cubase and Nuendo.
2. Run INSTALL.cmd (Windows asks for administrator rights).
   - One compatible installation found: it is selected automatically.
   - Several found: enter a number (several separated by commas, a range 1-3, A for all, 0 to cancel).
   - None found: pick Cubase*.exe / Nuendo*.exe or the program folder in the dialog.
3. Start Cubase/Nuendo and import video as usual (File > Import > Video File, or drag and
   drop). Video uses the native video track and the built-in Video Player.
4. Subtitles: put the subtitle file in the same folder with the same name as the video
   (e.g. film.mkv + film.srt). They are displayed over the picture automatically - the
   video file itself is never changed; edits to the subtitle file are picked up live.

UNINSTALL
---------
Run UNINSTALL.cmd. The original program files are restored from a verified backup.
Projects, preferences and plug-ins are not touched.
Projects keep their media links: after uninstall, video clips in formats only FrameBridge
opens (e.g. MKV) stay empty in old projects while their audio stays. Reinstall FrameBridge
to see them again. If you remove such an empty clip, save and reopen the project before
importing new video (the DAW's own engine can stumble over the removed clip otherwise).

VERIFIED VERSIONS
-----------------
Cubase: 8.0.10 and 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52,
        13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30
Nuendo: 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

NEARBY VERSIONS VERY LIKELY WORK
--------------------------------
If e.g. Nuendo 12.0.52 is verified, 12.0.20 or 12.0.70 will very likely work too: the
video engine barely changes within one generation. The installer checks the engine of your
version itself: a compatible one is offered in the list, an incompatible one is not listed
and nothing is changed. Not a guarantee, but highly likely. Nuendo 7-9 and Cubase 8.5/9.5
may also qualify (not tested).

WEAK PCs
--------
Recommendation: switch off video thumbnails right away (Preferences > Video > Show Video
Thumbnails). Not required and nothing breaks without it - the CPU just does not have to
share time between playback and thumbnail building from the first second, so video plays
as smoothly as the hardware allows. (FrameBridge pauses thumbnail building by itself when
playback falls behind, but with thumbnails off it is smooth from the start.)

Tested on a weak PC: Intel Core i5-2550K (2011, 4 cores) + NVIDIA GeForce GTX 660,
Windows 11, Cubase Pro 12.0.51. Installation, MKV with subtitles and uninstall work. 4K
10-bit video (HEVC Main10, H.264 High10) however plays with heavy stutter and frozen
pictures (audio keeps playing). This is expected: a GPU of that generation cannot decode
these formats in hardware, so all decoding falls on the CPU. On such PCs use H.264 8-bit
working copies up to 1080p.

CUBASE 8 / 9 NOTE
-----------------
Without QuickTime installed, Cubase 8/9 shows "QuickTime cannot be initialized" when
importing video - click Continue: FrameBridge files import and play. Only Cubase's own
QuickTime formats need QuickTime.

SUP (Blu-ray) AND VOBSUB (DVD) SUBTITLES
----------------------------------------
These formats store pictures of the lines. FrameBridge reads them with the Windows built-in
text recognition (OCR) and shows them in the same look as SRT. Languages installed in
Windows are recognised (Settings > Time & language > Language; usually the system language
and English - more can be added there). Without the needed language the original pictures
are shown. Rare single-letter recognition errors are possible.
VobSub is always a pair of files: keep the .idx and the .sub together, both with the video's
name (e.g. film.mkv + film.idx + film.sub). Either file alone shows no subtitles.

KNOWN ISSUES
------------
- Cubase 8/9: install QuickTime completely or remove it completely; a partly removed
  QuickTime can crash Cubase's video helpers at start-up (the next start works).
- Cubase 8/9 build thumbnails of every imported clip right after import: with many 4K
  clips the first minutes are heavier. Thumbnails off avoids it.
- Nuendo: an MXF dropped onto the track list (left area) may start Nuendo's own MXF
  project import ("create new project"). Drop it onto the event display or a video
  track, or use File > Import > Video File.
- A few MKV files with an incomplete seek index can pause ~1-2 s on an occasional jump.

DOCUMENTATION AND LICENSES
--------------------------
docs\README.txt, docs\COMPATIBILITY.txt, docs\END_USER_LICENSE.txt, docs\LICENSE_AND_NOTICE.txt
