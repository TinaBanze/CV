//in der Konsole das ganze Dokument anschauen:
//console.dir(document)

//window.getComputedStyle(h1).fontSize  zeigt in der Konsole die Eigenschaften eines Elements


//let score = 0;
/* let currentQuestionIndex = 0;
let questions = [
    {
        question: ["Do you love me?"],
        answers: ["Yes. I'm 100% sure.", "Yes. But I'm not sure if the love is strong enough.", "No."],
        correctAnswer: 0,
    },
    {
        question: ["Since we had our first phone call in March 2023, did you ever think of allowing another person to kiss you?"],
        answers: ["Yes, but I didn't do so.",
            "Yes. Kissing another person was a nice experience",
            "Yes and I went even further.",
            "No. I experienced being cheated myself so I wouldn't hurt my partner like this.",
            "No. I'm not interested in other women. All I think about is coding. "],
        correctAnswer: 4,
    },
    {
        question: ["Will we ever get serious?"],
        answers: ["Yes, by the end of this year, we'll have started to build a shared life.",
            "Yes, but not within this year. I won't introduce you to anyone, won't let anyone know that you exist and don't intend to spend more time with you.",
            "No"],
        correctAnswer: 0,
    },
    {
        question: ["Why don't we meet more often?"],
        answers: ["Because I don't want to connect to you.",
            "Because it simply doesn't come to my mind to ask you if you want to meet",
            "Because I'm not ready for a relationship.",
            "Because I prefer to be alone.",
            "Don't know. Let's try to find a solution."],
        correctAnswer: 4
    }
];
function displayQuestion() {

    if (currentQuestionIndex >= questions.length) {
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;
        return;
    }

    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;

    let answersDiv = document.getElementById('answers');  //laut Konsole Fehler hier, da Wert gleich null

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}
displayQuestion();

function checkAnswer(userAnswer) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (userAnswer == correctAnswer) {
        score += 1;
    }

    currentQuestionIndex += 1;
    displayQuestion();
}

function nextQuestion() {
    currentQuestionIndex += 1;
    displayQuestion();
} */

const btnHome = document.getElementById('home');
btnHome.onclick = function () {
    console.log("I clicked the home button.")
}

function receiveKisses() {
    console.log("KissKissKiss");
    console.log("Never stop kissing.")
}
btnHome.onmouseenter = receiveKisses;

const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', () => {
        console.log("I love a man called Lekan.");
    });
});

function receiveLove() {
    console.log("LoveLoveLove");
    console.log("Never stop loving.")
}
btn.onmouseenter = receiveLove;

const form = document.querySelector('#loveForm');
form.removeEventListener('submit', function (e) {
    e.preventDefault();
    console.log('submitted');
});

const shortReminder = document.querySelector('h1').onmouseover = () => {
    alert('I love you.')
}

const allImages = document.getElementsByTagName('img');
for (let image of allImages) {
    console.log(image.src)
}

const allTitles = document.getElementsByTagName('h2');
for (let tit of allTitles) {
    console.log("Hier ist ein h2.")
}

const allClassContainer = document.getElementsByClassName('container');
for (let cont of allClassContainer) {
    console.log("Das sind Elemente, deren Klasse container heißt.")
}

const allLoveSongs = document.querySelectorAll('#lovesongs');
for (let loveSong of allLoveSongs) {
    loveSong.style.color = 'rgb(0, 128, 128)';
}

const sub = document.querySelector('h1').innerHTML += '<sup>Made for you with love</sup>'

let input = document.querySelector('input[type="text"]')
input.setAttribute('type', 'text')

let loveName = prompt('ENTER THE NAME OF MY LOVE.')
let myLove = "I love you"

if (loveName === "Lekan") {
    console.log(myLove + "," + " " + loveName + "!");
} else (console.log("This is not my love."))

let miss = myLove.replace('love', 'miss');
console.log(miss);

let loveLekan = true;
if (loveLekan = true) {
    console.log("Tina loves Lekan loves Tina.")
} else (console.log("We need to talk."))

let nameOfMyLove = 'Olalekan';
if (nameOfMyLove === "Lekan") {
    console.log("I love you!")
} else if (nameOfMyLove === "Olalekan") {
    console.log("You're who I want to be with.")
} else (console.log("I'm not interested in other men. Stop bothering me!"));

let futurePlans = "Of course you'll be part of my everyday life soon.";
if (futurePlans === "I'm planning to leave you.") {
    console.log("I'm so sad.")
} else if (futurePlans === "I'm not sure about us.") {
    console.log("What can we do to help you being sure?")
} else (console.log("Good. Because I'm planning to spend the next 50 years with you."));

let favoriteMovies = ['The Lucky One', 'The Best of Me']
favoriteMovies.push('Dear John')
console.log(favoriteMovies)

let loveHim = ['Lekan', 'Olalekan']
let missHim = ['Aliyu', 'Lele']
loveHim.concat(missHim)
let loveMissHim = loveHim.concat(missHim)
console.log(loveMissHim)

let spliceLoveMissHim = loveMissHim.splice(0, 0, 'Abdullahi')
console.log(spliceLoveMissHim)

loveHim.includes('Lekan')
let includesLoveHim = loveHim.includes('Lekan')
console.log(includesLoveHim)

loveHim.indexOf('Olalekan')
let indexLoveHim = loveHim.indexOf('Olalekan')
console.log(indexLoveHim)

let reverseLoveMissHim = loveMissHim.reverse()
console.log(reverseLoveMissHim)

let sliceLoveMissHim = loveMissHim.slice(1, 3)
console.log(sliceLoveMissHim)


/* accessing data out of an object */
const person = {
    firstName: "Lekan",
    lastName: "Aliyu",
    dateOfBirth: "1989 May 5th",
    address: {
        street: "GD 165",
        zipcode: 20099
    }
}
person.dateOfBirth = "1990 May 5th"; //Informationen aktualisieren/ändern
person.fullName = "Aliyu Abdullahi Olalekan"; //Informationen hinzufügen = Key-Value Pairs
console.log(person);

function collectKisses() {
    let totalKisses = 1000;
    console.log(totalKisses);
}

const day = 9; //Konsole zeigt I dont know that, denn 9 ist nicht unten definiert.
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default: console.log("I don't know that!")
}

//Loop zehn Mal "ILH"
for (let num = 1; num <= 10; num += 1) {
    console.log("I love him.");
}

//gerade Zahlenreihe 0-20
for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}

//ungerade Zahlenreihe 1-19
for (let i = 1; i <= 20; i += 2) {
    console.log(i)
}
//in Zehnerschritten rückwärts von 100 bis 0
for (let num = 100; num >= 0; num -= 10) {
    console.log(num);
}

//Liste mit Nummerierung und Objekten
const animals = ['lioness', 'lynx', 'turtle'];
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}
//Liste von oben in umgekehrter Reihenfolge
const reverseAnimals = ['lioness', 'lynx', 'turtle'];
for (let i = reverseAnimals.length - 1; i >= 0; i--) {
    console.log(i, reverseAnimals[i]);
}

window.onload = function () {
    document.getElementById("musicplayer").play();
};

const formular = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
}

function handleSubmit(event) {
    event.preventDefault();

    uploadFiles();
}

function uploadFiles() {
    const url = 'https://filedn.eu/lMKK7sTjW28QTgkAn1J49Hz/';
    const formData = new FormData(form);

    const fetchOptions = {
        method: 'post',
        body: formData
    };

    fetch(url, fetchOptions);
}

img = document.getElementById("fullscreen");
// Function to set image dimensions
function enlargeImg() {
    img.style.width = "60%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}
// Function to reset image dimensions
function resetImg() {
    img.style.width = "40%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
} 