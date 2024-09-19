document.getElementById('reduceFont').addEventListener('click', function(event) {
    event.preventDefault();
    reduzirFonte();
});

document.getElementById('enlargeFont').addEventListener('click', function(event) {
    event.preventDefault();
    aumentarFonte();
});

document.getElementById('highContrast').addEventListener('click', function(event) {
    event.preventDefault();
    altoContraste();
});

document.getElementById('invertColors').addEventListener('click', function(event) {
    event.preventDefault();
    inverterCor();
});

function reduzirFonte() {
    var tamanhoAtual = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    var novoTamanho = tamanhoAtual - 2;
    if (novoTamanho > 4) {
        document.body.style.fontSize = novoTamanho + 'px';
        console.log("Diminuiu para: " + novoTamanho);
    }
}

function aumentarFonte() {
    var tamanhoAtual = parseFloat(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    var novoTamanho = tamanhoAtual + 2;
    if (novoTamanho <= 50) {
        document.body.style.fontSize = novoTamanho + 'px';
        console.log("Aumentou para: " + novoTamanho);
    }
}

function altoContraste() {
    document.body.classList.remove('inversed');
    if (document.body.classList[0] == 'contrast' || document.body.classList[1] == 'contrast') {
        document.body.classList.remove('contrast');
    } else {
        document.body.classList.add('contrast');
    }
}

function inverterCor() {
    document.body.classList.remove('contrast');
    if (document.body.classList[0] == 'inversed' || document.body.classList[1] == 'inversed') {
        document.body.classList.remove('inversed');
    } else {
        document.body.classList.add('inversed');
    }
}