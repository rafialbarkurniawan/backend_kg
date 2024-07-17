// nama file: test/haduh-2.ts

type id = string | number;

let user_id: id;
user_id = 123;  // Valdi
user_id = "ABC";  // Valdi
user_id = true;  // Error / Gak Valdi

type saldoBank = {
  bca: number;
  bri?: number;
  mandiri?: number;
};

const saldoSiXaviera: saldoBank = {
  bca: 100_000_000,
  bri: 200_000_000,
  mandiri: 300_000_000
};

const saldoSiSandy: saldoBank = {
  bca: 50_000_000
};  // Ini aman karena bri dan mandiri opsional

const saldoSiKevin: saldoBank = {
  mandiri: 20_000_000,
  bri: 30_000_000,
};  // Ini error, karena harus ada bca
