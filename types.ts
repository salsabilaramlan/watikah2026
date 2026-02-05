export enum Category {
  Pengawas = "Pengawas Sekolah",
  PSS = "Pengawas PSS",
  SPBT = "Pengawas SPBT",
  Surau = "Pengawas Surau",
  PPKI = "Pengawas PPKI",
  PRS = "Pembimbing Rakan Sebaya",
  Kelas = "Ketua & Penolong Ketua Kelas"
}

export interface Student {
  id: number;
  name: string;
  class_name: string;
  role: string;
  category: Category;
}

export interface Teacher {
  role: string;
  name: string;
  subRole?: string;
}

export interface CommitteeGroup {
  name: string;
  members: Teacher[];
}