//======================================
// Detecta se o foco veio da tecla TAB
//======================================

let tabPressionado = false;

document.addEventListener("keydown", function(event){

    if(event.key === "Tab"){

        tabPressionado = true;

    }

});

//======================================
// Fala o elemento focado
//======================================

document.addEventListener("focusin", function(event){

    if(!tabPressionado) return;

    tabPressionado = false;

    speechSynthesis.cancel();

    let elemento = event.target;
    const tabIndexAtual = document.activeElement.tabIndex;

    let texto = "";

    switch(elemento.tagName){

        case "H1":
        case "H2":
        case "H3":

            texto = "Título. " + elemento.innerText;
            break;

        case "P":

            texto = "Texto. " + elemento.innerText;
            break;

        case "FOOTER":

            texto = "Rodapé da página. " + elemento.innerText;
            break;

        case "FIGCAPTION":

            texto = "Texto da imagem. " + elemento.innerText;
            break;

        case "IMG":

            texto = "Imagem";
            break;

        case "BUTTON":

            texto = "Botão. " + elemento.innerText;
            break;

        case "DIV":

            if (tabIndexAtual == "23"){
               texto = "Leitor de Libras. ";
               break;
            }

        case "A":

            texto = "Link. " + elemento.innerText;
            break;

        case "INPUT":

            let label = document.querySelector(
                "label[for='" + elemento.id + "']"
            );

            if (label) {
                texto = "Campo " + label.innerText;
            } else {
                texto = "Campo de texto";
            }

            break;

    }

    if(texto !== ""){

        let fala = new SpeechSynthesisUtterance(texto);

        fala.lang = "pt-BR";
        fala.rate = 1;
        fala.pitch = 1;

        speechSynthesis.speak(fala);

    }

});

/* ==========================================
   AUMENTAR O TAMANHO DA FONTE
   ========================================== */

// Define o tamanho inicial da fonte em 18 pixels.
let tamanho = 18;

// Obtém o botão "A+" e executa a função quando ele for clicado.
document.getElementById("fonteMais").onclick = function () {

    // Aumenta o tamanho da fonte em 2 pixels.
    tamanho += 2;

    // Aplica o novo tamanho da fonte ao corpo da página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   DIMINUIR O TAMANHO DA FONTE
   ========================================== */

// Obtém o botão "A-" e executa a função quando ele for clicado.
document.getElementById("fonteMenos").onclick = function () {

    // Diminui o tamanho da fonte em 2 pixels.
    tamanho -= 2;

    // Atualiza o tamanho da fonte em toda a página.
    document.body.style.fontSize = tamanho + "px";

};


/* ==========================================
   ATIVAR/DESATIVAR O ALTO CONTRASTE
   ========================================== */

// Obtém o botão "Alto Contraste".
document.getElementById("contraste").onclick = function () {

    // Adiciona ou remove a classe "altoContraste"
    // sempre que o botão for pressionado.
    document.body.classList.toggle("altoContraste");
};


/* ==========================================
   ATIVAR/DESATIVAR O MODO ESCURO
   ========================================== */

// Obtém o botão "Modo Escuro".
document.getElementById("escuro").onclick = function () {

    // Adiciona ou remove a classe "dark",
    // alterando as cores da página.
    document.body.classList.toggle("dark");
};

/* ==========================================
   LEITURA COMPLETA DA PÁGINA
   ========================================== */

// Função para ler toda a página
function lerPagina() {

    // Interrompe qualquer leitura anterior
    speechSynthesis.cancel();

    // Seleciona os elementos que normalmente contêm texto
    const elementos = document.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, footer, button, div"
    );

    let textoCompleto = "";
    let tipo = "";

    // Junta todos os textos em uma única string
    elementos.forEach(function(elemento){

        let texto = elemento.innerText.trim();

        switch(elemento.tagName){

            case "H1":
                tipo = "Título principal ";
                break;

            case "H2":
                tipo = "Título ";
                break;

            case "P":
                tipo = "Parágrafo ";
                break;

            case "BUTTON":
                tipo = "Botão ";
                break;

            case "FOOTER":

                tipo = "Rodapé da página ";
                break;

            case "DIV":

               if (elemento.className == "Libras"){
                  tipo = "Elemento ";
                  texto = "Leitor de Libras ";
               }

               break;

            default:
                tipo = "Elemento ";
        }

        if(texto !== ""){
            textoCompleto += tipo + texto + ". ";
        }

    });

    // Cria o objeto de fala
    const fala = new SpeechSynthesisUtterance(textoCompleto);

    fala.lang = "pt-BR";
    fala.rate = 1;     // velocidade
    fala.pitch = 1;    // tom
    fala.volume = 1;   // volume

    // Inicia a leitura
    speechSynthesis.speak(fala);
}

// Para interromper a leitura
function pararLeitura(){
    speechSynthesis.cancel();
}

// Função JavaScript que recebe a URL e altera o src da imagem
function trocarImagem(escolha) {
    if (event.type === 'click' || event.key === 'Enter') {
    const imagemnova=document.getElementById('imagemPrincipal');
    switch(escolha){
        case "1":
          urlNova ="https://humanidades.com/wp-content/uploads/2018/09/astronomia-1-e1580089605623-800x400.jpg";
          textoprincipal.innerText="O que é a astronomia";
          texto.innerText="A astronomia é a ciencia do estudo das estrelas, dos planetas, das galaxias, das nebulosas, dos asteroides, dos cometas e de outros fenomenos cosmicos. Busca compreender a formação e a evolução das estrelas e dos planetas, conhecer a origem do universo, estudar a estrutura e a dinamica das galaxias e investigar a natureza dos buracos negros e da materia escura que formam parte do espaço";
          descrevefigura.innerText="Imagem do Sol na cor amarela ";
            break;
        case "2":
          urlNova = "";
          textoprincipal.innerText="a importancia dos telescópios ";
          texto.innerText="a importancia dos telescopios na descoberta do cosmo avanço tecnologico e ampliação do horizonte humano, o telescopio é a pricipal ferramenta do astronomo, funcionando como um olhp gigante que capta mais luz do que o olho humano e amplia os objetos distantes. Desde que galileu galilei apontou pela primeira vez sua pequena luneta para o céu em 1609, descobrindo crateras na lua e luas ao redor de jupiter, o designe dos telescopios evolouio drasticamente. Hoje, eles podem ser gigantescos refletores no alto de montanhas ou complexos observatorios espaciais, como o Hublle e o James Webb, livres da distorção atmosferica da terra"
              ;
          descrevefigura.innerText="Telescopio olhando para o espaço";
          break;
            case "3":
          urlNova = "https://www.google.com/imgres?q=nebulosa&imgurl=https%3A%2F%2Fs4.static.brasilescola.uol.com.br%2Fbe%2F2025%2F07%2Fnebulosa-caranguejo-famosa.jpg&imgrefurl=https%3A%2F%2Fbrasilescola.uol.com.br%2Fo-que-e%2Ffisica%2Fo-que-sao-nebulosas.htm&docid=R5GHoDXjlrdiZM&tbnid=NzHQrUM7IEGF5M&vet=12ahUKEwih0v3A-NSWAxV4E7kGHQ6rDR0QnPAOegUIgAEQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwih0v3A-NSWAxV4E7kGHQ6rDR0QnPAOegUIgAEQAA";
          textoprincipal.innerText="Ciclo da vida estelar ";
          texto.innerText="As estrelas, como nosso sol, não são eternas. Elas tem um ciclo de vida fascinante que podem durar bilhões de anos em vastas núvens de gás e poeira chamadas nebulosas. Sobe a influência da gravidada,partes destas núvens entram em colapso, formando protoestrelas que eventualmente se tornam estrelas da sequência principal, fundindo Hidrogenio em seu núcleo para produzir luz e calor."
              ;
          descrevefigura.innerText="nebulosa";
          break;
        default:
          urlNova = 'acessibilidade.png';
          textoprincipal.innerText="O que é Acessibilidade?";
          texto.innerText="        A acessibilidade digital permite que qualquer        pessoa utilize sistemas computacionais        independentemente de suas limitações.";
          descrevefigura.innerText="Figura 1 - Pessoa utilizando computador com tecnologia assistiva. ";
          break;
        }
    imagemnova.src = urlNova;
    lerCartao(textoprincipal.innerText, texto.innerText, descrevefigura.innerText);
    document.getElementById('textoprincipal').focus();
    }
}


/* ==========================================
   LEITURA DOS ELEMENTOS DO FLASHCARD ESCOLHIDO
   ========================================== */

// Função para ler toda a página
function lerCartao(texto1, texto2, texto3) {

    // Interrompe qualquer leitura anterior
    speechSynthesis.cancel();

    let textoCompleto = texto1 + ". " + texto2 + ". " + texto3;

    // Cria o objeto de fala
    const fala = new SpeechSynthesisUtterance(textoCompleto);

    fala.lang = "pt-BR";
    fala.rate = 1;     // velocidade
    fala.pitch = 1;    // tom
    fala.volume = 1;   // volume

    // Inicia a leitura
    speechSynthesis.speak(fala);
}
