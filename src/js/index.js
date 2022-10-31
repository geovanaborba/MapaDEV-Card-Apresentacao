/* OBJETIVO: quando clicarmos na aba, temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior. */

// - passo 1: pegar os elementos que representam as abas no HTML 

const abas = document.querySelectorAll(".aba");

// - passo 2: idetificar o clique no elemento da aba

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return; //evita que rode código que não precisa
        }

        selecionarAba(aba);

        mostrarInformacoesDaAba(aba);

    });
});

function selecionarAba(aba) {

    // - passo 3: quando usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    // - passo 4: marcar a aba clicada como selecionado
    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {

    // - passo 5: esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");

    informacaoSelecionada.classList.remove("selecionado");

    // - passo 6: mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    //const idDoElementoDeInformacoesDaAba = "informacao-" +aba.id; também é uma opção para usar acima para concatenação

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    informacaoASerMostrada.classList.add("selecionado");

}








