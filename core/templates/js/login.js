document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Aqui você pode fazer uma requisição AJAX para enviar os dados para o servidor Django.
    // Exemplo:
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // Sucesso, redirecione ou faça qualquer outra coisa necessária.
            window.location.href = "/listaProdutos";
        } else {
            // Mostrar mensagem de erro para o usuário.
            alert("Erro ao fazer login. Por favor, verifique suas credenciais.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Aqui você pode fazer uma requisição AJAX para enviar os dados para o servidor Django.
    // Exemplo:
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // Sucesso, redirecione ou faça qualquer outra coisa necessária.
            window.location.href = "/listaProdutos";
        } else {
            // Mostrar mensagem de erro para o usuário.
            alert("Erro ao fazer login. Por favor, verifique suas credenciais.");
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});