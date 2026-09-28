        function calcularMedia() {
            const n1 = parseFloat(document.getElementById('nota1').value);
            const n2 = parseFloat(document.getElementById('nota2').value);

            const divResultado = document.getElementById('resultado');
           
            if (isNaN(n1) || isNaN(n2)) {
                divResultado.innerHTML = "Por favor, preencha ambas as notas!";               
                divResultado.className = "";
                return;
            }

            const media = (n1 + n2) / 2;
            const notaCorte = 6.0;

            if (media >= notaCorte) {
                divResultado.innerHTML = `Média: ${media.toFixed(1)} - <span class="aprovado">Aprovado!</span>`;
            } else {
                divResultado.innerHTML = `Média: ${media.toFixed(1)} - <span class="reprovado">Reprovado!</span>`;
            }
        }