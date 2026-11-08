# Security — what FrameBridge changes on your PC

FrameBridge Beta is installed by `INSTALL.cmd` and removed by `UNINSTALL.cmd`. This page lists exactly what the installer touches, what it never does, and how you can check it yourself. It describes the public release `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip` (SHA-256 below).

## What the installer changes

Only in the Cubase or Nuendo installations you select, and only if the program is recognised as Steinberg Cubase/Nuendo and its video engine is a supported version. Anything else is not offered and not changed.

| Location | Change |
|---|---|
| `<program folder>\Components\videoengine.dll` | Replaced by the FrameBridge video engine. The original is saved first (see below). |
| `<program folder>\Components\MXFHandler\mxfhandler.dll` | Replaced the same way, only in versions that have this file. |
| `<program folder>\_dsreader\` | New folder: the saved original files, FrameBridge's FFmpeg libraries and, in older versions only, copies of some of the program's own video helper files. |
| `%ProgramData%\CubaseNuendoDirectShow\install_state.json` | Small record of what was installed and the SHA-256 of each original, used by `UNINSTALL.cmd`. |

The installer asks for administrator rights (Windows UAC) only because the Steinberg program folder is under `Program Files`.

## What it never does

- No services, scheduled tasks, startup entries, drivers or browser extensions.
- No antivirus or Windows Defender exclusions, no firewall rules, no changes to system settings.
- No registry changes. (`UNINSTALL.cmd` only removes media-type entries that an early pre-release build may have added, and only if they still have exactly that value.)
- No network access: the installer, the FrameBridge DLLs and the bundled FFmpeg libraries do not use the internet. No telemetry, no licence server, no update checks.
- It does not touch your projects, media files, preferences, plug-ins or other programs. Your video and subtitle files are only read.

## How install and uninstall stay safe

- Every original file is copied to `_dsreader` and checked by SHA-256 **before** anything is replaced, and that record is written to disk first. If the installation is interrupted at any point (crash, power loss, closed window), `UNINSTALL.cmd` can always restore the original.
- Files are replaced in one step and checked by SHA-256 after copying.
- `UNINSTALL.cmd` restores the original files byte for byte and checks them again. It refuses to change anything it does not recognise: if a Cubase/Nuendo update has meanwhile installed a new original, uninstall leaves it alone instead of putting an old file back.
- **Updating Cubase/Nuendo:** run `UNINSTALL.cmd` first, then install the Steinberg update, then run `INSTALL.cmd` again. If you update without uninstalling first, the updated program keeps working with its own new video engine, but `INSTALL.cmd` stops because the saved original no longer matches — in that case write to support (address below).

## Local diagnostic log

To help diagnose problems, FrameBridge writes a technical log to `%TEMP%\cubase_dsreader.log` (for example program and media file paths, video format and timing details). It stays on your computer, is never sent anywhere and can be deleted at any time.

## Check it yourself

- **Release file:** `FrameBridge Native Video and Subtitles for Cubase and Nuendo Beta.zip`, SHA-256 `c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50`. In Windows: `certutil -hashfile "<file>.zip" SHA256`. [VirusTotal report](https://www.virustotal.com/gui/file/c804d914c86e2abe7f05476455ae8efb447c6f2a74220bef515af9d266709e50/detection).
- **No network libraries:** any PE viewer (for example `dumpbin /imports` from Visual Studio) shows that none of the DLLs or the EXE in `_runtime` import Windows networking libraries (`ws2_32`, `wininet`, `winhttp`).
- **FFmpeg:** the libraries are built under LGPL 2.1 without network support (`--disable-network`, visible in the build configuration embedded in the DLLs). The exact FFmpeg source and the build recipe are included in the package under `_runtime\ffmpeg\SOURCE`; licences are in `_runtime\ffmpeg\LICENSES`.
- **Installer script:** `_runtime\setup.ps1` is a plain PowerShell script you can read before running it.

## Limits — said honestly

- FrameBridge Beta is **not code-signed** yet, so Windows may show "Unknown publisher", and some heuristic antivirus engines may flag the pattern of replacing a program DLL.
- The FrameBridge engine is closed-source commercial software. There has been no independent security audit; the statements above describe its observable behaviour and can be checked as shown.

## Reporting a problem

Write to **stark622@ukr.net** with your Windows and Cubase/Nuendo version and what happened. Please report security issues privately by email first.
