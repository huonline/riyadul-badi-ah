import React, { useState } from 'react';
import { dummyKitab } from './dataRiyad.js';
import { latinToPegon, removeHarakat } from './utils/transliterasi';

function splitLugot(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);

  // Pendek = 1 baris
  if (words.length <= 3) {
    return [text];
  }

  // Sedang = 2 baris
  if (words.length <= 6) {
    const middle = Math.ceil(words.length / 2);
    return [
      words.slice(0, middle).join(' '),
      words.slice(middle).join(' '),
    ];
  }

  // Panjang = 3 baris
  const perLine = Math.ceil(words.length / 3);
  const result = [];

  for (let i = 0; i < words.length; i += perLine) {
    result.push(words.slice(i, i + perLine).join(' '));
  }

  return result;
}

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
    window.scrollTo(0, 0); // Memastikan selalu mulai dari atas saat ganti bab
  };

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-stone-800 font-sans selection:bg-amber-200 relative">

      {/* ================================================== */}
      {/* VIEW 1: COVER & DAFTAR ISI (HOME)                  */}
      {/* ================================================== */}
      {currentView === 'home' && (
        <div className="max-w-2xl mx-auto p-4 md:p-6 pb-20">

          <header className="bg-amber-900 text-amber-50 rounded-2xl p-6 mb-6 shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">Kitab Digital</span>
              <h1 className="text-3xl font-serif font-bold mt-1 mb-2">Riyadul Badi'ah</h1>
              <p className="text-sm text-amber-200/90 italic">Matan Arab & Lugot Jenggotan Rata Sisi</p>

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

          <div className="mb-6">
            <input
              type="text"
              placeholder="Cari bab atau topik..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/50 shadow-sm"
            />
          </div>

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
        <div className="min-h-screen flex flex-col max-w-3xl mx-auto p-4 md:p-6 pb-28">

          <main className="bg-[#fffdf9] p-6 md:p-12 rounded-2xl border border-amber-900/10 shadow-sm flex-1 flex flex-col mt-2" dir="rtl">

            <div className="text-center border-b border-dashed border-stone-200 pb-3 mb-8">
              <span className="text-xs tracking-widest text-amber-800 uppercase font-serif">
                — {selectedBab.judulBab} —
              </span>
            </div>

            <div
              className="
                w-full
                text-justify
                text-stone-950
                font-arabic
                text-4xl
                leading-[6rem]
                tracking-tight
                select-all
              "
              style={{
                textAlignLast: 'justify',
                textJustify: 'distribute',
              }}
            >
              {selectedBab.kataList.map((item, index) => {
                const kataMatan = showHarakat ? item.arab : removeHarakat(item.arab);

                let displayLugot = '';
                if (lugotMode === 'latin') displayLugot = item.lugot;
                if (lugotMode === 'pegon') displayLugot = latinToPegon(item.lugot);

                const lugotLines = splitLugot(displayLugot);

                return (
                  <React.Fragment key={index}>
                    <span className="relative inline-block">
                      {/* Teks Arab Matan diamankan di z-10 agar selalu di atas */}
                      <span className="relative z-10">{kataMatan}</span>

                      {/* AREA LUGOT */}
                      {lugotMode !== 'hide' && (
                        <span
                          className="absolute pointer-events-none z-0"
                          style={{
                            top: '38px',
                            right: '0',
                            transform: 'rotate(-28deg)',
                            transformOrigin: 'top right',
                            minWidth: '40px',
                            maxWidth: '95px',
                            direction: lugotMode === 'pegon' ? 'rtl' : 'ltr',
                            lineHeight: '0.9rem',
                          }}
                        >
                          <span
                            className="
                              inline-block
                              text-[10px]
                              leading-[0.9rem]
                              font-semibold
                              text-amber-950
                              whitespace-normal
                            "
                          >
                            {lugotLines.map((line, i) => (
                              <span
                                key={i}
                                style={{
                                  display: 'block',
                                  marginRight: `${i * 5}px`,
                                  marginTop: '-1px',
                                  textAlign: lugotMode === 'pegon' ? 'right' : 'left',
                                }}
                              >
                                {line}
                              </span>
                            ))}
                          </span>
                        </span>
                      )}
                    </span>
                    {" "}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="text-center pt-12 border-t border-stone-100 mt-auto">
              <span className="text-xs text-stone-400 font-mono">
                Halaman {selectedBab.id}
              </span>
            </div>

          </main>

          {/* ================================================== */}
          {/* BOTTOM APP NAVIGATION BAR                          */}
          {/* ================================================== */}
          <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
            <div className="max-w-md mx-auto pointer-events-auto bg-white/95 backdrop-blur-md border border-stone-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-2 flex justify-between items-center px-2 gap-1.5">

              <button
                onClick={() => setCurrentView('home')}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl transition cursor-pointer font-bold text-lg flex items-center justify-center"
                title="Kembali ke Daftar Isi"
              >
                ←
              </button>

              <div className="w-px h-8 bg-stone-200 mx-1"></div>

              <button
                onClick={() => setShowHarakat(!showHarakat)}
                className={`flex-1 text-sm py-2.5 rounded-xl border font-serif transition cursor-pointer text-center font-bold tracking-widest ${
                  showHarakat
                    ? 'bg-amber-800 text-white border-amber-800 shadow-md'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {showHarakat ? 'شَكْل' : 'سكون'}
              </button>

              <div className="w-px h-8 bg-stone-200 mx-1"></div>

              <div className="flex-1 relative">
                <select
                  value={lugotMode}
                  onChange={(e) => setLugotMode(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-2 py-2.5 text-sm text-center font-semibold text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-700/50 cursor-pointer appearance-none"
                >
                  <option value="pegon">Pegon</option>
                  <option value="latin">Latin</option>
                  <option value="hide">Kosongan</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400 text-xs">
                  ▼
                </div>
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}
