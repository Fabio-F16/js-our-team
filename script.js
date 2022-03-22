// console.log('js ok');



// creazione struttura dati
const team = [
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Wayne Barnett',
        ruolo: 'Ceo and Founder',
        foto: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'img/angela-caroll-chief-editor.jpg',
    }
];



const teamContainer = document.querySelector('.team-container');

// al click sul button viene aggiunto un nuovo membro
const addButton = document.getElementById('addMemberButton');

addButton.addEventListener('click', () => addMember(team));


createTeamCards(team);





// FUNZIONI -------------------------------------------------------------------------------------------



const getValue = id => document.getElementById(id).value;


/**
 * Create a card for each member of the team
 * @param members - an array of objects that contain the member's name, title, and image.
 */
function createTeamCards(members) {
    teamContainer.innerHTML = ''
    for (let i = 0; i < members.length; i++) {

        const card = createCard(members[i]);
        teamContainer.appendChild(card);

    }

}

/**
 * It creates a card for each team member.
 * @param member - The member object that we want to create a card for.
 * @returns A card with the team's name, role and photo.
 */
function createCard(member) {

    const card = document.createElement('div');
    card.className = 'team-card';

    card.innerHTML = `
            <div class="team-card">
            <div class="card-image">
                <img src="${member.foto}" alt="${member.nome}" />
            </div>
            <div class="card-text">
                <h3>${member.nome}</h3>
                <p>${member.ruolo}</p>
            </div>
    `;

    return card;
}




function addMember(data) {

    const nome = getValue('name');
    const ruolo = getValue('role');
    const foto = getValue('image');

    const newMember = {
        nome,
        ruolo,
        foto
    }
    data.push(newMember);

    createTeamCards(data);

}






