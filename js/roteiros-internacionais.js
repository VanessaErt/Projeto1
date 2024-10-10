document.getElementById('verMaisBtn').addEventListener('click', function() {
    const hiddenOffers = document.querySelectorAll('.oferta.hidden');
    const offersToShow = 4; 

    for (let i = 0; i < offersToShow; i++) {
        if (hiddenOffers[i]) {
            hiddenOffers[i].classList.remove('hidden');
        }
    }

    const updatedHiddenOffers = document.querySelectorAll('.oferta.hidden');
    
    if (updatedHiddenOffers.length === 0) {
        document.getElementById('verMaisBtn').style.display = 'none';
    }
});