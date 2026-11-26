FrameBridge — Native Video for Cubase & Nuendo — Beta 3 (test version)
=========================================================================

WHAT'S NEW IN BETA 3
--------------------
- Nuendo 15.0.40 is supported (verified).
- Dubbing scripts: many more layouts are read - also old .doc / .xls, .rtf, .odt, .ods,
  PDFs exported from Word or a browser, column headers in 12 languages, start-only
  times, takes, frame timecodes (see SUBTITLES FROM DUBBING SCRIPTS below).
- Optional next-line hint for the actor: the next line under the current one in the main
  Video Player while the sound engineer copy is open. Off by default (see below).
- The tray menu speaks the language of Windows (English, German, French, Spanish, Italian,
  Portuguese, Polish, Turkish, Japanese, Chinese, Korean).
- Phone videos recorded upright or rotated are shown the right way up.
- Faster 4K: when the graphics card decodes the video, the 4K -> 1080p step runs on the
  graphics card too; faster picture hand-over to Cubase/Nuendo.
- Weak PCs: when the Video Player falls far behind, FrameBridge skips frames by itself
  instead of stalling for seconds.
- While video plays, thumbnails wait, so heavy formats play without hitches; thumbnails
  continue about 3 seconds after you stop.
- Faster JPEG 2000 (also 4K DCP / scope), Canopus HQ / HQX and HDR video.
- The installer recognises every earlier FrameBridge build, so any of them can be
  updated or uninstalled.

NEW IN BETA 2 (also included)
-----------------------------
- Cubase 16.0.5 is supported (verified).
- Second video window for dubbing: a live copy of the Video Player for the sound engineer
  (see SOUND ENGINEER COPY below).
- Subtitles straight from dubbing scripts and dialogue lists with roles: PDF, DOCX, TXT,
  XLSX, CSV.
- More files import: MPEG-1, DV, DivX on more Cubase/Nuendo versions; all FrameBridge
  formats on Nuendo 10 and Cubase LE/AI/Elements 11; AVI with Xvid/UtVideo/HuffYUV on
  Cubase 16.
- Correct wide proportions for DV, DVCPRO50 and DVCPRO HD; sharp subtitles on small videos.
- No more false frame-rate mismatch warning ("Project 24.00, Video 24.00").
- Subtitles of MOD/EVO/VOB files are in sync.
- Thumbnails on Cubase 10.5/11 and Nuendo 10.
- Player colours match a system media player.
- Faster heavy formats: HEVC 4:2:2/4:4:4, HAP, Lagarith, Canopus Lossless, JPEG 2000, HDR.
- VVC/H.266 opens (slower formats are listed under "Likely to play too").
- The log file is limited to 5 MB.

UPDATING FROM BETA 1 OR BETA 2
------------------------------
Close Cubase and Nuendo and run INSTALL.cmd from this package. The earlier beta is replaced in place;
no need to uninstall it first. Your projects and settings are not touched.

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

UPDATING CUBASE / NUENDO
------------------------
After updating Cubase/Nuendo with the Steinberg installer, simply run INSTALL.cmd again.
The installer sees the update over FrameBridge, backs up the new original files and
installs FrameBridge if the new version is compatible. A new major version with a
different video engine is simply not offered, and nothing is changed.

VERIFIED VERSIONS
-----------------
Cubase: 8.0.10 and 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52,
        13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30,
        16.0.5
Nuendo: 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30 / 15.0.40

NEARBY VERSIONS VERY LIKELY WORK
--------------------------------
If e.g. Nuendo 12.0.52 is verified, 12.0.20 or 12.0.70 will very likely work too: the
video engine barely changes within one generation. The installer checks the engine of your
version itself: a compatible one is offered in the list, an incompatible one is not listed
and nothing is changed. Not a guarantee, but highly likely. Nuendo 7-9, 11, 16 and Cubase
8.5/9.5 may also qualify (not tested).

SOUND ENGINEER COPY OF THE VIDEO PLAYER (dubbing / voice-over booth)
--------------------------------------------------------------------
While Cubase/Nuendo runs with FrameBridge, a FrameBridge icon (blue "2") sits in the
Windows notification area. Click it to open "Use this player on the same screen as Cubase" (or "...as Nuendo"): a live
copy of the Cubase/Nuendo Video Player made by Windows - the same frame at the same
moment, with subtitles, and almost no extra load.
- Actor's screen / TV: open the Cubase/Nuendo Video Player itself in full screen there
  (best quality). Sound engineer: the copy window, at any size.
- The copy cannot be sharper than the Video Player it copies - that is why the actor
  should get the Video Player itself, not the copy.
- The copy stays above Cubase/Nuendo and never takes the keyboard. Double-click = full
  screen / window. The close button hides it; click the icon to open it again.
- Next-line hint (optional, off by default): right-click the FrameBridge icon and tick
  "Next line under the subtitle in the main player (while the second window is open)".
  While the copy window is open, the actor's Video Player then shows the next line, grey, under
  the current subtitle; the sound engineer's copy leaves it out. Export Video made while
  it is on includes that line. The setting is remembered.
- Windows may hide new tray icons under the "^" arrow next to the clock: open the arrow
  and drag the FrameBridge icon onto the taskbar.
- On Windows 7 the copy needs Aero (a Basic/Classic theme shows a black window).

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

SUBTITLES FROM DUBBING SCRIPTS
------------------------------
A dialogue list / dubbing script with timecodes can be used directly: give it the
video's name (film.mkv + film.docx). Lines are shown like SRT with the role as a
prefix. An ordinary subtitle file with the same name takes priority.
Files: DOCX, DOC, XLSX, XLS, ODT, ODS, RTF, TXT, CSV and PDF (also PDFs exported from
Word or a browser). Scanned PDFs are pictures and cannot be read.
Layouts:
- tables with or without a header row; headers in 12 languages, e.g. Start / End /
  Text / Role, Netflix IN-TIMECODE / OUT-TIMECODE / DIALOGUE, ADR cue sheets Cue /
  Character / TC In / TC Out, Rolle / Einsatz, Personnage / Réplique, Personaje /
  Diálogo, Personaggio / Battuta, Postać / Kwestia, Роль / Реплика; in XLSX the
  first sheet with lines is used;
- start and end times, or start only (the line then lasts until the next one);
- takes / loops (Take 12, ANELLO 1, BOUCLE 3) with several lines inside;
- text on the line under the timecode; screenplay layout (role on its own line);
- with an original and a translation column, the translation is shown.
Times: 00:00:01,000 / 00:00:01.000 / 00:00:01 / 01:35, and frames 00:00:01:12 at the
video's frame rate (drop-frame with ;). A broadcast start hour (01:00:00:00 or
10:00:00:00) is removed when the script would otherwise run past the end of the video.
The file check on framebridge.cc shows how a script is read.

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
- Nuendo 15.0.40 itself shows the picture 16:9 with black sides in a small Video Player
  window (the same without FrameBridge).

DOCUMENTATION AND LICENSES
--------------------------
docs\README.txt, docs\COMPATIBILITY.txt, docs\END_USER_LICENSE.txt, docs\LICENSE_AND_NOTICE.txt
