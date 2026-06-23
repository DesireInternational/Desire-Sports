/* ══════════════════════════════════════════════
   DESIRE SPORTS — App Logic v3
   ══════════════════════════════════════════════ */

// ── WORLD CUP DATA (June 23–27 + Knockout) ──
const WC_MATCHES = {
  today: [
    { time:'1:00 PM ET', t1:'🇵🇹 Portugal', t2:'🇺🇿 Uzbekistan', venue:'NRG Stadium, Houston', group:'K', tv:['FOX','Telemundo'], live:false },
    { time:'4:00 PM ET', t1:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',  t2:'🇬🇭 Ghana',      venue:'Gillette Stadium, Boston', group:'L', tv:['FS1','Telemundo'], live:false },
    { time:'7:00 PM ET', t1:'🇵🇦 Panama',   t2:'🇭🇷 Croatia',    venue:'BMO Field, Toronto', group:'L', tv:['FOX','Telemundo'], live:false },
    { time:'10:00 PM ET',t1:'🇨🇴 Colombia', t2:'🇨🇩 DR Congo',   venue:'Estadio Akron, Guadalajara', group:'K', tv:['FS1','Telemundo'], live:false },
  ],
  tomorrow: [
    { time:'3:00 PM ET', t1:'🇨🇭 Switzerland', t2:'🇨🇦 Canada',   venue:'BC Place, Vancouver', group:'B', tv:['FOX','Telemundo'], live:false },
    { time:'3:00 PM ET', t1:'🇧🇦 Bosnia',       t2:'🇶🇦 Qatar',    venue:'Lumen Field, Seattle', group:'B', tv:['FS1','Telemundo'], live:false },
    { time:'6:00 PM ET', t1:'🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland',  t2:'🇧🇷 Brazil',   venue:'Hard Rock Stadium, Miami', group:'C', tv:['FOX','Telemundo'], live:false },
    { time:'6:00 PM ET', t1:'🇲🇦 Morocco',      t2:'🇭🇹 Haiti',    venue:'Mercedes-Benz Stadium, Atlanta', group:'C', tv:['FS1','Universo'], live:false },
    { time:'9:00 PM ET', t1:'🇨🇿 Czechia',      t2:'🇲🇽 Mexico',   venue:'Estadio Azteca, Mexico City', group:'A', tv:['FOX','Telemundo'], live:false },
    { time:'9:00 PM ET', t1:'🇿🇦 South Africa', t2:'🇰🇷 South Korea', venue:'Estadio BBVA, Monterrey', group:'A', tv:['FS1','Universo'], live:false },
  ],
  upcoming: [
    { time:'Jun 25 • 4PM ET', t1:'🇪🇨 Ecuador', t2:'🇩🇪 Germany',  venue:'AT&T Stadium, Dallas', group:'E', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 25 • 7PM ET', t1:'🇯🇵 Japan',   t2:'🇸🇪 Sweden',   venue:'Levi\'s Stadium, San Francisco', group:'F', tv:['FS1','Telemundo'], live:false },
    { time:'Jun 25 • 7PM ET', t1:'🇹🇳 Tunisia', t2:'🇳🇱 Netherlands', venue:'SoFi Stadium, Los Angeles', group:'F', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 25 • 10PM ET',t1:'🇹🇷 Türkiye', t2:'🇺🇸 USA',       venue:'SoFi Stadium, Los Angeles', group:'D', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 26 • 3PM ET', t1:'🇳🇴 Norway',  t2:'🇫🇷 France',    venue:'MetLife Stadium, New Jersey', group:'I', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 26 • 8PM ET', t1:'🇺🇾 Uruguay', t2:'🇪🇸 Spain',     venue:'Arrowhead Stadium, Kansas City', group:'H', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 27 • 5PM ET', t1:'🇵🇦 Panama',  t2:'🏴󠁧󠁢󠁥󠁮󠁧󠁿 England',  venue:'Gillette Stadium, Boston', group:'L', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 27 • 7:30PM', t1:'🇨🇴 Colombia',t2:'🇵🇹 Portugal',  venue:'NRG Stadium, Houston', group:'K', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 27 • 10PM ET',t1:'🇩🇿 Algeria', t2:'🇦🇹 Austria',   venue:'AT&T Stadium, Dallas', group:'J', tv:['FOX','Telemundo'], live:false },
    { time:'Jun 27 • 10PM ET',t1:'🇦🇷 Argentina',t2:'🇨🇦 Canada',   venue:'MetLife Stadium, New Jersey', group:'J', tv:['FS1','Telemundo'], live:false },
  ]
};

// TV channel → which IPTV channel keyword to search for
const TV_CHANNEL_SEARCH = {
  'FOX':       'fox sports',
  'FS1':       'fox sports 1',
  'Telemundo': 'telemundo',
  'Universo':  'universo',
  'BBC':       'bbc',
  'ITV':       'itv',
  'TSN':       'tsn',
  'CTV':       'ctv',
  'beIN':      'bein',
};

const TICKER_ITEMS = [
  '⚽ FIFA World Cup 2026 — Argentina vs Austria: Messi scores hat-trick!',
  '🏀 NBA Finals — Game 7 Tonight',
  '🎾 Wimbledon — Quarter Finals Underway',
  '🏏 India vs Australia — Test Series Day 3',
  '🏎️ F1 British Grand Prix — Qualifying Results',
  '⛳ PGA Tour — Round 2 Leaderboard',
  '🥊 UFC 314 — Main Event Tonight',
  '🏉 Rugby — Lions Tour 2026',
  '⚾ MLB — Home Run Derby Highlights',
  '🏒 NHL Free Agency — Big Signings',
];

// ── M3U SOURCES ──
const SOURCES = [
  { url:'https://iptv-org.github.io/iptv/categories/sports.m3u', label:'Sports Global', region:'global' },
  { url:'https://iptv-org.github.io/iptv/countries/us.m3u',      label:'USA',           region:'americas' },
  { url:'https://iptv-org.github.io/iptv/countries/uk.m3u',      label:'UK',            region:'europe' },
  { url:'https://iptv-org.github.io/iptv/countries/de.m3u',      label:'Germany',       region:'europe' },
  { url:'https://iptv-org.github.io/iptv/countries/fr.m3u',      label:'France',        region:'europe' },
  { url:'https://iptv-org.github.io/iptv/countries/es.m3u',      label:'Spain',         region:'europe' },
  { url:'https://iptv-org.github.io/iptv/countries/it.m3u',      label:'Italy',         region:'europe' },
  { url:'https://iptv-org.github.io/iptv/countries/br.m3u',      label:'Brazil',        region:'americas' },
  { url:'https://iptv-org.github.io/iptv/countries/ca.m3u',      label:'Canada',        region:'americas' },
  { url:'https://iptv-org.github.io/iptv/regions/amer.m3u',      label:'Americas',      region:'americas' },
  { url:'https://iptv-org.github.io/iptv/regions/eur.m3u',       label:'Europe',        region:'europe' },
  { url:'https://iptv-org.github.io/iptv/regions/asia.m3u',      label:'Asia',          region:'asia' },
  { url:'https://iptv-org.github.io/iptv/regions/afr.m3u',       label:'Africa',        region:'africa' },
  { url:'https://iptv-org.github.io/iptv/regions/oce.m3u',       label:'Oceania',       region:'oceania' },
  { url:'https://raw.githubusercontent.com/Free-TV/IPTV/master/playlist.m3u8', label:'Free TV', region:'global' },
  { url:'https://30a-tv.com/feeds/vidaa/golf.m3u8',              label:'Golf TV',       region:'global' },
];

const PROXIES = [
  u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  u => `https://corsproxy.io/?${encodeURIComponent(u)}`,
  u => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
];

const SPORT_MAP = {
  football:   ['football','soccer','fifa','uefa','laliga','premier league','bundesliga','serie a','ligue 1','mls','copa','champions','espn fc','bein sport','setanta','dazn','supersport','canal+ sport','sport tv','sportv','tnt sports','sky sports','bt sport'],
  cricket:    ['cricket','ipl','bbl','t20','test match','star sports','sony six','dd sports','willow','sky cricket'],
  basketball: ['basketball','nba','nbl','fiba','euroleague','nbatv'],
  tennis:     ['tennis','wimbledon','roland garros','atp','wta','us open','australian open'],
  motorsport: ['motorsport','formula 1','formula1','f1 ','nascar','motogp','rally','indycar','supercars','motor tv'],
  golf:       ['golf','pga','lpga','masters','the open','30a','golf channel'],
  boxing:     ['boxing','mma','ufc','fight','wrestling','wwe','bellator'],
  rugby:      ['rugby','nrl','super rugby','premiership rugby'],
  baseball:   ['baseball','mlb'],
  hockey:     ['hockey','nhl','ice hockey'],
};
const SPORT_EMOJI = { football:'⚽',cricket:'🏏',basketball:'🏀',tennis:'🎾',motorsport:'🏎️',golf:'⛳',boxing:'🥊',rugby:'🏉',baseball:'⚾',hockey:'🏒',sports:'🏆' };

// ── STATE ──
let allChannels = [], filtered = [], currentCat = 'all', currentSearch = '', hlsInst = null, currentStreamUrl = '', currentPage = 0;
const PAGE = 60;
let sourcesLoaded = 0;

// ══ TICKER ══
function initTicker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  document.getElementById('tickerInner').innerHTML =
    items.map(t => `<span>${t}</span><span class="sep">|</span>`).join('');
}

// ══ WORLD CUP PANEL ══
let wcTab = 'today';
window.showWcTab = function(tab) {
  wcTab = tab;
  document.querySelectorAll('.wc-tab').forEach(b => b.classList.toggle('active', b.textContent.toLowerCase().startsWith(tab.slice(0,5))));
  renderWC();
};
function renderWC() {
  const matches = WC_MATCHES[wcTab] || [];
  document.getElementById('wc-matches').innerHTML = matches.map((m,i) => `
    <div class="match-card" onclick="searchChannelForMatch(${i}, '${wcTab}')">
      ${m.live ? '<div class="match-live-badge">LIVE</div>' : ''}
      <div class="match-time">${m.time} &nbsp;·&nbsp; Group ${m.group}</div>
      <div class="match-teams">
        <div class="match-team"><span class="team-flag">${m.t1.split(' ')[0]}</span><div class="team-name">${m.t1.replace(/^\S+\s/,'')}</div></div>
        <div class="vs-badge">VS</div>
        <div class="match-team"><span class="team-flag">${m.t2.split(' ')[0]}</span><div class="team-name">${m.t2.replace(/^\S+\s/,'')}</div></div>
      </div>
      <div class="match-meta">
        <div class="match-venue">📍 ${m.venue}</div>
        <div class="match-tv">${m.tv.map(tv => `<span class="tv-chip" onclick="event.stopPropagation();searchTV('${tv}')">${tv}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

window.searchChannelForMatch = function(idx, tab) {
  const m = WC_MATCHES[tab][idx];
  const teamName = m.t1.replace(/^\S+\s/,'').split(' ')[0];
  document.getElementById('searchInput').value = '';
  currentSearch = '';
  currentCat = 'football';
  document.querySelectorAll('.sp-tab').forEach(b => b.classList.toggle('active', b.dataset.cat === 'football'));
  applyFilter();
  // scroll to grid
  document.getElementById('channelGrid').scrollIntoView({behavior:'smooth', block:'start'});
};

window.searchTV = function(tvName) {
  const kw = TV_CHANNEL_SEARCH[tvName] || tvName.toLowerCase();
  document.getElementById('searchInput').value = kw;
  currentSearch = kw;
  currentCat = 'all';
  document.querySelectorAll('.sp-tab').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  currentPage = 0;
  applyFilter();
  document.getElementById('channelGrid').scrollIntoView({behavior:'smooth', block:'start'});
};

// ══ TAB ══
window.setTab = function(btn) {
  currentCat = btn.dataset.cat;
  currentPage = 0;
  document.querySelectorAll('.sp-tab').forEach(b => b.classList.toggle('active', b === btn));
  applyFilter();
};

// ══ SEARCH ══
document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value.toLowerCase().trim();
  currentPage = 0;
  applyFilter();
});

// ══ FETCH ══
async function fetchText(url) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 15000);
  try {
    const r = await fetch(url, { signal: ctrl.signal });
    clearTimeout(t);
    if (!r.ok) return null;
    return await r.text();
  } catch { clearTimeout(t); return null; }
}

async function fetchM3U(src) {
  let text = await fetchText(src.url);
  if (text && text.includes('#EXTINF')) return text;
  for (const px of PROXIES) {
    text = await fetchText(px(src.url));
    if (text && text.includes('#EXTINF')) return text;
  }
  return null;
}

// ══ PARSE ══
function parseM3U(text, src) {
  const chs = []; let meta = null;
  for (const raw of text.replace(/\r/g,'').split('\n')) {
    const l = raw.trim();
    if (l.startsWith('#EXTINF:')) {
      meta = { name:'', logo:'', group:'', country:'', url:'', region:src.region, sourceLabel:src.label };
      const ci = l.lastIndexOf(','); meta.name = ci>=0 ? l.slice(ci+1).trim() : 'Channel';
      const g  = l.match(/group-title="([^"]*)"/i);
      const lg = l.match(/tvg-logo="([^"]*)"/i);
      const co = l.match(/tvg-country="([^"]*)"/i);
      if (g)  meta.group   = g[1];
      if (lg) meta.logo    = lg[1];
      if (co) meta.country = co[1];
    } else if (l && !l.startsWith('#') && meta) {
      meta.url = l;
      if (meta.name && meta.url) { meta.sport = detectSport(meta.name+' '+meta.group); chs.push(meta); }
      meta = null;
    }
  }
  return chs;
}

function detectSport(text) {
  const t = text.toLowerCase();
  for (const [s, kws] of Object.entries(SPORT_MAP)) { if (kws.some(k => t.includes(k))) return s; }
  if (/sport|espn|bein|eurosport|dazn|sky|star|sony|fox sport|tnt|nbc sport|cbs sport|abc/.test(t)) return 'sports';
  return null;
}

function isSports(ch) { return ch.sport !== null; }

// ══ LOAD ALL ══
async function loadAll() {
  document.getElementById('srcTotal').textContent = SOURCES.length;
  renderSkeleton();

  const tasks = SOURCES.map(src => fetchM3U(src).then(text => {
    sourcesLoaded++;
    document.getElementById('srcLoaded').textContent = sourcesLoaded;
    document.getElementById('progressBar').style.width = Math.round(sourcesLoaded/SOURCES.length*100)+'%';
    if (!text) return;
    const chs = parseM3U(text, src);
    const sports = src.url.includes('categories/sports') || src.url.includes('golf') ? chs : chs.filter(isSports);
    const seen = new Set(allChannels.map(c=>c.url));
    allChannels.push(...sports.filter(c=>!seen.has(c.url)));
    document.getElementById('chanCount').textContent = allChannels.length+' channels';
    currentPage = 0;
    applyFilter();
  }));

  await Promise.allSettled(tasks);
  document.getElementById('statusBar').style.display = 'none';
}

// ══ FILTER ══
function applyFilter() {
  const regionCats = ['americas','europe','asia','africa','oceania','global'];
  filtered = allChannels.filter(ch => {
    const catOk = currentCat==='all' ? true
      : regionCats.includes(currentCat) ? ch.region===currentCat
      : ch.sport===currentCat;
    const sq = currentSearch;
    const searchOk = !sq || ch.name.toLowerCase().includes(sq) || (ch.group||'').toLowerCase().includes(sq);
    return catOk && searchOk;
  });
  renderGrid(false);
}

// ══ RENDER GRID ══
function renderGrid(append) {
  const grid = document.getElementById('channelGrid');
  const start = append ? currentPage*PAGE : 0;
  const slice = filtered.slice(start, start+PAGE);

  if (!append) {
    if (!filtered.length) {
      grid.innerHTML = `<div class="empty-state"><div class="empty-icon">📡</div><h3>No channels found</h3><p>Try a different category or search term.</p></div>`;
      document.getElementById('loadMoreBtn').style.display = 'none';
      return;
    }
    grid.innerHTML = '';
  }

  slice.forEach(ch => grid.appendChild(buildCard(ch)));
  document.getElementById('loadMoreBtn').style.display = (currentPage+1)*PAGE < filtered.length ? 'block' : 'none';
}

function renderSkeleton() {
  document.getElementById('channelGrid').innerHTML = Array.from({length:12},()=>
    `<div class="channel-card skeleton"><div class="card-thumb sk-thumb"></div><div class="card-body"><div class="sk-line w70"></div><div class="sk-line w40"></div></div></div>`).join('');
}

document.getElementById('loadMoreBtn').addEventListener('click',()=>{ currentPage++; renderGrid(true); });

function buildCard(ch) {
  const d = document.createElement('div');
  d.className = 'channel-card';
  d.onclick = () => openPlayer(ch);
  const emoji = SPORT_EMOJI[ch.sport]||'📺';
  const isHD  = /\bHD\b/i.test(ch.name);
  d.innerHTML = `
    <div class="card-thumb">
      ${ch.logo?`<img class="ch-logo" src="${ch.logo}" alt="" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`:'' }
      <div class="ch-fallback" style="${ch.logo?'display:none':'display:flex'}">${emoji}</div>
      <div class="play-overlay"><div class="play-circle">▶</div></div>
      ${isHD?'<span class="hd-badge">HD</span>':''}
    </div>
    <div class="card-body">
      <div class="ch-name" title="${ch.name}">${ch.name}</div>
      <div class="ch-tags">
        <span class="tag tag-sport">${emoji} ${ch.sport||'sports'}</span>
        ${ch.country?`<span class="tag tag-country">${ch.country}</span>`:''}
        <span class="tag tag-live">● LIVE</span>
      </div>
    </div>`;
  return d;
}

// ══════════════════════════════════════════
//  PLAYER — with smart VLC fallback
// ══════════════════════════════════════════
function openPlayer(ch) {
  currentStreamUrl = ch.url;

  document.getElementById('modalName').textContent    = ch.name;
  document.getElementById('modalSport').textContent   = (SPORT_EMOJI[ch.sport]||'📺')+' '+(ch.sport||'sports');
  document.getElementById('modalSrc').textContent     = ch.sourceLabel;
  document.getElementById('streamUrl').textContent    = ch.url;
  document.getElementById('copyUrlBtn').dataset.url   = ch.url;
  document.getElementById('mxBtn').href               = 'intent:'+ch.url+'#Intent;package=com.mxtech.videoplayer.ad;end';
  document.getElementById('dlLink').href              = ch.url;
  document.getElementById('vlcFrame').src             = '';
  document.getElementById('vlcFrame').style.display   = 'none';

  resetPlayer();
  document.getElementById('playerModal').classList.add('open');
  document.body.style.overflow = 'hidden';

  startStream(ch.url);
}

function resetPlayer() {
  const vid = document.getElementById('videoPlayer');
  if (hlsInst) { hlsInst.destroy(); hlsInst = null; }
  vid.pause(); vid.src = ''; vid.style.display = 'none';
  document.getElementById('pLoading').style.display = 'flex';
  document.getElementById('pError').style.display   = 'none';
}

function showReady() {
  document.getElementById('pLoading').style.display = 'none';
  document.getElementById('pError').style.display   = 'none';
  document.getElementById('videoPlayer').style.display = 'block';
}

function showError() {
  document.getElementById('pLoading').style.display = 'none';
  document.getElementById('pError').style.display   = 'flex';
  // Auto-trigger VLC protocol — browser will prompt "Open VLC?"
  triggerVLC();
}

// ─── Try browser HLS/video play ───
function startStream(url) {
  const vid = document.getElementById('videoPlayer');
  const isHLS = /\.m3u8|m3u/.test(url);

  if (window.Hls && Hls.isSupported() && isHLS) {
    hlsInst = new Hls({ enableWorker:true, lowLatencyMode:true, maxBufferLength:30 });
    hlsInst.loadSource(url);
    hlsInst.attachMedia(vid);
    hlsInst.on(Hls.Events.MANIFEST_PARSED, () => { showReady(); vid.play().catch(()=>{}); });
    hlsInst.on(Hls.Events.ERROR, (_, data) => { if (data.fatal) showError(); });
    return;
  }
  if (vid.canPlayType('application/vnd.apple.mpegurl') && isHLS) {
    vid.src = url; vid.oncanplay = showReady; vid.onerror = showError;
    vid.play().catch(showError); return;
  }
  // non-HLS
  vid.src = url;
  vid.oncanplay = showReady;
  vid.onerror   = showError;
  vid.play().catch(showError);
}

// ─── VLC protocol trigger ───
function triggerVLC() {
  if (!currentStreamUrl) return;
  // Use vlc:// protocol — OS will auto-open VLC
  const a = document.createElement('a');
  a.href = 'vlc://' + currentStreamUrl;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

window.openVLC = function() { triggerVLC(); };

window.copyUrl = function() {
  navigator.clipboard.writeText(currentStreamUrl).then(() => {
    const btn = document.getElementById('copyUrlBtn');
    btn.textContent = '✅ Copied!';
    setTimeout(()=>btn.textContent='📋 Copy URL', 2000);
  });
};
window.copyUrlErr = function() {
  navigator.clipboard.writeText(currentStreamUrl).then(() => {
    const btn = document.querySelector('.btn-copy-err');
    btn.textContent='✅ Copied!';
    setTimeout(()=>btn.textContent='📋 Copy Stream URL',2000);
  });
};

window.closePlayer = function() {
  if (hlsInst) { hlsInst.destroy(); hlsInst = null; }
  const vid = document.getElementById('videoPlayer');
  vid.pause(); vid.src = '';
  document.getElementById('playerModal').classList.remove('open');
  document.body.style.overflow = '';
};

document.getElementById('playerModal').addEventListener('click', e => {
  if (e.target === document.getElementById('playerModal')) window.closePlayer();
});
document.addEventListener('keydown', e => { if (e.key==='Escape') window.closePlayer(); });

// ══ INIT ══
document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  renderWC();
  loadAll();
});
