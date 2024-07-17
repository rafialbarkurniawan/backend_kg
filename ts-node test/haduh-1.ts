// nama file: test/haduh-1.ts

interface Orang {
    nama_lengkap: string;
    umur: number;
    sapaAkuBang(): void;
  }
  
  const orang: Orang = {
    nama_lengkap: "Hendra Kurniawan",
    umur: 30,
    sapaAkuBang: () => console.log(`Halo, nama saya ${orang.nama_lengkap}`)
  };
  
  orang.sapaAkuBang();
  