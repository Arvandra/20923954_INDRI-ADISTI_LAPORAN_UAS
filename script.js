/*
  script.js
  - Fungsi buyProduct: men-generate alert saat klik beli
  - Fungsi submitContact: menampilkan alert & mencegah reload
*/

/**
 * buyProduct
 * @param {string} productName - nama produk
 * @param {string|null} colorId - id elemen select warna (atau null jika tidak ada)
 * @param {string|null} sizeId - id elemen select ukuran (atau null jika tidak ada)
 * @returns false untuk mencegah reload form
 */
function buyProduct(productName, colorId, sizeId) {
  let pilihan = [];

  if (colorId) {
    const elColor = document.getElementById(colorId);
    if (!elColor || !elColor.value) {
      alert("Silakan pilih warna terlebih dahulu.");
      return false;
    }
    pilihan.push("Warna: " + elColor.value);
  }

  if (sizeId) {
    const elSize = document.getElementById(sizeId);
    if (!elSize || !elSize.value) {
      alert("Silakan pilih ukuran terlebih dahulu.");
      return false;
    }
    pilihan.push("Ukuran: " + elSize.value);
  }

  const pesan = "Anda membeli " + productName + (pilihan.length ? " (" + pilihan.join(" | ") + ")" : "");
  alert(pesan);
  return false; // mencegah reload form
}

/**
 * submitContact
 * men-simulasikan pengiriman pesan (tidak mengirim ke server)
 */
function submitContact(evt) {
  if (evt && evt.preventDefault) evt.preventDefault();

  const nama = document.getElementById("namaKontak").value.trim();
  const email = document.getElementById("emailKontak").value.trim();
  const pesan = document.getElementById("pesanKontak").value.trim();

  if (!nama || !email || !pesan) {
    alert("Lengkapi semua kolom sebelum mengirim.");
    return false;
  }

  alert("Terima kasih, " + nama + ". Pesan Anda telah diterima.\nKami akan menghubungi melalui email: " + email);
  // reset form (opsional)
  document.getElementById("contactForm").reset();
  return false;
}




