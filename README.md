# EMBER — Demo Toko Top Up Diamond Free Fire

Ini adalah tampilan (UI) demo toko top-up Diamond Free Fire. Belum terhubung ke API pembayaran atau provider resmi mana pun — cocok untuk uji tampilan dan alur klik-klik saja.

## Cara publish ke GitHub Pages

1. Buat repository baru di GitHub (Public), misal nama `ember-topup`.
2. Upload file `index.html` ke repo ini lewat **Add file > Upload files**.
3. Buka tab **Settings > Pages**.
4. Pada bagian **Source**, pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, situs akan aktif di:
   `https://<username-kamu>.github.io/ember-topup/`

## Catatan

- Tombol "Bayar sekarang" masih demo (menampilkan alert), belum memproses transaksi sungguhan.
- Verifikasi User ID masih dummy, belum terhubung ke server Garena.
- Jangan pernah menaruh API key atau secret payment gateway langsung di file ini — repo GitHub Pages bersifat publik.
