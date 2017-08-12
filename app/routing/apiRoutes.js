var myfriend = require('../data/friends');
var path= require('path');



module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friends);
 });



app.post('/api/friends', function(req, res){

	if(friends.length < 3){
		friends.push(req.body)
		res.json(true);
	} 
	else

	{
		console.log('no friends')
	}
});


};


