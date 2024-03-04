// const button = document.getElementById('button')

// button.addEventListener('click',() => {

//     const data1 = document.getElementById('search').value
//     const data2 = document.getElementById('search1').value
//     console.log(data1, data2)

//     const baseUrl= `https://api.nasa.gov/planetary/apod?api_key=E6i82zPNni8qk2ssSy313zBQNtmEAxQIPdgMGYAh&start_date=${data1}&end_date=${data2}`;

//     fetch(baseUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Erro de rede! Código${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data)
//       renderizarImagem(data[0].url)

//       })
//       .catch(()=>console.log(err));
//   });

//   function renderizarImagem(items) {
//     const container = document.getElementById(`gallery`);
//     items.results.forEach((item, index) => {
//       const divPersonagens = document.createElement(`div`);
//       divPersonagens.innerHTML = `
//               <div class=" personagem-caixa">
//                   <img src="${data[0].url}">
//               </div>
//           `;
//       divPersonagens.classList.add(`personagem`);
//       container.appendChild(divPersonagens);
//     });
//   }

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const data1 = document.getElementById('search').value
    const data2 = document.getElementById('search1').value
    console.log(productId)


    async function fetchProductDetails(productId) {
        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=E6i82zPNni8qk2ssSy313zBQNtmEAxQIPdgMGYAh&start_date=${data1}&end_date=${data2}`);
            const product = await response.json();
            const productDetailsContainer = document.getElementById('gallery');

            productDetailsContainer.innerHTML = `
          <img class="product-image" src="${product.url}" alt="${product.title}">
          <div class="product-details">
            <h2 class="product-title">${product.title}</h2>
           
        `;
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    fetchProductDetails(productId);
});
