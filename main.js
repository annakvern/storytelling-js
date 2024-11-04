//Sätt upp projektet likt dagens uppgift och skapa en funktion för varje "scen" i er berättelse som byter ut texten 
//på sidan och vad som händer när man klickar på knapparna - dvs vilken scen som ska visas härnäst.
window.addEventListener("DOMContentLoaded", main); 
const powers = [];

/** This is the starting point for the program */
function main() {
  loadEnterGarden();
  setupEventListeners();
  // startClock();
  // fetchUsersFromDatabase()
}

/** Register all events for buttons and other ui elements */
function setupEventListeners() {
  
  //zoom.onclick = toggleZoom;
  // sätt upp fler knappar så dom klickbara.
}

function loadEnterGarden() {
  const h1 = document.createElement('h1');
  h1.textContent = "Welcome to Goblin's Garden!";
  document.getElementById("story").appendChild(h1);
  
  const firstParagraph = document.createElement('p');
  firstParagraph.textContent = "A garden with beautiful flowers, delicious fruit and vegetables, slimey slugs and a haunted greenhouse. Never mind the tricky goblins that run around and try making a fuss of everything... You are a friendly 5&#34; or &quot; tall mini human-ish creature. You have all the attributes of a normal human, but if you're lucky, you might run into magic creatures in the garden that gives you powers. Please, my dear, enter!"
  document.getElementById("textContainer").appendChild(firstParagraph);
  // firstOption.onclick = storyBricksStart;
  // secondOption.style.display = 'none';
  // storyText.style.display = 'none';
}

/** Displays the starting story with choices in the story */
function storyBricksStart() {
  storyText.innerText = "You enter the garden on laid out bricks. You need to take large steps over the cracks between the bricks not to fall. It's a sunny and warm day with a light breeze. Enjoyable for most creatures, you see buzzing bees collecting nectar on the flowers, hard-working ants carrying material for their home, and oh - what's that? You think you saw something furry in the shadows behind the bush to the right.";
  storyText.style.display = 'block';
  welcome.style.display = 'none';
  firstOption.innerHTML = 'Stay in the sun and go smell the roses ahead';
  secondOption.innerHTML = 'Go look for the furry thing you saw';
  firstOption.onclick = storyDragonflyPower;
  secondOption.onclick = storyGoblinPrank;
  secondOption.style.display = 'block';
  storyImg.src = 'assets/images/enter.jpg';
  // container.innerHTML = ''; tömmer HTML
}

function storyDragonflyPower() {
  // add power flying
  // firstOption -> storyMudSlope()
  // secondOption -> storyKoiPower(1)
}

function storyGoblinPrank() {
  // firstOption -> storyKoiPower()
  // secondOption -> storyCat()
}

function storyMudSlope() {
  // firstOption -> storyGoblinGameOver()
  // secondOption -> storyPowerClover()
}

function storyKoiPower() {
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

