// Mağaza ürünleri. Yeni ürün eklemek için bu listeye bir satır eklemek yeterli.
// link: Shopier ürün linki (boşsa ürün "yakında" olarak görünür)
// gizli: true olan ürünler sitede gösterilmez
window.URUNLER = [
  {
    id: 'fortune-favors-the-brave-tee',
    ad: 'FORTUNE FAVORS THE BRAVE TEE',
    fiyat: 1599,
    arka: 'assets/urunler/fortune-favors-the-brave-tee-arka.webp',
    on: 'assets/urunler/fortune-favors-the-brave-tee-on.webp',
    bedenler: ['S', 'M', 'L', 'XL', '2XL'],
    tr: 'haki oversize unisex tişört',
    en: 'khaki oversize unisex tee',
    aciklama_tr: 'Haki, oversize kalıp unisex tişört. Ön yüzde sağ göğüste kamuflaj YM monogramı, arka yüzde büyük FORTUNE FAVORS THE BRAVE baskısı.',
    aciklama_en: 'Khaki oversize unisex tee. Camouflage YM monogram on the right chest, large FORTUNE FAVORS THE BRAVE print on the back.',
    link: 'https://www.shopier.com/feelzclub/52897980'
  },
  {
    id: 'break-the-chains-tee',
    ad: 'BREAK THE CHAINS TEE',
    fiyat: 1599,
    arka: 'assets/urunler/break-the-chains-tee-arka.webp',
    on: 'assets/urunler/break-the-chains-tee-on.webp',
    bedenler: ['S', 'M', 'L', 'XL', '2XL'],
    tr: 'gri oversize unisex tişört',
    en: 'grey oversize unisex tee',
    aciklama_tr: 'Gri, oversize kalıp unisex tişört. Ön yüzde sağ göğüste çini desenli YM monogramı, arka yüzde büyük BREAK THE CHAINS baskısı. Tasarım, çini desenlerinden ilham almıştır.',
    aciklama_en: 'Grey oversize unisex tee. Tile-patterned YM monogram on the right chest, large BREAK THE CHAINS print on the back. Inspired by Turkish çini tile patterns.',
    link: 'https://www.shopier.com/feelzclub/52898066'
  },
  {
    id: 'sports-club-hoodie',
    ad: 'SPORTS CLUB HOODIE',
    fiyat: 2399,
    arka: 'assets/urunler/sports-club-hoodie-on.webp', // ilk görünen: baskılı ön yüz
    on: 'assets/urunler/sports-club-hoodie-arka.webp',
    bedenler: ['S', 'M', 'L', 'XL', '2XL'],
    tr: 'sarı oversize unisex hoodie',
    en: 'yellow oversize unisex hoodie',
    aciklama_tr: 'Sarı, oversize kalıp unisex kapüşonlu sweatshirt. Ön yüzde orta göğüste SPORTS CLUB baskısı.',
    aciklama_en: 'Yellow oversize unisex hoodie. SPORTS CLUB print on the center chest.',
    link: 'https://www.shopier.com/feelzclub/52898258'
  },
  {
    id: 'let-it-happen-tee',
    ad: 'LET IT HAPPEN TEE',
    fiyat: 1599,
    arka: 'assets/urunler/let-it-happen-tee-arka.webp',
    on: 'assets/urunler/let-it-happen-tee-on.webp',
    bedenler: ['S', 'M', 'L', 'XL', '2XL'],
    tr: 'siyah oversize unisex tişört',
    en: 'black oversize unisex tee',
    aciklama_tr: 'Siyah, oversize kalıp unisex tişört. Ön yüzde sağ göğüste halı desenli YM monogramı, arka yüzde büyük LET IT HAPPEN baskısı. Tasarım, geleneksel halı desenlerinden ilham almıştır.',
    aciklama_en: 'Black oversize unisex tee. Rug-patterned YM monogram on the right chest, large LET IT HAPPEN print on the back. Inspired by traditional rug patterns.',
    link: 'https://www.shopier.com/feelzclub/52898338'
  },
  {
    id: 'portrait-hoodie',
    ad: 'PORTRAIT HOODIE',
    fiyat: 2399,
    arka: 'assets/urunler/portrait-hoodie-arka.webp',
    on: 'assets/urunler/portrait-hoodie-on.webp',
    bedenler: ['S', 'M', 'L', 'XL', '2XL'],
    tr: 'siyah oversize unisex hoodie',
    en: 'black oversize unisex hoodie',
    aciklama_tr: 'Siyah, oversize kalıp unisex kapüşonlu sweatshirt. Ön yüzde sağ göğüste YM monogramı, arka yüzde süslü çerçeve içinde büyük Yasir Miy portresi.',
    aciklama_en: 'Black oversize unisex hoodie. YM monogram on the right chest, large framed Yasir Miy portrait on the back.',
    link: 'https://www.shopier.com/feelzclub/52898398'
  }
];

// Shopier beden kimlikleri (mağazadaki "Beden" varyasyonu, tüm ürünlerde aynı)
window.BEDEN_ID = { S: '3557358', M: '3557359', L: '3557360', XL: '3557361', '2XL': '3557362' };
const _en = () => document.documentElement.lang === 'en';
const _Y = { tr: { yeni:'yeni', yakinda:'yakında', bsec:'beden seç', al:'satın al', on:'ön', arka:'arka', tum:'tüm ürünler', bil1:'siparişe özel üretilir', bil2:'türkiye içi ücretsiz kargo', bil3:'sınırlı sayıda', beden:'beden', kapat:'kapat', buyut:'büyüt' },
             en: { yeni:'new', yakinda:'soon', bsec:'choose a size', al:'buy now', on:'front', arka:'back', tum:'all products', bil1:'made to order', bil2:'free shipping within türkiye', bil3:'limited quantity', beden:'size', kapat:'close', buyut:'zoom' } };
const Y = k => _Y[_en() ? 'en' : 'tr'][k];
const _fiyat = u => '₺' + u.fiyat.toLocaleString('tr-TR');
const _pid = u => u.link ? (u.link.match(/(\d+)\/?$/) || [])[1] : '';
const _bedenler = (u, hazir) => `<div class="sizes" role="radiogroup" aria-label="${Y('beden')}">${u.bedenler.map(b => `<button type="button" class="beden" data-b="${b}"${hazir ? '' : ' disabled'}>${b}</button>`).join('')}</div>`;

// Ürün kartı (ana sayfa ve shop). Karta tıklayınca ürün sayfası, fotoğrafa tıklayınca büyük görünüm açılır.
window.urunKarti = function (u, kok, T) {
  const hazir = !!u.link, sayfa = `${kok}shop/${u.id}/`;
  return `<div class="product real${hazir ? '' : ' bekliyor'}" data-pid="${_pid(u)}" data-id="${u.id}" data-href="${sayfa}">
    <div class="pimg swap" role="button" tabindex="0" aria-label="${u.ad} — ${Y('buyut')}" data-kok="${kok}">
      <img class="arka" src="${kok}${u.arka}" alt="${u.ad}" loading="lazy">
      <img class="on" src="${kok}${u.on}" alt="${u.ad}" loading="lazy">
      <span class="tag">${hazir ? Y('yeni') : Y('yakinda')}</span>
      <span class="zoom" aria-hidden="true">+</span>
    </div>
    <h3><a href="${sayfa}">${u.ad}</a></h3>
    <div class="ptur">${_en() ? u.en : u.tr}</div>
    <div class="price">${_fiyat(u)}</div>
    ${_bedenler(u, hazir)}
    ${hazir ? `<button type="button" class="satin-al" disabled>${Y('bsec')}</button>` : ''}
  </div>`;
};

// Ürün sayfası (shop/<ürün>/)
window.urunSayfasi = function (id, kok) {
  const u = (window.URUNLER || []).find(x => x.id === id); const el = document.getElementById('urun-detay');
  if (!u || !el) return;
  const hazir = !!u.link;
  document.title = u.ad.toLowerCase() + ' — yasir miy';
  el.innerHTML = `<div class="product real urun-sayfa" data-pid="${_pid(u)}" data-id="${u.id}">
    <div class="galeri">
      <div class="pimg ana" role="button" tabindex="0" aria-label="${Y('buyut')}" data-kok="${kok}" data-yuz="0">
        <img src="${kok}${u.arka}" alt="${u.ad}"><span class="zoom" aria-hidden="true">+</span>
      </div>
      <div class="kucukler">
        <button type="button" class="kucuk secili" data-yuz="0"><img src="${kok}${u.arka}" alt=""></button>
        <button type="button" class="kucuk" data-yuz="1"><img src="${kok}${u.on}" alt=""></button>
      </div>
    </div>
    <div class="bilgi">
      <span class="tape">DROP 01</span>
      <h1>${u.ad}</h1>
      <div class="ptur">${_en() ? u.en : u.tr}</div>
      <div class="price">${_fiyat(u)}</div>
      <p class="aciklama">${_en() ? u.aciklama_en : u.aciklama_tr}</p>
      ${_bedenler(u, hazir)}
      ${hazir ? `<button type="button" class="satin-al" disabled>${Y('bsec')}</button>` : ''}
      <ul class="notlar"><li>${Y('bil1')}</li><li>${Y('bil2')}</li><li>${Y('bil3')}</li></ul>
      <a class="geri" href="${kok}shop/">← ${Y('tum')}</a>
    </div>
  </div>`;
};

// Büyük görünüm (pop-up)
let _lb = null;
function lightbox(u, kok, yuz) {
  if (!_lb) {
    _lb = document.createElement('div'); _lb.className = 'lightbox'; _lb.setAttribute('role', 'dialog'); _lb.setAttribute('aria-modal', 'true');
    _lb.innerHTML = `<button type="button" class="lb-kapat" aria-label="kapat">×</button><img class="lb-img" alt=""><div class="lb-alt"><div class="lb-ad"></div><div class="lb-yuz"></div></div>`;
    document.body.appendChild(_lb);
    _lb.addEventListener('click', e => { if (e.target === _lb || e.target.closest('.lb-kapat')) lbKapat(); });
  }
  const yuzler = [u.arka, u.on]; let i = yuz || 0;
  const goster = () => {
    _lb.querySelector('.lb-img').src = kok + yuzler[i]; _lb.querySelector('.lb-img').alt = u.ad;
    _lb.querySelector('.lb-ad').textContent = u.ad;
    _lb.querySelector('.lb-yuz').innerHTML = [0, 1].map(k => `<button type="button" data-k="${k}" class="${k === i ? 'secili' : ''}">${k === 0 ? (u.id === 'sports-club-hoodie' ? Y('on') : Y('arka')) : (u.id === 'sports-club-hoodie' ? Y('arka') : Y('on'))}</button>`).join('');
    _lb.querySelectorAll('.lb-yuz button').forEach(b => b.onclick = ev => { ev.stopPropagation(); i = +b.dataset.k; goster(); });
  };
  _lb._ileri = () => { i = 1 - i; goster(); };
  _lb.querySelector('.lb-kapat').setAttribute('aria-label', Y('kapat'));
  goster(); _lb.classList.add('acik'); document.body.style.overflow = 'hidden';
  _lb.querySelector('.lb-kapat').focus();
}
function lbKapat() { if (_lb) { _lb.classList.remove('acik'); document.body.style.overflow = ''; } }
document.addEventListener('keydown', e => {
  if (_lb && _lb.classList.contains('acik')) {
    if (e.key === 'Escape') lbKapat();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') _lb._ileri();
    return;
  }
  const p = e.target.closest && e.target.closest('.product.real .pimg');
  if (p && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); p.click(); }
});

document.addEventListener('click', function (e) {
  const kart = e.target.closest('.product.real'); if (!kart) return;
  const u = (window.URUNLER || []).find(x => x.id === kart.dataset.id);
  // fotoğraf → büyük görünüm
  const p = e.target.closest('.pimg');
  if (p && u) { lightbox(u, p.dataset.kok, +(p.dataset.yuz || 0)); return; }
  // ürün sayfasındaki küçük görseller
  const k = e.target.closest('.kucuk');
  if (k && u) { const ana = kart.querySelector('.pimg.ana'); ana.dataset.yuz = k.dataset.yuz; ana.querySelector('img').src = ana.dataset.kok + (k.dataset.yuz === '1' ? u.on : u.arka);
    kart.querySelectorAll('.kucuk').forEach(x => x.classList.toggle('secili', x === k)); return; }
  // beden seçimi
  const b = e.target.closest('.beden');
  if (b) {
    kart.querySelectorAll('.beden').forEach(x => x.classList.toggle('secili', x === b));
    kart.dataset.beden = b.dataset.b;
    const btn = kart.querySelector('.satin-al');
    if (btn) { btn.disabled = false; btn.textContent = Y('al') + ' · ' + b.dataset.b; }
    return;
  }
  // satın al → Shopier ödeme sayfası
  const s = e.target.closest('.satin-al');
  if (s) {
    const id = window.BEDEN_ID[kart.dataset.beden];
    if (!id || !kart.dataset.pid) return;
    const f = document.createElement('form');
    f.method = 'post'; f.action = 'https://www.shopier.com/s/shipping/feelzclub';
    const v = { product_id: kart.dataset.pid, first_variation_name: 'Beden', first_variation_id: id, size: id, first: id, quantity: '1' };
    for (const n in v) { const i = document.createElement('input'); i.type = 'hidden'; i.name = n; i.value = v[n]; f.appendChild(i); }
    document.body.appendChild(f); f.submit(); return;
  }
  // kartın geri kalanı → ürün sayfası
  if (kart.dataset.href && !e.target.closest('a,button')) location.href = kart.dataset.href;
});
