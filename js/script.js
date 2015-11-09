$(document).ready(function() {
	var gameBack = "6135f13d0b81a9479978d51977196bb2.jpeg"
    var games = ["GBA_Fire_Emblem_Box.jpg",
    			 "kirby-the-amazing-mirror-Coverart.jpg",
    			 "Links_Awakening_box.jpg",
    			 "metroid-ii-return-of-samus-2497.jpg",
    			 "pokemon-red-box.jpg",
    			 "Super_Circuit.jpg"];
    var cards;
    var isFirstClicked;
    var firstGameCliked;
    var randomGames;
	var matches;
    var isWaiting;

    initialize();

    $(".card").click(function() {
    	if (!isWaiting) {
	    	gameClicked = this.id;

	    	changeImage(gameClicked, games[cards[gameClicked]]);

	        if (isFirstClicked) {
	        	firstGameCliked = gameClicked;
	        	isFirstClicked = false;
	        }
	        else {
	        	if (cards[firstGameCliked] != cards[gameClicked]) {
	        		isWaiting = true;
	        		setTimeout(function(){
	        			changeImage(firstGameCliked, gameBack);
	        			changeImage(gameClicked, gameBack);
	        			isWaiting = false;
	        		}, 2000);
	        	}
	        	else {
	        		matches++;

	        		if (matches == 6) {
	        			alert("YOU WIN!");
	        			initialize();
	        		}
	        	}

	        	isFirstClicked = true;
	        }
    	}
    });

    function changeImage(id, img) {
    	$("#" + id + "> img").attr("src", "imgs/" + img);
    }

    function initialize() {
    	cards = [];
    	isFirstClicked = true;
    	randomGames = [];

    	for (var i = 0; i < 12; i++) {
	    	changeImage(i, gameBack);
	    }
    	
    	for (var i = 0; i < 6; i++) {
	    	randomGames.push(i);
	    	randomGames.push(i);
	    }

	    for (var i = 0; i < 12; i++) {
	    	var gameIndex = Math.floor(Math.random() * randomGames.length);
	    	cards.push(randomGames[gameIndex]);
	    	randomGames.splice(gameIndex, 1);
	    }

	    matches = 0;
    	isWaiting = false;
    }
});	