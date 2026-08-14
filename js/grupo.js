/* Fotografia de grupo do jantar.

   O iPhone exporta ora .jpeg, ora .JPG, ora .PNG, e o nome engana-se com
   facilidade ao renomear na app Ficheiros. Para nao depender disso, tentamos
   as seis extensoes por ordem e ficamos na primeira que existir.

   Cada tentativa leva um parametro com a hora atual, para o telemovel nunca
   mostrar uma versao guardada em cache depois de a foto ser substituida.

   Se nenhuma das seis existir, esconde-se a seccao inteira em vez de deixar
   uma imagem partida na pagina.

   O src fica escrito no HTML com .jpg, por isso a foto aparece na mesma sem
   JavaScript, desde que o ficheiro tenha essa extensao. */

(function () {
  var imagem = document.getElementById("foto-grupo");
  var seccao = document.getElementById("jantar");
  if (!imagem || !seccao) {
    return;
  }

  var EXTENSOES = ["jpg", "jpeg", "JPG", "JPEG", "png", "PNG"];

  // Caminho sem query e sem extensao: "../img/grupo-2026"
  var base = imagem.getAttribute("src").split("?")[0].replace(/\.[^./]+$/, "");
  var hora = Date.now();
  var proxima = 0;

  // Esconder a imagem enquanto procuramos evita o icone de imagem partida a
  // piscar entre tentativas. O espaco fica reservado pelos atributos width e
  // height, por isso a pagina nao salta.
  imagem.style.visibility = "hidden";

  function tentar() {
    if (proxima >= EXTENSOES.length) {
      seccao.hidden = true;
      return;
    }
    imagem.setAttribute(
      "src",
      base + "." + EXTENSOES[proxima++] + "?t=" + hora
    );
  }

  imagem.addEventListener("error", tentar);
  imagem.addEventListener("load", function () {
    imagem.style.visibility = "visible";
  });

  tentar();
})();
