var mongo = require('mongodb').MongoClient,
	client = require('socket.io').listen(8080).sockets;

mongo.connect('mongodb://127.0.0.1/chat', function(err, db){
	if(err) throw err;

	client.on('connection', function(socket) {

		var col = db.collection('messages'),
			sendStatus = function(s){
				socket.emit('status', s);
			};

		// emit all messages ( to emit the message that typed not all ones in the database)
		col.find().limit(100).sort({_id: 1}).toArray(function(err, res){
			if(err) throw err;
			socket.emit('output', res);
		});

		// wait for input 
		socket.on('input', function(data){
			var name = data.name,
				message = data.message,
				whitespacePattern = /^\s*$/; // common reguletion -- to prevent the white space

			if(whitespacePattern.test(name) || whitespacePattern.test(message)) {
				//console.log('invalid');
				sendStatus('Name and message is required.');
			} else {
				col.insert({name: name, message: message}, function(){
				//console.log('Inserted');
					//socket.emit('input');
					sendStatus({
						message: "message sent",
						clear: true
					});
			});
			}

			

		})
	});
});