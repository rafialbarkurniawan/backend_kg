// nama file: test/haduh-4.ts
class Manusia { 
    private nama_lengkap: string; 
    
    constructor(nama_lengkap: string) {  
        this.nama_lengkap = nama_lengkap;
     } 
    
    public getNamaLengkap(): string { 
        return this.nama_lengkap;
    } 
    
    public setNamaLengkap(nama_lengkap: string): void { 
        if (nama_lengkap.length > 0) { 
            this.nama_lengkap 
        } else { 
            nama_lengkap; console.log("Nama Lengkap gak boleh kosong"); 
        }
        }
    }
const human = new Manusia("Budi"); // Output: Budi 
console.log(human.getNamaLengkap());

human.setNamaLengkap("Joko"); // Output: Joko
console.log(human.getNamaLengkap());  

human.setNamaLengkap(""); // Output: Nama Lengkap gak boleh kosong 
console.log(human.getNamaLengkap()); // Output: Joko