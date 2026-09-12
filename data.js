/*
  =========================================================
  DATA PROJECT ALPHA'S MURDES
  =========================================================
  Ini file yang paling sering kamu edit tiap minggu.
  Tinggal COPY salah satu blok { ... } di bawah, TEMPEL di
  paling atas array, terus ganti isinya. Urutan di sini
  akan sama persis dengan urutan tampil di website
  (yang paling atas = yang paling baru & jadi unggulan).

  Field yang wajib diisi:
  - title    : nama project-nya
  - image    : path/link gambar preview-nya. Kalau belum ada
               gambar, biarkan kosong "" (otomatis pakai placeholder)
  - size     : "large", "medium", atau "small" -> ngatur besar-kecil
               kotak preview-nya di galeri biar gak monoton

  Catatan: project PALING ATAS di list ini otomatis jadi
  "unggulan" (tampil besar sendiri di paling atas katalog).
*/

const TEMPLATE_DATA = [
  {
    title: "Contoh Mascot Game",
    image: "",
    size: "large"
  },
  {
    title: "Contoh Logo Esport",
    image: "",
    size: "medium"
  },
  {
    title: "Contoh Banner Turnamen",
    image: "",
    size: "medium"
  },
  {
    title: "Contoh GFX Thumbnail",
    image: "",
    size: "small"
  },
  {
    title: "Contoh Overlay Stream",
    image: "",
    size: "small"
  },
  {
    title: "Contoh Logo Clan",
    image: "",
    size: "medium"
  }
];

/*
  =========================================================
  Jumlah "asset" total (opsional, kalau kamu mau angka ini
  beda dari jumlah baris di atas -- misal 1 project isinya
  beberapa file/varian). Kalau tidak, biarkan seperti ini,
  nanti otomatis dihitung dari TEMPLATE_DATA.length
  =========================================================
*/
const TOTAL_ASSET_OVERRIDE = null; // ganti jadi angka kalau mau custom, misal: 340

/*
  Jumlah tutorial (dipakai di stat "Total Tutorial" di halaman utama).
  Ganti angkanya sesuai jumlah tutorial yang kamu punya.
*/
const TOTAL_TUTORIAL = 0;
