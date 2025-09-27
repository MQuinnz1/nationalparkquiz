const parks = {
1: "Yosemite",
2:"Yellowstone",
3: "Acadia",
4:"Great Smoky Mountains",
};

const explanation = {
1: "Yellowstone was the first national park, created by President Ulysses S. Grant in 1872.",
2: "Wrangell-St. Elias is the largest national park, even bigger than many countries!",
3: "Great Smoky Mountains is the most visited national park, with over 12 million visitors each year.",
4: "Sequoia is home to the largest tree on Earth, the General Sherman Tree.",
};

var answer = prompt("Question 1: What is the oldest national park? 1. Yosemite 2. Yellowstone 3. Acadia 4. Great Smoky Mountains (Type the number of your answer.)");
if (answer === "2" || answer === parks[2]) {
    alert("Correct! " + explanation[1]);
} else if (answer !== "1" && answer !== "2" && answer !== "3" && answer !== "4") {
    alert("Invalid answer. Please enter a number between 1 and 4.");
}
else {
    alert("Sorry! " + explanation[1]);
};

parks[1] = "Wrangell-St. Elias";
parks[3] = "Death Valley";
parks[4] = "Denali";

var answer = prompt("Okay, Question 2: What is the largest national park? 1. Wrangell-St. Elias 2. Yellowstone 3. Death Valley 4. Denali (Type the number of your answer.)");
if (answer === "1" || answer === parks[1]) {
    alert("Correct! " + explanation[2]);
} else if (answer !== "1" && answer !== "2" && answer !== "3" && answer !== "4") {
    alert("Invalid answer. Please enter a number between 1 and 4.");
}
else {
    alert("Sorry! " + explanation[2]);
};

parks[1] = "Yosemite";
parks[3] = "Great Smoky Mountains";
parks[4] = "Grand Canyon";

var answer = prompt("Almost there... Question 3: What national park attracts the most visitors? 1. Yosemite 2. Yellowstone 3. Great Smoky Mountains 4. Grand Canyon (Type the number of your answer.)");
if (answer === "3" || answer === parks[3]) {
    alert("Correct! " + explanation[3]);
} else if (answer !== "1" && answer !== "2" && answer !== "3" && answer !== "4") {
    alert("Invalid answer. Please enter a number between 1 and 4.");
}
else {
    alert("Sorry! " + explanation[3]);
};

parks[1] = "Olympic";
parks[2] = "Redwood";
parks[3] = "Shenandoah";
parks[4] = "Sequoia";

var answer = prompt("And last but not least, Question 4: What national park has the largest tree in the world? 1: Olympic 2: Redwood 3: Shenandoah 4: Sequoia (Type the number of your answer.)");
if (answer === "4" || answer === parks[4]) {
    alert("Correct! " + explanation[4]);
} else if (answer !== "1" && answer !== "2" && answer !== "3" && answer !== "4") {
    alert("Invalid answer. Please enter a number between 1 and 4.");
}
else {
    alert("Sorry! " + explanation[4]);
};

if (confirm("Thanks for playing! Want to play again?")) {
    location.reload();
}
else {
    alert("See you next time!");
}