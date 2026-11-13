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
    link: 'https://www.shopier.com/feelzclub/52898398'
  }
];

// Shopier beden kimlikleri (mağazadaki "Beden" varyasyonu, tüm ürünlerde aynı)
window.BEDEN_ID = { S: '3557358', M: '3557359', L: '3557360', XL: '3557361', '2XL': '3557362' };

// Ürün kartını çizer. kok: sayfanın kök yolu ('' veya '../'), T: çeviri fonksiyonu
window.urunKarti = function (u, kok, T) {
  const en = T('dil') === 'en';
  const fiyat = '₺' + u.fiyat.toLocaleString('tr-TR');
  const hazir = !!u.link;
  const etiket = hazir ? T('yeni') : T('yakinda');
  const pid = hazir ? (u.link.match(/(\d+)\/?$/) || [])[1] : '';
  return `<div class="product real${hazir ? '' : ' bekliyor'}" data-pid="${pid}">
    <div class="pimg swap" tabindex="0">
      <img class="arka" src="${kok}${u.arka}" alt="${u.ad} — arka" loading="lazy">
      <img class="on" src="${kok}${u.on}" alt="${u.ad} — ön" loading="lazy">
      <span class="tag">${etiket}</span>
    </div>
    <h3>${u.ad}</h3>
    <div class="ptur">${en ? u.en : u.tr}</div>
    <div class="price">${fiyat}</div>
    <div class="sizes" role="radiogroup" aria-label="${en ? 'size' : 'beden'}">${u.bedenler.map(b => `<button type="button" class="beden" data-b="${b}"${hazir ? '' : ' disabled'}>${b}</button>`).join('')}</div>
    ${hazir ? `<button type="button" class="satin-al" disabled>${en ? 'choose a size' : 'beden seç'}</button>` : ''}
  </div>`;
};

// Beden seçimi ve "satın al": Shopier ödeme sayfasına gönderir
document.addEventListener('click', function (e) {
  const b = e.target.closest('.product.real .beden');
  if (b) {
    const kart = b.closest('.product');
    kart.querySelectorAll('.beden').forEach(x => x.classList.toggle('secili', x === b));
    kart.dataset.beden = b.dataset.b;
    const btn = kart.querySelector('.satin-al');
    if (btn) { btn.disabled = false; btn.textContent = (document.documentElement.lang === 'en' ? 'buy now · ' : 'satın al · ') + b.dataset.b; }
    return;
  }
  const s = e.target.closest('.product.real .satin-al');
  if (s) {
    const kart = s.closest('.product'); const id = window.BEDEN_ID[kart.dataset.beden];
    if (!id || !kart.dataset.pid) return;
    const f = document.createElement('form');
    f.method = 'post'; f.action = 'https://www.shopier.com/s/shipping/feelzclub';
    const v = { product_id: kart.dataset.pid, first_variation_name: 'Beden', first_variation_id: id, size: id, first: id, quantity: '1' };
    for (const k in v) { const i = document.createElement('input'); i.type = 'hidden'; i.name = k; i.value = v[k]; f.appendChild(i); }
    document.body.appendChild(f); f.submit();
  }
});
