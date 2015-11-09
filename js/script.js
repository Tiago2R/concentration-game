$(document).ready(function() {
	var gamesBack = "6135f13d0b81a9479978d51977196bb2.jpeg"
    var games = ["GBA_Fire_Emblem_Box.jpg",
    			 "kirby-the-amazing-mirror-Coverart.jpg",
    			 "Links_Awakening_box.jpg",
    			 "metroid-ii-return-of-samus-2497.jpg",
    			 "pokemon-red-box.jpg",
    			 "Super_Circuit.jpg"];
    var cards = [];
    var isFirstClicked = true;
    var firstGameCliked;

    for (var i = 0; i < 12; i++) {
    	cards.push(Math.floor(Math.random() * 6));
    }

    alert(cards);

    $(".card").click(function() {
        if (isFirstClicked) {
        	firstGameCliked = this.id;
        }
        else {

        }
    });

});	