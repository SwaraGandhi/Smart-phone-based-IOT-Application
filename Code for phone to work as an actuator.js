var accelZ = msg.payload.d.acceleration_z;
var r = 0.0;
var b = 0.0;
var g = 0.0;
if (accelZ > 0) {

//g = 255.0;
r = 178;
g = 102;
b = 255;
} else if (accelZ < 0) {
//r = 255.0;
r = 102;
g = 255;
b = 102;
} else {
r = 104;
g = 109;
b = 115;
}
a = 1.0;
msg.eventOrCommandType = "color";
msg.payload = JSON.stringify({"d":{"r":r,"b":b,"g":g,"alpha":a}});
return msg;
msg.eventOrCommandType = "text";
msg.payload = JSON.stringify({"d":{"text":"Received touch message from APP"}});
return msg;
msg.eventOrCommandType = "light";
msg.payload = JSON.stringify({"d":{"text":"Received light message"}});
return msg;
msg.eventOrCommandType = "alert";
msg.payload = JSON.stringify({"d":{"text":"Final Exam is on it's way 8o8o"}});
return msg;
msg.eventOrCommandType = "text";
msg.payload = JSON.stringify({"d":{"text":"Received text message"}});
return msg;
var accelerationZ = msg.payload.d.acceleration_z;
var isAlreadySwitchedOn = context.get('isAlreadySwitchedOn')|| false;
if (accelerationZ < 0) {
if (!isAlreadySwitchedOn) {
isAlreadySwitchedOn = true;
msg.eventOrCommandType = "light";
msg.payload = JSON.stringify({"d":{"text":"Received light on message"}});
}
} else {
if (isAlreadySwitchedOn) {

isAlreadySwitchedOn = false;
msg.eventOrCommandType = "light";
msg.payload = JSON.stringify({"d":{"text":"Received light off message"}});
}
}
context.set('isAlreadySwitchedOn', isAlreadySwitchedOn);
return msg;
