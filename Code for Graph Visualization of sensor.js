
var accelZ = msg.payload.d.acceleration_z;
var r = 0.0;
var b = 0.0;
var g = 0.0;
if (accelZ > 0) {
g = Math.round(accelZ * 25);
} else if (accelZ < 0) {
r = 255.0;
} else {
r = 104;
g = 109;
b = 115;
}
a = 1.0;
msg.eventOrCommandType = "color";
msg.payload = JSON.stringify({"d":{"r":r,"b":b,"g":g,"alpha":a}});
return msg;
