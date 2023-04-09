// Toggle fonction for mobile header
function ShowHeader() {
    var header = document.querySelector('header');
    header.classList.toggle('active');
}

// Selectionne les icons ayant la classe '.icon'.
var icons = document.querySelectorAll('.icon');

// Generate a random position around the original position.
function randomPos(icon) {
    let rTop = Math.floor(Math.random() * 31) - 15; // Génère une valeur entre -15 et +15
    let rLeft = Math.floor(Math.random() * 31) - 15; // Génère une valeur entre -15 et +15

    return[rTop, rLeft];
}

icons.forEach(function(icon, index) {
    var i = index + 1;
    var animationDuration = 3 + (i * 0.5) + 's';
    var scale = Math.random() * (1.30 - 0.70) + 0.70;

    icon.style.left = icon.offsetLeft + 'px';
    icon.style.top = icon.offsetTop + 'px';
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