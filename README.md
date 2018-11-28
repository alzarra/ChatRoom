
Intro:
-install Node.js
-install Mangodb
-nav to traget folder
-use this command to install socket io "npm install socket.io"
-user this command to install mangodb "npm install mangodb"
-make sure you have a folder to store your data from mongod (create a folder in C:\data\db)
-run the command mongod from the bin form mongodb usually from (C:\Program Files\MongoDB\Server\4.0\bin) in my case
-now connect to the database by running "mongo" command {prepare from different command prompt} don't forget to run it from it place (C:\Program Files\MongoDB\Server\4.0\bin) in my case
- you can enalbe the monitoring by "db.enableFreeMonitoring()" command
-now switch to the database by "switch to db chat"
- now we need to grab the data from the chat from messages by using "db.messages.find()" method
- you can insert data into messages in Json way by "db.messages.insert({"name": "Ali", "message": "Hello there"})
- to make sure your data exist used "db.messages.find()" method and it will display the item 
- by using "db.messages.remove()" it will remove everything  (( BE CAREFUL )) [for new version use "db.messages.remove({})"

pre running
-run "node server.js" [ if you have error try to reinstall the mongodb by "npm install mongodb" ]
-make sure adblocker is off (might cause some problem = not establishing connecting to the port )
-in mongo database when you send you might notice the massage contain "\n" (THAT'S OK !)

difficulties
- installing node.js, mongodb, and run them
- using different broswers to test
- a lot of cross servering causing error
- every change I made have to copy it to the local server and run it
- restarting node.js server everytime I want to test something 
- chrome and firefox don't like each other (it's okey to send from firefox to chrome but not other way round) 
- a lot of spelling mistages or syantx errors

debuging
- mostly in the browser 
- text editor (search for the same valuable -> spelling mistakes)
- find() method in the database to make sure the data is there

working time: 
4 hours typing
3 hours testing
12 hours researching about solution
2 hours looking for fixes 

application name: ChatRoom
Author: Ali Alzarra
data: 11/28/2018

description: 
create a chating box allow the user to send and recive text not only induvially also allow multi user to use the application in the same time by sending and reciving text

features:
- Name, textarea (where to show the messages), input (where to type the messages)
- no send button, you can send just by clicking enter, (shift+enter not sending the message it's create a new line)
- the abilty to clear the input after sending the message but not the name.
- status of the user, showing error (if one of the name or input are empty), showing if the message is send or not
- error checking, if somthing went wrong the status will show what's going on
- status return to idel after 3 seconds 

helpful resources:
youtube.com
stockover.com
nodejs.com
mongodb.com
github.com
obs studio
digitalcitizen.life
socket.io
Michael Casen videos (FROM CLASS)


