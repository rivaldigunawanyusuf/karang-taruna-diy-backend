const mongoose = require('mongoose');
require('dotenv').config();
const Tutorial = require('./models/Tutorial');

const tutorials = [
  {
    title: 'Cara Memperbaiki Kursi Kayu yang Goyang',
    description: 'Tutorial langkah demi langkah untuk memperbaiki kursi kayu yang sudah goyang atau longgar.',
    content: `## Alat dan Bahan yang Dibutuhkan\n\n- Lem kayu (wood glue)\n- Palu karet\n- Klem atau penjepit kayu\n- Amplas halus (grit 120-220)\n- Kain lap bersih\n\n## Langkah-Langkah\n\n### 1. Identifikasi Bagian yang Longgar\nPeriksa semua sambungan kursi. Goyangkan perlahan untuk menemukan bagian mana yang longgar. Biasanya sambungan kaki atau sandaran yang paling sering bermasalah.\n\n### 2. Lepaskan Bagian yang Longgar\nHati-hati lepaskan bagian yang longgar. Gunakan palu karet jika diperlukan. Jangan gunakan palu besi karena bisa merusak kayu.\n\n### 3. Bersihkan Sambungan\nBersihkan sisa lem lama menggunakan amplas halus. Pastikan permukaan sambungan bersih dari debu dan kotoran.\n\n### 4. Aplikasikan Lem Kayu\nOleskan lem kayu secukupnya pada kedua sisi sambungan. Jangan terlalu banyak karena bisa meluber.\n\n### 5. Rakit Kembali dan Klem\nPasang kembali bagian yang sudah dilem. Gunakan klem untuk menjepit sambungan. Biarkan selama 24 jam hingga lem benar-benar kering.\n\n### 6. Finishing\nSetelah lem kering, lepas klem dan bersihkan sisa lem yang meluber dengan kain lap. Kursi siap digunakan kembali!`,
    type: 'text',
    videoUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800',
    category: 'Perbaikan Furnitur',
  },
  {
    title: 'Teknik Dasar Las Listrik untuk Pemula',
    description: 'Panduan dasar teknik las listrik yang aman dan benar untuk anggota Karang Taruna.',
    content: `## Peralatan Las Listrik\n\n- Mesin las listrik (inverter)\n- Elektroda (kawat las) ukuran 2.6mm\n- Topeng las (welding helmet)\n- Sarung tangan las\n- Baju pelindung dan sepatu safety\n- Tang las dan palu terak\n\n## Keselamatan Kerja\n\n> ⚠️ PENTING: Selalu gunakan APD (Alat Pelindung Diri) lengkap saat mengelas!\n\n1. Pastikan area kerja berventilasi baik\n2. Jauhkan bahan mudah terbakar\n3. Gunakan topeng las dengan kaca gelap yang sesuai\n4. Jangan pernah melihat busur las tanpa pelindung mata\n\n## Langkah-Langkah Dasar\n\n### 1. Persiapan Material\nBersihkan permukaan besi yang akan dilas dari karat dan kotoran menggunakan gerinda atau sikat baja.\n\n### 2. Setting Mesin Las\nAtur ampere sesuai ketebalan material. Untuk besi 3mm, gunakan sekitar 80-100 ampere.\n\n### 3. Teknik Menyalakan Busur\nGoreskan ujung elektroda pada besi seperti menyalakan korek api. Jaga jarak 2-3mm antara elektroda dan benda kerja.\n\n### 4. Gerakan Las\nGerakkan elektroda dengan stabil dan konsisten. Gunakan gerakan zigzag atau melingkar untuk hasil yang lebih kuat.\n\n### 5. Pembersihan Hasil Las\nSetelah selesai, bersihkan terak (slag) menggunakan palu terak dan sikat baja.`,
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/LzGn2ToCmWI',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    category: 'Las & Logam',
  },
  {
    title: 'Membuat Rak Buku Sederhana dari Kayu Palet',
    description: 'Proyek DIY membuat rak buku fungsional menggunakan kayu palet bekas yang ramah lingkungan.',
    content: `## Material yang Dibutuhkan\n\n- 2 buah palet kayu bekas (ukuran standar)\n- Sekrup kayu 5cm (20 buah)\n- Amplas kasar (grit 80) dan halus (grit 220)\n- Cat atau wood stain (opsional)\n- Vernis atau clear coat\n\n## Alat yang Diperlukan\n\n- Gergaji tangan atau circular saw\n- Bor listrik / driver\n- Meteran\n- Pensil\n- Siku\n- Kuas\n\n## Langkah Pembuatan\n\n### 1. Bongkar Palet\nLepaskan papan dari rangka palet dengan hati-hati menggunakan linggis kecil. Cabut semua paku yang tersisa.\n\n### 2. Potong Sesuai Ukuran\n- Papan rak (3 buah): 80cm x 20cm\n- Papan samping (2 buah): 100cm x 20cm\n- Papan belakang (opsional): 80cm x 100cm\n\n### 3. Amplas Semua Permukaan\nAmplas semua papan dimulai dari amplas kasar, lalu lanjut ke amplas halus. Pastikan permukaan halus dan bebas serpihan.\n\n### 4. Rakit Struktur\nPasang papan samping tegak lurus. Bor lubang pilot terlebih dahulu, lalu sekrup papan rak pada ketinggian yang diinginkan.\n\n### 5. Finishing\nAplikasikan wood stain untuk tampilan natural atau cat sesuai selera. Tutup dengan 2 lapis vernis untuk perlindungan.\n\n### 6. Mounting\nPasang bracket di bagian belakang jika ingin digantung di dinding, atau biarkan berdiri bebas.`,
    type: 'text',
    videoUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800',
    category: 'Woodworking',
  },
  {
    title: 'Instalasi Listrik Rumah Sederhana',
    description: 'Panduan dasar pemasangan instalasi listrik rumah tangga yang aman sesuai standar PLN.',
    content: `## ⚡ Peringatan Keselamatan\n\n> ⚠️ BAHAYA: Listrik dapat menyebabkan cedera serius atau kematian. Pastikan semua sumber listrik DIMATIKAN sebelum bekerja!\n\n## Komponen yang Dibutuhkan\n\n- Kabel NYM 2x1.5mm² (untuk penerangan)\n- Kabel NYM 2x2.5mm² (untuk stop kontak)\n- MCB (Miniature Circuit Breaker)\n- Saklar tunggal dan ganda\n- Stop kontak\n- Fitting lampu\n- Pipa conduit dan klem\n- Isolasi listrik\n\n## Langkah-Langkah\n\n### 1. Perencanaan Denah\nGambar denah rumah dan tentukan posisi:\n- Lampu di setiap ruangan\n- Stop kontak (minimal 2 per ruangan)\n- Saklar di dekat pintu masuk ruangan\n- Panel MCB di area yang mudah dijangkau\n\n### 2. Pemasangan Pipa Conduit\nPasang pipa conduit sesuai jalur yang sudah direncanakan. Gunakan klem setiap 60cm untuk menahan pipa.\n\n### 3. Penarikan Kabel\nTarik kabel melalui pipa conduit. Gunakan kawat penarik jika diperlukan. Sisakan kabel 15-20cm di setiap titik sambungan.\n\n### 4. Pemasangan Komponen\n- Pasang MCB di panel utama\n- Sambungkan saklar dan stop kontak sesuai wiring diagram\n- Pasang fitting lampu\n\n### 5. Pengujian\nSetelah semua terpasang, nyalakan MCB dan uji setiap titik dengan test pen. Pastikan tidak ada korsleting.\n\n### Tips Penting\n- Gunakan warna kabel standar: Biru (netral), Hitam/Merah (fasa), Kuning-Hijau (ground)\n- Jangan pernah menyambung kabel dengan cara diplintir saja, gunakan terminal konektor`,
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/mVz4loNPJuQ',
    imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800',
    category: 'Kelistrikan',
  },
  {
    title: 'Membuat Pot Tanaman dari Semen',
    description: 'Kreasi pot tanaman unik menggunakan semen dan cetakan sederhana untuk program penghijauan Karang Taruna.',
    content: `## Bahan yang Dibutuhkan\n\n- Site semen Portland (1 kg)\n- Pasir halus (2 kg)\n- Air secukupnya\n- Minyak goreng / vaselin (sebagai release agent)\n- Cetakan luar: ember plastik, kardus tebal, atau baskom\n- Cetakan dalam: gelas plastik, botol, atau wadah lebih kecil\n\n## Alat\n\n- Wadah pencampur (baskom besar)\n- Sendok semen atau spatula\n- Sarung tangan karet\n- Amplas\n- Masker debu\n\n## Langkah Pembuatan\n\n### 1. Siapkan Cetakan\nOlesi bagian dalam cetakan luar dan bagian luar cetakan dalam dengan minyak goreng. Ini agar semen tidak menempel dan mudah dilepas.\n\n### 2. Campur Adonan Semen\nCampurkan semen dan pasir dengan perbandingan 1:2. Tambahkan air sedikit demi sedikit sambil diaduk hingga konsistensi seperti adonan kue yang kental.\n\n### 3. Tuang ke Cetakan\nTuang adonan ke cetakan luar hingga sekitar 3-4cm dari dasar. Letakkan cetakan dalam di tengah dan tekan perlahan. Isi sisi-sisinya dengan adonan.\n\n### 4. Buat Lubang Drainase\nTusukkan sedotan atau paku besar di bagian bawah untuk membuat lubang drainase. Ini penting agar air tidak menggenang.\n\n### 5. Pengeringan\nDiamkan selama 48 jam di tempat teduh. Jangan terkena sinar matahari langsung agar tidak retak.\n\n### 6. Lepas Cetakan dan Finishing\nLepas cetakan dengan hati-hati. Amplas bagian yang kasar. Bisa dicat atau dibiarkan natural untuk tampilan industrial.\n\n### Variasi Kreatif\n- Tambahkan pewarna semen untuk warna berbeda\n- Gunakan daun sebagai tekstur di permukaan\n- Buat berbagai ukuran untuk set pot yang menarik`,
    type: 'text',
    videoUrl: '',
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800',
    category: 'Kerajinan Semen',
  },
  {
    title: 'Teknik Dasar Pengecatan Tembok',
    description: 'Panduan lengkap cara mengecat tembok rumah dengan hasil profesional untuk kegiatan bakti sosial.',
    content: `## Persiapan Alat dan Bahan\n\n### Bahan\n- Cat tembok interior/eksterior (hitung kebutuhan: 1 liter = ±10m²)\n- Cat dasar (primer/sealer)\n- Plamir tembok\n- Air bersih\n\n### Alat\n- Rol cat (ukuran 9 inch untuk area luas)\n- Kuas 2 inch dan 4 inch\n- Bak cat\n- Selotip kertas (masking tape)\n- Plastik penutup / koran bekas\n- Tangga\n- Amplas dinding\n\n## Langkah Pengecatan\n\n### 1. Persiapan Area\n- Pindahkan furnitur atau tutup dengan plastik\n- Tutup lantai dengan koran atau plastik\n- Pasang masking tape pada kusen, saklar, dan stop kontak\n\n### 2. Persiapan Dinding\n- Bersihkan dinding dari debu dan sarang laba-laba\n- Tambal lubang atau retak dengan plamir\n- Tunggu plamir kering, lalu amplas hingga rata\n- Bersihkan debu amplas\n\n### 3. Aplikasi Cat Dasar\nOleskan satu lapis cat dasar (primer) merata ke seluruh permukaan. Tunggu 2-4 jam hingga kering.\n\n### 4. Cat Lapisan Pertama\n- Mulai dari sudut dan tepi menggunakan kuas\n- Gunakan rol untuk area luas\n- Cat dengan gerakan \"W\" untuk hasil merata\n- Tunggu 2-4 jam\n\n### 5. Cat Lapisan Kedua\nUlangi proses yang sama. Dua lapis biasanya cukup untuk hasil yang solid.\n\n### 6. Finishing\n- Lepas masking tape sebelum cat benar-benar kering\n- Rapikan bagian yang kurang sempurna dengan kuas kecil\n- Bersihkan alat segera setelah selesai\n\n### Tips Pro\n- Cat pada pagi atau sore hari, hindari siang yang terlalu panas\n- Aduk cat secara menyeluruh sebelum digunakan\n- Untuk warna gelap, mungkin butuh 3 lapisan`,
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/O3maEz-0Yxc',
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800',
    category: 'Pengecatan',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Tutorial.deleteMany({});
    console.log('🗑️  Cleared existing tutorials');

    await Tutorial.insertMany(tutorials);
    console.log(`✅ Seeded ${tutorials.length} tutorials successfully!`);

    await mongoose.connection.close();
    console.log('👋 Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

seedDB();
