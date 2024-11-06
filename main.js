//can I generate alt-texts on images?
window.addEventListener("DOMContentLoaded", main);
let powers = [];
const endButtons = ["Yes", "No"];

/** This is the starting point for the program */
function main() {
  loadEnterGarden();
}

/** Register all events for buttons and other ui elements */
function setupEventListeners() {
  //zoom.onclick = toggleZoom;
  // sätt upp fler knappar så dom klickbara.
}

/** Load starting scene with welcome message, story and option to enter garden */
function loadEnterGarden() {
  powers = [];
  storyImg.src = "assets/images/start.jpg";
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Goblin's Garden!";
  document.getElementById("title").appendChild(h1);

  const introTexts = [
    "A garden with beautiful flowers, delicious fruit and vegetables, slimey slugs and a haunted greenhouse. Never mind the tricky goblins that run around and try making a fuss of everything...",
    "You are a friendly 5-inch tall mini human-ish creature. You have all the attributes of a normal human, but if you're lucky, you might run into magic creatures in the garden that gives you powers.",
    "Please, my dear, enter!",
  ];
  const introButtons = ["Enter garden"];
  createParagraphs(introTexts);
  createButtons(introButtons);
  option0.onclick = storyBricksStart;
}

/** Create as many paragraphs per story that's defined in it's specific paragraphs array */
function createParagraphs(paragraphs) {
  const container = document.getElementById("textContainer");

  container.innerHTML = "";

  for (const [index, p] of paragraphs.entries()) {
    const paragraph = document.createElement("p");
    paragraph.textContent = p;
    paragraph.id = `paragraph${index}`;
    container.appendChild(paragraph);
  }
}

/** Create as many buttons per story that's defined in it's specific buttonTexts array */
function createButtons(buttonTexts) {
  const container = document.getElementById("buttonContainer");

  container.innerHTML = "";

  for (const [index, text] of buttonTexts.entries()) {
    // I need to be able to distinguish the options and set specific id's to assign buttons specific text
    const option = document.createElement("button");
    option.textContent = text;
    option.id = `option${index}`;
    container.appendChild(option);
  }
}

function loadPowers(powers) {
  const container = document.getElementById("powerBar");

  container.innerHTML = "";

  for (const [index, text] of powers.entries()) {
    // I need to be able to distinguish the powers and set specific id's to assign powers specific text
    const showPower = document.createElement("p");
    showPower.textContent = text;
    showPower.id = `power${index}`;
    container.appendChild(showPower);
  }
}
/** Displays the starting story with choices in the story */
function storyBricksStart() {
  const enterTexts = [
    "You enter the garden on laid out bricks. You need to take large steps over the cracks between the bricks not to fall. It's a sunny and warm day with a light breeze. It is indeed enjoyable for most creatures.",
    "Looking around you see; buzzing bees collecting nectar on the flowers, hard-working ants carrying material for their home, and oh - what's that? You think you saw something furry in the shadows behind the bush to the right.",
  ];
  const enterButtons = [
    "Stay in the sun and go smell the roses ahead",
    "Go look for the furry thing you saw",
  ];

  storyImg.src = "assets/images/enter.jpg";
  createParagraphs(enterTexts);
  title.innerHTML = "";
  createButtons(enterButtons);
  option0.onclick = storyDragonflyPower;
  option1.onclick = storyGoblinPrank;
}

function storyDragonflyPower() {
  storyImg.src = "assets/images/dragonfly.jpg";

  const rosesTexts = [
    "Oh! The roses smell lovely!",
    "You meet a gorgeous dragonfly by the roses. She tells you she only have life for this one day, and is happy it was such a beautiful one. You nod, and feel a strong compassion for this creature. The dragonfly senses that, and in return, she gives you the power to fly! But use it well, it will only last for 24 hours.",
    "You kindly thank the stunning dragonfly and look around you. You see a small pond to your right you see a bunch of mud further in to the garden, and hear someone crying for help from the mud slopes.",
  ];
  const rosesButtons = [
    "Go look by the mud slopes to see if you can help the creature in need",
    "Go to look if there's any koi fish in the pond",
  ];
  createParagraphs(rosesTexts);
  title.innerHTML = "";
  createButtons(rosesButtons);
  option0.onclick = storyMudSlope;
  option1.onclick = () => storyKoiPower(1); // want to show the next story differently depending on where you come from
  powers.push("Ability to fly for 24 hours"); // add power flying
  loadPowers(powers);
}

function storyGoblinPrank() {
  storyImg.src = "assets/images/bush.jpg";

  const prankTexts = [
    "As you turn around the edge of the bush and enter the shadowed space, you at first don't find what you were looking for.",
    "Then! A large SPLASH! of muddy water hits you on top of your head, you look up and see a smirking little goblin hanging from a branch dangling his legs and a bucket.",
    '"Whoops" says the goblin laughing, and quickly jumps down and runs off.',
  ];
  const prankButtons = [
    "Go wash yourself off in the pond",
    "Go look for the furry thing you saw before",
  ];
  createParagraphs(prankTexts);
  title.innerHTML = "";
  createButtons(prankButtons);
  option0.onclick = () => storyKoiPower(1);
  option1.onclick = storyCat;
}

function storyMudSlope() {
  storyImg.src = "assets/images/mud.jpg";

  const mudTexts = [
    "As you get closer to the mud slopes you continue to hear a call for help, but it's more quiet now. You look around and fear the worst, did the creature get sucked in to the mud? There's no way to find out but to jump in and look for it.",
    "As you so fearlessly jump in the muddy slopes, you feel the cold mud drag you down and you barely can hold your head above it, and on top of it all, you don't see a creature in need... ",
    "And then, you look up, on the edge of the hole sits a small goblin, grinning wide as he's obviously enjoying the show.",
  ];
  const mudButtons = [
    "Ask the goblin to help you up",
    "Use your flying power to help you get out of the mud and get to a safer place",
  ];
  createParagraphs(mudTexts);
  createButtons(mudButtons);
  option0.onclick = storyGoblinGameOver;
  option1.onclick = () => storyPowerClover(1);
}

function storyKoiPower(version) {
  storyImg.src = "assets/images/pond.jpg";

  const pondTexts = [
    "As you enjoy your stroll towards the pond, taking in the bees buzzing and the sun's warmth on your skin, you finally find yourself at the edge of the pond.",
    "You arrive at a pond. Heart beating, sweaty and panting. You look around, but it seems you got rid of the cat.",
    "You decide to jump in for a refreshing swim.",
    "What you didn't consider, was that the pond is almost covered in water lilies. As beautiful as they might be, they make it very hard to resurface as you've gone for a dive. You get under a water lily leaf and struggle to get up! You almost lose your conscious when...",
    "...suddenly a glittering koi fish finds you, puts you on its back and carries you to the surface.",
    'Back on land, you thank the fish for saving your life. He replies "Never mind! But just so it does not happen again, I grant you the  ability to breathe under water! Use it well, you can only use it 24 hrs"',
    "You thank the fish once again and look around you where to proceed to...",
  ];
  const pondButtons = [
    "You are tired from all the adventure and see a nice green spot in the middle of the garden where you maybe can get some rest",
    "You can't wait to try your new power, you go for another swim and this time you can breathe under water and meet all the creatures that live there!",
  ];
  createParagraphs(pondTexts);

  if (version === 1) {
    console.log("version 1");
    paragraph1.style.display = "none"; // hides the second entry in the array because it is used when coming from another scene
  } else {
    console.log("Version 2");
    paragraph0.style.display = "none";
  }

  createButtons(pondButtons);
  option0.onclick = () => storyPowerClover(2);
  option1.onclick = storyAppleWorm;
  powers.push("Ability to breathe under water");
  loadPowers(powers);
}

function storyCat() {
  storyImg.src = "assets/images/cat.jpg";

  const catTexts = [
    "As you gaze around the garden you see the end of a  wiggling furry tail behind a big tree to your right. You start to realise that this was not a small furry creature, it was actually a cat! A friendly cat?",
    'As you get closer to the wiggly tail, you see that the cat is fast asleep. "Good", you think. You might not have to find out if its a friend or foe...',
    "Until.. just as you passed it by, it opens one eye to look for the bird that just screeched, but it doesn't focus on the bird when it sees you!",
    "It licks its mouth and rises up from its nap.",
  ];
  const catButtons = ["Run, as fast as you can!", "Stay and pet the cat"];
  createParagraphs(catTexts);
  createButtons(catButtons);
  option0.onclick = () => storyKoiPower(2);
  option1.onclick = storyCatGameOver;
}

function storyGoblinGameOver() {
  storyImg.src = "assets/images/mudEnd.jpg";

  const goblinGameOverTexts = [
    "Uh oh... It seems that the goblin wasn't as friendly as you had hoped... *gulp*",
    "I'm sorry my friend, but game's over.",
    "Do you want to play again?",
  ];
  createParagraphs(goblinGameOverTexts);
  createButtons(endButtons);
  option0.onclick = main;
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
}

function storyPowerClover(version) {
  storyImg.src = "assets/images/clover.jpg";

  const cloverTexts = [
    "You come across a soft green patch of clover in the middle of the garden and decide to lie down for a nap.",
    "After a short while you wake up well rested and ready for new adventure. As you start to look around you, you notice one particularly green and glowy 4-leaf clover. You move a little closer and pick it up.",
    "Holding the clover in your hand, you feel a strong sense  run through you that this is a special clover. Suddenly, you hear a tiny voice. You look down and see a small ant talking to you, and you lean in.",
    '"That is a very special clover! Use it wisely, for it will bring you luck and help in any type of situation in this garden, when you need it. You can only use it once!.',
    "You thank the ant and put the clover in your pocket. Feeling ready for new adventure.",
  ];
  const cloverButtons = ["Go left", "Go right"];
  createParagraphs(cloverTexts);
  createButtons(cloverButtons);
  option0.onclick = storyWateringDevice;
  option1.onclick = storySneakySnail;
  // remove power flying

  if (version === 1 && powers[1] === "Ability to fly for 24 hours") {
    powers.splice(1, 1);
  } else if (version === 1 && powers[0] === "Ability to fly for 24 hours") {
    powers.splice(0, 1);
  } else {
  }
  powers.push("Magical four-leaf clover");
  loadPowers(powers);
}

function storyAppleWorm() {
  storyImg.src = "assets/images/apple.jpg";

  const appleTexts = [
    "You enjoy your swim a lot more this time. You notice there are several koi fish and you greet them all.",
    "After a while of swimming, you start feeling tired and especially hungry. You get out of the pond and start looking for something to eat.",
    "In front of you, you see a shiny red apple, look up and see it must have fallen from the apple tree. Grateful for that, you take a huge bite in the apple, as you hear someone laughing. It was the goblin again, but what's he laughing at? You look at the huge apple (remember you're 5-inch tall)... and see a big worm looking back at you! The goblin tricked you to take a bite in the apple.",
    "Grunting and spitting, you start walking again...",
  ];
  const appleButtons = [
    "Continue walking into the garden to look for food",
    "Look for food in the outskirts of the garden",
  ];
  createParagraphs(appleTexts);
  createButtons(appleButtons);

  if (powers[1] === "Ability to breathe under water") {
    powers.splice(1, 1);
  } else if (powers[0] === "Ability to breathe under water") {
    powers.splice(0, 1);
  } else {
  }

  loadPowers(powers);
  option0.onclick = storySneakySnail;
  option1.onclick = storySuccessGarden;
}

function storyCatGameOver() {
  storyImg.src = "assets/images/catEnd.jpg";

  const catGameOverTexts = [
    "Uh oh... It seems that the cat wasn't as friendly as you had hoped... *gulp*",
    "I'm sorry my friend, but game's over.",
    "Do you want to play again?",
  ];
  createParagraphs(catGameOverTexts);
  createButtons(endButtons);

  option0.onclick = main;
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
}

function storyWateringDevice() {
  storyImg.src = "assets/images/watering.jpg";

  const wateringTexts = [
    "You come across a grass watering device, only as you're so tiny, the watering device is huge and causes your whole world to flood.",
    "You find yourself in the middle of chaos. There are bumblebees, bees and flies, dragonflies and other insects that got caught in the water and are screaming for help. You decide to do the good thing and use your breathe-under-water skill that you received from the koi fish to save all the insects.",
    "Once all of them are on dry land (or air, rather) again, you can continue your journey through the garden.",
  ];
  const wateringButtons = [
    "You're hungry and start looking for something eatable in the outskirts of the garden",
    "You're hungry for more adventure and walk straight for the haunted greenhouse",
  ];
  createParagraphs(wateringTexts);
  createButtons(wateringButtons);
  option0.onclick = storySuccessGarden;
  option1.onclick = storyGreenhouse;
  // remove power flying

  if (powers[1] === "Ability to breathe under water") {
    powers.splice(1, 1);
  } else if (powers[0] === "Ability to breathe under water") {
    powers.splice(0, 1);
  } else {
  }

  loadPowers(powers);
}

function storySneakySnail() {
  storyImg.src = "assets/images/snail.jpg";

  const sneakySnailTexts = [
    'You stroll on in the beautiful garden and suddenly, you stumble upon a great big snail right across your path. The snail looks sneaky, and rather slimey, but you greet it with a "Hello" and get an enchanting "Helloooo" back.',
    'The snail continues; "You look rather hungry... Can I offer you something to eat?"',
    'You are hungry, so you answer; "Yes please, that would be delightful."',
    'The snail offers you his best mushroom, and you dig in. Soon enough you start feeling a tingling sensation in your body, almost going numb and the snail replies; "That is for all the snail repellant you humans sneak into your gardens!"',
    "What do you do?",
  ];
  const sneakySnailButtons = [
    "Save myself using my 4-leaf clover power and keep walking",
    "Lay down to rest",
  ];
  createParagraphs(sneakySnailTexts);
  createButtons(sneakySnailButtons);

  if (powers.includes("Magical four-leaf clover")) {
  } else {
    option0.style.display = "none";
  }
  option0.onclick = () => storyGreenhouse(1);
  option1.onclick = storyPoisonGameOver;
}

function storySuccessGarden() {
  storyImg.src = "assets/images/end.jpg";

  const successEndTexts = [
    "You made it!",
    "In the outskirts of the garden, you find a garden bed with loads of delicious vegetables and fruit, ready to eat!",
    "Rejoice the deliciousness! And welcome back to the garden any time!",
    "The end.",
    "Do you want to play again?",
  ];
  createParagraphs(successEndTexts);
  createButtons(endButtons);

  option0.onclick = main;
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
}

function storyPoisonGameOver() {
  storyImg.src = "assets/images/poison.jpg";

  const poisonGameOverTexts = [
    "Unfortunately, resting now only makes the poison spread in your body and...*gulp*",
    "Game over.",
    "Do you want to play again?",
  ];
  createParagraphs(poisonGameOverTexts);
  createButtons(endButtons);

  option0.onclick = main;
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
}

function storyGreenhouse(version) {
  storyImg.src = "assets/images/greenhouse.jpg";

  const greenhouseTexts = [
    "You find yourself facing the old crooked and haunted greenhouse. Of course, the full-size humans doesn't understand that it's haunted... because what haunts it is thousands of wasp-ghosts who used to live inside the greenhouse until they were murdered by humans.",
    "You decide to enter to see whether you as a tiny-human-creature can get a sense of the haunting wasps.",
    "Upon entering, you're immediately frightened upon the sight of the thousands of ghosts swirling around inside. The sight would be enough, but the very wasp queen attacks you directly.",
    "If you have a 4-leaf clover - you're lucky! It helps you get out of this house.",
  ];
  const greenhouseButtons = [
    "Save myself using my 4-leaf clover power",
    "Uh oh, I can't get out",
  ];

  createParagraphs(greenhouseTexts);
  createButtons(greenhouseButtons);

  //Checks which scene the player enters this scene from and removes power if they come from verson 1
  if (version === 1 && powers[1] === "Magical four-leaf clover") {
    powers.splice(1, 1);
    console.log("1");
  } else if (version === 1 && powers[0] === "Magical four-leaf clover") {
    powers.splice(0, 1);
    console.log("2");
  } else if (version === 1 && powers[2] === "Magical four-leaf clover") {
    powers.pop();
    console.log("3");
  } else {
  }

  // re-load the power array
  loadPowers(powers);

  // Checks if the player still has the four-leaf clover

  if (powers.includes("Magical four-leaf clover")) {
    option1.style.display = "none";
  } else {
    option0.style.display = "none";
  }
  option0.onclick = storySuccessGarden;
  option1.onclick = storyGreenhouseGameOver;
}

function storyGreenhouseGameOver() {
  storyImg.src = "assets/images/wasps.jpg";

  const greenhouseGameOverTexts = [
    "Unfortunately, without a 4-leaf clover the wasps will not ever let you out of the greenhouse again...*gulp*",
    "Game over.",
    "Do you want to play again?",
  ];
  createParagraphs(greenhouseGameOverTexts);
  createButtons(endButtons);

  option0.onclick = main;
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
}

function getGameOver() {
  const gameOverTexts = ["Thanks for playing!", "You can close this window."];

  storyImg.src = "assets/images/roses.jpg";
  createParagraphs(gameOverTexts);
}
