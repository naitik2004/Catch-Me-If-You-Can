const screens = document.querySelectorAll(".screen");
const choose_pokemon_btn = document.querySelectorAll(".choose-pokemon-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let score = 0;
let time = 0;
let selected_pokemon = {};

start_btn.addEventListener('click', () => screens[0].classList.add('up'));

choose_pokemon_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        selected_pokemon = {
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt')
        };

        console.log("Selected Pokemon: ", selected_pokemon);  // Debugging
        screens[1].classList.add('up');
        setTimeout(createPokemon, 1000);
        startGame();
    });
});

function startGame(){
    time = 0; // ✅ Reset time to start from 0
    setInterval(increaseTime, 1000);
}

function increaseTime(){
    let m = Math.floor(time / 60);
    let s = time % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`;
    time++;
}

function createPokemon(){
    if (!selected_pokemon.src) {
        console.error("No Pokémon selected!");
        return;
    }

    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    
    const { x, y } = getRandomLoaction();
    pokemon.style.top = `${y}px`;
    pokemon.style.left = `${x}px`;

    pokemon.innerHTML = `<img src="${selected_pokemon.src}" alt="${selected_pokemon.alt}" style="transform: rotate(${Math.random() * 360}deg);" />`;

    pokemon.addEventListener('click', catchPokemon);
    game_container.appendChild(pokemon);
}

function getRandomLoaction(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100; 

    return { x, y };
}

function catchPokemon(){
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000 );
    addPokemon();
}

function addPokemon(){
    setTimeout(createPokemon, 1000);
    setTimeout(createPokemon, 1500);
}

function increaseScore(){
    score++;
    if(score > 19){
        message.classList.add('visible');
    }
    scoreEl.innerHTML = `Score: ${score}`;
}
