// CANH BA — tài khoản Google: đăng nhập, ghi lượt chơi, lưu game lên máy chủ.
// Dùng chung cho game (index.html) và bảng quản lý (quan-ly.html).
'use strict';
const TK = (() => {
  const KHOA_PHIEN = 'canh-ba-phien-1';
  let phien = null, nguoi = null, hang = [], luuCho = null, henLuu = null, mocNhip = Date.now();
  try { const d = JSON.parse(localStorage.getItem(KHOA_PHIEN)); if (d && d.phien) { phien = d.phien; nguoi = d.nguoi; } } catch (e) { /* chưa có phiên */ }

  async function goi(than, giu) {
    const r = await fetch(CANHBA.api, {
      method: 'POST', keepalive: !!giu,
      headers: { 'Content-Type': 'application/json', apikey: CANHBA.khoa, Authorization: 'Bearer ' + CANHBA.khoa },
      body: JSON.stringify(than),
    });
    const d = await r.json().catch(() => ({}));
    if (r.status === 401 && than.hanh !== 'vao') xoaPhien();
    if (!r.ok) throw Object.assign(new Error(d.loi || 'Máy chủ lỗi ' + r.status), { ma: r.status });
    return d;
  }
  function xoaPhien() { phien = null; nguoi = null; try { localStorage.removeItem(KHOA_PHIEN); } catch (e) { /* bỏ qua */ } }

  // Vẽ nút Google vào `o`; khi đăng nhập xong gọi xong({nguoi, luu}).
  function nutGoogle(o, xong, baoLoi) {
    const ve = () => {
      google.accounts.id.initialize({
        client_id: CANHBA.google, ux_mode: 'popup', cancel_on_tap_outside: false,
        callback: async (r) => {
          try {
            const d = await goi({ hanh: 'vao', id_token: r.credential });
            phien = d.phien; nguoi = d.nguoi;
            try { localStorage.setItem(KHOA_PHIEN, JSON.stringify({ phien, nguoi })); } catch (e) { /* trình duyệt chặn lưu */ }
            mocNhip = Date.now();
            xong(d);
          } catch (e) { baoLoi && baoLoi(e.message); }
        },
      });
      google.accounts.id.renderButton(o, { theme: 'filled_black', size: 'large', shape: 'pill', text: 'signin_with', locale: 'vi', width: 280 });
    };
    if (window.google && google.accounts) return ve();
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client'; s.async = true; s.onload = ve;
    s.onerror = () => baoLoi && baoLoi('Không tải được nút Google. Kiểm tra mạng rồi tải lại trang.');
    document.head.appendChild(s);
  }

  // Ghi sự kiện chơi; gom lại gửi một lượt cùng nhịp giờ chơi và bản lưu.
  function ghi(loai, them) { if (!phien) return; hang.push(Object.assign({ loai }, them || {})); guiSom(); }
  function luu(g) { if (!phien) return; luuCho = g; guiSom(); }
  function guiSom() { clearTimeout(henLuu); henLuu = setTimeout(() => gui(false), 4000); }
  async function gui(giu) {
    clearTimeout(henLuu);
    if (!phien || (!hang.length && !luuCho && !giu)) return;
    const giay = Math.round((Date.now() - mocNhip) / 1000);
    const than = { hanh: 'ghi', phien, su_kien: hang.splice(0, 20), giay: laGame() && (document.visibilityState === 'visible' || giu) ? giay : 0 };
    if (luuCho) { than.luu = luuCho; luuCho = null; }
    mocNhip = Date.now();
    try { await goi(than, giu); } catch (e) { if (e.ma !== 401) hang.unshift(...than.su_kien); }
    if (hang.length) guiSom();
  }
  // Nhịp giờ chơi: mỗi phút tab game đang mở gửi một lần (trang quản lý không tính).
  const laGame = () => typeof VU !== 'undefined';
  setInterval(() => { if (phien && laGame() && document.visibilityState === 'visible') gui(true); }, 60000);
  document.addEventListener('visibilitychange', () => {
    if (!laGame()) return;
    if (document.visibilityState === 'hidden') gui(true); else mocNhip = Date.now();
  });

  async function dangXuat() {
    const p = phien; await gui(true).catch(() => {}); xoaPhien();
    try { if (window.google && google.accounts) google.accounts.id.disableAutoSelect(); } catch (e) { /* bỏ qua */ }
    if (p) await goi({ hanh: 'ra', phien: p }).catch(() => {});
  }

  return { get phien() { return phien; }, get nguoi() { return nguoi; }, goi, nutGoogle, ghi, luu, gui, dangXuat };
})();
