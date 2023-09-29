/*function sayHello() {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}! Welcome to my website.`);
}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert(`You habve rolled a ${dice}!`);
}

rollDice();

function jobSearch() {
    let month = 0;
    let dice = Math.floor(Math.random() * 6) + 1;
    month += dice;
    alert(`It will take you ${month} months to get your first job as dev`)
}

jobSearch();*/

function comfortLevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        console.log("You are a pro!");
    } else if (average > 4) {
        console.log("Don't worry, you're nearly there!");
    } else {
        console.log("If you keep trying you will get there!");
    }
}

comfortLevel(9, 7, 5);

for (i = 10; i >= 0; i--) {
    console.log(i);
    if (i === 0) {
        console.log("The loop is finished!");
    }
}

let myMovie = {
    title: 'Chosen',
    length: 59,
    releaseDate: '04-04-2022',
    seriesDetatil: {
        isSeries: true,
        seriesType: 'religious',
        universeName: 'Angel Studio',
        numberInSeries: 25
    },
    watchedStatus: true,
    rating: function(rating) {
        return `${rating} / 5`;
    }
}

console.log(`Movie ${myMovie.title} is ${myMovie.length} minutes long and it is ${myMovie.seriesDetatil.seriesType} made by ${myMovie.seriesDetatil.universeName} and I rate it ${myMovie.rating(5)}`);

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.body.style.backgroundImage = "none";
    ducument.getElementbyID("#").style.color = "white";
}