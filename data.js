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
    image: "Assets/mantap.webp",
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
    image: "Assets/logo-trant.webp",
    size: "large"
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
const TOTAL_ASSET_OVERRIDE = 10000; // ganti jadi angka kalau mau custom (JANGAN pakai titik/koma, langsung angka polos)

/*
  Jumlah tutorial (dipakai di stat "Total Tutorial" di halaman utama).
  Ganti angkanya sesuai jumlah tutorial yang kamu punya.
*/
const TOTAL_TUTORIAL = 5;

/*
  =========================================================
  SOFTWARE & TOOLS
  =========================================================
  Daftar aplikasi yang dipakai di kelas. Tampil di halaman utama
  sebagai baris ikon yang jalan otomatis (marquee).

  - name : nama aplikasi (dipakai kalau field icon dikosongkan)
  - icon : path ke gambar ikon aplikasi, misal "assets/icon-ps.png".
           Kalau dikosongkan "", otomatis pakai kotak dengan
           singkatan nama sebagai gantinya.

  Idealnya isi PAS 5 item biar tampilannya seimbang.
*/
const TOOLS_DATA = [
  { name: "CorelDraw", icon: "Assets/icon/cd.webp" },
  { name: "PixelLab", icon: "Assets/icon/px.webp" },
  { name: "AlightMotion", icon: "Assets/icon/am.webp" },
  { name: "PicsArt", icon: "Assets/icon/pc.webp" },
  { name: "Canva", icon: "Assets/icon/cv.webp" }
];
