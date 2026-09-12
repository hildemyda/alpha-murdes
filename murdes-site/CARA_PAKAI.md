# Cara Pakai Website Alpha's MURDES

## 1. Ganti nomor WhatsApp
Buka file `index.html`, cari teks `62XXXXXXXXXX` (ada 3 tempat),
ganti dengan nomor WhatsApp admin. Formatnya: kode negara tanpa
tanda "+" dan tanpa angka 0 di depan.
Contoh: nomor 0812-3456-7890 jadi 6281234567890

## 2. Tambah/edit template (dilakukan tiap minggu)
Buka file `data.js`. Di situ ada daftar template dalam kurung kurawal { }.
Tinggal copy salah satu blok, tempel di paling atas daftar, lalu edit:
- title    -> nama karyanya
- category -> salah satu dari: Banner, Logo, Mascot, GFX, Lainnya
- image    -> nanti diisi path gambar (lihat langkah 3)
- size     -> large / medium / small (biar tampilan galeri gak monoton)

Total Template & Total Asset di halaman utama akan otomatis
ke-update sendiri, gak perlu diedit manual.

## 3. Pasang gambar preview
- Taruh file gambar (jpg/png) di folder `assets/`
- Di data.js, isi field "image" dengan: assets/nama-file-kamu.jpg
- Kalau field image dikosongkan "", otomatis muncul kotak placeholder

## 4. Ganti logo
Buka index.html, cari komentar "GANTI LOGO DI SINI" (ada di bagian nav),
ikuti instruksinya untuk ganti logo teks "AM" jadi gambar logo kamu.

## 5. Upload ke internet (gratis)
Cara termudah pakai Netlify:
1. Buka https://app.netlify.com/drop
2. Drag semua file di folder ini (kecuali file .md ini) ke halaman itu
3. Selesai, dapat link website gratis

Kalau mau custom domain (nama sendiri), tinggal dihubungkan lewat
pengaturan domain di Netlify.
