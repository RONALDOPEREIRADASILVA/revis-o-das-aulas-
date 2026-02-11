function Salvar() {


    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    if (nome == "" || telefone == " " || email == "") {
        console.log('digite o cadastro');
        alert('erro');
    } else {
        (nome, telefone, email, 'cadastrado com sucesso')
        document.querySelector(".Nome").innerHTML = +`Nome: ${nome} `;

    };
};




//document.querySelector(".Nome").innerHTML = +`Nome: ${nome} `;

















