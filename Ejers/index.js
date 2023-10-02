let num = [];

function numeros(num){
    
    for (let i = 0; i<=10; i++){
        num[i] = prompt("Ingresa un numero entero");
    }
    for (let i = 0; i<=10; i++){
        alert (+num[i]);
    }
}

numeros(num);
































// Palabra oculta que el jugador debe adivinar
const wordToGuess = "javascript";
let guessedWord = [];

// Intentos restantes
let attemptsLeft = 6;

// Referencias a elementos HTML
const wordContainer = document.getElementById("word-container");
const guessesContainer = document.getElementById("guesses-container");
const attemptsSpan = document.getElementById("attempts");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");

// Inicializa la palabra oculta
for (let i = 0; i < wordToGuess.length; i++) {
    guessedWord.push("_");
}

// Función para mostrar la palabra oculta y las letras adivinadas
function updateDisplay() {
    wordContainer.textContent = guessedWord.join(" ");
    guessesContainer.textContent = "Letras adivinadas: " + guessedWord.filter(letter => letter !== "_").join(", ");
    attemptsSpan.textContent = attemptsLeft;
}

// Función para manejar la adivinanza de una letra
function guessLetter() {
    const guess = guessInput.value.toLowerCase();
    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        alert("Ingresa una sola letra válida.");
        guessInput.value = "";
        return;
    }

    if (guessedWord.includes(guess)) {
        alert("Ya has adivinado esa letra.");
        guessInput.value = "";
        return;
    }

    if (wordToGuess.includes(guess)) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === guess) {
                guessedWord[i] = guess;
            }
        }
    } else {
        attemptsLeft--;
    }

    guessInput.value = "";
    updateDisplay();

    if (guessedWord.join("") === wordToGuess) {
        alert("¡Felicidades! Has ganado.");
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (attemptsLeft === 0) {
        alert("¡Has perdido! La palabra era '" + wordToGuess + "'.");
        guessInput.disabled = true;
        guessButton.disabled = true;
    }
}

// Agregar evento de clic al botón de adivinanza
guessButton.addEventListener("click", guessLetter);

// Mostrar la palabra oculta inicial
updateDisplay();