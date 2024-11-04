//Sätt upp projektet likt dagens uppgift och skapa en funktion för varje "scen" i er berättelse som byter ut texten 
//på sidan och vad som händer när man klickar på knapparna - dvs vilken scen som ska visas härnäst.
window.addEventListener("DOMContentLoaded", main); 
const powers = [];
const introTexts = ["A garden with beautiful flowers, delicious fruit and vegetables, slimey slugs and a haunted greenhouse. Never mind the tricky goblins that run around and try making a fuss of everything...", "You are a friendly 5-inch tall mini human-ish creature. You have all the attributes of a normal human, but if you're lucky, you might run into magic creatures in the garden that gives you powers.", "Please, my dear, enter!"];
const introButtons = ["Enter garden"];
const enterTexts = ["You enter the garden on laid out bricks. You need to take large steps over the cracks between the bricks not to fall. It's a sunny and warm day with a light breeze. It is indeed enjoyable for most creatures.", "Looking around you see; buzzing bees collecting nectar on the flowers, hard-working ants carrying material for their home, and oh - what's that? You think you saw something furry in the shadows behind the bush to the right."];
const enterButtons = ["Stay in the sun and go smell the roses ahead", "Go look for the furry thing you saw"];
const rosesTexts = ["Oh! The roses smell lovely!", "You meet a gorgeous dragonfly by the roses. She tells you she only have life for this one day, and is happy it was such a beautiful one. You nod, and feel a strong compassion for this creature. The dragonfly senses that, and in return, she gives you the power to fly! But use it well, it will only last for 24 hours.", "You kindly thank the stunning dragonfly and look around you. You see a small pond to your right you see a bunch of mud further in to the garden, and hear someone crying for help from the mud slopes."];
const rosesButtons = ["Go look by the mud slopes to see if you can help the creature in need", "Go to look if there's any koi fish in the pond"];
const prankTexts = ["As you turn around the edge of the bush and enter the shadowed space, you at first don't find what you were looking for.", "Then! A large SPLASH! of muddy water hits you on top of your head, you look up and see a smirking little goblin hanging from a branch dangling his legs and a bucket.", '"Whoops" says the goblin laughing, and quickly jumps down and runs off.'];
const prankButtons = ["Go wash yourself off in the pond", "Go look for the furry thing you saw before"];
const mudTexts = ["As you get closer to the mud slopes you continue to hear a call for help, but it's more quiet now. You look around and fear the worst, did the creature get sucked in to the mud? There's no way to find out but to jump in and look for it.", "As you so fearlessly jump in the muddy slopes, you feel the cold mud drag you down and you barely can hold your head above it, and on top of it all, you don't see a creature in need... ", "And then, you look up, on the edge of the hole sits a small goblin, grinning wide as he's obviously enjoying the show."];
const mudButtons = ["Ask the goblin to help you up", "Use your flying power to help you get out of the mud and get to a safer place"];
const pondTexts = ["As you enjoy your stroll towards the pond, taking in the bees buzzing and the sun's warmth on your skin, you finally find yourself at the edge of the pond.", "You arrive at a pond. Heart beating, sweaty and panting. You look around, but it seems you got rid of the cat.", "You decide to jump in for a refreshing swim.", "What you didn't consider, was that the pond is almost covered in water lilies. As beautiful as they might be, they make it very hard to resurface as you've gone for a dive. You get under a water lily leaf and struggle to get up! You almost lose your conscious when...", "...suddenly a glittering koi fish finds you, puts you on its back and carries you to the surface.", 'Back on land, you thank the fish for saving your life. He replies "Never mind! But just so it does not happen again, I grant you the  ability to breathe under water! Use it well, you can only use it 24 hrs"', "You thank the fish once again and look around you where to proceed to..."];
const pondButtons = ["You are tired from all the adventure and see a nice green spot in the middle of the garden where you maybe can get some rest", "You can't wait to try your new power, you go for another swim and this time you can breathe under water and meet all the creatures that live there!"];
const catTexts = ["As you gaze around the garden you see the end of a  wiggling furry tail behind a big tree to your right. You start to realise that this was not a small furry creature, it was actually a cat! A friendly cat?", 'As you get closer to the wiggly tail, you see that the cat is fast asleep. "Good", you think. You might not have to find out if its a friend or foe...', "Until.. just as you passed it by, it opens one eye to look for the bird that just screeched, but it doesn't focus on the bird when it sees you!", "It licks its mouth and rises up from its nap."];
const catButtons = ["Run, as fast as you can!", "Stay and pet the cat"];
const goblinTexts = ["Uh oh... It seems that the goblin wasn't as friendly as you had hoped... *gulp*", "I'm sorry my friend, but game's over.", "Do you want to play again?"];
const endButtons = ["Yes", "No"];
const gameOverTexts = ["Thanks for playing!", "You can close this window."];
const cloverTexts = ["You come across a soft green patch of clover in the middle of the garden and decide to lie down for a nap.", "After a short while you wake up well rested and ready for new adventure. As you start to look around you, you notice one particularly green and glowy 4-leaf clover. You move a little closer and pick it up.", "Holding the clover in your hand, you feel a strong sense  run through you that this is a special clover. Suddenly, you hear a tiny voice. You look down and see a small ant talking to you, and you lean in.", '"That is a very special clover! Use it wisely, for it will bring you luck and help in any type of situation in this garden, when you need it. You can only use it once!.', "You thank the ant and put the clover in your pocket. Feeling ready for new adventure."];
const cloverButtons = ["Go left", "Go right"];
const appleTexts = ["You enjoy your swim a lot more this time. You notice there are several koi fish and you greet them all.", "After a while of swimming, you start feeling tired and especially hungry. You get out of the pond and start looking for something to eat.", "In front of you, you see a shiny red apple, look up and see it must have fallen from the apple tree. Grateful for that, you take a huge bite in the apple, as you hear someone laughing. It was the goblin again, but what's he laughing at? You look at the huge apple (remember you're 5-inch tall)... and see a big worm looking back at you! The goblin tricked you to take a bite in the apple.", "Grunting and spitting, you start walking again..."];
const appleButtons = ["Continue walking into the garden to look for food", "Look for food in the outskirts of the garden"];
const catEndTexts = ["Uh oh... It seems that the cat wasn't as friendly as you had hoped... *gulp*", "I'm sorry my friend, but game's over.", "Do you want to play again?" ];

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
  const h1 = document.createElement('h1');
  h1.textContent = "Welcome to Goblin's Garden!";
  document.getElementById("title").appendChild(h1);

  createParagraphs(introTexts);
  createButtons(introButtons);
  option0.onclick = storyBricksStart;
}

/** Create as many paragraphs per story that's defined in it's specific paragraphs array */
function createParagraphs(paragraphs) {
  const container = document.getElementById('textContainer');

  container.innerHTML = '';

  for (const [index, p] of paragraphs.entries()) {
    const paragraph = document.createElement('p');
    paragraph.textContent = p;
    paragraph.id = `paragraph${index}`;
    container.appendChild(paragraph); 
  }
}

/** Create as many buttons per story that's defined in it's specific buttonTexts array */
function createButtons(buttonTexts) {
  const container = document.getElementById('buttonContainer');

  container.innerHTML = '';

  for (const [index, text] of buttonTexts.entries()) { // I need to be able to distinguish the options and set specific id's to assign buttons specific text
    const option = document.createElement('button');
    option.textContent = text;
    option.id = `option${index}`;
    container.appendChild(option);
  }
}

function loadPowers(powers) {
  const container = document.getElementById('powerBar');

  container.innerHTML = '';

  for (const [index, text] of powers.entries()) { // I need to be able to distinguish the powers and set specific id's to assign powers specific text
    const showPower = document.createElement('p');
    showPower.textContent = text;
    showPower.id = `power${index}`;
    container.appendChild(showPower);
  }
}
/** Displays the starting story with choices in the story */
function storyBricksStart() {
  //can I generate alt-texts on tags?
  storyImg.src = 'assets/images/enter.jpg';
  createParagraphs(enterTexts);
  title.innerHTML = ''; 
  createButtons(enterButtons);
  option0.onclick = storyDragonflyPower;
  option1.onclick = storyGoblinPrank;

}

function storyDragonflyPower() {
  storyImg.src = 'assets/images/roses.jpg';
  createParagraphs(rosesTexts);
  title.innerHTML = ''; 
  createButtons(rosesButtons);
  option0.onclick = storyMudSlope;
  option1.onclick = () => storyKoiPower(1); // want to show the next story differently depending on where you come from
  powers.push("Ability to fly for 24 hours"); // add power flying
  loadPowers(powers);
}

function storyGoblinPrank() {
  storyImg.src = 'assets/images/bush.jpg';
  createParagraphs(prankTexts);
  title.innerHTML = ''; 
  createButtons(prankButtons);
  option0.onclick = () => storyKoiPower(1);
  option1.onclick = storyCat;
}

function storyMudSlope() {
  storyImg.src = 'assets/images/mud.jpg';
  createParagraphs(mudTexts);
  createButtons(mudButtons);
  option0.onclick = storyGoblinGameOver;
  option1.onclick = () => storyPowerClover(1);
}

function storyKoiPower(version) {
  storyImg.src = 'assets/images/pond.jpg';
  createParagraphs(pondTexts);

  if (version === 1) {
    console.log("version 1");
    paragraph1.style.display = 'none'; // hides the second entry in the array because it is used when coming from another scene
  } else {
    console.log("Version 2");
    paragraph0.style.display = 'none';
  }

  createButtons(pondButtons);
  option0.onclick = () => storyPowerClover(2);
  option1.onclick = storyAppleWorm;
  powers.push("Ability to breathe under water");
  loadPowers(powers);  
}

function storyCat() {
  storyImg.src = 'assets/images/cat.jpg';
  createParagraphs(catTexts);
  createButtons(catButtons);
  option0.onclick = () => storyKoiPower(2);
  option1.onclick = storyCatGameOver;
}

function storyGoblinGameOver() {
  storyImg.src = 'assets/images/mudEnd.jpg';
  createParagraphs(goblinTexts);
  createButtons(endButtons);
  option0.onclick = main;
  option1.onclick = getGameOver;
  powerBar.innerHTML = '';
}

function storyPowerClover(version) {
  storyImg.src = 'assets/images/clover.jpg';
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
  //powers.pop(); //how do i get the specific index?
  powers.push("Magical four-leaf clover");
  loadPowers(powers);
}

function storyAppleWorm() {
  storyImg.src = 'assets/images/apple.jpg';
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
  storyImg.src = 'assets/images/catEnd.jpg';
  createParagraphs(catEndTexts);
  createButtons(endButtons);

  option0.onclick = main;
  option1.onclick = getGameOver;
  powerBar.innerHTML = '';
}

function storyWateringDevice() {
  // remove power breatheUnderWater
  // firstOption -> storySuccessGarden()
  // secondOption -> storyGreenhouse()
}

function storySneakySnail() {
  // firstOption -> storyGreenhouse()
  // secondOption -> storyPoisonGameOver()
}

function storySuccessGarden() {
  // Play again?
  // firstOption -> Yes
  // secondOption -> No
}

function storyPoisonGameOver() {
  // Play again?
  // firstOption -> Yes
  // secondOption -> No
}

function storyGreenhouse() {
  // firstOption -> storyPoisonGameOver()
  // secondOption -> storySuccessGarden()
}

function storyGreenhouseGameOver() {
  // Play again?
  // firstOption -> Yes
  // secondOption -> No
}

function getGameOver() {
  storyImg.src = 'assets/images/roses.jpg';
  createParagraphs(gameOverTexts);
}

