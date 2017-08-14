var friends = require('../data/friends');
var path= require('path');



module.exports = function(app){

	app.get('/api/friends', function(req, res){
     res.json(friends);

 });



app.post('/api/friends',  function(req, res){
  console.log(req.body)
	var animalMatch = {
		name: '',
		photo:'',
		playerReference: 1000
	}
	var playerdata = req.body;
	var playerScore = playerdata.score;
	// To get the player score from survey page

	var totalplayerdiffrence = 0;
	for(var i = 0; i < friends.length; i ++){
		console.log(friends[i])
		totalplayerdiffrence =0;
		for( var m=0; m < playerScore; m++){
			totalplayerdiffrence += Math.abs(parseInt(playerScore[m]) - parseInt(friends[i].score[m]));
			if (totalplayerdiffrence <= animalMatch.playerReference){
				animalMatch.name = friends[i].name;
				animalMatch.photo= friends[i].photo;
				animalMatch.playerReference = totalplayerdiffrence;
			}
		}
	}
	friends.push(playerdata);
		res.json({status:"OK",animalMatch});

});


};
