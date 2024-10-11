function validateForm() {
    document.getElementById('successModal').style.display = 'block';

    // Limpar o formulário
    document.getElementById('contactForm').reset();

    return false; // Evita o envio do formulário
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}