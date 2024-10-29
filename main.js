//Sätt upp projektet likt dagens uppgift och skapa en funktion för varje "scen" i er berättelse som byter ut texten 
//på sidan och vad som händer när man klickar på knapparna - dvs vilken scen som ska visas härnäst.
window.addEventListener("DOMContentLoaded", main); 
const power = "";

/** This is the starting point for the program */
function main() {
  // setupEventListeners();
  // startClock();
  // fetchUsersFromDatabase()
}

/** Register all events for buttons and other ui elements */
function setupEventListeners() {
  //burgerMenu.onclick = toggleHeaderOpen;
  //zoom.onclick = toggleZoom;
  // sätt upp fler knappar så dom klickbara.
}

function storyBricksStart() {
  // firstOption -> storyDragonflyPower()
  // secondOption -> storyGoblinPrank()
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

