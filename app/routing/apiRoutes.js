//Variable for friend array data exports
var friends = require("../data/friends");

module.exports = function(app) {

//Link to display friend array data converted to json
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
 
//Friend score matching function
    app.post("/api/friends", function(req, res) {
        var userInfo = req.body;
        let totalDif = 0;
        let compatibleScores = [];
        let compatibleFriend;
        for (var i = 0; i < friends.length; i++) {
            for (var j = 0; j < friends[i].scores.length; j++) {
                totalDif += Math.abs(userInfo.scores[j] - friends[i].scores[j]);
            }
            compatibleScores.push(totalDif);
            totalDif = 0;
        }
        compatibleFriend = friends[compatibleScores.indexOf(Math.min(...compatibleScores))];
        friends.push(userInfo);
        res.send(compatibleFriend);
    });
};