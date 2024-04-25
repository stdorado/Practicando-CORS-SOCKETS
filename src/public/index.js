
const dataFromServer = fetch('http://localhost:5000/crypto')
    .then(response => response.json())
    .then(data => {
        const cryptoList = data.data; // Accede al array de criptomonedas dentro de la propiedad "data"
        const cryptoContainer = document.getElementById('cripto');

        // Itera sobre cada criptomoneda y crea tarjetas con Bootstrap para mostrarlas
        let row;
        cryptoList.forEach((crypto, index) => {
            // Crea una nueva fila cada 3 tarjetas
            if (index % 3 === 0) {
                row = document.createElement('div');
                row.classList.add('row', 'mb-3');
                cryptoContainer.appendChild(row);
            }

            // Crea un elemento div con la clase "col" de Bootstrap para cada criptomoneda
            const cryptoCol = document.createElement('div');
            cryptoCol.classList.add('col-md-4');

            // Crea una tarjeta para la criptomoneda dentro de la columna
            const cryptoCard = document.createElement('div');
            cryptoCard.classList.add('card');

            // Agrega contenido a la tarjeta
            cryptoCard.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${crypto.name}</h5>
                    <p class="card-text">
                        <img src="./images/${crypto.symbol.toLowerCase()}.png" alt="${crypto.symbol}" style="max-width: 50px;">
                        Símbolo: ${crypto.symbol}
                    </p>
                    <p class="card-text">Clasificación: ${crypto.cmc_rank}</p>
                    <p class="card-text">Oferta Circulante: ${crypto.circulating_supply}</p>
                    <p class="card-text">Suministro Total: ${crypto.total_supply}</p>
                    <button type="button" class="btn btn-primary">Mi botón</button>
                </div>
            `;

            // Agrega la tarjeta a la columna
            cryptoCol.appendChild(cryptoCard);

            // Agrega la columna a la fila
            row.appendChild(cryptoCol);
        });
    })
    .catch(error => console.error(error));
