
const userInfo = require('./information');
/*console.log(`Hi, i show your name is ${userInfo.firstName}  and you are at ${userInfo.campus} ! That is great.`);*/


let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hi, i show your name is ${userInfo.object.firstName}  and you are at ${userInfo.object.campus} ! That is great.`,
    e: "oO",
    T: "U "
}));


