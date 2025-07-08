 const texto = "Você é capaz! seus erros só fazem você persistir ainda mais e chegar ao resultado  esperado.";
  document.getElementById("botao").addEventListener("click", () => {
    document.getElementById("mensagem").innerText = texto;
  });