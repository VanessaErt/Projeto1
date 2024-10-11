function mostrarMaisOfertas() {
    const ofertasOcultas = document.querySelectorAll('.oferta.hidden');
    ofertasOcultas.forEach(oferta => {
        oferta.classList.remove('hidden');
    });

    // Esconde o botão se não houver mais ofertas ocultas
    if (document.querySelectorAll('.oferta.hidden').length === 0) {
        document.getElementById('verMaisBtn').style.display = 'none';
    }
}
