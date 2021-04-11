


async function load() {
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    const data = await conn.json();
    console.log(data.movie[0].move.name);
    console.log(data);
    let a = document.getElementById("a");
    

  }
load()
