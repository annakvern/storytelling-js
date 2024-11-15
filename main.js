window.addEventListener("DOMContentLoaded", main);

/**
 * @type {String} A string representing the name the player input starting the game
 */
let player = "";

/**
 * @type {Array<String>} An array of powers the player collects and uses throughout the game
 */
let powers = [];

/**
 * @type {String} A string with the scene name that changes for every scene
 */
let scene = "";

/**
 * @type {Array<String>}
 */
const endButtons = ["Yes", "No"];

/**
 * Game state data (name, scene and powers) stored in localStorage
 * @typedef {{playerName: string, currentScene: string, powersGathered: Array<String>}} gameState
 */
let gameState = {
  playerName: player,
  currentScene: scene,
  powersGathered: powers,
};

/** This is the starting point for the program
 * @param {string} status A string to say the player wants to start over and clear the localStorage
 */
function main(status) {
  if (status === "start over") {
    localStorage.clear();
    console.log(localStorage.getItem("gameState"));
  }

  const savedState = localStorage.getItem("gameState");
  if (savedState) {
    gameState = JSON.parse(savedState);
    player = gameState.playerName || "";
    powers = gameState.powersGathered || [];
    scene = gameState.currentScene || "";
    renderPowers();
    renderPlayerName();

    if (scene && typeof window[scene] === "function") {
      window[scene]();
    } else {
      loadEnterGarden();
    }
  } else {
    loadEnterGarden();
  }

  setupSaveNameListener();
}

/** Register event for saving the name */
function setupSaveNameListener() {
  const nameForm = document.getElementById("nameForm");
  nameForm.addEventListener("submit", saveName);
}

/** Load starting scene with welcome message, story and option to enter garden */
function loadEnterGarden() {
  scene = "loadEnterGarden";
  powers = [];
  storyImg.src = "assets/images/start.jpg";
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Goblin's Garden!";
  document.getElementById("title").appendChild(h1);

  const introTexts = [
    "A garden with beautiful flowers, delicious fruit and vegetables, slimey slugs and a haunted greenhouse. Never mind the tricky goblins that run around and try making a fuss of everything...",
    "You are a friendly 5-inch tall mini human-ish creature. You have all the attributes of a normal human, but if you're lucky, you might run into magic creatures in the garden that gives you powers.",
  ];
  const introButtons = ["Enter garden"];
  getPlayerName();
  createParagraphs(introTexts);
  createButtons(introButtons);
  option0.onclick = sceneBricksStart;
  saveGameState();
}
/** Inserts an input form field that takes a name and a button that submits it */
function getPlayerName() {
  const input = document.createElement("input");
  input.id = "nameInput";
  input.placeholder = "What is your name?";
  const form = document.getElementById("nameForm");
  form.appendChild(input);
  const submitButton = document.createElement("button");
  submitButton.id = "submitButton";
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  submitButton.style.marginLeft = "1.5rem";
  form.appendChild(submitButton);
}

/** Saves the name entered by the player to localStorag
 * @param {SubmitEvent} event SubmitEvent on input field for saved name
 */
function saveName(event) {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput");

  const savedState = localStorage.getItem("gameState") || gameState;
  gameState = JSON.parse(savedState) || {};
  gameState.playerName = nameInput.value;
  saveGameState();
  renderPlayerName();
  renderPlayerGreeting();
}

/** Loads the Player name into a greeting before entering the garden */
function renderPlayerGreeting() {
  const name = gameState.playerName || "";
  const container = document.getElementById("greeting");

  container.innerHTML = "";

  if (name) {
    const playerGreeting = document.createElement("p");
    playerGreeting.textContent =
      "Please, my dear " + name + ", enter if you dare!";
    container.appendChild(playerGreeting);
  }
  nameForm.reset();
  nameForm.innerHTML = "";
}
/** Loads and renders the current player name from local storage */
function renderPlayerName() {
  const savedState = localStorage.getItem("gameState");
  let gameState = JSON.parse(savedState) || {};
  const playername = gameState.playerName;

  if (playername) {
    const currentPlayer = document.createElement("p");
    currentPlayer.textContent = "Currently in garden: " + playername;
    currentlyPlaying.appendChild(currentPlayer);
  }
}

/** Create as many paragraphs per story that's defined in it's specific paragraphs array
 * @param {Array<String>} paragraphs An array with paragraph texts for each scene
 */
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

/** Create as many buttons per story that's defined in it's specific buttonTexts array
 * @param {Array<String>} buttonTexts An array with button texts for each button in the scene
 */
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
/** Loads and updates the power-bar */
function renderPowers() {
  const container = document.getElementById("powerBar");

  container.innerHTML = "";
  const yourPowers = document.createElement("p");
  yourPowers.textContent = "Your powers: ";
  container.appendChild(yourPowers);

  const savedState = localStorage.getItem("gameState");
  let gameState = JSON.parse(savedState) || {};
  const savedPowers = gameState.powersGathered || [];
  if (savedPowers) {
    for (const [index, text] of savedPowers.entries()) {
      // I need to be able to distinguish the powers and set specific id's to assign powers specific text
      const showPower = document.createElement("p");
      showPower.textContent = text;
      showPower.id = `power${index}`;
      container.appendChild(showPower);
    }
  }
}
/** Saves the name, scene and powers array into a gameState */
function saveGameState() {
  gameState.currentScene = scene;
  gameState.powersGathered = powers;
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

/** Loads when a power has been used and need to update the object in localStorage
 * @param {string} powerName A string with the name of the power a player collets
 */
function removePowerFromLocalStorage(powerName) {
  const gameState = JSON.parse(localStorage.getItem("gameState"));
  let index = gameState.powersGathered.indexOf(powerName);
  gameState.powersGathered.splice(index, 1);
  localStorage.setItem("gameState", JSON.stringify(gameState));
}

/** Displays the starting scene with choices where to go next */
function sceneBricksStart() {
  scene = "sceneBricksStart";

  nameForm.innerHTML = "";
  greeting.innerHTML = "";
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
  story.style.paddingTop = "0";
  saveGameState();
  createButtons(enterButtons);
  option0.onclick = sceneDragonflyPower;
  option1.onclick = sceneGoblinPrank;
}
/** Displays the Dragonfly scene, set a power, and show options where to go next */
function sceneDragonflyPower() {
  let gameState = JSON.parse(localStorage.getItem("gameState")) || {};

  scene = "sceneDragonflyPower";

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
  story.style.paddingTop = "0";
  createButtons(rosesButtons);
  option0.onclick = sceneMudSlope;
  option1.onclick = () => sceneKoiPower(1); // want to show the next story differently depending on where you come from

  // check so that gameState doesn't already include the power to be given in this scene
  if (!gameState.powersGathered.includes("Ability to fly for 24 hours")) {
    powers.push("Ability to fly for 24 hours");
  }

  saveGameState();
  renderPowers();
}
/** Displays the scene with the Goblin with choices where to go next */
function sceneGoblinPrank() {
  scene = "sceneGoblinPrank";
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
  option0.onclick = () => sceneKoiPower(1);
  option1.onclick = sceneCatMeeting;
  saveGameState();
}
/** Displays the scene where the player get stuck in mud with choices where to go next */
function sceneMudSlope() {
  scene = "sceneMudSlope";
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
  option0.onclick = sceneGoblinGameOver;
  option1.onclick = () => scenePowerClover(1);
  saveGameState();
}
/** Displays the Koi fish scene, set power, and show options where to go next
 * @param {number} version A number representing the version of origin the player came from, this scene has more than one entry point
 */
function sceneKoiPower(version) {
  const savedState = localStorage.getItem("gameState");
  gameState = JSON.parse(savedState);

  scene = "sceneKoiPower";
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
    paragraph1.style.display = "none"; // hides the second entry in the array because it is used when coming from another scene
  } else {
    paragraph0.style.display = "none";
  }

  createButtons(pondButtons);
  // check if the gameState doesn't already include the power to be given in this scene
  if (!gameState.powersGathered.includes("Ability to breathe under water")) {
    powers.push("Ability to breathe under water");
  }
  saveGameState();
  renderPowers();

  option0.onclick = () => scenePowerClover(2);
  option1.onclick = sceneAppleWorm;
}
/** Displays the Cat scene with choices where to go next */
function sceneCatMeeting() {
  scene = "sceneCatMeeting";
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
  saveGameState();
  option0.onclick = () => sceneKoiPower(2);
  option1.onclick = sceneCatGameOver;
}
/** Displays a scene where the player reach game over */
function sceneGoblinGameOver() {
  scene = "sceneGoblinGameOver";
  storyImg.src = "assets/images/mudEnd.jpg";

  const goblinGameOverTexts = [
    "Uh oh... It seems that the goblin wasn't as friendly as you had hoped... *gulp*",
    "I'm sorry my friend, but game's over.",
    "Do you want to play again?",
  ];
  createParagraphs(goblinGameOverTexts);
  createButtons(endButtons);
  option0.onclick = () => main("start over");
  option1.onclick = getGameOver;
  powers = [];
  powerBar.innerHTML = "";
  greeting.innerHTML = "";
  currentlyPlaying.innerHTML = "";
  saveGameState();
}
/** Displays the scene where player get a magical four-leaf clover with choices where to go next
 * @param {number} version A number representing the version of origin the player came from, this scene has more than one entry point
 */
function scenePowerClover(version) {
  let gameState = JSON.parse(localStorage.getItem("gameState")) || {};
  scene = "scenePowerClover";
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

  //If the user comes from the scene where they need to use their flying power, remove the power from the list
  let index = powers.indexOf("Ability to fly for 24 hours");
  if (version === 1) {
    powers.splice(index, 1);
    removePowerFromLocalStorage("Ability to fly for 24 hours");
  }

  // check so that gameState doesn't already include the power to be given in this scene
  if (!gameState.powersGathered.includes("Magical four-leaf clover")) {
    powers.push("Magical four-leaf clover");
  }
  saveGameState();
  renderPowers();

  option0.onclick = sceneWateringDevice;
  option1.onclick = sceneSneakySnail;
}
/** Displays the apple and worm scene with choices where to go next */
function sceneAppleWorm() {
  scene = "sceneAppleWorm";
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

  //remove ability as it was used
  let index = powers.indexOf("Ability to breathe under water");
  powers.splice(index, 1);
  removePowerFromLocalStorage("Ability to breathe under water");

  saveGameState();
  renderPowers();
  option0.onclick = sceneSneakySnail;
  option1.onclick = sceneSuccessGarden;
}
/** Displays a scene where the player reach game over */
function sceneCatGameOver() {
  scene = "sceneCatGameOver";
  storyImg.src = "assets/images/catEnd.jpg";

  const catGameOverTexts = [
    "Uh oh... It seems that the cat wasn't as friendly as you had hoped... *gulp*",
    "I'm sorry my friend, but game's over.",
    "Do you want to play again?",
  ];
  createParagraphs(catGameOverTexts);
  createButtons(endButtons);

  option0.onclick = () => main("start over");
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
  greeting.innerHTML = "";
  currentlyPlaying.innerHTML = "";
  saveGameState();
}
/** Displays the watering  scene with choices where to go next */
function sceneWateringDevice() {
  scene = "sceneWateringDevice";
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

  // remove the ability to breathe under water power
  let index = powers.indexOf("Ability to breathe under water");
  powers.splice(index, 1);
  removePowerFromLocalStorage("Ability to breathe under water");

  saveGameState();
  renderPowers();
  option0.onclick = sceneSuccessGarden;
  option1.onclick = sceneGreenhouse;
}
/** Displays the sneaky snail scene with choices where to go next */
function sceneSneakySnail() {
  scene = "sceneSneakySnail";
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
  saveGameState();
  option0.onclick = () => sceneGreenhouse(1);
  option1.onclick = scenePoisonGameOver;
}
/** Displays the success finishing scene where the player reach the end of the game! */
function sceneSuccessGarden() {
  scene = "sceneSuccessGarden";
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
  saveGameState();
  option0.onclick = () => main("start over");
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
  greeting.innerHTML = "";
  currentlyPlaying.innerHTML = "";
}
/** Displays a scene where the player reach game over */
function scenePoisonGameOver() {
  scene = "scenePoisonGameOver";
  storyImg.src = "assets/images/poison.jpg";

  const poisonGameOverTexts = [
    "Unfortunately, resting now only makes the poison spread in your body and...*gulp*",
    "Game over.",
    "Do you want to play again?",
  ];
  createParagraphs(poisonGameOverTexts);
  createButtons(endButtons);
  saveGameState();
  option0.onclick = () => main("start over");
  option1.onclick = getGameOver;
  greeting.innerHTML = "";
  powerBar.innerHTML = "";
  currentlyPlaying.innerHTML = "";
}
/** Displays the Greenhouse scene with choices where to go next
 * @param {number} version A number representing the version of origin the player came from, this scene has more than one entry point
 */
function sceneGreenhouse(version) {
  scene = "sceneGreenhouse";
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
  let index = powers.indexOf("Magical four-leaf clover");

  if (version === 1) {
    powers.splice(index, 1);
    removePowerFromLocalStorage("Magical four-leaf clover");
  }

  saveGameState();
  renderPowers();
  // Checks if the player still has the four-leaf clover

  if (powers.includes("Magical four-leaf clover")) {
    option1.style.display = "none";
  } else {
    option0.style.display = "none";
  }
  option0.onclick = sceneSuccessGarden;
  option1.onclick = sceneGreenhouseGameOver;
}
/** Displays a scene where the player reach game over */
function sceneGreenhouseGameOver() {
  scene = "storyGreenhouseGameOver";
  storyImg.src = "assets/images/wasps.jpg";

  const greenhouseGameOverTexts = [
    "Unfortunately, without a 4-leaf clover the wasps will not ever let you out of the greenhouse again...*gulp*",
    "Game over.",
    "Do you want to play again?",
  ];
  createParagraphs(greenhouseGameOverTexts);
  createButtons(endButtons);
  saveGameState();
  option0.onclick = () => main("start over");
  option1.onclick = getGameOver;
  powerBar.innerHTML = "";
  greeting.innerHTML = "";
  currentlyPlaying.innerHTML = "";
}
/** Displays the final game over scene when the player don't want to play again */
function getGameOver() {
  scene = "getGameOver";
  const gameOverTexts = ["Thanks for playing!", "You may close this window."];
  storyImg.src = "assets/images/roses.jpg";
  createParagraphs(gameOverTexts);
  createButtons(gameOverButtons);
  saveGameState();
}
