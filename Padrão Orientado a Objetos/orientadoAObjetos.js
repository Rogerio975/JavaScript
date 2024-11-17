var album = {
    title: "Metallica (Black Album)",
    released: 1991,
    showInfo: function() {
        alert("Título do álbum: " + this.title + "\nLançado em: " + this.released);
    }
};

album.showInfo(); // Exibe um alerta com as informações do álbum