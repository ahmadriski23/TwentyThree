const textElement = ["Saya AHMAD RISKI", "Bisa Dipanggil IKI"];
let count = 0;
let textIndex = 0;
let currentText = "";
let words = "";

(function ngetik() {
  if (count == textElement.length) {
    count = 0;
  }

  currentText = textElement[count];

  words = currentText.slice(0, ++textIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentText.length) {
    count++;
    textIndex = 0;
  }

  setTimeout(ngetik, 500);
})();
