let ListaAmigos = [];
const inputNome = document.querySelector("input"); 

function adicionarAmigo() {
    const nomeDoAmigo = inputNome.value.trim();

    for (let i = 0; i < nomeDoAmigo.length; i++) {
        const caractere = nomeDoAmigo[i];

        if (
            !( (caractere >= 'A' && caractere <= 'Z') || 
               (caractere >= 'a' && caractere <= 'z') || 
               caractere === ' ' ||
               (caractere >= 'À' && caractere <= 'ÿ')) // Para letras com acento
        ) {
            alert("Insira um nome válido, apenas com letras e espaços!");
            return;
        }
    }

    ListaAmigos.push(nomeDoAmigo);
    atualizarLista();
    limparCampo();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    ListaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (ListaAmigos.length < 2) {
        alert("Para que o sorteio aconteça, insira pelo menos dois nomes!");
        return;
    }

    const amigoSecreto = ListaAmigos[Math.floor(Math.random() * ListaAmigos.length)];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSecreto}</strong>`;
}

function limparCampo() {
    inputNome.value = "";
}
