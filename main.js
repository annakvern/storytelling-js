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
const prankTexts = ["As you turn around the edge of the bush and enter the shadowed space, you at first don't find what you were looking for.", "Then! A large SPLASH! of muddy water hits you on top of your head, you look up and see a smirking little goblin hanging from a branch dangling his legs and a bucket.", '"Whoops" says the goblin, and quickly jumps down and runs off.'];
const prankButtons = ["Go wash yourself off in the pond", "Go look for the furry thing you saw before"];
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

  for (const p of paragraphs) {
    const paragraph = document.createElement('p');
    paragraph.textContent = p;
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

  //container.innerHTML = '';

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
  option0.onclick = () => storyKoiPower(2);
  option0.onclick = storyCat;
}

function storyMudSlope() {
  // firstOption -> storyGoblinGameOver()
  // secondOption -> storyPowerClover()
}

function storyKoiPower(version) {
  if (version === 1) {
    // paragraph1 =  As you enjoy your stroll towards the pond, taking in the bees buzzing and the sun's warmth on your skin, you finally find yourself at the edge of the pond. 
  } else {
    // paragraph1 =  You arrive at a pond. Heart beating, sweaty and panting. You look around, but it seems you got rid of the cat.
  }
  // add power breatheUnderWater
  // firstOption -> storyPowerClover()
  // secondOption -> storyAppleWorm()
}

function storyCat() {
  // firstOption -> storyKoiPower(2)
  // secondOption -> storyCatGameOver()
}

function storyGoblinGameOver() {
  // Play again?
  // firstOption -> Yes
  // secondOption -> No
}

function storyPowerClover() {
  // remove power flying
  // add power fourLeafClover
  // firstOption -> storyWateringDevice()
  // secondOption -> storySneakySnail()
}

function storyAppleWorm() {
  // remove power breatheUnderWater
  // firstOption -> storySneakySnail()
  // secondOption -> storySuccessGarden()
}

function storyCatGameOver() {
  // Play again?
  // firstOption -> Yes
  // secondOption -> No
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

