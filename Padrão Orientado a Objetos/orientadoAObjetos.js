var album = {
    title: "Metallica (Black Album)",
    released: 1991,
    showInfo: function() {
        var message = "Título do álbum: " + this.title + "\nLançado em: " + this.released;
        if (typeof globalThis !== 'undefined' && typeof globalThis.alert === 'function') {
            globalThis.alert(message);
        } else {
            console.log(message);
        }
    }
};

album.showInfo(); // Exibe um alerta com as informações do álbum