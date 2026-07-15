// Fungsi untuk mengubah huruf Latin menjadi Arab Pegon sesuai kaidah
export function latinToPegon(text) {
  if (!text) return '';
  
  let hasil = text.toLowerCase();

  // 1. Bersihkan huruf-huruf asing yang tidak ada dalam Pegon
  hasil = hasil.replaceAll('x', '');

  // 2. Ganti kombinasi Huruf Vokal Khusus & Diftong
  const vokalKhusus = {
    'ieu': 'إِيُّو', // Kombinasi hamzah jeer, ya, dan wawu pees
    'ae': 'أَٰي',
    'ai': 'أَيْ',
    'au': 'أَوْ',
  };

  for (const [latin, pegon] of Object.entries(vokalKhusus)) {
    hasil = hasil.replaceAll(latin, pegon);
  }

  // 3. Ganti kombinasi 2 huruf Konsonan (Kombinasi Khusus)
  const konsonanKhusus = {
    'ng': 'ڠ', // Gain titik tiga di atas
    'ny': 'ۑ', // Ya titik tiga di bawah
    'ch': 'چ', // Ca (Jim titik tiga)
    'kh': 'خ',
    'sh': 'ش'
  };

  for (const [latin, pegon] of Object.entries(konsonanKhusus)) {
    hasil = hasil.replaceAll(latin, pegon);
  }

  // 4. Ganti Vokal Standar (Menggunakan Hamzah + Harakat/Huruf Saksi)
  const vokalStandar = {
    'a': 'أَ', // Hamzah Patah (Alif otomatis mengikuti)
    'i': 'إِ', // Hamzah Jeer (Di bawah Alif)
    'u': 'أُ', // Hamzah Pees
    'e': 'إِ', // Sering disamakan dengan jeer atau menggunakan tanda alif+ya
    'o': 'أوْ' // Hamzah + Wawu
  };

  for (const [latin, pegon] of Object.entries(vokalStandar)) {
    hasil = hasil.replaceAll(latin, pegon);
  }

  // 5. Ganti Konsonan Tunggal Standar
  const konsonanTunggal = {
    'b': 'ب',
    'c': 'چ', 
    'd': 'د',
    'f': 'ف',
    'g': 'ݢ', // Kaf titik untuk G
    'h': 'ه',
    'j': 'ج',
    'k': 'ك',
    'l': 'ل',
    'm': 'م',
    'n': 'ن',
    'p': 'ڤ', // Fa titik tiga untuk P
    'q': 'ق',
    'r': 'ر',
    's': 'س',
    't': 'ت',
    'v': 'ڤ',
    'w': 'و',
    'y': 'ي',
    'z': 'ز',
    ' ': ' ' 
  };

  // Jalankan penggantian sisa huruf satu per satu
  return hasil.split('').map(char => konsonanTunggal[char] || char).join('');
}

// Fungsi pembantu untuk menghilangkan harakat pada matan Arab
export function removeHarakat(text) {
  if (!text) return '';
  return text.replace(/[\u064B-\u0652]/g, '');
}
