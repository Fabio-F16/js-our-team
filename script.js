// console.log('js ok');


const team = [
    utente1 = {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    utente2 = {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    utente3 = {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    utente4 = {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    utente5 = {
        nome: 'Wayne Barnett',
        ruolo: 'Ceo and Founder',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    utente6 = {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/angela-caroll-chief-editor.jpg',
    }
];

console.log(team);
console.log(team[0].nome);


for (let i = 0; i < team.length; i++) {

    const teamContainer = document.querySelector('.team-container');

    // creo elementi dom
    const teamCard = document.createElement('div');
    const cardImage = document.createElement('div');
    const cardText = document.createElement('div');
    const imgElement = document.createElement('img');
    const nameUser = document.createElement('h3');
    const task = document.createElement('p');


    // aggiungo classi
    teamCard.className = 'team-card';
    cardImage.className = 'card-image';
    cardText.className = 'card-text';

    // inserimento valori card
    imgElement.src = team[i].foto;

    nameUser.innerText = team[i].nome;

    task.innerText = team[i].ruolo;

    // inserimento nell'html
    teamContainer.appendChild(teamCard);
    teamCard.appendChild(cardImage);
    teamCard.appendChild(cardText);
    cardImage.appendChild(imgElement);
    cardText.appendChild(nameUser);
    cardText.appendChild(task);

}





