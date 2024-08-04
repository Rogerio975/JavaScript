function mudarCor() {
    const div = document.getElementById("minhaDiv");
    const cores = ["red", "green", "blue", "purple", "orange", "rgb(139,69,19)", "#FF00FF"];
    const randomIndex = Math.floor(Math.random() * cores.length);
    div.style.color = cores[randomIndex];
  }  