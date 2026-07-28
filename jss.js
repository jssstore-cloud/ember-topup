const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const data = {
  access_key: "2d599b1a-f2b5-4ee4-b60b-29320a1b75f4",
  nama: document.getElementById("nama").value,
  email: document.getElementById("email").value,
  user_id: document.getElementById("uid").value,
  zone_id: document.getElementById("zid").value,
  paket: selectedPkg?.dia,
  harga: selectedPkg?.price,
  metode: selectedPay,
  waktu: new Date().toLocaleString("id-ID")
};

const res = await fetch(WEB3FORMS_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(data)
});

const result = await res.json();

if (result.success) {
  alert("Pesanan berhasil dikirim.");
} else {
  alert("Gagal mengirim data.");
}
