window.onload = function() {
    carregar();
};

function carregar() {
    var msg = document.getElementById('msg');
    var foto = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        // Bom dia
        foto.src = 'manha.jpg';
        document.body.style.background = 'yellow';
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        foto.src = 'tarde.jpg';
        document.body.style.background = 'orange';
    } else {
        // Boa noite
        foto.src = 'noite.jpg';
        document.body.style.background = 'gray';
    }
}
