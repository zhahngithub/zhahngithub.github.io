//Main Data
var gameData = {
  Coins: 0,
  CoinsPerClick: 1,
  Factory1Cost: 10
}

//Main Game Thing
function generateCoins()
{
	gameData.Coins += gameData.CoinsPerClick
	document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
  document.getElementById("perFactory1Upgrade").innerHTML = "Upgrade Factory (Currently Level " + gameData.CoinsPerClick + ") Cost: " + gameData.Factory1Cost + " Coins"
}

function buyFactory1()
{
  if (gameData.Coins >= gameData.Factory1Cost) 
  {
    gameData.Coins -= gameData.Factory1Cost
    gameData.CoinsPerClick += 1
    gameData.Factory1Cost *= 2
	  document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
    document.getElementById("perFactory1Upgrade").innerHTML = "Upgrade Factory (Currently Level " + gameData.CoinsPerClick + ") Cost: " + gameData.Factory1Cost + " Coins"
  }
}

//Save Load Reset
function saveGame() {
	var gameSave = {
		gameData
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if (typeof savedGame.gameData !== "undefined") gameData = savedGame.gameData;
  generateCoins()
}

function resetGame() {
  if (confirm("why would u reset but welp here confirmation ig")) {
    var gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}

//Auto Stuff
window.onload = function() {
  loadGame();
}

var mainGameLoop = window.setInterval(function() 
{
  generateCoins()
}, 1000)