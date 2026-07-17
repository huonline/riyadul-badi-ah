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
      { arab: "بِسْمِ", lugot: "kalawan nyebat", pegon: "كلاوان ۑيبات" },
      { arab: "اللهِ", lugot: "jenengan Allah", pegon: "جينڠان الله" },
      { arab: "الرَّحْمَنِ", lugot: "nu maparin nikmat ageung di dunya", pegon: "نو ماڤارين نيکمة اڮيڠ دي دوڽا" },
      { arab: "الرَّحِيمِ", lugot: "nu maparin nikmat alit di akhirat", pegon: "نو ماڤارين نيکمة اليت دي اخيرة" },

      // Baris 2: Alhamdulillah
      { arab: "اَلْحَمْدُ", lugot: "ari sadaya pujian eta", pegon: "اري سادايا ڤوجيان ايتا" },
      { arab: "لِلَّهِ", lugot: "tetep kagungan Allah", pegon: "تيتيڤ كاڮوڠان الله" },
      { arab: "رَبِّ", lugot: "nu ngurus", pegon: "نو ڠوروس" },
      { arab: "الْعَالَمِينَ", lugot: "sadaya alam", pegon: "سادايا عالم" },
      { arab: "وَالصَّلَاةُ", lugot: "sareng ari rahmat ta'dzim", pegon: "ساريڠ اري رحمة تعظيم" },
      { arab: "وَالسَّلَامُ", lugot: "sareng ari kasalametan", pegon: "ساريڠ اري كاسالاميتان" },
      { arab: "عَلَى", lugot: "mugi tetep ka", pegon: "موڮي تيتيڤ كا" },

      // Baris 3: Sayyidina Muhammad
      { arab: "سَيِّدِنَا", lugot: "gusti urang sadaya", pegon: "ڮوستي اوراڠ سادايا" },
      { arab: "مُحَمَّدٍ", lugot: "nyeta Kanjeng Nabi Muhammad", pegon: "ۑيتا كانجيڠ نبي محمد" },
      { arab: "سَيِّدِ", lugot: "nu janten dununganana", pegon: "نو جانتين دونونڮانانا" },
      { arab: "الْمُرْسَلِينَ", lugot: "sadaya para rasul", pegon: "سادايا ڤارا رسول" },
      { arab: "وَعَلَى", lugot: "sareng mugi tetep ka", pegon: "ساريڠ موڮي تيتيڤ كا" },
      { arab: "آلِهِ", lugot: "kulawargina Kanjeng Nabi", pegon: "كولاوارڮينا كانجيڠ نبي" },
      { arab: "وَصَحْبِهِ", lugot: "sareng para sahabatna", pegon: "ساريڠ ڤارا صحابتنا" },

      // Baris 4: Ajma'in wat tabi'in
      { arab: "أَجْمَعِينَ", lugot: "sadayana", pegon: "سادايانا" },
      { arab: "وَالتَّابِعِينَ", lugot: "sareng ka jalma nu nuturkeun", pegon: "ساريڠ كا جالما نو نوتوركيون" },
      { arab: "لَهُمْ", lugot: "ka maranehna", pegon: "كا مارانيهنا" },
      { arab: "بِإِحْسَانٍ", lugot: "kalawan padamelan sae", pegon: "كلاوان ڤاداميلان سائي" },
      { arab: "إِلَى", lugot: "dugi ka", pegon: "دوڮي كا" },
      { arab: "يَوْمِ", lugot: "dinten", pegon: "دينتين" },
      { arab: "الدِّينِ", lugot: "walesan", pegon: "واليسان" },

      // Baris 5: Amma ba'du
      { arab: "أَمَّا", lugot: "ari sa'tosna", pegon: "اري سعتوسنا" },
      { arab: "بَعْدُ", lugot: "tah eta (puji sareng sholawat)", pegon: "تاه ايتا (ڤوجي ساريڠ صلوات)" },
      { arab: "فَهَذَا", lugot: "mangka ari ieu kitab", pegon: "ماڠكا اري ايو كتاب" },
      { arab: "مُخْتَصَرٌ", lugot: "eta ringkesan", pegon: "ايتا ريڠكيسان" },
      { arab: "فِي", lugot: "dina nerangkeun", pegon: "دينا نيراڠكيون" },
      { arab: "أُصُولِ", lugot: "pokok-pokok", pegon: "ڤوكوك-ڤوكوك" },
      { arab: "الدِّينِ", lugot: "agama", pegon: "اڮاما" },
      { arab: "وَجُمْلَةٍ", lugot: "sareng sabagian", pegon: "ساريڠ ساباڮيان" },
      { arab: "مِنْ", lugot: "tina", pegon: "تينا" },

      // Baris 6: Furu'ihi
      { arab: "فُرُوعِهِ", lugot: "cabang-cabangna furu'", pegon: "چاباڠ-چاباڠنا فروع" },
      { arab: "عَلَى", lugot: "dina", pegon: "دينا" },
      { arab: "مَذْهَبِ", lugot: "madzhab", pegon: "مذهب" },
      { arab: "الْإِمَامِ", lugot: "Imam", pegon: "امام" },
      { arab: "الشَّافِعِيِّ", lugot: "Syafi'i", pegon: "شافعي" },
      { arab: "رَضِيَ", lugot: "mugi mikaridlho", pegon: "موڮي ميكاريدلو" },
      { arab: "اللهُ", lugot: "Gusti Allah", pegon: "ڮوستي الله" },
      { arab: "عَنْهُ", lugot: "ti Imam Syafi'i", pegon: "تي امام شافعي" },

      // Baris 7: Samaituhu
      { arab: "سَمَّيْتُهُ", lugot: "ngaranan kaula ka ieu kitab", pegon: "ڠارانان كاولا كا ايو كتاب" },
      { arab: "الرِّيَاضَ", lugot: "Riyad", pegon: "رياض" },
      { arab: "الْبَدِيعَةَ", lugot: "al-Badi'ah", pegon: "البديعة" },
      { arab: "فِي", lugot: "dina", pegon: "دينا" },
      { arab: "أُصُولِ", lugot: "pokok-pokok", pegon: "ڤوكوك-ڤوكوك" },
      { arab: "الدِّينِ", lugot: "agama", pegon: "اڮاما" },
      { arab: "وَبَعْضِ", lugot: "sareng sabagian", pegon: "ساريڠ ساباڮيان" },
      { arab: "فُرُوعِ", lugot: "cabang", pegon: "چاباڠ" },

      // Baris 8: Asy-Syari'ah
      { arab: "الشَّرِيعَةِ", lugot: "syari'at", pegon: "شريعة" },
      { arab: "رَاجِيًا", lugot: "bari nuhunkeun kaula", pegon: "باري نوهونكيون كاولا" },
      { arab: "مِنَ", lugot: "tina", pegon: "تينا" },
      { arab: "اللهِ", lugot: "Gusti Allah", pegon: "ڮوستي الله" },
      { arab: "أَنْ", lugot: "kana yen", pegon: "كانا يين" },
      { arab: "يَنْفَعَ", lugot: "maparin manfaat", pegon: "ماڤارين منفعة" },
      { arab: "بِهِ", lugot: "kalawan ieu kitab", pegon: "كلاوان ايو كتاب" },
      { arab: "طَلَبَةَ", lugot: "ka para santri/nu nyiar", pegon: "كا ڤارا سنتري / نو ۑيار" },
      { arab: "الْعِلْمِ", lugot: "elmu", pegon: "علم" },

      // Baris 9: La siyyamal mubtadi'in
      { arab: "لَا", lugot: "", pegon: "" },
      { arab: "سِيَّمَا", lugot: "komo deui", pegon: "كومو ديوي" },
      { arab: "الْمُبْتَدِئِينَ", lugot: "ka para santri anu anyar diajar", pegon: "كا ڤارا سنتري انو اڽار دياجار" },
      { arab: "وَأَنْ", lugot: "sareng kana yen", pegon: "ساريڠ كانا يين" },
      { arab: "يُوَجِّهَ", lugot: "", pegon: "" },
      { arab: "إِلَيْهِ", lugot: "ka Gusti Allah", pegon: "كا ڮوستي الله" },
      { arab: "رَغْبَةَ", lugot: "kana panyuhun", pegon: "كانا ڤاڽوهون" },
      { arab: "الرَّاغِبِينَ", lugot: "jalma-jalma nu raresep", pegon: "جالما-جالما نو راريسيڤ" }
    ]
  }
];
