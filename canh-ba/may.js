// CANH BA — máy game. Dữ liệu ở du-lieu/*.js (VU, LOAI, DO_NGHE, NV, LE_SO).
'use strict';
const $ = (s) => document.querySelector(s);
const TN = 'tai-nguyen/';
const KHOA_LUU = 'canh-ba-luu-1';
const HANG = { xau: 0, vua: 1, tot: 2 };
const TEN_KQ = { tot: 'Siêu thoát', vua: 'Trấn tạm', xau: 'Thất bại' };

let G = { xong: {}, manh: {}, am: 1, S: null };   // lưu lâu dài
let S = null;                                      // vụ đang chơi
let V = null;                                      // dữ liệu vụ đang chơi

// ── lưu ─────────────────────────────────────────────────────────────────────
function luu() { G.S = S; G.t = Date.now(); if (TK.nguoi) G.ai = TK.nguoi.email; TK.luu(G); try { localStorage.setItem(KHOA_LUU, JSON.stringify(G)); } catch (e) { /* trình duyệt chặn lưu thì thôi */ } }
function nap() { try { const d = JSON.parse(localStorage.getItem(KHOA_LUU)); if (d) G = Object.assign(G, d); } catch (e) { /* lưu hỏng thì chơi mới */ } }

// ── âm thanh ────────────────────────────────────────────────────────────────
const nhac = new Audio(); nhac.loop = true;
const tim = new Audio(TN + 'sfx/tim.mp3'); tim.loop = true; tim.volume = 0;
const gio = new Audio(TN + 'sfx/gio.mp3'); gio.loop = true; gio.volume = 0;
let nhacDang = '', hen = null;
function phatNhac(ten) {
  if (ten === nhacDang) return;
  nhacDang = ten;
  clearInterval(hen);
  const dich = 0.5 * G.am;
  hen = setInterval(() => {                       // nhỏ dần bài cũ rồi đổi bài
    if (nhac.src && nhac.volume > 0.04 && !nhac.paused) { nhac.volume = Math.max(0, nhac.volume - 0.05); return; }
    clearInterval(hen);
    if (!ten) { nhac.pause(); return; }
    nhac.src = TN + 'nhac/' + ten + '-0.mp3'; nhac.volume = 0;
    nhac.play().catch(() => {});
    hen = setInterval(() => { nhac.volume = Math.min(dich, nhac.volume + 0.03); if (nhac.volume >= dich) clearInterval(hen); }, 120);
  }, 60);
}
function sfx(ten, to = 0.8) { if (!G.am) return; const a = new Audio(TN + 'sfx/' + ten + '.mp3'); a.volume = to; a.play().catch(() => {}); }
function chinhAm() {
  nhac.volume = 0.5 * G.am;
  const coVu = S && !$('#m-choi').classList.contains('an');
  gio.volume = coVu ? 0.16 * G.am : 0; tim.volume = coVu && S.via < 35 ? (0.75 - S.via / 60) * G.am : 0;
  [gio, tim].forEach((a) => { if (a.volume > 0) a.play().catch(() => {}); else a.pause(); });
  document.querySelectorAll('#nut-am, #nut-am-2').forEach((n) => { n.textContent = (G.am ? '🔊' : '🔇') + (n.id === 'nut-am-2' ? ' Âm thanh' : ''); });
}
function doiAm() { G.am = G.am ? 0 : 1; chinhAm(); luu(); }

// ── màn hình, nền, hiệu ứng ─────────────────────────────────────────────────
function man(ten) { document.querySelectorAll('.man').forEach((m) => m.classList.toggle('an', m.id !== 'm-' + ten)); chinhAm(); }
let lopDang = 0, anhDang = '';
function nen(ten) {
  if (ten === anhDang) return;
  anhDang = ten;
  const lop = [$('#lop-a'), $('#lop-b')];
  lopDang = 1 - lopDang;
  lop[lopDang].style.backgroundImage = `url(${TN}nen/${ten}.jpg)`;
  lop[lopDang].classList.add('hien'); lop[1 - lopDang].classList.remove('hien');
}
function den(bat) { $('#den').classList.toggle('tat', !bat); }
function hien(nv, giat) {
  const h = $('#hien');
  h.src = TN + 'nv/' + nv + '.jpg'; h.className = '';
  void h.offsetWidth; h.className = giat ? 'giat' : 'ra';
  if (giat) {
    sfx('giat', 1);
    $('#chop').className = ''; void $('#chop').offsetWidth; $('#chop').className = 'chop';
    $('#san').classList.add('rung'); setTimeout(() => $('#san').classList.remove('rung'), 500);
  }
}
function bao(chu) { const b = document.createElement('div'); b.className = 'bao'; b.textContent = chu; $('#bao').appendChild(b); setTimeout(() => b.remove(), 5200); }
addEventListener('pointermove', (e) => { const d = $('#den').style; d.setProperty('--x', e.clientX + 'px'); d.setProperty('--y', e.clientY + 'px'); });

// ── điều kiện ───────────────────────────────────────────────────────────────
function co(c) {
  if (c === 'g:du-ten') return !!(G.manh.manh1 && G.manh.manh2 && G.manh.manh3);
  if (c.startsWith('g:')) return !!G.manh[c.slice(2)];
  return !!S.co[c];
}
const hop = (m) => (m.can || []).every(co) && !(m.an || []).some(co);
const soManh = () => ['manh1', 'manh2', 'manh3'].filter((m) => G.manh[m]).length;

// ── lời thoại ───────────────────────────────────────────────────────────────
let hang = [], sauHang = null, dangGo = null, cauDay = '';
function noi(cac, sau) { hang = cac.slice(); sauHang = sau || null; $('#thuc-don').classList.add('an'); $('#thoai').classList.remove('an'); cauTiep(); }
function tach(c) {
  const o = typeof c === 'string' ? { l: c } : Object.assign({}, c);
  const m = /^([a-z-]+)\|(.*)$/s.exec(o.l);
  if (m && NV[m[1]]) { o.nv = m[1]; o.l = m[2]; }
  return o;
}
function hieuUng(o, im) {
  if (o.via) doiVia(o.via);
  if (im) return;
  if (o.anh) nen(o.anh);
  if (o.sfx) sfx(o.sfx);
  if (o.hien) hien(o.hien, o.giat);
}
function cauTiep() {
  if (dangGo) { clearInterval(dangGo); dangGo = null; $('#loi').textContent = cauDay; return; }
  if (S && S.via <= 0 && !S.matVia) { hang = []; return matVia(); }
  if (!hang.length) { $('#thoai').classList.add('an'); const s = sauHang; sauHang = null; if (s) s(); return; }
  const o = tach(hang.shift());
  hieuUng(o, false);
  $('#ten-nv').textContent = o.nv ? NV[o.nv] : '';
  $('#loi').className = o.nv ? '' : 'ke';
  const cd = $('#chan-dung');
  if (o.nv) { cd.src = TN + 'nv/' + o.nv + '.jpg'; cd.classList.remove('an'); } else cd.classList.add('an');
  cauDay = o.l; let i = 0; $('#loi').textContent = '';
  dangGo = setInterval(() => { i += 2; $('#loi').textContent = cauDay.slice(0, i); if (i >= cauDay.length) { clearInterval(dangGo); dangGo = null; } }, 22);
}
function boQua() {
  if (dangGo) { clearInterval(dangGo); dangGo = null; }
  hang.forEach((c) => hieuUng(tach(c), true));     // bỏ qua chữ nhưng hậu quả vẫn tính
  hang = []; cauTiep();
}

// ── vía, giờ ────────────────────────────────────────────────────────────────
function doiVia(n) {
  S.via = Math.max(0, Math.min(100, S.via + n));
  if (n < 0) { const v = $('.via'); v.classList.remove('dau'); void v.offsetWidth; v.classList.add('dau'); }
  veHud();
}
function veHud() {
  if (!S) return;
  const p = V.phong[S.phong];
  $('#hud-noi').textContent = V.ten + ' · ' + p.ten;
  const phut = 19 * 60 + Math.round(Math.min(1, S.khac / V.so_khac) * 240);
  const gioTen = phut < 21 * 60 ? 'giờ Tuất' : phut < 23 * 60 ? 'giờ Hợi' : 'giờ Tý — CANH BA';
  const con = V.so_khac - S.khac;
  $('#hud-gio').textContent = `${String(Math.floor(phut / 60)).padStart(2, '0')}:${String(phut % 60).padStart(2, '0')} · ${gioTen}` + (con > 0 ? ` · còn ${con} việc trước canh ba` : '');
  $('#hud-gio').classList.toggle('gap', con <= 6);
  $('#via-thanh').style.width = S.via + '%'; $('#via-so').textContent = S.via;
  $('#nut-gung').textContent = `🫚 Gừng ×${S.gung}`; $('#nut-gung').disabled = S.gung < 1 || S.via >= 100;
  $('#den').style.setProperty('--r', 24 + S.via * 0.22 + 'vmax');
  chinhAm();
}
function matVia() {
  S.matVia = true; nen('mat-via'); sfx('giat', 1); den(false);
  noi(['Tay tôi không còn cầm nổi cái chuông. Lạnh từ gáy lan xuống, và tôi thấy chính mình từ phía sau lưng.',
    'Người mất vía thì còn đi lại, còn ăn nói. Chỉ là từ nay không ai ở trong đó nữa.'], () => ketMan('xau', null, true));
}
// Mỗi việc làm tốn một khắc. Tới mốc thì chuyện xảy ra; hết giờ thì buộc lập đàn.
function ton(n, sau) {
  S.khac += n; luu(); veHud();
  const sk = V.su_kien.find((s, i) => s.luc <= S.khac && !S.sk.includes(i) && (S.sk.push(i), true));
  if (sk) return noi(sk.loi, () => ton(0, sau));
  if (S.khac >= V.so_khac && !S.hetGio) { S.hetGio = true; luu(); return noi(V.het_gio, moDan); }
  (sau || veThucDon)();
}

// ── khám xét ────────────────────────────────────────────────────────────────
let theDang = 'xem';
function thuong(m) {
  (m.co || []).forEach((c) => { S.co[c] = 1; });
  if (m.manh && !S.manh.includes(m.manh)) { S.manh.push(m.manh); bao('Manh mối mới: ' + V.manh[m.manh][0]); sfx('trang-giay', 0.6); }
  if (m.toan && !G.manh[m.toan]) { G.manh[m.toan] = 1; bao(`Lề sổ của ông: tìm được ${soManh()}/3 mảnh tên thật`); sfx('mo', 0.7); }
}
function vaoPhong(ma) { S.phong = ma; nen(V.phong[ma].anh); sfx('cua', 0.5); theDang = 'xem'; luu(); veHud(); veThucDon(); }
function veThucDon() {
  if (S.via <= 0) return matVia();
  const p = V.phong[S.phong];
  $('#thoai').classList.add('an'); $('#thuc-don').classList.remove('an');
  $('#ta-phong').textContent = p.ta;
  const nguoi = Object.entries(V.nguoi).filter(([, n]) => n.o === S.phong);
  const the = [['xem', 'Quan sát'], ['do', 'Đồ nghề'], ...nguoi.map(([ma]) => ['hoi:' + ma, 'Hỏi ' + NV[ma]]), ['di', 'Đi nơi khác']];
  if (!the.some((t) => t[0] === theDang)) theDang = 'xem';
  $('#the').innerHTML = the.map(([ma, ten]) => `<button data-the="${ma}" class="${ma === theDang ? 'chon' : ''}">${ten}</button>`).join('')
    + '<button class="dan" data-the="dan">🕯 Lập đàn</button>';
  const muc = $('#muc'); muc.innerHTML = '';
  const them = (nhan, phu, lam, tat) => { const b = document.createElement('button'); b.innerHTML = nhan + (phu ? `<small>${phu}</small>` : ''); b.disabled = !!tat; b.onclick = () => { sfx('bam', 0.5); lam(); }; muc.appendChild(b); };
  const trong = (chu) => { muc.innerHTML = `<div class="trong">${chu}</div>`; };
  if (theDang === 'xem') {
    const ds = (p.xem || []).filter((x) => hop(x) && (x.lap || !S.xem[S.phong + ':' + x.ma]));
    ds.forEach((x) => them(x.nhan, '', () => { if (!x.lap) S.xem[S.phong + ':' + x.ma] = 1; noi(x.loi, () => { thuong(x); ton(x.khong_ton ? 0 : 1); }); }));
    if (!ds.length) trong('Chỗ này tôi đã xem hết những gì mắt thường thấy được. Có thể thử đồ nghề, hoặc quay lại khi biết thêm chuyện.');
  } else if (theDang === 'do') {
    DO_NGHE.forEach((d) => {
      const k = S.phong + ':' + d.ma, da = S.do[k];
      them(d.lam, da ? (da === 2 ? '✓ Đã thấy: ' + d.dau : 'Đã thử ở đây: không có gì') : d.ten, () => dungDo(d), da);
    });
  } else if (theDang === 'di') {
    p.di.filter((ma) => hop(V.phong[ma])).forEach((ma) => them('→ ' + V.phong[ma].ten, 'Đi lại không tốn giờ', () => vaoPhong(ma)));
  } else if (theDang.startsWith('hoi:')) {
    const ma = theDang.slice(4);
    const ds = V.nguoi[ma].hoi.filter((h) => hop(h) && !S.hoi[ma + ':' + h.ma]);
    ds.forEach((h) => them(h.nhan, '', () => { S.hoi[ma + ':' + h.ma] = 1; noi(h.loi, () => { thuong(h); ton(1); }); }));
    if (!ds.length) trong(`${NV[ma]} không còn gì để nói, trừ khi tôi tìm được thứ gì buộc họ phải nói.`);
  }
}
function dungDo(d) {
  const p = V.phong[S.phong], r = (p.do || {})[d.ma], k = S.phong + ':' + d.ma;
  sfx({ nhang: 'que-diem', chuong: r && r.dau ? 'bam' : 'chuong', gao: 'gao', nen: 'que-diem', guong: 'bam', nuoc: 'nuoc' }[d.ma], 0.7);
  S.do[k] = r && r.dau ? 2 : 1;
  noi(r ? r.loi : [d.binh], () => {
    if (r && r.dau) {
      if (!S.dau[d.ma]) { S.dau[d.ma] = []; bao('Dấu hiệu mới: ' + d.dau); sfx('mo', 0.7); }
      if (!S.dau[d.ma].includes(S.phong)) S.dau[d.ma].push(S.phong);
    }
    ton(1);
  });
}

// ── bắt đầu một vụ ──────────────────────────────────────────────────────────
function vaoVu(ma, tiep) {
  V = VU.find((v) => v.ma === ma);
  if (!tiep) TK.ghi('bat_dau_vu', { vu: ma });
  if (!tiep) S = { vu: ma, phong: V.bat_dau, khac: 0, via: 100, gung: 2, co: {}, manh: [], dau: {}, xem: {}, hoi: {}, do: {}, sk: [], hetGio: false };
  man('choi'); den(true); phatNhac(V.nhac); nen(V.phong[S.phong].anh); veHud();
  if (tiep) return S.hetGio ? moDan() : veThucDon();
  luu(); noi(V.mo_dau, veThucDon);
}

// ── lập đàn ─────────────────────────────────────────────────────────────────
let D = null;   // lựa chọn đang làm trên đàn
const BUOC_DAN = ['loai', 'ten', 'nguyen', 'giai', 'buoc'];
function moDan() {
  D = { i: 0, loai: null, ten: null, nguyen: null, giai: null, buoc: [] };
  man('dan'); nen('dan-le'); den(false); phatNhac('lap-dan'); veDan();
}
function veDan() {
  const b = BUOC_DAN[D.i], than = $('#dan-than'), d = V.dan;
  $('#dan-buoc-so').textContent = `Bước ${D.i + 1}/5`;
  $('#dan-lui').textContent = D.i === 0 ? (S.hetGio ? 'Đã tới canh ba' : '◂ Chưa lập, tìm tiếp') : '◂ Quay lại';
  $('#dan-lui').disabled = D.i === 0 && S.hetGio;
  $('#dan-toi').textContent = D.i === 4 ? '🔥 Đốt bùa, khai đàn' : 'Tiếp ▸';
  const nut = (duoc, trong, lam) => { const n = document.createElement('button'); n.className = 'lua' + (duoc ? ' duoc' : ''); n.innerHTML = trong; n.onclick = () => { sfx('bam', 0.5); lam(); veDan(); }; return n; };
  than.innerHTML = '';
  if (b === 'loai') {
    $('#dan-tieu-de').textContent = 'Nó thuộc loài nào?';
    const co = Object.keys(S.dau);
    than.innerHTML = `<p class="mo">Dấu hiệu tôi đã thấy tận mắt (${co.length}/6):</p><div class="dau-ds">${DO_NGHE.map((x) => `<span class="dau ${co.includes(x.ma) ? 'co' : ''}">${x.dau}</span>`).join('')}</div>`;
    LOAI.forEach((l) => than.appendChild(nut(D.loai === l.ma, `<b>${l.ten}</b><small>${l.dau.length ? l.dau.map((m) => DO_NGHE.find((x) => x.ma === m).dau).join(' · ') : 'Từ bốn dấu trở lên: không loài nào trong sổ có ngần ấy dấu'}</small>`, () => { D.loai = l.ma; })));
  } else if (b === 'buoc') {
    $('#dan-tieu-de').textContent = 'Làm lễ theo thứ tự nào?';
    than.innerHTML = '<p class="mo">Chọn đúng BỐN việc, theo đúng thứ tự. Sổ tay của ông có ghi cách hoá giải từng loài. Bấm lại để bỏ chọn.</p>';
    const o = document.createElement('div'); o.className = 'the-buoc';
    d.buoc.chon.forEach(([ma, nhan]) => {
      const vt = D.buoc.indexOf(ma);
      o.appendChild(nut(vt >= 0, `<span class="so">${vt >= 0 ? vt + 1 : ''}</span>${nhan}`, () => { if (vt >= 0) D.buoc.splice(vt, 1); else if (D.buoc.length < 4) D.buoc.push(ma); }));
    });
    than.appendChild(o);
  } else {
    $('#dan-tieu-de').textContent = d[b].cau;
    const ds = d[b].chon.filter(hop);
    if (ds.length < d[b].chon.length) than.innerHTML = '<p class="mo">Còn lựa chọn tôi chưa nghĩ tới được, vì chưa tìm ra đủ chuyện.</p>';
    ds.forEach((c) => than.appendChild(nut(D[b] === c.ma, c.nhan, () => { D[b] = c.ma; })));
  }
  $('#dan-toi').disabled = b === 'buoc' ? D.buoc.length !== 4 : !D[b];
}
function danToi() {
  if (D.i < 4) { D.i++; return veDan(); }
  const d = V.dan;
  const bang = [['Loài vong', D.loai === d.loai], ['Danh tính', D.ten === d.ten.dung], ['Nguyên do', D.nguyen === d.nguyen.dung],
    ['Cách hoá giải', D.giai === d.giai.dung], ['Trình tự nghi lễ', D.buoc.join() === d.buoc.dung.join()]];
  const kq = !bang[0][1] || (d.giai.xau || []).includes(D.giai) ? 'xau' : bang.every((x) => x[1]) ? 'tot' : 'vua';
  man('choi'); $('#thuc-don').classList.add('an'); sfx('lua-bua', 1); sfx('chuong');
  noi(V.ket[kq], () => ketMan(kq, bang));
}
function ketMan(kq, bang, matVia) {
  const cu = G.xong[V.ma];
  if (!matVia && (cu === undefined || HANG[kq] > HANG[cu])) G.xong[V.ma] = kq;
  man('ket'); den(false); phatNhac(kq === 'tot' ? 'bia' : nhacDang);
  $('#ket-vu').textContent = `${V.so} · ${V.ten}`;
  const cuoi = V.ma === 'v3' && kq !== 'xau';
  TK.ghi('ket', { vu: V.ma, kq: matVia ? 'mat_via' : kq, chi_tiet: bang ? { dung: bang.filter((x) => x[1]).length } : null });
  if (cuoi && !matVia) TK.ghi('pha_dao', { vu: 'v3', kq });
  $('#ket-ten').className = kq;
  $('#ket-ten').textContent = matVia ? 'MẤT VÍA' : cuoi ? (kq === 'tot' ? 'KẾT THẬT — NGƯỜI TRẢ NỢ' : 'KẾT — NGƯỜI GIỮ CHUM') : TEN_KQ[kq].toUpperCase();
  $('#ket-ta').textContent = matVia ? 'Vía xuống tới không. Lần sau nhớ đọc mục KỴ trong sổ, và ngậm gừng khi vía xuống thấp.'
    : kq === 'tot' ? 'Gọi đúng tên, trả đúng thứ nó thiếu. Vong đi hẳn, không ai phải quay lại đây nữa.'
    : kq === 'vua' ? 'Đoán đúng loài nên đè được nó xuống, nhưng còn chỗ sai nên nó chưa đi. Xem bảng dưới để biết sai ở đâu.'
    : 'Sai từ gốc: nhầm loài, hoặc chọn đúng cách mà sổ đã dặn là KỴ.';
  $('#ket-bang').innerHTML = (bang || []).map(([ten, dung]) => `<li><span>${ten}</span><b class="${dung ? 'dung' : 'sai'}">${dung ? '✓ đúng' : '✗ sai'}</b></li>`).join('');
  $('#ket-manh').textContent = `Mảnh tên thật trong lề sổ: ${soManh()}/3.` + (cuoi ? ' Cảm ơn bạn đã chơi tới cuối.' : '');
  const nut = $('#ket-nut'); nut.innerHTML = '';
  const them = (chu, lam, chinh) => { const n = document.createElement('button'); n.className = 'nut' + (chinh ? ' chinh' : ''); n.textContent = chu; n.onclick = lam; nut.appendChild(n); };
  if (!matVia && kq !== 'tot') them('Lập đàn lại', () => { man('choi'); moDan(); }, kq === 'xau');
  them('Chơi lại vụ này từ đầu', () => vaoVu(V.ma));
  them('Về phòng ông nội', () => { S = null; luu(); vePhongOng(); }, kq !== 'xau');
  if (matVia) { S = null; }
  luu();
}

// ── phòng ông nội ───────────────────────────────────────────────────────────
function vePhongOng() {
  man('so'); nen('phong-ong'); den(false); phatNhac('bia');
  $('#so-le').textContent = `Bàn thờ ông, cuốn sổ, cái túi vải. Mảnh tên thật đã tìm được: ${soManh()}/3.`;
  const ds = $('#ds-vu'); ds.innerHTML = '';
  VU.forEach((v, i) => {
    const mo = i === 0 || HANG[G.xong[VU[i - 1].ma]] >= 1, kq = G.xong[v.ma];
    const b = document.createElement('button'); b.className = 'vu'; b.disabled = !mo;
    b.innerHTML = `<img src="${TN}nen/${v.anh}.jpg" alt=""><div><b>${v.so}: ${mo ? v.ten : '???'}</b><small>${mo ? v.noi + ' — ' + v.tom : 'Phải yên được vụ trước đã.'}</small></div>`
      + `<div class="kq ${kq || ''}">${kq ? TEN_KQ[kq] : mo ? 'Chưa làm' : '🔒'}</div>`;
    b.onclick = () => { sfx('trang-giay'); if (G.S && G.S.vu === v.ma && confirm('Vụ này đang làm dở. Bấm OK để làm tiếp, Huỷ để làm lại từ đầu.')) { S = G.S; vaoVu(v.ma, true); } else vaoVu(v.ma); };
    ds.appendChild(b);
  });
}

// ── sổ tay ──────────────────────────────────────────────────────────────────
function moSo(the) {
  sfx('trang-giay'); $('#so-tay').classList.remove('an');
  const cac = [['manh', 'Manh mối'], ['dau', 'Dấu hiệu'], ['loai', 'Chín loài'], ['le', 'Lề sổ'], ['choi', 'Cách chơi']].filter((t) => S || !['manh', 'dau'].includes(t[0]));
  if (!cac.some((t) => t[0] === the)) the = 'loai';
  $('#so-the').innerHTML = cac.map(([ma, ten]) => `<button data-so="${ma}" class="${ma === the ? 'chon' : ''}">${ten}</button>`).join('');
  const tenDau = (m) => DO_NGHE.find((x) => x.ma === m).dau;
  let h = '';
  if (the === 'manh') h = S.manh.length ? S.manh.map((m) => `<div class="o"><b>${V.manh[m][0]}</b><p>${V.manh[m][1]}</p></div>`).join('') : '<p class="viet">Chưa ghi được gì. Quan sát từng chỗ, hỏi từng người.</p>';
  else if (the === 'dau') h = '<p class="viet">Mỗi món đồ nghề thử ra một dấu. Ba dấu thì tra ra loài. Chỉ chỗ vong hay lui tới mới có dấu.</p>' + DO_NGHE.map((d) => {
    const noi = S.dau[d.ma];
    return `<div class="o"><span class="dau ${noi ? 'co' : ''}">${d.dau}</span> <b>${d.ten}</b><p>${d.ta}</p><p class="mo">${noi ? 'Đã thấy ở: ' + noi.map((p) => V.phong[p].ten).join(', ') : 'Chưa thấy.'}</p></div>`;
  }).join('');
  else if (the === 'loai') h = '<p class="viet">Chữ của ông nội, mực tím, viết bằng bút lá tre.</p>' + LOAI.map((l) => `<div class="o"><h3>${l.ten}</h3>
    <div class="dau-ds">${l.dau.map((m) => `<span class="dau ${S && S.dau[m] ? 'co' : ''}">${tenDau(m)}</span>`).join('') || '<span class="dau">Bốn dấu trở lên</span>'}</div>
    <p>${l.ta}</p><p><b>Tập tính:</b> ${l.tinh}</p><p class="ky">Kỵ: ${l.ky}</p><p><b>Hoá giải:</b> ${l.giai}</p></div>`).join('');
  else if (the === 'le') h = `<div class="o viet">${LE_SO[0]}</div>` + [1, 2, 3].map((i) => `<div class="o">${G.manh['manh' + i] ? LE_SO[i] : '<span class="mo">… (chưa tìm được, giấu ở vụ thứ ' + i + ')</span>'}</div>`).join('');
  else h = `<h3>Việc của bạn</h3><p>Mỗi vụ, bạn có từ chập tối tới <b>canh ba</b>. Quan sát, hỏi chuyện, thử đồ nghề đều tốn giờ; đi lại thì không. Hết giờ là phải lập đàn với những gì đang biết.</p>
    <h3>Ba việc phải tìm ra</h3><p><b>Loài:</b> thử đồ nghề ở chỗ vong hay lui tới, gom dấu hiệu, tra mục Chín loài. <b>Nó là ai, vì sao chưa đi:</b> nằm trong chuyện của người sống, và người sống hay nói dối. <b>Nó thiếu cái gì:</b> thường là một món đồ bị giấu.</p>
    <h3>Vía</h3><p>Chuyện rợn người làm hao vía. Phạm điều KỴ ghi trong sổ thì hao nặng. Vía về không là mất hồn, phải làm lại vụ. Mỗi vụ có hai lát gừng, mỗi lát hồi 15 vía.</p>
    <h3>Kết quả</h3><p><b>Siêu thoát:</b> đúng cả năm mục. <b>Trấn tạm:</b> đúng loài nhưng còn chỗ sai. <b>Thất bại:</b> nhầm loài hoặc làm điều kỵ. Lập đàn xong sẽ biết sai ở mục nào, và được lập lại.</p>
    <h3>Lề sổ</h3><p>Ông giấu ba mảnh tên ở ba vụ. Thiếu một mảnh thì vụ cuối không có kết thật.</p>
    <p class="mo">Trò chơi tự lưu sau mỗi việc. Phím Cách hoặc Enter để đọc tiếp.</p>`;
  $('#so-than').innerHTML = h; $('#so-than').parentElement.scrollTop = 0;
}

// ── nối nút ─────────────────────────────────────────────────────────────────
function veBia() {
  const n = TK.nguoi; $('#ban-nguoi').classList.toggle('an', !n);
  if (n) { $('#ban-ten').textContent = n.ten || n.email; $('#ban-anh').src = n.anh || 'logo.svg'; $('#ban-anh').referrerPolicy = 'no-referrer'; }
  man('bia'); nen('bia'); den(false); phatNhac('bia'); $('#nut-tiep-tuc').classList.toggle('an', !G.S && !Object.keys(G.xong).length); $('#nut-moi').textContent = Object.keys(G.xong).length || G.S ? 'Chơi lại từ đầu' : 'Bắt đầu'; }
$('#nut-du-tuoi').onclick = async () => {
  sfx('chuong');
  if (!TK.phien) return veDangNhap();
  try { gopLuu(await TK.goi({ hanh: 'tai', phien: TK.phien })); }       // lấy bản lưu mới nhất (có thể vừa chơi ở máy khác)
  catch (e) { if (e.ma === 401) return veDangNhap(); }                // mất mạng thì chơi tiếp bằng bản trên máy
  TK.ghi('vao'); veBia();
};

// ── tài khoản Google ────────────────────────────────────────────────────────
const G_TRONG = () => ({ xong: {}, manh: {}, am: G.am, S: null });
function veDangNhap() {
  man('dang-nhap'); nen('bia'); den(false);
  $('#dang-nhap-bao').textContent = '';
  TK.nutGoogle($('#nut-google'), (d) => { gopLuu(d); sfx('chuong'); veBia(); }, (loi) => { $('#dang-nhap-bao').textContent = 'Chưa đăng nhập được: ' + loi; });
}
// Bản lưu trên máy chủ mới hơn (vd chơi ở máy khác) thì lấy về; bản trên máy là của người khác thì bỏ.
function gopLuu(d) {
  if (G.ai && G.ai !== d.nguoi.email) G = G_TRONG();
  if (d.luu && (d.luu.t || 0) > (G.t || 0)) G = Object.assign(G_TRONG(), d.luu, { am: G.am });
  else if (G.t && (!d.luu || G.t > (d.luu.t || 0))) TK.luu(G);       // máy này mới hơn thì đẩy lên
  G.ai = d.nguoi.email;
  try { localStorage.setItem(KHOA_LUU, JSON.stringify(G)); } catch (e) { /* bỏ qua */ }
}
$('#nut-dang-xuat').onclick = async () => {
  if (!confirm('Đăng xuất khỏi CANH BA? Tiến trình đã lưu theo tài khoản, lần sau đăng nhập chơi tiếp được.')) return;
  await TK.dangXuat(); G = G_TRONG(); S = null;
  try { localStorage.setItem(KHOA_LUU, JSON.stringify(G)); } catch (e) { /* bỏ qua */ }
  veDangNhap();
};
$('#nut-chua-du').onclick = () => { $('#m-tuoi .khung-giua').innerHTML = '<h2>Hẹn bạn khi đủ tuổi.</h2><p class="mo">Trò chơi này chỉ dành cho người từ 18 tuổi.</p>'; };
$('#nut-tiep-tuc').onclick = () => { if (G.S) { S = G.S; vaoVu(S.vu, true); } else vePhongOng(); };
$('#nut-moi').onclick = () => {
  if ((G.S || Object.keys(G.xong).length) && !confirm('Xoá hết tiến trình cũ và chơi lại từ đầu?')) return;
  G = { xong: {}, manh: {}, am: G.am, S: null }; S = null; luu(); vePhongOng();
};
$('#nut-cach-choi').onclick = () => moSo('choi');
$('#nut-ve-bia').onclick = veBia;
$('#nut-am').onclick = doiAm; $('#nut-am-2').onclick = doiAm;
$('#nut-thoat').onclick = () => { if (confirm('Rời vụ này về phòng ông nội? Tiến trình vụ đang làm vẫn được giữ.')) { luu(); S = null; vePhongOng(); } };
$('#nut-gung').onclick = () => { if (S.gung > 0) { S.gung--; doiVia(15); sfx('thanh-than', 0.5); bao('Ngậm một lát gừng. Ấm lại đôi chút.'); luu(); } };
$('#thoai').onclick = (e) => { if (e.target.id !== 'nut-bo-qua') cauTiep(); };
$('#nut-bo-qua').onclick = boQua;
$('#the').onclick = (e) => { const t = e.target.dataset.the; if (!t) return; sfx('bam', 0.5); if (t === 'dan') return moDan(); theDang = t; veThucDon(); };
$('#dan-lui').onclick = () => { if (D.i > 0) { D.i--; veDan(); } else if (!S.hetGio) { man('choi'); den(true); phatNhac(V.nhac); nen(V.phong[S.phong].anh); veThucDon(); } };
$('#dan-toi').onclick = danToi;
$('#so-dong').onclick = () => $('#so-tay').classList.add('an');
$('#so-the').onclick = (e) => { if (e.target.dataset.so) moSo(e.target.dataset.so); };
document.querySelectorAll('[data-mo-so]').forEach((n) => { n.onclick = () => moSo(n.dataset.moSo); });
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') return $('#so-tay').classList.add('an');
  if ((e.key === ' ' || e.key === 'Enter') && !$('#thoai').classList.contains('an') && !$('#m-choi').classList.contains('an') && $('#so-tay').classList.contains('an')) { e.preventDefault(); cauTiep(); }
});

nap(); nen('bia'); den(false); chinhAm();
// Tải trước ảnh để đổi cảnh không bị chớp trắng.
VU.forEach((v) => Object.values(v.phong).forEach((p) => { new Image().src = `${TN}nen/${p.anh}.jpg`; }));
