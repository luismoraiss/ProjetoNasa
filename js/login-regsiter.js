
const obj = [
  {
    "id": 1,
    "usuario": "luis",
    "senha": "123456"
  }
 
]
debugger

const btn = document.getElementById('login')
const validacao = document.getElementById('span1')
const validacao1 = document.getElementById('span2')


btn.addEventListener('click', () => {
event.preventDefault();
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
 

  const login = obj.find(
    (obj) => obj.usuario === user && obj.senha === password
  );

  if (login) {
    window.location = "../pages/pag.html";
  } else {
    validacao.innerHTML = `Email Inválido`
    validacao1.innerHTML = `Senha Incorreta`
    window.location = "./index.html"
  }
});