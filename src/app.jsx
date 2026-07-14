import React, { useState } from 'react';
import { latinToPegon, removeHarakat } from './utils/transliterasi';

// Data Sampel / Dummy Kitab untuk Pengujian Tampilan
const dummyKitab = [
  {
    id: 1,
    noBab: "٠١",
    judulBab: "Muqaddimah",
    deskripsi: "Mukadimah & Bismillah",
    jumlahKata: 8,
    kataList: [
      { arab: "بِسْمِ", lugot: "kalawan nyebat" },
      { arab: "اللهِ", lugot: "nu kagungan jenengan Allah" },
      { arab: "الرَّحْمٰنِ", lugot: "nu Maha Welas" },
      { arab: "الرَّحِيْمِ", lugot: "tur nu Maha Asih" },
      { arab: "اَلْحَمْدُ", lugot: "ari sadaya puji" },
      { arab: "لِلّٰهِ", lugot: "eta kagungan Allah" },
      { arab: "رَبِّ", lugot: "nu mengeranan" },
      { arab: "الْعَالَمِيْنَ", lugot: "sadaya alam" },
    ]
  },
  {
    id: 2,
    noBab: "٠٢",
    judulBab: "Fasl Arkanul Islam",
    deskripsi: "Rukun-rukun Islam",
    jumlahKata: 3,
    kataList: [
      { arab: "أَرْكَانُ", lugot: "ari rukun-rukunna" },
      { arab: "الإِسْلاَمِ", lugot: "agama Islam" },
      { arab: "خَمْسَةٌ", lugot: "eta aya lima" },
    ]
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'reader'
  const [selectedBab, setSelectedBab] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Setting Mode Pembaca
  const [showHarakat, setShowHarakat] = useState(true);
  const [lugotMode, setLugotMode] = useState('pegon'); // 'hide' | 'latin' | 'pegon'

  // Filter Bab berdasarkan pencarian
  const filteredBab = dummyKitab.filter(bab => 
    bab.judulBab.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bab.deskripsi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openBab = (bab) => {
    setSelectedBab(bab);
    setCurrentView('reader');
  };

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-stone-800 font-sans selection:bg-amber-200">
      
      {/* ================================================== */}
      {/* VIEW 1: COVER & DAFTAR ISI (HOME)                  */}
      {/* ================================================== */}
      {currentView === 'home' && (
        <div className="max-w-2xl mx-auto p-4 md:p-6 pb-20">
          
          {/* Header Cover */}
          <header className="bg-amber-900 text-amber-50 rounded-2xl p-6 mb-6 shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Kitab Digital</span>
              <h1 className="text-3xl font-serif font-bold mt-1 mb-2">Riyadul Badi'ah</h1>
              <p className="text-sm text-amber-200/90 italic">Matan Arab & Lugot Sunda Jenggotan</p>
              
              <button 
                onClick={() => openBab(dummyKitab[0])}
                className="mt-5 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold rounded-xl text-sm shadow transition flex items-center gap-2 cursor-pointer"
              >
                Mulai Membaca Bab 1
              </button>
            </div>
            <div className="absolute -right-6 -bottom-8 text-amber-800/30 text-9xl font-serif select-none">
              س
            </div>
          </header>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Cari bab atau topik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/50 shadow-sm"
            />
          </div>

          {/* Daftar Bab */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 px-1">Daftar Bab</h2>
            
            {filteredBab.map((bab) => (
              <div
                key={bab.id}
                onClick={() => openBab(bab)}
                className="bg-white p-4 rounded-xl border border-stone-200/80 hover:border-amber-700/40 hover:shadow-md transition cursor-pointer flex justify-between items-center group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100/60 text-amber-900 font-serif font-bold flex items-center justify-center text-lg group-hover:bg-amber-800 group-hover:text-amber-100 transition">
                    {bab.noBab}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 group-hover:text-amber-900 transition">{bab.judulBab}</h3>
                    <p className="text-xs text-stone-500">{bab.deskripsi}</p>
                  </div>
                </div>

                <span className="text-xs text-stone-400 font-mono">
                  {bab.jumlahKata} kata
                </span>
              </div>
            ))}
          </div>

        </div>
      )}


      {/* ================================================== */}
      {/* VIEW 2: HALAMAN PEMBACA KITAB (READER)             */}
      {/* ================================================== */}
      {currentView === 'reader' && selectedBab && (
        <div className="min-h-screen flex flex-col justify-between max-w-3xl mx-auto p-4 md:p-6">
          
          {/* Top Bar / Navigation */}
          <header className="sticky top-2 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-stone-200 shadow-sm z-20 flex flex-wrap justify-between items-center gap-2 mb-6">
            <button
              onClick={() => setCurrentView('home')}
              className="text-xs font-semibold px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition cursor-pointer"
            >
              ← Kembali
            </button>

            <span className="font-bold font-serif text-amber-950 text-sm">
              {selectedBab.judulBab}
            </span>

            {/* Controller / Switcher Toggle */}
            <div className="flex items-center gap-2">
              {/* Toggle Harakat */}
              <button
                onClick={() => setShowHarakat(!showHarakat)}
                className={`text-xs px-2.5 py-1 rounded-md border font-serif transition cursor-pointer ${
                  showHarakat 
                    ? 'bg-amber-800 text-white border-amber-800' 
                    : 'bg-white text-stone-600 border-stone-300'
                }`}
              >
                {showHarakat ? 'شَكْل' : 'سكون'}
              </button>

              {/* Toggle Mode Lugot */}
              <select
                value={lugotMode}
                onChange={(e) => setLugotMode(e.target.value)}
                className="text-xs bg-white border border-stone-300 rounded-md px-2 py-1 focus:outline-none cursor-pointer"
              >
                <option value="pegon">Lugot Pegon</option>
                <option value="latin">Lugot Latin</option>
                <option value="hide">Kosongan</option>
              </select>
            </div>
          </header>

         {/* Area Lembaran Kitab */}
<main className="bg-[#fffdf9] p-6 md:p-10 rounded-2xl border border-amber-900/10 shadow-sm flex-1 mb-6 flex flex-col justify-between" dir="rtl">
  
  <div className="text-center border-b border-dashed border-stone-200 pb-3 mb-8">
    <span className="text-xs tracking-widest text-amber-800 uppercase font-serif">
      — {selectedBab.judulBab} —
    </span>
  </div>

  {/* Loop Kata Matan (Jarak Baris Atas-Bawah Dikunci Bertingkat) */}
  <div className="flex flex-wrap items-start justify-start gap-x-2 gap-y-16 py-4" dir="rtl">
    {selectedBab.kataList.map((item, index) => {
      
      // Konversi teks lugot sesuai mode yang dipilih
      let displayLugot = '';
      if (lugotMode === 'latin') displayLugot = item.lugot;
      if (lugotMode === 'pegon') displayLugot = latinToPegon(item.lugot);

      return (
        /* KUNCI TINGGI BOX (h-16) supaya jarak ke baris matan di bawahnya SELALU KONSISTEN */
        <div 
          key={index} 
          className="relative flex flex-col items-center justify-start h-16 min-w-[35px] px-1"
        >
          
          {/* Teks Matan Arab (Rapat & Presisi) */}
          <span className="text-3xl font-arabic text-stone-950 leading-none text-center">
            {showHarakat ? item.arab : removeHarakat(item.arab)}
          </span>

          {/* Teks Lugot Miring (-35deg) Bebas Ke Samping */}
          {lugotMode !== 'hide' && (
            <div
              className="absolute top-[80%] right-1 origin-top-right transition-all duration-300 pointer-events-none z-10"
              style={{ transform: 'rotate(-35deg)' }}
            >
              <span 
                className="text-[11px] text-amber-900 font-medium whitespace-nowrap bg-[#fffdf9]/90 px-1 rounded font-arabic border border-amber-900/10 shadow-2xs"
                dir={lugotMode === 'pegon' ? 'rtl' : 'ltr'}
              >
                {displayLugot}
              </span>
            </div>
          )}

        </div>
      );
    })}
  </div>

  {/* Footer Halaman */}
  <div className="text-center pt-8 border-t border-stone-100 mt-auto">
    <span className="text-xs text-stone-400 font-mono">
      Halaman {selectedBab.id}
    </span>
  </div>

</main>
        </div>
      )}

    </div>
  );
}
