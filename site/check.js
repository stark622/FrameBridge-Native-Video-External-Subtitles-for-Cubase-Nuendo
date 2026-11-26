// "Check before you buy": the visitor's own video file or Cubase/Nuendo EXE is read IN THE BROWSER (nothing is uploaded).
// Video: MediaInfo (vendor/mediainfo, loaded only on first use) -> codec/profile/resolution/bit depth -> our verified /
// likely lists + a smoothness estimate from our playback runs (CUB\прогоны FrameBridge) and the PC's GPU decode support.
// Cubase/Nuendo: the version block at the end of the EXE -> verified builds / same engine generation.
(function () {
  var root = document.getElementById('check');
  if (!root) return;
  var LANG = (document.documentElement.lang || 'en').slice(0, 2);

  var T = {
    en: {
      reading: 'Reading the file on your computer…', readFail: 'Could not read this file.', noVideo: 'No video track found in this file.',
      found: 'Found', fb: 'FrameBridge', smooth: 'Playback on', on: { auto: 'this PC', high: 'a powerful PC', mid: 'a mid-range PC', low: 'an old PC' },
      ext: function (e) { return 'Cubase and Nuendo do not accept the extension .' + e + ' even with FrameBridge — rewrap the file into MKV or MP4 (no re-encoding needed).'; },
      verified: 'Verified format — opens on the native video track.',
      likely: 'Likely to play — decoded by the same FFmpeg, but not verified for smooth playback.',
      unknown: 'This codec is not in our tests — FrameBridge may not open it.',
      lv: { smooth: 'Smooth', ok: 'Plays; occasional hitches possible', heavy: 'Opens, but heavy for work' }, tip: 'An H.264 working copy up to 1080p will play smoothly.',
      why: { hw: 'your graphics card decodes this format in hardware', cpu: 'decoded by the processor', heavy: 'a very heavy codec for any processor' },
      hdr: 'HDR is shown in SDR.', vfr: 'Variable frame rate — supported.',
      pc: { auto: 'this PC', high: 'powerful (12+ threads, card from 2020+)', mid: 'mid-range (6–10 threads)', low: 'old (4 threads, card older than 2016)' },
      detected: function (g, c) { return 'detected: ' + g + ', ' + c + ' threads'; }, hidden: 'browser hides the GPU, pick below',
      noTrackOk: 'Verified container — your browser cannot look inside it, but FrameBridge opens it when the video codec is from our lists (usually MPEG-2 or H.264).',
      lnk: function (dir, exe) { return 'This is a shortcut. The program itself is ' + exe + ' in the folder ' + dir + '. To check the exact build, drag that file here: right-click the shortcut → Open file location opens the folder.'; },
      lnkVer: 'version from the shortcut path; the exact build is read only from the exe',
      help: 'Powerful: 12+ threads (Ryzen 5 5600 / Core i5-12400 or newer) and a graphics card from 2020 on (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — it decodes HEVC 10-bit and AV1 itself.\nMid-range: 6–10 threads, card from 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10-bit yes, AV1 by the processor.\nOld: 4 threads (Core i5 of 2nd–7th generation), card older than 2016 (GTX 6xx/7xx/9xx) — HEVC 10-bit and AV1 only by the processor.',
      est: 'Estimate from our playback tests, not a guarantee. The 14-day refund applies.',
      notExe: 'This is not a Cubase or Nuendo program file.',
      subFound: function (k, n, a, b) { return k + ' · ' + n + ' lines · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (current version)', subNext: 'Next update (in testing)',
      subOk: function (n) { return 'Reads it — ' + n + ' lines, shown in the SRT look.'; },
      subBmp: function (n) { return 'Reads it — ' + n + ' picture subtitles; the text is recognised by the Windows OCR as the video loads.'; },
      subNo: 'Does not read this layout.', subNoType: function (k) { return 'Does not read ' + k + ' files.'; }, subNoBoth: 'Not read. Save it as SRT, or send the file to support — we add new layouts.',
      subPdf: 'Reads a PDF like this through the Windows PDF text filter — a browser cannot check that step.',
      subNextOk: function (n) { return 'Reads it — ' + n + ' lines.'; },
      subPair: 'VobSub needs both files: select the .idx and the .sub together.',
      subFirst: 'First lines', subWhere: 'Put the file next to the video under the same name (film.mp4 → film.srt).',
      ver: { verified: 'Verified build — FrameBridge installs.', near: 'Same video engine generation as verified builds — very likely installs. The installer checks it before changing anything.',
             maybe: 'Not tested yet — may work. The installer checks the video engine and changes nothing if it does not fit.', newer: 'Newer than our tests — not verified yet. The installer checks it and changes nothing if it does not fit.',
             old: 'Too old — not supported.' },
    },
    ru: {
      reading: 'Читаю файл на вашем компьютере…', readFail: 'Не удалось прочитать этот файл.', noVideo: 'В файле не найдена видеодорожка.',
      found: 'Найдено', fb: 'FrameBridge', smooth: 'Плавность на', on: { auto: 'этом ПК', high: 'мощном ПК', mid: 'среднем ПК', low: 'старом ПК' },
      ext: function (e) { return 'Расширение .' + e + ' Cubase и Nuendo не принимают даже с FrameBridge — перепакуйте файл в MKV или MP4 (без перекодирования).'; },
      verified: 'Проверенный формат — откроется на штатном видеотреке.',
      likely: 'Скорее всего, играет — декодирует тот же FFmpeg, но плавность не проверялась.',
      unknown: 'Этого кодека нет в наших проверках — FrameBridge может его не открыть.',
      lv: { smooth: 'Плавно', ok: 'Играет, возможны редкие рывки', heavy: 'Откроется, но для работы тяжело' }, tip: 'Рабочая копия H.264 до 1080p будет играть плавно.',
      why: { hw: 'видеокарта декодирует этот формат сама', cpu: 'декодирует процессор', heavy: 'очень тяжёлый кодек для любого процессора' },
      hdr: 'HDR будет показан в SDR.', vfr: 'Переменная частота кадров — поддерживается.', bit: ' бит', fps: ' к/с',
      pc: { auto: 'этот ПК', high: 'мощный (12+ потоков, видеокарта 2020+)', mid: 'средний (6–10 потоков)', low: 'старый (4 потока, видеокарта старше 2016)' },
      detected: function (g, c) { return 'определено: ' + g + ', ' + c + ' потоков'; }, hidden: 'браузер скрыл видеокарту, выберите ниже',
      noTrackOk: 'Проверенный контейнер — заглянуть внутрь браузер не может, но FrameBridge его откроет, если кодек из наших списков (обычно MPEG-2 или H.264).',
      lnk: function (dir, exe) { return 'Это ярлык. Сама программа — ' + exe + ' в папке ' + dir + '. Для проверки точной сборки перетащите сюда этот файл: правый клик по ярлыку → «Расположение файла» откроет папку.'; },
      lnkVer: 'версия по пути ярлыка; точная сборка читается только из самого exe',
      help: 'Мощный: 12+ потоков (Ryzen 5 5600 / Core i5-12400 и новее) и видеокарта 2020 года и новее (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — сама декодирует HEVC 10 бит и AV1.\nСредний: 6–10 потоков, видеокарта 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10 бит да, AV1 процессором.\nСтарый: 4 потока (Core i5 2–7 поколения), видеокарта до 2016 (GTX 6xx/7xx/9xx) — HEVC 10 бит и AV1 только процессором.',
      est: 'Оценка по нашим прогонам воспроизведения, не гарантия. Действует возврат за 14 дней.',
      notExe: 'Это не файл программы Cubase или Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + ruN(n, ['реплика', 'реплики', 'реплик']) + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (текущая версия)', subNext: 'Следующее обновление (в тесте)',
      subOk: function (n) { return 'Прочтёт — ' + ruN(n, ['реплика', 'реплики', 'реплик']) + ', показ как у SRT.'; },
      subBmp: function (n) { return 'Прочтёт — ' + ruN(n, ['субтитр-картинку', 'субтитра-картинки', 'субтитров-картинок']) + '; текст распознаёт OCR Windows при загрузке видео.'; },
      subNo: 'Такую разметку не читает.', subNoType: function (k) { return 'Файлы ' + k + ' не читает.'; }, subNoBoth: 'Не читается. Сохраните как SRT или пришлите файл в поддержку — добавляем новые разметки.',
      subPdf: 'Такой PDF читает через PDF-фильтр Windows — этот шаг в браузере не проверить.',
      subNextOk: function (n) { return 'Прочтёт — ' + ruN(n, ['реплика', 'реплики', 'реплик']) + '.'; },
      subPair: 'Для VobSub нужны оба файла: выберите .idx и .sub вместе.',
      subFirst: 'Первые реплики', subWhere: 'Положите файл рядом с видео под тем же именем (film.mp4 → film.srt).',
      ver: { verified: 'Проверенная сборка — FrameBridge встанет.', near: 'То же поколение видеодвижка, что у проверенных сборок, — встанет с высокой вероятностью. Установщик проверит перед изменениями.',
             maybe: 'Пока не проверялась — может подойти. Установщик проверит видеодвижок и ничего не изменит, если не подходит.', newer: 'Новее наших проверок — пока не проверено. Установщик проверит и ничего не изменит, если не подходит.',
             old: 'Слишком старая версия — не поддерживается.' },
    },
    de: {
      reading: 'Datei wird auf Ihrem Computer gelesen…', readFail: 'Diese Datei konnte nicht gelesen werden.', noVideo: 'In dieser Datei wurde keine Videospur gefunden.',
      found: 'Gefunden', fb: 'FrameBridge', smooth: 'Wiedergabe auf', on: { auto: 'diesem PC', high: 'einem starken PC', mid: 'einem Mittelklasse-PC', low: 'einem alten PC' },
      ext: function (e) { return 'Die Endung .' + e + ' nehmen Cubase und Nuendo auch mit FrameBridge nicht an — packen Sie die Datei in MKV oder MP4 um (ohne Neukodierung).'; },
      verified: 'Geprüftes Format — öffnet sich auf der normalen Videospur.',
      likely: 'Spielt wahrscheinlich — dekodiert vom selben FFmpeg, flüssige Wiedergabe aber nicht geprüft.',
      unknown: 'Dieser Codec ist nicht in unseren Tests — FrameBridge öffnet ihn möglicherweise nicht.',
      lv: { smooth: 'Flüssig', ok: 'Spielt, gelegentliche Ruckler möglich', heavy: 'Öffnet sich, aber zum Arbeiten zu schwer' }, tip: 'Eine H.264-Arbeitskopie bis 1080p spielt flüssig.',
      why: { hw: 'Ihre Grafikkarte dekodiert dieses Format selbst', cpu: 'dekodiert vom Prozessor', heavy: 'ein sehr schwerer Codec für jeden Prozessor' },
      hdr: 'HDR wird in SDR angezeigt.', vfr: 'Variable Bildrate — wird unterstützt.',
      pc: { auto: 'dieser PC', high: 'stark (12+ Threads, Grafikkarte ab 2020)', mid: 'Mittelklasse (6–10 Threads)', low: 'alt (4 Threads, Grafikkarte vor 2016)' },
      detected: function (g, c) { return 'erkannt: ' + g + ', ' + c + ' Threads'; }, hidden: 'Browser verbirgt die Grafikkarte, unten wählen',
      noTrackOk: 'Geprüfter Container — Ihr Browser kann nicht hineinsehen, FrameBridge öffnet ihn aber, wenn der Codec aus unseren Listen stammt (meist MPEG-2 oder H.264).',
      lnk: function (dir, exe) { return 'Das ist eine Verknüpfung. Das Programm selbst ist ' + exe + ' im Ordner ' + dir + '. Für den genauen Build ziehen Sie diese Datei hierher: Rechtsklick auf die Verknüpfung → „Dateipfad öffnen“ öffnet den Ordner.'; },
      lnkVer: 'Version aus dem Pfad der Verknüpfung; den genauen Build liest nur die exe',
      help: 'Stark: 12+ Threads (Ryzen 5 5600 / Core i5-12400 oder neuer) und eine Grafikkarte ab 2020 (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — dekodiert HEVC 10 Bit und AV1 selbst.\nMittelklasse: 6–10 Threads, Grafikkarte von 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10 Bit ja, AV1 per Prozessor.\nAlt: 4 Threads (Core i5 der 2.–7. Generation), Grafikkarte vor 2016 (GTX 6xx/7xx/9xx) — HEVC 10 Bit und AV1 nur per Prozessor.',
      est: 'Schätzung aus unseren Wiedergabetests, keine Garantie. Die 14-Tage-Rückerstattung gilt.',
      notExe: 'Das ist keine Programmdatei von Cubase oder Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + one(n, 'Zeile', 'Zeilen') + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (aktuelle Version)', subNext: 'Nächstes Update (im Test)',
      subOk: function (n) { return 'Liest sie — ' + one(n, 'Zeile', 'Zeilen') + ', im SRT-Look angezeigt.'; },
      subBmp: function (n) { return 'Liest sie — ' + one(n, 'Bilduntertitel', 'Bilduntertitel') + '; den Text erkennt die Windows-OCR beim Laden des Videos.'; },
      subNo: 'Dieses Layout liest sie nicht.', subNoType: function (k) { return k + '-Dateien liest sie nicht.'; }, subNoBoth: 'Wird nicht gelesen. Als SRT speichern oder die Datei an den Support schicken — wir ergänzen neue Layouts.',
      subPdf: 'Ein solches PDF liest sie über den PDF-Textfilter von Windows — diesen Schritt kann ein Browser nicht prüfen.',
      subNextOk: function (n) { return 'Liest sie — ' + one(n, 'Zeile', 'Zeilen') + '.'; },
      subPair: 'VobSub braucht beide Dateien: .idx und .sub zusammen auswählen.',
      subFirst: 'Erste Zeilen', subWhere: 'Legen Sie die Datei mit demselben Namen neben das Video (film.mp4 → film.srt).',
      ver: { verified: 'Geprüfter Build — FrameBridge lässt sich installieren.', near: 'Gleiche Videoengine-Generation wie geprüfte Builds — installiert sich sehr wahrscheinlich. Der Installer prüft das, bevor er etwas ändert.',
             maybe: 'Noch nicht getestet — kann funktionieren. Der Installer prüft die Videoengine und ändert nichts, wenn sie nicht passt.', newer: 'Neuer als unsere Tests — noch nicht geprüft. Der Installer prüft das und ändert nichts, wenn es nicht passt.',
             old: 'Zu alt — nicht unterstützt.' },
    },
    fr: {
      reading: 'Lecture du fichier sur votre ordinateur…', readFail: 'Impossible de lire ce fichier.', noVideo: 'Aucune piste vidéo trouvée dans ce fichier.',
      found: 'Détecté', fb: 'FrameBridge', smooth: 'Lecture sur', on: { auto: 'ce PC', high: 'un PC puissant', mid: 'un PC milieu de gamme', low: 'un PC ancien' },
      ext: function (e) { return 'Cubase et Nuendo n’acceptent pas l’extension .' + e + ', même avec FrameBridge — remuxez le fichier en MKV ou MP4 (sans réencodage).'; },
      verified: 'Format vérifié — s’ouvre sur la piste vidéo native.',
      likely: 'Devrait être lu — décodé par le même FFmpeg, mais la fluidité n’a pas été vérifiée.',
      unknown: 'Ce codec n’est pas dans nos tests — FrameBridge risque de ne pas l’ouvrir.',
      lv: { smooth: 'Fluide', ok: 'Lu, à-coups occasionnels possibles', heavy: 'S’ouvre, mais trop lourd pour travailler' }, tip: 'Une copie de travail H.264 jusqu’en 1080p sera fluide.',
      why: { hw: 'votre carte graphique décode ce format elle-même', cpu: 'décodé par le processeur', heavy: 'un codec très lourd pour tout processeur' },
      hdr: 'Le HDR est affiché en SDR.', vfr: 'Fréquence d’images variable — prise en charge.',
      pc: { auto: 'ce PC', high: 'puissant (12+ threads, carte 2020+)', mid: 'milieu de gamme (6–10 threads)', low: 'ancien (4 threads, carte avant 2016)' },
      detected: function (g, c) { return 'détecté : ' + g + ', ' + c + ' threads'; }, hidden: 'le navigateur masque la carte, choisissez ci-dessous',
      noTrackOk: 'Conteneur vérifié — votre navigateur ne peut pas l’analyser, mais FrameBridge l’ouvre si le codec figure dans nos listes (le plus souvent MPEG-2 ou H.264).',
      lnk: function (dir, exe) { return 'C’est un raccourci. Le programme lui-même est ' + exe + ' dans le dossier ' + dir + '. Pour vérifier la build exacte, glissez ce fichier ici : clic droit sur le raccourci → « Ouvrir l’emplacement du fichier » ouvre le dossier.'; },
      lnkVer: 'version d’après le chemin du raccourci ; la build exacte se lit seulement dans l’exe',
      help: 'Puissant : 12+ threads (Ryzen 5 5600 / Core i5-12400 ou plus récent) et une carte graphique de 2020 ou plus (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — elle décode elle-même HEVC 10 bits et AV1.\nMilieu de gamme : 6–10 threads, carte de 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10 bits oui, AV1 par le processeur.\nAncien : 4 threads (Core i5 de 2e à 7e génération), carte d’avant 2016 (GTX 6xx/7xx/9xx) — HEVC 10 bits et AV1 uniquement par le processeur.',
      est: 'Estimation tirée de nos tests de lecture, sans garantie. Le remboursement sous 14 jours s’applique.',
      notExe: 'Ce n’est pas un fichier programme de Cubase ou Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + one(n, 'réplique', 'répliques') + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (version actuelle)', subNext: 'Prochaine mise à jour (en test)',
      subOk: function (n) { return 'Lu — ' + one(n, 'réplique', 'répliques') + ', affichées comme du SRT.'; },
      subBmp: function (n) { return 'Lu — ' + one(n, 'sous-titre image', 'sous-titres image') + ' ; le texte est reconnu par l’OCR de Windows au chargement de la vidéo.'; },
      subNo: 'Cette mise en page n’est pas lue.', subNoType: function (k) { return 'Les fichiers ' + k + ' ne sont pas lus.'; }, subNoBoth: 'Non lu. Enregistrez-le en SRT ou envoyez le fichier au support — nous ajoutons de nouvelles mises en page.',
      subPdf: 'Un tel PDF est lu via le filtre de texte PDF de Windows — un navigateur ne peut pas vérifier cette étape.',
      subNextOk: function (n) { return 'Lu — ' + one(n, 'réplique', 'répliques') + '.'; },
      subPair: 'VobSub a besoin des deux fichiers : sélectionnez le .idx et le .sub ensemble.',
      subFirst: 'Premières répliques', subWhere: 'Placez le fichier à côté de la vidéo, sous le même nom (film.mp4 → film.srt).',
      ver: { verified: 'Build vérifiée — FrameBridge s’installe.', near: 'Même génération de moteur vidéo que les builds vérifiées — s’installera très probablement. L’installateur vérifie avant toute modification.',
             maybe: 'Pas encore testée — peut fonctionner. L’installateur vérifie le moteur vidéo et ne change rien s’il ne convient pas.', newer: 'Plus récente que nos tests — pas encore vérifiée. L’installateur vérifie et ne change rien si elle ne convient pas.',
             old: 'Trop ancienne — non prise en charge.' },
    },
    es: {
      reading: 'Leyendo el archivo en tu ordenador…', readFail: 'No se pudo leer este archivo.', noVideo: 'No se encontró ninguna pista de vídeo en este archivo.',
      found: 'Detectado', fb: 'FrameBridge', smooth: 'Reproducción en', on: { auto: 'este PC', high: 'un PC potente', mid: 'un PC de gama media', low: 'un PC antiguo' },
      ext: function (e) { return 'Cubase y Nuendo no aceptan la extensión .' + e + ' ni siquiera con FrameBridge — reempaqueta el archivo en MKV o MP4 (sin recodificar).'; },
      verified: 'Formato verificado — se abre en la pista de vídeo nativa.',
      likely: 'Probablemente se reproduce — lo decodifica el mismo FFmpeg, pero la fluidez no está verificada.',
      unknown: 'Este códec no está en nuestras pruebas — es posible que FrameBridge no lo abra.',
      lv: { smooth: 'Fluido', ok: 'Se reproduce, con algún tirón ocasional', heavy: 'Se abre, pero es pesado para trabajar' }, tip: 'Una copia de trabajo H.264 de hasta 1080p irá fluida.',
      why: { hw: 'tu tarjeta gráfica decodifica este formato por sí misma', cpu: 'lo decodifica el procesador', heavy: 'un códec muy pesado para cualquier procesador' },
      hdr: 'El HDR se muestra en SDR.', vfr: 'Velocidad de fotogramas variable — compatible.',
      pc: { auto: 'este PC', high: 'potente (12+ hilos, gráfica de 2020+)', mid: 'gama media (6–10 hilos)', low: 'antiguo (4 hilos, gráfica anterior a 2016)' },
      detected: function (g, c) { return 'detectado: ' + g + ', ' + c + ' hilos'; }, hidden: 'el navegador oculta la gráfica, elige abajo',
      noTrackOk: 'Contenedor verificado — tu navegador no puede mirar dentro, pero FrameBridge lo abre si el códec está en nuestras listas (normalmente MPEG-2 o H.264).',
      lnk: function (dir, exe) { return 'Esto es un acceso directo. El programa en sí es ' + exe + ' en la carpeta ' + dir + '. Para comprobar la versión exacta, arrastra ese archivo aquí: clic derecho en el acceso directo → «Abrir ubicación del archivo» abre la carpeta.'; },
      lnkVer: 'versión según la ruta del acceso directo; la compilación exacta solo se lee del exe',
      help: 'Potente: 12+ hilos (Ryzen 5 5600 / Core i5-12400 o posterior) y una tarjeta gráfica de 2020 en adelante (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — decodifica por sí misma HEVC de 10 bits y AV1.\nGama media: 6–10 hilos, gráfica de 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC de 10 bits sí, AV1 por el procesador.\nAntiguo: 4 hilos (Core i5 de 2.ª a 7.ª generación), gráfica anterior a 2016 (GTX 6xx/7xx/9xx) — HEVC de 10 bits y AV1 solo por el procesador.',
      est: 'Estimación basada en nuestras pruebas de reproducción, no es una garantía. Se aplica el reembolso de 14 días.',
      notExe: 'Esto no es un archivo de programa de Cubase o Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + one(n, 'línea', 'líneas') + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (versión actual)', subNext: 'Próxima actualización (en pruebas)',
      subOk: function (n) { return 'Lo lee — ' + one(n, 'línea', 'líneas') + ', con aspecto SRT.'; },
      subBmp: function (n) { return 'Lo lee — ' + one(n, 'subtítulo de imagen', 'subtítulos de imagen') + '; el texto lo reconoce el OCR de Windows al cargar el vídeo.'; },
      subNo: 'No lee este formato de guion.', subNoType: function (k) { return 'No lee archivos ' + k + '.'; }, subNoBoth: 'No se lee. Guárdalo como SRT o envía el archivo a soporte — añadimos nuevos formatos.',
      subPdf: 'Un PDF así lo lee mediante el filtro de texto PDF de Windows — un navegador no puede comprobar ese paso.',
      subNextOk: function (n) { return 'Lo lee — ' + one(n, 'línea', 'líneas') + '.'; },
      subPair: 'VobSub necesita los dos archivos: selecciona el .idx y el .sub juntos.',
      subFirst: 'Primeras líneas', subWhere: 'Coloca el archivo junto al vídeo con el mismo nombre (film.mp4 → film.srt).',
      ver: { verified: 'Versión verificada — FrameBridge se instala.', near: 'Misma generación de motor de vídeo que las versiones verificadas — muy probablemente se instala. El instalador lo comprueba antes de cambiar nada.',
             maybe: 'Aún no probada — puede funcionar. El instalador comprueba el motor de vídeo y no cambia nada si no encaja.', newer: 'Más nueva que nuestras pruebas — aún no verificada. El instalador lo comprueba y no cambia nada si no encaja.',
             old: 'Demasiado antigua — no compatible.' },
    },
    it: {
      reading: 'Lettura del file sul tuo computer…', readFail: 'Impossibile leggere questo file.', noVideo: 'Nessuna traccia video trovata in questo file.',
      found: 'Rilevato', fb: 'FrameBridge', smooth: 'Riproduzione su', on: { auto: 'questo PC', high: 'un PC potente', mid: 'un PC di fascia media', low: 'un PC datato' },
      ext: function (e) { return 'Cubase e Nuendo non accettano l’estensione .' + e + ' nemmeno con FrameBridge — rimpacchetta il file in MKV o MP4 (senza ricodifica).'; },
      verified: 'Formato verificato — si apre sulla traccia video nativa.',
      likely: 'Probabilmente si riproduce — decodificato dallo stesso FFmpeg, ma la fluidità non è verificata.',
      unknown: 'Questo codec non è nei nostri test — FrameBridge potrebbe non aprirlo.',
      lv: { smooth: 'Fluido', ok: 'Si riproduce, possibili scatti occasionali', heavy: 'Si apre, ma è pesante per lavorare' }, tip: 'Una copia di lavoro H.264 fino a 1080p sarà fluida.',
      why: { hw: 'la tua scheda video decodifica questo formato da sola', cpu: 'decodificato dal processore', heavy: 'un codec molto pesante per qualsiasi processore' },
      hdr: 'L’HDR viene mostrato in SDR.', vfr: 'Frame rate variabile — supportato.',
      pc: { auto: 'questo PC', high: 'potente (12+ thread, scheda 2020+)', mid: 'fascia media (6–10 thread)', low: 'datato (4 thread, scheda prima del 2016)' },
      detected: function (g, c) { return 'rilevato: ' + g + ', ' + c + ' thread'; }, hidden: 'il browser nasconde la scheda, scegli sotto',
      noTrackOk: 'Contenitore verificato — il browser non può guardarci dentro, ma FrameBridge lo apre se il codec è nelle nostre liste (di solito MPEG-2 o H.264).',
      lnk: function (dir, exe) { return 'Questo è un collegamento. Il programma vero e proprio è ' + exe + ' nella cartella ' + dir + '. Per controllare la build esatta, trascina qui quel file: clic destro sul collegamento → «Apri percorso file» apre la cartella.'; },
      lnkVer: 'versione dal percorso del collegamento; la build esatta si legge solo dall’exe',
      help: 'Potente: 12+ thread (Ryzen 5 5600 / Core i5-12400 o più recente) e una scheda video dal 2020 in poi (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — decodifica da sola HEVC 10 bit e AV1.\nFascia media: 6–10 thread, scheda del 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10 bit sì, AV1 tramite processore.\nDatato: 4 thread (Core i5 di 2ª–7ª generazione), scheda precedente al 2016 (GTX 6xx/7xx/9xx) — HEVC 10 bit e AV1 solo tramite processore.',
      est: 'Stima basata sui nostri test di riproduzione, non una garanzia. Vale il rimborso entro 14 giorni.',
      notExe: 'Questo non è un file di programma di Cubase o Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + one(n, 'battuta', 'battute') + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (versione attuale)', subNext: 'Prossimo aggiornamento (in test)',
      subOk: function (n) { return 'Lo legge — ' + one(n, 'battuta', 'battute') + ', con aspetto SRT.'; },
      subBmp: function (n) { return 'Lo legge — ' + one(n, 'sottotitolo immagine', 'sottotitoli immagine') + '; il testo viene riconosciuto dall’OCR di Windows al caricamento del video.'; },
      subNo: 'Non legge questo layout.', subNoType: function (k) { return 'Non legge i file ' + k + '.'; }, subNoBoth: 'Non viene letto. Salvalo come SRT o invia il file al supporto — aggiungiamo nuovi layout.',
      subPdf: 'Un PDF così lo legge tramite il filtro di testo PDF di Windows — un browser non può verificare questo passaggio.',
      subNextOk: function (n) { return 'Lo legge — ' + one(n, 'battuta', 'battute') + '.'; },
      subPair: 'VobSub richiede entrambi i file: seleziona insieme .idx e .sub.',
      subFirst: 'Prime battute', subWhere: 'Metti il file accanto al video con lo stesso nome (film.mp4 → film.srt).',
      ver: { verified: 'Build verificata — FrameBridge si installa.', near: 'Stessa generazione di motore video delle build verificate — molto probabilmente si installa. L’installer controlla prima di modificare qualcosa.',
             maybe: 'Non ancora testata — potrebbe funzionare. L’installer controlla il motore video e non cambia nulla se non è adatto.', newer: 'Più recente dei nostri test — non ancora verificata. L’installer controlla e non cambia nulla se non è adatta.',
             old: 'Troppo vecchia — non supportata.' },
    },
    pt: {
      reading: 'Lendo o arquivo no seu computador…', readFail: 'Não foi possível ler este arquivo.', noVideo: 'Nenhuma faixa de vídeo encontrada neste arquivo.',
      found: 'Detectado', fb: 'FrameBridge', smooth: 'Reprodução em', on: { auto: 'este PC', high: 'um PC potente', mid: 'um PC intermediário', low: 'um PC antigo' },
      ext: function (e) { return 'O Cubase e o Nuendo não aceitam a extensão .' + e + ' nem com o FrameBridge — reempacote o arquivo em MKV ou MP4 (sem recodificar).'; },
      verified: 'Formato verificado — abre na faixa de vídeo nativa.',
      likely: 'Provavelmente reproduz — decodificado pelo mesmo FFmpeg, mas a fluidez não foi verificada.',
      unknown: 'Este codec não está nos nossos testes — o FrameBridge pode não abri-lo.',
      lv: { smooth: 'Fluido', ok: 'Reproduz, com engasgos ocasionais possíveis', heavy: 'Abre, mas é pesado para trabalhar' }, tip: 'Uma cópia de trabalho H.264 até 1080p rodará fluida.',
      why: { hw: 'sua placa de vídeo decodifica este formato sozinha', cpu: 'decodificado pelo processador', heavy: 'um codec muito pesado para qualquer processador' },
      hdr: 'O HDR é exibido em SDR.', vfr: 'Taxa de quadros variável — suportada.',
      pc: { auto: 'este PC', high: 'potente (12+ threads, placa de 2020+)', mid: 'intermediário (6–10 threads)', low: 'antigo (4 threads, placa anterior a 2016)' },
      detected: function (g, c) { return 'detectado: ' + g + ', ' + c + ' threads'; }, hidden: 'o navegador oculta a placa, escolha abaixo',
      noTrackOk: 'Contêiner verificado — o navegador não consegue ver o conteúdo, mas o FrameBridge o abre se o codec estiver nas nossas listas (geralmente MPEG-2 ou H.264).',
      lnk: function (dir, exe) { return 'Isto é um atalho. O programa em si é ' + exe + ' na pasta ' + dir + '. Para verificar a build exata, arraste esse arquivo para cá: clique com o botão direito no atalho → “Abrir local do arquivo” abre a pasta.'; },
      lnkVer: 'versão pelo caminho do atalho; a build exata só é lida do exe',
      help: 'Potente: 12+ threads (Ryzen 5 5600 / Core i5-12400 ou mais novo) e uma placa de vídeo de 2020 em diante (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — decodifica sozinha HEVC 10 bits e AV1.\nIntermediário: 6–10 threads, placa de 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10 bits sim, AV1 pelo processador.\nAntigo: 4 threads (Core i5 da 2ª à 7ª geração), placa anterior a 2016 (GTX 6xx/7xx/9xx) — HEVC 10 bits e AV1 só pelo processador.',
      est: 'Estimativa a partir dos nossos testes de reprodução, sem garantia. Vale o reembolso em 14 dias.',
      notExe: 'Este não é um arquivo de programa do Cubase ou do Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + one(n, 'fala', 'falas') + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (versão atual)', subNext: 'Próxima atualização (em teste)',
      subOk: function (n) { return 'Lê — ' + one(n, 'fala', 'falas') + ', com visual de SRT.'; },
      subBmp: function (n) { return 'Lê — ' + one(n, 'legenda em imagem', 'legendas em imagem') + '; o texto é reconhecido pelo OCR do Windows ao carregar o vídeo.'; },
      subNo: 'Não lê este layout.', subNoType: function (k) { return 'Não lê arquivos ' + k + '.'; }, subNoBoth: 'Não é lido. Salve como SRT ou envie o arquivo ao suporte — adicionamos novos layouts.',
      subPdf: 'Um PDF assim é lido pelo filtro de texto PDF do Windows — um navegador não consegue verificar essa etapa.',
      subNextOk: function (n) { return 'Lê — ' + one(n, 'fala', 'falas') + '.'; },
      subPair: 'O VobSub precisa dos dois arquivos: selecione o .idx e o .sub juntos.',
      subFirst: 'Primeiras falas', subWhere: 'Coloque o arquivo ao lado do vídeo com o mesmo nome (film.mp4 → film.srt).',
      ver: { verified: 'Build verificada — o FrameBridge instala.', near: 'Mesma geração de motor de vídeo das builds verificadas — muito provavelmente instala. O instalador verifica antes de alterar qualquer coisa.',
             maybe: 'Ainda não testada — pode funcionar. O instalador verifica o motor de vídeo e não altera nada se não servir.', newer: 'Mais nova que os nossos testes — ainda não verificada. O instalador verifica e não altera nada se não servir.',
             old: 'Antiga demais — não suportada.' },
    },
    pl: {
      reading: 'Czytam plik na Twoim komputerze…', readFail: 'Nie udało się odczytać tego pliku.', noVideo: 'W tym pliku nie znaleziono ścieżki wideo.',
      found: 'Wykryto', fb: 'FrameBridge', smooth: 'Odtwarzanie na', on: { auto: 'tym PC', high: 'mocnym PC', mid: 'średnim PC', low: 'starym PC' },
      ext: function (e) { return 'Cubase i Nuendo nie przyjmują rozszerzenia .' + e + ' nawet z FrameBridge — przepakuj plik do MKV lub MP4 (bez ponownego kodowania).'; },
      verified: 'Sprawdzony format — otworzy się na zwykłej ścieżce wideo.',
      likely: 'Raczej zagra — dekoduje ten sam FFmpeg, ale płynności nie sprawdzaliśmy.',
      unknown: 'Tego kodeka nie ma w naszych testach — FrameBridge może go nie otworzyć.',
      lv: { smooth: 'Płynnie', ok: 'Gra, możliwe rzadkie przycięcia', heavy: 'Otworzy się, ale do pracy za ciężko' }, tip: 'Kopia robocza H.264 do 1080p będzie grać płynnie.',
      why: { hw: 'karta graficzna sama dekoduje ten format', cpu: 'dekoduje procesor', heavy: 'bardzo ciężki kodek dla każdego procesora' },
      hdr: 'HDR będzie pokazany w SDR.', vfr: 'Zmienna liczba klatek — obsługiwana.',
      pc: { auto: 'ten PC', high: 'mocny (12+ wątków, karta z 2020+)', mid: 'średni (6–10 wątków)', low: 'stary (4 wątki, karta sprzed 2016)' },
      detected: function (g, c) { return 'wykryto: ' + g + ', wątki: ' + c; }, hidden: 'przeglądarka ukrywa kartę, wybierz poniżej',
      noTrackOk: 'Sprawdzony kontener — przeglądarka nie zajrzy do środka, ale FrameBridge go otworzy, jeśli kodek jest z naszych list (zwykle MPEG-2 lub H.264).',
      lnk: function (dir, exe) { return 'To skrót. Sam program to ' + exe + ' w folderze ' + dir + '. Aby sprawdzić dokładną wersję, przeciągnij tutaj ten plik: prawy klik na skrócie → „Otwórz lokalizację pliku” otwiera folder.'; },
      lnkVer: 'wersja ze ścieżki skrótu; dokładny build odczytuje się tylko z exe',
      help: 'Mocny: 12+ wątków (Ryzen 5 5600 / Core i5-12400 lub nowszy) i karta graficzna z 2020 roku lub nowsza (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — sama dekoduje HEVC 10-bit i AV1.\nŚredni: 6–10 wątków, karta z lat 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10-bit tak, AV1 procesorem.\nStary: 4 wątki (Core i5 2.–7. generacji), karta sprzed 2016 (GTX 6xx/7xx/9xx) — HEVC 10-bit i AV1 tylko procesorem.',
      est: 'Szacunek na podstawie naszych testów odtwarzania, nie gwarancja. Obowiązuje zwrot w ciągu 14 dni.',
      notExe: 'To nie jest plik programu Cubase ani Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + plN(n, ['kwestia', 'kwestie', 'kwestii']) + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (obecna wersja)', subNext: 'Następna aktualizacja (w testach)',
      subOk: function (n) { return 'Odczyta — ' + plN(n, ['kwestia', 'kwestie', 'kwestii']) + ', wyglądają jak SRT.'; },
      subBmp: function (n) { return 'Odczyta — napisy-obrazki: ' + n + '; tekst rozpoznaje OCR Windows przy wczytywaniu wideo.'; },
      subNo: 'Takiego układu nie czyta.', subNoType: function (k) { return 'Plików ' + k + ' nie czyta.'; }, subNoBoth: 'Nie jest odczytywany. Zapisz jako SRT albo wyślij plik do wsparcia — dodajemy nowe układy.',
      subPdf: 'Taki PDF czyta przez filtr tekstu PDF systemu Windows — przeglądarka nie sprawdzi tego kroku.',
      subNextOk: function (n) { return 'Odczyta — ' + plN(n, ['kwestia', 'kwestie', 'kwestii']) + '.'; },
      subPair: 'VobSub wymaga obu plików: wybierz razem .idx i .sub.',
      subFirst: 'Pierwsze kwestie', subWhere: 'Połóż plik obok wideo pod tą samą nazwą (film.mp4 → film.srt).',
      ver: { verified: 'Sprawdzony build — FrameBridge się zainstaluje.', near: 'Ta sama generacja silnika wideo co sprawdzone buildy — zainstaluje się z dużym prawdopodobieństwem. Instalator sprawdzi to przed zmianami.',
             maybe: 'Jeszcze nie testowany — może zadziałać. Instalator sprawdzi silnik wideo i niczego nie zmieni, jeśli nie pasuje.', newer: 'Nowszy niż nasze testy — jeszcze nie sprawdzony. Instalator sprawdzi i niczego nie zmieni, jeśli nie pasuje.',
             old: 'Zbyt stara wersja — nieobsługiwana.' },
    },
    tr: {
      reading: 'Dosya bilgisayarınızda okunuyor…', readFail: 'Bu dosya okunamadı.', noVideo: 'Bu dosyada video izi bulunamadı.',
      found: 'Bulunan', fb: 'FrameBridge', smooth: 'Oynatma:', on: { auto: 'bu PC', high: 'güçlü PC', mid: 'orta seviye PC', low: 'eski PC' },
      ext: function (e) { return 'Cubase ve Nuendo .' + e + ' uzantısını FrameBridge ile de kabul etmez — dosyayı MKV veya MP4 olarak yeniden paketleyin (yeniden kodlama gerekmez).'; },
      verified: 'Doğrulanmış format — yerel video izinde açılır.',
      likely: 'Büyük olasılıkla oynar — aynı FFmpeg çözer, ancak akıcılık doğrulanmadı.',
      unknown: 'Bu codec testlerimizde yok — FrameBridge açamayabilir.',
      lv: { smooth: 'Akıcı', ok: 'Oynar, ara sıra takılma olabilir', heavy: 'Açılır, ama çalışmak için ağır' }, tip: '1080p’ye kadar bir H.264 çalışma kopyası akıcı oynar.',
      why: { hw: 'ekran kartınız bu formatı kendisi çözer', cpu: 'işlemci çözer', heavy: 'her işlemci için çok ağır bir codec' },
      hdr: 'HDR, SDR olarak gösterilir.', vfr: 'Değişken kare hızı — desteklenir.',
      pc: { auto: 'bu PC', high: 'güçlü (12+ iş parçacığı, 2020+ kart)', mid: 'orta seviye (6–10 iş parçacığı)', low: 'eski (4 iş parçacığı, 2016 öncesi kart)' },
      detected: function (g, c) { return 'algılandı: ' + g + ', ' + c + ' iş parçacığı'; }, hidden: 'tarayıcı kartı gizliyor, aşağıdan seçin',
      noTrackOk: 'Doğrulanmış kapsayıcı — tarayıcınız içine bakamıyor, ancak codec listelerimizdeyse (genelde MPEG-2 veya H.264) FrameBridge açar.',
      lnk: function (dir, exe) { return 'Bu bir kısayol. Programın kendisi ' + dir + ' klasöründeki ' + exe + ' dosyasıdır. Tam sürümü kontrol etmek için o dosyayı buraya sürükleyin: kısayola sağ tık → “Dosya konumunu aç” klasörü açar.'; },
      lnkVer: 'sürüm kısayol yolundan; tam derleme yalnızca exe’den okunur',
      help: 'Güçlü: 12+ iş parçacığı (Ryzen 5 5600 / Core i5-12400 veya daha yeni) ve 2020 ve sonrası ekran kartı (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — HEVC 10 bit ve AV1’i kendisi çözer.\nOrta seviye: 6–10 iş parçacığı, 2016–2019 kartı (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10 bit evet, AV1 işlemciyle.\nEski: 4 iş parçacığı (2.–7. nesil Core i5), 2016 öncesi kart (GTX 6xx/7xx/9xx) — HEVC 10 bit ve AV1 yalnızca işlemciyle.',
      est: 'Oynatma testlerimize dayalı tahmin, garanti değildir. 14 günlük iade geçerlidir.',
      notExe: 'Bu bir Cubase veya Nuendo program dosyası değil.',
      subFound: function (k, n, a, b) { return k + ' · ' + n + ' satır · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (mevcut sürüm)', subNext: 'Sonraki güncelleme (testte)',
      subOk: function (n) { return 'Okur — ' + n + ' satır, SRT görünümünde.'; },
      subBmp: function (n) { return 'Okur — ' + n + ' görüntü altyazısı; metni video yüklenirken Windows OCR tanır.'; },
      subNo: 'Bu düzeni okumaz.', subNoType: function (k) { return k + ' dosyalarını okumaz.'; }, subNoBoth: 'Okunmaz. SRT olarak kaydedin veya dosyayı desteğe gönderin — yeni düzenler ekliyoruz.',
      subPdf: 'Böyle bir PDF’i Windows PDF metin filtresiyle okur — bir tarayıcı bu adımı kontrol edemez.',
      subNextOk: function (n) { return 'Okur — ' + n + ' satır.'; },
      subPair: 'VobSub için iki dosya da gerekir: .idx ve .sub dosyalarını birlikte seçin.',
      subFirst: 'İlk satırlar', subWhere: 'Dosyayı aynı adla videonun yanına koyun (film.mp4 → film.srt).',
      ver: { verified: 'Doğrulanmış sürüm — FrameBridge kurulur.', near: 'Doğrulanmış sürümlerle aynı video motoru nesli — büyük olasılıkla kurulur. Yükleyici bir şey değiştirmeden önce kontrol eder.',
             maybe: 'Henüz test edilmedi — çalışabilir. Yükleyici video motorunu kontrol eder, uymazsa hiçbir şeyi değiştirmez.', newer: 'Testlerimizden daha yeni — henüz doğrulanmadı. Yükleyici kontrol eder, uymazsa hiçbir şeyi değiştirmez.',
             old: 'Çok eski — desteklenmiyor.' },
    },
    uk: {
      reading: 'Читаю файл на вашому комп’ютері…', readFail: 'Не вдалося прочитати цей файл.', noVideo: 'У файлі не знайдено відеодоріжку.',
      found: 'Знайдено', fb: 'FrameBridge', smooth: 'Плавність на', on: { auto: 'цьому ПК', high: 'потужному ПК', mid: 'середньому ПК', low: 'старому ПК' },
      ext: function (e) { return 'Розширення .' + e + ' Cubase і Nuendo не приймають навіть із FrameBridge — перепакуйте файл у MKV або MP4 (без перекодування).'; },
      verified: 'Перевірений формат — відкриється на штатній відеодоріжці.',
      likely: 'Найімовірніше, грає — декодує той самий FFmpeg, але плавність не перевірялася.',
      unknown: 'Цього кодека немає в наших перевірках — FrameBridge може його не відкрити.',
      lv: { smooth: 'Плавно', ok: 'Грає, можливі рідкісні ривки', heavy: 'Відкриється, але для роботи важко' }, tip: 'Робоча копія H.264 до 1080p гратиме плавно.',
      why: { hw: 'відеокарта декодує цей формат сама', cpu: 'декодує процесор', heavy: 'дуже важкий кодек для будь-якого процесора' },
      hdr: 'HDR буде показано в SDR.', vfr: 'Змінна частота кадрів — підтримується.', bit: ' біт', fps: ' к/с',
      pc: { auto: 'цей ПК', high: 'потужний (12+ потоків, відеокарта 2020+)', mid: 'середній (6–10 потоків)', low: 'старий (4 потоки, відеокарта старша за 2016)' },
      detected: function (g, c) { return 'визначено: ' + g + ', потоків: ' + c; }, hidden: 'браузер приховав відеокарту, оберіть нижче',
      noTrackOk: 'Перевірений контейнер — зазирнути всередину браузер не може, але FrameBridge його відкриє, якщо кодек із наших списків (зазвичай MPEG-2 або H.264).',
      lnk: function (dir, exe) { return 'Це ярлик. Сама програма — ' + exe + ' у папці ' + dir + '. Для перевірки точної збірки перетягніть сюди цей файл: правий клік по ярлику → «Розташування файлу» відкриє папку.'; },
      lnkVer: 'версія за шляхом ярлика; точна збірка читається лише із самого exe',
      help: 'Потужний: 12+ потоків (Ryzen 5 5600 / Core i5-12400 і новіші) і відеокарта 2020 року й новіша (GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — сама декодує HEVC 10 біт і AV1.\nСередній: 6–10 потоків, відеокарта 2016–2019 (GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10 біт так, AV1 процесором.\nСтарий: 4 потоки (Core i5 2–7 покоління), відеокарта до 2016 (GTX 6xx/7xx/9xx) — HEVC 10 біт і AV1 лише процесором.',
      est: 'Оцінка за нашими прогонами відтворення, не гарантія. Діє повернення коштів протягом 14 днів.',
      notExe: 'Це не файл програми Cubase або Nuendo.',
      subFound: function (k, n, a, b) { return k + ' · ' + ruN(n, ['репліка', 'репліки', 'реплік']) + ' · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (поточна версія)', subNext: 'Наступне оновлення (у тесті)',
      subOk: function (n) { return 'Прочитає — ' + ruN(n, ['репліка', 'репліки', 'реплік']) + ', показ як у SRT.'; },
      subBmp: function (n) { return 'Прочитає — ' + ruN(n, ['субтитр-картинку', 'субтитри-картинки', 'субтитрів-картинок']) + '; текст розпізнає OCR Windows під час завантаження відео.'; },
      subNo: 'Таку розмітку не читає.', subNoType: function (k) { return 'Файли ' + k + ' не читає.'; }, subNoBoth: 'Не читається. Збережіть як SRT або надішліть файл у підтримку — додаємо нові розмітки.',
      subPdf: 'Такий PDF читає через PDF-фільтр Windows — цей крок у браузері не перевірити.',
      subNextOk: function (n) { return 'Прочитає — ' + ruN(n, ['репліка', 'репліки', 'реплік']) + '.'; },
      subPair: 'Для VobSub потрібні обидва файли: оберіть .idx і .sub разом.',
      subFirst: 'Перші репліки', subWhere: 'Покладіть файл поруч із відео під тим самим ім’ям (film.mp4 → film.srt).',
      ver: { verified: 'Перевірена збірка — FrameBridge встановиться.', near: 'Те саме покоління відеорушія, що й у перевірених збірок, — встановиться з високою ймовірністю. Інсталятор перевірить перед змінами.',
             maybe: 'Ще не перевірялася — може підійти. Інсталятор перевірить відеорушій і нічого не змінить, якщо не підходить.', newer: 'Новіша за наші перевірки — ще не перевірено. Інсталятор перевірить і нічого не змінить, якщо не підходить.',
             old: 'Надто стара версія — не підтримується.' },
    },
    ja: {
      reading: 'お使いのコンピューターでファイルを読み込んでいます…', readFail: 'このファイルを読み込めませんでした。', noVideo: 'このファイルにビデオトラックが見つかりません。',
      found: '検出結果', fb: 'FrameBridge', smooth: '再生', on: { auto: 'このPC', high: '高性能PC', mid: 'ミドルクラスPC', low: '古いPC' },
      ext: function (e) { return '拡張子 .' + e + ' は FrameBridge を使っても Cubase / Nuendo が受け付けません。MKV または MP4 に再パッケージしてください（再エンコード不要）。'; },
      verified: '検証済みフォーマット — 標準のビデオトラックで開けます。',
      likely: 'おそらく再生できます — 同じ FFmpeg でデコードしますが、滑らかさは未検証です。',
      unknown: 'このコーデックは当社のテストにありません — FrameBridge で開けない可能性があります。',
      lv: { smooth: '滑らか', ok: '再生可能、まれにカクつく可能性あり', heavy: '開けるが作業には重い' }, tip: '1080p までの H.264 作業用コピーなら滑らかに再生できます。',
      why: { hw: 'グラフィックカードがこのフォーマットを自らデコードします', cpu: 'プロセッサーでデコード', heavy: 'どのプロセッサーにも非常に重いコーデック' },
      hdr: 'HDR は SDR で表示されます。', vfr: '可変フレームレート — 対応しています。',
      pc: { auto: 'このPC', high: '高性能（12スレッド以上、2020年以降のGPU）', mid: 'ミドルクラス（6～10スレッド）', low: '古い（4スレッド、2016年より前のGPU）' },
      detected: function (g, c) { return '検出: ' + g + '、' + c + ' スレッド'; }, hidden: 'ブラウザーがGPUを隠しています。下で選択',
      noTrackOk: '検証済みコンテナー — ブラウザーでは中身を確認できませんが、コーデックが当社のリストにあれば（通常 MPEG-2 または H.264）FrameBridge で開けます。',
      lnk: function (dir, exe) { return 'これはショートカットです。プログラム本体はフォルダー ' + dir + ' 内の ' + exe + ' です。正確なビルドを確認するには、そのファイルをここにドラッグしてください。ショートカットを右クリック →「ファイルの場所を開く」でフォルダーが開きます。'; },
      lnkVer: 'ショートカットのパスから判定したバージョン。正確なビルドは exe からのみ読み取れます',
      help: '高性能: 12スレッド以上（Ryzen 5 5600 / Core i5-12400 以降）と2020年以降のグラフィックカード（GeForce RTX 30xx/40xx、Radeon RX 6000+、Intel Arc）— HEVC 10ビットと AV1 をGPU自身がデコード。\nミドルクラス: 6～10スレッド、2016～2019年のカード（GTX 10xx/16xx、RTX 20xx、RX 5xx/5000）— HEVC 10ビットは可、AV1 はプロセッサー。\n古い: 4スレッド（第2～7世代 Core i5）、2016年より前のカード（GTX 6xx/7xx/9xx）— HEVC 10ビットと AV1 はプロセッサーのみ。',
      est: '当社の再生テストに基づく目安で、保証ではありません。14日間の返金が適用されます。',
      notExe: 'これは Cubase または Nuendo のプログラムファイルではありません。',
      subFound: function (k, n, a, b) { return k + ' · ' + n + ' 行 · ' + a + ' – ' + b; },
      subCur: 'FrameBridge（現行バージョン）', subNext: '次回アップデート（テスト中）',
      subOk: function (n) { return '読み込めます — ' + n + ' 行、SRT の見た目で表示。'; },
      subBmp: function (n) { return '読み込めます — 画像字幕 ' + n + ' 件。テキストは動画の読み込み時に Windows の OCR が認識します。'; },
      subNo: 'このレイアウトは読み込めません。', subNoType: function (k) { return k + ' ファイルは読み込めません。'; }, subNoBoth: '読み込めません。SRT で保存するか、ファイルをサポートに送ってください — 新しいレイアウトを追加しています。',
      subPdf: 'このような PDF は Windows の PDF テキストフィルターで読み込みます — この手順はブラウザーでは確認できません。',
      subNextOk: function (n) { return '読み込めます — ' + n + ' 行。'; },
      subPair: 'VobSub には両方のファイルが必要です。.idx と .sub を一緒に選択してください。',
      subFirst: '最初の行', subWhere: 'ファイルを動画と同じ名前で動画の隣に置いてください（film.mp4 → film.srt）。',
      ver: { verified: '検証済みビルド — FrameBridge をインストールできます。', near: '検証済みビルドと同じ世代のビデオエンジン — インストールできる可能性が非常に高いです。インストーラーが変更前に確認します。',
             maybe: 'まだテストしていません — 動作する可能性があります。インストーラーがビデオエンジンを確認し、合わなければ何も変更しません。', newer: '当社のテストより新しいバージョン — まだ検証していません。インストーラーが確認し、合わなければ何も変更しません。',
             old: '古すぎます — 非対応です。' },
    },
    zh: {
      reading: '正在您的电脑上读取文件…', readFail: '无法读取此文件。', noVideo: '此文件中未找到视频轨道。',
      found: '检测结果', fb: 'FrameBridge', smooth: '播放流畅度：', on: { auto: '这台电脑', high: '高性能电脑', mid: '中端电脑', low: '旧电脑' },
      ext: function (e) { return '即使有 FrameBridge，Cubase 和 Nuendo 也不接受 .' + e + ' 扩展名 — 请将文件重新封装为 MKV 或 MP4（无需重新编码）。'; },
      verified: '已验证格式 — 可在原生视频轨上打开。',
      likely: '很可能可以播放 — 由同一 FFmpeg 解码，但流畅度未经验证。',
      unknown: '此编码不在我们的测试中 — FrameBridge 可能无法打开。',
      lv: { smooth: '流畅', ok: '可以播放，偶有卡顿', heavy: '能打开，但用于工作太吃力' }, tip: '1080p 以内的 H.264 工作副本可流畅播放。',
      why: { hw: '您的显卡可自行硬件解码此格式', cpu: '由处理器解码', heavy: '对任何处理器都非常吃力的编码' },
      hdr: 'HDR 将以 SDR 显示。', vfr: '可变帧率 — 支持。',
      pc: { auto: '这台电脑', high: '高性能（12+ 线程，2020 年后显卡）', mid: '中端（6–10 线程）', low: '旧电脑（4 线程，2016 年前显卡）' },
      detected: function (g, c) { return '检测到：' + g + '，' + c + ' 线程'; }, hidden: '浏览器隐藏了显卡，请在下方选择',
      noTrackOk: '已验证容器 — 浏览器无法查看其内部，但只要编码在我们的列表中（通常为 MPEG-2 或 H.264），FrameBridge 就能打开。',
      lnk: function (dir, exe) { return '这是一个快捷方式。程序本体是文件夹 ' + dir + ' 中的 ' + exe + '。要检查确切版本，请把该文件拖到这里：右键单击快捷方式 →“打开文件所在的位置”即可打开该文件夹。'; },
      lnkVer: '根据快捷方式路径判断的版本；确切版本只能从 exe 读取',
      help: '高性能：12+ 线程（Ryzen 5 5600 / Core i5-12400 或更新）及 2020 年后的显卡（GeForce RTX 30xx/40xx、Radeon RX 6000+、Intel Arc）— 显卡可自行解码 HEVC 10 位和 AV1。\n中端：6–10 线程，2016–2019 年的显卡（GTX 10xx/16xx、RTX 20xx、RX 5xx/5000）— 支持 HEVC 10 位，AV1 由处理器解码。\n旧电脑：4 线程（第 2–7 代 Core i5），2016 年前的显卡（GTX 6xx/7xx/9xx）— HEVC 10 位和 AV1 只能由处理器解码。',
      est: '基于我们的播放测试的估计，并非保证。适用 14 天退款。',
      notExe: '这不是 Cubase 或 Nuendo 的程序文件。',
      subFound: function (k, n, a, b) { return k + ' · ' + n + ' 句 · ' + a + ' – ' + b; },
      subCur: 'FrameBridge（当前版本）', subNext: '下次更新（测试中）',
      subOk: function (n) { return '可以读取 — ' + n + ' 句，以 SRT 样式显示。'; },
      subBmp: function (n) { return '可以读取 — ' + n + ' 条图像字幕；视频加载时由 Windows OCR 识别文字。'; },
      subNo: '无法读取此版式。', subNoType: function (k) { return '无法读取 ' + k + ' 文件。'; }, subNoBoth: '无法读取。请另存为 SRT，或将文件发送给支持 — 我们会添加新版式。',
      subPdf: '此类 PDF 通过 Windows 的 PDF 文本筛选器读取 — 浏览器无法检查这一步。',
      subNextOk: function (n) { return '可以读取 — ' + n + ' 句。'; },
      subPair: 'VobSub 需要两个文件：请同时选择 .idx 和 .sub。',
      subFirst: '前几句', subWhere: '将文件以相同名称放在视频旁边（film.mp4 → film.srt）。',
      ver: { verified: '已验证版本 — 可以安装 FrameBridge。', near: '与已验证版本属于同一代视频引擎 — 很可能可以安装。安装程序会在更改前进行检查。',
             maybe: '尚未测试 — 可能可用。安装程序会检查视频引擎，不适用则不做任何更改。', newer: '比我们的测试更新 — 尚未验证。安装程序会检查，不适用则不做任何更改。',
             old: '版本太旧 — 不支持。' },
    },
    ko: {
      reading: '컴퓨터에서 파일을 읽는 중…', readFail: '이 파일을 읽을 수 없습니다.', noVideo: '이 파일에서 비디오 트랙을 찾지 못했습니다.',
      found: '감지됨', fb: 'FrameBridge', smooth: '재생:', on: { auto: '이 PC', high: '고성능 PC', mid: '중급 PC', low: '구형 PC' },
      ext: function (e) { return 'Cubase와 Nuendo는 FrameBridge가 있어도 .' + e + ' 확장자를 받지 않습니다 — 파일을 MKV 또는 MP4로 다시 패키징하세요(재인코딩 불필요).'; },
      verified: '검증된 포맷 — 기본 비디오 트랙에서 열립니다.',
      likely: '재생될 가능성이 높음 — 같은 FFmpeg로 디코딩하지만 부드러움은 검증하지 않았습니다.',
      unknown: '이 코덱은 테스트에 없습니다 — FrameBridge가 열지 못할 수 있습니다.',
      lv: { smooth: '부드러움', ok: '재생됨, 가끔 끊김 가능', heavy: '열리지만 작업하기엔 무거움' }, tip: '1080p 이하 H.264 작업용 사본은 부드럽게 재생됩니다.',
      why: { hw: '그래픽카드가 이 포맷을 직접 디코딩합니다', cpu: '프로세서가 디코딩', heavy: '어떤 프로세서에도 매우 무거운 코덱' },
      hdr: 'HDR은 SDR로 표시됩니다.', vfr: '가변 프레임 레이트 — 지원됩니다.',
      pc: { auto: '이 PC', high: '고성능 (12+ 스레드, 2020년 이후 그래픽카드)', mid: '중급 (6–10 스레드)', low: '구형 (4 스레드, 2016년 이전 그래픽카드)' },
      detected: function (g, c) { return '감지: ' + g + ', ' + c + ' 스레드'; }, hidden: '브라우저가 그래픽카드를 숨김, 아래에서 선택',
      noTrackOk: '검증된 컨테이너 — 브라우저는 내부를 볼 수 없지만, 코덱이 목록에 있으면(보통 MPEG-2 또는 H.264) FrameBridge가 엽니다.',
      lnk: function (dir, exe) { return '바로 가기입니다. 실제 프로그램은 ' + dir + ' 폴더의 ' + exe + '입니다. 정확한 빌드를 확인하려면 그 파일을 여기로 끌어다 놓으세요. 바로 가기를 오른쪽 클릭 → "파일 위치 열기"로 폴더가 열립니다.'; },
      lnkVer: '바로 가기 경로로 판단한 버전이며, 정확한 빌드는 exe에서만 읽을 수 있습니다',
      help: '고성능: 12+ 스레드(Ryzen 5 5600 / Core i5-12400 이상)와 2020년 이후 그래픽카드(GeForce RTX 30xx/40xx, Radeon RX 6000+, Intel Arc) — HEVC 10비트와 AV1을 직접 디코딩.\n중급: 6–10 스레드, 2016–2019년 그래픽카드(GTX 10xx/16xx, RTX 20xx, RX 5xx/5000) — HEVC 10비트 가능, AV1은 프로세서.\n구형: 4 스레드(2–7세대 Core i5), 2016년 이전 그래픽카드(GTX 6xx/7xx/9xx) — HEVC 10비트와 AV1은 프로세서로만.',
      est: '재생 테스트에 기반한 추정이며 보장이 아닙니다. 14일 환불이 적용됩니다.',
      notExe: 'Cubase 또는 Nuendo 프로그램 파일이 아닙니다.',
      subFound: function (k, n, a, b) { return k + ' · 대사 ' + n + '줄 · ' + a + ' – ' + b; },
      subCur: 'FrameBridge (현재 버전)', subNext: '다음 업데이트 (테스트 중)',
      subOk: function (n) { return '읽을 수 있음 — 대사 ' + n + '줄, SRT 모양으로 표시.'; },
      subBmp: function (n) { return '읽을 수 있음 — 이미지 자막 ' + n + '개. 영상을 불러올 때 Windows OCR이 텍스트를 인식합니다.'; },
      subNo: '이 레이아웃은 읽지 못합니다.', subNoType: function (k) { return k + ' 파일은 읽지 못합니다.'; }, subNoBoth: '읽지 못합니다. SRT로 저장하거나 파일을 지원팀에 보내 주세요 — 새 레이아웃을 추가하고 있습니다.',
      subPdf: '이런 PDF는 Windows PDF 텍스트 필터로 읽습니다 — 이 단계는 브라우저에서 확인할 수 없습니다.',
      subNextOk: function (n) { return '읽을 수 있음 — 대사 ' + n + '줄.'; },
      subPair: 'VobSub에는 두 파일이 모두 필요합니다. .idx와 .sub를 함께 선택하세요.',
      subFirst: '처음 대사', subWhere: '파일을 영상과 같은 이름으로 영상 옆에 두세요 (film.mp4 → film.srt).',
      ver: { verified: '검증된 빌드 — FrameBridge가 설치됩니다.', near: '검증된 빌드와 같은 세대의 비디오 엔진 — 설치될 가능성이 매우 높습니다. 설치 프로그램이 변경 전에 확인합니다.',
             maybe: '아직 테스트하지 않음 — 작동할 수 있습니다. 설치 프로그램이 비디오 엔진을 확인하고 맞지 않으면 아무것도 바꾸지 않습니다.', newer: '테스트보다 새로운 버전 — 아직 검증하지 않았습니다. 설치 프로그램이 확인하고 맞지 않으면 아무것도 바꾸지 않습니다.',
             old: '너무 오래된 버전 — 지원하지 않습니다.' },
    },
  };
  // Russian plural: 1 реплика, 2 реплики, 5 реплик
  function ruN(n, f) { var a = n % 10, b = n % 100; return n + ' ' + (a === 1 && b !== 11 ? f[0] : a >= 2 && a <= 4 && (b < 12 || b > 14) ? f[1] : f[2]); }
  function plN(n, f) { var a = n % 10, b = n % 100; return n + ' ' + (n === 1 ? f[0] : a >= 2 && a <= 4 && (b < 12 || b > 14) ? f[1] : f[2]); }
  function one(n, s1, sN) { return n + ' ' + (n === 1 ? s1 : sN); }
  var L = T[LANG] || T.en;

  // ---------------- video ----------------
  var EXT = 'mkv mk3d webm mp4 m4v mov avi divx wmv asf flv f4v ts m2ts mts tod mpg mpeg vob evo mod ogv ogm 3gp 3g2 mxf rm rmvb wtv dvr-ms dv'.split(' ');
  // cls: light | gpu (hardware-decodable long-GOP) | cpu (long-GOP without common hardware decode) | intra | heavy | jp2k
  function codec(v) {
    var f = (v.Format || '').toLowerCase(), p = (v.Format_Profile || '').toLowerCase(), id = (v.CodecID || '').toLowerCase(),
        com = (v.Format_Commercial_IfAny || '');
    var c = function (name, status, cls, hw) { return { name: name, status: status, cls: cls, hw: hw || '' }; };
    if (f === 'avc') {
      if (/4:2:2|4:4:4|intra/.test(p)) return c('H.264 ' + (com || v.Format_Profile || 'Intra'), 'verified', 'intra');
      if (/10/.test(p)) return c('H.264 High 10', 'verified', 'cpu');
      return c('H.264 ' + (v.Format_Profile || ''), 'verified', 'gpu', 'h264');
    }
    if (f === 'hevc') {
      if (/4:2:2|4:4:4/.test(p)) return c('HEVC ' + v.Format_Profile, 'likely', 'cpu');
      return c('HEVC ' + (v.Format_Profile || ''), 'verified', 'gpu', +(v.BitDepth || 8) > 8 ? 'hevc10' : 'hevc8');
    }
    if (f === 'av1') return c('AV1', 'verified', 'gpu', 'av1');
    if (f === 'vp9') return c('VP9', 'verified', 'gpu', 'vp9');
    if (f === 'vvc') return c('VVC / H.266', 'likely', 'heavy');
    if (f === 'vp8') return c('VP8', 'verified', 'light');
    if (f === 'mpeg video') return c(com || ((v.Format_Version || '').indexOf('1') >= 0 ? 'MPEG-1' : 'MPEG-2'), 'verified', /4:2:2/.test(p) ? 'intra' : 'light');
    if (f === 'prores') return c('ProRes ' + (v.Format_Profile || ''), 'verified', 'intra');
    if (f === 'vc-3') return c(com || 'DNxHD / DNxHR', 'verified', 'intra');
    if (f === 'cineform') return c('CineForm', 'verified', 'intra');
    if (f === 'dv') return c(com || 'DV', 'verified', 'light');
    if (f === 'ffv1') return c('FFV1', 'verified', 'heavy');
    if (f === 'huffyuv') return c('HuffYUV', 'verified', 'intra');
    if (f === 'apv') return c('APV', 'verified', 'intra');
    if (f === 'yuv' && /^ul/.test(id)) return c('UtVideo', 'verified', 'intra');
    if (f === 'yuv' && id === 'v210') return c('Uncompressed v210', 'verified', 'intra');
    if (/^(r210|r10k|2vuy)$/.test(id)) return c('Uncompressed ' + v.CodecID, 'likely', 'intra');
    if (/^m8/.test(id) || f === 'magicyuv') return c('MagicYUV', 'verified', 'intra');
    if (f === 'rle' || id === 'rle') return c('QuickTime Animation', 'verified', 'light');
    if (f === 'png') return c('PNG', 'verified', 'intra');
    if (f === 'tiff') return c('TIFF', 'verified', 'intra');
    if (f === 'canopus hq' || f === 'canopus hqx') return c(v.Format, 'verified', 'intra');
    if (f === 'canopus lossless') return c('Canopus Lossless', 'likely', 'heavy');
    if (/^shq/.test(id)) return c('SpeedHQ', 'verified', 'intra');
    if (f === 'hap' || f === 'hap q' || /^hap/.test(id)) return c(v.Format || 'HAP', 'verified', /q/i.test(f + id) ? 'intra' : 'light');   // Hap Q: dense intra
    if (f === 'theora') return c('Theora', 'verified', 'light');
    if (f === 'wmv1' || f === 'wmv2') return c(v.Format.replace('WMV', 'WMV '), 'verified', 'light');
    if (f === 'vc-1') return c(id === 'wmv3' ? 'WMV 9' : 'VC-1', 'verified', 'light');   // beta 3: smooth live on real WMV HD / VC-1 files
    if (f === 'mpeg-4 visual' || id === 'xvid' || id === 'divx' || id === 'div3') return c('MPEG-4 Visual (DivX / Xvid)', 'verified', 'light');
    if (f === 'h.263') return c('H.263', 'verified', 'light');
    if (f === 'sorenson spark') return c('Sorenson Spark', 'verified', 'light');
    if (/^sorenson/.test(f) || /^svq/.test(id)) return c('Sorenson Video', 'verified', 'light');
    if (/^realvideo/.test(f)) return c(v.Format, 'verified', 'light');
    if (f === 'cinepak' || id === 'cvid') return c('Cinepak', 'verified', 'light');
    if (f === 'microsoft video 1' || id === 'msvc' || id === 'cram') return c('Microsoft Video 1', 'verified', 'light');
    if (/^av1x|^avd1|^avdn/.test(id) && f !== 'vc-3') return c('Avid 1:1', 'verified', 'intra');
    if (f === 'lagarith' || id === 'lags') return c('Lagarith', 'likely', 'heavy');
    if (f === 'jpeg 2000') return c('JPEG 2000', 'likely', 'jp2k');
    if (id === 'nlc1' || id === 'nclc' || f === 'notchlc') return c('NotchLC', 'verified', 'intra');   // files from Notch: nclc
    if (/meridien/.test(f) || id === 'avui') return c('Avid Meridien', 'likely', 'heavy');
    if (/sheer/.test(f) || /^sh\d/.test(id)) return c('SheerVideo', 'likely', 'intra');
    if (id === 'icod' || /intermediate/.test(f)) return c('Apple Intermediate', 'likely', 'intra');
    if (/^vp6/.test(id) || f === 'vp6') return c('VP6', 'likely', 'light');
    if (/^tsc/.test(id)) return c('TechSmith', 'likely', 'light');
    if (id === 'fps1') return c('Fraps', 'likely', 'light');
    if (id === 'cscd') return c('CamStudio', 'likely', 'light');
    if (/^iv[345]/.test(id)) return c('Indeo', 'likely', 'light');
    return c(v.Format || v.CodecID || '?', 'unknown', 'heavy');
  }

  // graphics card -> what it decodes in hardware (true / false / null = not sure)
  function gpuName() {
    try {
      var gl = document.createElement('canvas').getContext('webgl');
      var ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
      var s = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : '';
      var m = /ANGLE \([^,]+, ([^(]+?)(?: \(0x|,| Direct3D)/.exec(s);
      return (m ? m[1] : s || '').replace(/\(TM\)|\(R\)/gi, '').trim();
    } catch (e) { return ''; }
  }
  function gpuCaps(name) {
    var s = name.toLowerCase(), m, n, cap = { h264: true, hevc8: null, hevc10: null, vp9: null, av1: null };
    var set = function (h10, vp9, av1) { cap.hevc8 = h10 || cap.hevc8; cap.hevc10 = h10; cap.vp9 = vp9; cap.av1 = av1; return cap; };
    if (/nvidia|geforce|quadro|rtx|gtx/.test(s)) {
      if ((m = /rtx\s*(\d{4})/.exec(s))) { n = +m[1]; return n >= 3000 ? set(true, true, true) : set(true, true, false); }
      if (/rtx\s*a\d{3,4}|rtx \d{4} ada|ada generation/.test(s)) return set(true, true, true);
      if ((m = /gtx\s*(\d{3,4})/.exec(s))) { n = +m[1]; return n >= 1000 || n === 950 || n === 960 ? set(true, true, false) : set(false, false, false); }
      if (/quadro\s*[pt]\d|mx\s*[2345]\d\d/.test(s)) return set(true, true, false);
      if (/quadro\s*[km]\d|gt\s*[67]\d\d/.test(s)) return set(false, false, false);
      return cap;
    }
    if (/intel/.test(s)) {
      if (/arc|iris\(?\s*xe|xe graphics|uhd graphics 7\d\d/.test(s)) return set(true, true, true);
      if (/iris plus|uhd graphics 6\d\d|hd graphics 6\d\d|uhd graphics 6/.test(s)) return set(true, true, false);
      if (/hd graphics 5\d\d|iris pro|iris graphics 5/.test(s)) { cap.hevc8 = true; return set(false, false, false); }   // Skylake: HEVC 8-bit only
      if (/hd graphics( [234]\d{3}| \d{3})?$|hd graphics [234]/.test(s)) return set(false, false, false);
      if (/uhd graphics/.test(s)) { cap.hevc8 = true; cap.hevc10 = true; return cap; }
      return cap;
    }
    if (/amd|radeon/.test(s)) {
      if ((m = /rx\s*(\d{4})/.exec(s))) {
        n = +m[1];
        if (n >= 7000 || (n >= 6600 && n < 7000) || n === 6800 || n === 6900) return set(true, true, true);
        if (n === 6400 || n === 6500) return set(true, true, false);
        if (n >= 5000) return set(true, true, false);
      }
      if ((m = /rx\s*(\d{3})\b/.exec(s))) return set(true, false, false);          // Polaris RX 4xx / 5xx
      if (/radeon\s*(6[1-9]0m|7[0-9]0m|8[0-9]0m)/.test(s)) return set(true, true, true); // RDNA2/3 integrated
      if (/vega|radeon graphics/.test(s)) return set(true, true, null);
      if (/r9|r7|hd [5-8]\d{3}/.test(s)) return set(false, false, false);
      return cap;
    }
    return cap;
  }
  var threads = navigator.hardwareConcurrency || 4;
  var detectedGpu = gpuName(), autoCaps = gpuCaps(detectedGpu);
  // trust only a recognised vendor; Brave reports 'Brave' and a random thread count, Safari 'Apple GPU'
  var known = /nvidia|geforce|quadro|intel|amd|radeon/i.test(detectedGpu) && !navigator.brave;
  function profile(choice) {
    if (choice === 'high') return { tier: 'high', caps: { h264: true, hevc8: true, hevc10: true, vp9: true, av1: true } };
    if (choice === 'mid') return { tier: 'mid', caps: { h264: true, hevc8: true, hevc10: true, vp9: true, av1: false } };
    if (choice === 'low') return { tier: 'low', caps: { h264: true, hevc8: false, hevc10: false, vp9: false, av1: false } };
    if (!known) return profile('mid');
    var strong = autoCaps.av1 === true;   // a 2020+ card goes with a strong PC even if the thread count is hidden
    return { tier: threads >= 12 || strong ? 'high' : threads >= 6 ? 'mid' : 'low', caps: autoCaps };
  }

  // Full PC (Ryzen 7 7700X + RTX 4090), 4K: the live run through all of Desktop\1234 in Cubase / Nuendo (19.11, beta 3,
  // every frame request logged), calibrated on the user's own verdicts from that run. Log rule: heavy = 40 %+ of the
  // jumps / scrub steps slower than 250 ms or under 90 % of the play frames on time; hitches = the slowest tenth of
  // the jumps over 280 ms. It reproduces every verdict the log can see (JPEG 2000, VVC, Lagarith heavy; AV1 hitches;
  // all smooth ones smooth) and adds HEVC 4:2:2 (53 % slow jumps) heavy, HEVC 4:4:4 (32 %) and Canopus Lossless
  // (92 % on time) hitches. The user's word where the log cannot see it: FFV1 heavy (scrubbing), H.264 High 10,
  // CineForm, Hap Q occasional hitches. null = nothing measured beyond the runs below.
  function liveFull(info) {
    var n = info.c.name;
    if (info.c.cls === 'jp2k' || /^(FFV1|VVC|Lagarith)|^HEVC .*4:2:2/.test(n)) return 'heavy';
    if (/^AV1$|High 10|^CineForm|^Hap Q|^Canopus Lossless|^HEVC .*4:4:4/i.test(n)) return 'ok';
    return null;
  }
  var SEV = { smooth: 0, ok: 1, heavy: 2 };
  // the live verdict decides on the full PC; a weaker PC is never rated better than the full one
  function smoothness(info, pc) {
    var r = smoothnessRuns(info, pc);
    var full = (+info.w || 1920) * (+info.h || 1080) > 2.3e6 ? liveFull(info) : null;
    if (!full || (pc.tier !== 'high' && SEV[full] <= SEV[r.lv])) return r;
    return { lv: full, why: r.why };
  }

  // smoothness rules (our runs: full PC = Desktop\1234 on beta 3; weak PC = 4 threads @60 % and 2 threads)
  function smoothnessRuns(info, pc) {
    var px = (+info.w || 1920) * (+info.h || 1080), uhd = px > 2.3e6, t = pc.tier, cls = info.c.cls;
    var R = function (lv, why) { return { lv: lv, why: why }; };
    var pick = function (hi, mid, lo) { return t === 'high' ? hi : t === 'mid' ? mid : lo; };
    if (cls === 'gpu') {
      var hw = pc.caps[info.c.hw];
      if (hw === true) return R(uhd && t === 'low' ? 'ok' : 'smooth', 'hw');
      if (!uhd) return R('smooth', 'cpu');                                                   // cut-down PC, software: HEVC 10-bit 1080p 0.97-0.99
      // cut-down PC, software 4K: H.264 0.76-0.78, VP9 0.83-0.89, HEVC 10-bit 0.25-0.69, AV1 0.22-0.58
      return R(pick('smooth', 'ok', /h264|vp9/.test(info.c.hw) ? 'ok' : 'heavy'), 'cpu');
    }
    // From playback runs on the full PC ('high') and the same PC cut to 4 threads / 60 % CPU ('low'), corrected by live
    // tests in Cubase; real old processors are slower per core, so 'low' stays a step more careful. 'mid' sits between.
    if (cls === 'light') {
      if (uhd && /WMV 9/.test(info.c.name)) return R(pick('ok', 'ok', 'heavy'), 'cpu');            // 0.86 / 0.64
      return R(uhd && t === 'low' ? 'ok' : 'smooth', 'cpu');                                         // 4K: 0.96-1.0 / 0.93-0.97
    }
    if (cls === 'cpu' || cls === 'intra') {
      if (!uhd) return R(t === 'low' && (+info.bit > 8 || cls === 'cpu') ? 'ok' : 'smooth', 'cpu');
      var dense = /4444|hap q|^H\.264 .*(4:2:2|4:4:4|Intra)/i.test(info.c.name);                  // ProRes 4444 0.68, Hap Q 0.73, H.264 Intra 0.09 on the cut-down PC
      return R(pick('smooth', dense ? 'ok' : 'smooth', dense ? 'heavy' : 'ok'), 'cpu');
    }
    if (cls === 'jp2k') return R(!uhd && t === 'high' ? 'ok' : 'heavy', 'heavy');                  // 4K: 0.56 / 0.10
    if (!uhd) return R(pick('smooth', 'ok', 'heavy'), pick('cpu', 'heavy', 'heavy'));
    if (/VVC/.test(info.c.name)) return R(pick('ok', 'heavy', 'heavy'), 'heavy');   // model 0.90 / 0.47, live on the full PC: clear stutter
    return R(pick('ok', 'heavy', 'heavy'), 'heavy');                                                  // FFV1, Lagarith, Canopus Lossless 4K: hitches live even on the full PC
  }

  var MI = null;
  function loadMediaInfo() {
    if (MI) return MI;
    MI = new Promise(function (ok, bad) {
      var s = document.createElement('script');
      s.src = '/vendor/mediainfo/index.min.js';
      s.onload = function () {
        window.MediaInfo.mediaInfoFactory({ format: 'object', locateFile: function () { return '/vendor/mediainfo/MediaInfoModule.wasm'; } }).then(ok, bad);
      };
      s.onerror = bad;
      document.head.appendChild(s);
    });
    return MI;
  }

  var out = root.querySelector('.check-out'), pcSel = root.querySelector('.check-pc'), lastVideo = null;
  function track(v) { try { if (window.fbTrack) window.fbTrack('check', v); } catch (e) {} } // kind of file + result only
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function show(html) { out.innerHTML = html; out.hidden = false; }

  function renderVideo() {
    var info = lastVideo; if (!info) return;
    var rows = [];
    var spec = [info.ext.toUpperCase(), info.c.name, info.w && info.h ? info.w + '×' + info.h : '', info.bit ? info.bit + (L.bit || '-bit') + (info.chroma ? ' ' + info.chroma : '') : '',
                info.fps ? (Math.round(info.fps * 1000) / 1000) + (L.fps || ' fps') : '', info.hdr ? 'HDR' : ''].filter(Boolean).join(' · ');
    rows.push('<div class="ck-row"><span class="ck-k">' + L.found + '</span><span>' + esc(spec) + '</span></div>');
    if (EXT.indexOf(info.ext) < 0) {
      rows.push('<div class="ck-row ck-bad"><span class="ck-k">' + L.fb + '</span><span>' + esc(L.ext(info.ext)) + '</span></div>');
    } else {
      var st = info.c.status;
      rows.push('<div class="ck-row ck-' + (st === 'verified' ? 'good' : st === 'likely' ? 'warn' : 'bad') + '"><span class="ck-k">' + L.fb + '</span><span>' + L[st] + '</span></div>');
      if (st !== 'unknown') {
        var pc = profile(pcSel.value), sm = smoothness(info, pc);
        var who = L.on[pcSel.value === 'auto' && !known ? 'mid' : pcSel.value];   // hidden card: judged as a mid-range PC
        rows.push('<div class="ck-row ck-' + (sm.lv === 'smooth' ? 'good' : sm.lv === 'ok' ? 'warn' : 'bad') + '"><span class="ck-k">' + L.smooth + ' ' + esc(who) + '</span><span><b>' + L.lv[sm.lv] + '</b> — ' + L.why[sm.why] + '.' + (sm.lv === 'heavy' ? ' ' + L.tip : '') + '</span></div>');
      }
      var notes = []; if (info.hdr) notes.push(L.hdr); if (info.vfr) notes.push(L.vfr);
      if (notes.length) rows.push('<div class="ck-row"><span class="ck-k"></span><span class="ck-note">' + notes.join(' ') + '</span></div>');
    }
    rows.push('<p class="ck-fine">' + L.est + '</p>');
    show(rows.join(''));
  }

  function checkVideo(file) {
    show('<p class="ck-fine">' + L.reading + '</p>');
    var ext = (file.name.split('.').pop() || '').toLowerCase();
    loadMediaInfo().then(function (mi) {
      return mi.analyzeData(file.size, function (size, offset) {
        return new Promise(function (ok, bad) {
          var r = new FileReader();
          r.onload = function () { ok(new Uint8Array(r.result)); };
          r.onerror = bad;
          r.readAsArrayBuffer(file.slice(offset, offset + size));
        });
      });
    }).then(function (res) {
      var tracks = (res && res.media && res.media.track) || [];
      var v = tracks.filter(function (t) { return t['@type'] === 'Video'; })[0];
      if (!v) {
        track('video:' + ext + ':notrack');
        show(/^(wtv|dvr-ms)$/.test(ext) ? '<div class="ck-row ck-good"><span class="ck-k">' + L.fb + '</span><span>' + L.noTrackOk + '</span></div>'
                                       : '<p class="ck-bad">' + L.noVideo + '</p>');
        return;
      }
      lastVideo = { ext: ext, c: codec(v), w: v.Width, h: v.Height, bit: v.BitDepth, chroma: v.ChromaSubsampling,
                    fps: +(v.FrameRate_Original || v.FrameRate_Nominal || (v.FrameRate_Mode === 'VFR' ? 0 : v.FrameRate)) || 0, vfr: v.FrameRate_Mode === 'VFR', hdr: !!v.HDR_Format };
      renderVideo();
      var st = EXT.indexOf(ext) < 0 ? 'extension' : lastVideo.c.status, sm = st === 'verified' || st === 'likely' ? smoothness(lastVideo, profile(pcSel.value)).lv : '';
      track('video:' + ext + ':' + st + (sm ? ':' + sm : ''));
    }).catch(function () { track('video:fail'); show('<p class="ck-bad">' + L.readFail + '</p>'); });
  }

  // ---------------- Cubase / Nuendo ----------------
  var VERIFIED = { cubase: ['8.0.10', '9.0.0', '10.5.0', '11.*', '12.0.10', '12.0.51', '12.0.52', '13.0.21', '14.0.5', '14.0.10', '14.0.20', '14.0.32', '14.0.40', '15.0.5', '15.0.21', '15.0.30', '16.0.5'],
                   nuendo: ['10.*', '12.0.52', '13.0.10', '13.0.50', '14.0.32', '14.0.40', '15.0.21', '15.0.30', '15.0.40'] };
  var MAYBE = { cubase: ['8.5', '9.5'], nuendo: ['7', '8', '9', '11', '16'] };
  function verVerdict(prod, ver) {
    var p = ver.split('.'), major = +p[0], mm = p[0] + '.' + (p[1] || '0');
    var list = VERIFIED[prod];
    if (list.some(function (x) { return x === ver || (x.slice(-2) === '.*' && x.slice(0, -2) === p[0]); })) return 'verified';
    if (prod === 'cubase' && (major < 8 || mm === '10.0')) return major < 8 ? 'old' : 'maybe';
    if (prod === 'nuendo' && major < 7) return 'old';
    if (MAYBE[prod].indexOf(mm) >= 0 || MAYBE[prod].indexOf(p[0]) >= 0) return 'maybe';
    if (list.some(function (x) { return x.split('.')[0] === p[0] && x.split('.')[1] === p[1]; })) return 'near';
    var top = Math.max.apply(null, list.map(function (x) { return +x.split('.')[0]; }));
    return major > top ? 'newer' : 'maybe';
  }
  function readTail(file, bytes) {
    return new Promise(function (ok, bad) {
      var r = new FileReader();
      r.onload = function () { ok(new Uint8Array(r.result)); };
      r.onerror = bad;
      r.readAsArrayBuffer(file.slice(Math.max(0, file.size - bytes)));
    });
  }
  function versionField(b, key) {
    var k = []; for (var i = 0; i < key.length; i++) k.push(key.charCodeAt(i), 0); k.push(0, 0);
    outer: for (var j = b.length - k.length; j >= 0; j--) {
      for (var q = 0; q < k.length; q++) if (b[j + q] !== k[q]) continue outer;
      var s = j + k.length; while (s % 4) s++; while (b[s] === 0 && b[s + 1] === 0) s += 2;
      var str = ''; for (; s + 1 < b.length; s += 2) { var ch = b[s] | (b[s + 1] << 8); if (!ch) break; str += String.fromCharCode(ch); }
      return str;
    }
    return '';
  }
  function checkExe(file) {
    show('<p class="ck-fine">' + L.reading + '</p>');
    var go = function (bytes) {
      return readTail(file, bytes).then(function (b) {
        var name = versionField(b, 'ProductName'), ver = versionField(b, 'ProductVersion');
        if (!(name && ver) && bytes < file.size) return go(Math.min(file.size, bytes * 4));
        var prod = /nuendo/i.test(name) ? 'nuendo' : /cubase/i.test(name) ? 'cubase' : '';
        if (!prod || !/^\d+\.\d+/.test(ver)) { show('<p class="ck-bad">' + L.notExe + '</p>'); return; }
        var v = verVerdict(prod, ver.trim());
        track('exe:' + prod + ' ' + ver.trim().split('.').slice(0, 2).join('.') + ':' + v);
        show('<div class="ck-row"><span class="ck-k">' + L.found + '</span><span>' + esc(name.replace(/ for Windows$/i, '') + ' ' + ver) + '</span></div>' +
             '<div class="ck-row ck-' + (v === 'verified' || v === 'near' ? 'good' : v === 'old' ? 'bad' : 'warn') + '"><span class="ck-k">' + L.fb + '</span><span>' + L.ver[v] + '</span></div>');
      });
    };
    go(8 * 1024 * 1024).catch(function () { show('<p class="ck-bad">' + L.readFail + '</p>'); });
  }

  // ---------------- UI ----------------
  pcSel.options[0].textContent = L.pc.auto + ' — ' + (known ? L.detected(detectedGpu, threads) : L.hidden);
  var help = root.querySelector('.check-help'); if (help) help.setAttribute('data-tip', L.help);
  pcSel.addEventListener('change', renderVideo);
  // a desktop shortcut dropped instead of the exe: the path gives the major version, the exact build needs the exe
  function checkLnk(file) {
    readTail(file, file.size).then(function (b) {
      var a = '', u = '', i;
      for (i = 0; i < b.length; i++) a += String.fromCharCode(b[i]);
      for (i = 0; i + 1 < b.length; i += 2) u += String.fromCharCode(b[i] | (b[i + 1] << 8));
      var re = /[A-Za-z]:\\[^\0]*?\\((?:Cubase|Nuendo)[^\\\0]*?\.exe)/i;
      var m = re.exec(u) || re.exec(a);
      if (!m) { show('<p class="ck-bad">' + L.notExe + '</p>'); return; }
      var path = m[0], prod = /nuendo/i.test(m[1]) ? 'nuendo' : 'cubase';
      track('lnk:' + prod);
      var mv = /(?:cubase|nuendo)[^0-9\\]*?(\d+(?:\.\d+)?)/i.exec(m[1]) || /(?:cubase|nuendo)[^0-9\\]*?(\d+(?:\.\d+)?)/i.exec(path);
      var cut = path.lastIndexOf('\\'), rows = '<p class="ck-note">' + esc(L.lnk(path.slice(0, cut), path.slice(cut + 1))) + '</p>';
      if (mv) {
        var v = verVerdict(prod, mv[1].indexOf('.') < 0 ? mv[1] + '.0.0' : mv[1] + '.0');
        if (v === 'verified') v = 'near';
        rows += '<div class="ck-row ck-' + (v === 'near' ? 'good' : v === 'old' ? 'bad' : 'warn') + '"><span class="ck-k">' + L.fb + '</span><span>' + L.ver[v] +
                ' <span class="ck-note">(' + L.lnkVer + ')</span></span></div>';
      }
      show(rows);
    }).catch(function () { show('<p class="ck-bad">' + L.readFail + '</p>'); });
  }
  // Subtitles and dubbing scripts: the product's own reader (beta 3 = current) built to WebAssembly.
  var SUB = 'srt ass ssa vtt smi sami sub idx sup ttml dfxp xml stl scc docx xlsx csv txt pdf doc xls rtf odt ods'.split(' ');
  var subMods = {};
  function subModule(name) {
    if (!subMods[name]) subMods[name] = fetch('/vendor/fbsubs/' + name + '.wasm?v=2').then(function (r) { return r.arrayBuffer(); }).then(function (b) { return WebAssembly.compile(b); });
    return subMods[name];
  }
  function subParse(name, files, main) {
    return subModule(name).then(function (mod) {
      var mem, imp = {};
      WebAssembly.Module.imports(mod).forEach(function (i) { if (i.kind === 'function') (imp[i.module] = imp[i.module] || {})[i.name] = function () { return 52; }; });
      var w = imp.wasi_snapshot_preview1;
      w.proc_exit = function (c) { throw new Error('exit ' + c); };
      w.environ_sizes_get = function (a, b) { var d = new DataView(mem.buffer); d.setUint32(a, 0, true); d.setUint32(b, 0, true); return 0; };
      return WebAssembly.instantiate(mod, imp).then(function (inst) {
        var x = inst.exports; mem = x.memory;
        if (x._initialize) x._initialize();
        x.fb_set_acp(/^(ru|uk|bg|sr)/.test(LANG) ? 1251 : 1252);
        var enc = new TextEncoder();
        function str(t) { var b = enc.encode(t + '\0'), q = x.fb_alloc(b.length); new Uint8Array(mem.buffer, q, b.length).set(b); return q; }
        files.forEach(function (f) { var q = x.fb_alloc(f.data.length); new Uint8Array(mem.buffer, q, f.data.length).set(f.data); x.fb_add(str(f.name), q, f.data.length); });
        var at = x.fb_parse(str(main)), u = new Uint8Array(mem.buffer, at), e = 0;
        while (u[e]) e++;
        return JSON.parse(new TextDecoder().decode(u.subarray(0, e)));
      });
    }).catch(function () { return null; });
  }
  function tc(t) {
    var h = Math.floor(t / 3600), m = Math.floor(t / 60) % 60, s = t % 60;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s.toFixed(2);
  }
  function checkSubs(list) {
    var byExt = function (e) { return list.filter(function (f) { return f.name.toLowerCase().split('.').pop() === e; })[0]; };
    var main = byExt('idx') || list[0], ext = main.name.toLowerCase().split('.').pop();
    var base = function (f) { return f.name.replace(/\.[^.]+$/, '').toLowerCase(); };
    if (ext === 'idx' && !list.some(function (f) { return f !== main && base(f) === base(main); })) { show('<p class="ck-bad">' + L.subPair + '</p>'); return; }
    show('<p class="ck-fine">' + L.reading + '</p>');
    Promise.all(list.map(function (f) {
      return f.size > 64 * 1048576 ? Promise.reject() : f.arrayBuffer().then(function (b) { return { name: f.name, data: new Uint8Array(b) }; });
    })).then(function (files) {
      return Promise.all([subParse('subs_b3', files, main.name), Promise.resolve(null)]);
    }).then(function (r) {
      var cur = r[0], next = r[1], best = cur && cur.ok ? cur : next && next.ok ? next : cur || next;
      if (!best) { show('<p class="ck-bad">' + L.readFail + '</p>'); return; }
      if (ext === 'sub' && /needs its \.idx/.test(best.diag)) { show('<p class="ck-bad">' + L.subPair + '</p>'); return; }
      var rows = [], cues = best.cues || [];
      var kind = ext.toUpperCase() + (ext === 'sub' && best.ok && !best.bitmap ? ' (MicroDVD)' : '');
      if (best.ok && cues.length) rows.push('<div class="ck-row"><span class="ck-k">' + L.found + '</span><span>' + esc(L.subFound(kind, best.count, tc(cues[0].s), tc(cues[cues.length - 1].e))) + '</span></div>');
      else rows.push('<div class="ck-row"><span class="ck-k">' + L.found + '</span><span>' + esc(main.name) + '</span></div>');
      var curOk = cur && cur.ok, pdfStep = !curOk && ext === 'pdf' && cur && /text filter/.test(cur.diag);
      track('subs:' + ext + ':' + (curOk ? 'current' : pdfStep ? 'pdf-filter' : next && next.ok ? 'next-only' : 'no'));
      var noType = cur && /unsupported( document)? extension/.test(cur.diag);
      var curTxt = curOk ? (cur.bitmap ? L.subBmp(cur.count) : L.subOk(cur.count)) : pdfStep ? L.subPdf : noType && next && next.ok ? L.subNoType(ext.toUpperCase())
                 : next && next.ok ? L.subNo : L.subNoBoth;
      rows.push('<div class="ck-row ck-' + (curOk ? 'good' : pdfStep || (next && next.ok) ? 'warn' : 'bad') + '"><span class="ck-k">' + L.subCur + '</span><span>' + curTxt + '</span></div>');
      if (!curOk && next && next.ok)
        rows.push('<div class="ck-row ck-good"><span class="ck-k">' + L.subNext + '</span><span>' + L.subNextOk(next.count) + '</span></div>');
      var text = cues.filter(function (c) { return c.t; }).slice(0, 5);
      if (best.ok && text.length)
        rows.push('<div class="ck-row"><span class="ck-k">' + L.subFirst + '</span><span class="ck-cues">' + text.map(function (c) {
          return '<span><i>' + tc(c.s) + '</i>' + esc(c.t).replace(/\n/g, ' / ') + '</span>';
        }).join('') + '</span></div>');
      rows.push('<p class="ck-fine">' + L.subWhere + '</p>');
      show(rows.join(''));
    }).catch(function () { show('<p class="ck-bad">' + L.readFail + '</p>'); });
  }

  function take(file) {
    if (!file) return;
    if (/\.exe$/i.test(file.name)) checkExe(file); else if (/\.lnk$/i.test(file.name)) checkLnk(file); else checkVideo(file);
  }
  function takeAll(files) {
    var list = Array.prototype.slice.call(files || []);
    var subs = list.filter(function (f) { return SUB.indexOf(f.name.toLowerCase().split('.').pop()) >= 0; });
    if (subs.length) checkSubs(subs); else take(list[0]);
  }
  root.querySelector('.check-file').addEventListener('change', function (e) { takeAll(e.target.files); e.target.value = ''; });
  var zone = root.querySelector('.check-zone');
  ['dragenter', 'dragover'].forEach(function (ev) { zone.addEventListener(ev, function (e) { e.preventDefault(); zone.classList.add('over'); }); });
  ['dragleave', 'drop'].forEach(function (ev) { zone.addEventListener(ev, function (e) { e.preventDefault(); zone.classList.remove('over'); }); });
  zone.addEventListener('drop', function (e) { takeAll(e.dataTransfer.files); });
  window.__fbCheck = { codec: codec, gpuCaps: gpuCaps, smoothness: smoothness, verVerdict: verVerdict, profile: profile };   // for tests
})();
