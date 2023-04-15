// Toggle fonction for mobile header
function ShowHeader() {
    var header = document.querySelector('header');
    header.classList.toggle('active');
}

// Selectionne les icons ayant la classe '.icon'.
var icons = document.querySelectorAll('.icon');

// Generate a random position in a range of -15px, +15px.
function randomPos(icon) {
    var rTop = Math.floor(Math.random() * 31) - 15;
    var rLeft = Math.floor(Math.random() * 31) - 15;

    return[rTop, rLeft];
}

/* Create an animation for all #home icons */
icons.forEach(function(icon, index) {
    var i = index + 1;
    var animationDuration = 3 + (i * 0.5) + 's'; /* Animation Duration */
    var scale = Math.random() * (1.30 - 0.70) + 0.70; /* Icon Size */

    icon.style.left = icon.offsetLeft + 'px'; /* Get & set left position */
    icon.style.top = icon.offsetTop + 'px'; /* Get & set top position */
    icon.style.webkitAnimationName = 'animate' + i;
    icon.style.webkitAnimationDuration = animationDuration;
    icon.style.animationName = 'animate' + i;
    icon.style.animationDuration = animationDuration;
    icon.style.animationIterationCount = 'infinite';

    var keyframes = `
    @keyframes animate${i} {
        0% {
            opacity: 0.80;
            transform: scale(0.80);
        }
        25% {
            opacity: ${scale * 0.8};
            transform: scale(${scale}) translateY(${randomPos(icon)[0]}px) translateX(${randomPos(icon)[1]}px);
        }
        50% {
            opacity: ${scale * 0.8};
            transform: scale(${scale}) translateY(${randomPos(icon)[0]}px) translateX(${randomPos(icon)[1]}px);
        }
        75% {
            opacity: ${scale * 0.8};
            transform: scale(${scale}) translateY(${randomPos(icon)[0]}px) translateX(${randomPos(icon)[1]}px);
        }
        100% {
            opacity: 0.80;
            transform: scale(0.80);
        }
    }
    `;

    var style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);
});

// Card light effect function
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }

function validateForm() {
    event.preventDefault();

    var loading_circle = document.getElementsByClassName('submit-loading')[0];
    var submit_button = document.getElementsByClassName('contact-form-submit')[0];

    var nom = document.forms["contactForm"]["nom"].value;
    var prenom = document.forms["contactForm"]["prenom"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (nom === "" || prenom === "" || email === "" || message === "") {
        afficherFenetreModale('Veuillez remplir tous les champs du formulaire.', 'rgb(233, 45, 45)');
        return false;
    } else {
        submit_button.style.display = "none";
        loading_circle.style.display = "block";    

        var params = {
            from_name : nom + ' ' + prenom,
            email_id : email,
            message : message
        }

        emailjs.send("service_crf037n", "template_0jw75na", params)
        .then(function(response) { /** Si le message est envoyé avec succès **/
            afficherFenetreModale('Message envoyé avec succès !', '#62ff62');
            submit_button.style.display = "block";
            loading_circle.style.display = "none";    
            document.forms["contactForm"].reset(); // Réinitialiser les champs du formulaire
        }, function(error) { /** Si une erreur survient **/
            afficherFenetreModale('Une erreur est survenue. Veuillez réessayer', 'rgb(233, 45, 45)');
            submit_button.style.display = "block";
            loading_circle.style.display = "none";    
        });
        return true;        
    }
}

function afficherFenetreModale(message, color) {
    // Créer la fenêtre modale
    var fenetreModale = document.createElement('div');
    fenetreModale.className = 'fenetre-modale'; // Ajouter une classe pour la personnalisation du style
  
    // Ajouter le contenu à la fenêtre modale
    var contenu = '<p>' + message + '</p><button onclick="fermerModal()">Fermer</button>';
    fenetreModale.innerHTML = contenu;
  
    // Appliquer la couleur à la fenêtre modale
    fenetreModale.style.borderColor = color;
  
    // Ajouter la fenêtre modale à la page
    document.body.appendChild(fenetreModale);
  
    // Centrer la fenêtre modale
    var hauteurFenetre = fenetreModale.offsetHeight;
    var largeurFenetre = fenetreModale.offsetWidth;
    fenetreModale.style.top = '50%';
    fenetreModale.style.left = '50%';
    fenetreModale.style.transform = 'translate(-50%, -50%)';
}

function fermerModal() {
    var fenetreModale = document.querySelector('.fenetre-modale'); // Sélectionner la fenêtre modale
    fenetreModale.parentNode.removeChild(fenetreModale); // Supprimer la fenêtre modale du parent
}