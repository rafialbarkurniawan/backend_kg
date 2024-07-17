// nama file: test/haduh-3.ts
class Hewan {
    nama: string;

    constructor(nama: string) {
        this.nama = nama;
    }
    
    gerak(jarak: number = 0) {
        console.log(`${this.nama} bergerak sejauh ${jarak} meter.`);
    }
}

class Sapi extends Hewan {
    mooo() {
        console.log(`${this.nama}: Mooooo!`);
    }
}

class Buaya extends Hewan {
    suara() {
        console.log(`${this.nama}: Kalo aku chat ada yang marah gak nih?`);
    }
}

const sapi = new Sapi("Sapi");
sapi.gerak(10);
sapi.mooo();

const rizki = new Buaya("rizki");
rizki.gerak(5);
rizki.suara();