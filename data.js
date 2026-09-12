/*
  =========================================================
  DATA TEMPLATE ALPHA'S MURDES
  =========================================================
  Ini file yang paling sering kamu edit tiap minggu.
  Tinggal COPY salah satu blok { ... } di bawah, TEMPEL di
  paling atas array, terus ganti isinya. Urutan di sini
  akan sama persis dengan urutan tampil di website
  (yang paling atas = yang paling baru).

  Field yang wajib diisi:
  - title    : nama project/template-nya
  - category : HARUS salah satu dari: "Banner", "Logo", "Mascot", "GFX", "Lainnya"
  - image    : path/link gambar preview-nya. Kalau belum ada
               gambar, biarkan kosong "" (otomatis pakai placeholder)
  - size     : "large", "medium", atau "small" -> ngatur besar-kecil
               kotak preview-nya di galeri biar gak monoton
*/

const TEMPLATE_DATA = [
  {
    title: "Contoh Mascot Game",
    category: "Mascot",
    image: "",
    size: "large"
  },
  {
    title: "Contoh Logo Esport",
    category: "Logo",
    image: "",
    size: "medium"
  },
  {
    title: "Contoh Banner Turnamen",
    category: "Banner",
    image: "",
    size: "medium"
  },
  {
    title: "Contoh GFX Thumbnail",
    category: "GFX",
    image: "",
    size: "small"
  },
  {
    title: "Contoh Overlay Stream",
    category: "Lainnya",
    image: "",
    size: "small"
  },
  {
    title: "Contoh Logo Clan",
    category: "Logo",
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
const TOTAL_ASSET_OVERRIDE = 10000; // ganti jadi angka kalau mau custom, misal: 340
