function booking(paket) {
  const nama = prompt("Masukkan Nama:");
  const jumlah = prompt("Jumlah orang/jip:");
  const tanggal = prompt("Tanggal (YYYY-MM-DD):");
  const jam = prompt("Jam:");

  let pesan = `Halo, saya ingin booking:\nPaket: ${paket}\nNama: ${nama}\nJumlah: ${jumlah}\nTanggal: ${tanggal}\nJam: ${jam}`;
  
  const waUrl = `https://wa.me/6281327525324?text=${encodeURIComponent(pesan)}`;
  window.open(waUrl, '_blank');
}
