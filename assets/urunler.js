// Mağaza ürünleri. Yeni ürün eklemek için bu listeye bir satır eklemek yeterli.
// link: Shopier ürün linki (boşsa ürün "yakında" olarak görünür)
// gizli: true olan ürünler sitede gösterilmez
window.URUNLER = [
  {
    id: 'bana-beni-anlat-tee',
    ad: 'BANA BENİ ANLAT TEE',
    fiyat: 1599,
    arka: 'assets/urunler/bana-beni-anlat-tee-arka.jpg',
    on: 'assets/urunler/bana-beni-anlat-tee-on.jpg',
    bedenler: ['S', 'M', 'L', 'XL', '2XL'],
    tr: 'siyah oversize unisex tişört',
    en: 'black oversize unisex tee',
    link: '',
    gizli: true // şimdilik sitede gösterilmiyor
  }
];

// Ürün kartını çizer. kok: sayfanın kök yolu ('' veya '../'), T: çeviri fonksiyonu
window.urunKarti = function (u, kok, T) {
  const fiyat = '₺' + u.fiyat.toLocaleString('tr-TR');
  const hazir = !!u.link;
  const etiket = hazir ? T('yeni') : T('yakinda');
  return `<a class="product real${hazir ? '' : ' bekliyor'}" ${hazir ? `href="${u.link}" target="_blank" rel="noopener"` : 'aria-disabled="true"'}>
    <div class="pimg swap">
      <img class="arka" src="${kok}${u.arka}" alt="${u.ad} — arka" loading="lazy">
      <img class="on" src="${kok}${u.on}" alt="${u.ad} — ön" loading="lazy">
      <span class="tag">${etiket}</span>
    </div>
    <h3>${u.ad}</h3>
    <div class="ptur">${T('dil') === 'en' ? u.en : u.tr}</div>
    <div class="price">${fiyat}</div>
    <div class="sizes">${u.bedenler.map(b => `<span>${b}</span>`).join('')}</div>
  </a>`;
};
