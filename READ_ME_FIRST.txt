FrameBridge — Native Video for Cubase & Nuendo — Beta 2
==========================================================

WHAT'S NEW IN BETA 2
--------------------
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

UPDATING FROM BETA 1
--------------------
Close Cubase and Nuendo and run INSTALL.cmd from this package. Beta 1 is replaced in place;
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
Recommended order: UNINSTALL.cmd -> update Cubase/Nuendo with the Steinberg installer ->
INSTALL.cmd. INSTALL then backs up the new original files and installs FrameBridge if the
new version is compatible.

VERIFIED VERSIONS
-----------------
Cubase: 8.0.10 and 9.0.0 (LE AI Elements), 10.5.0.68, 11, 12.0.10 / 12.0.51 / 12.0.52,
        13.0.21, 14.0.5 / 14.0.10 / 14.0.20 / 14.0.32 / 14.0.40, 15.0.5 / 15.0.21 / 15.0.30,
        16.0.5
Nuendo: 10, 12.0.52, 13.0.10 / 13.0.50, 14.0.32 / 14.0.40, 15.0.21 / 15.0.30

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

SUBTITLES FROM DUBBING SCRIPTS (PDF, DOCX, TXT, XLSX, CSV)
----------------------------------------------------------
A dialogue list / dubbing script with timecodes and roles can be used directly: give it the
video's name (film.mkv + film.pdf / .docx / .txt / .xlsx / .csv). Lines are shown like SRT
with the role as a prefix. An ordinary subtitle file with the same name takes priority.

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
