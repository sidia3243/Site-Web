
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Erreur : les mots de passe ne correspondent pas !");
        return;
    }

    alert("Félicitations " + name +
          " ! Votre inscription est confirmée.\n" +
          "E-mail : " + email);

    form.reset();
});
