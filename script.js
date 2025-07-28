// Escribir aqui el código Javascript
<script>
  const btnDescargar = document.querySelector('a[download]');
  btnDescargar.addEventListener('click', () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.7 }
    });
  });
</script>
