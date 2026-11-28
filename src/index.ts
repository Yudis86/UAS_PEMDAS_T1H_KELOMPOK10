import * as readlineSync from "readline-sync";

// 1. Interface Data Kost
interface Kost {
    id: string;
    nama: string;
    lokasi: string;
    harga: number;
    tipeKamar: string;
    fasilitas: string[];
    tersedia: boolean;
}

// 2. Interface Data Pemesanan
interface Pemesanan {
    id: string;
    namaPemesan: string;
    noHP: string;
    namaKost: string;
    lokasiKost: string;
    tipeKamar: string;
    hargaPerBulan: number;
    durasiSewa: number;
    tanggalMulaiSewa: string;
    totalHarga: number;
    status: boolean;
}

// 3. Data awal kost
let kostList: Kost[] = [
    {
        id: "K001",
        nama: "Yuru Kost A",
        lokasi: "Malang",
        harga: 800000,
        tipeKamar: "Single",
        fasilitas: ["Kasur", "Lemari", "WiFi"],
        tersedia: true
    },
    {
        id: "K002",
        nama: "Yuru Kost B",
        lokasi: "Malang",
        harga: 1000000,
        tipeKamar: "Double",
        fasilitas: ["Kasur", "AC", "WiFi"],
        tersedia: true
    },
    {
        id: "K003",
        nama: "Yuru Kost C",
        lokasi: "Malang",
        harga: 700000,
        tipeKamar: "Single",
        fasilitas: ["Kasur", "Meja"],
        tersedia: true
    }
];

// 4. Array data pemesanan
let pemesananList: Pemesanan[] = [];

// 5. Variabel kondisi program
let jalan: boolean = true;

// 6. Fungsi menampilkan menu utama
function tampilkanMenuUtama(): void {
    console.log("\n=== YURU KOS ===");
    console.log("--- MENU UTAMA ---");
    console.log("1. Pemilik Kost");
    console.log("2. Penyewa Kost");
    console.log("3. Keluar");
}

// 7. Fungsi menu pemilik kost
function menuPemilik(): void {
    console.log("\n=== MENU PEMILIK KOST ===");
    console.log("Pengelolaan data kost dan pemesanan.");
}

// 8. Fungsi menu penyewa kost
function menuPenyewa(): void {
    console.log("\n=== MENU PENYEWA KOST ===");
    console.log("Pencarian informasi dan pemesanan kamar.");
}

// 9. Fungsi utama program
function main(): void {

    while (jalan) {

        tampilkanMenuUtama();

        let pilihan: string = readlineSync.question(
            "Masukkan pilihan: "
        );

        switch (pilihan) {

            case "1":
                menuPemilik();
                break;

            case "2":
                menuPenyewa();
                break;

            case "3":
                jalan = false;
                console.log("\nTerima kasih telah menggunakan Yuru Kos!");
                break;

            default:
                console.log("\nPilihan tidak valid!");
                break;
        }
    }
}

// 10. Menjalankan program
main();