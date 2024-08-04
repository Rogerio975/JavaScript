function mudarCor() {
    const div = document.getElementById("minhaDiv");
    const cores = ["red", "green", "blue", "purple", "orange"];
    const randomIndex = Math.floor(Math.random() * cores.length);
    div.style.color = cores[randomIndex];
  }  