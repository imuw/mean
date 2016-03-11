
var nerd = require("./models/nerd");

	module.exports= function(app){
		app.get('/api/nerds', function(req,res){
			nerd.find(function(err,nerds){
				if(err)res.send(err);
				res.json(nerds);
			});
		});
		app.get("*",function(req,res){
			res.sendfile("./public/views/index.html");
		});
}

