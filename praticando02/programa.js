function Salvar() {


    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    if (nome == "" || telefone == " " || email == "") {
        console.log('digite o cadastro');
        alert('erro');
    } else {
        (nome, telefone, email, 'cadastrado com sucesso');
        document.querySelector(".item1").innerHTML = ` ${nome} `
        document.querySelector(".item2").innerHTML = ` ${telefone}`
        document.querySelector(".item3").innerHTML = `${email}`;


        


        // document.querySelector(".cadastros").innerHTML = `Nome: ${nome} , `;


        /*
        const cadastrado = [nome, telefone, email];
        document.querySelector(".cadastros").innerHTML = ` cadastros: ${cadastrado}`;
        console.log(cadastrado); */



    };



    //document.querySelector(".Nome").innerHTML = `Nome: ${nome} `;


};














