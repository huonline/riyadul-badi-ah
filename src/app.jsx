import React, { useState } from 'react';
import { dummyKitab } from './dataRiyad.js';
import { latinToPegon, removeHarakat } from './utils/transliterasi';

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
                  <div className="w-10 h-10 rounded-lg bg-amber-100/60 text-amber-900 font-serif font-bold flex items-center justify-center text-lg group-hover:bg-amber-800 group-hover:text-amber-50 transition">
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
          <header className="sticky top-2 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-stone-200 shadow-sm z-20 flex justify-between items-center mb-6">
            <button
              onClick={() => setCurrentView('home')}
              className="text-xs font-semibold px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition cursor-pointer"
            >
              ← Kembali
            </button>

            <span className="font-bold font-serif text-amber-950 text-sm">
              {selectedBab.judulBab}
            </span>

            {/* Controller Toggles */}
            <div className="flex items-center gap-2">
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
          <main className="bg-[#fffdf9] p-6 md:p-12 rounded-2xl border border-amber-900/10 shadow-sm flex-1 mb-6 flex flex-col justify-between" dir="rtl">
            
            <div className="text-center border-b border-dashed border-stone-200 pb-3 mb-8">
              <span className="text-xs tracking-widest text-amber-800 uppercase font-serif">
                — {selectedBab.judulBab} —
              </span>
            </div>

            <div
              dir="rtl"
              className="
                kitab-page
                select-all
                text-stone-950
                font-arabic
              "
            >
              {selectedBab.kataList.map((item, index) => {

                const kataMatan =
                  showHarakat
                    ? item.arab
                    : removeHarakat(item.arab);

                let displayLugot = "";

                if (lugotMode === "latin")
                  displayLugot = item.lugot;

                if (lugotMode === "pegon")
                  displayLugot = latinToPegon(item.lugot);

                return (

                  <span
                    key={index}
                    className="kata"
                  >

                    <span className="arab">
                      {kataMatan}
                    </span>

                    {lugotMode !== "hide" && (

                      <span
                        className={`lugot ${
                          lugotMode === "pegon"
                            ? "rtl"
                            : "ltr"
                        }`}
                      >
                        {displayLugot}
                      </span>

                    )}

                  </span>

                );

              })}
            </div>

          </main>

          {/* Footer / Info Halaman */}
          <footer className="text-xs text-center text-stone-500 py-4">
            <p>© Riyadul Badi'ah - Kitab Digital</p>
          </footer>

        </div>
      )}

    </div>
  );
}
