const img = document.querySelector("img");
const botoes = document.querySelectorAll("button");
let intervalId = null;
let automaticoAtivo = false;
let cont = 0;
for (const botao of botoes) {
    botao.addEventListener("click", () => {
        if (botao.classList.contains("automatico")) {
            if (automaticoAtivo) {
                clearInterval(intervalId);
                automaticoAtivo = false;
        
            } else {
                automaticoAtivo = true;
                intervalId = setInterval(() => {
                    if (cont === 0) {
                        img.setAttribute("src", "./vermelho.png");
                    } else if (cont === 1) {
                        img.setAttribute("src", "./amarelo.png");
                    } else if (cont === 2) {
                        img.setAttribute("src", "./verde.png");
                    }
                cont++
                    if (cont === 3) {
                        cont = 0 ;
                    }
                },1000);
            }
        }
        else {
            img.setAttribute("src", `./${botao.id}.png`);
        }
    });
}