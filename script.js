function openBooking(paket) {
    let nama = prompt("Masukkan nama:");
    let jumlah = prompt("Jumlah orang / jip:");
    let tanggal = prompt("Tanggal booking:");
    let jam = prompt("Jam berangkat:");
    let permintaan = prompt("Permintaan khusus:");
    let metode = prompt("Metode pembayaran (Cash/TF/Dana):");

    let pesan = `Halo, saya ingin booking *${paket}*\nNama: ${nama}\nJumlah: ${jumlah}\nTanggal: ${tanggal}\nJam: ${jam}\nPermintaan: ${permintaan}\nPembayaran: ${metode}\nNomor Dana: 081327525324 a/n Priyono`;

    let url = `https://wa.me/6281327525324?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}

function sendBookingGlamping() {
    const nama = document.getElementById("nama").value;
    const jumlah_orang = document.getElementById("jumlah_orang").value;
    const jumlah_tenda = document.getElementById("jumlah_tenda").value;
    const tanggal = document.getElementById("tanggal").value;
    const jam = document.getElementById("jam").value;
    const permintaan = document.getElementById("permintaan").value;
    const metode = document.getElementById("metode").value;

    const pesan = `Halo, saya ingin booking Glamping:%0A
Nama: ${nama}%0A
Jumlah Orang: ${jumlah_orang}%0A
Jumlah Tenda: ${jumlah_tenda}%0A
Tanggal: ${tanggal}%0A
Jam: ${jam}%0A
Permintaan Khusus: ${permintaan}%0A
Metode Pembayaran: ${metode}%0A
Dana/WA: 081327525324 (a.n Priyono)`;

    window.open(`https://wa.me/6281327525324?text=${pesan}`, '_blank');
}
