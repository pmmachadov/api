function getJokes() {
  const limit = 1;
  const apiKey = 'reGXKiXbdXU4MEf57Sqk1Zz02VCxOpo3xFbGDJH2';

  // URL de la API
  const apiUrl = 'https://api.api-ninjas.com/v1/jokes?limit=' + limit;

  // Realizar la solicitud HTTP utilizando fetch
  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey
    },
  })
    .then(response => {
      // Verificar si la respuesta es exitosa (código de estado 200)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Convertir la respuesta a formato JSON
    })
    .then(data => {
      // Manipular los datos recibidos (en este caso, mostrar los chistes en una lista)
      const jokeList = document.getElementById('joke-list');
      jokeList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

      data.forEach(joke => {
        const listItem = document.createElement('p');
        listItem.textContent = joke.joke; // It's joke.joke because the joke is inside the joke object in the array
        jokeList.appendChild(listItem);
      });
    })
    .catch(error => {
      // Manejar errores en la solicitud
      console.error('Error fetching jokes:', error);
      const jokeList = document.getElementById('joke-list');
      jokeList.innerHTML = '<p>Error al obtener chistes</p>';
    });
}