
function buscarCep() {
    if (cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then(response => response.json())
            .then((response) => {
                logradouro.value = response.logradouro;
                bairro.value = response.bairro
                localidade.value = response.localidade;
                uf.value = response.uf;

            })
    }
}


// logradouro.value = "alguma coisa"
// bairro.value = "meu bairro"

