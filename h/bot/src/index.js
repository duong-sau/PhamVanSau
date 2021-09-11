var express = require(‘express’);
var app = express();
var FBBotFramework = require(‘fb-bot-framework’);
// Initialize
var bot = new FBBotFramework({
  page_token: “THIS_IS_PAGE_TOKEN”,
  verify_token: “THIS_IS_VERIFY_TOKEN”
});
// Setup Express middleware for /webhook
app.use(‘/webhook’, bot.middleware());
// Setup listener for incoming messages
bot.on(‘message’, function(userId, message){
  bot.sendTextMessage(userId, “Echo Message: “ + message);
});
app.get(“/”, function (req, res){
  res.send(“hello world”);
});
//Make Express listening
app.listen(3000);