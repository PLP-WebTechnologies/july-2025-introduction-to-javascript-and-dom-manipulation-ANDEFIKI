// --- Part 1: JavaScript Basics ---

window.onload = function() {
    // Prompt for user input (browser only)
    let userName = prompt("What is your name?");
    let userAge = Number(prompt("How old are you?"));
    let nextYearAge = userAge + 1;

    if (userAge >= 18) {
        console.log(`Hello ${userName}, next year you will be ${nextYearAge} years old. You are an adult!`);
        document.getElementById("output").textContent = `Hello ${userName}, next year you will be ${nextYearAge} years old. You are an adult!`;
    } else {
        console.log(`Hi ${userName}, next year you will be ${nextYearAge} years old. You are a minor.`);
        document.getElementById("output").textContent = `Hi ${userName}, next year you will be ${nextYearAge} years old. You are a minor.`;
    }

    // --- Part 2: JavaScript Functions ---
    function calculateTotal(a, b) {
        return a + b;
    }

    function formatGreeting(name, age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }

    let total = calculateTotal(10, 15);
    console.log("Total:", total);

    let greeting = formatGreeting(userName, userAge);
    console.log(greeting);
    document.getElementById("output").textContent += "\n" + greeting;

    // --- Part 3: JavaScript Loops ---
    let fruits = ["Apple", "Banana", "Cherry", "Date"];
    for (let i = 0; i < fruits.length; i++) {
        console.log("Fruit:", fruits[i]);
    }

    let countdownText = "";
    for (let count = 5; count > 0; count--) {
        countdownText += count + "...\n";
    }
    countdownText += "Go!";
    console.log(countdownText);
    document.getElementById("output").textContent += "\n" + countdownText;

    // --- Part 4: DOM Manipulation ---
    document.getElementById("btn").addEventListener("click", function() {
        const output = document.getElementById("output");
        output.textContent = "Button clicked! Output text changed.";
        output.style.color = "blue";
    });

    //-- toggle class on double click --

    document.getElementById("btn").addEventListener("dblclick", function() {
        const box4 = document.getElementById("new");
        box4.classList.toggle("highlight");
    });

    // -- add new element on right click --
    document.getElementById("btn").addEventListener("contextmenu", function(e) {
        e.preventDefault();
        const newPara = document.createElement("p");
        newPara.textContent = "This paragraph was added dynamically!";
        document.getElementById("container").appendChild(newPara);
    });
}





