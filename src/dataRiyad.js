// src/dataRiyad.js

export const dummyKitab = [
  {
    id: 1,
    noBab: "٠١",
    judulBab: "Muqaddimah",
    deskripsi: "Mukadimah Kitab Riyadul Badi'ah",
    jumlahKata: 48,
    kataList: [
      // Baris 1: Bismillah
      { arab: "بِسْمِ", lugot: "kalawan nyebat" },
      { arab: "اللهِ", lugot: "jenengan Allah" },
      { arab: "الرَّحْمَنِ", lugot: "nu maparin nikmat ageung di dunya" },
      { arab: "الرَّحِيمِ", lugot: "nu maparin nikmat alit di akhirat" },

      // Baris 2: Alhamdulillah
      { arab: "اَلْحَمْدُ", lugot: "ari sadaya pujian eta" },
      { arab: "لِلَّهِ", lugot: "tetep kagungan Allah" },
      { arab: "رَبِّ", lugot: "nu ngurus" },
      { arab: "الْعَالَمِينَ", lugot: "sadaya alam" },
      { arab: "وَالصَّلَاةُ", lugot: "sareng ari rahmat ta'dzim" },
      { arab: "وَالسَّلَامُ", lugot: "sareng ari kasalametan" },
      { arab: "عَلَى", lugot: "mugi tetep ka" },

      // Baris 3: Sayyidina Muhammad
      { arab: "سَيِّدِنَا", lugot: "gusti urang sadaya" },
      { arab: "مُحَمَّدٍ", lugot: "nyeta Kanjeng Nabi Muhammad" },
      { arab: "سَيِّدِ", lugot: "nu janten dununganana" },
      { arab: "الْمُرْسَلِينَ", lugot: "sadaya para rasul" },
      { arab: "وَعَلَى", lugot: "sareng mugi tetep ka" },
      { arab: "آلِهِ", lugot: "kulawargina Kanjeng Nabi" },
      { arab: "وَصَحْبِهِ", lugot: "sareng para sahabatna" },

      // Baris 4: Ajma'in wat tabi'in
      { arab: "أَجْمَعِينَ", lugot: "sadayana" },
      { arab: "وَالتَّابِعِينَ", lugot: "sareng ka jalma nu nuturkeun" },
      { arab: "لَهُمْ", ka: "ka maranehna" },
      { arab: "بِإِحْسَانٍ", lugot: "kalawan padamelan sae" },
      { arab: "إِلَى", lugot: "dugi ka" },
      { arab: "يَوْمِ", lugot: "dinten" },
      { arab: "الدِّينِ", lugot: "walesan" },

      // Baris 5: Amma ba'du
      { arab: "أَمَّا", lugot: "ari sa'tosna" },
      { arab: "بَعْدُ", lugot: "tah eta (puji sareng sholawat)" },
      { arab: "فَهَذَا", lugot: "mangka ari ieu kitab" },
      { arab: "مُخْتَصَرٌ", lugot: "eta ringkesan" },
      { arab: "فِي", lugot: "dina nerangkeun" },
      { arab: "أُصُولِ", lugot: "pokok-pokok" },
      { arab: "الدِّينِ", lugot: "agama" },
      { arab: "وَجُمْلَةٍ", lugot: "sareng sabagian" },
      { arab: "مِنْ", lugot: "tina" },

      // Baris 6: Furu'ihi
      { arab: "فُرُوعِهِ", lugot: "cabang-cabangna furu'" },
      { arab: "عَلَى", lugot: "dina" },
      { arab: "مَذْهَبِ", lugot: "madzhab" },
      { arab: "الْإِمَامِ", lugot: "Imam" },
      { arab: "الشَّافِعِيِّ", lugot: "Syafi'i" },
      { arab: "رَضِيَ", lugot: "mugi mikaridlho" },
      { arab: "اللهُ", lugot: "Gusti Allah" },
      { arab: "عَنْهُ", lugot: "ti Imam Syafi'i" },

      // Baris 7: Samaituhu
      { arab: "سَمَّيْتُهُ", lugot: "ngaranan kaula ka ieu kitab" },
      { arab: "الرِّيَاضَ", lugot: "Riyad" },
      { arab: "الْبَدِيعَةَ", lugot: "al-Badi'ah" },
      { arab: "فِي", lugot: "dina" },
      { arab: "أُصُولِ", lugot: "pokok-pokok" },
      { arab: "الدِّينِ", lugot: "agama" },
      { arab: "وَبَعْضِ", lugot: "sareng sabagian" },
      { arab: "فُرُوعِ", lugot: "cabang" },

      // Baris 8: Asy-Syari'ah
      { arab: "الشَّرِيعَةِ", lugot: "syari'at" },
      { arab: "رَاجِيًا", lugot: "bari nuhunkeun kaula" },
      { arab: "مِنَ", lugot: "tina" },
      { arab: "اللهِ", lugot: "Gusti Allah" },
      { arab: "أَنْ", lugot: "kana yen" },
      { arab: "يَنْفَعَ", lugot: "maparin manfaat" },
      { arab: "بِهِ", lugot: "kalawan ieu kitab" },
      { arab: "طَلَبَةَ", lugot: "ka para santri/nu nyiar" },
      { arab: "الْعِلْمِ", lugot: "elmu" },

      // Baris 9: La siyyamal mubtadi'in
      { arab: "لَا", lugot: "" },
      { arab: "سِيَّمَا", lugot: "komo deui" },
      { arab: "الْمُبْتَدِئِينَ", lugot: "ka para santri anu anyar diajar" },
      { arab: "وَأَنْ", lugot: "sareng kana yen" },
      { arab: "يُوَجِّهَ", lugot: "" },
      { arab: "إِلَيْهِ", lugot: "ka Gusti Allah" },
      { arab: "رَغْبَةَ", lugot: "kana panyuhun" },
      { arab: "الرَّاغِبِينَ", lugot: "jalma-jalma nu raresep" }
    ]
  }
];
