// ======================
// PIN SYSTEM
// ======================

const correctPin = "2111";
let currentPin = "";

function addPin(number){
    if(currentPin.length < 4){
        currentPin += number;
        document.getElementById("pinInput").value = currentPin;
    }
}

function clearPin(){
    currentPin = currentPin.slice(0, -1);
    document.getElementById("pinInput").value = currentPin;
}

function checkPin(){

    if(currentPin === correctPin){

        document.getElementById("pinScreen").style.display = "none";

        document.getElementById("website").classList.remove("hidden");

        createHearts();

    }else{

        alert("Wrong PIN ❤️");

        currentPin = "";

        document.getElementById("pinInput").value = "";

    }

}

// ======================
// OPEN HEART
// ======================

function openHeart(){

    document.getElementById("music").play();

    const bottleSection =
        document.getElementById("bottleSection");

    bottleSection.classList.remove("hidden");

    bottleSection.scrollIntoView({
        behavior:"smooth"
    });

}

// ======================
// FLOATING HEARTS
// ======================

function createHearts(){

    const hearts =
        document.getElementById("hearts");

    setInterval(()=>{

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        heart.style.animationDuration =
            (Math.random() * 5 + 5) + "s";

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },10000);

    },400);

}

// ======================
// BOTTLE MESSAGE
// ======================

function breakBottle(){

    const bottle =
        document.getElementById("bottle");

    bottle.classList.add("broken");

    createFlowers();

    setTimeout(()=>{

        document.getElementById(
            "letterContainer"
        ).style.display = "flex";

        showLetter();

    },700);

}

// ======================
// FLOWERS
// ======================

function createFlowers(){

    for(let i=0;i<15;i++){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        emojis[Math.floor(Math.random()*emojis.length)];

    flower.style.left = "50%";
    flower.style.top = "50%";

    const x =
        (Math.random()*600 - 300) + "px";

    const y =
        (Math.random()*-500 - 100) + "px";

    flower.style.setProperty("--x", x);
    flower.style.setProperty("--y", y);

    flower.style.animation =
        "flowerBurst 2s ease-out forwards";

    flowers.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },2000);
}

// ======================
// LETTER
// ======================

function showLetter(){

    const message = `

Happy Birthday, Achilles ❤️

Today is your special day,
and I just want you to know
how grateful I am to know you.

May this year bring you happiness,
good health,
beautiful memories,
and everything you've been wishing for.

Keep smiling,
keep shining,
and never stop chasing your dreams.

Thank you for being such
an amazing person.

Enjoy your day,
because today is all about you.

With love,

Kakak Ian ❤️

`;

    document.getElementById(
        "letterText"
    ).innerText = message;

}

// ======================
// QUIZ
// ======================

let currentQuestion = 0;

const questions =
    document.querySelectorAll(".question");

function checkAnswer(button,isCorrect){

    if(isCorrect){

        button.classList.add("correct");

        setTimeout(()=>{

            questions[currentQuestion]
            .classList.remove("active");

            currentQuestion++;

            if(
                currentQuestion <
                questions.length
            ){

                questions[currentQuestion]
                .classList.add("active");

            }else{

                document.getElementById(
                    "quizSuccess"
                ).classList.remove("hidden");

                document.getElementById(
                    "quizSuccess"
                ).scrollIntoView({
                    behavior:"smooth"
                });

            }

        },800);

    }else{

        button.classList.add("wrong");

        setTimeout(()=>{

            button.classList.remove("wrong");

        },800);

    }

                   }
