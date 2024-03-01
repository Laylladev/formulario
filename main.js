function logar(){
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if(senha =="admin"){
        alert('sucesso');
    } else{
        alert('Usuario ou senha incorretos');
    }
}
