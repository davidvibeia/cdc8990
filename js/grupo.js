/* Fotografia de grupo do jantar.
   1. Acrescenta ao src um parametro com a hora atual, para o telemovel nunca
      mostrar uma versao guardada em cache depois de a foto ser substituida.
   2. Se a imagem falhar ou nao existir, esconde a seccao inteira em vez de
      deixar uma imagem partida na pagina.
   O src fica escrito no HTML, por isso a foto aparece na mesma sem JavaScript. */

(function () {
  var imagem = document.getElementById("foto-grupo");
  var seccao = document.getElementById("reencontro");
  if (!imagem || !seccao) {
    return;
  }

  // Ligar o ouvinte antes de trocar o src, para apanhar tambem a falha do
  // pedido com o parametro anti-cache.
  imagem.addEventListener("error", function () {
    seccao.hidden = true;
  });

  var caminho = imagem.getAttribute("src").split("?")[0];
  imagem.setAttribute("src", caminho + "?t=" + Date.now());
})();
