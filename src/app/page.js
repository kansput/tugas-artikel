export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">FinanceInsight</h2>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-blue-400">Beranda</a>
            <a href="#" className="hover:text-blue-400">Artikel</a>
            <a href="#" className="hover:text-blue-400">Analisis</a>
            <a href="#" className="hover:text-blue-400">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6 text-sm text-gray-600">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Analisis Mendalam</span>
          <span>•</span>
          <span>6 Januari 2026</span>
          <span>•</span>
          <span>12 menit baca</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
          Di Balik iPhone Baru dan Tiket Konser: Generasi yang Menggadaikan Masa Depan untuk Validasi Sosial
        </h1>

        <h2 className="text-2xl text-gray-600 mb-8 font-light italic">
          Ketika reward instan bertemu literasi finansial rendah, lahirlah generasi yang lebih takut dianggap miskin daripada benar-benar miskin
        </h2>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            FI
          </div>
          <div>
            <p className="font-semibold text-gray-900">Tim Investigasi FinanceInsight</p>
            <p className="text-sm text-gray-600">Psikologi Keuangan & Fenomena Sosial Digital</p>
          </div>
        </div>

        {/* HOOK - PENDAHULUAN */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-lg border-l-4 border-red-600 mb-12">
          <p className="text-xl text-gray-800 leading-relaxed mb-4">
            Bayangkan ini: Feed Instagram penuh dengan foto iPhone 16 Pro Max yang baru dibeli, Story penuh dengan dokumentasi konser Taylor Swift di Singapura, outfit baru setiap minggu dengan caption "Treat yourself!". Sempurna, bukan?
          </p>
          <p className="text-xl text-gray-800 leading-relaxed">
            Sekarang zoom out ke realitas: 10 nomor tidak dikenal menelepon setiap hari. WhatsApp penuh ancaman. Screenshot KTP dan foto selfie disebarkan ke seluruh kontak. Keluarga menerima pesan teror. Tidur tidak nyenyak. Setiap notifikasi HP bikin jantung berdebar.
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Ini bukan cerita fiksi. Ini adalah realitas ribuan anak muda Indonesia di tahun 2026. Mereka hidup di dua dunia yang bertolak belakang: dunia digital yang glamor dan dunia nyata yang mencekik.
        </p>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Masalahnya bukan pada aplikasi pinjaman online itu sendiri. Masalahnya ada pada mentalitas "ingin reward instan"—instant gratification—yang tidak didukung oleh kemampuan finansial nyata. Generasi yang dibesarkan dalam era "one-click purchase" ini jatuh ke dalam perangkap yang mereka sendiri tidak sadari sedang mereka buat.
        </p>

        <figure className="my-12">
          <img
            src="https://asset.kompas.com/crops/6l8W91XHjwRZgqByLUVChvaXcEU=/0x0:0x0/1200x800/data/photo/2025/04/24/6809bc450d529.jpg"
            alt="Ilustrasi generasi muda yang terbebani utang pinjaman online"
            className="w-full rounded-lg shadow-xl"
          />
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            Ketika glamor media sosial bertemu realitas jeratan utang (Kompas)
          </figcaption>
        </figure>

        {/* BAGIAN 1: PSIKOLOGI FOMO */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-16">Psikologi "Beli Sekarang, Bayar Nanti": Ketika FOMO Lebih Kuat dari Akal Sehat</h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Data Otoritas Jasa Keuangan menunjukkan fakta yang mengejutkan: mayoritas generasi muda yang terjerat pinjaman online <span className="font-bold text-gray-900">tidak meminjam untuk kebutuhan dasar</span> seperti beras, listrik, atau biaya pengobatan darurat.
        </p>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Mereka meminjam untuk <span className="italic">lifestyle</span>: tiket konser idola K-Pop, skin game MLBB atau Valorant, iPhone terbaru padahal HP lama masih bagus, outfit aesthetic untuk konten TikTok, bahkan untuk nongkrong di kafe yang "instagrammable".
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-10 rounded-lg">
          <h3 className="font-bold text-2xl mb-4 text-gray-900">Fear of Missing Out: Musuh Terbesar Dompet Gen Z</h3>

          <p className="text-gray-800 leading-relaxed mb-4">
            FOMO adalah ketakutan patologis untuk tertinggal dari tren, dari pergaulan, dari apa yang dilakukan orang lain. Ini bukan sekadar "pengen ikut-ikutan". Ini adalah kecemasan sosial yang sangat nyata di era digital.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Ketika 8 dari 10 teman punya iPhone, tekanan untuk memiliki yang sama sangat besar. Ketika semua orang posting dari konser, tidak hadir terasa seperti tidak eksis. Ketika semua orang pakai outfit branded, memakai yang biasa-biasa saja terasa memalukan.
          </p>

          <p className="text-gray-800 leading-relaxed font-semibold">
            Inilah paradoks generasi digital: Mereka lebih takut dianggap "tidak update" atau "miskin" oleh teman-temannya di media sosial daripada takut pada bunga berbunga yang akan mencekik mereka di dunia nyata.
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Validasi sosial—likes, comments, views—telah menjadi lebih penting daripada kesehatan finansial. Satu postingan iPhone baru bisa dapat 200 likes. Satu Story dari konser bisa dapat 50 viewers. Tapi tagihan pinjol? Itu masalah "bulan depan".
        </p>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Masalahnya, "bulan depan" selalu datang. Dan ketika datang, mereka baru sadar: 200 likes tidak bisa bayar cicilan. 50 viewers tidak bisa menghentikan teror debt collector.
        </p>

        <figure className="my-12">
          <img
            src="https://thumb.viva.id/vivawisata/665x374/2024/09/27/66f6b9a76886d-gaya-hidup-yolo-fomo-dan-fopo_wisata.jpg"
            alt="Representasi gaya hidup FOMO dan YOLO di kalangan generasi muda"
            className="w-full rounded-lg shadow-xl"
          />
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            FOMO: Ketika tekanan sosial mengalahkan logika finansial (Viva)
          </figcaption>
        </figure>

        <figure className="my-12">
          <img
            src="https://serikatnews.com/wp-content/uploads/2025/09/FOMO.jpg"
            alt="Dampak FOMO terhadap keputusan finansial generasi muda"
            className="w-full rounded-lg shadow-xl"
          />
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            Siklus berbahaya: Media sosial → FOMO → Konsumsi → Utang → Stres (Serikat News)
          </figcaption>
        </figure>

        {/* BAGIAN 2: KEMUDAHAN YANG MEMATIKAN */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-16">Kemudahan yang Mematikan: Ketika 5 Menit Menghancurkan 5 Tahun</h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Mari kita bandingkan dua skenario:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4 text-green-900">Meminjam di Bank Tradisional</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Butuh agunan (sertifikat rumah/kendaraan)</li>
              <li>✓ Slip gaji 3-6 bulan terakhir</li>
              <li>✓ NPWP dan bukti pajak</li>
              <li>✓ Proses verifikasi 1-2 minggu</li>
              <li>✓ Interview tatap muka</li>
              <li>✓ Survey ke lokasi</li>
              <li>✓ Penjelasan detail soal bunga</li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-green-800">Hasilnya: Banyak yang batal karena ribet</p>
          </div>

          <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4 text-red-900">Meminjam di Pinjol</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Foto KTP</li>
              <li>✓ Foto selfie</li>
              <li>✓ Klik "Setuju" (tanpa baca)</li>
              <li>✓ Tunggu 5 menit</li>
              <li>✓ Uang cair ke rekening</li>
              <li>✓ SELESAI</li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-red-800">Hasilnya: Terlalu mudah untuk ditolak</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 mb-10 rounded-lg">
          <h3 className="font-bold text-2xl mb-4 text-gray-900">Ilusi "Uang Kaget"</h3>

          <p className="text-gray-800 leading-relaxed mb-4">
            Inilah bahaya terbesar dari kemudahan akses: <span className="font-bold">menghilangkan "rasa sakit" saat mengeluarkan uang.</span>
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Ketika seseorang harus mengumpulkan dokumen selama berminggu-minggu, menunggu approval, dan akhirnya mendapat uang setelah proses panjang, ada "rasa berat" untuk menggunakannya. Ada awareness bahwa ini adalah tanggung jawab besar.
          </p>

          <p className="text-gray-800 leading-relaxed font-semibold">
            Tapi ketika uang cair dalam 5 menit setelah foto selfie? Otak tidak sempat memproses ini sebagai "hutang". Ini terasa seperti "bonus", seperti "rejeki nomplok", seperti uang yang memang sudah jadi haknya.
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Ditambah lagi dengan literasi keuangan yang rendah. Berapa banyak anak muda yang benar-benar mengerti arti "bunga 0,4% per hari"? Kedengarannya kecil, kan? Hanya 0,4%.
        </p>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Tapi mari kita hitung: 0,4% per hari × 30 hari = 12% per bulan. Dalam setahun? <span className="font-bold text-red-600 text-xl">144% per tahun.</span> Pinjam Rp5 juta hari ini, dalam setahun menjadi Rp12,2 juta. Ini bukan pinjaman. Ini adalah <span className="italic">financial suicide in slow motion</span>.
        </p>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg my-12">
          <p className="text-2xl font-bold text-center leading-relaxed">
            Literasi Keuangan Rendah + Akses Mudah = Bencana yang Bisa Diprediksi
          </p>
        </div>

        <figure className="my-12">
          <img
            src="https://cdn.gnfi.net/goodstats/uploads/images/120/pinjolll-1png"
            alt="Grafik statistik pinjaman online dari data OJK"
            className="w-full rounded-lg shadow-xl"
          />
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            Angka yang tidak berbohong: Lonjakan drastis pinjaman online di Indonesia (GNFI)
          </figcaption>
        </figure>

        {/* BAGIAN 3: GALI LUBANG TUTUP LUBANG */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-16">Lingkaran Setan "Gali Lubang Tutup Lubang": Matematika yang Tidak Pernah Bohong</h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Inilah fase paling berbahaya, fase dimana seseorang sudah tidak lagi meminjam untuk lifestyle, tapi meminjam untuk membayar pinjaman. Mari kita lihat bagaimana matematika sederhana menunjukkan betapa mustahilnya keluar dari siklus ini:
        </p>

        <div className="bg-slate-100 p-8 rounded-lg mb-10 border-2 border-slate-300">
          <h3 className="font-bold text-xl mb-6 text-gray-900 text-center">Skenario Nyata: Spiral Menuju Kehancuran</h3>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="font-semibold text-lg">Bulan Pertama - "Awal yang Manis"</h4>
              </div>
              <p className="text-gray-700 ml-13">Pinjam Rp3 juta di Aplikasi A untuk beli HP. Tenor 3 bulan. Cicilan Rp1,2 juta/bulan.</p>
              <p className="text-sm text-gray-600 ml-13 mt-2">Total: Utang Rp3 juta di 1 aplikasi</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="font-semibold text-lg">Bulan Kedua - "Mulai Ketat"</h4>
              </div>
              <p className="text-gray-700 ml-13">Gaji habis untuk kebutuhan lain. Cicilan Rp1,2 juta tidak ada. Pinjam Rp1,5 juta di Aplikasi B untuk bayar Aplikasi A.</p>
              <p className="text-sm text-gray-600 ml-13 mt-2">Total: Utang Rp4,5 juta di 2 aplikasi</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="font-semibold text-lg">Bulan Ketiga - "Panik Mulai"</h4>
              </div>
              <p className="text-gray-700 ml-13">Harus bayar: Aplikasi A Rp1,2 juta + Aplikasi B Rp700 ribu = Rp1,9 juta. Gaji tidak cukup. Pinjam Rp2 juta di Aplikasi C.</p>
              <p className="text-sm text-gray-600 ml-13 mt-2">Total: Utang Rp6,5 juta di 3 aplikasi</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="font-semibold text-lg">Bulan Keempat - "Kehancuran Total"</h4>
              </div>
              <p className="text-gray-700 ml-13">Cicilan gabungan: Rp2,8 juta. Gaji: Rp5 juta. Biaya hidup: minimal Rp3 juta. TIDAK MUNGKIN BAYAR. Pinjam lagi Rp3 juta di Aplikasi D dan E.</p>
              <p className="text-sm text-red-600 ml-13 mt-2 font-bold">Total: Utang Rp9,5 juta di 5 aplikasi</p>
            </div>

            <div className="bg-red-600 text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center font-bold">∞</div>
                <h4 className="font-semibold text-lg">Bulan Kelima dan Seterusnya - "Infinite Loop"</h4>
              </div>
              <p className="ml-13">Setiap bulan: cicilan bertambah, aplikasi bertambah, teror bertambah, stress bertambah. Exit? Hampir mustahil tanpa menjual aset atau bantuan keluarga.</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Data OJK per Oktober 2025 menunjukkan: total outstanding pinjaman online mencapai Rp92,9 triliun. Dari jumlah tersebut, lebih dari 90% kredit macet berasal dari kelompok usia 19-34 tahun, dengan total utang mencapai Rp37-38 triliun.
        </p>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Ini bukan lagi masalah individu. Ini adalah <span className="font-bold text-red-600">krisis generasi</span>. Puluhan ribu anak muda saat ini sedang terjebak dalam siklus yang sama: pinjam untuk bayar pinjaman, pinjam lagi untuk bayar yang baru, dan terus berputar sampai benar-benar runtuh.
        </p>

        <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white p-10 rounded-lg my-12">
          <p className="text-2xl font-bold text-center leading-relaxed mb-4">
            "Ini bukan solusi darurat. Ini adalah bunuh diri finansial dalam gerakan lambat."
          </p>
          <p className="text-center text-gray-300 text-sm">
            Sekali masuk fase "gali lubang tutup lubang", hampir tidak ada jalan keluar tanpa kehilangan sesuatu yang berharga
          </p>
        </div>

        <figure className="my-12">
          <img
            src="https://assets.banksaqu.co.id/bahaya_pinjol_ilegal_4b076f968e/bahaya_pinjol_ilegal_4b076f968e.jpg"
            alt="Ilustrasi bahaya dan teror dari pinjaman online ilegal"
            className="w-full rounded-lg shadow-xl"
          />
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            Dari cicilan yang terlihat ringan, menuju teror yang mengancam kewarasan (BankSaqu)
          </figcaption>
        </figure>

        <figure className="my-12">
          <img
            src="https://www.menpan.go.id/site/images/berita/2025/20250604_-_Judol_dan_Pijol_Ilegal_Dua_Entitas_Pengancam_Generasi_Muda_di_Era_Digital.jpg"
            alt="Infografis ancaman pinjaman online ilegal bagi generasi muda"
            className="w-full rounded-lg shadow-xl"
          />
          <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
            Dua monster digital yang sedang memangsa generasi muda Indonesia (Kemenpan RB)
          </figcaption>
        </figure>

        {/* KESIMPULAN - TAMPARAN TERAKHIR */}
        <h2 className="text-3xl font-bold mb-6 text-gray-900 mt-16">Bangun atau Tenggelam: Tidak Ada Jalan Tengah</h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Artikel ini tidak akan mengakhiri dengan saran klise seperti "menabunglah", "bikin budget", atau "jangan boros". Karena sejujurnya, semua nasihat itu tidak akan berguna jika mentalitasnya tidak berubah.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-10 rounded-lg">
          <h3 className="font-bold text-2xl mb-4 text-gray-900">Solusi Sebenarnya: Turunkan Standar Gaya Hidup</h3>

          <p className="text-gray-800 leading-relaxed mb-4">
            Ini mungkin terdengar brutal, tapi ini adalah satu-satunya solusi yang benar-benar bekerja: <span className="font-bold">kamu harus rela tidak terlihat "keren" di mata orang lain.</span>
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Tidak apa-apa pakai HP yang "biasa-biasa saja" selama 3-4 tahun. Tidak apa-apa tidak nonton konser setiap ada idola datang. Tidak apa-apa pakai outfit yang sama berulang kali. Tidak apa-apa makan di warteg, bukan di kafe aesthetic.
          </p>

          <p className="text-gray-800 leading-relaxed mb-4">
            Karena tahu apa yang lebih tidak apa-apa? <span className="font-bold">Tidur nyenyak tanpa teror debt collector.</span> Buka HP tanpa cemas. Pulang ke rumah tanpa beban. Punya masa depan yang tidak digadaikan untuk validasi sosial sesaat.
          </p>

          <p className="text-gray-800 leading-relaxed font-semibold text-lg">
            Pertanyaannya sederhana: Mana yang kamu pilih? Terlihat kaya di Instagram tapi miskin di dunia nyata, atau terlihat biasa saja tapi punya kedamaian finansial?
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Jika kamu sudah terlanjur terjerat, ada dua pilihan: hadapi dengan kepala tegak atau lari dan buat situasi makin buruk. Laporkan ke Satgas PASTI OJK. Bicara dengan keluarga meskipun malu. Jual barang yang dibeli dengan utang itu. Cari pekerjaan sampingan. Apapun itu, yang penting: berhenti menambah lubang baru.
        </p>

        {/* PESAN PENUTUP */}
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white p-12 rounded-xl my-16 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-black leading-tight mb-6">
              "Pinjol adalah tuan yang kejam. Jika kamu tidak bisa mengendalikan keinginanmu hari ini, kamu sedang menjual kebebasanmu di masa depan dengan harga murah."
            </p>
            <div className="w-20 h-1 bg-white mx-auto my-6"></div>
            <p className="text-xl font-light">
              Masa depanmu terlalu berharga untuk ditukar dengan likes di Instagram atau pujian dari orang yang bahkan tidak peduli padamu.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg my-12">
          <h3 className="font-bold text-xl mb-4 text-gray-900">Jika Kamu Sudah Terjerat</h3>
          <div className="space-y-3 text-gray-700">
            <p>📞 <span className="font-semibold">Satgas Waspada Investasi (SWI):</span> 157</p>
            <p>🌐 <span className="font-semibold">Laporan Online:</span> www.ojk.go.id/waspadainvestasi</p>
            <p>💬 <span className="font-semibold">WhatsApp OJK:</span> 081-157-157-157</p>
            <p className="text-sm italic pt-2">Jangan tunggu sampai terlambat. Setiap hari yang berlalu, bunga terus berjalan.</p>
          </div>
        </div>

        {/* Footer Article */}
        <div className="border-t border-gray-200 pt-8 mt-16">
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Sumber dan Referensi:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Otoritas Jasa Keuangan (OJK) - Data Outstanding Pinjaman Online Oktober 2025</li>
              <li>• Satgas Waspada Investasi - Laporan Pinjaman Online Ilegal 2024-2025</li>
              <li>• Penelitian Psikologi Konsumen Digital - Universitas Indonesia, 2025</li>
            </ul>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="text-sm text-gray-600">
              <p className="mb-1">Diterbitkan: 6 Januari 2026</p>
              <p>Untuk informasi lebih lanjut: <a href="https://www.ojk.go.id" className="text-blue-600 hover:underline font-medium">www.ojk.go.id</a></p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                Bagikan Artikel
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                Simpan
              </button>
            </div>
          </div>
        </div>

        {/* Related Topics */}
        <div className="bg-slate-50 p-8 rounded-lg mt-12">
          <h3 className="font-bold text-xl mb-4 text-gray-900">Topik Terkait</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition">
              Literasi Keuangan
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition">
              Pinjaman Online
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition">
              Gen Z Finance
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition">
              Psikologi Konsumen
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-blue-400 hover:text-blue-600 cursor-pointer transition">
              FOMO & Gaya Hidup
            </span>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FinanceInsight</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Platform analisis keuangan dan teknologi digital terpercaya untuk generasi muda Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kategori</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Keuangan Digital</a></li>
                <li><a href="#" className="hover:text-white transition">Investasi</a></li>
                <li><a href="#" className="hover:text-white transition">Analisis Pasar</a></li>
                <li><a href="#" className="hover:text-white transition">Edukasi</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Sumber Daya</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Panduan Keuangan</a></li>
                <li><a href="#" className="hover:text-white transition">Kalkulator Finansial</a></li>
                <li><a href="#" className="hover:text-white transition">Glossary</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak & Bantuan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Hubungi Redaksi</a></li>
                <li><a href="#" className="hover:text-white transition">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2026 Kelompok 1. Tugas Artikel 
              </p>

              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}