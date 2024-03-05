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
        
        <img class= "img-galeria" src="${element.hdurl}" widht=300px height=300px>
      
        
    `;
    console.log(element);
    container.appendChild(divImagens);
  });
}





