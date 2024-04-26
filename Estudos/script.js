let meuDiv = document.getElementById("meuDiv");
let minhaClasse = document.getElementsByClassName("minhaClasse")[0];
let h1 = document.getElementsByTagName("h1")[0];

let meuDiv2 = document.querySelector("#meuDiv2");
let minhaClasse2 = document.querySelector(".minhaClasse");
let h1_2 = document.querySelector("h1");

meuDiv.textContent = "Novo conteúdo para meu div.";
minhaClasse.innerHTML = "<strong>Novo conteúdo para minha classe.</strong>";
h1.textContent = "Novo conteúdo para meu H1.";

meuDiv2.style.backgroundColor = "lightblue";