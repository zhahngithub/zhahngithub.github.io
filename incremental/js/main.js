//Main Data
var gameData = {
  Coins: 0,
  CoinsPerClick: 1,
  CoinsPerSecond: 1,
  Factory1Cost: 10,
  Factory1Level: 1,
  Factory2Cost: 100,
  Factory2Level: 1,
  AutoFactory1Cost: 10,
  AutoFactory1Level: 1
}

//Main Game Thing
function generateCoins()
{
	gameData.Coins += gameData.CoinsPerClick
  document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
  document.getElementById("CPC").innerHTML = gameData.CoinsPerClick + " Coins Per Click"
  document.getElementById("perFactory1Upgrade").innerHTML = "Upgrade Factory (Currently Level " + gameData.Factory1Level + ") Cost: " + gameData.Factory1Cost + " Coins"
  document.getElementById("perFactory2Upgrade").innerHTML = "Upgrade Factory (Currently Level " + gameData.Factory2Level + ") Cost: " + gameData.Factory2Cost + " Coins"
}

function generateCoinsPerSecond()
{
  gameData.Coins += gameData.CoinsPerSecond
  document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
  document.getElementById("CPS").innerHTML = gameData.CoinsPerSecond + " Coins Per Second"
  document.getElementById("perAutoFactory1Upgrade").innerHTML = "Upgrade AutoFactory (Currently Level " + gameData.AutoFactory1Level + ") Cost: " + gameData.AutoFactory1Cost + " Coins"
}

function buyFactory1()
{
  if (gameData.Coins >= gameData.Factory1Cost) 
  {
    gameData.Coins -= gameData.Factory1Cost
    gameData.CoinsPerClick += 1
    gameData.Factory1Cost *= 2
    gameData.Factory1Level += 1
	  document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
    document.getElementById("CPC").innerHTML = gameData.CoinsPerClick + " Coins Per Click"
    document.getElementById("perFactory1Upgrade").innerHTML = "Upgrade Factory (Currently Level " + gameData.Factory1Level + ") Cost: " + gameData.Factory1Cost + " Coins"
  }
}

function buyFactory2()
{
  if (gameData.Coins >= gameData.Factory2Cost) 
  {
    gameData.Coins -= gameData.Factory2Cost
    gameData.CoinsPerClick += 10
    gameData.Factory2Cost *= 2
    gameData.Factory2Level += 1
	  document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
    document.getElementById("CPC").innerHTML = gameData.CoinsPerClick + " Coins Per Click"
    document.getElementById("perFactory2Upgrade").innerHTML = "Upgrade Factory (Currently Level " + gameData.Factory2Level + ") Cost: " + gameData.Factory2Cost + " Coins"
  }
}

function buyAutoFactory1()
{
  if (gameData.Coins >= gameData.AutoFactory1Cost)
  {
    gameData.Coins -= gameData.AutoFactory1Cost
    gameData.CoinsPerSecond += 5
    gameData.AutoFactory1Cost *= 2
    gameData.AutoFactory1Level += 1
    document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
    document.getElementById("CPS").innerHTML = gameData.CoinsPerSecond + " Coins Per Second"
    document.getElementById("perAutoFactory1Upgrade").innerHTML = "Upgrade AutoFactory (Currently Level " + gameData.AutoFactory1Level + ") Cost: " + gameData.AutoFactory1Cost + " Coins"
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
  generateCoinsPerSecond()
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
  generateCoinsPerSecond()
}, 1000)