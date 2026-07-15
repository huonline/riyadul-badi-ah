export function latinToPegon(text) {
  if (!text) return '';
  
  // Pecah kalimat menjadi kata-per-kata agar bisa dideteksi awal/tengahnya
  const kataArray = text.toLowerCase().split(' ');
  
  const hasilTransliterasi = kataArray.map(kata => {
    if (!kata) return '';
    
    // Kunci kata khusus
    if (kata === 'allah') return 'الله';

    let kataProses = kata;

    // 1. Ubah vokal khusus di AWAL KATA dahulu (Bunyi Mandiri)
    if (kataProses.startsWith('ieu')) {
      kataProses = 'إيُّو' + kataProses.slice(3);
    } else if (kataProses.startsWith('i') || kataProses.startsWith('e')) {
      // Sekarang 'eta' atau 'itu' otomatis diawali hamzah dan ya (إي)
      kataProses = 'إy' + kataProses.slice(1); 
    } else if (kataProses.startsWith('u') || kataProses.startsWith('o')) {
      kataProses = 'أو' + kataProses.slice(1);
    } else if (kataProses.startsWith('a')) {
      kataProses = 'أ' + kataProses.slice(1);
    }

    // 2. Ganti kombinasi 2 huruf (Konsonan Khusus)
    const konsonanKhusus = {
      'ng': 'ڠ', // Gain titik tiga
      'ny': 'ۑ', // Ya titik tiga
      'ch': 'چ', // Ca
      'kh': 'خ',
      'sh': 'ش',
      'eu': 'ي'  // Bunyi eu memakai Ya sesudah hurufnya
    };

    for (const [latin, pegon] of Object.entries(konsonanKhusus)) {
      kataProses = kataProses.replaceAll(latin, pegon);
    }

    // 3. Ganti huruf satu per satu (Vokal Tengah otomatis jadi Huruf Saksi menempel)
    const kamusHuruf = {
      // Vokal tengah/akhir nempel ke konsonan sebelumnya
      'a': 'ا',
      'i': 'ي',
      'u': 'و',
      'e': 'ي', // Bunyi e di tengah memakai Ya sesudah hurufnya (seperti jenengan)
      'o': 'و',
      
      // Konsonan standar
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
      'p': 'ڤ', // Fa titik tiga
      'q': 'ق',
      'r': 'ر',
      's': 'س',
      't': 'ت',
      'v': 'ڤ',
      'w': 'و',
      'y': 'ي',
      'z': 'ز',
      'x': ''
    };

    return kataProses.split('').map(char => kamusHuruf[char] || char).join('');
  });

  // Gabungkan kembali kata-kata yang sudah jadi Pegon dengan spasi
  return hasilTransliterasi.join(' ');
}

// Fungsi pembantu menghilangkan harakat matan
export function removeHarakat(text) {
  if (!text) return '';
  return text.replace(/[\u064B-\u0652]/g, '');
}
