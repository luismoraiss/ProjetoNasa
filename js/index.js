const button = document.getElementById("button");

button.addEventListener("click", () => {
  const data1 = document.getElementById("search").value;
  const data2 = document.getElementById("search1").value;
  console.log(data1, data2);

  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=E6i82zPNni8qk2ssSy313zBQNtmEAxQIPdgMGYAh&start_date=${data1}&end_date=${data2}`;

  fetch(baseUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro de rede! Código${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      renderizarImagem(data);
    })
    .catch((err) => console.log(err));
});

function renderizarImagem(data) {
  const container = document.getElementById(`gallery`);
  console.log(data);

  data.forEach((element) => {
    const divImagens = document.createElement(`div`);
    divImagens.classList.add(`imagem`);

    divImagens.innerHTML = `
        <p>${element.title}<br>${element.date}</p>
        
        <img class= "img-galeria" src="${element.url}" widht=300px height=300px>
        <button id="btn-informacao"><a href="../pages/informacao.html">Ver mais</a></button>
        
    `;
    console.log(element);
    container.appendChild(divImagens);
  });
}

const btnInformacao = document.getElementById("btn-informacao");

btnInformacao.addEventListener("click", () => {
  window.location.href = "./pages/informacao.html";
});


function renderizarInformacao{
    const container1 = document.getElementById(`contain`);
    console.log(data);

  data.forEach((element) => {
    const divImagens1 = document.createElement(`div`);
    divImagens1.classList.add(`imagem`);

    divImagens1.innerHTML = `
        <h1>${element.title}<h1>
        <h3>${element.date}</h3>
        
        <img class= "img-galeria" src="${element.url}" widht=300px height=300px>
        <p>${element.explanation}</p>
        
    `;
    console.log(element);
    container.appendChild(divImagens1);
  });
}