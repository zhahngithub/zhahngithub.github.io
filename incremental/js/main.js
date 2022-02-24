var gameData = {
  Coins: 0,
  CoinsPerClick: 1,
  Factory1Cost: 10
}

function generateCoins()
{
	gameData.Coins += gameData.CoinsPerClick
	document.getElementById("GeneratedCoins").innerHTML = gameData.Coins + " Coins"
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

function saveGame() {
	var gameSave = {
		gameData
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

var mainGameLoop = window.setInterval(function() 
{
  generateCoins()
}, 1000)