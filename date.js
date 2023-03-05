// console.log(module);
// module.exports=getDate; this only passes a single function and here we are bound with it 
// module.exports.getDate=function (){ this and the line below is the very same thing
exports.getDate=function (){

let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
};

// module.exports.getDay=getDay;

// function getDay(){

// let today = new Date();
//     let options = {
//         weekday: "long"
//     };
//     return today.toLocaleDateString("en-US", options);
// };
// console.log(module.exports);{ getDate: [Function: getDate], getDay: [Function: getDay] } this will be the output just because we  have two functions