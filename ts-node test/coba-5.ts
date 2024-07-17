function sapaAkuBang({
  namaLengkap,
  judulBootcamp,
  tahun,
}: {
  namaLengkap: string,
  judulBootcamp: string,
  tahun: number,
}): string {
  return `Halo kak ${namaLengkap}. Selamat datang di bootcamp ${judulBootcamp} di tahun ${tahun}`;
}

const daftarSapaan: {
  namaLengkap: string;
  judulBootcamp: string;
  tahun: number;
}[] = [
  {
    namaLengkap: "Ayra Azzahra",
    judulBootcamp: "Backend Developer dengan ExpressJS dan Typescript",
    tahun: 2024,
  },
  {
    namaLengkap: "Budi Raharjo",
    judulBootcamp: "Frontend Developer dengan NextJS",
    tahun: 2000,
  },
  {
    namaLengkap: "Citra Kusuma",
    judulBootcamp:
      "Fullstack Developer dengan ExpressJS, Typescript, dan NextJS",
    tahun: 2012,
  },
];

daftarSapaan.map((sapaan) => {
  console.log(sapaAkuBang(sapaan));
});
