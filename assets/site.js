// Shared header/footer, language switch (en/ro/ru) and the releases list.
const SITE = {
  supportEmail: '', // fill in to show an e-mail button on Support
  issues: 'https://github.com/MrFail/sonvy-site/issues/new',
  appStore: '',     // App Store link once published
};

const T = {
  en: {
    'nav.releases': 'Releases', 'nav.support': 'Support', 'nav.privacy': 'Privacy',
    'hero.title': 'Your music. No internet needed.',
    'hero.text': 'Sonvy is a simple, fast player for the audio files you already have. Import them once, listen anywhere — in flight mode, underground, off the grid.',
    'hero.soon': 'Coming soon to the App Store', 'hero.get': 'Download on the App Store',
    'f.offline.t': 'Fully offline', 'f.offline.p': 'Your songs live on your iPhone. No streaming, no buffering, no data used.',
    'f.import.t': 'Import from Files', 'f.import.p': 'Pick songs one by one or a whole folder from iCloud Drive, a USB stick or any Files location.',
    'f.lists.t': 'Playlists', 'f.lists.p': 'Build playlists, reorder them, play in order or shuffled. Search by title or artist.',
    'f.loop.t': 'A–B loop', 'f.loop.p': 'Repeat any part of a song — perfect for learning lyrics or practicing an instrument.',
    'f.sleep.t': 'Sleep timer & fade', 'f.sleep.p': 'Stop after a while or at the end of the song, with a smooth fade on pause and play.',
    'f.private.t': 'Private by design', 'f.private.p': 'No account, no ads, no tracking. Nothing ever leaves your phone.',
    'formats': 'Plays',
    'rel.title': 'Releases', 'rel.lead': 'What changed in every version of Sonvy.',
    'rel.upcoming': 'Coming soon', 'rel.latest': 'Latest', 'rel.new': 'New', 'rel.fixed': 'Fixed', 'rel.improved': 'Improved',
    'sup.title': 'Support', 'sup.lead': 'Questions, problems or ideas — we read everything.',
    'sup.issue': 'Report a problem', 'sup.mail': 'Write an e-mail', 'sup.faq': 'Common questions',
    'q1': 'How do I add music?', 'a1': 'Open the Library tab, tap Import and choose files or a whole folder from the Files app.',
    'q2': 'Which formats are supported?', 'a2': 'MP3, M4A / AAC, ALAC, FLAC, WAV and AIFF.',
    'q3': 'Does Sonvy need internet?', 'a3': 'No. Everything stays on your iPhone and plays offline.',
    'q4': 'Does deleting a song delete my original file?', 'a4': 'No. Sonvy keeps its own copy; deleting it from the library removes only that copy.',
    'q5': 'Where is my music stored?', 'a5': 'Inside the app on your iPhone. It is removed if you delete the app.',
    'pr.title': 'Privacy policy', 'pr.updated': 'Last updated: 22 November 2026',
    'pr.intro': 'Sonvy does not collect, store or share any personal data.',
    'pr.h1': 'What stays on your device', 'pr.p1': 'The music you import, your playlists and your settings are stored only on your iPhone, inside the app. They are removed when you delete the app.',
    'pr.h2': 'What we don’t do', 'pr.p2': 'No account, no analytics, no ads, no tracking and no third-party services. The app does not connect to the internet.',
    'pr.h3': 'Children', 'pr.p3': 'Sonvy collects no data from anyone, children included.',
    'pr.h4': 'Changes', 'pr.p4': 'If this policy ever changes, the new version will be published on this page with a new date.',
    'pr.h5': 'Contact', 'pr.p5': 'Questions about privacy: see the Support page.',
    'foot.made': 'Made with care for people who own their music.',
  },
  ro: {
    'nav.releases': 'Versiuni', 'nav.support': 'Suport', 'nav.privacy': 'Confidențialitate',
    'hero.title': 'Muzica ta. Fără internet.',
    'hero.text': 'Sonvy este un player simplu și rapid pentru fișierele audio pe care le ai deja. Le imporți o dată și le asculți oriunde — în avion, la metrou, departe de rețea.',
    'hero.soon': 'În curând în App Store', 'hero.get': 'Descarcă din App Store',
    'f.offline.t': 'Complet offline', 'f.offline.p': 'Piesele stau pe iPhone-ul tău. Fără streaming, fără încărcare, fără consum de date.',
    'f.import.t': 'Import din Fișiere', 'f.import.p': 'Alegi piese una câte una sau un folder întreg din iCloud Drive, de pe un stick sau din orice locație din Fișiere.',
    'f.lists.t': 'Playlisturi', 'f.lists.p': 'Creezi playlisturi, le reordonezi, le asculți în ordine sau amestecat. Cauți după titlu sau artist.',
    'f.loop.t': 'Bucla A–B', 'f.loop.p': 'Repetă orice fragment dintr-o piesă — ideal pentru învățat versuri sau exersat la un instrument.',
    'f.sleep.t': 'Timer și fade', 'f.sleep.p': 'Oprire după un timp sau la sfârșitul piesei, cu trecere lină la pauză și la pornire.',
    'f.private.t': 'Privat din principiu', 'f.private.p': 'Fără cont, fără reclame, fără urmărire. Nimic nu pleacă de pe telefon.',
    'formats': 'Formate',
    'rel.title': 'Versiuni', 'rel.lead': 'Ce s-a schimbat în fiecare versiune Sonvy.',
    'rel.upcoming': 'În curând', 'rel.latest': 'Ultima', 'rel.new': 'Nou', 'rel.fixed': 'Reparat', 'rel.improved': 'Îmbunătățit',
    'sup.title': 'Suport', 'sup.lead': 'Întrebări, probleme sau idei — citim tot.',
    'sup.issue': 'Raportează o problemă', 'sup.mail': 'Scrie un e-mail', 'sup.faq': 'Întrebări frecvente',
    'q1': 'Cum adaug muzică?', 'a1': 'Deschide tab-ul Bibliotecă, apasă Import și alege fișiere sau un folder întreg din aplicația Fișiere.',
    'q2': 'Ce formate merg?', 'a2': 'MP3, M4A / AAC, ALAC, FLAC, WAV și AIFF.',
    'q3': 'Sonvy are nevoie de internet?', 'a3': 'Nu. Totul rămâne pe iPhone și se aude offline.',
    'q4': 'Dacă șterg o piesă, se șterge și fișierul original?', 'a4': 'Nu. Sonvy își păstrează propria copie; ștergerea din bibliotecă elimină doar copia.',
    'q5': 'Unde e stocată muzica?', 'a5': 'În aplicație, pe iPhone. Se șterge dacă ștergi aplicația.',
    'pr.title': 'Politica de confidențialitate', 'pr.updated': 'Actualizată: 22 noiembrie 2026',
    'pr.intro': 'Sonvy nu colectează, nu stochează și nu transmite date personale.',
    'pr.h1': 'Ce rămâne pe telefon', 'pr.p1': 'Muzica importată, playlisturile și setările sunt păstrate doar pe iPhone, în aplicație. Se șterg odată cu aplicația.',
    'pr.h2': 'Ce nu facem', 'pr.p2': 'Fără cont, fără statistici, fără reclame, fără urmărire și fără servicii terțe. Aplicația nu se conectează la internet.',
    'pr.h3': 'Copii', 'pr.p3': 'Sonvy nu colectează date de la nimeni, inclusiv de la copii.',
    'pr.h4': 'Modificări', 'pr.p4': 'Dacă politica se schimbă, noua versiune apare pe această pagină, cu o dată nouă.',
    'pr.h5': 'Contact', 'pr.p5': 'Pentru întrebări despre confidențialitate: vezi pagina Suport.',
    'foot.made': 'Făcut cu grijă pentru cei care își păstrează muzica.',
  },
  ru: {
    'nav.releases': 'Версии', 'nav.support': 'Поддержка', 'nav.privacy': 'Конфиденциальность',
    'hero.title': 'Ваша музыка. Без интернета.',
    'hero.text': 'Sonvy — простой и быстрый плеер для аудиофайлов, которые у вас уже есть. Импортируйте один раз и слушайте где угодно — в самолёте, в метро, вне сети.',
    'hero.soon': 'Скоро в App Store', 'hero.get': 'Загрузить в App Store',
    'f.offline.t': 'Полностью офлайн', 'f.offline.p': 'Песни хранятся на вашем iPhone. Без стриминга, без загрузки, без трафика.',
    'f.import.t': 'Импорт из «Файлов»', 'f.import.p': 'Выбирайте песни по одной или целую папку из iCloud Drive, с флешки или из любого места в «Файлах».',
    'f.lists.t': 'Плейлисты', 'f.lists.p': 'Создавайте плейлисты, меняйте порядок, слушайте подряд или вперемешку. Поиск по названию и исполнителю.',
    'f.loop.t': 'Петля A–B', 'f.loop.p': 'Повторяйте любой фрагмент песни — удобно учить слова или заниматься на инструменте.',
    'f.sleep.t': 'Таймер сна и затухание', 'f.sleep.p': 'Остановка через время или в конце песни, с плавным затуханием при паузе и запуске.',
    'f.private.t': 'Приватность по умолчанию', 'f.private.p': 'Без аккаунта, рекламы и слежки. Ничего не покидает ваш телефон.',
    'formats': 'Форматы',
    'rel.title': 'Версии', 'rel.lead': 'Что изменилось в каждой версии Sonvy.',
    'rel.upcoming': 'Скоро', 'rel.latest': 'Последняя', 'rel.new': 'Новое', 'rel.fixed': 'Исправлено', 'rel.improved': 'Улучшено',
    'sup.title': 'Поддержка', 'sup.lead': 'Вопросы, проблемы или идеи — мы читаем всё.',
    'sup.issue': 'Сообщить о проблеме', 'sup.mail': 'Написать письмо', 'sup.faq': 'Частые вопросы',
    'q1': 'Как добавить музыку?', 'a1': 'Откройте вкладку «Библиотека», нажмите «Импорт» и выберите файлы или целую папку в приложении «Файлы».',
    'q2': 'Какие форматы поддерживаются?', 'a2': 'MP3, M4A / AAC, ALAC, FLAC, WAV и AIFF.',
    'q3': 'Нужен ли Sonvy интернет?', 'a3': 'Нет. Всё хранится на iPhone и играет офлайн.',
    'q4': 'Удаляется ли исходный файл, если удалить песню?', 'a4': 'Нет. Sonvy хранит свою копию; удаление из библиотеки убирает только её.',
    'q5': 'Где хранится музыка?', 'a5': 'Внутри приложения на iPhone. Она удаляется вместе с приложением.',
    'pr.title': 'Политика конфиденциальности', 'pr.updated': 'Обновлено: 22 ноября 2026',
    'pr.intro': 'Sonvy не собирает, не хранит и не передаёт персональные данные.',
    'pr.h1': 'Что остаётся на устройстве', 'pr.p1': 'Импортированная музыка, плейлисты и настройки хранятся только на iPhone, внутри приложения. Они удаляются вместе с приложением.',
    'pr.h2': 'Чего мы не делаем', 'pr.p2': 'Без аккаунта, аналитики, рекламы, слежки и сторонних сервисов. Приложение не подключается к интернету.',
    'pr.h3': 'Дети', 'pr.p3': 'Sonvy ни у кого не собирает данные, в том числе у детей.',
    'pr.h4': 'Изменения', 'pr.p4': 'Если политика изменится, новая версия появится на этой странице с новой датой.',
    'pr.h5': 'Контакты', 'pr.p5': 'Вопросы о конфиденциальности — на странице «Поддержка».',
    'foot.made': 'Сделано с заботой о тех, у кого своя музыка.',
  },
};

const LANGS = ['en', 'ro', 'ru'];
function pickLang() {
  try { const s = localStorage.getItem('lang'); if (LANGS.includes(s)) return s; } catch (e) {}
  const n = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return LANGS.includes(n) ? n : 'en';
}
let lang = pickLang();
const t = k => (T[lang] && T[lang][k]) || T.en[k] || k;

function chrome() {
  const page = document.body.dataset.page;
  const link = (href, key, id) => `<a href="${href}" class="${page === id ? 'on' : ''}" data-i18n="${key}"></a>`;
  document.body.insertAdjacentHTML('afterbegin', `<header><div class="wrap">
    <a class="brand" href="./"><img src="assets/logo.svg" alt=""><span>Sonvy</span></a>
    <nav>${link('releases.html', 'nav.releases', 'releases')}${link('support.html', 'nav.support', 'support')}${link('privacy.html', 'nav.privacy', 'privacy')}</nav>
    <div class="lang">${LANGS.map(l => `<button data-l="${l}">${l.toUpperCase()}</button>`).join('')}</div>
  </div></header>`);
  document.body.insertAdjacentHTML('beforeend', `<footer><div class="wrap">
    <span>© 2026 Sonvy · <span data-i18n="foot.made"></span></span>
    <span><a href="privacy.html" data-i18n="nav.privacy"></a> · <a href="support.html" data-i18n="nav.support"></a></span>
  </div></footer>`);
  document.querySelectorAll('.lang button').forEach(b => b.onclick = () => {
    lang = b.dataset.l;
    try { localStorage.setItem('lang', lang); } catch (e) {}
    apply();
  });
}

function apply() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.lang button').forEach(b => b.classList.toggle('on', b.dataset.l === lang));
  const store = document.getElementById('store');
  if (store) {
    store.className = SITE.appStore ? 'badge' : 'badge soon';
    store.textContent = SITE.appStore ? t('hero.get') : t('hero.soon');
    if (SITE.appStore) store.href = SITE.appStore; else store.removeAttribute('href');
  }
  const issue = document.getElementById('issue');
  if (issue) issue.href = SITE.issues;
  const mail = document.getElementById('mail');
  if (mail) { mail.hidden = !SITE.supportEmail; mail.href = 'mailto:' + SITE.supportEmail; }
  renderReleases();
}

function renderReleases() {
  const box = document.getElementById('releases');
  if (!box || !window.RELEASES) return;
  const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const fmt = d => new Date(d + 'T12:00:00').toLocaleDateString(lang, { day: 'numeric', month: 'long', year: 'numeric' });
  const firstOut = window.RELEASES.findIndex(r => r.date);
  box.innerHTML = window.RELEASES.map((r, i) => {
    const chip = !r.date ? t('rel.upcoming') : i === firstOut ? t('rel.latest') : '';
    const notes = r.notes[lang] || r.notes.en;
    const groups = ['new', 'improved', 'fixed'].filter(g => notes[g] && notes[g].length).map(g =>
      `<h4>${t('rel.' + g)}</h4><ul>${notes[g].map(x => `<li>${esc(x)}</li>`).join('')}</ul>`).join('');
    return `<article class="card"><div class="head"><span class="ver">${esc(r.version)}</span>` +
      (r.date ? `<span class="date">${fmt(r.date)}</span>` : '') +
      (chip ? `<span class="chip">${chip}</span>` : '') + `</div>${groups}</article>`;
  }).join('');
}

chrome();
apply();
