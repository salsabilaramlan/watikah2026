import { Category, Student, CommitteeGroup } from './types';

export const eventInfo = {
  title: "Majlis Watikah Pelantikan Pemimpin Muda",
  school: "SK Satu Sultan Alam Shah",
  year: "2026",
  date: "9 Februari 2026", // Telah dikemas kini ke 2026
  day: "Isnin",
  venue: "Dewan Harmoni, SK Satu Sultan Alam Shah",
  theme: "Kepimpinan Berwibawa, Sahsiah Terpuji"
};

export const introText = {
  pendahuluan: `Badan Pengawas Sekolah adalah satu unit kepimpinan yang terdiri daripada murid-murid sekolah. Badan ini bertujuan membantu Lembaga Pengawas Sekolah menjalankan pelbagai aktiviti untuk mencapai matlamat dan objektif Lembaga Pengawas Sekolah.
  
  Manakala Pengawas Pusat Sumber Sekolah (PSS) yang dilantik akan membantu guru PSS melicinkan lagi operasi PSS. Pengawas Surau juga merupakan satu lagi entiti penting sesebuah sekolah dalam memastikan pengurusan surau berjalan lancar. Pembimbing Rakan Sebaya (PRS) merupakan unit yang ditubuhkan bertujuan membantu pihak sekolah memastikan kemenjadian murid sentiasa di tahap yang membanggakan.`,
  matlamat: [
    "Memberi pengiktirafan kepada murid-murid yang terpilih.",
    "Memperkenalkan barisan pemimpin muda kepada warga sekolah.",
    "Memberi contoh teladan kepada murid-murid mengenai pelaksanaan majlis rasmi."
  ],
  objektif: [
    "Memberi pengiktirafan dan semangat kepada pemimpin muda supaya melakukan tugas dengan dedikasi.",
    "Meningkatkan tahap motivasi murid yang terpilih.",
    "Menggalakkan murid-murid lain agar dapat mencontohi rakan-rakan yang terpilih."
  ]
};

export const pledgeText = `BAHAWASANYA KAMI,
PENGAWAS-PENGAWAS,
DAN PEMIMPIN-PEMIMPIN KECIL
SEKOLAH KEBANGSAAN SATU SULTAN ALAM SHAH,
BERIKRAR,
AKAN MENJALANKAN TUGAS,
DENGAN PENUH TANGGUNGJAWAB,
SERTA AKAN BERSIKAP AMANAH DAN JUJUR,
KEPADA GURU-GURU DAN PIHAK SEKOLAH,
DEMI MENJAMIN KEBAIKAN,
DAN MENJAGA NAMA BAIK SEKOLAH INI.`;

export const mainCommittee: CommitteeGroup = {
  name: "Jawatankuasa Induk",
  members: [
    { role: "Pengerusi", name: "En. Mohd Rahaizat bin Rahaman", subRole: "Guru Besar" },
    { role: "Naib Pengerusi 1", name: "En. Yuslaini Saparimin@Yukirin", subRole: "PK HEM" },
    { role: "Naib Pengerusi 2", name: "Pn. Rosnani binti Mohamed Arus", subRole: "PK Pentadbiran" },
    { role: "Naib Pengerusi 3", name: "En. Ahmad Fuad bin Abu Bakar", subRole: "PK Ko-Kurikulum" },
    { role: "Naib Pengerusi 4", name: "Dr. Norzaliana binti Mat Nuri", subRole: "PK PPKI" },
    { role: "Setiausaha", name: "Pn Nurul Lyiana binti Jamaluddin", subRole: "Ketua Unit Pengawas" },
  ]
};

export const workingCommittee: CommitteeGroup[] = [
  {
    name: "Pengurusan Majlis",
    members: [
      { role: "Juruacara", name: "En. Iqbal Afandi Bin Mahmud Aliudin" },
      { role: "Bacaan Doa", name: "En. Adam Azhari Bin Muhamad Subri" },
      { role: "Siaraya", name: "En. Mohd Khomeini Bin Che Omar" },
    ]
  },
  {
    name: "Persiapan & Logistik",
    members: [
      { role: "Persiapan Dewan", name: "Semua Guru Lelaki" },
      { role: "Banner", name: "Cik Siti Hajar Binti Abdullah" },
      { role: "Disiplin / Keselamatan", name: "Pn Nurul Lyiana Binti Jamaluddin" },
    ]
  },
  {
    name: "Pengurusan Murid & Dokumentasi",
    members: [
      { role: "Sijil/Watikah", name: "Cik Siti Zulaikha Binti Adnan" },
      { role: "Pengurus Murid", name: "En. Mohd. Yusof Bin Mohd. Nasir" },
      { role: "Jurugambar", name: "Cik Ainur Ruzainah Binti Abdullah" },
      { role: "Buku Program", name: "Cik Sal Sabila Binti Ramlan" },
      { role: "Dokumentasi", name: "Cik Nur Shahira Aina Binti Zulkifli" },
    ]
  }
];

export const itinerary = [
  { time: "7.30 PAGI", event: "Semua murid dan guru berkumpul" },
  { time: "7.40 PAGI", event: "Perhimpunan rasmi (Nyanyian & Doa)" },
  { time: "7.50 PAGI", event: "Ucapan Guru Besar" },
  { time: "8.00 PAGI", event: "Majlis Watikah Pelantikan bermula" },
  { time: "", event: "• Pengawas dipanggil ke hadapan" },
  { time: "", event: "• Penyerahan watikah pelantikan" },
  { time: "8.15 PAGI", event: "Bacaan Ikrar Pengawas" },
  { time: "8.20 PAGI", event: "Sesi fotografi" },
  { time: "8.30 PAGI", event: "Majlis tamat & Bersurai" },
];

export const students: Student[] = [
  // PENGAWAS SEKOLAH
  { id: 1, name: "Dhiya Eryna Insyirah Binti Muhammad Asri", class_name: "3 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 2, name: "Muhamad Faiz Bin Roslan", class_name: "3 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 3, name: "Nur Aldariya Binti Hazli", class_name: "3 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 4, name: "Umar Az Ziyyad Bin Afiq Zhafran", class_name: "3 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 5, name: "Muhammad Rayyan Rizqi Bin Mohamad Razwan", class_name: "3 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 6, name: "Syafi Ayra Binti Shahril Nizam", class_name: "3 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 7, name: "Nur Arissa Zulaikha Binti Muhammad Abdul Rahman", class_name: "3 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 8, name: "Adreen Airis Az-Zikry Bin Iqbal Afandi", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 9, name: "Muhammad Fadlullah Bin Mohd Faizal", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 10, name: "Medina Sofea Binti Mohd Shukeri", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 11, name: "Izyan Hanani Binti Shahrul Nizam", class_name: "4 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 12, name: "Saiful Iskandar Bin Saifulzaman", class_name: "4 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 13, name: "Alya Afra Binti Mohd Afif", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 14, name: "Muhammad Haziq Bin Mohd Hanafi", class_name: "4 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 15, name: "Wan Izara Aishah Binti Wan Azhar", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 16, name: "Nur Aaliya Amani Binti Noorizam", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 17, name: "Muhammad Aufa Mikail Bin Badrul Hafiz", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 18, name: "Fatma Umaira Binti Khairul Fitri", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 19, name: "Arissa Nur Zulaikha Binti Mohd Idrul Nafiz", class_name: "4 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 20, name: "Qyra Sairysh Binti Azizan", class_name: "5 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 21, name: "Damia Nur Athirah Binti Mohd Azahar", class_name: "5 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 22, name: "Siti Hanis Zulaikha Binti Muhammad Hafiz", class_name: "5 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 23, name: "Raees Isqandar Raflise Bin Kamarul Daniel Raflise", class_name: "5 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 24, name: "Amra Humaira Binti Mohd Azmi", class_name: "5 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 25, name: "Iman Nurnasihah Binti Mohd Nasir", class_name: "5 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 26, name: "Nur Hanania Zulaikha Binti Muhamad Hafiz", class_name: "5 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 27, name: "Aisyah Tsara Binti Mohd Tazri", class_name: "5 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 28, name: "Muhammad Aidan Darwish Bin Norsaifulzaydi", class_name: "5 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 29, name: "Dhiya Amani Binti Noor Hidayat", class_name: "5 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 30, name: "Aishaa Az-Zahra Binti Afiq Zhafran", class_name: "5 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 31, name: "Muhammad Aqil Iman Bin Mohd Musaffirin", class_name: "5 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 32, name: "Arissa Nur Iman Binti Mohd Idrul Nafiz", class_name: "6 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 33, name: "Muhammad Fahmi Bin Mat Isa", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 34, name: "Nur Taqinah Naseera Binti Mohd Sukri", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 35, name: "Muhammad Izdiyad Bin Mohd Izeli", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 36, name: "Adam Airis Az-Zikry Bin Iqbal Afandi", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 37, name: "Alya Afia Binti Mohd Afif", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 38, name: "Muhammad Ammar Bin Mohd Azmi", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 39, name: "Muhammad Kasyfi Zharfan Bin Mohd Fathul Hazwan", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 40, name: "Nur Ariesya Zulaikha Binti Ahmad Fazreen", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 41, name: "Qalysh Arsh Bin Azizan", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 42, name: "Zahra Milliyya Aysaara Binti Saifulnizam", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 43, name: "Muhammad Haris Zafran Bin Muhamad Hafiz", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 44, name: "Muhammad Fadlullah Fiqri Bin Zukri", class_name: "6 Cerdas", role: "Pengawas Sekolah", category: Category.Pengawas },
  { id: 45, name: "Putri Nur Akma Binti Awal Ludin", class_name: "6 Cerdik", role: "Pengawas Sekolah", category: Category.Pengawas },

  // PENGAWAS PSS
  { id: 50, name: "Muhammad Iskandar Ruzaini Bin Mohamad Amzar Ruzaini", class_name: "3 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 51, name: "Laana Inara Aaisya Bt Mohd Fathul Hazwan", class_name: "3 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 52, name: "Aisyah Zahra Binti Muhammad Zaid", class_name: "3 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 53, name: "Nuh Aariz Bin Nor Ahmadi", class_name: "3 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 54, name: "Yusuf Ilman Bin Mohd Sazuan", class_name: "4 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 55, name: "Wan Nur Saffiya Hannin Binti Wan Muhammad Syaiful Bahar", class_name: "4 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 56, name: "Nurqaisarah Haninah Binti Ahamad Tarmizi", class_name: "4 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 57, name: "Nur Haneem Qaisara Binti Mohd.Norazam", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 58, name: "Muhammad Hud Izzudin Bin Mohd Kamil", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 59, name: "Muhammad Afiq Bin Fairuz Aizam", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 60, name: "Izzat Ian Umar Bin Muhammad Izzat Izzuddin", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 61, name: "Muhammad Iz'aan Bin Mohamad Yamin", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 62, name: "Nuraisyah Nuha Dayyina Binti Mohd Yusri", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 63, name: "Siti Nuraisy Hafiya Binti Azfar", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 64, name: "Umar Huzayyfah Bin Arez", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 65, name: "Alana Sophia Binti Zulfadhli", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 66, name: "Aiman Asyraf Bin Muhamad Hafiz", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 67, name: "Nur Alana Sofia Binti Shahrul", class_name: "5 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 68, name: "Kaisara Binti Shamarul Izwan", class_name: "5 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 69, name: "Muhammad Iman Aqil Bin Ahmad Syihan", class_name: "5 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 70, name: "Muhammad Rayyan Wafi Bin Mohd Nizam", class_name: "5 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 71, name: "Nyssa Nuha Binti Mohd Razali", class_name: "6 Cerdas", role: "Pengawas PSS", category: Category.PSS },
  { id: 72, name: "Nur Qalesya Sofea Binti Muhammad Azrar Haqkimi", class_name: "6 Cerdik", role: "Penolong Ketua Pengawas PSS", category: Category.PSS },
  { id: 73, name: "Siti Syamim Amani Binti Md. Adnan", class_name: "6 Cerdik", role: "Ketua Pengawas PSS", category: Category.PSS },
  { id: 74, name: "Alif Irfan Bin Saiful Bohari", class_name: "6 Cerdik", role: "Pengawas PSS", category: Category.PSS },
  { id: 75, name: "Irsyad Izzuddin Bin Mohd Tarmezee", class_name: "6 Cerdik", role: "Pengawas PSS", category: Category.PSS },

  // PENGAWAS SPBT
  { id: 80, name: "Raja Muhammad Arief Bin Raja Amirudin", class_name: "4 Cerdik", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 81, name: "Nur Falisha Imani Binti Muhammad Faiz", class_name: "4 Cerdik", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 82, name: "Zara Izzati Binti Khairul Azmi", class_name: "4 Cerdas", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 83, name: "Nurin Adriana Syafiyya Binti Muhamad Fadhir", class_name: "5 Cerdas", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 84, name: "Muhammad Luqman Aniq Bin Hazli", class_name: "5 Cerdas", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 85, name: "Ahmad Hairez Haqeem Bin Ahmad Noor Fadliyzam", class_name: "5 Cerdas", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 86, name: "Nik Azri Hariz Bin Nik Hafezi", class_name: "5 Cerdik", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 87, name: "Nurfarisya Binti Mohd Faizal", class_name: "5 Cerdik", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 88, name: "Muhammad Nadhim Amsyar Bin Mohd Hanif", class_name: "5 Cerdik", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 89, name: "Jibriel Iffat Bin Khairul Rijal", class_name: "6 Cerdas", role: "Pengawas SPBT", category: Category.SPBT },
  { id: 90, name: "Nurain Humaira Binti Muhammad Ridzwal", class_name: "6 Cerdas", role: "Pengawas SPBT", category: Category.SPBT },

  // PPKI
  { id: 100, name: "Muhammad Naqiuddin Bin Sapuan", class_name: "5 Adil", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 101, name: "Muhammad Ammar Qhalifah Zarul Yazeed", class_name: "5 Adil", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 102, name: "Nur Alya Maisarah Binti Azra Faizal", class_name: "5 Adil", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 103, name: "Nur Fathiah Amani Binti Muhammad Faiz", class_name: "5 Adil", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 104, name: "Muhammad Zharif Afnan Bin Mohd Hasri", class_name: "5 Adil", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 105, name: "Mas Nur'Affiqa Binti Mohd Fauzi", class_name: "4 Setia", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 106, name: "Muhammad Saif Nuwair Bin Shahrul Nizam", class_name: "4 Setia", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 107, name: "Daeng Hannan Rabbani Bin Mohd Hanas", class_name: "4 Setia", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 108, name: "Ahmad Hariz Rayyan Bin Norhasrin", class_name: "4 Setia", role: "Pengawas PPKI", category: Category.PPKI },
  { id: 109, name: "Nur Iman Khairunnisa Binti Aidy Azhar", class_name: "3 Amanah", role: "Pengawas PPKI", category: Category.PPKI },

  // Pengawas Surau
  { id: 120, name: "Hasya Muqri Bin Muhamad Janatul Naim", class_name: "6 Cerdik", role: "Pengawas Surau", category: Category.Surau },
  { id: 121, name: "Muhammad Izzul Mifzal Bin Mohd Faizal", class_name: "6 Cerdik", role: "Pengawas Surau", category: Category.Surau },
  { id: 122, name: "Aisyah Humaira Binti Azman", class_name: "6 Cerdik", role: "Pengawas Surau", category: Category.Surau },
  { id: 123, name: "Putri Nur Ariana Binti Aliasyak", class_name: "6 Cerdik", role: "Pengawas Surau", category: Category.Surau },
  { id: 124, name: "Puteri Nurbalqis Binti Muhammad Fariz", class_name: "6 Cerdas", role: "Pengawas Surau", category: Category.Surau },
  { id: 125, name: "Muhammad Fathul Islam Bin Muhammad Faizal", class_name: "6 Cerdas", role: "Pengawas Surau", category: Category.Surau },
  { id: 126, name: "Muhammad Umar Danish Bin Mohd Razif", class_name: "6 Cerdas", role: "Pengawas Surau", category: Category.Surau },
  { id: 127, name: "Muhammad Ammar Haziq Bin Muhammad Ismail", class_name: "6 Cerdas", role: "Pengawas Surau", category: Category.Surau },
  { id: 128, name: "Nur Hanania Binti Mohd Jafri", class_name: "5 Cerdik", role: "Pengawas Surau", category: Category.Surau },
  { id: 129, name: "Aariz Fayyadh Bin Muhammad Dzulazmier", class_name: "4 Cerdas", role: "Pengawas Surau", category: Category.Surau },
  { id: 130, name: "Muhammad Fikri Iskandar Bin Mohd Faizal", class_name: "3 Cerdik", role: "Pengawas Surau", category: Category.Surau },
  { id: 131, name: "Musab Umair Bin Nasiruddin", class_name: "3 Cerdik", role: "Pengawas Surau", category: Category.Surau },
  { id: 132, name: "Nur Huwaynaa Binti Mohd Hafizee", class_name: "6 Cerdas", role: "Pengawas Surau", category: Category.Surau },
  { id: 133, name: "Muhammad Harith Bin Husni", class_name: "6 Cerdas", role: "Pengawas Surau", category: Category.Surau },
  { id: 134, name: "Muhammad Asyraaf Irfan Bin Mohd Hanif", class_name: "6 Cerdik", role: "Pengawas Surau", category: Category.Surau },

  // PRS
  { id: 140, name: "Mohd Syahid Adam Bin Mohd Hafiz", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 141, name: "Mohd Darwisy Bin Mohd Mahar Afandi", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 142, name: "Mohd Ammar Bin Aminuddin", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 143, name: "Muhammad Adam Thaqif Bin Norsaifulzaydi", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 144, name: "Muhammad Ammar Bin Muhammad Shukeri", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 145, name: "Adriana Damia Binti Mohd Saridan", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 146, name: "Alisha Safiya Binti Mohd Samsuri", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 147, name: "Aufa Binti Fitri", class_name: "6 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 148, name: "Muhammad Khairudinfame Bin Sulaiman", class_name: "6 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 149, name: "Ahmad Al Khalaf Bin Ahmad Salehudin", class_name: "6 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 150, name: "Luqmanul Hakeem Bin Hasrizal", class_name: "6 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 151, name: "Jerusha Mercy A/P Tinagaran", class_name: "6 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 152, name: "Sofea Irdina Binti Ibrahim", class_name: "6 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 153, name: "Muhammad Ammar Bin Mazlan", class_name: "5 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 154, name: "Muhamad Syazani Khashah Bin Muhamad Syaifullah", class_name: "5 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 155, name: "Muhammad Farrel Arfan Bin Mohd Farid", class_name: "5 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 156, name: "Nur Ammara Rifqah Binti Mohd Izwan Shafri", class_name: "5 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 157, name: "Nur Qaisara Khadijah Binti Mohd Nisham", class_name: "5 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 158, name: "Muhammad Afif Haikal Bin Hafiz", class_name: "5 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 159, name: "Muhammad Syahmi Al Azim Bin Mohd Shahril", class_name: "5 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 160, name: "Muhammad Izz Hariz Bin Mohd Khairul", class_name: "5 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 161, name: "Adam Arif Bin Afdal", class_name: "5 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 162, name: "Nurul Ulya Binti Mohammad Rizal", class_name: "5 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 163, name: "Wan Hanna Ellysha Binti Wan Huzainee", class_name: "5 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 164, name: "Amar Hisyam Bin Hazubaidi", class_name: "4 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 165, name: "Muhammad Danial Ziyad Bin Mohd Izuan Hafis", class_name: "4 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 166, name: "Camelia Arissa Binti Saiful Ridduan", class_name: "4 Cerdas", role: "Pengawas PRS", category: Category.PRS },
  { id: 167, name: "Muhammad Iskandar Putra Bin Mohd Faizal", class_name: "4 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 168, name: "Nur Baatul Syaikhah Binti Mohd Hafiz", class_name: "4 Cerdik", role: "Pengawas PRS", category: Category.PRS },
  { id: 169, name: "Nuraisyah Humaira Binti Mohd Azree", class_name: "4 Cerdik", role: "Pengawas PRS", category: Category.PRS },

  // KETUA & PENOLONG KELAS
  { id: 200, name: "Saiful Imran Bin Saifulzaman", class_name: "1 Cerdas", role: "Ketua Kelas", category: Category.Kelas },
  { id: 201, name: "Nur Khayra Balqis Binti Mohd Rosdi", class_name: "1 Cerdas", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 202, name: "Muhammad Ummar Khaliff Bin Muhammad Ariff", class_name: "1 Cerdik", role: "Ketua Kelas", category: Category.Kelas },
  { id: 203, name: "Nur Dhuha Insyirah Binti Mohd.Hafriz Aqmal", class_name: "1 Cerdik", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 204, name: "Muhammad Adwa Bin Muhammad Azri", class_name: "1 Bahagia", role: "Ketua Kelas", category: Category.Kelas },
  { id: 205, name: "Aaira Inara Binti Othman", class_name: "1 Bahagia", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 210, name: "Awni Sulaiman Bin Muhd Sufillah", class_name: "2 Cerdas", role: "Ketua Kelas", category: Category.Kelas },
  { id: 211, name: "Aura Tihani Binti Muhamad Tazri", class_name: "2 Cerdas", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 212, name: "Putra Muhammad Mikhail Zydan Bin Mohd Azhar", class_name: "2 Cerdik", role: "Ketua Kelas", category: Category.Kelas },
  { id: 213, name: "Nur Izara Aisyah Binti Muhammad Suhaimi", class_name: "2 Cerdik", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 214, name: "Ahmad Lutfi Harraz Bin Syamsul Anuar", class_name: "2 Rajin", role: "Ketua Kelas", category: Category.Kelas },
  { id: 215, name: "Nur Wadhiah Binti Ahmad", class_name: "2 Rajin", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 216, name: "Muhammad Farish Bin Saadam Faizal", class_name: "2 Jujur", role: "Ketua Kelas", category: Category.Kelas },
  { id: 217, name: "Harvey Hernandez Henryrizzi", class_name: "2 Jujur", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 218, name: "Arjuna Zayn Bin Zulfadhli", class_name: "2 Maju", role: "Ketua Kelas", category: Category.Kelas },
  { id: 219, name: "Nur Sufiana Azyan Binti Sufianalinata", class_name: "2 Maju", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 220, name: "Muhammad Hadif Bin Mohamad Husni", class_name: "3 Cerdas", role: "Ketua Kelas", category: Category.Kelas },
  { id: 221, name: "Nor Zafirah Radhiah Binti Mohd Nor Zaidi", class_name: "3 Cerdas", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 222, name: "Muhammad Nur Areez Ilman Bin Saifulnizam", class_name: "3 Cerdik", role: "Ketua Kelas", category: Category.Kelas },
  { id: 223, name: "Nur Aleesya Amni Binti Noorizam", class_name: "3 Cerdik", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 224, name: "Hudzaifah Bin Zulkifli", class_name: "3 Amanah", role: "Ketua Kelas", category: Category.Kelas },
  { id: 225, name: "Aniq Suwaifi Bin Muhd Sufillah", class_name: "3 Amanah", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 230, name: "Aariz Fayyadh Bin Muhammad Dzulazmier", class_name: "4 Cerdas", role: "Ketua Kelas", category: Category.Kelas },
  { id: 231, name: "Zara Izzati Binti Khairul Azmi", class_name: "4 Cerdas", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 232, name: "Muhammad Aqil Izham Bin Mohd Idham", class_name: "4 Cerdik", role: "Ketua Kelas", category: Category.Kelas },
  { id: 233, name: "Rayyan Naufal Bin Muhammad Rauf", class_name: "4 Cerdik", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 234, name: "Adam Muhammad Bin Azril", class_name: "4 Setia", role: "Ketua Kelas", category: Category.Kelas },
  { id: 235, name: "Harris Zafran Bin Azizul Ikram", class_name: "4 Setia", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 240, name: "Putri Nurraisya Ameena Jannah Binti Mohd Azhar", class_name: "5 Cerdas", role: "Ketua Kelas", category: Category.Kelas },
  { id: 241, name: "Qisha Rania Binti Mohd Nordin", class_name: "5 Cerdas", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 242, name: "Aqil Zafran Bin Mohd Saridan", class_name: "5 Cerdik", role: "Ketua Kelas", category: Category.Kelas },
  { id: 243, name: "Nur Damia Aathirah Binti Muhammad Saiful Nizam", class_name: "5 Cerdik", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 244, name: "Muhammad Amsyar Bin Muhammad Asraf", class_name: "5 Adil", role: "Ketua Kelas", category: Category.Kelas },
  { id: 245, name: "Ahmad Ammar Azfar Bin Ahmad Aizat", class_name: "5 Adil", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 250, name: "Nur Huwaynaa Binti Mohamed Hafizee", class_name: "6 Cerdas", role: "Ketua Kelas", category: Category.Kelas },
  { id: 251, name: "Muhammad Harith Bin Mohamad Husni", class_name: "6 Cerdas", role: "Penolong Ketua Kelas", category: Category.Kelas },
  { id: 252, name: "Nur Damia Arissa Binti Mohd Azlan Shah", class_name: "6 Cerdik", role: "Ketua Kelas", category: Category.Kelas },
  { id: 253, name: "Muhammad Asyraaf Irfan Bin Mohd Hanif", class_name: "6 Cerdik", role: "Penolong Ketua Kelas", category: Category.Kelas },
];
